// lec-frases-data.js - Generador de frases LingoCat v1.0
// Cobreix 100% de categories de emoji-data.js + botiga-data.js

const FRASES_DATA = {
  "frases": [
    // Dificultat 1 - Bàsic
    {"id": "p1_1", "text": "El {persona} mira el {objecte}", "dificultat": 1, "categories": ["persona", "objecte"]},
    {"id": "p1_2", "text": "La {persona} troba el {objecte} a {lloc}", "dificultat": 1, "categories": ["persona", "objecte", "lloc"]},
    {"id": "p1_3", "text": "El {animal} corre per {natura}", "dificultat": 1, "categories": ["animal", "natura"]},
    {"id": "p1_4", "text": "La {persona} escolta {musica}", "dificultat": 1, "categories": ["persona", "musica"]},
    {"id": "p1_5", "text": "El {persona} està {emocio} avui", "dificultat": 1, "categories": ["persona", "emocio"]},
    {"id": "p1_6", "text": "Fa {clima} a {lloc}", "dificultat": 1, "categories": ["clima", "lloc"]},
    {"id": "p1_7", "text": "El {persona} va a {lloc} amb el {transport}", "dificultat": 1, "categories": ["persona", "lloc", "transport"]},
    {"id": "p1_8", "text": "La {persona} juga a {esport}", "dificultat": 1, "categories": ["persona", "esport"]},
    {"id": "p1_9", "text": "El {persona} treballa de {professio}", "dificultat": 1, "categories": ["persona", "professio"]},
    {"id": "p1_10", "text": "La {persona} porta {roba}", "dificultat": 1, "categories": ["persona", "roba"]},
    
    // Dificultat 1 - Nou: Números, Colors, Gestos
    {"id": "p1_11", "text": "El {persona} compta fins al {numeros}", "dificultat": 1, "categories": ["persona", "numeros"]},
    {"id": "p1_12", "text": "La {persona} pinta de color {colors}", "dificultat": 1, "categories": ["persona", "colors"]},
    {"id": "p1_13", "text": "El {persona} fa el gest {gestos}", "dificultat": 1, "categories": ["persona", "gestos"]},

    // Dificultat 2 - Combinacions
    {"id": "p2_1", "text": "El {animal} dorm sota el {objecte}", "dificultat": 2, "categories": ["animal", "objecte"]},
    {"id": "p2_2", "text": "La {persona} fotografia el {animal} a {natura}", "dificultat": 2, "categories": ["persona", "animal", "natura"]},
    {"id": "p2_3", "text": "El {persona} toca {musica} amb el {objecte}", "dificultat": 2, "categories": ["persona", "musica", "objecte"]},
    {"id": "p2_4", "text": "La {persona} se sent {emocio} amb el {clima}", "dificultat": 2, "categories": ["persona", "emocio", "clima"]},
    {"id": "p2_5", "text": "El {persona} arregla el {transport}", "dificultat": 2, "categories": ["persona", "transport"]},
    {"id": "p2_6", "text": "La {persona} guanya a {esport} a {lloc}", "dificultat": 2, "categories": ["persona", "esport", "lloc"]},
    {"id": "p2_7", "text": "El {professio} ajuda a la {persona} a {lloc}", "dificultat": 2, "categories": ["professio", "persona", "lloc"]},
    {"id": "p2_8", "text": "La {persona} compra {roba} a {lloc}", "dificultat": 2, "categories": ["persona", "roba", "lloc"]},
    {"id": "p2_9", "text": "El {animal} amaga el {objecte} a {natura}", "dificultat": 2, "categories": ["animal", "objecte", "natura"]},
    {"id": "p2_10", "text": "La {persona} canta {musica} amb {emocio}", "dificultat": 2, "categories": ["persona", "musica", "emocio"]},

    // Dificultat 2 - Nou: Números, Colors, Gestos
    {"id": "p2_11", "text": "El {numeros} {objecte} de color {colors} cau a {lloc}", "dificultat": 2, "categories": ["numeros", "objecte", "colors", "lloc"]},
    {"id": "p2_12", "text": "La {persona} fa {gestos} quan veu el {colors}", "dificultat": 2, "categories": ["persona", "gestos", "colors"]},

    // Dificultat 3 - Més complex
    {"id": "p3_1", "text": "El {persona} llegeix amb el {objecte} a {lloc}", "dificultat": 3, "categories": ["persona", "objecte", "lloc"]},
    {"id": "p3_2", "text": "La {persona} balla {musica} sota la {natura}", "dificultat": 3, "categories": ["persona", "musica", "natura"]},
    {"id": "p3_3", "text": "El {animal} caça a {natura} amb {clima}", "dificultat": 3, "categories": ["animal", "natura", "clima"]},
    {"id": "p3_4", "text": "La {persona} està {emocio} per la {professio}", "dificultat": 3, "categories": ["persona", "emocio", "professio"]},
    {"id": "p3_5", "text": "El {transport} va ràpid per {lloc}", "dificultat": 3, "categories": ["transport", "lloc"]},
    {"id": "p3_6", "text": "La {persona} entrena {esport} cada dia", "dificultat": 3, "categories": ["persona", "esport"]},
    {"id": "p3_7", "text": "El {professio} repara el {objecte}", "dificultat": 3, "categories": ["professio", "objecte"]},
    {"id": "p3_8", "text": "La {persona} tria {roba} per la festa", "dificultat": 3, "categories": ["persona", "roba"]},
    {"id": "p3_9", "text": "El {animal} juga amb el {objecte} a {lloc}", "dificultat": 3, "categories": ["animal", "objecte", "lloc"]},
    {"id": "p3_10", "text": "La {persona} grava {musica} al {objecte}", "dificultat": 3, "categories": ["persona", "musica", "objecte"]},

    // Dificultat 3 - Nou: Números, Colors, Gestos
    {"id": "p3_11", "text": "El {persona} aixeca {numeros} dits fent {gestos}", "dificultat": 3, "categories": ["persona", "numeros", "gestos"]},
    {"id": "p3_12", "text": "La {persona} combina {roba} de color {colors}", "dificultat": 3, "categories": ["persona", "roba", "colors"]},

    // Dificultat 4 - Avançat
    {"id": "p4_1", "text": "El {persona} celebra amb {emocio} a {lloc}", "dificultat": 4, "categories": ["persona", "emocio", "lloc"]},
    {"id": "p4_2", "text": "La {persona} viatja amb el {transport} sota el {clima}", "dificultat": 4, "categories": ["persona", "transport", "clima"]},
    {"id": "p4_3", "text": "El {animal} dorm a {natura} quan fa {clima}", "dificultat": 4, "categories": ["animal", "natura", "clima"]},
    {"id": "p4_4", "text": "La {persona} ensenya {esport} als nens", "dificultat": 4, "categories": ["persona", "esport"]},
    {"id": "p4_5", "text": "El {professio} treballa amb el {objecte} a {lloc}", "dificultat": 4, "categories": ["professio", "objecte", "lloc"]},
    {"id": "p4_6", "text": "La {persona} prova {roba} nova a {lloc}", "dificultat": 4, "categories": ["persona", "roba", "lloc"]},
    {"id": "p4_7", "text": "El {persona} escolta {musica} i està {emocio}", "dificultat": 4, "categories": ["persona", "musica", "emocio"]},
    {"id": "p4_8", "text": "La {persona} cuida el {animal} a {lloc}", "dificultat": 4, "categories": ["persona", "animal", "lloc"]},
    {"id": "p4_9", "text": "El {animal} corre quan veu el {transport}", "dificultat": 4, "categories": ["animal", "transport"]},
    {"id": "p4_10", "text": "La {persona} pinta {natura} amb el {objecte}", "dificultat": 4, "categories": ["persona", "natura", "objecte"]},

    // Dificultat 4 - Nou: Números, Colors, Gestos
    {"id": "p4_11", "text": "El {persona} fa {gestos} amb {numeros} mans de color {colors}", "dificultat": 4, "categories": ["persona", "gestos", "numeros", "colors"]},

    // Dificultat 5 - Màxim
    {"id": "p5_1", "text": "El {persona} i el {persona} van a {lloc} amb {transport}", "dificultat": 5, "categories": ["persona", "persona", "lloc", "transport"]},
    {"id": "p5_2", "text": "La {persona} toca {musica} mentre el {animal} juga", "dificultat": 5, "categories": ["persona", "musica", "animal"]},
    {"id": "p5_3", "text": "El {professio} repara el {transport} sota el {clima}", "dificultat": 5, "categories": ["professio", "transport", "clima"]},
    {"id": "p5_4", "text": "La {persona} porta {roba} i escolta {musica}", "dificultat": 5, "categories": ["persona", "roba", "musica"]},
    {"id": "p5_5", "text": "El {animal} amaga el {objecte} a {natura} amb {clima}", "dificultat": 5, "categories": ["animal", "objecte", "natura", "clima"]},
    {"id": "p5_6", "text": "La {persona} està {emocio} i balla {musica}", "dificultat": 5, "categories": ["persona", "emocio", "musica"]},
    {"id": "p5_7", "text": "El {professio} ensenya {esport} a {lloc}", "dificultat": 5, "categories": ["professio", "esport", "lloc"]},
    {"id": "p5_8", "text": "La {persona} fotografia {natura} amb el {objecte}", "dificultat": 5, "categories": ["persona", "natura", "objecte"]},
    {"id": "p5_9", "text": "El {animal} dorm a {lloc} mentre fa {clima}", "dificultat": 5, "categories": ["animal", "lloc", "clima"]},
    {"id": "p5_10", "text": "La {persona} i el {persona} juguen a {esport} a {lloc}", "dificultat": 5, "categories": ["persona", "persona", "esport", "lloc"]},

    // Dificultat 5 - Nou: Números, Colors, Gestos
    {"id": "p5_11", "text": "El {persona} compta {numeros} coses de color {colors} fent {gestos}", "dificultat": 5, "categories": ["persona", "numeros", "colors", "gestos"]}
  ]
};
