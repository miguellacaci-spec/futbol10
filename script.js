// ==========================================
// 1. BASES DE DATOS
// ==========================================

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
    "RADU", "STARFELT", "MINGUEZA", "AIDOO", "ALVARO NUÑEZ", "MARCOS ALONSO",  "MORIBA", "BELTRAN", "WILLIOT SWEDBERG", "BORJA IGLESIAS", 
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
    { letra: "A", preguntas: [{ respuesta: "ANCELOTTI", hint: "Nombre del único entrenador en ganar las 5 grandes ligas." }, { respuesta: "ANSU FATI", hint: "Nombre y apellido del jugador del Brighton que en el Barça heredó el 10 de Messi" }, { respuesta: "ARDA GULER", hint: "Nombre y apellido del jugador más caro de la selección de Turquía" }] },
    { letra: "B", preguntas: [{ respuesta: "BETIS", hint: "Equipo sevillano que ganó LaLiga en 1934/1935" }, { respuesta: "BELLINGHAM", hint: "Nombre del jugador ingles del Madrid proveniente del Dortmund" }, { respuesta: "BENZEMA", hint: "Ganador del Balón de Oro 2022" }] },
    { letra: "C", preguntas: [{ respuesta: "COURTOIS", hint: "Apellido del MVP en la final de la Champions en 2021/2022." }, { respuesta: "CADIZ", hint: "Equipo andaluz conocido como el 'Submarino Amarillo'" }, { respuesta: "CARVAJAL", hint: "Lateral derecho eterno de la selección y el Real Madrid" }] },
    { letra: "D", preguntas: [{ respuesta: "DANI OLMO", hint: "Fichaje estrella del Barça 2024" }, { respuesta: "DE PAUL", hint: "Apellido del jugador argentino que juega con Messi en el Inter de Miami." }, { respuesta: "DE BRUYNE", hint: "Genio belga del Manchester City" }] },
    { letra: "E", preguntas: [{ respuesta: "ENDRICK", hint: "Joven promesa brasileña fichada por el Real Madrid" }, { respuesta: "EMPOLI", hint: "Equipo modesto de la Serie A italiana" }, { respuesta: "ETO'O", hint: "Legendario delantero camerunés del Barça e Inter" }] },
    { letra: "F", preguntas: [{ respuesta: "FORLAN", hint: "Delantero uruguayo que brilló en el Atlético y Villarreal" }, { respuesta: "FALCAO", hint: "El 'Tigre' que goleó en el Atleti y Rayo Vallecano" }, { respuesta: "FEYENOORD", hint: "Histórico equipo de los Países Bajos (Rotterdam)" }] },
    { letra: "G", preguntas: [{ respuesta: "GAVI", hint: "Intenso centrocampista canterano del FC Barcelona" }, { respuesta: "GRIEZMANN", hint: "Apellido del máximo goleador histórico del Atlético de Madrid." }, { respuesta: "GIRONA", hint: "Equipo revelación de LaLiga en la 2023/2024." }] },
    { letra: "H", preguntas: [{ respuesta: "HAALAND", hint: "El 'Androide' noruego del Manchester City" }, { respuesta: "HULK", hint: "Delantero brasileño famoso por su potencia física" }, { respuesta: "HERNANDEZ", hint: "Apellido de los hermanos Lucas y Theo" }] },
    { letra: "I", preguntas: [{ respuesta: "ISCO", hint: "Magia malagueña que ahora brilla en el Betis" }, { respuesta: "INIESTA", hint: "Autor del gol que nos dio el Mundial 2010" }, { respuesta: "INTER", hint: "Club italiano que viste de 'nerazzurro'" }] },
    { letra: "J", preguntas: [{ respuesta: "JOAQUIN", hint: "Leyenda del Betis conocida por su arte y fintas" }, { respuesta: "JOAO FELIX", hint: "Talentoso mediapunta portugués" }, { respuesta: "JUVENTUS", hint: "La 'Vecchia Signora' del fútbol italiano." }] },
    { letra: "K", preguntas: [{ respuesta: "KROOS", hint: "El 'Metrónomo' alemán retirado en 2024" }, { respuesta: "KANE", hint: "Goleador inglés que se marchó al Bayern" }, { respuesta: "KUN AGUERO", hint: "Histórico 10 del City que tuvo que retirarse en el Barça" }] },
    { letra: "L", preguntas: [{ respuesta: "LEWANDOWSKI", hint: "Bota de Oro polaca y 9 del Barça" }, { respuesta: "LIVERPOOL", hint: "Club inglés que nunca camina solo" }, { respuesta: "LAMINE YAMAL", hint: "El adolescente récord del Barça y la Selección" }] },
    { letra: "M", preguntas: [{ respuesta: "MESSI", hint: "Para muchos, el mejor jugador de la historia" }, { respuesta: "MODRIC", hint: "El eterno 10 croata del Real Madrid" }, { respuesta: "MBAPPE", hint: "La gran estrella francesa que llegó al Bernabéu" }] },
    { letra: "N", preguntas: [{ respuesta: "NEYMAR", hint: "Magia brasileña, ex del Santos, Barça y PSG" }, { respuesta: "NAPOLES", hint: "Club donde Maradona es un Dios" }, { respuesta: "NICO WILLIAMS", hint: "Extremo veloz del Athletic y héroe de la Eurocopa" }] },
    { letra: "Ñ", preguntas: [{ respuesta: "ESPAÑA", hint: "Contiene la Ñ: Campeona de la Eurocopa del 2024." }, { respuesta: "CAICEDO", hint: "Contiene la Ñ: Delantero ecuatoriano ex del Espanyol" }, { respuesta: "REGINO", hint: "Contiene la Ñ: Apellido de un canterano o jugador clásico" }] },
    { letra: "O", preguntas: [{ respuesta: "OBLAK", hint: "Muro esloveno bajo los palos del Atlético" }, { respuesta: "OSASUNA", hint: "Equipo que juega en el Sadar" }, { respuesta: "ODEGAARD", hint: "Capitán del Arsenal con pasado madridista" }] },
    { letra: "P", preguntas: [{ respuesta: "PEDRI", hint: "El canario que pone la pausa en el Camp Nou" }, { respuesta: "PELE", hint: "O Rei del fútbol brasileño" }, { respuesta: "PULISIC", hint: "El 'Capitán América' del AC Milan" }] },
    { letra: "Q", preguntas: [{ respuesta: "QUINI", hint: "Mítico delantero asturiano de Sporting y Barça" }, { respuesta: "QUERETARO", hint: "Club mexicano donde jugó Ronaldinho." }, { respuesta: "QUATTRINI", hint: "Apellido de algún jugador clásico del calcio" }] },
    { letra: "R", preguntas: [{ respuesta: "RONALDO", hint: "El 'Fenómeno' brasileño" }, { respuesta: "RAUL", hint: "El eterno capitán del Real Madrid" }, { respuesta: "RODRYGO", hint: "Rayo brasileño del ataque blanco" }] },
    { letra: "S", preguntas: [{ respuesta: "SIMEONE", hint: "El 'Cholo', alma del banquillo atlético" }, { respuesta: "SUAREZ", hint: "El 'Pistolero' uruguayo ex del Barça y Atleti" }, { respuesta: "SALAH", hint: "El 'Faraón' del Liverpool" }] },
    { letra: "T", preguntas: [{ respuesta: "TER STEGEN", hint: "Portero alemán del FC Barcelona" }, { respuesta: "TOTTENHAM", hint: "Club de Londres que juega en un estadio futurista" }, { respuesta: "TCHOUAMENI", hint: "Pivote francés de gran despliegue físico del Madrid" }] },
    { letra: "U", preguntas: [{ respuesta: "UDINESE", hint: "Club italiano de la ciudad de Udine" }, { respuesta: "UMTITI", hint: "Central francés que fue campeón del mundo en 2018" }, { respuesta: "UNAI SIMON", hint: "Portero titular de la Selección Española" }] },
    { letra: "V", preguntas: [{ respuesta: "VINICIUS", hint: "Extremo brasileño, candidato al Balón de Oro" }, { respuesta: "VALENCIA", hint: "Equipo que juega en Mestalla" }, { respuesta: "VILLARREAL", hint: "El equipo del 'Submarino Amarillo' de Castellón" }] },
    { letra: "W", preguntas: [{ respuesta: "WIRTZ", hint: "Joven estrella alemana del Leverkusen" }, { respuesta: "WOLVERHAMPTON", hint: "Primer equipo de las 5 grandes ligas que descendió en la temporada 2025/2026." }, { respuesta: "WALKER", hint: "Lateral derecho velocísimo del Manchester City" }] },
    { letra: "X", preguntas: [{ respuesta: "XAVI", hint: "Maestro del mediocampo y ex-entrenador del Barça" }, { respuesta: "XHAKA", hint: "Líder suizo del centro del campo" }, { respuesta: "XABI ALONSO", hint: "Entrenador de moda que hizo historia con el Leverkusen" }] },
    { letra: "Y", preguntas: [{ respuesta: "YASHIN", hint: "Apellido del único portero con un Balón de Oro." }, { respuesta: "YAMAL", hint: "Apellido del ganador del trofeo Kopa en la temporada 2023/2024 y 2024/2025." }, { respuesta: "YESTE", hint: "Mítico zurdo del Athletic Club" }] },
    { letra: "Z", preguntas: [{ respuesta: "ZIDANE", hint: "Apellido del jugador que marcó de volea en la final de la Champions del 2002." }, { respuesta: "ZUBIMENDI", hint: "Elegante mediocentro de la Real Sociedad" }, { respuesta: "ZAMORA", hint: "Trofeo al portero menos goleado de LaLiga." }] }
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
// 2. ESTADOS DE LOS JUEGOS
// ==========================================

const QWERTY_LAYOUT = ["QWERTYUIOP", "ASDFGHJKLÑ", "ZXCVBNM"];
let gameState = { word: "", guessed: [], mistakes: 0, streak: 0 };
let blurState = { player: "", blur: 30, lives: 5, streak: 0 };
let timeMachineState = { event: "", year: 0, lives: 5, streak: 0 };
let elevenState = { match: null, guessed: [], timer: null, timeLeft: 180, totalPlayers: 11 };
let wordleState = { targetPlayer: "", answer: "", guesses: [], currentGuess: "", maxGuesses: 6, wordLength: 5 };
let currentCategory = "";

let roscoState = {
    mode: 'individual',
    currentPlayer: 1, 
    timerInterval: null,
    p1: { currentIndex: 0, results: {}, timeLeft: 300, questions: [], done: false },
    p2: { currentIndex: 0, results: {}, timeLeft: 300, questions: [], done: false }
};

// ==========================================
// 3. NAVEGACIÓN Y MENÚS
// ==========================================

function showMenu() {
    if (elevenState.timer) clearInterval(elevenState.timer);
    if (roscoState.timerInterval) clearInterval(roscoState.timerInterval);
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('menu-screen').classList.remove('hidden');
}

function showRoscoMenu() {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('rosco-menu-screen').classList.remove('hidden');
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
            <div class="menu-card hangman-game-card" onclick="showGame('hangman')">
                <div class="card-bg bg-ahorcado"></div>
                <div class="card-info">
                    <h3>Ahorcado</h3>
                    <p>Nivel Clásico</p>
                </div>
            </div>
            <div class="menu-card blur-game-card" onclick="showGame('blur')">
                <div class="card-bg bg-blur"></div> 
                <div class="card-info">
                    <h3>Blur Guess</h3>
                    <p>Adivina el jugador</p>
                </div>
            </div>`;
    } else if (category === 'leyendas') {
        title.innerHTML = "LEYENDAS <span>FÚTBOL</span>";
        grid.innerHTML = `
            <div class="menu-card timemachine-game-card" onclick="showGame('timemachine')">
                <div class="card-bg bg-timemachine"></div>
                <div class="card-info">
                    <h3 style="color: #ffd700;">Máquina del Tiempo</h3>
                    <p>¿En qué año fue?</p>
                </div>
            </div>
            <div class="menu-card coming-soon">
                <span class="icon">📈</span>
                <h3>Higher or Lower</h3>
                <p>Próximamente</p>
            </div>`;
    } else if (category === 'europeos') {
        title.innerHTML = "JUEGOS <span>EUROPEOS</span>";
        grid.innerHTML = `
            <div class="menu-card eleven-game-card" onclick="showGame('eleven')">
                <div class="card-bg bg-europeos"></div>
                <div class="card-info">
                    <h3>XI Histórico</h3>
                    <p>Adivina con Futdle</p>
                </div>
            </div>`;
    } else {
        title.innerHTML = "PREMIER <span>LEAGUE</span>";
        grid.innerHTML = `
            <div class="menu-card coming-soon">
                <span class="icon">📈</span>
                <h3>Próximamente</h3>
                <p>Nuevos niveles</p>
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
    }
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

// ==========================================
// 4. LÓGICA: AHORCADO (CORREGIDO ESPACIADO)
// ==========================================

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

/* AQUÍ ESTÁ EL ARREGLO DE LAS LETRAS DEL AHORCADO */
function updateDisplay() {
    const words = gameState.word.split(" ");
    const displayHTML = words.map(word => {
        const letters = word.split('').map(char => {
            const normChar = char.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return gameState.guessed.includes(normChar) ? char : "_";
        }).join(" ");
        // Usar span nowrap garantiza que la palabra entera viaja junta si salta de línea
        return `<span style="white-space: nowrap;">${letters}</span>`;
    }).join(" &nbsp;&nbsp; "); 
    
    document.getElementById('wordDisplay').innerHTML = displayHTML;
    
    // Al comprobar si ganamos, usamos textContent en lugar del HTML con los spans
    if (!document.getElementById('wordDisplay').textContent.includes("_")) victory();
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
    mostrarMensajePro("🔥 ¡LOKUURA!", "Era: " + gameState.word, () => { initHangman(); });
}

function gameOver() {
    gameState.streak = 0;
    mostrarMensajePro("🧤 ¡TARJETA ROJA!", "Era: " + gameState.word, () => { initHangman(); });
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

// ==========================================
// 5. LÓGICA: BLUR GUESS
// ==========================================

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
        setTimeout(() => { 
            mostrarMensajePro("🔥 ¡BRUTAL!", "Es " + blurState.player, () => { initBlurGame(); }); 
        }, 300);
    } else {
        blurState.lives--;
        blurState.blur -= 6;
        if (blurState.lives <= 0) {
            blurState.streak = 0;
            document.getElementById('playerImg').style.filter = "blur(0px)";
            setTimeout(() => { 
                mostrarMensajePro("🧤 ¡PARADÓN!", "Era " + blurState.player, () => { initBlurGame(); }); 
            }, 300);
        } else {
            document.getElementById('blur-lives').innerText = blurState.lives;
            document.getElementById('playerImg').style.filter = `blur(${blurState.blur}px)`;
            input.value = "";
        }
    }
}

// ==========================================
// 6. LÓGICA: MÁQUINA DEL TIEMPO
// ==========================================

function initTimeMachine() {
    const randomEvent = timeMachineEvents[Math.floor(Math.random() * timeMachineEvents.length)];
    timeMachineState.event = randomEvent.event;
    timeMachineState.year = randomEvent.year;
    timeMachineState.lives = 5;

    document.getElementById('tm-lives').innerText = timeMachineState.lives;
    document.getElementById('tm-streak').innerText = timeMachineState.streak;
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
        mostrarMensajePro("⏳ ¡CLAVADO!", `Efectivamente, fue en el año ${timeMachineState.year}.`, () => { initTimeMachine(); });
    } else {
        timeMachineState.lives--;
        if (timeMachineState.lives <= 0) {
            timeMachineState.streak = 0;
            mostrarMensajePro("❌ ¡FIN DEL TIEMPO!", `El año correcto era ${timeMachineState.year}.`, () => { initTimeMachine(); });
        } else {
            document.getElementById('tm-lives').innerText = timeMachineState.lives;
            let hint = guess < timeMachineState.year ? "⬆️ Es MÁS reciente (Año mayor)" : "⬇️ Es MÁS antiguo (Año menor)";
            document.getElementById('tm-feedback').innerText = hint;
            inputField.value = "";
            inputField.focus();
        }
    }
}

// ==========================================
// 7. LÓGICA: EL ROSCO (INDIVIDUAL Y MULTI)
// ==========================================

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
        
        if (roscoState[pKey].timeLeft <= 0) {
            handlePlayerEnd();
        }
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
    
    const nVal = val.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const nAns = q.respuesta.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if(nVal === nAns) {
        state.results[q.letra] = 'correct';
        advanceRoscoTurn(true); 
    } else {
        state.results[q.letra] = 'wrong';
        advanceRoscoTurn(false); 
    }
}

function pasapalabra() {
    advanceRoscoTurn(false); 
}

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
        if (!roscoState[`p${other}`].done) {
            roscoState.currentPlayer = other;
        }
    }
    
    renderRoscoTurn();
}

function endRosco(msg) {
    clearInterval(roscoState.timerInterval);
    
    if (roscoState.mode === 'individual') {
        let aciertos = Object.values(roscoState.p1.results).filter(r => r === 'correct').length;
        mostrarMensajePro("FIN DEL JUEGO", `${msg}\nAciertos: ${aciertos}`, () => showMenu());
    } else {
        let aciertosP1 = Object.values(roscoState.p1.results).filter(r => r === 'correct').length;
        let aciertosP2 = Object.values(roscoState.p2.results).filter(r => r === 'correct').length;
        let winnerMsg = aciertosP1 > aciertosP2 ? "¡GANA EL JUGADOR 1! 🔵" : (aciertosP2 > aciertosP1 ? "¡GANA EL JUGADOR 2! 🔴" : "¡EMPATE TÉCNICO! 🤝");
        
        mostrarMensajePro("FIN DEL PARTIDO", `${msg}\n${winnerMsg}\n\nJ1 Azul: ${aciertosP1} aciertos\nJ2 Rojo: ${aciertosP2} aciertos`, () => showMenu());
    }
}

function salirDelRosco() {
    if (roscoState.timerInterval) clearInterval(roscoState.timerInterval);
    showMenu();
}

// ==========================================
// 8. LÓGICA: XI HISTÓRICO EUROPEO
// ==========================================

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
            mostrarMensajePro("⏳ ¡TIEMPO AGOTADO!", "Te faltaron jugadores de " + elevenState.match.team + ".", () => { initElevenGame(); });
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
                playerDiv.onclick = () => {
                    openFutdleForPlayer(playerObj);
                };
            }
            rowDiv.appendChild(playerDiv);
        });
        pitch.appendChild(rowDiv);
    });
}

function checkElevenWin() {
    if (elevenState.guessed.length === elevenState.totalPlayers) {
        clearInterval(elevenState.timer);
        setTimeout(() => {
            mostrarMensajePro("🏆 ¡LEYENDA EUROPEA!", "Has adivinado el XI Histórico completo.", () => { initElevenGame(); });
        }, 500);
    }
}

// ==========================================
// 9. LÓGICA: FUTDLE (INTEGRADO EN XI)
// ==========================================

function openFutdleForPlayer(playerObj) {
    wordleState.targetPlayer = playerObj.name;
    wordleState.answer = playerObj.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
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

function closeFutdleModal() {
    document.getElementById('futdle-modal').classList.add('hidden');
}

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
                
                if (letter && i === wordleState.guesses.length) {
                    cell.classList.add('active'); 
                }
                
                if (i < wordleState.guesses.length) {
                    cell.classList.add('revealed'); 
                    const status = getWordleLetterStatus(guess, j);
                    cell.classList.add(status);
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
    if (wordleState.answer[index] === letter) return "correct";
    if (wordleState.answer.includes(letter)) return "present";
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
            while (wordleState.currentGuess.length > 0 && 
                  (wordleState.currentGuess.slice(-1) === ' ' || wordleState.currentGuess.slice(-1) === '-')) {
                wordleState.currentGuess = wordleState.currentGuess.slice(0, -1);
            }
            if (wordleState.currentGuess.length > 0) {
                wordleState.currentGuess = wordleState.currentGuess.slice(0, -1);
            }
            while (wordleState.currentGuess.length < wordleState.wordLength && 
                  (wordleState.answer[wordleState.currentGuess.length] === ' ' || wordleState.answer[wordleState.currentGuess.length] === '-')) {
                wordleState.currentGuess += wordleState.answer[wordleState.currentGuess.length];
            }
            renderWordleGrid();
        }
    } else if (wordleState.currentGuess.length < wordleState.wordLength && /^[A-ZÑ]$/.test(key)) {
        wordleState.currentGuess += key;
        while (wordleState.currentGuess.length < wordleState.wordLength && 
              (wordleState.answer[wordleState.currentGuess.length] === ' ' || wordleState.answer[wordleState.currentGuess.length] === '-')) {
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
            mostrarMensajePro("❌ ¡FALLASTE!", "El jugador era: " + wordleState.targetPlayer + ". \n¡Prueba con otro mientras te quede tiempo!", () => {});
        }, 1000);
    }
}

// ==========================================
// 10. EVENT LISTENERS
// ==========================================

setupAutocomplete('wordInput', 'hangman-suggestions');
setupAutocomplete('blurInput', 'blur-suggestions');

document.getElementById('solveButton').onclick = solveFullWord;
document.getElementById('btnBlurCheck').onclick = checkBlurGuess;
document.getElementById('btnTmCheck').onclick = checkTimeMachineGuess;
document.getElementById('btnRoscoCheck').onclick = checkRosco;
document.getElementById('btnPasapalabra').onclick = pasapalabra;

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
    }
});

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
