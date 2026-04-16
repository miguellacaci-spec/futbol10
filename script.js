// Base de datos de jugadores
const players = [
    // 1.Real Madrid
    "COURTOIS", "LUNIN", "FRAN GONZÁLEZ", "MILITAO", "ALABA", "RUDIGER", "CARVAJAL", "FRAN GARCIA", "MENDY", "ALEXANDER-ARNOLD", "HUIJSEN", 
    "ASENCIO", "CARRERAS", "BELLINGHAM", "CAMAVINGA", "VALVERDE", "TCHOUAMENI", "ARDA GULER", "CEBALLOS", "MASTANTUONO", "VINICIUS", "MBAPPE",
    "RODRYGO", "BRAHIM DIAZ", "GONZALO GARCIA",
    // 2.Atlético de Madrid
    "OBLAK", "MUSSO", "HANCKO", "PUBILL", "LE NORMAND", "GIMENEZ", "LENGLET", "RUGGERI", "MARCOS LLORENTE", 
    "NAHUEL MOLINA", "PABLO BARRIOS", "JOHNNY CARDOSO", "KOKE", "ALEX BAENA", "NICO GONZALEZ", "THIAGO ALMADA","GIULIANO SIMEONE", "LOOKMAN","GRIEZMANN", 
    "JULIAN ALVAREZ", "SORLOTH",
    // 3.Barcelona 
    "JOAN GARCIA", "SZCZESNY", "CUBARSI", "ERIC GARCIA", "ARAUJO", "CHRISTENSEN", "BALDE", "GERARD MARTIN", "KOUNDE", "JOAO CANCELO", "MARC BERNAL",
    "CASADO", "PEDRI", "DE JONG", "GAVI", "FERMIN LOPEZ", "DANI OLMO", "RAPHINHA", "RASHFORD", "LAMINE YAMAL", "BARDGHJI", "FERRAN TORRES", "LEWANDOWSKI",
    // 4.Villarreal
    "DIEGO CONDE", "ARNAU TENAS", "RAFA MARIN", "RENATO VEIGA", "FOYTH", "SERGI CARDONA", "PAU NAVARRO", "THOMAS PARTEY", "DANI PAREJO", 
    "SANTI COMESAÑA", "PAPE GUEYE", "SOLOMON", "BUCHANAN", "MOLEIRO", "ILIAS AKHOMACH", "GERARD MORENO", "AYOZE PEREZ", "NICOLAS PEPE", "MIKAUTADZE",
    // 5.Betis
    "ALVARO VALLES", "PAU LOPEZ", "BELLERIN", "LLORENTE", "NATAN", "BARTRA", "RICARDO RODRIGUEZ", "MARC ROCA", "FORNALS", "LO CELSO", "ANTONY", "CHIMY AVILA", 
    "ABDE", "BAKAMBU", "CUCHO HERNANDEZ", "AITOR RUIBAL",
    // 6.Celta 
    "RADU", "STARFELT", "MINGUEZA", "AIDOO", "MANU SANCHEZ", "ALVARO NUÑEZ", "MARCOS ALONSO",  "MORIBA", "BELTRAN", "WILLIOT SWEDBERG", "BORJA IGLESIAS", 
    "JUTGLA", "IAGO ASPAS", "CERVI", "BRYAN ZARAGOZA", 
    // 7.Real Sociedad
    "REMIRO", "ZUBELDIA", "CALETA CAR", "ELUSTONDO", "SERGIO GOMEZ", "JON ARAMBURU", "ODRIOZOLA", "BEÑAT TURRIENTES", "LUKA SUCIC", "YANGEL HERRERA",
    "CARLOS SOLER", "BRAIS MENDEZ", "ZAKHARYAN", "PABLO MARIN", "BARRENETXEA", "GUEDES", "KUBO", "OYARZABAL", "OSKARSSON",
    // 8.Athletic
    "UNAI SIMON", "ALEX PADILLA", "VIVIAN", "PAREDES", "LAPORTE", "YERAY ALVAREZ", "ADAMA BOIRO", "YURI BERCHICHE", "JESUS ARESO", "GOROSABEL", "LEKUE",
    "VESGA", "JAUREGIZAR", "BEÑAT PRADOS", "RUIZ DE GALARRETA", "OIHAN SANCET", "UNAI GOMEZ", "NICO WILLIAMS", "BERENGUER", "IÑAKI WILLIAMS", "GURUZETA",
    // 9-Valencia
    "JULEN AGIRREZABALA", "DIMITRIEVSKI", "DIAKHABY", "GAYA", "THIERRY CORREIA", "FOULQUIER", "PEPELU", "GUIDO RODRIGUEZ", "SANTAMARIA", "JAVI GUERRA", 
    "RAMAZANI", "DANJUMA", "LUIS RIOJA", "HUGO DURO", "LUCAS BELTRAN", "UMAR SADIQ", 
    // 10.Girona
    "TER STEGEN", "GAZZANIGA", "VITOR REIS", "BLIND", "DAVID LOPEZ","ARNAU MARTINEZ", "AXEL WITSEL", "OUNAHI", "IVAN MARTIN", "FRAN BELTRAN", "VAN DE BEEK", 
    "ECHEVERRI", "LEMAR", "BRYAN GIL", "TSYGANKOV", "PORTU", "ABEL RUIZ", "STUANI",
    // 11.Sevilla
    "VLACHODIMOS", "NYLAND", "KIKE SALAS", "MARCAO", "NIANZOU", "AZPILICUETA", "OSO", "JUANLU SANCHEZ", "CARMONA", "AGOUME", "GUDELJ", 
    "SOW", "JOAN JORDAN", "EJUKE", "JANUZAJ", "ALEXIS SANCHEZ", "ISAAC ROMERO", " MAUPAY",  
    // 12.Espanyol
    "DMITROVIC", "CABRERA", "CARLOS ROMERO", "EL HILALI", "POL LOZANO", "EDU EXPOSITO", "TERRATS", "JAVI PUADO", "PERE MILLA", "KIKE GARCIA",
    // 13.Rayo 
    "BATALLA", "DANI CARDENAS", "MUMIN", "LUIZ FELIPE", "LEJEUNE", "PEP CHAVARRIA", "ANDREI RATIU", "BALLIU", "GUMBAU", "PEDRO DIAZ", "UNAI LOPEZ", 
    "OSCAR VALENTIN", "PATHE CISS", "NTEKA", "OSCAR TREJO", "ALVARO GARCIA", "ILIAS AKHOMACH", "JORGE DE FRUTOS", "ISI PALAZON", "CAMELLO",
    // 14.Osasuna 
    "SERGIO HERRERA", "AITOR FERNANDEZ", "BOYOMO", "JORGE HERRANDO", "CATENA","JAVI GALAN", "JUAN CRUZ", "ROSIER", "LUCAS TORRO", "MONCAYOLA", "AIMAR OROZ",
    "MOI GOMEZ", "VICTOR MUÑOZ", "RAUL MORO", "RUBEN GARCIA", "KIKE BARJA", "RAUL GARCIA", "BUDIMIR",
    // 15.Mallorca
    "LEO ROMAN", "MARTIN VALJENT", "RAILLO", "DAVID LOPEZ", "MOJICA", "TONI LATO", "PABLO MAFFEO", "SAMU COSTA", "MASCARELL", "SERGI DARDER", "MANU MORLANES",
    "PABLO TORRE", "JAN VIRGILI", "ASANO", "VEDAT MURIQI", "JOSEPH", "ABDON PRATS",
    // 16.Levante
    "RYAN", "MANU SANCHEZ", "OLASAGASTI", "UNAI VENCEDOR", "CARLOS ALVAREZ", "ETTA EYONG", "IVAN ROMERO", "CARLOS ESPI", "MORALES",
    // 17.Elche 
    "IÑAKI PEÑA", "AFFENGRUBER", "VICTOR CHUST","HECTOR FORT", "SANGARE","ALEIX FEBAS", "ALVARO RODRIGUEZ", "RAFA MIR", "ANDRE SILVA",
    // 18.Getafe
    "DAVID SORIA", "ABDEL ABQAR", "DJENE", "DOMINGOS DUARTE", "DIEGO RICO", "JUAN IGLESIAS", "KIKO FEMENIA","ALLAN NYOM", "MARIO MARTIN", "ARAMBARRI", 
    "LUIS MILLA", "BORJA MAYORAL", "SATRIANO", 
    // 19.Alaves
    "SIVERA", "NAHUEL TENAGLIA", "JONNY OTTO", "ANTONIO BLANCO", "CARLES ALEÑA", "ANDER GUEVARA", "JON GURIDI", "CALEBE", "DENIS SUAREZ", "LUCAS BOYE", 
    "MARIANO DIAZ",
    // 20. Real Oviedo
    "ESCANDELL", "ERIC BAILLY", "SANTI CAZORLA", "DENDONCKER"

    
];
const QWERTY_LAYOUT = ["QWERTYUIOP", "ASDFGHJKLÑ", "ZXCVBNM"];

// Estados de los juegos
let gameState = { word: "", guessed: [], mistakes: 0, streak: 0 };
let blurState = { player: "", blur: 25, lives: 5, streak: 0 };

// --- NAVEGACIÓN ---
function showGame(gameId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(`${gameId}-screen`).classList.remove('hidden');
    if(gameId === 'hangman') initHangman();
    if(gameId === 'blur') initBlurGame();
}

function showMenu() {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('menu-screen').classList.remove('hidden');
}

// --- LÓGICA AHORCADO (Tuya original) ---
function initHangman() {
    gameState.word = players[Math.floor(Math.random() * players.length)].toUpperCase();
    gameState.guessed = [];
    gameState.mistakes = 0;
    document.getElementById('lives').innerText = 6;
    document.getElementById('streak').innerText = gameState.streak;
    renderKeyboard();
    updateDisplay();
    drawCanvas(0);
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
    char = char.toUpperCase();
    if (gameState.guessed.includes(char)) return;
    gameState.guessed.push(char);
    const keyElement = document.getElementById(`key-${char}`);
    if (keyElement) keyElement.classList.add('used');
    const normalizedWord = gameState.word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedChar = char.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (!normalizedWord.includes(normalizedChar)) {
        gameState.mistakes++;
        document.getElementById('lives').innerText = 6 - gameState.mistakes;
        drawCanvas(gameState.mistakes);
        if (gameState.mistakes >= 6) gameOver();
    } else {
        updateDisplay();
    }
}

function updateDisplay() {
    const display = gameState.word.split('').map(char => {
        if (char === " ") return "&nbsp;";
        const normChar = char.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return gameState.guessed.includes(normChar) ? char : "_";
    }).join(" ");
    document.getElementById('wordDisplay').innerHTML = display;
    if (!display.includes("_")) victory();
}

function solveFullWord() {
    const val = document.getElementById('wordInput').value.toUpperCase().trim();
    const nVal = val.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const nWord = gameState.word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (nVal === nWord) victory();
    else gameOver();
    document.getElementById('wordInput').value = "";
}

function victory() {
    gameState.streak++;
    alert("¡GOLAZO! Era " + gameState.word);
    initHangman();
}

function gameOver() {
    gameState.streak = 0;
    alert("¡TARJETA ROJA! Era " + gameState.word);
    initHangman();
}

function drawCanvas(step) {
    const c = document.getElementById('hangmanCanvas');
    const ctx = c.getContext('2d');
    ctx.strokeStyle = "#333"; ctx.lineWidth = 4;
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

// --- LÓGICA BLUR GUESS (Nuevo) ---
function initBlurGame() {
    blurState.player = players[Math.floor(Math.random() * players.length)].toUpperCase();
    blurState.blur = 30;
    blurState.lives = 5;
    
    document.getElementById('blur-lives').innerText = blurState.lives;
    document.getElementById('blur-streak').innerText = blurState.streak;
    document.getElementById('blurInput').value = "";
    
    const img = document.getElementById('playerImg');
    // IMPORTANTE: Las imágenes deben estar en una carpeta llamada 'players'
    // Ejemplo: players/MBAPPE.jpg
    img.src = `players/${blurState.player}.jpg`;
    img.style.filter = `blur(${blurState.blur}px)`;
}

function checkBlurGuess() {
    const input = document.getElementById('blurInput');
    const val = input.value.toUpperCase().trim();
    const nVal = val.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const nPlayer = blurState.player.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (nVal === nPlayer) {
        blurState.streak++;
        document.getElementById('playerImg').style.filter = "blur(0px)";
        setTimeout(() => { alert("¡BRUTAL! Es " + blurState.player); initBlurGame(); }, 300);
    } else {
        blurState.lives--;
        blurState.blur -= 6;
        if (blurState.lives <= 0) {
            blurState.streak = 0;
            document.getElementById('playerImg').style.filter = "blur(0px)";
            setTimeout(() => { alert("¡FUERA DE JUEGO! Era " + blurState.player); initBlurGame(); }, 300);
        } else {
            document.getElementById('blur-lives').innerText = blurState.lives;
            document.getElementById('playerImg').style.filter = `blur(${blurState.blur}px)`;
            input.value = "";
        }
    }
}

// Eventos
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('hangman-screen').classList.contains('hidden')) {
        const key = e.key.toUpperCase();
        if (QWERTY_LAYOUT.join('').includes(key)) handleInput(key);
    }
    if (!document.getElementById('blur-screen').classList.contains('hidden') && e.key === 'Enter') {
        checkBlurGuess();
    }
});

document.getElementById('solveButton').onclick = solveFullWord;
document.getElementById('btnBlurCheck').onclick = checkBlurGuess;
