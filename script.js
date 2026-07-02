const removeAccents = (str) => {
    return str.replace(/[ÁÀÄÂ]/gi, 'A')
              .replace(/[ÉÈËÊ]/gi, 'E')
              .replace(/[ÍÌÏÎ]/gi, 'I')
              .replace(/[ÓÒÖÔ]/gi, 'O')
              .replace(/[ÚÙÜÛ]/gi, 'U');
};


const dbEquipos = {
    "REAL MADRID": [
        { name: "COURTOIS", rating: 90, positions: ["POR"]},
        { name: "LUNIN", rating: 80, positions: ["POR"]},
        { name: "FRAN GONZALEZ", rating: 65, positions: ["POR"]},
        { name: "MILITAO", rating: 84, positions: ["DFC"]},
        { name: "RUDIGER", rating: 84, positions: ["DFC"]},
        { name: "FRAN GARCIA", rating: 77, positions: ["LI"]},
        { name: "MENDY", rating: 81, positions: ["LI"]},
        { name: "ALEXANDER-ARNOLD", rating: 85, positions: ["LD"]},
        { name: "HUIJSEN", rating: 81, positions: ["DFC"]},
        { name: "ASENCIO", rating: 78, positions: ["DFC", "LD"]},
        { name: "CARRERAS", rating: 81, positions: ["LI"]},
        { name: "BELLINGHAM", rating: 89, positions: ["MCO", "MC"]},
        { name: "CAMAVINGA", rating: 81, positions: ["MCD", "MC", "LI"]},
        { name: "VALVERDE", rating: 89, positions: ["MC", "LD", "ED", "MCD"]},
        { name: "THIAGO PITARCH", rating: 68, positions: ["MC", "MCD", "MCO"]},
        { name: "TCHOUAMENI", rating: 84, positions: ["MCD", "MC", "DFC"]},
        { name: "ARDA GULER", rating: 83, positions: ["MC", "MCO", "ED"]},
        { name: "MASTANTUONO", rating: 77, positions: ["ED"]},
        { name: "VINICIUS", rating: 89, positions: ["EI", "DC"]},
        { name: "MBAPPE", rating: 91, positions: ["DC", "EI"]},
        { name: "RODRYGO", rating: 84, positions: ["EI", "DC", "ED"]},
        { name: "BRAHIM DIAZ", rating: 81, positions: ["ED"]},
        { name: "GONZALO GARCIA", rating: 81, positions: ["DC"]}

    ],
    "BARCELONA": [
        { name: "JOAN GARCIA", rating: 86, positions: ["POR"]},
        { name: "SZCZESNY", rating: 83, positions: ["POR"]},
        { name: "CUBARSI", rating: 83, positions: ["DFC"]},
        { name: "ERIC GARCIA", rating: 83, positions: ["DFC", "LD"]},
        { name: "ARAUJO", rating: 81, positions: ["DFC"]},
        { name: "CHRISTENSEN", rating: 80, positions: ["MCD", "DFC"]},
        { name: "BALDE", rating: 83, positions: ["LI"]},
        { name: "GERARD MARTIN", rating: 78, positions: ["DFC", "LI"]},
        { name: "KOUNDE", rating: 86, positions: ["LD"]},
        { name: "JOAO CANCELO", rating: 84, positions: ["LD", "LI"]},
        { name: "MARC BERNAL", rating: 75, positions: ["MCD", "MC"]},
        { name: "CASADO", rating: 78, positions: ["MCD", "MC"]},
        { name: "PEDRI", rating: 90, positions: ["MC", "MCD", "MCO"]},
        { name: "DE JONG", rating: 87, positions: ["MC", "MCD", "MCO"]},
        { name: "GAVI", rating: 83, positions: ["MC", "MCD", "MCO"]},
        { name: "FERMIN LOPEZ", rating: 83, positions: ["MC", "MCO"]},
        { name: "DANI OLMO", rating: 84, positions: ["MCO", "MC"]},
        { name: "RAPHINHA", rating: 89, positions: ["EI", "MCO"]},
        { name: "LAMINE YAMAL", rating: 89, positions: ["ED"]},
        { name: "BARDGHJI", rating: 74, positions: ["ED"] },
        { name: "FERRAN TORRES", rating: 84, positions: ["EI", "DC"] }
        
    ],
    "ATLETICO DE MADRID": [
        { name: "OBLAK", rating: 88, positions: ["POR"] },
        { name: "MUSSO", rating: 80, positions: ["POR"] },
        { name: "HANCKO", rating: 83, positions: ["LI", "DFC"] },
        { name: "PUBILL", rating: 80, positions: ["DFC", "LD"] },
        { name: "LE NORMAND", rating: 81, positions: ["DFC"] },
        { name: "GIMENEZ", rating: 83, positions: ["DFC"] },
        { name: "RUGGERI", rating: 78, positions: ["LI"] },
        { name: "MARCOS LLORENTE", rating: 85, positions: ["LD", "MC"] },
        { name: "NAHUEL MOLINA", rating: 77, positions: ["LD"] },
        { name: "PABLO BARRIOS", rating: 83, positions: ["MC", "MCD"] },
        { name: "JOHNNY CARDOSO", rating: 80, positions: ["MCD", "MC"] },
        { name: "KOKE", rating: 81, positions: ["MCD", "MC"] },
        { name: "OBED VARGAS", rating: 72, positions: ["MCD", "MC"] },
        { name: "RODRI MENDOZA", rating: 71, positions: ["MCD", "MC", "MCO"] },
        { name: "ALEX BAENA", rating: 82, positions: ["MC", "EI"] },
        { name: "NICO GONZALEZ", rating: 79, positions: ["EI", "MCO"] },
        { name: "THIAGO ALMADA", rating: 78, positions: ["MC", "EI", "MCO"] },
        { name: "GIULIANO SIMEONE", rating: 82, positions: ["ED"] },
        { name: "LOOKMAN", rating: 83, positions: ["DC"] },
        { name: "JULIAN ALVAREZ", rating: 86, positions: ["DC"] },
        { name: "SORLOTH", rating: 83, positions: ["DC"] }
        
    ],
    
    "VILLARREAL": [
        { name: "DIEGO CONDE", rating: 79, positions: ["POR"] },
        { name: "ARNAU TENAS", rating: 75, positions: ["POR"] },
        { name: "LUIZ JUNIOR", rating: 78, positions: ["POR"] },
        { name: "RENATO VEIGA", rating: 78, positions: ["DFC"] },
        { name: "KAMBWALA", rating: 72, positions: ["DFC"] },
        { name: "FOYTH", rating: 79, positions: ["DFC"] },
        { name: "PAU NAVARRO", rating: 74, positions: ["DFC", "LD"] },
        { name: "SERGI CARDONA", rating: 79, positions: ["LI"] },
        { name: "MOURIÑO", rating: 78, positions: ["LD"] },
        { name: "FREEMAN", rating: 73, positions: ["LD"] },
        { name: "SANTI COMESAÑA", rating: 79, positions: ["MC", "MCD"] },
        { name: "PAPE GUEYE", rating: 80, positions: ["MC", "MCD"] },
        { name: "BUCHANAN", rating: 76, positions: ["ED"] },
        { name: "MOLEIRO", rating: 82, positions: ["MCO", "EI"] },
        { name: "GERARD MORENO", rating: 81, positions: ["DC"] },
        { name: "AYOZE PEREZ", rating: 80, positions: ["DC", "MCO"] },
        { name: "NICOLAS PEPE", rating: 81, positions: ["ED", "DC"] },
        { name: "MIKAUTADZE", rating: 79, positions: ["DC", "MCO"] },
        { name: "OLUWASEYI", rating: 71, positions: ["DC"] },
        { name: "LOGAN COSTA", rating: 77, positions: ["DFC"] }
    ],

    "REAL BETIS": [
        { name: "ALVARO VALLES", rating: 77, positions: ["POR"] },
        { name: "PAU LOPEZ", rating: 77, positions: ["POR"] },
        { name: "BELLERIN", rating: 76, positions: ["LD"] },
        { name: "LLORENTE", rating: 80, positions: ["DFC"] },
        { name: "NATAN", rating: 78, positions: ["DFC"] },
        { name: "BARTRA", rating: 79, positions: ["DFC"] },
        { name: "JUNIOR FIRPO", rating: 74, positions: ["LI"] },
        { name: "MARC ROCA", rating: 78, positions: ["MCD", "MC"] },
        { name: "ALTIMIRA", rating: 77, positions: ["MCD", "MC"] },
        { name: "RIQUELME", rating: 76, positions: ["MCD", "MC"] },
        { name: "FORNALS", rating: 81, positions: ["MC", "MCO"] },
        { name: "ISCO", rating: 84, positions: ["MC", "MCO"] },
        { name: "DEOSSA", rating: 75, positions: ["MC", "MCO", "MCD"] },
        { name: "FIDALGO", rating: 77, positions: ["MC", "MCO", "MCD"] },
        { name: "LO CELSO", rating: 81, positions: ["MC", "MCO"] },
        { name: "ANTONY", rating: 81, positions: ["ED"] },
        { name: "CHIMY AVILA", rating: 73, positions: ["DC", "ED"] },
        { name: "ABDE", rating: 80, positions: ["EI"] },
        { name: "CUCHO HERNANDEZ", rating: 79, positions: ["DC"] },
        { name: "AITOR RUIBAL", rating: 80, positions: ["ED", "LD"] },
    ],  
    
    "CELTA DE VIGO": [
        { name: "RADU", rating: 78, positions: ["POR"] },
        { name: "IVAN VILLAR", rating: 72, positions: ["POR"] },
        { name: "STARFELT", rating: 78, positions: ["DFC"] },
        { name: "MINGUEZA", rating: 80, positions: ["LD"] },
        { name: "CARREIRA", rating: 80, positions: ["LD"] },
        { name: "AIDOO", rating: 73, positions: ["DFC"] },
        { name: "ALVARO NUÑEZ", rating: 76, positions: ["LD", "DFC"] },
        { name: "JAVI RODRIGUEZ", rating: 76, positions: ["LD", "DFC"] },
        { name: "MARCOS ALONSO", rating: 79, positions: ["DFC", "LI"] },
        { name: "MORIBA", rating: 78, positions: ["MC", "MCD"] },
        { name: "VECINO", rating: 76, positions: ["MC", "MCD"] },
        { name: "MIGUEL ROMAN", rating: 74, positions: ["MC", "MCD"] },
        { name: "HUGO SOTELO", rating: 74, positions: ["MC", "MCD"] },
        { name: "WILLIOT SWEDBERG", rating: 75, positions: ["EI", "MCO"] },
        { name: "HUGO ALVAREZ", rating: 75, positions: ["EI"] },
        { name: "FER LOPEZ", rating: 73, positions: ["ED", "MCO"] },
        { name: "BORJA IGLESIAS", rating: 80, positions: ["DC"] },
        { name: "JUTGLA", rating: 75, positions: ["ED", "DC"] },
        { name: "IAGO ASPAS", rating: 81, positions: ["DC"] },
        { name: "PABLO DURAN", rating: 74, positions: ["DC"] }
    ],

    "REAL SOCIEDAD": [
        { name: "REMIRO", rating: 82, positions: ["POR"] },
        { name: "UNAI MARRERO", rating: 72, positions: ["POR"] },
        { name: "ZUBELDIA", rating: 77, positions: ["DFC"] },
        { name: "SERGIO GOMEZ", rating: 78, positions: ["LI"] },
        { name: "AIHEN MUÑOZ", rating: 74, positions: ["LI"] },
        { name: "JON ARAMBURU", rating: 77, positions: ["LD"] },
        { name: "ODRIOZOLA", rating: 73, positions: ["LD"] },
        { name: "BEÑAT TURRIENTES", rating: 76, positions: ["MC", "MCD"] },
        { name: "YANGEL HERRERA", rating: 79, positions: ["MC", "MCD"] },
        { name: "GORROTXA", rating: 77, positions: ["MC", "MCD"] },
        { name: "LUKA SUCIC", rating: 76, positions: ["MC", "MCO"] },
        { name: "CARLOS SOLER", rating: 78, positions: ["MC", "MCO"] },
        { name: "BRAIS MENDEZ", rating: 78, positions: ["MC", "MCO"] },
        { name: "PABLO MARIN", rating: 73, positions: ["MCO", "MC"] },
        { name: "ZAKHARYAN", rating: 73, positions: ["MCO", "ED"] },
        { name: "BARRENETXEA", rating: 78, positions: ["EI"] },
        { name: "GUEDES", rating: 78, positions: ["EI", "DC"] },
        { name: "KUBO", rating: 81, positions: ["ED"] },
        { name: "OYARZABAL", rating: 83, positions: ["DC"] },
        { name: "OSKARSSON", rating: 74, positions: ["DC"] },
        { name: "KARRIKABURU", rating: 67, positions: ["DC"] },
    ],

    "ATHLETIC BILBAO": [
        { name: "UNAI SIMON", rating: 84, positions: ["POR"] },
        { name: "ALEX PADILLA", rating: 69, positions: ["POR"] },
        { name: "VIVIAN", rating: 82, positions: ["DFC"] },
        { name: "PAREDES", rating: 78, positions: ["DFC"] },
        { name: "LAPORTE", rating: 82, positions: ["DFC"] },
        { name: "YERAY ALVAREZ", rating: 80, positions: ["DFC"] },
        { name: "ADAMA BOIRO", rating: 73, positions: ["LI"] },
        { name: "YURI BERCHICHE", rating: 79, positions: ["LI"] },
        { name: "JESUS ARESO", rating: 76, positions: ["LD"] },
        { name: "GOROSABEL", rating: 76, positions: ["LD"] },
        { name: "VESGA", rating: 72, positions: ["MC", "MCD"] },
        { name: "JAUREGIZAR", rating: 80, positions: ["MC", "MCD"] },
        { name: "BEÑAT PRADOS", rating: 77, positions: ["MC", "MCD"] },
        { name: "RUIZ DE GALARRETA", rating: 80, positions: ["MCD", "MC"] },
        { name: "OIHAN SANCET", rating: 82, positions: ["MCO", "MC"] },
        { name: "UNAI GOMEZ", rating: 72, positions: ["MCO", "MC"] },
        { name: "NICO WILLIAMS", rating: 85, positions: ["EI"] },
        { name: "ROBERT NAVARRO", rating: 76, positions: ["EI", "ED"] },
        { name: "GURUZETA", rating: 78, positions: ["DC"] },
        { name: "IÑAKI WILLIAMS", rating: 81, positions: ["ED", "DC"] },
        { name: "BERENGUER", rating: 78, positions: ["EI", "ED", "MCO"] }
    ],
    
    "VALENCIA": [
        { name: "DIMITRIEVSKI", rating: 77, positions: ["POR"] },
        { name: "DIAKHABY", rating: 76, positions: ["DFC"] },
        { name: "CESAR TARREGA", rating: 75, positions: ["DFC"] },
        { name: "COPETE", rating: 74, positions: ["DFC"] },
        { name: "GAYA", rating: 77, positions: ["LI"] },
        { name: "JESUS VAZQUEZ", rating: 71, positions: ["LI"] },
        { name: "FOULQUIER", rating: 72, positions: ["LD"] },
        { name: "PEPELU", rating: 76, positions: ["MC", "MCD"] },
        { name: "GUIDO RODRIGUEZ", rating: 76, positions: ["MC", "MCD"] },
        { name: "SANTAMARIA", rating: 75, positions: ["MC", "MCD"] },
        { name: "JAVI GUERRA", rating: 76, positions: ["MC", "MCO","MCD"] },
        { name: "ANDRE ALMEIDA", rating: 74, positions: ["MCO", "MC"] },
        { name: "UGRINIC", rating: 75, positions: ["MCO", "MC"] },
        { name: "RAMAZANI", rating: 76, positions: ["EI"] },
        { name: "DANJUMA", rating: 75, positions: ["EI", "DC"] },
        { name: "LUIS RIOJA", rating: 77, positions: ["ED"] },
        { name: "HUGO DURO", rating: 77, positions: ["DC"] },
        { name: "UMAR SADIQ", rating: 76, positions: ["DC"] },
        { name: "DANI RABA", rating: 74, positions: ["MCO", "ED", "DC"] },
        { name: "DIEGO LOPEZ", rating: 77, positions: ["ED", "EI"] }
    ],

    "SEVILLA": [
        { name: "VLACHODIMOS", rating: 79, positions: ["POR"] },
        { name: "OSO", rating: 72, positions: ["LI"] },
        { name: "SUAZO", rating: 74, positions: ["LI"] },
        { name: "KIKE SALAS", rating: 76, positions: ["DFC", "LI"] },
        { name: "MARCAO", rating: 74, positions: ["DFC"] },
        { name: "FABIO CARDOSO", rating: 74, positions: ["DFC"] },
        { name: "GATTONI", rating: 71, positions: ["DFC"] },
        { name: "NIANZOU", rating: 71, positions: ["DFC"] },
        { name: "ANDRES CASTRIN", rating: 72, positions: ["DFC"] },
        { name: "JUANLU SANCHEZ", rating: 75, positions: ["LD"] },
        { name: "CARMONA", rating: 77, positions: ["DFC", "LD"] },
        { name: "AGOUME", rating: 76, positions: ["MC","MCD"] },
        { name: "SOW", rating: 75, positions: ["MC", "MCD"] },
        { name: "JOAN JORDAN", rating: 74, positions: ["MC", "MCD"] },
        { name: "MANU BUENO", rating: 71, positions: ["MC"] },
        { name: "EJUKE", rating: 76, positions: ["EI"] },
        { name: "ALEXIS SANCHEZ", rating: 75, positions: ["DC", "MCO"] },
        { name: "PEQUE", rating: 74, positions: ["DC","MCO"] },
        { name: "ISAAC ROMERO", rating: 74, positions: ["DC"] },
        { name: "AKOR ADAMS", rating: 75, positions: ["DC"] },
        { name: "RUBEN VARGAS", rating: 78, positions: ["ED", "EI", "MCO"] }
    ],

    "RAYO VALLECANO": [
        { name: "BATALLA", rating: 79, positions: ["POR"] },
        { name: "DANI CARDENAS", rating: 72, positions: ["POR"] },
        { name: "PEP CHAVARRIA", rating: 78, positions: ["LI"] },
        { name: "NOBEL MENDY", rating: 75, positions: ["LI", "DFC"] },
        { name: "LEJEUNE", rating: 79, positions: ["DFC"] },
        { name: "RATIU", rating: 80, positions: ["LD"] },
        { name: "FRAN PEREZ", rating: 74, positions: ["LD"] },
        { name: "BALLIU", rating: 75, positions: ["LD", "LI"] },
        { name: "GUMBAU", rating: 72, positions: ["MCD","MC"] },
        { name: "UNAI LOPEZ", rating: 76, positions: ["MCD","MC"] },
        { name: "OSCAR VALENTIN", rating: 77, positions: ["MCD","MC"] },
        { name: "PEDRO DIAZ", rating: 75, positions: ["MC", "MCO"] },
        { name: "PATHE CISS", rating: 77, positions: ["MCD", "DFC"] },
        { name: "NTEKA", rating: 70, positions: ["MCO", "DC"] },
        { name: "ALVARO GARCIA", rating: 81, positions: ["EI", "DC"] },
        { name: "ISI PALAZON", rating: 80, positions: ["MCO", "DC"] },
        { name: "CAMELLO", rating: 73, positions: ["DC"] },
        { name: "ALEMAO", rating: 74, positions: ["DC"] },
        { name: "JORGE DE FRUTOS", rating: 81, positions: ["ED","DC"] }
    ],

    "RACING SANTANDER": [
        { name: "EZKIETA", rating: 69, positions: ["POR"] },
        { name: "ERIKSSON", rating: 66, positions: ["POR"] },
        { name: "JORGE SALINAS", rating: 67, positions: ["LI"] },
        { name: "MARIO GARCIA", rating: 67, positions: ["LI"] },
        { name: "FACUNDO GONZALEZ", rating: 68, positions: ["DFC"] },
        { name: "JAVI CASTRO", rating: 71, positions: ["DFC"] },
        { name: "MANU HERNANDO", rating: 68, positions: ["DFC"] },
        { name: "MANTILLA", rating: 68, positions: ["LD"] },
        { name: "DAMIAN RODRIGUEZ", rating: 72, positions: ["MCD","MC"] },
        { name: "MAGUETTE GUEYE", rating: 66, positions: ["MCD","MC"] },
        { name: "IÑIGO SERNA", rating: 67, positions: ["MC", "MCD"] },
        { name: "GUSTAVO PUERTA", rating: 71, positions: ["MC", "MCD"] },
        { name: "ALDASORO", rating: 70, positions: ["MC", "MCD"] },
        { name: "PEIO CANALES", rating: 68, positions: ["MC", "MCO"] },
        { name: "IÑIGO VICENTE", rating: 77, positions: ["EI", "MCO"] },
        { name: "SULEIMAN", rating: 68, positions: ["EI"] },
        { name: "ANDRES MARTIN", rating: 77, positions: ["ED"] },
        { name: "VILLALIBRE", rating: 74, positions: ["DC"] },
        { name: "ARANA", rating: 69, positions: ["DC"] },
    ],

    "GETAFE": [
        { name: "DAVID SORIA", rating: 80, positions: ["POR"] },
        { name: "ABDEL ABQAR", rating: 74, positions: ["DFC", "LD"] },
        
    ],
        
};
// Generamos automáticamente las listas planas para Ahorcado, Blur, Sobres, etc.
const QWERTY_LAYOUT = ["QWERTYUIOP", "ASDFGHJKLÑ", "ZXCVBNM"];
const players = [];
const playerStats = {};
const tierLists = { bronce: [], plata: [], oro: [], diamante: [], platino: [] };

// NUEVA FUNCIÓN: Asigna el Tier en base a la media automáticamente
function calculateTier(rating) {
    if (rating >= 84) return 'platino';
    if (rating >= 80) return 'diamante';
    if (rating >= 77) return 'oro';
    if (rating >= 72) return 'plata';
    return 'bronce';
}

const savedUpgrades = getUpgrades(); // Cargar mejoras guardadas

Object.keys(dbEquipos).forEach(club => {
    dbEquipos[club].forEach(p => {
        players.push(p.name);
        
        // Sumamos el rating base + las evoluciones guardadas que tenga el jugador
        let currentRating = p.rating + (savedUpgrades[p.name] || 0);
        let autoTier = calculateTier(currentRating); // El tier se actualiza dinámicamente si mejora
        
        playerStats[p.name] = { rating: currentRating, positions: p.positions, tier: autoTier, club: club };
        tierLists[autoTier].push(p.name);
    });
});

function getPlayerTier(playerName) { return playerStats[playerName] ? playerStats[playerName].tier : 'bronce'; }
function getPlayerRating(playerName) { return playerStats[playerName] ? playerStats[playerName].rating : 75; }
function getPlayerPositions(playerName) { return playerStats[playerName] ? playerStats[playerName].positions : ["Desconocida"]; }
const roscoAlphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
const roscoQuestions = [
    { letra: "A", preguntas: [
        { respuesta: "ANCELOTTI", hint: "Apellido del único entrenador en ganar las 5 grandes ligas." },
        { respuesta: "ANSU FATI", hint: "Nombre y apellido del jugador que heredó el 10 de Messi en el Barça." },
        { respuesta: "ARDA GULER", hint: "Nombre y apellido del jugador más caro actual de Turquía." },
        { respuesta: "ALISSON", hint: "Nombre del portero ganador del trofeo Yashin en 2019." },
        { respuesta: "ASTON VILLA", hint: "Nombre del equipo que juega en el Villa Park." }
    ]},
    { letra: "B", preguntas: [
        { respuesta: "BELLINGHAM", hint: "Apellido del jugador que ganó el trofeo Kopa en 2023." },
        { respuesta: "BENZEMA", hint: "Apellido del ganador del Balón de Oro 2022." },
        { respuesta: "BETIS", hint: "Equipo español subcampeón de la Conference League en la temporada 2024/2025." },
        { respuesta: "BONMATI", hint: "Apellido de la jugadora con más Ballon d'Or de la historia." },
        { respuesta: "BAYER LEVERKUSEN", hint: "Ganador de la Bundesliga alemana en la temporada 2023/2024." }
    ]},
    { letra: "C", preguntas: [
        { respuesta: "CARVAJAL", hint: "Apellido del 'Pitbull' de Leganés." },
        { respuesta: "COURTOIS", hint: "Apellido del MVP de la final de Champions 2021/2022." },
        { respuesta: "CRISTIANO", hint: "Nombre del máximo goleador de la historia." },
        { respuesta: "CONTE", hint: "Apellido del actual entrenador del Nápoles." },
        { respuesta: "CHELSEA", hint: "Ganador de la Copa Mundial de Clubes en la temporada 2025/2026." }
    ]},
    { letra: "D", preguntas: [
        { respuesta: "DANI OLMO", hint: "Nombre y apellido del fichaje del Barcelona en 2024 proveniente del Leipzig." },
        { respuesta: "DE BRUYNE", hint: "Apellido del mediocentro belga del Napoles." },
        { respuesta: "DI MARIA", hint: "Apellido del 'Fideo'." },
        { respuesta: "DORTMUND", hint: "Club alemán famoso por su 'Muro Amarillo'." },
        { respuesta: "DYBALA", hint: "Apellido de 'La Joya' que jugó con Messi y Cristiano." }
    ]},
    { letra: "E", preguntas: [
        { respuesta: "ENDRICK", hint: "Nombre del jugador estrella del Lyon cedido por el Madrid." },
        { respuesta: "ETO'O", hint: "Apellido del delantero camerunés que ganó el triplete con Barça e Inter consecutivamente." },
        { respuesta: "EMERY", hint: "Apellido del actual entrenador del Aston Villa." },
        { respuesta: "EDERSON", hint: "Nombre del portero del Fenerbahçe conocido por su excelente juego de pies." },
        { respuesta: "EINTRACHT", hint: "Nombre del equipo de Frankfurt que invadió el Camp Nou en la Europa League 2021/2022." }
    ]},
    { letra: "F", preguntas: [
        { respuesta: "FALCAO", hint: "Apellido del 'Tigre' colombiano." },
        { respuesta: "FEYENOORD", hint: "Nombre del club de los Países Bajos en Rotterdam." },
        { respuesta: "FLICK", hint: "Apellido del entrenador del Barça en 2024 tras Xavi." },
        { respuesta: "FORLAN", hint: "Apellido de la bota de oro uruguaya que jugó en el Villarreal y Atlético de Madrid." },
        { respuesta: "FODEN", hint: "Apellido del canterano estrella actual del Manchester City." }
    ]},
    { letra: "G", preguntas: [
        { respuesta: "GAVI", hint: "Canterano proveninente de La Masía conocido por su garra y cordones desatados." },
        { respuesta: "GRIEZMANN", hint: "Apellido del máximo goleador histórico del Atlético de Madrid." },
        { respuesta: "GIRONA", hint: "Nombre del equipo revelación de LaLiga 2023/2024." },
        { respuesta: "GYOKERES", hint: "Apellido del delantero del Arsenal conocido por su celebración de la máscara." },
        { respuesta: "GOL", hint: "Entrada del balón en la portería." }
    ]},
    { letra: "H", preguntas: [
        { respuesta: "HAALAND", hint: "Apellido del 'Androide' noruego." },
        { respuesta: "HARRY KANE", hint: "Nomnbre y apellido del jugador Bota de Oro 2023/2024." },
        { respuesta: "HIMNO", hint: " Composición que representa a un equipo o país que se reproduce antes del partido." },
        { respuesta: "HULL CITY", hint: "Club inglés apodado los 'Tigers'." },
        { respuesta: "HUMMELS", hint: "Apellido del central alemán que jugó en el Bayern y Borussia y se retiró en la Roma." }
    ]},
    { letra: "I", preguntas: [
        { respuesta: "INIESTA", hint: "Apellido del autor del gol que dio a España su primer Mundial." },
        { respuesta: "ISCO", hint: "Nombre del mago malagueño del Betis." },
        { respuesta: "INTER", hint: "Nombre del club subcampeón de la Champions en la temporada 2024/2025." },
        { respuesta: "IMMOBILE", hint: "Apellido del delantero italiano, bota de oro en 2020." },
        { respuesta: "IÑAKI", hint: "Nombre del mayor de los hermanos Williams." }
    ]},
    { letra: "J", preguntas: [
        { respuesta: "JOAQUIN", hint: "Nombre del eterno 17 del Betis." },
        { respuesta: "JUVENTUS", hint: "Nombre del club apodado 'Vecchia Signora'." },
        { respuesta: "JOAO FELIX", hint: "Nombre y apellido del Golden Boy 2019." },
        { respuesta: "JULIAN ALVAREZ", hint: "Nombre y apellido del jugador apodado 'La Araña'." },
        { respuesta: "JOBE", hint: "Nombre del hermano menor de los Bellingham." }
    ]},
    { letra: "K", preguntas: [
        { respuesta: "KROOS", hint: "Apellido del alemán que se retiró tras ganar la Champions en la temporada 2023/2024." },
        { respuesta: "KOPA", hint: "Nombre del trofeo que se otorga al mejor jugador joven del mundo." },
        { respuesta: "KUN AGUERO", hint: "Apodo y apellido del máximo goleador del Manchester City." },
        { respuesta: "KVARATSKHELIA", hint: "Apellido del extremo georgiano del PSG." },
        { respuesta: "KIMMICH", hint: "Apellido del líder del Bayern conocido por su mentalidad." }
    ]},
    { letra: "L", preguntas: [
        { respuesta: "LEWANDOWSKI", hint: "Apellido del máximo goleador de la selección de Polonia." },
        { respuesta: "LAMINE YAMAL", hint: "Nombre y apellido del jugador más joven en marcar en una Eurocopa." },
        { respuesta: "LIVERPOOL", hint: "Nombre del club con himno 'You'll Never Walk Alone'." },
        { respuesta: "LAUTARO", hint: "Nombre dell 'Toro' argentino, capitán del Inter de Milán." },
        { respuesta: "LUKAKU", hint: "Apellido del delantero belga que ha pasado por muchos equipos italianos e ingleses." }
    ]},
    { letra: "M", preguntas: [
        { respuesta: "MESSI", hint: "Apellido del máximo ganador del Ballon D'or." },
        { respuesta: "MBAPPE", hint: "Apellido del fichaje estrella que fichó por el Real Madrid en 2024." },
        { respuesta: "MODRIC", hint: "Apellido del ganador del Balón de Oro en 2018." },
        { respuesta: "MALLORCA", hint: "Nombre del equipo balear que llegó a la final de la Copa del Rey en 2024." },
        { respuesta: "MAIGNAN", hint: "Apellido del portero titular del AC Milan y Francia." }
    ]},
    { letra: "N", preguntas: [
        { respuesta: "NEYMAR", hint: "Nombre de la 'N' de la MSN." },
        { respuesta: "NICO WILLIAMS", hint: "Nombre y apellido del jugador más caro del Athletic Club." },
        { respuesta: "NAPOLES", hint: "Nombre en español del club donde Maradona ganó dos Scudettos." },
        { respuesta: "NEUER", hint: "Apellido del portero alemán que revolucionó el puesto jugando como líbero." },
        { respuesta: "NIZA", hint: "Nombre del equipo de la Costa Azul francesa que suele pelear puestos europeos." }
    ]},
    { letra: "Ñ", preguntas: [
        { respuesta: "ESPAÑA", hint: "Nombre de la selección campeona de la Eurocopa 2024." },
        { respuesta: "IÑIGO", hint: "CONTIENE LA Ñ: Nombre del central ex-Barcelona que juega en el Al-Nassr." },
        { respuesta: "PEÑA", hint: " CONTIENE LA Ñ: Apellido del portero titular del Elche." },
    ]},
    { letra: "O", preguntas: [
        { respuesta: "OBLAK", hint: "FÁCIL: El guardián esloveno de la portería del Atlético de Madrid." },
        { respuesta: "ODEGAARD", hint: "MEDIA: Noruego que no triunfó en el Madrid pero es capitán del Arsenal." },
        { respuesta: "OSASUNA", hint: "MEDIA: Equipo de Pamplona que juega en el Estadio El Sadar." },
        { respuesta: "OLMO", hint: "DIFÍCIL: Apellido del jugador que salvó bajo palos un gol en la final de la Euro 2024." },
        { respuesta: "OPENDA", hint: "DIFÍCIL: Delantero belga, máximo goleador del RB Leipzig actualmente." }
    ]},
    { letra: "P", preguntas: [
        { respuesta: "PEDRI", hint: "FÁCIL: El joven talento canario, brújula del FC Barcelona." },
        { respuesta: "PELE", hint: "FÁCIL: 'O Rei', el único jugador en ganar 3 Mundiales." },
        { respuesta: "PALMER", hint: "MEDIA: La joven estrella del Chelsea apodada 'Cold' por su frialdad." },
        { respuesta: "PULISIC", hint: "DIFÍCIL: El 'Capitán América' que ahora brilla en el AC Milan." },
        { respuesta: "PAU CUBARSI", hint: "DIFÍCIL: El central adolescente que sorprendió al mundo con su salida de balón en el Barça." }
    ]},
    { letra: "Q", preguntas: [
        { respuesta: "QUINI", hint: "FÁCIL: 'El Brujo', mítico goleador del Sporting de Gijón y del Barça." },
        { respuesta: "QUERETARO", hint: "MEDIA: Club mexicano donde Ronaldinho pasó sus últimos años de profesional." },
        { respuesta: "QUARESMA", hint: "MEDIA: Jugador portugués famoso por sus centros y goles de 'trivela'." },
        { respuesta: "QUEIROZ", hint: "DIFÍCIL: Entrenador portugués que dirigió a los 'Galácticos' del Real Madrid." },
        { respuesta: "QUATTRINI", hint: "DIFÍCIL: Apellido de un antiguo defensor italiano del Calcio." }
    ]},
    { letra: "R", preguntas: [
        { respuesta: "RONALDO", hint: "FÁCIL: 'El Fenómeno' brasileño, ex de Barça, Madrid, Inter y Milán." },
        { respuesta: "RODRI", hint: "FÁCIL: Centrocampista español del City, MVP de la Euro 2024 y Balón de Oro en potencia." },
        { respuesta: "RAUL", hint: "MEDIA: El 'Eterno Capitán' del Real Madrid, máximo goleador antes de CR7." },
        { respuesta: "RODRYGO", hint: "MEDIA: Brasileño del Madrid famoso por sus goles milagrosos en Champions." },
        { respuesta: "RASHFORD", hint: "DIFÍCIL: El 10 del Manchester United y referente social en Inglaterra." }
    ]},
    { letra: "S", preguntas: [
        { respuesta: "SIMEONE", hint: "FÁCIL: El 'Cholo', el entrenador que cambió la historia moderna del Atlético." },
        { respuesta: "SALAH", hint: "FÁCIL: El 'Faraón' egipcio, leyenda máxima del Liverpool moderno." },
        { respuesta: "SUAREZ", hint: "MEDIA: Luis, el pistolero uruguayo que ahora juega con Messi en Miami." },
        { respuesta: "SANE", hint: "MEDIA: Extremo alemán del Bayern Múnich de gran velocidad." },
        { respuesta: "SORLOTH", hint: "DIFÍCIL: El delantero noruego que peleó el Pichichi 2024 y fichó por el Atlético." }
    ]},
    { letra: "T", preguntas: [
        { respuesta: "TER STEGEN", hint: "FÁCIL: El portero alemán y primer capitán del FC Barcelona." },
        { respuesta: "TCHOUAMENI", hint: "MEDIA: Pivote francés del Real Madrid." },
        { respuesta: "TOTTENHAM", hint: "MEDIA: Club inglés cuyo estadio es considerado el más moderno de Europa." },
        { respuesta: "THEO HERNANDEZ", hint: "DIFÍCIL: Lateral izquierdo francés, uno de los mejores del mundo en el Milán." },
        { respuesta: "THIAGO", hint: "DIFÍCIL: El mayor de los hermanos Alcántara, retirado en 2024." }
    ]},
    { letra: "U", preguntas: [
        { respuesta: "UNAI SIMON", hint: "FÁCIL: Portero titular de España campeón de la Euro 2024." },
        { respuesta: "UMTITI", hint: "MEDIA: Central francés campeón del mundo cuya rodilla truncó su carrera en el Barça." },
        { respuesta: "UDINESE", hint: "MEDIA: Club italiano conocido por descubrir talentos jóvenes." },
        { respuesta: "UNION BERLIN", hint: "DIFÍCIL: Club alemán humilde que llegó a jugar Champions en 2023." },
        { respuesta: "UWE SEELER", hint: "DIFÍCIL: Leyenda histórica del fútbol alemán y del Hamburgo." }
    ]},
    { letra: "V", preguntas: [
        { respuesta: "VINICIUS", hint: "FÁCIL: Estrella brasileña del Real Madrid, clave en las últimas Champions." },
        { respuesta: "VALENCIA", hint: "FÁCIL: Club que juega en el histórico Estadio de Mestalla." },
        { respuesta: "VILLARREAL", hint: "MEDIA: El 'Submarino Amarillo' que ganó la Europa League a hombros de Gerard Moreno." },
        { respuesta: "VLAHOVIC", hint: "DIFÍCIL: El potente 9 serbio de la Juventus." },
        { respuesta: "VALVERDE", hint: "DIFÍCIL: El 'Halcón' uruguayo, motor incansable del centro del campo blanco." }
    ]},
    { letra: "W", preguntas: [
        { respuesta: "WIRTZ", hint: "FÁCIL: La joven estrella alemana del Leverkusen de Xabi Alonso." },
        { respuesta: "WALKER", hint: "MEDIA: Kyle, el lateral más rápido de la Premier League." },
        { respuesta: "WOLVERHAMPTON", hint: "MEDIA: Equipo inglés conocido como los 'Wolves'." },
        { respuesta: "WATFORD", hint: "DIFÍCIL: Club inglés de la familia Pozzo que suele ser un equipo ascensor." },
        { respuesta: "WEMBLEY", hint: "DIFÍCIL: El templo del fútbol inglés donde se jugó la final de Champions 2024." }
    ]},
    { letra: "X", preguntas: [
        { respuesta: "XAVI", hint: "FÁCIL: El maestro del mediocampo español y ex entrenador del Barça." },
        { respuesta: "XABI ALONSO", hint: "MEDIA: Entrenador revelación que hizo historia con el Bayer Leverkusen." },
        { respuesta: "XHAKA", hint: "MEDIA: El líder suizo que fue el pulmón del Leverkusen campeón." },
        { respuesta: "XAVI SIMONS", hint: "DIFÍCIL: Joven estrella neerlandesa formada en la Masía que brilla en el Leipzig." },
        { respuesta: "XERCA", hint: "DIFÍCIL: Nombre coloquial o apellido de algún jugador histórico menor." }
    ]},
    { letra: "Y", preguntas: [
        { respuesta: "YASHIN", hint: "FÁCIL: La 'Araña Negra', único portero con Balón de Oro." },
        { respuesta: "YAMAL", hint: "FÁCIL: Apellido de Lamine, el chico récord del fútbol mundial." },
        { respuesta: "YESTE", hint: "MEDIA: Mítico mediapunta zurdo del Athletic Club de los años 2000." },
        { respuesta: "YAYA TOURE", hint: "DIFÍCIL: Portento físico marfileño que brilló en Barça y City." },
        { respuesta: "YIDNEKACHEW", hint: "DIFÍCIL: Apellido del 'padre' del fútbol africano (Tessema)." }
    ]},
    { letra: "Z", preguntas: [
        { respuesta: "ZIDANE", hint: "Apellido del autor de la volea de la Novena del Real Madrid." },
        { respuesta: "ZUBIMENDI", hint: "Apellido del pivote español del Arsenal." },
        { respuesta: "ZAMORA", hint: "Nombre del trofeo que recibe el portero menos goleado en España." },
        { respuesta: "ZLATAN", hint: "Nombre de pila de Ibrahimovic." },
        { respuesta: "ZOFF", hint: "Apellido del portero más veterano en ganar un Mundial (40 años)." }
    ]}
];

const timeMachineEvents = [
    { foto: "maradona1986", event: "La 'Mano de Dios' de Maradona a Inglaterra", year: 1986 },
    { foto: "iniesta2010", event: "El gol de Iniesta en la final de Sudáfrica", year: 2010 },
    { foto: "maracanazo1950", event: "El 'Maracanazo' de Uruguay ante Brasil", year: 1950 },
    { foto: "zidane2006", event: "El cabezazo de Zidane a Materazzi", year: 2006 },
    { foto: "mineirazo2014", event: "El histórico 1-7 de Alemania a Brasil (Mineirazo)", year: 2014 },
    { foto: "pele1970", event: "Pelé ganando su tercer y último Mundial", year: 1970 },
    { foto: "casillas2010", event: "La parada de Iker Casillas a Robben en la final", year: 2010 },
    { foto: "panenka1976", event: "El penalti original a lo Panenka en la final de la Eurocopa", year: 1976 },
    { foto: "vanpersie2014", event: "El cabezazo en plancha de Robin van Persie a España", year: 2014 },
    { foto: "kempes1978", event: "El primer Mundial ganado por la Argentina de Mario Kempes", year: 1978 },
    { foto: "zidane2002", event: "El gol de volea de Zidane en la final de Glasgow", year: 2002 },
    { foto: "estambul2005", event: "El 'Milagro de Estambul' (Liverpool remontando al AC Milan)", year: 2005 },
    { foto: "ramos2014", event: "El gol de Sergio Ramos en el minuto 93:48 (La Décima)", year: 2014 },
    { foto: "remontada2017", event: "La remontada histórica 6-1 del Barça al PSG", year: 2017 },
    { foto: "cristiano2018", event: "La chilena de Cristiano Ronaldo a la Juventus", year: 2018 },
    { foto: "iniesta2009", event: "El 'Iniestazo' en Stamford Bridge contra el Chelsea", year: 2009 },
    { foto: "bale2018", event: "La espectacular chilena de Gareth Bale en la final de Kiev", year: 2018 },
    { foto: "bayern1999", event: "La remontada en 3 minutos del Manchester United al Bayern en el Camp Nou", year: 1999 },
    { foto: "redondo2000", event: "El taconazo histórico de Redondo en Old Trafford", year: 2000 },
    { foto: "messi2004", event: "El debut oficial de Lionel Messi en Champions League", year: 2004 },
    { foto: "messi2017", event: "Messi enseñando su camiseta al Bernabéu tras marcar en el 92'", year: 2017 },
    { foto: "suarez2014", event: "El mordisco de Luis Suárez a Chiellini en el Mundial", year: 2014 },
    { foto: "cantona1995", event: "La patada de kung-fu de Éric Cantona a un aficionado", year: 1995 },
    { foto: "ronaldinho2005", event: "Ronaldinho saliendo aplaudido del Santiago Bernabéu", year: 2005 },
    { foto: "siuuu2013", event: "La famosa celebración del 'Siuuu' de Cristiano Ronaldo por primera vez", year: 2013 },
    { foto: "gerrard2014", event: "El resbalón fatal de Steven Gerrard ante el Chelsea", year: 2014 },
    { foto: "suarez2010", event: "La mano salvadora de Luis Suárez contra Ghana en cuartos del Mundial", year: 2010 },
    { foto: "casillasbeso2010", event: "El beso de Iker Casillas a Sara Carbonero en directo", year: 2010 },
    { foto: "cristiano2004", event: "El doloroso llanto de Cristiano tras perder la final de la Eurocopa", year: 2004 },
    { foto: "totti2017", event: "La retirada oficial y homenaje entre lágrimas de Francesco Totti", year: 2017 },
    { foto: "messi2012", event: "Los increíbles 91 goles de Messi en un solo año natural", year: 2012 },
    { foto: "pep2009", event: "El sextete histórico del FC Barcelona de Pep Guardiola", year: 2009 },
    { foto: "lewa2015", event: "Los 5 goles de Lewandowski en apenas 9 minutos", year: 2015 },
    { foto: "aguero2012", event: "El 'Agüerooooo' en el minuto 93:20 para ganar la Premier League", year: 2012 },
    { foto: "invencibles2004", event: "La temporada de 'Los Invencibles' del Arsenal de Wenger", year: 2004 },
    { foto: "cristiano2009", event: "La presentación galáctica de Cristiano Ronaldo en el Bernabéu", year: 2009 },
    { foto: "robertocarlos1997", event: "El golazo de falta con efecto imposible de Roberto Carlos a Francia", year: 1997 },
    { foto: "higuita1995", event: "El histórico escorpión de René Higuita en Wembley", year: 1995 },
    { foto: "maradona1984", event: "La llegada del 'Pelusa' Diego Armando Maradona al Napoli", year: 1984 },
    { foto: "united1999", event: "El histórico triplete del Manchester United de Sir Alex Ferguson", year: 1999 },
    { foto: "rooney2011", event: "La espectacular chilena de Rooney en el derbi de Manchester", year: 2011 },
    { foto: "rivaldo2001", event: "La chilena de Rivaldo desde fuera del área al Valencia en el último minuto", year: 2001 },
    { foto: "guti2010", event: "El taconazo de Guti a Benzema 'inventando el fútbol' en Riazor", year: 2010 },
    { foto: "zlatan2012", event: "La monumental chilena de Ibrahimovic a Inglaterra desde 30 metros", year: 2012 },
    { foto: "vanbasten1988", event: "El inolvidable gol de volea de Van Basten en la final de la Eurocopa", year: 1988 },
    { foto: "banks1970", event: "La parada imposible de Gordon Banks al cabezazo de Pelé", year: 1970 },
    { foto: "centenariazo2002", event: "El sorprendente 'Centenariazo' del Deportivo ante el Real Madrid", year: 2002 },
    { foto: "grecia2004", event: "La victoria histórica y sorpresiva de Grecia en la Eurocopa", year: 2004 },
    { foto: "cruyff1982", event: "El penalti indirecto original de Johan Cruyff con el Ajax", year: 1982 },
    { foto: "lamine2023", event: "El debut oficial del jovencísimo Lamine Yamal con la Selección Española", year: 2023 }
];

const elevenMatches = [
    {
        team: "REAL MADRID",
        desc: "Bayern VS Real Madrid (4-3) Vuelta de Cuartos de la Champions League 2025/2026.",
        xi: [
            [{ name: "VINICIUS", hint: "Brasileño" }, { name: "MBAPPE", hint: "Francés" }],
            [{ name: "ARDA GULER", hint: "Turco" }, { name: "VALVERDE", hint: "Uruguayo" }, { name: "BELLINGHAM", hint: "Inglés" }, { name: "BRAHIM DIAZ", hint: "Marroquí" }],
            [{ name: "MENDY", hint: "Francés" }, { name: "RUDIGER", hint: "Alemán" }, { name: "MILITAO", hint: "Brasileño" }, { name: "ALEXANDER-ARNOLD", hint: "Inglés" }],
            [{ name: "LUNIN", hint: "Ucraniano" }]
        ]
    },
    {
        team: "MÁLAGA",
        desc: "Borussia Dortmund VS Málaga (3-2) Vuelta de Cuartos de la Champions League 2012/2013.",
        xi: [
            [{ name: "BAPTISTA", hint: "Brasileño" }],
            [{ name: "DUDA", hint: "Portugués" }, { name: "ISCO", hint: "Español" }, { name: "Joaquín", hint: "Español" }],
            [{ name: "CAMACHO", hint: "Español" }, { name: "TOULALAN", hint: "Francés" }],
            [{ name: "ANTUNES", hint: "Portugués" }, { name: "SERGIO SANCHEZ", hint: "Español" }, { name: "DEMICHELIS", hint: "Argentino" }, { name: "JESUS GAMEZ", hint: "Español" }],
            [{ name: "CABALLERO", hint: "Argentino" }]
        ]
    },
    {
        team: "AJAX",
        desc: "Real Madrid VS Ajax (1-4) Vuelta de Octavos de la Champions League 2018/2019.",
        xi: [
            [{ name: "NERES", hint: "Brasileño" }, { name: "TADIC", hint: "Serbio" }, { name: "ZIYECH", hint: "Marroquí" }],
            [{ name: "DE JONG", hint: "Neerlandés" }, { name: "SCHONE", hint: "Danés" }, { name: "VAN DE BEEK", hint: "Neerlandés" }],
            [{ name: "TAGLIAFICO", hint: "Argentino" }, { name: "BLIND", hint: "Neerlandés" }, { name: "DE LIGT", hint: "Neerlandés" }, { name: "MAZRAOUI", hint: "Marroquí" }],
            [{ name: "ONANA", hint: "Camerunés" }]
        ]
    },
    {
        team:"ATLÉTICO DE MADRID",
        desc: "Olympique de Marsella VS Atlético de Madrid (0-3) Final de la Europa League 2017/2018.",
        xi: [
            [{ name: "DIEGO COSTA", hint: "Español" }, { name: "GRIEZMANN", hint: "Francés" }],
            [{ name: "KOKE", hint: "Español" }, { name: "SAUL ÑIGUEZ", hint: "Español" }, { name: "GABI", hint: "Español" }, { name: "CORREA", hint: "Argentino" }],
            [{ name: "LUCAS HERNANDEZ", hint: "Francés" }, { name: "GODIN", hint: "Uruguayo" }, { name: "GIMENEZ", hint: "Uruguayo" }, { name: "VRSALJKO", hint: "Croata" }],
            [{ name: "OBLAK", hint: "Esloveno" }]
        ]
    },
    {
        team:"REAL MADRID",
        desc: "Athletic de Bilbao VS Real Madrid (2-3) Jornada 4 de LaLiga League 1998/1999.",
        xi: [
            [{ name: "RAUL", hint: "Español" }, { name: "MIJATOVIC", hint: "Montenegrino" }],
            [{ name: "SAVIO", hint: "Brasileño" }, { name: "REDONDO", hint: "Argentino" }, { name: "SEEDORF", hint: "Holandés" }, { name: "KAREMBEU", hint: "Francés" }],
            [{ name: "ROBERTO CARLOS", hint: "Brasileño" }, { name: "IVAN CAMPO", hint: "Español" }, { name: "HIERRO", hint: "Español" }, { name: "PANUCCI", hint: "Italiano" }],
            [{ name: "ILLGNER", hint: "Alemán" }]
        ]
    },
    {
        team:"BARCELONA",
        desc: "Barcelona VS Sporting Portugal (2-0) Jornada 6 de la fase de grupos de la Champions 2017/2018.",
        xi: [
            [{ name: "ALCACER", hint: "Español" }, { name: "SUAREZ", hint: "Uruguayo" }, { name: "ALEIX VIDAL", hint: "Español" }],
            [{ name: "DENIS SUAREZ", hint: "Español" }, { name: "ANDRE GOMES", hint: "Portugués" }, { name: "RAKITIC", hint: "Croata" }],
            [{ name: "DIGNE", hint: "Francés" }, { name: "VERMAELEN", hint: "Belga" }, { name: "PIQUE", hint: "Español" }, { name: "SEMEDO", hint: "Portugués" }],
            [{ name: "CILLESSEN", hint: "Neerlandés" }]
        ]
    }
];

const premierPlayers = [
    { name: "DONNARUMMA", value: 45 }, { name: "GVARDIOL", value: 70 }, { name: "MARC GUEHI", value: 65 },
    { name: "RUBEN DIAS", value: 60 }, { name: "KHUSANOV", value: 35 }, { name: "STONES", value: 15 },
    { name: "AKE", value: 15 }, { name: "O'REILLY", value: 50 }, { name: "AIT-NOURI", value: 40 },
    { name: "MATHEUS NUNES", value: 45 }, { name: "RICO LEWIS", value: 32 }, { name: "RODRI", value: 65 },
    { name: "NICO GONZALEZ", value: 45 }, { name: "REIJNDERS", value: 60 }, { name: "KOVACIC", value: 15 },
    { name: "FODEN", value: 80 }, { name: "CHERKI", value: 65 }, { name: "BERNARDO SILVA", value: 27 },
    { name: "DOKU", value: 65 }, { name: "SAVINHO", value: 40 }, { name: "SEMENYO", value: 75 },
    { name: "HAALAND", value: 200 }, { name: "MARMOUSH", value: 60 },
    { name: "DAVID RAYA", value: 35 }, { name: "KEPA ARRIZABALAGA", value: 7 },
    { name: "SALIBA", value: 90 }, { name: "GABRIEL", value: 75 }, { name: "HINCAPIE", value: 50 },
    { name: "MOSQUERA", value: 35 }, { name: "CALAFIORI", value: 50 }, { name: "LEWIS-SKELLY", value: 35 },
    { name: "TIMBER", value: 70 }, { name: "BEN WHITE", value: 30 }, { name: "ZUBIMENDI", value: 80 },
    { name: "NORGAARD", value: 7 }, { name: "DECLAN RICE", value: 120 }, { name: "MIKEL MERINO", value: 30 },
    { name: "ODEGAARD", value: 65 }, { name: "EZE", value: 60 }, { name: "MARTINELLI", value: 45 },
    { name: "TROSSARD", value: 20 }, { name: "SAKA", value: 120 }, { name: "MADUEKE", value: 50 },
    { name: "DOWMAN", value: 20 }, { name: "GYOKERES", value: 65 }, { name: "HAVERTZ", value: 50 },
    { name: "GABRIEL JESUS", value: 20 }, { name: "ROBERT SANCHEZ", value: 22 }, { name: "JORGENSEN", value: 15 },
    { name: "COLWILL", value: 50 }, { name: "CHALOBAH", value: 40 },
    { name: "FOFANA", value: 28 }, { name: "BADIASHILE", value: 18 }, { name: "CUCURELLA", value: 50 }, { name: "HATO", value: 35 },
    { name: "REECE JAMES", value: 60 }, { name: "MALO GUSTO", value: 35 },
    { name: "ACHEAMPONG", value: 25 }, { name: "CAICEDO", value: 110 }, { name: "ROMEO LAVIA", value: 25 },
    { name: "ESSUGO", value: 17 }, { name: "ENZO FERNANDEZ", value: 90 }, { name: "ANDREY SANTOS", value: 45 },
    { name: "COLE PALMER", value: 110 }, { name: "GARNACHO", value: 40 }, { name: "GITTENS", value: 35 },
    { name: "MUDRYK", value: 30 }, { name: "ESTEVAO", value: 80 }, { name: "PEDRO NETO", value: 60 },
    { name: "JOAO PEDRO", value: 75 }, { name: "DELAP", value: 32 }, { name: "MARC GUIU", value: 12 },
    { name: "MAMARDASHVILI", value: 28 }, { name: "ALISSON", value: 17 }, { name: "KONATE", value: 50 },
    { name: "VAN DIJK", value: 18 }, { name: "JOE GOMEZ", value: 15 }, { name: "KERKEZ", value: 40 }, { name: "ROBERTSON", value: 10 },
    { name: "FRIMPONG", value: 35 }, { name: "BRADLEY", value: 30 }, { name: "GRAVENBERCH", value: 90 },
    { name: "ENDO", value: 5 }, { name: "BAJCETIC", value: 5 }, { name: "MAC ALLISTER", value: 80 },
    { name: "CURTIS JONES", value: 35 }, { name: "NYONI", value: 6 }, { name: "WIRTZ", value: 110 },
    { name: "SZOBOSZLAI", value: 100 }, { name: "GAKPO", value: 65 }, { name: "NGUMOHA", value: 20 },
    { name: "SALAH", value: 30 }, { name: "CHIESA", value: 15 }, { name: "ISAK", value: 100 },
    { name: "EKITIKE", value: 90 }, { name: "VICARIO", value: 23 }, { name: "VAN DE VEN", value: 65 }, { name: "CRISTIAN ROMERO", value: 50 },
    { name: "RADU DRAGUSIN", value: 20 }, { name: "DANSO", value: 20 }, { name: "BEN DAVIES", value: 5 },
    { name: "UDOGIE", value: 35 }, { name: "PEDRO PORRO", value: 40 }, { name: "BENTANCUR", value: 22 }, { name: "PALHINHA", value: 18 },
    { name: "BISSOUMA", value: 12 }, { name: "BERGVALL", value: 40 }, { name: "GRAY", value: 35 },
    { name: "GALLAGHER", value: 35 }, { name: "SARR", value: 32 }, { name: "XAVI SIMONS", value: 50 },
    { name: "KULUSEVSKI", value: 35 }, { name: "MADDISON", value: 25 }, { name: "KUDUS", value: 55 }, { name: "SOLANKE", value: 35 }, 
    { name: "RICHARLISON", value: 28 }, { name: "MATHYS TEL", value: 25 }, { name: "KOLO MUANI", value: 22 }
];

const estadiosLaLiga = [
    { name: "BERNABEU", value: 83186 }, { name: "CAMP NOU", value: 99354 },
    { name: "METROPOLITANO", value: 70692 }, { name: "LA CERAMICA", value: 22000 },
    { name: "BENITO VILLAMARIN", value: 60721 }, { name: "COLISEUM", value: 16500 },
    { name: "BALAIDOS", value: 24870 }, { name: "ANOETA", value: 40000 },
    { name: "EL SADAR", value: 23576 }, { name: "SAN MAMES", value: 53289 },
    { name: "VALLECAS", value: 14708 }, { name: "MESTALLA", value: 49430 },
    { name: "RCDE STADIUM", value: 40445 }, { name: "MARTINEZ VALERO", value: 33732 },
    { name: "MONTILIVI", value: 14624 }, { name: "MENDIZORROZA", value: 19840 },
    { name: "SON MOIX", value: 26020 }, { name: "RAMON SANCHEZ-PIZJUAN", value: 43864 },
    { name: "CIUTAT DE VALENCIA", value: 23354 }, { name: "CARLOS TARTIERE", value: 30500 }
];

const englishTeamsDB = [
    "ARSENAL", "MANCHESTER CITY", "MANCHESTER UNITED", "LIVERPOOL", 
    "ASTON VILLA", "BRIGHTON", "BOURNEMOUTH", "CHELSEA", 
    "BRENTFORD", "FULHAM", "EVERTON", "SUNDERLAND", 
    "CRYSTAL PALACE", "NEWCASTLE", "LEEDS UNITED", "NOTTINGHAM", 
    "WEST HAM", "TOTTENHAM", "BURNLEY", "WOLVERHAMPTON",
    "COVENTRY CITY", "IPSWICH TOWN", "MILLWALL", "MIDDLESBROUGH", 
    "SOUTHAMPTON", "WREXHAM", "HULL CITY", "DERBY COUNTY", 
    "NORWICH CITY", "BIRMINGHAM CITY", "SWANSEA CITY", "PRESTON NORTH END", 
    "BRISTOL CITY", "QUEENS PARK RANGERS", "SHEFFIELD UNITED", "WATFORD", 
    "STOKE CITY", "PORTSMOUTH", "CHARLTON ATHLETIC", "BLACKBURN ROVERS", 
    "WEST BROMWICH ALBION", "OXFORD UNITED", "LEICESTER CITY", "SHEFFIELD WEDNESDAY"
];

const top10DB = [
    {
        id: 'goleadores_champions',
        title: 'TOP 10 GOLEADORES',
        desc: 'Máximos anotadores históricos de la Champions League',
        items: [
            { rank: 1, name: "CRISTIANO RONALDO", flag: "portugal", stat: "141 Goles", revealed: false },
            { rank: 2, name: "LIONEL MESSI", flag: "argentina", stat: "129 Goles", revealed: false },
            { rank: 3, name: "ROBERT LEWANDOWSKI", flag: "polonia", stat: "109 Goles", revealed: false },
            { rank: 4, name: "KARIM BENZEMA", flag: "francia", stat: "90 Goles", revealed: false },
            { rank: 5, name: "RAUL GONZALEZ", flag: "espana", stat: "71 Goles", revealed: false },
            { rank: 6, name: "KYLIAN MBAPPE", flag: "francia", stat: "70 Goles", revealed: false },
            { rank: 7, name: "RUUD VAN NISTELROOY", flag: "paises_bajos", stat: "60 Goles", revealed: false },
            { rank: 8, name: "ANDRIY SHEVCHENKO", flag: "ucrania", stat: "59 Goles", revealed: false },
            { rank: 9, name: "ERLING HAALAND", flag: "noruega", stat: "57 Goles", revealed: false },
            { rank: 10, name: "THOMAS MULLER", flag: "alemania", stat: "57 Goles", revealed: false }
        ]
    },
    {
        id: 'salarios_laliga',
        title: 'TOP 10 SALARIOS',
        desc: 'Máximos salarios a la semana actuales de LaLiga',
        items: [
            { rank: 1, name: "KYLIAN MBAPPE", flag: "francia", stat: "600.962€", revealed: false },
            { rank: 2, name: "VINICIUS JUNIOR", flag: "brasil", stat: "480.769€", revealed: false },
            { rank: 3, name: "DAVID ALABA", flag: "austria", stat: "432.692€", revealed: false },
            { rank: 4, name: "ROBERT LEWANDOWSKI", flag: "polonia", stat: "400.577€", revealed: false },
            { rank: 5, name: "JUDE BELLINGHAM", flag: "inglaterra", stat: "400.577€", revealed: false },
            { rank: 6, name: "JAN OBLAK", flag: "eslovenia", stat: "400.577€", revealed: false },
            { rank: 7, name: "FRENKIE DE JONG", flag: "paises_bajos", stat: "365.385€", revealed: false },
            { rank: 8, name: "FEDERICO VALVERDE", flag: "uruguay", stat: "320.577€", revealed: false },
            { rank: 9, name: "LAMINE YAMAL", flag: "espana", stat: "320.577€", revealed: false },
            { rank: 10, name: "RAPHINHA", flag: "brasil", stat: "320.577€", revealed: false }
        ]
    },
    {
        id: 'salarios_premier',
        title: 'TOP 10 SALARIOS',
        desc: 'Máximos salarios a la semana actuales de la Premier League',
        items: [
            { rank: 1, name: "ERLING HAALAND", flag: "noruega", stat: "525.000€", revealed: false },
            { rank: 2, name: "MOHAMED SALAH", flag: "egipto", stat: "400.000", revealed: false },
            { rank: 3, name: "VIRJIL VAN DIJK", flag: "paises_bajos", stat: "350.000€", revealed: false },
            { rank: 4, name: "CASEMIRO", flag: "brasil", stat: "350.000€", revealed: false },
            { rank: 5, name: "BERNARDO SILVA", flag: "portugal", stat: "300.000€", revealed: false },
            { rank: 6, name: "BRUNO FERNANDES", flag: "portugal", stat: "300.000€", revealed: false },
            { rank: 7, name: "OMAR MARMOUSH", flag: "egipto", stat: "295.000€", revealed: false },
            { rank: 8, name: "KAI HAVERTZ", flag: "alemania", stat: "280.000€", revealed: false },
            { rank: 9, name: "ALEXANDER ISAK", flag: "suecia", stat: "280.000€", revealed: false },
            { rank: 10, name: "GABRIEL JESUS", flag: "brasil", stat: "265.000€", revealed: false }
        ]
    },
    {
        id: 'goleadores_mundiales',
        title: 'TOP 10 MUNDIALES',
        desc: 'Máximos goleadores históricos de la Copa del Mundo',
        items: [
            { rank: 1, name: "LIONEL MESSI", flag: "argentina", stat: "19 Goles", revealed: false },
            { rank: 2, name: "KYLIAN MBAPPE", flag: "francia", stat: "18 Goles", revealed: false },
            { rank: 3, name: "MIROSLAV KLOSE", flag: "alemania", stat: "16 Goles", revealed: false },
            { rank: 4, name: "RONALDO NAZARIO", flag: "brasil", stat: "15 Goles", revealed: false },
            { rank: 5, name: "GERD MULLER", flag: "alemania", stat: "14 Goles", revealed: false },
            { rank: 6, name: "JUST FONTAINE", flag: "francia", stat: "13 Goles", revealed: false },
            { rank: 7, name: "HARRY KANE", flag: "inglaterra", stat: "13 Goles", revealed: false },
            { rank: 8, name: "PELE", flag: "brasil", stat: "12 Goles", revealed: false },
            { rank: 9, name: "SANDOR KOCSIS", flag: "hungria", stat: "11 Goles", revealed: false },
            { rank: 10, name: "JURGEN KLINSMANN", flag: "alemania", stat: "11 Goles", revealed: false }
        ]
    },
    {
        id: 'fichajes_historicos',
        title: 'TOP 10 FICHAJES',
        desc: 'Los fichajes más caros de la historia del fútbol',
        items: [
            { rank: 1, name: "NEYMAR JUNIOR", flag: "brasil", stat: "222 M€", revealed: false },
            { rank: 2, name: "KYLIAN MBAPPE", flag: "francia", stat: "180 M€", revealed: false },
            { rank: 3, name: "OUSMANE DEMBELE", flag: "francia", stat: "135 M€", revealed: false },
            { rank: 4, name: "PHILIPPE COUTINHO", flag: "brasil", stat: "135 M€", revealed: false },
            { rank: 5, name: "MOISES CAICEDO", flag: "ecuador", stat: "133 M€", revealed: false },
            { rank: 6, name: "JOAO FELIX", flag: "portugal", stat: "126 M€", revealed: false },
            { rank: 7, name: "DECLAN RICE", flag: "inglaterra", stat: "122 M€", revealed: false },
            { rank: 8, name: "ENZO FERNANDEZ", flag: "argentina", stat: "121 M€", revealed: false },
            { rank: 9, name: "ANTOINE GRIEZMANN", flag: "francia", stat: "120 M€", revealed: false },
            { rank: 10, name: "JACK GREALISH", flag: "inglaterra", stat: "117 M€", revealed: false },
        ]
    },
    {
        id: 'trayectoria_zlatan',
        title: 'TRAYECTORIA ZLATAN',
        desc: 'Clubes de Ibrahimovic en orden cronológico',
        items: [
            { rank: 1, name: "MALMO FF", flag: "suecia", stat: "1999-2001", revealed: false },
            { rank: 2, name: "AJAX", flag: "paises_bajos", stat: "2001-2004", revealed: false },
            { rank: 3, name: "JUVENTUS", flag: "italia", stat: "2004-2006", revealed: false },
            { rank: 4, name: "INTER DE MILAN", flag: "italia", stat: "2006-2009", revealed: false },
            { rank: 5, name: "FC BARCELONA", flag: "espana", stat: "2009-2010", revealed: false },
            { rank: 6, name: "AC MILAN", flag: "italia", stat: "2010-2012", revealed: false },
            { rank: 7, name: "PSG", flag: "francia", stat: "2012-2016", revealed: false },
            { rank: 8, name: "MANCHESTER UNITED", flag: "inglaterra", stat: "2016-2018", revealed: false },
            { rank: 9, name: "LA GALAXY", flag: "estados_unidos", stat: "2018-2019", revealed: false },
            { rank: 10, name: "AC MILAN", flag: "italia", stat: "2020-2023", revealed: false }
        ]
    }
];

const knowballDB = [
    {
        title: "Máximos Goleadores LaLiga",
        desc: "Ordena de más a menos goles históricos",
        items: ["TELMO ZARRA", "HUGO SANCHEZ", "DI ESTEFANO", "GRIEZMANN", "DAVID VILLA"] 
    },
    {
        title: "Ganadores Balón de Oro",
        desc: "Ordena de más a menos galardones",
        items: ["LIONEL MESSI", "CRISTIANO RONALDO", "MICHEL PLATINI", "FRANZ BECKENBAUER", "LUKA MODRIC"] 
    },
    {
        title: "Selecciones con más Mundiales",
        desc: "Ordena de más a menos Copas del Mundo ganadas",
        items: ["BRASIL", "ALEMANIA", "ARGENTINA", "FRANCIA", "ESPAÑA"] 
    },
    {
        title: "Equipos con más Champions",
        desc: "Ordena de más a menos títulos de Champions League",
        items: ["REAL MADRID", "AC MILAN", "BAYERN MUNICH", "FC BARCELONA", "JUVENTUS"] 
    },
    {
        title: "Goleadores de los Mundiales",
        desc: "Ordena de más a menos goles en Copas del Mundo",
        items: ["MIROSLAV KLOSE", "RONALDO NAZARIO", "GERD MULLER", "JUST FONTAINE", "PELE"] 
    },
    {
        title: "Entrenadores con más Champions",
        desc: "Ordena de más a menos títulos como entrenador",
        items: ["CARLO ANCELOTTI", "PEP GUARDIOLA", "JOSE MOURINHO", "JURGEN KLOPP", "DIEGO SIMEONE"] 
    },
    {
        title: "Selecciones con más Eurocopas",
        desc: "Ordena de más a menos títulos europeos",
        items: ["ESPAÑA", "ALEMANIA", "ITALIA", "PORTUGAL", "INGLATERRA"] 
    },
    {
        title: "Goleadores de España",
        desc: "Ordena de más a menos goles con la Selección Española",
        items: ["DAVID VILLA", "RAUL GONZALEZ", "FERNANDO TORRES", "ALVARO MORATA", "DAVID SILVA"] 
    },
    {
        title: "Equipos con más Ligas Inglesas",
        desc: "Ordena de más a menos títulos históricos (First Div. / Premier)",
        items: ["MANCHESTER UNITED", "LIVERPOOL", "ARSENAL", "MANCHESTER CITY", "CHELSEA"] 
    },
    {
        title: "Goleadores Premier League",
        desc: "Ordena de más a menos goles históricos en la Premier",
        items: ["ALAN SHEARER", "HARRY KANE", "WAYNE ROONEY", "SERGIO AGUERO", "THIERRY HENRY"] 
    },
    {
        title: "Más partidos en LaLiga",
        desc: "Ordena de más a menos partidos jugados en Primera",
        items: ["JOAQUIN", "RAUL GARCIA", "RAUL GONZALEZ", "LIONEL MESSI", "SERGIO RAMOS"] 
    }
];

// ==========================================
// 2. ESTADOS GLOBALES DE LOS JUEGOS
// ==========================================
let currentCategory = "";
let gameState = { word: "", guessed: [], mistakes: 0, streak: 0 };
let blurState = { player: "", blur: 30, lives: 5, streak: 0 };
let timeMachineState = { event: "", year: 0, lives: 5, streak: 0 };
let elevenState = { match: null, guessed: [], timer: null, timeLeft: 180, totalPlayers: 11 };
let wordleState = { targetPlayer: "", answer: "", guesses: [], currentGuess: "", maxGuesses: 6, wordLength: 5 };
let hlState = { p1: null, p2: null, score: 0 };
let aforosState = { p1: null, p2: null, score: 0 };
let zoomState = { team: "", streak: 0, lives: 5, currentScale: 4 };
let top10State = { currentList: null, guessedCount: 0 };
let kbState = { currentTrivia: null, score: 0 };

let roscoState = {
    mode: 'individual',
    currentPlayer: 1, 
    timerInterval: null,
    p1: { currentIndex: 0, results: {}, timeLeft: 300, questions: [], done: false },
    p2: { currentIndex: 0, results: {}, timeLeft: 300, questions: [], done: false }
};

let currentLineupSlot = -1;
// Añadimos el estado del torneo y ampliamos el estado del partido
let tournamentState = {
    active: false,
    roundIndex: 0,
    rounds: ['CUARTOS DE FINAL', 'SEMIFINALES', 'GRAN FINAL'],
    facedTeams: [] // Array para guardar a quién hemos eliminado
};

// Reemplaza tu actual matchState por este:
let matchState = {
    minute: 0,
    addedTime: 0,
    myGoals: 0,
    cpuGoals: 0,
    myRating: 0,
    cpuRating: 0,
    cpuClub: "",
    cpuPlayers: [],
    isFinished: false,
    phase: 'regular', // 'regular', 'extra', 'penalties'
    myPenalties: 0,
    cpuPenalties: 0
};
// ==========================================
// 2.5 SISTEMA DE MONEDAS, RÉCORDS Y PERFIL
// ==========================================
function getCoins() { return parseInt(localStorage.getItem('f10_coins'), 10) || 0; }
function addCoins(amount) {
    let current = getCoins() + amount;
    localStorage.setItem('f10_coins', current);
    const menuCoins = document.getElementById('menu-coins');
    if (menuCoins) menuCoins.innerText = current;
}

function getRecord(gameId) { return parseInt(localStorage.getItem(`f10_${gameId}_max`), 10) || 0; }
function updateRecord(gameId, score) {
    let max = getRecord(gameId);
    if (score > max) {
        localStorage.setItem(`f10_${gameId}_max`, score);
        return score;
    }
    return max;
}

function showProfile() {
    document.getElementById('profile-coins').innerText = getCoins();
    
    // Tus estadísticas actuales (sin la tabla de goleadores)
    let statsHTML = `
        <div class="profile-stat-item"><span>Ahorcado</span> <span class="stat-value">🏆 ${getRecord('hangman')}</span></div>
        <div class="profile-stat-item"><span>Blur Guess</span> <span class="stat-value">🏆 ${getRecord('blur')}</span></div>
        <div class="profile-stat-item"><span>Máquina Tiempo</span> <span class="stat-value">🏆 ${getRecord('tm')}</span></div>
        <div class="profile-stat-item"><span>Higher/Lower</span> <span class="stat-value">🏆 ${getRecord('hl')}</span></div>
        <div class="profile-stat-item"><span>Guerra Aforos</span> <span class="stat-value">🏆 ${getRecord('aforos')}</span></div>
        <div class="profile-stat-item"><span>Zoom Escudos</span> <span class="stat-value">🏆 ${getRecord('zoom')}</span></div>
    `;
    
    document.getElementById('profile-stats').innerHTML = statsHTML;
    document.getElementById('profile-modal').classList.remove('hidden');
}
function closeProfile() {
    document.getElementById('profile-modal').classList.add('hidden');
}

function showInfo() {
    document.getElementById('info-modal').classList.remove('hidden');
}

function closeInfo() {
    document.getElementById('info-modal').classList.add('hidden');
}
// === SISTEMA DE PROGRESIÓN Y EVOLUCIONES ===
function getTournamentsWon() { return parseInt(localStorage.getItem('f10_tournaments_won')) || 0; }
function addTournamentWon() {
    let won = getTournamentsWon() + 1;
    localStorage.setItem('f10_tournaments_won', won);
    if (won % 10 === 0) addSuperCoins(1); // 1 SuperCoin cada 10 torneos
    return won;
}

function getSuperCoins() { return parseInt(localStorage.getItem('f10_supercoins')) || 0; }
function addSuperCoins(amount) {
    localStorage.setItem('f10_supercoins', getSuperCoins() + amount);
    updateUpgradesUI();
}

function getUpgrades() { return JSON.parse(localStorage.getItem('f10_upgrades')) || {}; }
function saveUpgrades(upgs) { localStorage.setItem('f10_upgrades', JSON.stringify(upgs)); }

function updateUpgradesUI() {
    if(document.getElementById('ui-supercoins')) document.getElementById('ui-supercoins').innerText = getSuperCoins();
    if(document.getElementById('ui-tournaments-won')) document.getElementById('ui-tournaments-won').innerText = getTournamentsWon();
}
// ==========================================
// 3. NAVEGACIÓN Y MENÚS
// ==========================================
function showMenu() {
    if (elevenState.timer) clearInterval(elevenState.timer);
    if (roscoState.timerInterval) clearInterval(roscoState.timerInterval);
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('menu-screen').classList.remove('hidden');
}
// --- LÓGICA DE LA TARJETA PRE-JUEGO DEL ROSCO ---
function showRoscoInfo() {
    document.getElementById('rosco-info-modal').classList.remove('hidden');
}

function closeRoscoInfo() {
    document.getElementById('rosco-info-modal').classList.add('hidden');
}

function startRoscoFromInfo(mode) {
    closeRoscoInfo();
    initRosco(mode); // Llama a la inicialización que ya tenías programada
}
function showCategory(category) {
    if (elevenState.timer) clearInterval(elevenState.timer);
    currentCategory = category;
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    
    const catScreen = document.getElementById('category-screen');
    const grid = document.getElementById('category-games-grid');
    const title = document.getElementById('category-title');
    
    if (!catScreen || !grid) return;

    catScreen.classList.remove('hidden');
    grid.innerHTML = "";

    if (category === 'laliga') {
        title.innerHTML = "LALIGA <span>EA SPORTS</span>";
        grid.innerHTML = `
            <div class="menu-card hangman-game-card" onclick="showGameInfo('hangman')">
                <div class="card-bg bg-ahorcado"></div>
                <div class="card-info"><h3>Ahorcado</h3><p>Nivel Clásico</p></div>
            </div>
            <div class="menu-card blur-game-card" onclick="showGameInfo('blur')">
                <div class="card-bg bg-blur"></div> 
                <div class="card-info"><h3>Blur Guess</h3><p>Adivina el jugador</p></div>
            </div>
            <div class="menu-card aforos-game-card" onclick="showGameInfo('aforos')">
                <div class="card-bg bg-aforos"></div>
                <div class="card-info"><h3>Guerra de Aforos</h3><p>Capacidad de Estadios</p></div>
            </div>`;
   } else if (category === 'leyendas') {
        title.innerHTML = "LEYENDAS <span>FÚTBOL</span>";
        grid.innerHTML = `
            <div class="menu-card timemachine-game-card" onclick="showGameInfo('tm')">
                <div class="card-bg bg-timemachine"></div>
                <div class="card-info"><h3>Máquina del Tiempo</h3><p>¿En qué año fue?</p></div>
            </div>
            <div class="menu-card coming-soon">
                <span class="icon">📈</span>
                <h3>Higher or Lower</h3><p>Próximamente</p>
            </div>`;
    } else if (category === 'europeos') {
        title.innerHTML = "JUEGOS <span>EUROPEOS</span>";
        grid.innerHTML = `
            <div class="menu-card eleven-game-card" onclick="showGameInfo('futdle')">
                <div class="card-bg bg-europeos"></div>
                <div class="card-info"><h3>XI Histórico</h3><p>Adivina con Futdle</p></div>
            </div>
            <div class="menu-card knowball-game-card" onclick="showGameInfo('knowball')">
                <div class="card-bg bg-knowball"></div>
                <div class="card-info"><h3>Knowball</h3><p>Pirámide Top 5</p></div>
            </div>`;
    } else {
        title.innerHTML = "PREMIER <span>LEAGUE</span>";
        grid.innerHTML = `
            <div class="menu-card hl-game-card" onclick="showGameInfo('hl')">
                <div class="card-bg bg-higherlower"></div>
                <div class="card-info"><h3>Higher / Lower</h3><p>Valor de Mercado</p></div>
            </div>
            <div class="menu-card zoom-game-card" onclick="showGameInfo('zoom')">
                <div class="card-bg bg-premier"></div>
                <div class="card-info"><h3>Escudos Zoom</h3><p>Reconoce el detalle</p></div>
            </div>`;
    }
}

function showGame(gameId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    const target = document.getElementById(`${gameId}-screen`);
    if(target) {
        target.classList.remove('hidden');
        if(gameId === 'hangman') initHangman();
        if(gameId === 'blur') initBlurGame();
        if(gameId === 'timemachine') initTimeMachine();
        if(gameId === 'eleven') initElevenGame();
        if(gameId === 'higherlower') initHigherLower(); 
        if(gameId === 'aforos') initAforosGame();
        if(gameId === 'zoom') initZoomGame();
        if(gameId === 'top10') initTop10(); 
        if(gameId === 'knowball') initKnowball();
        if(gameId === 'album') initAlbum();
    }
}

function backToCategory() { showCategory(currentCategory); }

// ==========================================
// 4. FUNCIONES DE UTILIDAD (MODALES, AUTOCOMPLETAR)
// ==========================================
function mostrarMensajePro(titulo, mensaje, accionAlCerrar) {
    const modal = document.getElementById('custom-modal');
    document.getElementById('modal-title').innerText = titulo;
    document.getElementById('modal-message').innerText = mensaje;
    
    modal.classList.remove('hidden');
    document.getElementById('modal-btn').onclick = () => {
        modal.classList.add('hidden');
        if (accionAlCerrar) accionAlCerrar();
    };
}

function setupAutocomplete(inputId, suggestionId) {
    const input = document.getElementById(inputId);
    const box = document.getElementById(suggestionId);
    if(!input || !box) return;

    input.addEventListener('input', () => {
        const val = input.value.toUpperCase().trim();
        box.innerHTML = "";
        if (val.length < 2) return;
        
        let sourceArray = players; 
        if (inputId === 'zoomInput') sourceArray = englishTeamsDB; 
        
        const matches = sourceArray.filter(p => p.includes(val)).slice(0, 4);
        matches.forEach(match => {
            const div = document.createElement('div');
            div.textContent = match;
            div.onclick = () => { 
                input.value = match; 
                box.innerHTML = ""; 
            };
            box.appendChild(div);
        });
    });
}

function obtenerDosRoscos() {
    let r1 = [], r2 = [];
    roscoQuestions.forEach(item => {
        let options = [...item.preguntas];
        options.sort(() => Math.random() - 0.5); 
        r1.push({ letra: item.letra, respuesta: options[0].respuesta, hint: options[0].hint });
        let idx2 = options.length > 1 ? 1 : 0;
        r2.push({ letra: item.letra, respuesta: options[idx2].respuesta, hint: options[idx2].hint });
    });
    return [r1, r2];
}

// ==========================================
// 5. LÓGICA DE JUEGOS INDIVIDUALES
// ==========================================

// --- AHORCADO ---
function initHangman() {
    if (loadHangmanProgress()) {
        document.getElementById('lives').innerText = 6 - gameState.mistakes;
        document.getElementById('streak').innerText = gameState.streak;
        document.getElementById('max-streak').innerText = getRecord('hangman');
        renderKeyboard();
        gameState.guessed.forEach(char => {
            const el = document.getElementById(`key-${char}`);
            if(el) el.classList.add('used');
        });
        updateDisplay();
        drawCanvas(gameState.mistakes);
        return; 
    }

    gameState = { 
        word: players[Math.floor(Math.random() * players.length)].toUpperCase(), 
        guessed: [], 
        mistakes: 0, 
        streak: gameState.streak 
    };
    
    document.getElementById('lives').innerText = 6;
    document.getElementById('streak').innerText = gameState.streak;
    document.getElementById('max-streak').innerText = getRecord('hangman');
    document.getElementById('wordInput').value = "";
    document.getElementById('hangman-suggestions').innerHTML = "";
    
    renderKeyboard();
    updateDisplay();
    drawCanvas(0);
    saveHangmanProgress();
}

function buyHangmanHint() {
    if(getCoins() < 50) {
        mostrarMensajePro("⚠️ SIN FONDOS", "Necesitas 50 FutCoins para comprar una pista. ¡Acertando jugadores ganas monedas!");
        return;
    }
    const nWord = removeAccents(gameState.word);
    const unrevealed = nWord.split('').filter(c => c !== ' ' && !gameState.guessed.includes(c));
    
    if(unrevealed.length === 0) return;
    
    addCoins(-50); 
    const randomChar = unrevealed[Math.floor(Math.random() * unrevealed.length)];
    handleInput(randomChar); 
}

function renderKeyboard() {
    const container = document.getElementById('qwerty-keyboard');
    container.innerHTML = ''; 
    QWERTY_LAYOUT.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        row.split('').forEach(letter => {
            const keyDiv = document.createElement('div');
            keyDiv.className = 'key';
            keyDiv.textContent = letter;
            keyDiv.id = `key-${letter}`;
            keyDiv.onclick = () => handleInput(letter);
            rowDiv.appendChild(keyDiv);
        });
        container.appendChild(rowDiv);
    });
}

function handleInput(char) {
    if (gameState.mistakes >= 6 || !document.getElementById('wordDisplay').textContent.includes("_")) return;
    if (gameState.guessed.includes(char)) return;
    
    gameState.guessed.push(char);
    const keyElement = document.getElementById(`key-${char}`);
    if (keyElement) keyElement.classList.add('used');

    const nWord = removeAccents(gameState.word);
    
    if (!nWord.includes(char)) {
        gameState.mistakes++;
        document.getElementById('lives').innerText = 6 - gameState.mistakes;
        drawCanvas(gameState.mistakes);
        
        if (gameState.mistakes >= 6) {
            localStorage.removeItem('f10_hangman_save'); 
            updateRecord('hangman', gameState.streak);
            gameState.streak = 0; 
            mostrarMensajePro("🧤 ¡TARJETA ROJA!", "La respuesta era: " + gameState.word + ".", () => initHangman());
            return;
        }
    } else {
        updateDisplay();
        if (!document.getElementById('wordDisplay').textContent.includes("_")) return;
    }
    
    saveHangmanProgress(); 
}

function updateDisplay() {
    const words = gameState.word.split(" ");
    const displayHTML = words.map(word => {
        const letters = word.split('').map(char => {
            if (char === '-') return "-";
            const normChar = removeAccents(char);
            return gameState.guessed.includes(normChar) ? char : "_";
        }).join(" ");
        return `<span style="white-space: nowrap;">${letters}</span>`;
    }).join(" &nbsp;&nbsp; "); 
    
    document.getElementById('wordDisplay').innerHTML = displayHTML;
    
    if (!document.getElementById('wordDisplay').textContent.includes("_")) {
        localStorage.removeItem('f10_hangman_save'); 
        gameState.streak++;
        let nuevoRecord = updateRecord('hangman', gameState.streak);
        document.getElementById('max-streak').innerText = nuevoRecord;

        let livesLeft = 6 - gameState.mistakes;
        let wonCoins = 0;
        if (livesLeft === 6) wonCoins = 10;
        else if (livesLeft === 5) wonCoins = 7;
        else if (livesLeft === 4) wonCoins = 5;
        else if (livesLeft === 3 || livesLeft === 2) wonCoins = 3;
        else if (livesLeft === 1) wonCoins = 2;

        const lineup = getLineup();
        const isFavorite = lineup.includes(gameState.word);
        if (isFavorite) wonCoins *= 10;

        addCoins(wonCoins);
        let msg = isFavorite 
            ? `¡Adivinaste a tu jugador favorito ${gameState.word}!\nBONUS x10 aplicado: +${wonCoins} FutCoins 🪙`
            : `¡Adivinaste: ${gameState.word}!\nHas ganado +${wonCoins} FutCoins 🪙`;
            
        mostrarMensajePro("🔥 ¡LOKUURA!", msg, () => initHangman());
    }
}

function solveFullWord() {
    const val = document.getElementById('wordInput').value.toUpperCase().trim();
    const nVal = removeAccents(val);
    const nWord = removeAccents(gameState.word);
    
    if (nVal === nWord && nVal !== "") {
        localStorage.removeItem('f10_hangman_save'); 
        gameState.streak++;
        let nuevoRecord = updateRecord('hangman', gameState.streak);
        document.getElementById('max-streak').innerText = nuevoRecord;
        
        let livesLeft = 6 - gameState.mistakes;
        let wonCoins = 0;
        if (livesLeft === 6) wonCoins = 10;
        else if (livesLeft === 5) wonCoins = 7;
        else if (livesLeft === 4) wonCoins = 5;
        else if (livesLeft === 3 || livesLeft === 2) wonCoins = 3;
        else if (livesLeft === 1) wonCoins = 2;

        const lineup = getLineup();
        const isFavorite = lineup.includes(gameState.word);
        if (isFavorite) wonCoins *= 10;

        addCoins(wonCoins);
        let msg = isFavorite 
            ? `¡Exacto, era tu jugador favorito ${gameState.word}!\nBONUS x10 aplicado: +${wonCoins} FutCoins 🪙`
            : `¡Exacto, era ${gameState.word}!\nHas ganado +${wonCoins} FutCoins 🪙`;
            
        mostrarMensajePro("🔥 ¡BRUTAL!", msg, () => initHangman());
    } else {
        localStorage.removeItem('f10_hangman_save'); 
        updateRecord('hangman', gameState.streak);
        gameState.streak = 0;
        mostrarMensajePro("🧤 ¡TARJETA ROJA!", "Te la jugaste y fallaste... Era: " + gameState.word + ".", () => initHangman());
    }
}

function drawCanvas(step) {
    const c = document.getElementById('hangmanCanvas');
    const ctx = c.getContext('2d');
    ctx.strokeStyle = "#222"; ctx.lineWidth = 4;
    if(step === 0) {
        ctx.clearRect(0,0,220,280);
        ctx.beginPath();
        ctx.moveTo(20,260); ctx.lineTo(180,260);
        ctx.moveTo(50,260); ctx.lineTo(50,20);
        ctx.lineTo(150,20); ctx.lineTo(150,50);
        ctx.stroke();
        return;
    }
    if(step >= 1) { ctx.beginPath(); ctx.arc(150, 80, 25, 0, Math.PI*2); ctx.stroke(); }
    if(step >= 2) { ctx.beginPath(); ctx.moveTo(150, 105); ctx.lineTo(150, 180); ctx.stroke(); }
    if(step >= 3) { ctx.beginPath(); ctx.moveTo(150, 120); ctx.lineTo(120, 150); ctx.stroke(); }
    if(step >= 4) { ctx.beginPath(); ctx.moveTo(150, 120); ctx.lineTo(180, 150); ctx.stroke(); }
    if(step >= 5) { ctx.beginPath(); ctx.moveTo(150, 180); ctx.lineTo(120, 220); ctx.stroke(); }
    if(step >= 6) { ctx.beginPath(); ctx.moveTo(150, 180); ctx.lineTo(180, 220); ctx.stroke(); }
}

// --- BLUR GUESS ---
function initBlurGame() {
    blurState.player = players[Math.floor(Math.random() * players.length)].toUpperCase();
    blurState.blur = 30;
    blurState.lives = 5;
    document.getElementById('blur-lives').innerText = blurState.lives;
    document.getElementById('blur-streak').innerText = blurState.streak;
    document.getElementById('blur-max').innerText = getRecord('blur'); 
    document.getElementById('blurInput').value = "";
    document.getElementById('blur-suggestions').innerHTML = "";
    const img = document.getElementById('playerImg');
    img.src = `players/${blurState.player}.jpg`;
    img.style.filter = `blur(${blurState.blur}px)`;
}

function checkBlurGuess() {
    const input = document.getElementById('blurInput');
    const val = input.value.toUpperCase().trim();
    const nVal = removeAccents(val);
    const nPlayer = removeAccents(blurState.player);
    
    if (nVal === nPlayer && nVal !== "") {
        blurState.streak++;
        let nuevoRecord = updateRecord('blur', blurState.streak); 
        document.getElementById('blur-max').innerText = nuevoRecord; 
        
        let wonCoins = 0;
        if (blurState.lives === 5) wonCoins = 10;
        else if (blurState.lives === 4) wonCoins = 7;
        else if (blurState.lives === 3) wonCoins = 5;
        else if (blurState.lives === 2) wonCoins = 3;
        else if (blurState.lives === 1) wonCoins = 2;

        const lineup = getLineup();
        const isFavorite = lineup.includes(blurState.player);
        if (isFavorite) wonCoins *= 10;

        addCoins(wonCoins); 
        document.getElementById('playerImg').style.filter = "blur(0px)";
        
        let msg = isFavorite 
            ? `¡Es tu favorito ${blurState.player}!\nBONUS x10 aplicado: +${wonCoins} FutCoins 🪙`
            : `Es ${blurState.player}\n¡Has ganado +${wonCoins} FutCoins 🪙!`;

        setTimeout(() => mostrarMensajePro("🔥 ¡BRUTAL!", msg, () => initBlurGame()), 300);
    } else {
        blurState.lives--;
        blurState.blur -= 6;
        if (blurState.lives <= 0) {
            updateRecord('blur', blurState.streak); 
            blurState.streak = 0;
            document.getElementById('playerImg').style.filter = "blur(0px)";
            setTimeout(() => mostrarMensajePro("🧤 ¡PARADÓN!", "Era " + blurState.player, () => initBlurGame()), 300);
        } else {
            document.getElementById('blur-lives').innerText = blurState.lives;
            document.getElementById('playerImg').style.filter = `blur(${blurState.blur}px)`;
            input.value = "";
        }
    }
}

// --- TIME MACHINE ---
function initTimeMachine() {
    const randomEvent = timeMachineEvents[Math.floor(Math.random() * timeMachineEvents.length)];
    timeMachineState.event = randomEvent.event;
    timeMachineState.year = randomEvent.year;
    timeMachineState.lives = 5;

    document.getElementById('tm-lives').innerText = timeMachineState.lives;
    document.getElementById('tm-streak').innerText = timeMachineState.streak;
    document.getElementById('tm-max').innerText = getRecord('tm'); 
    document.getElementById('tm-event-text').innerText = timeMachineState.event;
    document.getElementById('tm-image').src = `events/${randomEvent.foto}.jpg`;
    document.getElementById('tmInput').value = "";
    document.getElementById('tm-feedback').innerText = "";
    
    setTimeout(() => document.getElementById('tmInput').focus(), 100);
}

function checkTimeMachineGuess() {
    const inputField = document.getElementById('tmInput');
    const guess = parseInt(inputField.value);
    if(isNaN(guess)) return;

    if (guess === timeMachineState.year) {
        timeMachineState.streak++;
        let nuevoRecord = updateRecord('tm', timeMachineState.streak); 
        document.getElementById('tm-max').innerText = nuevoRecord; 
        addCoins(2); 
        mostrarMensajePro("⏳ ¡CLAVADO!", `Efectivamente, fue en el año ${timeMachineState.year}.\n¡Has ganado +2 FutCoins 🪙!`, () => initTimeMachine());
    } else {
        timeMachineState.lives--;
        if (timeMachineState.lives <= 0) {
            updateRecord('tm', timeMachineState.streak); 
            timeMachineState.streak = 0;
            mostrarMensajePro("❌ ¡FIN DEL TIEMPO!", `El año correcto era ${timeMachineState.year}.`, () => initTimeMachine());
        } else {
            document.getElementById('tm-lives').innerText = timeMachineState.lives;
            document.getElementById('tm-feedback').innerText = guess < timeMachineState.year ? "⬆️ Es MÁS reciente" : "⬇️ Es MÁS antiguo";
            inputField.value = "";
            inputField.focus();
        }
    }
}

// --- EL ROSCO ---
function initRosco(mode) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('rosco-screen').classList.remove('hidden');

    const circle = document.getElementById('rosco-circle');
    circle.innerHTML = "";
    if (roscoState.timerInterval) clearInterval(roscoState.timerInterval);
    
    let [q1, q2] = obtenerDosRoscos();

    roscoState = { 
        mode: mode,
        currentPlayer: 1,
        p1: { currentIndex: 0, results: {}, timeLeft: mode === 'individual' ? 300 : 150, questions: q1, done: false },
        p2: { currentIndex: 0, results: {}, timeLeft: 150, questions: q2, done: false },
        timerInterval: null
    };

    if (mode === 'individual') {
        document.getElementById('rosco-single-timer').classList.remove('hidden');
        document.getElementById('rosco-multi-timers').classList.add('hidden');
        document.getElementById('rosco-player-title').style.display = 'none';
        document.getElementById('rosco-timer-single').textContent = roscoState.p1.timeLeft;
    } else {
        document.getElementById('rosco-single-timer').classList.add('hidden');
        document.getElementById('rosco-multi-timers').classList.remove('hidden');
        document.getElementById('rosco-player-title').style.display = 'block';
        document.getElementById('rosco-timer-p1').textContent = roscoState.p1.timeLeft;
        document.getElementById('rosco-timer-p2').textContent = roscoState.p2.timeLeft;
    }

    roscoAlphabet.forEach((letra, i) => {
        const div = document.createElement('div');
        div.className = 'rosco-letter';
        div.id = `letra-${letra}`;
        div.textContent = letra;
        const angle = (i * 360 / roscoAlphabet.length) - 90;
        const radius = window.innerWidth < 600 ? 140 : 220;
        const x = Math.cos(angle * Math.PI / 180) * radius;
        const y = Math.sin(angle * Math.PI / 180) * radius;
        div.style.left = `calc(50% + ${x}px)`;
        div.style.top = `calc(50% + ${y}px)`;
        circle.appendChild(div);
    });

    renderRoscoTurn();
    startRoscoTimer();
}

function renderRoscoTurn() {
    const pKey = roscoState.currentPlayer === 1 ? 'p1' : 'p2';
    const state = roscoState[pKey];

    document.querySelectorAll('.rosco-letter').forEach((el, i) => {
        const letra = roscoAlphabet[i];
        el.className = 'rosco-letter'; 
        if (state.results[letra] === 'correct') el.classList.add('correct');
        else if (state.results[letra] === 'wrong') el.classList.add('wrong');
    });

    const currentEl = document.getElementById(`letra-${roscoAlphabet[state.currentIndex]}`);
    currentEl.classList.add('current');
    
    if (roscoState.mode === 'multiplayer') {
        currentEl.classList.add(roscoState.currentPlayer === 1 ? 'current-p1' : 'current-p2');
        const titleEl = document.getElementById('rosco-player-title');
        titleEl.textContent = `Turno: Jugador ${roscoState.currentPlayer}`;
        titleEl.className = roscoState.currentPlayer === 1 ? 'title-p1' : 'title-p2';

        document.getElementById('rosco-timer-p1').classList.toggle('timer-active', roscoState.currentPlayer === 1);
        document.getElementById('rosco-timer-p2').classList.toggle('timer-active', roscoState.currentPlayer === 2);
    }

    const q = state.questions[state.currentIndex];
    document.getElementById('rosco-letter-hint').textContent = q.letra;
    document.getElementById('rosco-definition').textContent = q.hint;
    document.getElementById('roscoInput').value = "";
    document.getElementById('roscoInput').focus();
}

function startRoscoTimer() {
    if(roscoState.timerInterval) clearInterval(roscoState.timerInterval);
    roscoState.timerInterval = setInterval(() => {
        const pKey = roscoState.currentPlayer === 1 ? 'p1' : 'p2';
        roscoState[pKey].timeLeft--;
        
        if (roscoState.mode === 'individual') {
            document.getElementById('rosco-timer-single').textContent = roscoState.p1.timeLeft;
        } else {
            document.getElementById(`rosco-timer-${pKey}`).textContent = roscoState[pKey].timeLeft;
        }
        
        if (roscoState[pKey].timeLeft <= 0) handlePlayerEnd();
    }, 1000);
}

function handlePlayerEnd() {
    const pKey = roscoState.currentPlayer === 1 ? 'p1' : 'p2';
    roscoState[pKey].done = true;

    if (roscoState.mode === 'individual') {
        endRosco("¡TIEMPO AGOTADO!");
    } else {
        const other = roscoState.currentPlayer === 1 ? 2 : 1;
        if (roscoState[`p${other}`].done) {
            endRosco("¡FIN DEL TIEMPO PARA AMBOS!");
        } else {
            clearInterval(roscoState.timerInterval);
            mostrarMensajePro(`⏳ TIEMPO AGOTADO (J${roscoState.currentPlayer})`, "Turno del rival.", () => {
                roscoState.currentPlayer = other;
                renderRoscoTurn();
                startRoscoTimer();
            });
        }
    }
}

function checkRosco() {
    const val = document.getElementById('roscoInput').value.toUpperCase().trim();
    if(!val) return;
    
    const pKey = roscoState.currentPlayer === 1 ? 'p1' : 'p2';
    const state = roscoState[pKey];
    const q = state.questions[state.currentIndex];
    
    const nVal = removeAccents(val);
    const nAns = removeAccents(q.respuesta);

    if(nVal === nAns) {
        state.results[q.letra] = 'correct';
        advanceRoscoTurn(true); 
    } else {
        state.results[q.letra] = 'wrong';
        advanceRoscoTurn(false); 
    }
}

function pasapalabra() { advanceRoscoTurn(false); }

function advanceRoscoTurn(keepTurn) {
    const pKey = roscoState.currentPlayer === 1 ? 'p1' : 'p2';
    const state = roscoState[pKey];
    let pending = false;
    
    for(let i=1; i <= roscoAlphabet.length; i++) {
        let idx = (state.currentIndex + i) % roscoAlphabet.length;
        if(!state.results[roscoAlphabet[idx]]) {
            state.currentIndex = idx;
            pending = true;
            break;
        }
    }
    
    if(!pending) {
        state.done = true;
        const other = roscoState.currentPlayer === 1 ? 2 : 1;
        if (roscoState.mode === 'individual' || roscoState[`p${other}`].done) {
            endRosco("¡ROSCO COMPLETADO!");
        } else {
            clearInterval(roscoState.timerInterval);
            mostrarMensajePro(`🏆 ¡ROSCO TERMINADO! (J${roscoState.currentPlayer})`, "Has terminado. Turno del rival.", () => {
                roscoState.currentPlayer = other;
                renderRoscoTurn();
                startRoscoTimer();
            });
        }
        return;
    }
    
    if (!keepTurn && roscoState.mode === 'multiplayer') {
        const other = roscoState.currentPlayer === 1 ? 2 : 1;
        if (!roscoState[`p${other}`].done) roscoState.currentPlayer = other;
    }
    renderRoscoTurn();
}

function endRosco(msg) {
    clearInterval(roscoState.timerInterval);
    if (roscoState.mode === 'individual') {
        let aciertos = Object.values(roscoState.p1.results).filter(r => r === 'correct').length;
        mostrarMensajePro("FIN DEL JUEGO", `${msg}\nAciertos: ${aciertos}`, () => initRosco(roscoState.mode));
    } else {
        let aciertosP1 = Object.values(roscoState.p1.results).filter(r => r === 'correct').length;
        let aciertosP2 = Object.values(roscoState.p2.results).filter(r => r === 'correct').length;
        let winnerMsg = aciertosP1 > aciertosP2 ? "¡GANA EL JUGADOR 1! 🔵" : (aciertosP2 > aciertosP1 ? "¡GANA EL JUGADOR 2! 🔴" : "¡EMPATE TÉCNICO! 🤝");
        mostrarMensajePro("FIN DEL PARTIDO", `${msg}\n${winnerMsg}\n\nJ1 Azul: ${aciertosP1} aciertos\nJ2 Rojo: ${aciertosP2} aciertos`, () => initRosco(roscoState.mode));
    }
}

function salirDelRosco() {
    if (roscoState.timerInterval) clearInterval(roscoState.timerInterval);
    showMenu();
}

// --- XI HISTÓRICO EUROPEO (FUTDLE) ---
function initElevenGame() {
    if (elevenState.timer) clearInterval(elevenState.timer);
    elevenState.match = elevenMatches[Math.floor(Math.random() * elevenMatches.length)];
    elevenState.guessed = [];
    elevenState.timeLeft = 180; 
    elevenState.totalPlayers = 11;

    updateElevenTimerDisplay();
    document.getElementById('eleven-team').innerText = elevenState.match.team;
    document.getElementById('eleven-desc').innerText = elevenState.match.desc;
    renderPitch();
    startElevenTimer();
}

function startElevenTimer() {
    elevenState.timer = setInterval(() => {
        elevenState.timeLeft--;
        updateElevenTimerDisplay();
        if(elevenState.timeLeft <= 0) {
            clearInterval(elevenState.timer);
            closeFutdleModal();
            mostrarMensajePro("⏳ ¡TIEMPO AGOTADO!", "Te faltaron jugadores de " + elevenState.match.team + ".", () => initElevenGame());
        }
    }, 1000);
}

function updateElevenTimerDisplay() {
    let m = Math.floor(elevenState.timeLeft / 60);
    let s = elevenState.timeLeft % 60;
    document.getElementById('eleven-timer').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
}

function renderPitch() {
    const pitch = document.getElementById('pitch');
    pitch.innerHTML = "";
    elevenState.match.xi.forEach((linea) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'pitch-row';
        linea.forEach((playerObj) => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player-slot';
            if (elevenState.guessed.includes(playerObj.name)) {
                playerDiv.classList.add('revealed');
                playerDiv.innerHTML = `<div class="shirt">👕</div><div class="name">${playerObj.name}</div>`;
            } else {
                playerDiv.classList.add('clickable');
                playerDiv.innerHTML = `<div class="shirt empty">❓</div><div class="name hidden-name">---</div>`;
                playerDiv.onclick = () => openFutdleForPlayer(playerObj);
            }
            rowDiv.appendChild(playerDiv);
        });
        pitch.appendChild(rowDiv);
    });
}

function checkElevenWin() {
    if (elevenState.guessed.length === elevenState.totalPlayers) {
        clearInterval(elevenState.timer);
        setTimeout(() => mostrarMensajePro("🏆 ¡LEYENDA EUROPEA!", "Has adivinado el XI Histórico completo.", () => initElevenGame()), 500);
    }
}

function openFutdleForPlayer(playerObj) {
    wordleState.targetPlayer = playerObj.name;
    wordleState.answer = removeAccents(playerObj.name).toUpperCase();
    wordleState.wordLength = wordleState.answer.length;
    wordleState.guesses = [];
    wordleState.currentGuess = "";
    wordleState.maxGuesses = 6;

    while(wordleState.answer[wordleState.currentGuess.length] === ' ' || wordleState.answer[wordleState.currentGuess.length] === '-') {
        wordleState.currentGuess += wordleState.answer[wordleState.currentGuess.length];
    }
    document.getElementById('futdle-hint').innerText = `Pista: ${playerObj.hint}`;
    document.getElementById('futdle-modal').classList.remove('hidden');
    renderWordleGrid();
    renderWordleKeyboard();
}

function closeFutdleModal() { document.getElementById('futdle-modal').classList.add('hidden'); }

function renderWordleGrid() {
    const grid = document.getElementById('wordle-grid');
    grid.innerHTML = "";
    for (let i = 0; i < wordleState.maxGuesses; i++) {
        const row = document.createElement('div');
        row.className = 'wordle-row';
        const guess = wordleState.guesses[i] || (i === wordleState.guesses.length ? wordleState.currentGuess : "");
        
        for (let j = 0; j < wordleState.wordLength; j++) {
            const targetChar = wordleState.answer[j];
            if (targetChar === ' ' || targetChar === '-') {
                const spacer = document.createElement('div');
                spacer.className = 'wordle-spacer';
                spacer.innerText = targetChar === '-' ? '-' : '';
                row.appendChild(spacer);
            } else {
                const cell = document.createElement('div');
                cell.className = 'wordle-cell';
                const letter = guess[j] || "";
                cell.innerText = letter;
                if (letter && i === wordleState.guesses.length) cell.classList.add('active'); 
                if (i < wordleState.guesses.length) {
                    cell.classList.add('revealed'); 
                    cell.classList.add(getWordleLetterStatus(guess, j));
                }
                row.appendChild(cell);
            }
        }
        grid.appendChild(row);
    }
}

function getWordleLetterStatus(guess, index) {
    const letter = guess[index];
    if (!letter || letter === ' ' || letter === '-') return "ignore";

    const answer = wordleState.answer;
    if (answer[index] === letter) return "correct";

    let totalInAnswer = 0;
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === letter) totalInAnswer++;
    }

    let exactMatches = 0;
    for (let i = 0; i < answer.length; i++) {
        if (guess[i] === letter && answer[i] === letter) exactMatches++;
    }

    let availableYellows = totalInAnswer - exactMatches;
    let previousYellowsUsed = 0;
    for (let i = 0; i < index; i++) {
        if (guess[i] === letter && answer[i] !== letter) {
            previousYellowsUsed++;
        }
    }

    if (previousYellowsUsed < availableYellows) return "present";
    return "absent";
}

function renderWordleKeyboard() {
    const container = document.getElementById('wordle-keyboard');
    container.innerHTML = ''; 
    const layout = ["QWERTYUIOP", "ASDFGHJKLÑ", "⌫ZXCVBNM↵"];
    layout.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        Array.from(row).forEach(char => {
            let letter = char; let display = char;
            if (char === '⌫') { letter = 'BACKSPACE'; display = '⌫'; }
            if (char === '↵') { letter = 'ENTER'; display = 'ENVIAR'; }

            const keyDiv = document.createElement('div');
            keyDiv.className = `key w-key ${letter === 'ENTER' || letter === 'BACKSPACE' ? 'wide-key' : ''}`;
            keyDiv.textContent = display;
            keyDiv.id = `wkey-${letter}`;
            keyDiv.onclick = () => handleWordleKey(letter);
            rowDiv.appendChild(keyDiv);
        });
        container.appendChild(rowDiv);
    });
    updateWordleKeyboard();
}

function updateWordleKeyboard() {
    wordleState.guesses.forEach(guess => {
        for (let i = 0; i < guess.length; i++) {
            const letter = guess[i];
            const keyEl = document.getElementById(`wkey-${letter}`);
            if (!keyEl) continue;
            
            const status = getWordleLetterStatus(guess, i);
            if (status === 'ignore') continue;
            if (keyEl.classList.contains('correct')) continue; 
            if (keyEl.classList.contains('present') && status === 'absent') continue;
            
            keyEl.className = `key w-key ${status}`;
        }
    });
}

function handleWordleKey(key) {
    if (wordleState.guesses.length >= wordleState.maxGuesses) return;

    if (key === 'ENTER') {
        if (wordleState.currentGuess.length === wordleState.wordLength) submitWordleGuess();
    } else if (key === 'BACKSPACE') {
        if (wordleState.currentGuess.length > 0) {
            while (wordleState.currentGuess.length > 0 && (wordleState.currentGuess.slice(-1) === ' ' || wordleState.currentGuess.slice(-1) === '-')) {
                wordleState.currentGuess = wordleState.currentGuess.slice(0, -1);
            }
            if (wordleState.currentGuess.length > 0) wordleState.currentGuess = wordleState.currentGuess.slice(0, -1);
            while (wordleState.currentGuess.length < wordleState.wordLength && (wordleState.answer[wordleState.currentGuess.length] === ' ' || wordleState.answer[wordleState.currentGuess.length] === '-')) {
                wordleState.currentGuess += wordleState.answer[wordleState.currentGuess.length];
            }
            renderWordleGrid();
        }
    } else if (wordleState.currentGuess.length < wordleState.wordLength && /^[A-ZÑ]$/.test(key)) {
        wordleState.currentGuess += key;
        while (wordleState.currentGuess.length < wordleState.wordLength && (wordleState.answer[wordleState.currentGuess.length] === ' ' || wordleState.answer[wordleState.currentGuess.length] === '-')) {
            wordleState.currentGuess += wordleState.answer[wordleState.currentGuess.length];
        }
        renderWordleGrid();
    }
}

function submitWordleGuess() {
    wordleState.guesses.push(wordleState.currentGuess);
    const isWin = wordleState.currentGuess === wordleState.answer;
    wordleState.currentGuess = "";
    renderWordleGrid();
    updateWordleKeyboard();

    if (isWin) {
        setTimeout(() => {
            closeFutdleModal();
            elevenState.guessed.push(wordleState.targetPlayer);
            renderPitch();
            checkElevenWin();
        }, 1000);
    } else if (wordleState.guesses.length >= wordleState.maxGuesses) {
        setTimeout(() => {
            closeFutdleModal();
            mostrarMensajePro("❌ ¡FALLASTE!", "El jugador era: " + wordleState.targetPlayer + ". \n¡Prueba con otro mientras te quede tiempo!");
        }, 1000);
    }
}

// --- KNOWBALL (PIRÁMIDE DEL 1 AL 5) ---
function initKnowball() {
    kbState.currentTrivia = knowballDB[Math.floor(Math.random() * knowballDB.length)];
    
    document.getElementById('kb-title').innerText = kbState.currentTrivia.title;
    document.getElementById('kb-desc').innerText = kbState.currentTrivia.desc;
    
    let shuffledItems = [...kbState.currentTrivia.items].sort(() => Math.random() - 0.5);
    
    const cardsContainer = document.getElementById('kb-cards-container');
    cardsContainer.innerHTML = "";
    
    for(let i=1; i<=5; i++) {
        document.getElementById(`kb-slot-${i}`).innerHTML = "";
    }

    shuffledItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'kb-card';
        card.draggable = true;
        card.id = `kb-card-${index}`;
        card.innerText = item;
        card.dataset.value = item;
        
        card.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', card.id);
            setTimeout(() => card.classList.add('dragging'), 0);
        });
        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
        });
        
        cardsContainer.appendChild(card);
    });

    setupKnowballDropZones();
}

function setupKnowballDropZones() {
    const dropZones = document.querySelectorAll('.kb-dropzone');
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });
        
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            
            const cardId = e.dataTransfer.getData('text/plain');
            const card = document.getElementById(cardId);
            
            if (card) {
                if (zone.children.length > 0 && zone.id !== 'kb-cards-container') {
                    document.getElementById('kb-cards-container').appendChild(zone.children[0]);
                }
                zone.appendChild(card);
            }
        });
    });
}

function checkKnowball() {
    let isCorrect = true;
    const correctOrder = kbState.currentTrivia.items;
    
    for(let i=1; i<=5; i++) {
        const slot = document.getElementById(`kb-slot-${i}`);
        if(slot.children.length === 0) {
            mostrarMensajePro("⚠️ ATENCIÓN", "Rellena todos los huecos de la pirámide antes de comprobar.");
            return;
        }
        
        const cardValue = slot.children[0].dataset.value;
        if(cardValue !== correctOrder[i-1]) {
            isCorrect = false;
        }
    }
    
    if(isCorrect) {
        mostrarMensajePro("🏆 ¡KNOWBALL PERFECTO!", "Has ordenado la pirámide correctamente.", () => initKnowball());
    } else {
        mostrarMensajePro("❌ ¡CASI!", "El orden no es correcto. ¡Sigue intentándolo!");
    }
}

// --- HIGHER OR LOWER (PREMIER) ---
function initHigherLower() {
    hlState.score = 0;
    document.getElementById('hl-score').innerText = hlState.score;
    document.getElementById('hl-max').innerText = getRecord('hl'); 
    hlState.p1 = premierPlayers[Math.floor(Math.random() * premierPlayers.length)];
    pickNewPlayer2();
    renderHL();
}

function pickNewPlayer2() {
    let available = premierPlayers.filter(p => p.name !== hlState.p1.name);
    hlState.p2 = available[Math.floor(Math.random() * available.length)];
}

function renderHL() {
    document.getElementById('hl-controls').classList.remove('hidden');
    document.getElementById('hl-val-2').classList.add('hidden-val');
    document.getElementById('hl-val-2').innerText = "???";

    document.getElementById('hl-name-1').innerText = hlState.p1.name;
    document.getElementById('hl-val-1').innerText = hlState.p1.value + " M€";
    document.getElementById('hl-img-1').src = `premier/${hlState.p1.name}.jpg`;

    document.getElementById('hl-name-2').innerText = hlState.p2.name;
    document.getElementById('hl-img-2').src = `premier/${hlState.p2.name}.jpg`;
}

function checkHigherLower(guess) {
    let v1 = hlState.p1.value;
    let v2 = hlState.p2.value;
    let isCorrect = (guess === 'higher' && v2 >= v1) || (guess === 'lower' && v2 <= v1);

    document.getElementById('hl-controls').classList.add('hidden');
    const val2El = document.getElementById('hl-val-2');
    val2El.innerText = v2 + " M€";
    val2El.classList.remove('hidden-val');

    setTimeout(() => {
        if (isCorrect) {
            hlState.score++;
            document.getElementById('hl-score').innerText = hlState.score;
            let nuevoRecord = updateRecord('hl', hlState.score); 
            document.getElementById('hl-max').innerText = nuevoRecord; 
            hlState.p1 = hlState.p2;
            pickNewPlayer2();
            renderHL();
        } else {
            updateRecord('hl', hlState.score); 

            let monedasGanadas = hlState.score * 2;
            if (monedasGanadas > 0) {
                addCoins(monedasGanadas);
            }

            let textoMonedas = monedasGanadas > 0 ? `\n¡Te llevas el bote de +${monedasGanadas} FutCoins 🪙!` : "";
            
            mostrarMensajePro(
                "❌ ¡FIN DE LA RACHA!", 
                `El valor de ${hlState.p2.name} es de ${v2} M€.\nHas conseguido ${hlState.score} puntos.${textoMonedas}`, 
                () => initHigherLower()
            );
        }
    }, 1500);
}

// --- GUERRA DE AFOROS (LALIGA) ---
function initAforosGame() {
    aforosState.score = 0;
    document.getElementById('aforos-score').innerText = aforosState.score;
    document.getElementById('aforos-max').innerText = getRecord('aforos'); 
    aforosState.p1 = estadiosLaLiga[Math.floor(Math.random() * estadiosLaLiga.length)];
    pickNewEstadio2();
    renderAforos();
}

function pickNewEstadio2() {
    let available = estadiosLaLiga.filter(p => p.name !== aforosState.p1.name);
    aforosState.p2 = available[Math.floor(Math.random() * available.length)];
}

function renderAforos() {
    document.getElementById('aforos-controls').classList.remove('hidden');
    document.getElementById('aforos-val-2').classList.add('hidden-val');
    document.getElementById('aforos-val-2').innerText = "???";

    document.getElementById('aforos-name-1').innerText = aforosState.p1.name;
    document.getElementById('aforos-val-1').innerText = aforosState.p1.value.toLocaleString('es-ES');
    document.getElementById('aforos-img-1').src = `estadios/${aforosState.p1.name}.jpg`; 

    document.getElementById('aforos-name-2').innerText = aforosState.p2.name;
    document.getElementById('aforos-img-2').src = `estadios/${aforosState.p2.name}.jpg`;
}

function checkAforos(guess) {
    let v1 = aforosState.p1.value;
    let v2 = aforosState.p2.value;
    let isCorrect = (guess === 'higher' && v2 >= v1) || (guess === 'lower' && v2 <= v1);

    document.getElementById('aforos-controls').classList.add('hidden');
    const val2El = document.getElementById('aforos-val-2');
    val2El.innerText = v2.toLocaleString('es-ES');
    val2El.classList.remove('hidden-val');

    setTimeout(() => {
        if (isCorrect) {
            aforosState.score++;
            document.getElementById('aforos-score').innerText = aforosState.score;
            let nuevoRecord = updateRecord('aforos', aforosState.score); 
            document.getElementById('aforos-max').innerText = nuevoRecord; 
            addCoins(2); 
            aforosState.p1 = aforosState.p2;
            pickNewEstadio2();
            renderAforos();
        } else {
            updateRecord('aforos', aforosState.score); 
            mostrarMensajePro("❌ ¡FIN DE LA RACHA!", `El aforo de ${aforosState.p2.name} es de ${v2.toLocaleString('es-ES')} espectadores.\nHas conseguido ${aforosState.score} puntos.`, () => initAforosGame());
        }
    }, 1500);
}

// --- ESCUDOS ZOOM (PREMIER) ---
function initZoomGame() {
    zoomState.team = englishTeamsDB[Math.floor(Math.random() * englishTeamsDB.length)];
    zoomState.lives = 5;
    zoomState.currentScale = 4;
    document.getElementById('zoom-lives').innerText = zoomState.lives;
    document.getElementById('zoom-streak').innerText = zoomState.streak;
    document.getElementById('zoom-max').innerText = getRecord('zoom'); 
    document.getElementById('zoomInput').value = "";
    document.getElementById('zoom-suggestions').innerHTML = "";
    
    const img = document.getElementById('zoom-image');
    img.src = `teams/${zoomState.team}.jpg`; 
    img.style.transform = `scale(${zoomState.currentScale})`;
    
    const randomX = Math.floor(Math.random() * 60) + 20; 
    const randomY = Math.floor(Math.random() * 60) + 20;
    img.style.transformOrigin = `${randomX}% ${randomY}%`;
}

function checkZoomGuess() {
    const val = document.getElementById('zoomInput').value.toUpperCase().trim();
    if (val === zoomState.team) {
        zoomState.streak++;
        let nuevoRecord = updateRecord('zoom', zoomState.streak); 
        document.getElementById('zoom-max').innerText = nuevoRecord; 
        addCoins(2); 
        document.getElementById('zoom-image').style.transform = "scale(1)"; 
        setTimeout(() => mostrarMensajePro("🎯 ¡DIANA!", "Es el escudo del " + zoomState.team + "\n¡Has ganado +2 FutCoins 🪙!", () => initZoomGame()), 800);
    } else {
        zoomState.lives--;
        document.getElementById('zoom-lives').innerText = zoomState.lives;
        
        if (zoomState.lives <= 0) {
            updateRecord('zoom', zoomState.streak); 
            zoomState.streak = 0;
            document.getElementById('zoom-image').style.transform = "scale(1)";
            setTimeout(() => mostrarMensajePro("❌ ¡FALLO!", "Era el escudo del " + zoomState.team, () => initZoomGame()), 800);
        } else {
            zoomState.currentScale = Math.max(1, zoomState.currentScale - 0.6);
            document.getElementById('zoom-image').style.transform = `scale(${zoomState.currentScale})`;
            document.getElementById('zoomInput').value = "";
            document.getElementById('zoomInput').focus();
        }
    }
}

// --- EL TOP 10 ---
function initTop10() {
    const randomList = top10DB[Math.floor(Math.random() * top10DB.length)];
    top10State.currentList = JSON.parse(JSON.stringify(randomList));
    top10State.guessedCount = 0;
    
    document.getElementById('top10-title').innerText = top10State.currentList.title;
    document.getElementById('top10-desc').innerText = top10State.currentList.desc;
    document.getElementById('top10-score').innerText = '0';
    document.getElementById('top10Input').value = "";
    document.getElementById('top10-suggestions').innerHTML = "";
    
    renderTop10List();
    setTimeout(() => document.getElementById('top10Input').focus(), 100);
}

function renderTop10List() {
    const listContainer = document.getElementById('top10-list');
    listContainer.innerHTML = "";
    
    top10State.currentList.items.forEach(item => {
        const div = document.createElement('div');
        div.className = `top10-item ${item.revealed ? 'revealed' : ''}`;
        
        const nameDisplay = item.revealed ? item.name : '????????????';
        
        div.innerHTML = `
            <div class="top10-rank">${item.rank}</div>
            <div class="top10-info">
                <span class="top10-name">${nameDisplay}</span>
                <span class="top10-hint">
                    <img src="banderas/foto-${item.flag}.jpg" alt="${item.flag}" class="flag-icon"> 
                    ${item.stat}
                </span>
            </div>
        `;
        listContainer.appendChild(div);
    });
}

function checkTop10Guess() {
    const inputEl = document.getElementById('top10Input');
    const val = inputEl.value.toUpperCase().trim();
    if(!val) return;
    
    const nVal = removeAccents(val);
    let found = false;
    
    top10State.currentList.items.forEach(item => {
        if (!item.revealed) {
            const nAns = removeAccents(item.name);
            const words = nAns.split(' ');
            
            if (nVal === nAns || words.includes(nVal) || nVal === words[words.length - 1]) {
                item.revealed = true;
                top10State.guessedCount++;
                found = true;
            }
        }
    });
    
    if (found) {
        inputEl.value = "";
        document.getElementById('top10-score').innerText = top10State.guessedCount;
        renderTop10List();
        
        if (top10State.guessedCount === 10) {
            setTimeout(() => mostrarMensajePro("🏆 ¡TOP 10 COMPLETADO!", "¡Conoces a la élite del fútbol al detalle!", () => initTop10()), 800);
        }
    } else {
        inputEl.classList.add("input-error");
        setTimeout(() => {
            inputEl.classList.remove("input-error");
        }, 400);
    }
}

function giveUpTop10() {
    top10State.currentList.items.forEach(item => item.revealed = true);
    renderTop10List();
    setTimeout(() => mostrarMensajePro("🏳️ TE HAS RENDIDO", "Aquí tienes las respuestas que te faltaban. ¡A la próxima!", () => initTop10()), 500);
}

// ==========================================
// 6. EVENT LISTENERS GENERALES
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    setupAutocomplete('wordInput', 'hangman-suggestions');
    setupAutocomplete('blurInput', 'blur-suggestions');
    setupAutocomplete('zoomInput', 'zoom-suggestions'); 
    setupAutocomplete('top10Input', 'top10-suggestions');
    setupAutocomplete('marketBuyInput', 'market-buy-suggestions');
    setupAutocomplete('upgradeInput', 'upgrade-suggestions');
    checkDailyMissions();

    const solveBtn = document.getElementById('solveButton');
    if(solveBtn) solveBtn.onclick = solveFullWord;
    
    const blurBtn = document.getElementById('btnBlurCheck');
    if(blurBtn) blurBtn.onclick = checkBlurGuess;
    
    const tmBtn = document.getElementById('btnTmCheck');
    if(tmBtn) tmBtn.onclick = checkTimeMachineGuess;
    
    const roscoBtn = document.getElementById('btnRoscoCheck');
    if(roscoBtn) roscoBtn.onclick = checkRosco;
    
    const pasaBtn = document.getElementById('btnPasapalabra');
    if(pasaBtn) pasaBtn.onclick = pasapalabra;
    
    const zoomBtn = document.getElementById('btnZoomCheck');
    if(zoomBtn) zoomBtn.onclick = checkZoomGuess; 
    
    const top10Btn = document.getElementById('btnTop10Check');
    if(top10Btn) top10Btn.onclick = checkTop10Guess;
});

document.addEventListener('keydown', (e) => {
    const isTyping = document.activeElement.tagName === 'INPUT';
    
    if (!isTyping && !document.getElementById('hangman-screen').classList.contains('hidden')) {
        const key = e.key.toUpperCase();
        if (QWERTY_LAYOUT.join('').includes(key)) handleInput(key);
    }
    
    if (!isTyping && !document.getElementById('futdle-modal').classList.contains('hidden')) {
        if (e.key === 'Enter') handleWordleKey('ENTER');
        else if (e.key === 'Backspace') handleWordleKey('BACKSPACE');
        else {
            const k = e.key.toUpperCase();
            if (/^[A-ZÑ]$/.test(k)) handleWordleKey(k);
        }
    }

    if (e.key === 'Enter' && isTyping) {
        if (document.activeElement.id === 'wordInput') solveFullWord();
        if (document.activeElement.id === 'blurInput') checkBlurGuess();
        if (document.activeElement.id === 'roscoInput') checkRosco();
        if (document.activeElement.id === 'tmInput') checkTimeMachineGuess();
        if (document.activeElement.id === 'zoomInput') checkZoomGuess(); 
        if (document.activeElement.id === 'top10Input') checkTop10Guess();
        if (document.activeElement.id === 'marketBuyInput') buySpecificPlayer();
    }
});

// ==========================================
// 7. LOCAL STORAGE PARA EL AHORCADO (NUEVO)
// ==========================================
function saveHangmanProgress() {
    localStorage.setItem('f10_hangman_save', JSON.stringify(gameState));
}

function loadHangmanProgress() {
    const saved = localStorage.getItem('f10_hangman_save');
    if (saved) {
        gameState = JSON.parse(saved);
        return true;
    }
    return false;
}

// ==========================================
// 8. DATOS DEL ÁLBUM Y ALINEACIÓN (NUEVO)
// ==========================================
function getAlbumData() {
    return JSON.parse(localStorage.getItem('f10_album')) || { unlocked: [], duplicates: {} };
}

function saveAlbumData(data) {
    localStorage.setItem('f10_album', JSON.stringify(data));
}

function getLineup() {
    return JSON.parse(localStorage.getItem('f10_lineup')) || [];
}

function saveLineup(lineup) {
    localStorage.setItem('f10_lineup', JSON.stringify(lineup));
}

function getPlayerTier(playerName) {
    if (tierLists.bronce.includes(playerName)) return 'bronce';
    if (tierLists.plata.includes(playerName)) return 'plata';
    if (tierLists.oro.includes(playerName)) return 'oro';
    if (tierLists.diamante.includes(playerName)) return 'diamante';
    if (tierLists.platino.includes(playerName)) return 'platino';
    return 'bronce'; // Por si hay algún jugador sin registrar, que sea bronce por defecto.
}

// ==========================================
// 9. LÓGICA DE SOBRES Y MERCADO (NUEVO)
// ==========================================
function initAlbum() {
    document.getElementById('album-coins').innerText = getCoins();
    switchAlbumTab('pack');
}

function switchAlbumTab(tabId) {
    document.querySelectorAll('.album-tab-content').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('.album-tab').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.remove('hidden');
    document.getElementById(`tab-btn-${tabId}`).classList.add('active');

    if (tabId === 'pack') updatePacksProgress(); 
    if (tabId === 'collection') renderAlbum();
    if (tabId === 'market') {
        renderMarket();
        updateUpgradesUI(); // <--- LÍNEA NUEVA
    }
    if (tabId === 'play') {
        renderLineupPitch();
        renderTopScorers(); // <--- LLAMADA NUEVA AQUÍ
    
    }
}

// NUEVA FUNCIÓN PARA LA TABLA TOP 10 EN EL CAMPO
function renderTopScorers() {
    let container = document.getElementById('top-scorers-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'top-scorers-container';
        container.style.width = '100%';
        container.style.maxWidth = '400px';
        container.style.margin = '30px auto 0 auto'; // Centrado debajo del botón de jugar
        document.getElementById('tab-play').appendChild(container);
    }
    
    let scorers = JSON.parse(localStorage.getItem('f10_top_scorers')) || {};
    // Ahora coge el Top 10 en lugar del Top 5
    let sortedScorers = Object.entries(scorers).sort((a, b) => b[1] - a[1]).slice(0, 10); 

    let html = `<h4 style="color:var(--primary); font-family:'Orbitron'; text-align:center; margin-bottom: 15px; text-shadow: 0 0 10px rgba(0,255,135,0.3);">⚽ TOP 10 GOLEADORES HISTÓRICOS</h4>`;
    
    if(sortedScorers.length > 0) {
        html += `<div style="background: rgba(0,0,0,0.4); border-radius: 12px; padding: 10px; border: 1px solid rgba(0,255,135,0.2);">`;
        sortedScorers.forEach((s, i) => {
            // Colores especiales para Oro, Plata y Bronce en el Top 3
            let color = i === 0 ? '#ffd700' : (i === 1 ? '#c0c0c0' : (i === 2 ? '#cd7f32' : 'white'));
            html += `
            <div style="display: flex; justify-content: space-between; padding: 8px 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-family: 'Orbitron'; font-size: 0.9rem;">
                <span style="color: ${color}; font-weight: bold;">#${i+1} ${s[0]}</span>
                <span style="color: var(--primary);">${s[1]} Goles</span>
            </div>`;
        });
        html += `</div>`;
    } else {
        html += `<p style="text-align: center; color: #777; font-family: 'Orbitron';">Aún no has marcado goles con tu equipo.</p>`;
    }
    
    container.innerHTML = html;
}

function getSpanishDateString() {
    return new Intl.DateTimeFormat('es-ES', {
        timeZone: 'Europe/Madrid',
        year: 'numeric', month: '2-digit', day: '2-digit'
    }).format(new Date());
}

function openFreePack(event) {
    const today = getSpanishDateString();
    const lastOpened = localStorage.getItem('f10_last_free_pack');
    
    if (lastOpened === today) {
        mostrarMensajePro("⏳ PACIENCIA", "Ya abriste tu sobre gratis de hoy. Vuelve mañana a partir de las 00:00 (hora de España).");
        return;
    }

    localStorage.setItem('f10_last_free_pack', today);
    // El sobre gratis da 2 jugadores aleatorios de cualquier nivel (o cámbialo a 'bronce' si quieres que sea solo bronce)
    generatePackCards(2, 'gratis'); 
}

function openPack(event, type) {
    const prices = { bronce: 25, plata: 50, oro: 100, diamante: 200, platino: 400 };
    const cost = prices[type];
    
    if (getCoins() < cost) {
        mostrarMensajePro("⚠️ SIN MONEDAS", `Necesitas ${cost} 🪙 para abrir este sobre.`);
        return;
    }
    
    addCoins(-cost);
    document.getElementById('album-coins').innerText = getCoins();
    generatePackCards(3, type); // Le pasamos el 'type' para que sepa qué sobre abres
}

function generatePackCards(amount, packType) {
    const revealContainer = document.getElementById('reveal-cards-container');
    revealContainer.innerHTML = "";
    let data = getAlbumData();
    
    // Seleccionamos la piscina de jugadores según el sobre
    let pool = [];
    if (packType === 'gratis') {
        pool = players; // El sobre gratis saca de todos los jugadores
    } else {
        pool = tierLists[packType]; // El sobre específico saca solo de su tier
    }

    // Por seguridad, si el sobre está vacío, salimos
    if (!pool || pool.length === 0) return;
    
    for(let i=0; i<amount; i++) {
        let randomPlayer = pool[Math.floor(Math.random() * pool.length)];
        let tier = getPlayerTier(randomPlayer);
        
        if (!data.unlocked.includes(randomPlayer)) {
            data.unlocked.push(randomPlayer);
        } else {
            data.duplicates[randomPlayer] = (data.duplicates[randomPlayer] || 0) + 1;
        }

        const card = document.createElement('div');
        card.className = `f10-card tier-${tier}`;
        card.innerHTML = `<img src="players/${randomPlayer}.jpg"><div class="card-name">${randomPlayer}</div>`;
        revealContainer.appendChild(card);
    }
    
    saveAlbumData(data);
    document.getElementById('pack-container').classList.add('hidden');
    document.getElementById('pack-reveal').classList.remove('hidden');
}

function closePackReveal() {
    document.getElementById('pack-reveal').classList.add('hidden');
    document.getElementById('pack-container').classList.remove('hidden');
    updatePacksProgress(); // <--- LÍNEA NUEVA
}

function buySpecificPlayer() {
    const input = document.getElementById('marketBuyInput');
    const name = input.value.toUpperCase().trim();
    
    if (!players.includes(name)) {
        mostrarMensajePro("❌ ERROR", "Ese jugador no existe en la base de datos.");
        return;
    }
    
    if (getCoins() < 750) {
        mostrarMensajePro("⚠️ SIN FONDOS", "Necesitas 750 FutCoins para comprar a la carta.");
        return;
    }
    
    let data = getAlbumData();
    if (data.unlocked.includes(name)) {
        mostrarMensajePro("ℹ️ YA LO TIENES", "Este jugador ya está en tu álbum.");
        return;
    }
    
    addCoins(-750);
    data.unlocked.push(name);
    saveAlbumData(data);
    
    input.value = "";
    mostrarMensajePro("🤝 ¡FICHAJE CERRADO!", `¡Has fichado a ${name} con éxito!`);
    renderMarket();
}

// ==========================================
// 10. RENDERIZADO DE ÁLBUM, MERCADO Y PROGRESO
// ==========================================

// Nuevos precios de venta por Tier
const sellPrices = { bronce: 5, plata: 10, oro: 25, diamante: 50, platino: 100 };

// Calcula y pinta cuántas cartas tienes de cada sobre
function updatePacksProgress() {
    const data = getAlbumData();
    const tiers = ['bronce', 'plata', 'oro', 'diamante', 'platino'];
    
    tiers.forEach(tier => {
        const totalInTier = tierLists[tier].length;
        const unlockedInTier = tierLists[tier].filter(p => data.unlocked.includes(p)).length;
        const progEl = document.getElementById(`prog-${tier}`);
        if (progEl) {
            progEl.innerText = `${unlockedInTier}/${totalInTier}`;
            if (unlockedInTier === totalInTier) {
                progEl.style.color = "#00ff87"; // En verde si completó ese tier
            }
        }
    });

    // Para el sobre gratis (progreso total)
    const progGratis = document.getElementById('prog-gratis');
    if(progGratis) progGratis.innerText = `${data.unlocked.length}/${players.length}`;
}

function populateTeamFilter() {
    const select = document.getElementById('filter-team');
    if(select.options.length > 1) return; // Si ya se llenó, no repetir
    Object.keys(dbEquipos).sort().forEach(club => {
        const opt = document.createElement('option');
        opt.value = club;
        opt.innerText = club;
        select.appendChild(opt);
    });
}

function renderAlbum() { 
    populateTeamFilter(); // Rellena el selector de equipos
    
    const data = getAlbumData();
    const grid = document.getElementById('album-grid'); 
    grid.innerHTML = ""; 
    
    // Obtener valores de los filtros
    const fTeam = document.getElementById('filter-team').value;
    const fTier = document.getElementById('filter-tier').value;
    const fStatus = document.getElementById('filter-status').value;

    let unlockedCount = 0; 
    let displayCount = 0;
    
    players.forEach(p => { 
        const isUnlocked = data.unlocked.includes(p); 
        if (isUnlocked) unlockedCount++; 
        
        const pData = playerStats[p];
        
        // Aplicar filtros
        if (fTeam !== 'all' && pData.club !== fTeam) return;
        if (fTier !== 'all' && pData.tier !== fTier) return;
        if (fStatus === 'unlocked' && !isUnlocked) return;
        if (fStatus === 'locked' && isUnlocked) return;
        
        displayCount++;
        const card = document.createElement('div'); 
        
        if (isUnlocked) { 
            card.className = `f10-card tier-${pData.tier}`; 
            card.innerHTML = `<div style="position:absolute;top:2px;right:2px;background:black;color:#00ff87;font-weight:bold;padding:2px 4px;border-radius:5px;font-size:0.7rem;z-index:2;">${pData.rating}</div>
                              <img src="players/${p}.jpg" class="player-img"> 
                              <div class="card-name">${p}</div>`; 
        } else { 
            card.className = `f10-card locked`; 
            card.innerHTML = `🔒 ${p}`; 
        }
        
        grid.appendChild(card); 
    });

    const progressText = document.getElementById('album-progress-text'); 
    if(progressText) { 
        progressText.innerHTML = `${unlockedCount}/${players.length} <span style="font-size:0.8rem; color:#888;">(Mostrando: ${displayCount})</span>`;
    } 
}

function renderMarket() {
    const data = getAlbumData();
    const grid = document.getElementById('market-grid');
    grid.innerHTML = "";
    
    let hasDuplicates = false;
    let totalValue = 0;
    
    Object.keys(data.duplicates).sort().forEach(p => {
        if (data.duplicates[p] > 0) {
            hasDuplicates = true;
            const tier = getPlayerTier(p);
            const price = sellPrices[tier] || 5;
            const amount = data.duplicates[p];
            totalValue += price * amount; // Sumamos al bote total

            const cardItem = document.createElement('div');
            cardItem.className = 'market-item';
            
            cardItem.innerHTML = `
                <div class="f10-card tier-${tier}" style="width: 100px;">
                    <img src="players/${p}.jpg"><div class="card-name" style="font-size: 0.6rem;">${p}</div>
                </div>
                <div style="color:white; font-size:0.8rem; font-family:'Orbitron', sans-serif;">Repetidos: ${amount}</div>
                <button class="sell-btn" onclick="sellDuplicate('${p}')">VENDER (+${price}🪙)</button>
            `;
            grid.appendChild(cardItem);
        }
    });

    // Lógica para el botón Vender Todos
    const sellAllBtn = document.getElementById('btn-sell-all');
    if(sellAllBtn) {
        if(hasDuplicates) {
            sellAllBtn.classList.remove('hidden');
            sellAllBtn.innerText = `VENDER TODOS (+${totalValue}🪙)`;
        } else {
            sellAllBtn.classList.add('hidden');
        }
    }

    if(!hasDuplicates) {
        grid.innerHTML = `<p style="color:var(--text-dim); grid-column: 1 / -1; font-family:'Orbitron', sans-serif;">No tienes cartas repetidas para vender.</p>`;
    }
}

function sellDuplicate(playerName) {
    let data = getAlbumData();
    if (data.duplicates[playerName] > 0) {
        data.duplicates[playerName]--;
        if (data.duplicates[playerName] === 0) delete data.duplicates[playerName];
        saveAlbumData(data);
        
        // Coge el precio dinámico por su Tier
        const tier = getPlayerTier(playerName);
        const price = sellPrices[tier] || 5;
        
        addCoins(price);
        document.getElementById('album-coins').innerText = getCoins();
        renderMarket();
    }
}

// Nueva función Vender Todo
function sellAllDuplicates() {
    let data = getAlbumData();
    let totalCoins = 0;
    let soldAny = false;
    
    Object.keys(data.duplicates).forEach(p => {
        if (data.duplicates[p] > 0) {
            const tier = getPlayerTier(p);
            const price = sellPrices[tier] || 5;
            totalCoins += price * data.duplicates[p];
            delete data.duplicates[p]; // Borramos al repetido tras venderlo
            soldAny = true;
        }
    });
    
    if(soldAny) {
        saveAlbumData(data);
        addCoins(totalCoins);
        document.getElementById('album-coins').innerText = getCoins();
        renderMarket();
        mostrarMensajePro("💸 VENTA MASIVA", `Has vendido todos tus repetidos y has ganado +${totalCoins} FutCoins 🪙.`);
    }
}

// ==========================================
// 11. ALINEACIÓN (11 IDEAL) Y PARTIDO TÁCTICO
// ==========================================

const formationsMap = {
    balanced: {
        // 4-4-2: 2 delanteros, 4 medios, 4 defensas, 1 portero
        positions: ["POR", "LI", "DFC", "DFC", "LD", "MC", "MC", "MC", "MC", "DC", "DC"],
        // Ordenado de izquierda a derecha
        rows: [[9, 10], [5, 6, 7, 8], [1, 2, 3, 4], [0]]
    },
    offensive: {
        // 4-3-3: 3 delanteros, 3 medios, 4 defensas, 1 portero
        positions: ["POR", "LI", "DFC", "DFC", "LD", "MC", "MC", "MCO", "EI", "DC", "ED"],
        // Nuevos saltos de línea (MCO y extremos separados)
        rows: [[8, 9, 10], [7], [5, 6], [1, 2, 3, 4], [0]]
    },
    defensive: {
        // 5-4-1: 1 delantero, 4 medios, 5 defensas, 1 portero
        positions: ["POR", "LI", "DFC", "DFC", "DFC", "LD", "MCD", "MCD", "MC", "MC", "DC"],
        // Nuevos saltos de línea (MCD y MC separados)
        rows: [[10], [8, 9], [6, 7], [1, 2, 3, 4, 5], [0]]
    }
};

function getCurrentFormation() {
    const select = document.getElementById('match-tactic');
    return formationsMap[select ? select.value : 'balanced'];
}

function renderLineupPitch() {
    const pitch = document.getElementById('lineup-pitch');
    let lineup = getLineup();
    while (lineup.length < 11) lineup.push(null);
    
    const formation = getCurrentFormation();
    const formationPositions = formation.positions;
    const rows = formation.rows;

    // VALIDACIÓN: Eliminar jugadores que no sean compatibles con la nueva formación
    let lineupChanged = false;
    for (let i = 0; i < 11; i++) {
        const pName = lineup[i];
        if (pName) {
            const reqPos = formationPositions[i];
            const pPositions = getPlayerPositions(pName); 
            // Si el jugador no tiene la posición requerida para este hueco, lo quitamos
            if (!pPositions.includes(reqPos)) {
                lineup[i] = null; 
                lineupChanged = true;
            }
        }
    }
    
    // Si se eliminó algún jugador inválido, guardamos la alineación actualizada
    if (lineupChanged) {
        saveLineup(lineup);
    }

    pitch.innerHTML = "";

    rows.forEach(rowIndices => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'pitch-row';
        rowIndices.forEach(idx => {
            const pName = lineup[idx];
            const reqPos = formationPositions[idx]; 
            
            const slot = document.createElement('div');
            slot.className = 'player-slot clickable';
            
            if (pName) {
                const tier = getPlayerTier(pName);
                slot.innerHTML = `
                    <div style="color: #ffd700; font-size: 0.6rem; font-weight: bold; margin-bottom: 2px;">${reqPos}</div>
                    <div class="f10-card tier-${tier}" style="width: clamp(35px, 12vw, 60px); aspect-ratio: 2.5/3.5; margin-bottom: 3px;">
                        <img src="players/${pName}.jpg" style="height: 100%; border-bottom: 1px solid rgba(255,255,255,0.5);">
                    </div>
                    <div class="name" style="font-size: clamp(0.45rem, 1.5vw, 0.65rem); background: rgba(0,0,0,0.8);">${pName}</div>
                    <div style="background: var(--primary); color: black; font-size: 0.6rem; font-weight: bold; border-radius: 3px; padding: 1px 4px; margin-top: 2px;">${getPlayerRating(pName)}</div>
                `;
            } else {
                slot.innerHTML = `
                    <div style="color: #ffd700; font-size: 0.6rem; font-weight: bold; margin-bottom: 2px;">${reqPos}</div>
                    <div class="shirt empty">➕</div>
                    <div class="name hidden-name" style="font-size: clamp(0.45rem, 1.5vw, 0.65rem);">FICHAR</div>
                `;
            }
            slot.onclick = () => openLineupSelector(idx, reqPos);
            rowDiv.appendChild(slot);
        });
        pitch.appendChild(rowDiv);
    });
}

function openLineupSelector(slotIdx, reqPos) {
    currentLineupSlot = slotIdx;
    const data = getAlbumData();
    const currentLineup = getLineup();
    const grid = document.getElementById('lineup-selector-grid');
    grid.innerHTML = "";

    // FILTRAMOS: Solo jugadores del álbum, que tengan la posición reqPos y que no estén ya en el 11
    const validPlayers = data.unlocked.filter(p => {
        return playerStats[p] && playerStats[p].positions.includes(reqPos);
    }).sort((a, b) => getPlayerRating(b) - getPlayerRating(a)); // Ordenados por media

    validPlayers.forEach(p => {
        const isSelected = currentLineup.includes(p);
        const tier = getPlayerTier(p);
        const card = document.createElement('div');
        card.className = `f10-card tier-${tier} ${isSelected ? 'selected-in-lineup' : 'clickable'}`;
        card.style.width = "100px"; 
        card.innerHTML = `
            <div style="position: absolute; top: 2px; right: 2px; background: black; color: #00ff87; font-weight: bold; padding: 2px 4px; border-radius: 5px; font-size: 0.7rem;">${getPlayerRating(p)}</div>
            <img src="players/${p}.jpg">
            <div class="card-name" style="font-size: 0.6rem;">${p}</div>
        `;
        if (!isSelected) card.onclick = () => selectPlayerForLineup(p);
        grid.appendChild(card);
    });

    if(validPlayers.length === 0) {
        grid.innerHTML = `<p style="color:var(--error); font-family:'Orbitron';">No tienes cartas desbloqueadas con la posición ${reqPos}. ¡Abre más sobres!</p>`;
    }

    document.getElementById('lineup-selector-modal').classList.remove('hidden');
}

function selectPlayerForLineup(pName) {
    let lineup = getLineup();
    while(lineup.length < 11) lineup.push(null);
    lineup[currentLineupSlot] = pName;
    saveLineup(lineup);
    closeLineupSelector();
    renderLineupPitch();
}

function closeLineupSelector() {
    document.getElementById('lineup-selector-modal').classList.add('hidden');
}


// ==========================================
// 11. PARTIDO TÁCTICO VS CPU (ACTUALIZADO)
// ==========================================
let matchInterval;
function playMatchVsCPU() {
    if (tournamentState.active) {
        // Si ya está activo, pasa a la siguiente ronda directamente
        startMatchSimulation();
        return;
    }

    const lineup = getLineup();
    if (lineup.filter(p => p !== null).length < 11) {
        mostrarMensajePro("⚠️ PLANTILLA INCOMPLETA", "Necesitas tener a los 11 jugadores en sus posiciones correctas.");
        return;
    }

    // Cobro de 75 monedas de Inscripción
    if (getCoins() < 75) {
        mostrarMensajePro("⚠️ SIN FONDOS", "Necesitas 75 FutCoins para pagar la inscripción al torneo.");
        return;
    }

    addCoins(-75); // Resta las monedas en la base de datos
    document.getElementById('album-coins').innerText = getCoins(); // Actualiza el número visualmente al instante
    
    tournamentState.active = true;
    tournamentState.roundIndex = 0;
    tournamentState.facedTeams = []; // Reseteamos los rivales al empezar
    
    startMatchSimulation();
}
// NUEVA FUNCIÓN AUXILIAR PARA CALCULAR LA MEDIA DE UN RIVAL
function getTeamRating(clubName) {
    let total = 0;
    const roster = [...dbEquipos[clubName]].sort((a, b) => b.rating - a.rating).slice(0, 11);
    roster.forEach(p => total += p.rating);
    return Math.floor(total / 11);
}

// SIMULADOR CON DIFICULTAD PROGRESIVA
function startMatchSimulation() {
    const lineup = getLineup();
    let myTotalRating = 0;
    lineup.forEach(p => { if(p) myTotalRating += getPlayerRating(p); });
    let myRating = Math.floor(myTotalRating / 11);

    // 1. Calculamos la media de todos los equipos y los ordenamos de PEOR a MEJOR
    let allTeams = Object.keys(dbEquipos).map(club => {
        return { name: club, rating: getTeamRating(club) };
    }).sort((a, b) => a.rating - b.rating);

    // 2. Filtramos los que ya hemos eliminado en rondas anteriores
    let availableTeams = allTeams.filter(t => !tournamentState.facedTeams.includes(t.name));

    let rivalClubObj;
    
    // 3. Lógica de Dificultad Progresiva
    if (tournamentState.roundIndex === 0) {
        // CUARTOS: Selecciona uno de los 2 peores equipos disponibles
        let easyTier = availableTeams.slice(0, 2);
        rivalClubObj = easyTier[Math.floor(Math.random() * easyTier.length)];
    } else if (tournamentState.roundIndex === 1) {
        // SEMIFINALES: Selecciona un equipo de media tabla superior
        let midIndex = Math.floor(availableTeams.length / 2);
        rivalClubObj = availableTeams[midIndex];
    } else {
        // FINAL: Selecciona a la fuerza al MEJOR equipo restante
        rivalClubObj = availableTeams[availableTeams.length - 1];
    }

    const rivalClub = rivalClubObj.name;
    const cpuRating = rivalClubObj.rating;
    
    // Guardamos el rival en el historial para no repetirlo
    tournamentState.facedTeams.push(rivalClub);

    const cpuRoster = [...dbEquipos[rivalClub]].sort((a,b) => b.rating - a.rating).slice(0, 11);

    matchState = { 
        minute: 0, 
        addedTime: Math.floor(Math.random() * 4) + 2, 
        myGoals: 0, cpuGoals: 0, myPenalties: 0, cpuPenalties: 0,
        myRating: myRating, cpuRating: cpuRating, 
        cpuClub: rivalClub, cpuPlayers: cpuRoster, 
        isFinished: false, phase: 'regular' 
    };

    document.getElementById('match-competition').innerText = `COPA F10 - ${tournamentState.rounds[tournamentState.roundIndex]}`;
    document.getElementById('my-team-rating').innerText = `Media: ${myRating}`;
    document.getElementById('cpu-team-name').innerText = rivalClub;
    document.getElementById('cpu-team-rating').innerText = `Media: ${cpuRating}`;
    document.getElementById('match-score-my').innerText = '0';
    document.getElementById('match-score-cpu').innerText = '0';
    document.getElementById('match-clock').innerText = "00";
    document.getElementById('match-minute-progress').style.width = "0%";
    
    const btn = document.getElementById('match-close-btn');
    btn.classList.add('hidden');
    btn.innerText = "CONTINUAR";
    
    const logDiv = document.getElementById('match-live-log');
    logDiv.innerHTML = `<div style="color: #00ff87; font-weight: bold; text-align: center;">🟢 ¡COMIENZA EL PARTIDO!</div>`;

    document.getElementById('match-simulation-modal').classList.remove('hidden');

    if(matchInterval) clearInterval(matchInterval);
    matchInterval = setInterval(simulateMinute, 100);
}
function simulateMinute() {
    if (matchState.isFinished) return;

    matchState.minute++;
    let totalMinutes = matchState.phase === 'extra' ? 120 + matchState.addedTime : 90 + matchState.addedTime;
    
    document.getElementById('match-clock').innerText = matchState.minute;
    document.getElementById('match-minute-progress').style.width = `${(matchState.minute / totalMinutes) * 100}%`;

    // Final del tiempo reglamentario / Prórroga
    if (matchState.minute >= totalMinutes) {
        if (matchState.myGoals === matchState.cpuGoals) {
            if (matchState.phase === 'regular') {
                matchState.phase = 'extra';
                matchState.minute = 90;
                matchState.addedTime = 1;
                logEvent("⏱️ ¡FINAL! Nos vamos a la PRÓRROGA.", "#ffd700");
                return;
            } else if (matchState.phase === 'extra') {
                matchState.phase = 'penalties';
                clearInterval(matchInterval);
                logEvent("⏱️ ¡FINAL DE LA PRÓRROGA! Nos vamos a los PENALTIS.", "#ffd700");
                setTimeout(startPenalties, 2000);
                return;
            }
        } else {
            matchState.isFinished = true;
            clearInterval(matchInterval);
            endSimulatedMatch();
            return;
        }
    }

    // Lógica de goles (Mantenemos tu base)
    let randomRoll = Math.random();
    let diff = matchState.myRating - matchState.cpuRating;
    let myChance = 0.012 + (diff * 0.001); 
    let cpuChance = 0.012 - (diff * 0.001);

    if(myChance < 0.002) myChance = 0.002;
    if(cpuChance < 0.002) cpuChance = 0.002;

    if (randomRoll < myChance) scoreGoal('me');
    else if (randomRoll > 1 - cpuChance) scoreGoal('cpu');
}

function startPenalties() {
    let myShots = 0, cpuShots = 0;
    let diff = matchState.myRating - matchState.cpuRating;
    let myHitChance = Math.max(0.4, Math.min(0.9, 0.75 + (diff * 0.01)));
    let cpuHitChance = Math.max(0.4, Math.min(0.9, 0.75 - (diff * 0.01)));

    logEvent("🎯 <strong>COMIENZA LA TANDA DE PENALTIS</strong>", "#00d2ff");

    function shoot() {
        // Comprobar eliminación matemática
        let myRemaining = 5 - myShots;
        let cpuRemaining = 5 - cpuShots;

        if (myShots === cpuShots) { // Tanda igualada (ej. ambos tiraron 3)
            if (myShots < 5) {
                if (matchState.myPenalties + myRemaining < matchState.cpuPenalties) return finishPenalties();
                if (matchState.cpuPenalties + cpuRemaining < matchState.myPenalties) return finishPenalties();
            } else {
                if (matchState.myPenalties !== matchState.cpuPenalties) return finishPenalties(); // Muerte súbita resuelta
            }
        }

        // Tiramos el penalti (alternando)
        if (myShots === cpuShots) {
            myShots++;
            let goal = Math.random() < myHitChance;
            if (goal) matchState.myPenalties++;
            logEvent(`🟢 Tanda ${myShots} (Tú): ${goal ? '⚽ MARCAS' : '❌ FALLAS'} [${matchState.myPenalties} - ${matchState.cpuPenalties}]`, goal ? "#00ff87" : "#ff4d4d");
            setTimeout(shoot, 1000);
        } else {
            cpuShots++;
            let goal = Math.random() < cpuHitChance;
            if (goal) matchState.cpuPenalties++;
            logEvent(`🔴 Tanda ${cpuShots} (CPU): ${goal ? '⚽ MARCA' : '❌ FALLA'} [${matchState.myPenalties} - ${matchState.cpuPenalties}]`, goal ? "#ff4d4d" : "#ff4d4d");
            setTimeout(shoot, 1000);
        }
    }
    shoot();
}

function finishPenalties() {
    logEvent(`🏁 <strong>FIN PENALTIS: ${matchState.myPenalties} - ${matchState.cpuPenalties}</strong>`, "#ffd700");
    if (matchState.myPenalties > matchState.cpuPenalties) {
        matchState.myGoals++; // Sumamos 1 gol al marcador general para desempatar visualmente
    } else {
        matchState.cpuGoals++;
    }
    document.getElementById('match-score-my').innerText = matchState.myGoals;
    document.getElementById('match-score-cpu').innerText = matchState.cpuGoals;
    
    matchState.isFinished = true;
    setTimeout(endSimulatedMatch, 1000);
}

function scoreGoal(team) {
    const lineup = getLineup();
    let scorer = "Jugador";
    let assister = null;
    let color = "";
    
    // ¡LA CLAVE ESTÁ AQUÍ! Obtenemos las posiciones dinámicas de tu táctica actual
    const currentFormation = getCurrentFormation().positions;

    // Subfunción para elegir goleador con probabilidades (Excluye porteros)
    function getRandomScorer(playersArr, isUser) {
        let weights = [];
        playersArr.forEach((p, idx) => {
            if(!p) return;
            // Si eres tú, lee de currentFormation. Si es CPU, lee de la base de datos
            let pos = isUser ? currentFormation[idx] : p.positions[0]; 
            
            let w = 0; // 0 por defecto (Portero nunca marcará)
            if (["DC", "EI", "ED"].includes(pos)) w = 60; // 60% Delanteros
            else if (["MC", "MCO", "MCD"].includes(pos)) w = 25; // 25% Medios
            else if (["DFC", "LI", "LD"].includes(pos)) w = 10; // 10% Defensas
            
            if (w > 0) weights.push({player: isUser ? p : p.name, weight: w});
        });

        if (weights.length === 0) return isUser ? "Jugador" : "CPU"; // Por si falla
        let totalWeight = weights.reduce((acc, curr) => acc + curr.weight, 0);
        let rand = Math.random() * totalWeight;
        let sum = 0;
        for (let item of weights) {
            sum += item.weight;
            if (rand <= sum) return item.player;
        }
        return weights[0].player;
    }

    if (team === 'me') {
        matchState.myGoals++;
        color = "#00ff87";
        document.getElementById('match-score-my').innerText = matchState.myGoals;
        scorer = getRandomScorer(lineup, true);
        
        // Asistencias (50% probabilidad)
        if (Math.random() > 0.5) {
            let possibleAssisters = lineup.filter((p, idx) => p && p !== scorer && currentFormation[idx] !== "POR");
            if(possibleAssisters.length > 0) assister = possibleAssisters[Math.floor(Math.random() * possibleAssisters.length)];
        }
        
        // Guardamos las estadísticas del goleador
        try {
            if (typeof registerGoalStats === 'function') {
                registerGoalStats(scorer); 
            }
        } catch (error) {
            console.error("Error guardando stats:", error);
        }
        
    } else {
        matchState.cpuGoals++;
        color = "#ff4d4d";
        document.getElementById('match-score-cpu').innerText = matchState.cpuGoals;
        
        scorer = getRandomScorer(matchState.cpuPlayers, false);
        
        // Asistencias CPU
        if (Math.random() > 0.5) {
            let possibleAssisters = matchState.cpuPlayers.filter(p => p.name !== scorer && p.positions[0] !== "POR");
            if(possibleAssisters.length > 0) assister = possibleAssisters[Math.floor(Math.random() * possibleAssisters.length)].name;
        }
    }

    const modalBox = document.getElementById('match-modal-box');
    if (modalBox) {
        modalBox.classList.add('anim-goal-shake');
        setTimeout(() => modalBox.classList.remove('anim-goal-shake'), 400);
    }

    let text = `⚽ <strong>¡GOL!</strong> [${matchState.minute}'] Marca <strong>${scorer}</strong>.`;
    if (assister) text += ` Asistencia de ${assister}.`;
    
    logEvent(text, color);
}
function registerGoalStats(playerName) {
    let stats = JSON.parse(localStorage.getItem('f10_top_scorers')) || {};
    stats[playerName] = (stats[playerName] || 0) + 1;
    localStorage.setItem('f10_top_scorers', JSON.stringify(stats));
}

function logEvent(text, color) {
    const logDiv = document.getElementById('match-live-log');
    const entry = document.createElement('div');
    entry.style.color = color || "white";
    entry.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
    entry.style.paddingBottom = "5px";
    entry.innerHTML = text;
    logDiv.appendChild(entry);
    
    // Auto-scroll al fondo
    logDiv.scrollTop = logDiv.scrollHeight;
}

function endSimulatedMatch() {
    logEvent("🏁 <strong>¡FINAL DEL PARTIDO!</strong>", "#ffd700");
    const btn = document.getElementById('match-close-btn');
    
    if (matchState.myGoals > matchState.cpuGoals) {
        if (tournamentState.roundIndex === 2) { // Ganó la final
            logEvent("🏆 ¡CAMPEÓN DEL TORNEO! Has ganado +150 FutCoins 🪙", "#00ff87");
            addCoins(150);
            // NUEVO: Sumar el torneo y checkear la SuperCoin
            let won = addTournamentWon();
            logEvent(`🏆 Torneos en tu palmarés: ${won}`, "#ffd700");
            if (won % 10 === 0) logEvent("💎 ¡HAS GANADO UNA SUPERCOIN! (x10 Torneos)", "#00ffff");
            // FIN NUEVO
            tournamentState.active = false;
            btn.innerText = "RECLAMAR Y SALIR";
        } else {
            logEvent(`✅ ¡VICTORIA! Avanzas a ${tournamentState.rounds[tournamentState.roundIndex + 1]}`, "#00ff87");
            btn.innerText = "JUGAR SIGUIENTE RONDA";
        }
    } else { // Derrota
        if (tournamentState.roundIndex === 0) {
            logEvent("❌ Eliminado en Cuartos. Pierdes tu inscripción.", "#ff4d4d");
        } else if (tournamentState.roundIndex === 1) {
            logEvent("🥉 Eliminado en Semifinales. Ganas +75 FutCoins 🪙", "#ff4d4d");
            addCoins(75);
        } else if (tournamentState.roundIndex === 2) {
            logEvent("🥈 Subcampeón del torneo. Ganas +100 FutCoins 🪙", "#c0c0c0");
            addCoins(100);
        }
        tournamentState.active = false;
        btn.innerText = "FINALIZAR TORNEO";
    }

    btn.classList.remove('hidden');
}

function closeMatchModal() {
    // Si ganamos y sigue activo el torneo, jugamos la siguiente ronda.
    if (tournamentState.active) {
        tournamentState.roundIndex++;
        startMatchSimulation();
    } else {
        // Si perdimos o ganamos la final, cerramos y vamos al menú del álbum
        document.getElementById('match-simulation-modal').classList.add('hidden');
        document.getElementById('album-coins').innerText = getCoins();
    }
}
// ==========================================
// TARJETAS PRE-JUEGO (INFO Y MODO)
// ==========================================
const gamesDatabase = {
    'top10': {
        title: 'EL TOP 10', color: '#f5cf8e', 
        desc: 'Completa la lista de los 10 jugadores de la categoría sin rendirte. ¡Demuestra tu conocimiento futbolístico!',
        initFn: () => showGame('top10')
    },
    'hangman': {
        title: 'EL AHORCADO', color: '#ff4d4d', 
        desc: 'Adivina el jugador misterioso letra por letra. Tienes un máximo de 6 fallos antes de recibir la tarjeta roja.',
        initFn: () => showGame('hangman')
    },
    'blur': {
        title: 'BLUR GUESS', color: '#ff4d4d', 
        desc: 'Adivina quién es el jugador oculto tras el filtro borroso. Cada fallo aclarará un poco más la imagen.',
        initFn: () => showGame('blur')
    },
    'aforos': {
        title: 'GUERRA AFOROS', color: '#ff4d4d', 
        desc: 'Compara dos estadios y elige el que tiene mayor capacidad. ¡Mantén la racha viva para multiplicar premios!',
        initFn: () => showGame('aforos')
    },
    'tm': {
        title: 'MÁQUINA TIEMPO', color: '#ffd700', 
        desc: 'Adivina en qué año ocurrió el evento histórico. Te diremos si necesitas ir más atrás o más adelante en el tiempo.',
        initFn: () => showGame('timemachine')
    },
    'hl': {
        title: 'HIGHER LOWER', color: '#9b59b6', 
        desc: '¿Qué jugador tiene mayor valor de mercado en la actualidad? Adivina correctamente para sumar puntos.',
        initFn: () => showGame('higherlower')
    },
    'zoom': {
        title: 'ESCUDOS ZOOM', color: '#9b59b6', 
        desc: 'Intenta reconocer el equipo a partir de un fragmento de su escudo ampliado al máximo.',
        initFn: () => showGame('zoom')
    },
    'knowball': {
        title: 'KNOWBALL', color: '#00ff87', 
        desc: 'Ordena la pirámide de jugadores del 1 al 5 según la estadística indicada. ¡Demuestra que tienes Knowball!',
        initFn: () => showGame('knowball')
    },
    'futdle': {
        title: 'XI HISTÓRICO', color: '#00ff87', 
        desc: 'Adivina los 11 jugadores de esta alineación histórica antes de que se agote el reloj.',
        initFn: () => showGame('eleven')
    }
};

let pendingGameInit = null;

function showGameInfo(gameId) {
    const game = gamesDatabase[gameId];
    if (!game) return;

    // Cambiar textos
    document.getElementById('game-info-title').innerText = game.title;
    document.getElementById('game-info-title').style.color = game.color;
    document.getElementById('game-info-desc').innerText = game.desc;
    
    // Cambiar colores dinámicos del modal y botones
    const card = document.getElementById('game-info-card');
    card.style.borderColor = game.color;
    card.style.boxShadow = `0 0 30px ${game.color}40`; // Efecto Glow adaptativo
    
    const btnSingle = document.getElementById('btn-play-single');
    btnSingle.style.borderColor = game.color;
    btnSingle.style.color = game.color;

    // Guardar la función de inicialización del juego seleccionado
    pendingGameInit = game.initFn;

    // Mostrar el modal por encima del menú
    document.getElementById('game-info-modal').classList.remove('hidden');
}

function closeGameInfo() {
    document.getElementById('game-info-modal').classList.add('hidden');
}

function startGameFromInfo() {
    closeGameInfo();
    // Ejecuta la función de cargar la pantalla del minijuego correspondiente
    if (pendingGameInit) pendingGameInit();
}

function applyUpgrade() {
    const input = document.getElementById('upgradeInput');
    const name = input.value.toUpperCase().trim();
    
    const data = getAlbumData();
    if (!data.unlocked.includes(name)) {
        mostrarMensajePro("❌ ERROR", "Debes tener al jugador desbloqueado en tu álbum para poder mejorarlo.");
        return;
    }

    if (getSuperCoins() <= 0) {
        mostrarMensajePro("⚠️ SIN SUPERCOINS", "Necesitas 1 SuperCoin. Gana 10 torneos para conseguir una.");
        return;
    }

    // Gastar moneda
    addSuperCoins(-1);

    // Guardar la mejora permanentemente
    let upgs = getUpgrades();
    upgs[name] = (upgs[name] || 0) + 1;
    saveUpgrades(upgs);

    // Aplicarla al instante en el juego (Memoria RAM)
    let oldTier = playerStats[name].tier;
    playerStats[name].rating += 1;
    let newTier = calculateTier(playerStats[name].rating);
    playerStats[name].tier = newTier;

    // Si cambió de nivel, lo movemos de la piscina de sobres de ese nivel
    if (oldTier !== newTier) {
        tierLists[oldTier] = tierLists[oldTier].filter(p => p !== name);
        tierLists[newTier].push(name);
    }

    // Feedback visual y refresco general
    mostrarMensajePro("🌟 ¡JUGADOR EVOLUCIONADO!", `${name} ha subido a ${playerStats[name].rating} de media.\n${oldTier !== newTier ? '¡Ha ascendido al nivel ' + newTier.toUpperCase() + '!' : ''}`);
    
    updateUpgradesUI();
    input.value = "";
    
    // Refrescar el campo y mercado
    renderLineupPitch();
    renderMarket();
}

const missionData = {
    daily: [
        { id: 'd1', desc: 'Gana 3 partidas en Higher Lower', progress: 0, target: 3, reward: 50 },
        // ... otros retos diarios
    ],
    achievements: [
        { id: 'a1', desc: 'Colecciona todos los jugadores de Bronce', progress: 12, target: 50, reward: 500 },
        // ... logros permanentes
    ]
};

function renderMissions(type) {
    const container = document.getElementById('mission-list');
    container.innerHTML = ''; // Limpiamos

    missionData[type].forEach(m => {
        const percentage = (m.progress / m.target) * 100;
        container.innerHTML += `
            <div class="mission-item">
                <div class="info">
                    <span>${m.desc}</span>
                    <span>${m.progress}/${m.target}</span>
                </div>
                <div class="progress-bg">
                    <div class="progress-fill" style="width: ${percentage}%"></div>
                </div>
                <div class="reward">💰 +${m.reward} F10</div>
            </div>
        `;
    });
}


// Abrir el modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.remove('hidden');
        
        if(modalId === 'missions-modal') {
            showMissionTab('daily'); // Carga los diarios por defecto
            
            // Ocultamos la notificación de punto rojo
            const dot = document.getElementById('mission-notification');
            if(dot) dot.classList.add('hidden');
            localStorage.setItem('f10_missions_date', getSpanishDateString());
        }
    }
}

// Cerrar el modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) modal.classList.add('hidden');
}

// Cambiar entre pestañas
function showMissionTab(type) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase() === type || (type==='achievements' && btn.innerText==='LOGROS')) {
            btn.classList.add('active');
        }
    });
    renderMissions(type);
}

// Comprobar si es un nuevo día para mostrar el puntito rojo
function checkDailyMissions() {
    const today = getSpanishDateString(); 
    const lastChecked = localStorage.getItem('f10_missions_date');
    const dot = document.getElementById('mission-notification');
    if(dot) {
        if(lastChecked !== today) {
            dot.classList.remove('hidden'); // Hay misiones nuevas
        } else {
            dot.classList.add('hidden'); // Ya entró hoy
        }
    }
}
