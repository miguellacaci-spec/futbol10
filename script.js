// Base de datos de jugadores (puedes seguir añadiendo hasta los 500 aquí)
const players = [
    "MESSI", "RONALDO", "MBAPPE", "HAALAND", "BELLINGHAM", "VINICIUS", "SALAH", "DE BRUYNE", "KANE", "RODRI",
    "MUSIALA", "SAKA", "FODEN", "WIRTZ", "PALMER", "GRIEZMANN", "LEWANDOWSKI", "VALVERDE", "PEDRI", "GAVI",
    "YAMAL", "OSIMHEN", "LAUTARO", "ALVAREZ", "LEAO", "KVARATSKHELIA", "ODEGAARD", "RICE", "VAN DIJK", "ALISSON",
    "COURTOIS", "EDERSON", "ENZO FERNANDEZ", "OLISE", "MODRIC", "KROOS", "RUDIGER", "ARAUJO", "KOUNDE", "HAKIMI",
    "DAVIES", "JAMES", "SON", "BRUNO FERNANDES", "BERNARDO SILVA", "DIAS", "SALIBA", "MAC ALLISTER", "TCHOUAMENI", "CAICEDO"
    // Nota: Para llegar a 500, puedes importar un JSON externo o expandir este array.
];

let gameState = {
    word: "",
    guessed: [],
    mistakes: 0,
    streak: 0
};

// Navegación
function showGame(gameId) {
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById(`${gameId}-screen`).classList.remove('hidden');
    if(gameId === 'hangman') initHangman();
}

function showMenu() {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('menu-screen').classList.remove('hidden');
}

// Lógica Ahorcado
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
        if (char === " ") return "&nbsp;";
        return gameState.guessed.includes(char) ? char : "_";
    }).join(" ");
    
    document.getElementById('wordDisplay').innerHTML = display;

    if (!display.includes("_")) {
        victory();
    }
}

function handleInput(char) {
    char = char.toUpperCase();
    if (!char || gameState.guessed.includes(char)) return;

    gameState.guessed.push(char);
    document.getElementById('usedLettersText').innerText = gameState.guessed.join(", ");

    if (!gameState.word.includes(char)) {
        gameState.mistakes++;
        document.getElementById('lives').innerText = 6 - gameState.mistakes;
        drawCanvas(gameState.mistakes);
        if (gameState.mistakes >= 6) gameOver();
    } else {
        updateDisplay();
    }
}

function solveFullWord() {
    const val = document.getElementById('wordInput').value.toUpperCase().trim();
    if (val === gameState.word) {
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
    alert("¡TARJETA ROJA! El jugador era " + gameState.word);
    initHangman();
}

// Canvas Pro
function drawCanvas(step) {
    const c = document.getElementById('hangmanCanvas');
    const ctx = c.getContext('2d');
    ctx.strokeStyle = "#333"; ctx.lineWidth = 4;
    
    if(step === 0) {
        ctx.clearRect(0,0,220,280);
        ctx.beginPath();
        ctx.moveTo(20,260); ctx.lineTo(180,260); // Suelo
        ctx.moveTo(50,260); ctx.lineTo(50,20);  // Poste
        ctx.lineTo(150,20); ctx.lineTo(150,50); // Brazo
        ctx.stroke();
        return;
    }
    
    ctx.strokeStyle = "#161b22";
    if(step >= 1) { ctx.beginPath(); ctx.arc(150, 80, 25, 0, Math.PI*2); ctx.stroke(); } // Cabeza
    if(step >= 2) { ctx.beginPath(); ctx.moveTo(150, 105); ctx.lineTo(150, 180); ctx.stroke(); } // Cuerpo
    if(step >= 3) { ctx.beginPath(); ctx.moveTo(150, 120); ctx.lineTo(120, 150); ctx.stroke(); } // Brazo L
    if(step >= 4) { ctx.beginPath(); ctx.moveTo(150, 120); ctx.lineTo(180, 150); ctx.stroke(); } // Brazo R
    if(step >= 5) { ctx.beginPath(); ctx.moveTo(150, 180); ctx.lineTo(120, 220); ctx.stroke(); } // Pierna L
    if(step >= 6) { ctx.beginPath(); ctx.moveTo(150, 180); ctx.lineTo(180, 220); ctx.stroke(); } // Pierna R
}

// Listeners
document.getElementById('guessButton').onclick = () => {
    const el = document.getElementById('letterInput');
    handleInput(el.value);
    el.value = ""; el.focus();
};

document.getElementById('solveButton').onclick = solveFullWord;
