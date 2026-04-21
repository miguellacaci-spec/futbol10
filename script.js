// Base de datos de jugadores

const players = [

    // 1.Real Madrid

    "COURTOIS", "LUNIN", "FRAN GONZALEZ", "MILITAO", "ALABA", "RUDIGER", "CARVAJAL", "FRAN GARCIA", "MENDY", "ALEXANDER-ARNOLD", "HUIJSEN", 

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

    "RADU", "STARFELT", "MINGUEZA", "AIDOO", "ALVARO NUÑEZ", "MARCOS ALONSO",  "MORIBA", "BELTRAN", "WILLIOT SWEDBERG", "BORJA IGLESIAS", 

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

    "SOW", "JOAN JORDAN", "EJUKE", "JANUZAJ", "ALEXIS SANCHEZ", "ISAAC ROMERO", "MAUPAY",  

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

const roscoAlphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

const roscoQuestions = [
    {
        letra: "A",
        preguntas: [
            { respuesta: "ANCELOTTI", hint: "Nombre del único entrenador en ganar las 5 grandes ligas." },
            { respuesta: "ANSU FATI", hint: "Nombre y apellido del jugador del Brighton que en el Barça heredó el 10 de Messi" },
            { respuesta: "ARDA GULER", hint: "Nombre y apellido del jugador más caro de la selección de Turquía" }
        ]
    },
    {
        letra: "B",
        preguntas: [
            { respuesta: "BETIS", hint: "Equipo sevillano que ganó LaLiga en 1934/1935" },
            { respuesta: "BELLINGHAM", hint: "Nombre del jugador ingles del Madrid proveniente del Dortmund" },
            { respuesta: "BENZEMA", hint: "Ganador del Balón de Oro 2022" }
        ]
    },
    {
        letra: "C",
        preguntas: [
            { respuesta: "COURTOIS", hint: "Apellido del MVP en la final de la Champions en 2021/2022." },
            { respuesta: "CADIZ", hint: "Equipo andaluz conocido como el 'Submarino Amarillo'" },
            { respuesta: "CARVAJAL", hint: "Lateral derecho eterno de la selección y el Real Madrid" }
        ]
    },
    {
        letra: "D",
        preguntas: [
            { respuesta: "DANI OLMO", hint: "Fichaje estrella del Barça 2024" },
            { respuesta: "DE PAUL", hint: "Apellido del jugador argentino que juega con Messi en el Inter de Miami." },
            { respuesta: "DE BRUYNE", hint: "Genio belga del Manchester City" }
        ]
    },
    {
        letra: "E",
        preguntas: [
            { respuesta: "ENDRICK", hint: "Joven promesa brasileña fichada por el Real Madrid" },
            { respuesta: "EMPOLI", hint: "Equipo modesto de la Serie A italiana" },
            { respuesta: "ETO'O", hint: "Legendario delantero camerunés del Barça e Inter" }
        ]
    },
    {
        letra: "F",
        preguntas: [
            { respuesta: "FORLAN", hint: "Delantero uruguayo que brilló en el Atlético y Villarreal" },
            { respuesta: "FALCAO", hint: "El 'Tigre' que goleó en el Atleti y Rayo Vallecano" },
            { respuesta: "FEYENOORD", hint: "Histórico equipo de los Países Bajos (Rotterdam)" }
        ]
    },
    {
        letra: "G",
        preguntas: [
            { respuesta: "GAVI", hint: "Intenso centrocampista canterano del FC Barcelona" },
            { respuesta: "GRIEZMANN", hint: "Apellido del máximo goleador histórico del Atlético de Madrid." },
            { respuesta: "GIRONA", hint: "Equipo revelación de LaLiga en la 2023/2024." }
        ]
    },
    {
        letra: "H",
        preguntas: [
            { respuesta: "HAALAND", hint: "El 'Androide' noruego del Manchester City" },
            { respuesta: "HULK", hint: "Delantero brasileño famoso por su potencia física" },
            { respuesta: "HERNANDEZ", hint: "Apellido de los hermanos Lucas y Theo" }
        ]
    },
    {
        letra: "I",
        preguntas: [
            { respuesta: "ISCO", hint: "Magia malagueña que ahora brilla en el Betis" },
            { respuesta: "INIESTA", hint: "Autor del gol que nos dio el Mundial 2010" },
            { respuesta: "INTER", hint: "Club italiano que viste de 'nerazzurro'" }
        ]
    },
    {
        letra: "J",
        preguntas: [
            { respuesta: "JOAQUIN", hint: "Leyenda del Betis conocida por su arte y fintas" },
            { respuesta: "JOAO FELIX", hint: "Talentoso mediapunta portugués" },
            { respuesta: "JUVENTUS", hint: "La 'Vecchia Signora' del fútbol italiano." }
        ]
    },
    {
        letra: "K",
        preguntas: [
            { respuesta: "KROOS", hint: "El 'Metrónomo' alemán retirado en 2024" },
            { respuesta: "KANE", hint: "Goleador inglés que se marchó al Bayern" },
            { respuesta: "KUN AGUERO", hint: "Histórico 10 del City que tuvo que retirarse en el Barça" }
        ]
    },
    {
        letra: "L",
        preguntas: [
            { respuesta: "LEWANDOWSKI", hint: "Bota de Oro polaca y 9 del Barça" },
            { respuesta: "LIVERPOOL", hint: "Club inglés que nunca camina solo" },
            { respuesta: "LAMINE YAMAL", hint: "El adolescente récord del Barça y la Selección" }
        ]
    },
    {
        letra: "M",
        preguntas: [
            { respuesta: "MESSI", hint: "Para muchos, el mejor jugador de la historia" },
            { respuesta: "MODRIC", hint: "El eterno 10 croata del Real Madrid" },
            { respuesta: "MBAPPE", hint: "La gran estrella francesa que llegó al Bernabéu" }
        ]
    },
    {
        letra: "N",
        preguntas: [
            { respuesta: "NEYMAR", hint: "Magia brasileña, ex del Santos, Barça y PSG" },
            { respuesta: "NAPOLES", hint: "Club donde Maradona es un Dios" },
            { respuesta: "NICO WILLIAMS", hint: "Extremo veloz del Athletic y héroe de la Eurocopa" }
        ]
    },
    {
        letra: "Ñ",
        preguntas: [
            { respuesta: "ESPAÑA", hint: "Contiene la Ñ: Campeona de la Eurocopa del 2024." },
            { respuesta: "CAICEDO", hint: "Contiene la Ñ: Delantero ecuatoriano ex del Espanyol" },
            { respuesta: "REGINO", hint: "Contiene la Ñ: Apellido de un canterano o jugador clásico" }
        ]
    },
    {
        letra: "O",
        preguntas: [
            { respuesta: "OBLAK", hint: "Muro esloveno bajo los palos del Atlético" },
            { respuesta: "OSASUNA", hint: "Equipo que juega en el Sadar" },
            { respuesta: "ODEGAARD", hint: "Capitán del Arsenal con pasado madridista" }
        ]
    },
    {
        letra: "P",
        preguntas: [
            { respuesta: "PEDRI", hint: "El canario que pone la pausa en el Camp Nou" },
            { respuesta: "PELE", hint: "O Rei del fútbol brasileño" },
            { respuesta: "PULISIC", hint: "El 'Capitán América' del AC Milan" }
        ]
    },
    {
        letra: "Q",
        preguntas: [
            { respuesta: "QUINI", hint: "Mítico delantero asturiano de Sporting y Barça" },
            { respuesta: "QUERETARO", hint: "Club mexicano donde jugó Ronaldinho." },
            { respuesta: "QUATTRINI", hint: "Apellido de algún jugador clásico del calcio" }
        ]
    },
    {
        letra: "R",
        preguntas: [
            { respuesta: "RONALDO", hint: "El 'Fenómeno' brasileño" },
            { respuesta: "RAUL", hint: "El eterno capitán del Real Madrid" },
            { respuesta: "RODRYGO", hint: "Rayo brasileño del ataque blanco" }
        ]
    },
    {
        letra: "S",
        preguntas: [
            { respuesta: "SIMEONE", hint: "El 'Cholo', alma del banquillo atlético" },
            { respuesta: "SUAREZ", hint: "El 'Pistolero' uruguayo ex del Barça y Atleti" },
            { respuesta: "SALAH", hint: "El 'Faraón' del Liverpool" }
        ]
    },
    {
        letra: "T",
        preguntas: [
            { respuesta: "TER STEGEN", hint: "Portero alemán del FC Barcelona" },
            { respuesta: "TOTTENHAM", hint: "Club de Londres que juega en un estadio futurista" },
            { respuesta: "TCHOUAMENI", hint: "Pivote francés de gran despliegue físico del Madrid" }
        ]
    },
    {
        letra: "U",
        preguntas: [
            { respuesta: "UDINESE", hint: "Club italiano de la ciudad de Udine" },
            { respuesta: "UMTITI", hint: "Central francés que fue campeón del mundo en 2018" },
            { respuesta: "UNAI SIMON", hint: "Portero titular de la Selección Española" }
        ]
    },
    {
        letra: "V",
        preguntas: [
            { respuesta: "VINICIUS", hint: "Extremo brasileño, candidato al Balón de Oro" },
            { respuesta: "VALENCIA", hint: "Equipo que juega en Mestalla" },
            { respuesta: "VILLARREAL", hint: "El equipo del 'Submarino Amarillo' de Castellón" }
        ]
    },
    {
        letra: "W",
        preguntas: [
            { respuesta: "WIRTZ", hint: "Joven estrella alemana del Leverkusen" },
            { respuesta: "WOLVERHAMPTON", hint: "Primer equipo de las 5 grandes ligas que descendió en la temporada 2025/2026." },
            { respuesta: "WALKER", hint: "Lateral derecho velocísimo del Manchester City" }
        ]
    },
    {
        letra: "X",
        preguntas: [
            { respuesta: "XAVI", hint: "Maestro del mediocampo y ex-entrenador del Barça" },
            { respuesta: "XHAKA", hint: "Líder suizo del centro del campo" },
            { respuesta: "XABI ALONSO", hint: "Entrenador de moda que hizo historia con el Leverkusen" }
        ]
    },
    {
        letra: "Y",
        preguntas: [
            { respuesta: "YASHIN", hint: "Apellido del único portero con un Balón de Oro." },
            { respuesta: "YAMAL", hint: "Apellido del ganador del trofeo Kopa en la temporada 2023/2024 y 2024/2025." },
            { respuesta: "YESTE", hint: "Mítico zurdo del Athletic Club" }
        ]
    },
    {
        letra: "Z",
        preguntas: [
            { respuesta: "ZIDANE", hint: "Apellido del jugador que marcó de volea en la final de la Champions del 2002." },
            { respuesta: "ZUBIMENDI", hint: "Elegante mediocentro de la Real Sociedad" },
            { respuesta: "ZAMORA", hint: "Trofeo al portero menos goleado de LaLiga." }
        ]
    }
];

function obtenerRoscoAleatorio(preguntas) {
    return preguntas.map(item => {
        const indiceAleatorio = Math.floor(Math.random() * item.preguntas.length);
        const seleccionada = item.preguntas[indiceAleatorio];
        
        return {
            letra: item.letra,
            respuesta: seleccionada.respuesta,
            hint: seleccionada.hint
        };
    });
}

// CORRECCIÓN 1: Dejar la variable vacía al inicio. Se llenará al iniciar la partida.
let partidaActual = []; 

let roscoState = { currentIndex: 0, results: {}, timeLeft: 300, timer: null };

const QWERTY_LAYOUT = ["QWERTYUIOP", "ASDFGHJKLÑ", "ZXCVBNM"];
let gameState = { word: "", guessed: [], mistakes: 0, streak: 0 };
let blurState = { player: "", blur: 30, lives: 5, streak: 0 };
let currentCategory = "";

function showMenu() {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('menu-screen').classList.remove('hidden');
}

function showCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    const catScreen = document.getElementById('category-screen');
    const grid = document.getElementById('category-games-grid');
    const title = document.getElementById('category-title');
    
    catScreen.classList.remove('hidden');
    grid.innerHTML = "";

    if (category === 'laliga') {
        title.innerHTML = "LALIGA <span>EA SPORTS</span>";
        grid.innerHTML = `
            <div class="menu-card hangman-game-card" onclick="showGame('hangman')">
                <div class="hangman-bg-image"></div>
                <div class="card-info">
                    <h3>Ahorcado</h3>
                    <p>Nivel Clásico</p>
                </div>
            </div>
            <div class="menu-card blur-game-card" onclick="showGame('blur')">
                <div class="card-bg-image"></div> 
                <div class="card-info">
                    <h3>Blur Guess</h3>
                    <p>Adivina el jugador</p>
                </div>
            </div>
            <div class="menu-card coming-soon">
                <span class="icon">📈</span>
                <h3>Higher or Lower</h3>
                <p>Próximamente</p>
            </div>`;
    } else {
        title.innerHTML = category === 'premier' ? "PREMIER <span>LEAGUE</span>" : "LEYENDAS <span>FÚTBOL</span>";
        grid.innerHTML = `<div class="menu-card coming-soon"><span class="icon">📈</span><h3>Próximamente</h3><p>Nuevos niveles en camino</p></div>`;
    }
}

function showGame(gameId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(`${gameId}-screen`).classList.remove('hidden');
    if(gameId === 'hangman') initHangman();
    if(gameId === 'blur') initBlurGame();
    if(gameId === 'rosco') initRosco(); 
}

function backToCategory() { showCategory(currentCategory); }

function setupAutocomplete(inputId, suggestionId) {
    const input = document.getElementById(inputId);
    const box = document.getElementById(suggestionId);
    input.addEventListener('input', () => {
        const val = input.value.toUpperCase().trim();
        box.innerHTML = "";
        if (val.length < 2) return;
        const matches = players.filter(p => p.includes(val)).slice(0, 4);
        matches.forEach(match => {
            const div = document.createElement('div');
            div.textContent = match;
            div.onclick = () => { input.value = match; box.innerHTML = ""; };
            box.appendChild(div);
        });
    });
}

function initHangman() {
    gameState.word = players[Math.floor(Math.random() * players.length)].toUpperCase();
    gameState.guessed = [];
    gameState.mistakes = 0;
    document.getElementById('lives').innerText = 6;
    document.getElementById('streak').innerText = gameState.streak;
    document.getElementById('wordInput').value = "";
    document.getElementById('hangman-suggestions').innerHTML = "";
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
    if (gameState.guessed.includes(char)) return;
    gameState.guessed.push(char);
    const keyElement = document.getElementById(`key-${char}`);
    if (keyElement) keyElement.classList.add('used');

    const nWord = gameState.word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (!nWord.includes(char)) {
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
    if (nVal === nWord && nVal !== "") victory();
    else gameOver();
}

function victory() {
    gameState.streak++;
    alert("¡LOKUURA! Era: " + gameState.word);
    initHangman();
}

function gameOver() {
    gameState.streak = 0;
    alert("¡TARJETA ROJA! Era: " + gameState.word);
    initHangman();
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

function initBlurGame() {
    blurState.player = players[Math.floor(Math.random() * players.length)].toUpperCase();
    blurState.blur = 30;
    blurState.lives = 5;
    document.getElementById('blur-lives').innerText = blurState.lives;
    document.getElementById('blur-streak').innerText = blurState.streak;
    document.getElementById('blurInput').value = "";
    document.getElementById('blur-suggestions').innerHTML = "";
    const img = document.getElementById('playerImg');
    img.src = `players/${blurState.player}.jpg`;
    img.style.filter = `blur(${blurState.blur}px)`;
}

function checkBlurGuess() {
    const input = document.getElementById('blurInput');
    const val = input.value.toUpperCase().trim();
    const nVal = val.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const nPlayer = blurState.player.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (nVal === nPlayer && nVal !== "") {
        blurState.streak++;
        document.getElementById('playerImg').style.filter = "blur(0px)";
        setTimeout(() => { alert("🔥 ¡BRUTAL! Es " + blurState.player); initBlurGame(); }, 300);
    } else {
        blurState.lives--;
        blurState.blur -= 6;
        if (blurState.lives <= 0) {
            blurState.streak = 0;
            document.getElementById('playerImg').style.filter = "blur(0px)";
            setTimeout(() => { alert("🧤 ¡PARADÓN! Era " + blurState.player); initBlurGame(); }, 300);
        } else {
            document.getElementById('blur-lives').innerText = blurState.lives;
            document.getElementById('playerImg').style.filter = `blur(${blurState.blur}px)`;
            input.value = "";
        }
    }
}

setupAutocomplete('wordInput', 'hangman-suggestions');
setupAutocomplete('blurInput', 'blur-suggestions');

// CONTROL DE TECLADO FÍSICO
document.addEventListener('keydown', (e) => {
    const isTyping = document.activeElement.tagName === 'INPUT';
    if (!isTyping && !document.getElementById('hangman-screen').classList.contains('hidden')) {
        const key = e.key.toUpperCase();
        if (QWERTY_LAYOUT.join('').includes(key)) handleInput(key);
    }
    if (e.key === 'Enter') {
        if (document.activeElement.id === 'wordInput') solveFullWord();
        if (document.activeElement.id === 'blurInput') checkBlurGuess();
        // CORRECCIÓN 2: Ejecutar comprobación del rosco al presionar Enter
        if (document.activeElement.id === 'roscoInput') checkRosco();
    }
});

document.getElementById('solveButton').onclick = solveFullWord;
document.getElementById('btnBlurCheck').onclick = checkBlurGuess;

function initRosco() {
    const circle = document.getElementById('rosco-circle');
    circle.innerHTML = "";
    
    // CORRECCIÓN 3: Limpiar temporizador anterior para evitar pop-ups infinitos y subir el tiempo a 300 (5 min)
    if (roscoState.timer) clearInterval(roscoState.timer);
    roscoState = { currentIndex: 0, results: {}, timeLeft: 300, timer: null };
    document.getElementById('rosco-timer').textContent = roscoState.timeLeft;

    // CORRECCIÓN 4: Generar las preguntas justo al iniciar la partida
    partidaActual = obtenerRoscoAleatorio(roscoQuestions);
    
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

    startRoscoTimer();
    updateRoscoTurn();
}

function startRoscoTimer() {
    roscoState.timer = setInterval(() => {
        roscoState.timeLeft--;
        document.getElementById('rosco-timer').textContent = roscoState.timeLeft;
        if(roscoState.timeLeft <= 0) endRosco("¡TIEMPO AGOTADO!");
    }, 1000);
}

function updateRoscoTurn() {
    let pending = false;
    for(let i=0; i < roscoAlphabet.length; i++) {
        let idx = (roscoState.currentIndex + i) % roscoAlphabet.length;
        if(!roscoState.results[roscoAlphabet[idx]]) {
            roscoState.currentIndex = idx;
            pending = true;
            break;
        }
    }
    if(!pending) return endRosco("¡ROSCO COMPLETADO!");

    // CORRECCIÓN 5: Usar la variable 'partidaActual' en lugar de 'roscoQuestions'
    const q = partidaActual[roscoState.currentIndex] || {letra: "?", hint: "Falta pregunta"};
    document.querySelectorAll('.rosco-letter').forEach(l => l.classList.remove('current'));
    document.getElementById(`letra-${q.letra}`).classList.add('current');
    document.getElementById('rosco-letter-hint').textContent = q.letra;
    document.getElementById('rosco-definition').textContent = q.hint;
    document.getElementById('roscoInput').value = "";
    document.getElementById('roscoInput').focus();
}

function checkRosco() {
    const val = document.getElementById('roscoInput').value.toUpperCase().trim();
    if(!val) return;
    
    // CORRECCIÓN 6: Usar la variable 'partidaActual'
    const q = partidaActual[roscoState.currentIndex];
    const nVal = val.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const nAns = q.respuesta.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if(nVal === nAns) {
        roscoState.results[q.letra] = 'correct';
        document.getElementById(`letra-${q.letra}`).classList.add('correct');
    } else {
        roscoState.results[q.letra] = 'wrong';
        document.getElementById(`letra-${q.letra}`).classList.add('wrong');
    }
    updateRoscoTurn();
}

function pasapalabra() {
    roscoState.currentIndex = (roscoState.currentIndex + 1) % roscoAlphabet.length;
    updateRoscoTurn();
}

function endRosco(msg) {
    clearInterval(roscoState.timer);
    let aciertos = Object.values(roscoState.results).filter(r => r === 'correct').length;
    alert(msg + "\nAciertos: " + aciertos);
    showMenu();
}

// CORRECCIÓN 7: Función global para salir y limpiar el timer
function salirDelRosco() {
    if (roscoState.timer) clearInterval(roscoState.timer);
    showMenu();
}

// Asignar botones nuevos
document.getElementById('btnRoscoCheck').onclick = checkRosco;
document.getElementById('btnPasapalabra').onclick = pasapalabra;
