/* ===== LINGOEMOJICAT - MAIN.JS FINAL v3 ===== */

const App = {
  lang: 'ca',
  diccionariDesbloquejat: [],
  tipActual: null,
  miniYoko: { score: 0, round: 0, currentEmoji: null, options: [] }
};

document.addEventListener('DOMContentLoaded', () => {
  carregarEstat();
  mostrarTip();
  setLang('ca');
});

// ===== IDIOMES =====
const textos = {
  ca: { title: "LingoEmojiCat", gremio: "Gremi", biblioteca: "Biblioteca", diccionari: "Diccionari", mini: "Mini Yoko", lectura: "Lectura", lecturaDesc: "Genera una lectura de ~23 minuts amb el Parlantito", tips: "Tips", botiga: "Botiga", botigaDesc: "Compra packs per desbloquejar més diccionari", tornar: "← Tornar", puntuacio: "Puntuació", ronda: "Ronda", següent: "Següent", biblioTitol: "Biblioteca de Lectures", tipSegüent: "Següent Tip" },
  es: { title: "LingoEmojiCat", gremio: "Gremio", biblioteca: "Biblioteca", diccionari: "Diccionario", mini: "Mini Yoko", lectura: "Lectura", lecturaDesc: "Genera una lectura de ~23 minutos con el Parlantito", tips: "Tips", botiga: "Tienda", botigaDesc: "Compra packs para desbloquear más diccionario", tornar: "← Volver", puntuacio: "Puntuación", ronda: "Ronda", següent: "Siguiente", biblioTitol: "Biblioteca de Lecturas", tipSegüent: "Siguiente Tip" },
  en: { title: "LingoEmojiCat", gremio: "Guild", biblioteca: "Library", diccionari: "Dictionary", mini: "Mini Yoko", lectura: "Reading", lecturaDesc: "Generate a ~23-minute reading with Parlantito", tips: "Tips", botiga: "Shop", botigaDesc: "Buy packs to unlock more dictionary", tornar: "← Back", puntuacio: "Score", ronda: "Round", següent: "Next", biblioTitol: "Reading Library", tipSegüent: "Next Tip" }
};

function setLang(lang) {
  App.lang = lang;
  document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
  event?.target?.classList.add('active');
  const t = textos;
  document.getElementById('title').textContent = t.title;
  document.getElementById('btnGremio').textContent = t.gremio;
  document.getElementById('btnLectura').textContent = t.lectura;
  document.getElementById('btnTips').textContent = t.tips;
  document.getElementById('btnBotiga').textContent = t.botiga;
  document.getElementById('gremioTitle').textContent = t.gremio;
  document.getElementById('btnBiblioteca').textContent = t.biblioteca;
  document.getElementById('btnDiccionari').textContent = t.diccionari;
  document.getElementById('btnMini').textContent = t.mini;
  document.getElementById('lecturaTitle').textContent = t.lectura;
  document.getElementById('lecturaDesc').textContent = t.lecturaDesc;
  document.getElementById('tipsTitle').textContent = t.tips;
  document.getElementById('botigaTitle').textContent = t.botiga;
  document.getElementById('botigaDesc').textContent = t.botigaDesc;
}

// ===== NAVEGACIÓ =====
function showPanel(id) {
  hidePanels();
  document.getElementById('menuPrincipal').classList.add('hidden');
  document.getElementById(id + 'Panel').classList.remove('hidden');
  if(id === 'tips') mostrarTip();
  if(id === 'botiga') cargarBotiga();
}

function hidePanels() {
  document.getElementById('menuPrincipal').classList.remove('hidden');
  document.querySelectorAll('#gremioPanel, #lecturaPanel, #tipsPanel, #botigaPanel').forEach(p => p.classList.add('hidden'));
}

// ===== GREMI =====
function obrirGremi() {}

function obrirBiblioteca() {
  if(typeof LECTURA_CONTENT === 'undefined') {
    alert('Biblioteca en construcció');
    return;
  }
  const nivell = App.lang === 'ca'? 1 : App.lang === 'es'? 2 : 3;
  const lectures = LECTURA_CONTENT[nivell];
  const lectura = lectures[Math.floor(Math.random() * lectures.length)];
  document.getElementById('lecturaContent').innerHTML = `
    <h3>${textos[App.lang].biblioTitol}</h3>
    <p style="line-height:1.8; font-size:1.05rem;">${lectura[App.lang]}</p>
    <button class="parlantito-btn" onclick="llegirEnVeuAlta()">🔊 Parlantito</button>
    <button class="btn btn-back" onclick="location.reload()" style="margin-top:1rem;">${textos[App.lang].tornar}</button>
  `;
  showPanel('lectura');
}

function obrirDiccionari() {
  if(typeof LEC_EMOJI_DATA === 'undefined') {
    alert('Diccionari en construcció');
    return;
  }
  let html = '<h3>Diccionari</h3><div class="grid">';
  const desbloquejats = ['base',...App.diccionariDesbloquejat];
  LEC_EMOJI_DATA.forEach(cat => {
    if(desbloquejats.includes(cat.id)) {
      html += `<div class="btn" onclick="mostrarDetallDiccionari('${cat.id}')"><span class="emoji">${cat.icon || '📖'}</span>${cat.nom[App.lang] || cat.nom.ca}</div>`;
    }
  });
  html += '</div>';
  document.getElementById('gremioPanel').innerHTML = html + `<button class="btn btn-back" onclick="location.reload()">${textos[App.lang].tornar}</button>`;
}

function mostrarDetallDiccionari(catId) {
  const cat = LEC_EMOJI_DATA.find(c => c.id === catId);
  if(!cat) return;
  let html = `<h3>${cat.nom[App.lang] || cat.nom.ca}</h3><div class="grid">`;
  cat.items.forEach(item => {
    html += `<div class="btn"><span class="emoji">${item.emoji}</span>${item.paraula[App.lang] || item.paraula.ca}</div>`;
  });
  html += '</div>';
  document.getElementById('gremioPanel').innerHTML = html + `<button class="btn btn-back" onclick="obrirDiccionari()">${textos[App.lang].tornar}</button>`;
}

// ===== MINI YOKO =====
function iniciarMinijoc() {
  App.miniYoko = { score: 0, round: 0, currentEmoji: null, options: [] };
  seguentRondaMiniYoko();
}

function seguentRondaMiniYoko() {
  if(App.miniYoko.round >= 10) { finalitzarMiniYoko(); return; }
  if(typeof LEC_EMOJI_DATA === 'undefined') { alert('Dades del minijoc no carregades'); return; }

  const catsDisponibles = LEC_EMOJI_DATA.filter(c => c.id === 'base' || App.diccionariDesbloquejat.includes(c.id));
  const cat = catsDisponibles[Math.floor(Math.random() * catsDisponibles.length)];
  const item = cat.items[Math.floor(Math.random() * cat.items.length)];
  App.miniYoko.currentEmoji = item;
  App.miniYoko.round++;

  let opcions = [item.paraula[App.lang] || item.paraula.ca];
  while(opcions.length < 4) {
    const catRand = catsDisponibles[Math.floor(Math.random() * catsDisponibles.length)];
    const itemRand = catRand.items[Math.floor(Math.random() * catRand.items.length)];
    const paraula = itemRand.paraula[App.lang] || itemRand.paraula.ca;
    if(!opcions.includes(paraula)) opcions.push(paraula);
  }
  opcions = opcions.sort(() => Math.random() - 0.5);

  let html = `<h3>Mini Yoko</h3><p>${textos[App.lang].ronda}: ${App.miniYoko.round}/10 | ${textos[App.lang].puntuacio}: ${App.miniYoko.score}</p><div style="font-size: 5rem; text-align:center; margin:2rem 0;">${item.emoji}</div><div class="grid">`;
  opcions.forEach(op => { html += `<div class="btn" onclick="respostaMiniYoko('${op}')">${op}</div>`; });
  html += '</div>';
  document.getElementById('gremioPanel').innerHTML = html;
}

function respostaMiniYoko(resposta) {
  const correcta = App.miniYoko.currentEmoji.paraula[App.lang] || App.miniYoko.currentEmoji.paraula.ca;
  if(resposta === correcta) App.miniYoko.score += 10;
  seguentRondaMiniYoko();
}

function finalitzarMiniYoko() {
  document.getElementById('gremioPanel').innerHTML = `<h3>Mini Yoko - Fi!</h3><p style="font-size:2rem; text-align:center;">${textos[App.lang].puntuacio}: ${App.miniYoko.score}</p><button class="btn" onclick="iniciarMinijoc()">${textos[App.lang].següent}</button><button class="btn btn-back" onclick="location.reload()">${textos[App.lang].tornar}</button>`;
}

// ===== LECTURA 23 MIN =====
function generarLectura() {
  if(typeof generarTextLectura!== 'function') {
    document.getElementById('lecturaContent').innerHTML = '<p>Parlantito en construcció</p>';
    return;
  }
  let text = '';
  text += `<p>${generarTextLectura(1, App.lang)}</p>`;
  text += `<p>${generarTextLectura(1, App.lang)}</p>`;
  text += `<p>${generarTextLectura(2, App.lang)}</p>`;
  text += `<p>${generarTextLectura(2, App.lang)}</p>`;
  text += `<p>${generarTextLectura(3, App.lang)}</p>`;
  text += `<p>${generarTextLectura(3, App.lang)}</p>`;
  document.getElementById('lecturaContent').innerHTML = `${text}<button class="parlantito-btn" onclick="llegirEnVeuAlta()">🔊 Parlantito</button>`;
  showPanel('lectura');
}

function llegirEnVeuAlta() {
  const text = document.getElementById('lecturaContent').innerText;
  if('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = App.lang === 'ca'? 'ca-ES' : App.lang === 'es'? 'es-ES' : 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  } else {
    alert('El teu navegador no suporta Parlantito');
  }
}

// ===== TIPS ROTATIUS v3 =====
function mostrarTip() {
  if(typeof TIPS_DATA === 'undefined') {
    document.getElementById('tipActual').textContent = 'Tips en construcció';
    return;
  }

  const categories = ['gramatica', 'vocabulari', 'cultura'];
  const categoria = categories[Math.floor(Math.random() * categories.length)];
  const nivell = App.lang === 'ca'? 1 : App.lang === 'es'? 2 : 3;

  const tips = TIPS_DATA[categoria].filter(t => t.nivell <= nivell);
  App.tipActual = tips[Math.floor(Math.random() * tips.length)];

  const trad = App.tipActual[App.lang] || App.tipActual.ca;
  document.getElementById('tipActual').innerHTML = `<strong>${trad.titol}</strong><br>${trad.text}`;
}

function siguienteTip() {
  mostrarTip();
}

// ===== BOTIGA =====
function cargarBotiga() {
  const grid = document.getElementById('botigaGrid');
  grid.innerHTML = '';
  if(typeof BOTIGA_EMOJI_DATA === 'undefined') {
    grid.innerHTML = '<p>Botiga en construcció</p>';
    return;
  }
  BOTIGA_EMOJI_DATA.forEach(pack => {
    const desbloquejat = App.diccionariDesbloquejat.includes(pack.id);
    const btn = document.createElement('div');
    btn.className = 'btn' + (desbloquejat? ' desbloquejat' : '');
    btn.innerHTML = `<span class="emoji">${pack.emoji}</span>${pack.nom[App.lang] || pack.nom.ca}`;
    btn.onclick = () => comprarPack(pack);
    grid.appendChild(btn);
  });
}

function comprarPack(pack) {
  if(App.diccionariDesbloquejat.includes(pack.id)) {
    alert('Ja tens aquest pack!');
    return;
  }
  App.diccionariDesbloquejat.push(pack.id);
  guardarEstat();
  cargarBotiga();
  alert(`Desbloquejat: ${pack.nom[App.lang] || pack.nom.ca}!`);
}

// ===== LOCALSTORAGE =====
function guardarEstat() {
  localStorage.setItem('lec_desbloquejats', JSON.stringify(App.diccionariDesbloquejat));
}

function carregarEstat() {
  const guardat = localStorage.getItem('lec_desbloquejats');
  if(guardat) App.diccionariDesbloquejat = JSON.parse(guardat);
}

// ===== SERVICE WORKER =====
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(console.error);
}