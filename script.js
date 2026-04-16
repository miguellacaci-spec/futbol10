// Base de datos de jugadores
const players = [
    // Real Madrid
    "COURTOIS", "LUNIN", "FRAN GONZÁLEZ", "MILITAO", "ALABA", "RUDIGER", "CARVAJAL", "FRAN GARCIA", "MENDY", "ALEXANDER-ARNOLD", "HUIJSEN", 
    "ASENCIO", "CARRERAS", "BELLINGHAM", "CAMAVINGA", "VALVERDE", "TCHOUAMENI", "ARDA GULER", "CEBALLOS", "MASTANTUONO", "VINICIUS", "MBAPPE",
    "RODRYGO", "BRAHIM DIAZ", "GONZALO GARCIA",
    // Atlético de Madrid
    "OBLAK", "MUSSO", "HANCKO", "PUBILL", "LE NORMAND", "GIMENEZ", "LENGLET", "RUGGERI", "MARCOS LLORENTE", 
    "NAHUEL MOLINA", "PABLO BARRIOS", "JOHNNY CARDOSO", "KOKE", "ALEX BAENA", "NICO GONZALEZ", "THIAGO ALMADA","GIULIANO SIMEONE", "LOOKMAN","GRIEZMANN", 
    "JULIAN ALVAREZ", "SORLOTH",
    // Barcelona 
    "JOAN GARCIA", "SZCZESNY", "CUBARSI", "ERIC GARCIA", "ARAUJO", "CHRISTENSEN", "BALDE", "GERARD MARTIN", "KOUNDE", "JOAO CANCELO", "MARC BERNAL",
    "CASADO", "PEDRI", "DE JONG", "GAVI", "FERMIN LOPEZ", "DANI OLMO", "RAPHINHA", "RASHFORD", "LAMINE YAMAL", "BARDGHJI", "FERRAN TORRES", "LEWANDOWSKI",
    // Villarreal
    "DIEGO CONDE", "ARNAU TENAS", "RAFA MARIN", "RENATO VEIGA", "FOYTH", "SERGI CARDONA","CARLOS ROMERO", "PAU NAVARRO", "THOMAS PARTEY", "DANI PAREJO", 
    "SANTI COMESAÑA", "PAPE GUEYE", "TERRATS", "SOLOMON", "BUCHANAN", "MOLEIRO", "ILIAS AKHOMACH", "GERARD MORENO", "AYOZE PEREZ", "NICOLAS PEPE", "MIKAUTADZE",
    // Betis
    "ALVARO VALLES", "PAU LOPEZ", "BELLERIN", "LLORENTE", "NATAN", "BARTRA", "RICARDO RODRIGUEZ", "MARC ROCA", "FORNALS", "LO CELSO", "ANTONY", "CHIMY AVILA", 
    "ABDE", "BAKAMBU", "CUCHO HERNANDEZ", "AITOR RUIBAL",
    // Celta 
    "RADU", "STARFELT", "MINGUEZA", "AIDOO", "MANU SANCHEZ", "ALVARO NUÑEZ", "MARCOS ALONSO",  "MORIBA", "BELTRAN", "WILLIOT SWEDBERG", "BORJA IGLESIAS", 
    "JUTGLA", "IAGO ASPAS", "CERVI", "BRYAN ZARAGOZA", 
    // Real Sociedad
    "REMIRO", "ZUBELDIA", "CALETA CAR", "ELUSTONDO", "SERGIO GOMEZ", "JON ARAMBURU", "ODRIOZOLA", "BEÑAT TURRIENTES", "LUKA SUCIC", "YANGEL HERRERA",
    "CARLOS SOLER", "BRAIS MENDEZ", "ZAKHARYAN", "PABLO MARIN", "BARRENETXEA", "GUEDES", "KUBO", "OYARZABAL", "OSKARSSON",
    // Athletic
    "UNAI SIMON", "ALEX PADILLA", "VIVIAN", "PAREDES", "LAPORTE", "YERAY ALVAREZ", "ADAMA BOIRO", "YURI BERCHICHE", "JESUS ARESO", "GOROSABEL", "LEKUE",
    "VESGA", "JAUREGIZAR", "BEÑAT PRADOS", "RUIZ DE GALARRETA", "OIHAN SANCET", "UNAI GOMEZ", "NICO WILLIAMS", "BERENGUER", "IÑAKI WILLIAMS", "GURUZETA",
    // Valencia
    "JULEN AGIRREZABALA", "DIMITRIEVSKI", "DIAKHABY", "GAYA", "THIERRY CORREIA", "FOULQUIER", "PEPELU", "GUIDO RODRIGUEZ", "SANTAMARIA", "JAVI GUERRA", 
    "RAMAZANI", "DANJUMA", "LUIS RIOJA", "HUGO DURO", "LUCAS BELTRAN", "UMAR SADIQ", 
    // Girona
    "TER STEGEN", "GAZZANIGA", "VITOR REIS", "BLIND", "DAVID LOPEZ","ARNAU MARTINEZ", "AXEL WITSEL", "OUNAHI", "IVAN MARTIN", "FRAN BELTRAN", "VAN DE BEEK", 
    "ECHEVERRI", "LEMAR", "BRYAN GIL", "TSYGANKOV", "PORTU", "ABEL RUIZ", "STUANI",
    // Sevilla
    "VLACHODIMOS", "NYLAND", "KIKE SALAS", "MARCAO", "NIANZOU", "AZPILICUETA", "OSO", "JUANLU SANCHEZ", "CARMONA", "AGOUME", "GUDELJ", 
    "SOW", "JOAN JORDAN", "EJUKE", "JANUZAJ", "ALEXIS SANCHEZ", "ISAAC ROMERO", " MAUPAY",  
];

let gameState = {
    word: "",
    guessed: [],
    mistakes: 0,
    streak: 0
};

// --- Utilidades ---
// Función vital: quita tildes para que el juego sea justo
const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function showGame(gameId) {
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById(`${gameId}-screen`).classList.remove('hidden');
    if(gameId === 'hangman') initHangman();
}

function showMenu() {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('menu-screen').classList.remove('hidden');
}

// --- Lógica del Ahorcado ---
function initHangman() {
    gameState.word = players[Math.floor(Math.random() * players.length)].toUpperCase();
    gameState.guessed = [];
    gameState.mistakes = 0;
    
    document.getElementById('lives').innerText = 6;
    document.getElementById('usedLettersText').innerText = "";
    updateDisplay();
    drawCanvas(0);
}

function updateDisplay() {
    const display = gameState.word.split('').map(char => {
        if (char === " ") return "&nbsp;&nbsp;";
        // Comparamos normalizando para ignorar tildes
        return gameState.guessed.includes(normalize(char)) ? char : "_";
    }).join(" ");
    
    document.getElementById('wordDisplay').innerHTML = display;

    if (!display.includes("_")) victory();
}

function handleInput(char) {
    char = normalize(char.toUpperCase());
    if (!char || char.length > 1 || gameState.guessed.includes(char)) return;

    gameState.guessed.push(char);
    document.getElementById('usedLettersText').innerText = gameState.guessed.join(", ");

    const normalizedWord = normalize(gameState.word);
    
    if (!normalizedWord.includes(char)) {
        gameState.mistakes++;
        document.getElementById('lives').innerText = 6 - gameState.mistakes;
        drawCanvas(gameState.mistakes);
        if (gameState.mistakes >= 6) gameOver();
    } else {
        updateDisplay();
    }
}

// --- Eventos de teclado ---
document.getElementById('letterInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const val = e.target.value;
        handleInput(val);
        e.target.value = "";
    }
});

document.getElementById('wordInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') solveFullWord();
});

document.getElementById('guessButton').onclick = () => {
    const el = document.getElementById('letterInput');
    handleInput(el.value);
    el.value = "";
};

function solveFullWord() {
    const val = document.getElementById('wordInput').value.toUpperCase().trim();
    if (normalize(val) === normalize(gameState.word)) {
        victory();
    } else {
        gameOver();
    }
    document.getElementById('wordInput').value = "";
}

function victory() {
    gameState.streak++;
    document.getElementById('streak').innerText = gameState.streak;
    alert("¡GOLAZO! Era " + gameState.word);
    initHangman();
}

function gameOver() {
    gameState.streak = 0;
    document.getElementById('streak').innerText = 0;
    alert("¡TARJETA ROJA! Era " + gameState.word);
    initHangman();
}

// --- Dibujo Profesional ---
function drawCanvas(step) {
    const c = document.getElementById('hangmanCanvas');
    const ctx = c.getContext('2d');
    ctx.strokeStyle = "#161b22"; ctx.lineWidth = 5; ctx.lineCap = "round";
    
    if(step === 0) {
        ctx.clearRect(0,0,c.width,c.height);
        ctx.beginPath();
        ctx.moveTo(20,260); ctx.lineTo(180,260); // Base
        ctx.moveTo(50,260); ctx.lineTo(50,20);   // Poste
        ctx.lineTo(150,20); ctx.lineTo(150,50);  // Cuerda
        ctx.stroke();
        return;
    }
    
    if(step >= 1) { ctx.beginPath(); ctx.arc(150, 80, 25, 0, Math.PI*2); ctx.stroke(); } // Cabeza
    if(step >= 2) { ctx.beginPath(); ctx.moveTo(150, 105); ctx.lineTo(150, 180); ctx.stroke(); } // Cuerpo
    if(step >= 3) { ctx.beginPath(); ctx.moveTo(150, 120); ctx.lineTo(120, 150); ctx.stroke(); } // Brazo L
    if(step >= 4) { ctx.beginPath(); ctx.moveTo(150, 120); ctx.lineTo(180, 150); ctx.stroke(); } // Brazo R
    if(step >= 5) { ctx.beginPath(); ctx.moveTo(150, 180); ctx.lineTo(120, 220); ctx.stroke(); } // Pierna L
    if(step >= 6) { ctx.beginPath(); ctx.moveTo(150, 180); ctx.lineTo(180, 220); ctx.stroke(); } // Pierna R
}
