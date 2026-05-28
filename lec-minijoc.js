// lec-minijoc.js
// Lògica del minijoc d'emoji LEC

let categoriesActives = [];
let categoria1 = null;
let categoria2 = null;
let emoji1 = null;
let emoji2 = null;

// Inicialitza el joc
function iniciarMinijoc() {
    // Selecciona 2 categories aleatòries diferents
    const totesCategories = Object.keys(CATEGORIES_EMOJI).filter(cat => CATEGORIES_EMOJI[cat].length > 0);
    categoria1 = totesCategories[Math.floor(Math.random() * totesCategories.length)];

    do {
        categoria2 = totesCategories[Math.floor(Math.random() * totesCategories.length)];
    } while (categoria2 === categoria1);

    // Agafa 1 emoji aleatori de cada categoria
    const emojis1 = CATEGORIES_EMOJI[categoria1];
    const emojis2 = CATEGORIES_EMOJI[categoria2];

    emoji1 = emojis1[Math.floor(Math.random() * emojis1.length)];
    emoji2 = emojis2[Math.floor(Math.random() * emojis2.length)];

    // Mostra al DOM
    document.getElementById('emoji1').textContent = emoji1;
    document.getElementById('emoji2').textContent = emoji2;
    document.getElementById('cat1').textContent = categoria1;
    document.getElementById('cat2').textContent = categoria2;

    // Neteja input
    document.getElementById('resposta').value = '';
    document.getElementById('feedback').textContent = '';
}

// Cerca dades completes d'un emoji
function buscarEmojiData(emoji) {
    return EMOJI_DATA.find(e => e.emoji === emoji);
}

// Valida la resposta de l'usuari
function validarResposta() {
    const resposta = document.getElementById('resposta').value.toLowerCase().trim();
    const data1 = buscarEmojiData(emoji1);
    const data2 = buscarEmojiData(emoji2);

    if (!data1 ||!data2) {
        document.getElementById('feedback').textContent = 'Error carregant dades';
        return;
    }

    // Comprova si la resposta conté paraules clau de tots dos emojis
    const paraules1 = data1.para_frases.map(p => p.toLowerCase());
    const paraules2 = data2.para_frases.map(p => p.toLowerCase());

    const teParaula1 = paraules1.some(p => resposta.includes(p));
    const teParaula2 = paraules2.some(p => resposta.includes(p));

    const feedback = document.getElementById('feedback');

    if (teParaula1 && teParaula2) {
        feedback.textContent = '✅ Molt bé! Frase correcta';
        feedback.style.color = 'green';
        setTimeout(iniciarMinijoc, 1500); // Següent ronda
    } else {
        feedback.textContent = `❌ Prova de nou. Pistes: ${data1.nom_cat} + ${data2.nom_cat}`;
        feedback.style.color = 'red';
    }
}

// Botó nova ronda
function novaRonda() {
    iniciarMinijoc();
}

// Carrega la primera ronda quan s'obre la pàgina
window.addEventListener('DOMContentLoaded', iniciarMinijoc);
