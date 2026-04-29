// ==========================================
// 1. BASES DE DATOS & CONSTANTES GLOBALES
// ==========================================
const QWERTY_LAYOUT = ["QWERTYUIOP", "ASDFGHJKLÑ", "ZXCVBNM"];

const players = [
    "COURTOIS", "LUNIN", "FRAN GONZALEZ", "MILITAO", "ALABA", "RUDIGER", "CARVAJAL", "FRAN GARCIA", "MENDY", "ALEXANDER-ARNOLD", "HUIJSEN", "ASENCIO", "CARRERAS", "BELLINGHAM", "CAMAVINGA", "VALVERDE", "TCHOUAMENI", "ARDA GULER", "CEBALLOS", "MASTANTUONO", "VINICIUS", "MBAPPE", "RODRYGO", "BRAHIM DIAZ", "GONZALO GARCIA",
    "OBLAK", "MUSSO", "HANCKO", "PUBILL", "LE NORMAND", "GIMENEZ", "LENGLET", "RUGGERI", "MARCOS LLORENTE", "NAHUEL MOLINA", "PABLO BARRIOS", "JOHNNY CARDOSO", "KOKE", "ALEX BAENA", "NICO GONZALEZ", "THIAGO ALMADA","GIULIANO SIMEONE", "LOOKMAN","GRIEZMANN", "JULIAN ALVAREZ", "SORLOTH",
    "JOAN GARCIA", "SZCZESNY", "CUBARSI", "ERIC GARCIA", "ARAUJO", "CHRISTENSEN", "BALDE", "GERARD MARTIN", "KOUNDE", "JOAO CANCELO", "MARC BERNAL", "CASADO", "PEDRI", "DE JONG", "GAVI", "FERMIN LOPEZ", "DANI OLMO", "RAPHINHA", "RASHFORD", "LAMINE YAMAL", "BARDGHJI", "FERRAN TORRES", "LEWANDOWSKI",
    "DIEGO CONDE", "ARNAU TENAS", "RAFA MARIN", "RENATO VEIGA", "FOYTH", "SERGI CARDONA", "PAU NAVARRO", "THOMAS PARTEY", "DANI PAREJO", "SANTI COMESAÑA", "PAPE GUEYE", "SOLOMON", "BUCHANAN", "MOLEIRO", "ILIAS AKHOMACH", "GERARD MORENO", "AYOZE PEREZ", "NICOLAS PEPE", "MIKAUTADZE",
    "ALVARO VALLES", "PAU LOPEZ", "BELLERIN", "LLORENTE", "NATAN", "BARTRA", "RICARDO RODRIGUEZ", "MARC ROCA", "FORNALS", "LO CELSO", "ANTONY", "CHIMY AVILA", "ABDE", "BAKAMBU", "CUCHO HERNANDEZ", "AITOR RUIBAL",
    "RADU", "STARFELT", "MINGUEZA", "AIDOO", "ALVARO NUÑEZ", "MARCOS ALONSO",  "MORIBA", "BELTRAN", "WILLIOT SWEDBERG", "BORJA IGLESIAS", "JUTGLA", "IAGO ASPAS", "CERVI", "BRYAN ZARAGOZA", 
    "REMIRO", "ZUBELDIA", "CALETA CAR", "ELUSTONDO", "SERGIO GOMEZ", "JON ARAMBURU", "ODRIOZOLA", "BEÑAT TURRIENTES", "LUKA SUCIC", "YANGEL HERRERA", "CARLOS SOLER", "BRAIS MENDEZ", "ZAKHARYAN", "PABLO MARIN", "BARRENETXEA", "GUEDES", "KUBO", "OYARZABAL", "OSKARSSON",
    "UNAI SIMON", "ALEX PADILLA", "VIVIAN", "PAREDES", "LAPORTE", "YERAY ALVAREZ", "ADAMA BOIRO", "YURI BERCHICHE", "JESUS ARESO", "GOROSABEL", "LEKUE", "VESGA", "JAUREGIZAR", "BEÑAT PRADOS", "RUIZ DE GALARRETA", "OIHAN SANCET", "UNAI GOMEZ", "NICO WILLIAMS", "BERENGUER", "IÑAKI WILLIAMS", "GURUZETA",
    "JULEN AGIRREZABALA", "DIMITRIEVSKI", "DIAKHABY", "GAYA", "THIERRY CORREIA", "FOULQUIER", "PEPELU", "GUIDO RODRIGUEZ", "SANTAMARIA", "JAVI GUERRA", "RAMAZANI", "DANJUMA", "LUIS RIOJA", "HUGO DURO", "LUCAS BELTRAN", "UMAR SADIQ", 
    "TER STEGEN", "GAZZANIGA", "VITOR REIS", "BLIND", "DAVID LOPEZ","ARNAU MARTINEZ", "AXEL WITSEL", "OUNAHI", "IVAN MARTIN", "FRAN BELTRAN", "VAN DE BEEK", "ECHEVERRI", "LEMAR", "BRYAN GIL", "TSYGANKOV", "PORTU", "ABEL RUIZ", "STUANI",
    "VLACHODIMOS", "NYLAND", "KIKE SALAS", "MARCAO", "NIANZOU", "AZPILICUETA", "OSO", "JUANLU SANCHEZ", "CARMONA", "AGOUME", "GUDELJ", "SOW", "JOAN JORDAN", "EJUKE", "JANUZAJ", "ALEXIS SANCHEZ", "ISAAC ROMERO", "MAUPAY",  
    "DMITROVIC", "CABRERA", "CARLOS ROMERO", "EL HILALI", "POL LOZANO", "EDU EXPOSITO", "TERRATS", "JAVI PUADO", "PERE MILLA", "KIKE GARCIA",
    "BATALLA", "DANI CARDENAS", "MUMIN", "LUIZ FELIPE", "LEJEUNE", "PEP CHAVARRIA", "ANDREI RATIU", "BALLIU", "GUMBAU", "PEDRO DIAZ", "UNAI LOPEZ", "OSCAR VALENTIN", "PATHE CISS", "NTEKA", "OSCAR TREJO", "ALVARO GARCIA", "ILIAS AKHOMACH", "JORGE DE FRUTOS", "ISI PALAZON", "CAMELLO",
    "SERGIO HERRERA", "AITOR FERNANDEZ", "BOYOMO", "JORGE HERRANDO", "CATENA","JAVI GALAN", "JUAN CRUZ", "ROSIER", "LUCAS TORRO", "MONCAYOLA", "AIMAR OROZ", "MOI GOMEZ", "VICTOR MUÑOZ", "RAUL MORO", "RUBEN GARCIA", "KIKE BARJA", "RAUL GARCIA", "BUDIMIR",
    "LEO ROMAN", "MARTIN VALJENT", "RAILLO", "DAVID LOPEZ", "MOJICA", "TONI LATO", "PABLO MAFFEO", "SAMU COSTA", "MASCARELL", "SERGI DARDER", "MANU MORLANES", "PABLO TORRE", "JAN VIRGILI", "ASANO", "VEDAT MURIQI", "JOSEPH", "ABDON PRATS",
    "RYAN", "MANU SANCHEZ", "OLASAGASTI", "UNAI VENCEDOR", "CARLOS ALVAREZ", "ETTA EYONG", "IVAN ROMERO", "CARLOS ESPI", "MORALES",
    "IÑAKI PEÑA", "AFFENGRUBER", "VICTOR CHUST","HECTOR FORT", "SANGARE","ALEIX FEBAS", "ALVARO RODRIGUEZ", "RAFA MIR", "ANDRE SILVA",
    "DAVID SORIA", "ABDEL ABQAR", "DJENE", "DOMINGOS DUARTE", "DIEGO RICO", "JUAN IGLESIAS", "KIKO FEMENIA","ALLAN NYOM", "MARIO MARTIN", "ARAMBARRI", "LUIS MILLA", "BORJA MAYORAL", "SATRIANO", 
    "SIVERA", "NAHUEL TENAGLIA", "JONNY OTTO", "ANTONIO BLANCO", "CARLES ALEÑA", "ANDER GUEVARA", "JON GURIDI", "CALEBE", "DENIS SUAREZ", "LUCAS BOYE", "MARIANO DIAZ",
    "ESCANDELL", "ERIC BAILLY", "SANTI CAZORLA", "DENDONCKER"
];

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
        { respuesta: "GUNDOGAN", hint: "DIFÍCIL: Centrocampista alemán que regresó al Man City tras un año en el Barça." }
    ]},
    { letra: "H", preguntas: [
        { respuesta: "HAALAND", hint: "Apellido del 'Androide' noruego." },
        { respuesta: "HARRY KANE", hint: "FÁCIL: Capitán de Inglaterra que dejó el Tottenham para ir al Bayern Múnich." },
        { respuesta: "HULK", hint: "MEDIA: Potente delantero brasileño famoso por su disparo lejano." },
        { respuesta: "HULL CITY", hint: "Club inglés apodado los 'Tigers'." },
        { respuesta: "HUMMELS", hint: "DIFÍCIL: Central alemán que tras una vida en Dortmund fichó por la Roma en 2024." }
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
        { respuesta: "JOAO FELIX", hint: "MEDIA: Talentoso portugués que ha pasado por Atleti, Chelsea y Barça." },
        { respuesta: "JULIAN ALVAREZ", hint: "Nombre y apellido del jugador apodado 'La Araña'." },
        { respuesta: "JOBE", hint: "Nombre del hermano menor de los Bellingham." }
    ]},
    { letra: "K", preguntas: [
        { respuesta: "KROOS", hint: "Apellido del alemán que se retiró tras ganar la Champions en la temporada 2023/2024." },
        { respuesta: "KOPA", hint: "Nombre del trofeo que se otorga al mejor jugador joven del mundo." },
        { respuesta: "KUN AGUERO", hint: "MEDIA: Máximo goleador extranjero de la Premier League y leyenda del City." },
        { respuesta: "KVARATSKHELIA", hint: "Apellido del extremo georgiano estrella del PSG." },
        { respuesta: "KIMMICH", hint: "Apellido del líder del Bayern conocido por su mentalidad." }
    ]},
    { letra: "L", preguntas: [
        { respuesta: "LEWANDOWSKI", hint: "FÁCIL: El 9 polaco del FC Barcelona, ganador de dos premios The Best." },
        { respuesta: "LAMINE YAMAL", hint: "FÁCIL: El jugador más joven en marcar y ganar una Eurocopa (2024)." },
        { respuesta: "LIVERPOOL", hint: "MEDIA: Club inglés que canta el 'You'll Never Walk Alone'." },
        { respuesta: "LAUTARO", hint: "DIFÍCIL: El 'Toro' argentino, capitán y goleador del Inter de Milán." },
        { respuesta: "LUKAKU", hint: "DIFÍCIL: Delantero belga que ha pasado por casi todos los grandes de Italia e Inglaterra." }
    ]},
    { letra: "M", preguntas: [
        { respuesta: "MESSI", hint: "Apellido del máximo ganador del Ballon D'or." },
        { respuesta: "MBAPPE", hint: "FÁCIL: La estrella francesa que fichó por el Real Madrid en 2024." },
        { respuesta: "MODRIC", hint: "Apellido del ganador del Balón de Oro en 2018." },
        { respuesta: "MALLORCA", hint: "Nombre del equipo balear que llegó a la final de la Copa del Rey en 2024." },
        { respuesta: "MAIGNAN", hint: "DIFÍCIL: Portero titular de Francia y del AC Milan tras la era Lloris." }
    ]},
    { letra: "N", preguntas: [
        { respuesta: "NEYMAR", hint: "FÁCIL: El 10 de Brasil que formó la MSN en el Barça y ahora juega en Arabia." },
        { respuesta: "NICO WILLIAMS", hint: "FÁCIL: Extremo del Athletic Club y gran sensación de la Eurocopa 2024." },
        { respuesta: "NAPOLES", hint: "MEDIA: El club donde Maradona ganó dos 'Scudettos'." },
        { respuesta: "NEUER", hint: "Apellido del portero alemán que revolucionó el puesto jugando como líbero." },
        { respuesta: "NIZA", hint: "Nombre del equipo de la Costa Azul francesa que suele pelear puestos europeos." }
    ]},
    { letra: "Ñ", preguntas: [
        { respuesta: "ESPAÑA", hint: "FÁCIL: CONTIENE LA Ñ: Selección campeona de la Eurocopa 2024." },
        { respuesta: "CAICEDO", hint: "MEDIA: CONTIENE LA Ñ: Delantero ecuatoriano ex del Espanyol (Felipe)." },
        { respuesta: "PEÑA", hint: "MEDIA: CONTIENE LA Ñ: Apellido del portero suplente habitual del Barça (Iñaki)." },
        { respuesta: "RONALDIÑO", hint: "DIFÍCIL: CONTIENE LA Ñ: El astro brasileño que devolvió la sonrisa al Barça (escrito con eñe)." },
        { respuesta: "REGINO", hint: "DIFÍCIL: CONTIENE LA Ñ: Nombre de un mítico canterano del Real Madrid." }
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
        { respuesta: "ZIDANE", hint: "FÁCIL: Leyenda francesa, autor de la volea de la Novena." },
        { respuesta: "ZUBIMENDI", hint: "MEDIA: El pivote de la Real Sociedad que rechazó al Liverpool." },
        { respuesta: "ZAMORA", hint: "MEDIA: El trofeo que recibe el portero menos goleado en España." },
        { respuesta: "ZLATAN", hint: "DIFÍCIL: El nombre de pila de Ibrahimovic, el gigante sueco." },
        { respuesta: "ZOFF", hint: "DIFÍCIL: Dino, el portero más veterano en ganar un Mundial (40 años)." }
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
    { name: " BERNABÉU", value: 83186 }, { name: "CAMP NOU", value: 99354 },
    { name: "METROPOLITANO", value: 70692 }, { name: "LA CERÁMICA", value: 22000 },
    { name: "BENITO VILLAMARÍN", value: 60721 }, { name: "COLISEUM", value: 16500 },
    { name: "BALAIDOS", value: 24870 }, { name: "ANOETA", value: 40000 },
    { name: "EL SADAR", value: 23576 }, { name: "SAN MAMÉS", value: 53289 },
    { name: "VALLECAS", value: 14708 }, { name: "MESTALLA", value: 49430 },
    { name: "RCDE STADIUM", value: 40445 }, { name: "MARTÍNEZ VALERO", value: 33732 },
    { name: "MONTILIVI", value: 14624 }, { name: "MENDIZORROZA", value: 19840 },
    { name: "SON MOIX", value: 26020 }, { name: "RAMÓN SÁNCHEZ-PIZJUÁN", value: 43864 },
    { name: "CIUTAT DE VALENCIA", value: 23354 }, { name: "CARLOS TARTIERE", value: 30500 }
];

const premierTeamsDB = [
    "ARSENAL", "ASTON VILLA", "CHELSEA", "EVERTON", "LIVERPOOL", 
    "MANCHESTER CITY", "MANCHESTER UNITED", "NEWCASTLE", "TOTTENHAM", "WEST HAM", "BRIGHTON"
];

const top10DB = [
    {
        id: 'goleadores_champions',
        title: 'TOP 10 GOLEADORES',
        desc: 'Máximos anotadores históricos de la Champions League',
        items: [
            { rank: 1, name: "CRISTIANO RONALDO", hint: "🇵🇹 140 Goles", revealed: false },
            { rank: 2, name: "LIONEL MESSI", hint: "🇦🇷 129 Goles", revealed: false },
            { rank: 3, name: "ROBERT LEWANDOWSKI", hint: "🇵🇱 94 Goles", revealed: false },
            { rank: 4, name: "KARIM BENZEMA", hint: "🇫🇷 90 Goles", revealed: false },
            { rank: 5, name: "RAUL GONZALEZ", hint: "🇪🇸 71 Goles", revealed: false },
            { rank: 6, name: "RUUD VAN NISTELROOY", hint: "🇳🇱 56 Goles", revealed: false },
            { rank: 7, name: "THOMAS MULLER", hint: "🇩🇪 54 Goles", revealed: false },
            { rank: 8, name: "THIERRY HENRY", hint: "🇫🇷 50 Goles", revealed: false },
            { rank: 9, name: "ALFREDO DI STEFANO", hint: "🇦🇷 49 Goles", revealed: false },
            { rank: 10, name: "ANDRIY SHEVCHENKO", hint: "🇺🇦 48 Goles", revealed: false }
        ]
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

let roscoState = {
    mode: 'individual',
    currentPlayer: 1, 
    timerInterval: null,
    p1: { currentIndex: 0, results: {}, timeLeft: 300, questions: [], done: false },
    p2: { currentIndex: 0, results: {}, timeLeft: 300, questions: [], done: false }
};

// ==========================================
// 2.5 SISTEMA DE INTENTOS DIARIOS
// ==========================================
function obtenerFechaEspana() {
    return new Date().toLocaleDateString('es-ES', { timeZone: 'Europe/Madrid' });
}

function puedeJugar(gameId) {
    const hoy = obtenerFechaEspana();
    const jugado = localStorage.getItem(`f10_${gameId}_${hoy}`);
    return !jugado;
}

function registrarIntento(gameId) {
    const hoy = obtenerFechaEspana();
    localStorage.setItem(`f10_${gameId}_${hoy}`, "true");
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
                <div class="card-info"><h3>Ahorcado</h3><p>Nivel Clásico</p></div>
            </div>
            <div class="menu-card blur-game-card" onclick="showGame('blur')">
                <div class="card-bg bg-blur"></div> 
                <div class="card-info"><h3>Blur Guess</h3><p>Adivina el jugador</p></div>
            </div>
            <div class="menu-card aforos-game-card" onclick="showGame('aforos')">
                <div class="card-bg bg-laliga"></div>
                <div class="card-info"><h3>Guerra de Aforos</h3><p>Capacidad de Estadios</p></div>
            </div>`;
   } else if (category === 'leyendas') {
        title.innerHTML = "LEYENDAS <span>FÚTBOL</span>";
        grid.innerHTML = `
            <div class="menu-card timemachine-game-card" onclick="showGame('timemachine')">
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
            <div class="menu-card eleven-game-card" onclick="showGame('eleven')">
                <div class="card-bg bg-europeos"></div>
                <div class="card-info"><h3>XI Histórico</h3><p>Adivina con Futdle</p></div>
            </div>`;
    } else {
        title.innerHTML = "PREMIER <span>LEAGUE</span>";
        grid.innerHTML = `
            <div class="menu-card hl-game-card" onclick="showGame('higherlower')">
                <div class="card-bg bg-higherlower"></div>
                <div class="card-info"><h3>Higher / Lower</h3><p>Valor de Mercado</p></div>
            </div>
            <div class="menu-card zoom-game-card" onclick="showGame('zoom')">
                <div class="card-bg bg-premier"></div>
                <div class="card-info"><h3>Escudos Zoom</h3><p>Reconoce el detalle</p></div>
            </div>`;
    }
}

function showGame(gameId) {
    if (!puedeJugar(gameId)) {
        mostrarMensajePro(
            "⏳ ¡INTENTO AGOTADO!", 
            "Ya has jugado a este minijuego hoy.\nVuelve mañana (reinicio a las 00:00 hora española).", 
            null
        );
        return;
    }

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
    input.addEventListener('input', () => {
        const val = input.value.toUpperCase().trim();
        box.innerHTML = "";
        if (val.length < 2) return;
        
        let sourceArray = players;
        if (inputId === 'zoomInput') sourceArray = premierTeamsDB;
        
        const matches = sourceArray.filter(p => p.includes(val)).slice(0, 4);
        matches.forEach(match => {
            const div = document.createElement('div');
            div.textContent = match;
            div.onclick = () => { input.value = match; box.innerHTML = ""; };
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
        if (gameState.mistakes >= 6) {
            gameState.streak = 0;
            registrarIntento('hangman');
            mostrarMensajePro("🧤 ¡TARJETA ROJA!", "Era: " + gameState.word, () => showMenu());
        }
    } else {
        updateDisplay();
    }
}

function updateDisplay() {
    const words = gameState.word.split(" ");
    const displayHTML = words.map(word => {
        const letters = word.split('').map(char => {
            const normChar = char.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return gameState.guessed.includes(normChar) ? char : "_";
        }).join(" ");
        return `<span style="white-space: nowrap;">${letters}</span>`;
    }).join(" &nbsp;&nbsp; "); 
    
    document.getElementById('wordDisplay').innerHTML = displayHTML;
    
    if (!document.getElementById('wordDisplay').textContent.includes("_")) {
        gameState.streak++;
        registrarIntento('hangman');
        mostrarMensajePro("🔥 ¡LOKUURA!", "Era: " + gameState.word, () => showMenu());
    }
}

function solveFullWord() {
    const val = document.getElementById('wordInput').value.toUpperCase().trim();
    const nVal = val.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const nWord = gameState.word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (nVal === nWord && nVal !== "") {
        gameState.streak++;
        registrarIntento('hangman');
        mostrarMensajePro("🔥 ¡LOKUURA!", "Era: " + gameState.word, () => showMenu());
    } else {
        gameState.streak = 0;
        registrarIntento('hangman');
        mostrarMensajePro("🧤 ¡TARJETA ROJA!", "Era: " + gameState.word, () => showMenu());
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
        registrarIntento('blur');
        setTimeout(() => mostrarMensajePro("🔥 ¡BRUTAL!", "Es " + blurState.player, () => showMenu()), 300);
    } else {
        blurState.lives--;
        blurState.blur -= 6;
        if (blurState.lives <= 0) {
            blurState.streak = 0;
            document.getElementById('playerImg').style.filter = "blur(0px)";
            registrarIntento('blur');
            setTimeout(() => mostrarMensajePro("🧤 ¡PARADÓN!", "Era " + blurState.player, () => showMenu()), 300);
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
        registrarIntento('timemachine');
        mostrarMensajePro("⏳ ¡CLAVADO!", `Efectivamente, fue en el año ${timeMachineState.year}.`, () => showMenu());
    } else {
        timeMachineState.lives--;
        if (timeMachineState.lives <= 0) {
            timeMachineState.streak = 0;
            registrarIntento('timemachine');
            mostrarMensajePro("❌ ¡FIN DEL TIEMPO!", `El año correcto era ${timeMachineState.year}.`, () => showMenu());
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
    if (!puedeJugar(`rosco_${mode}`)) {
        mostrarMensajePro(
            "⏳ ¡INTENTO AGOTADO!", 
            "Ya has jugado a este modo del Rosco hoy.\nVuelve mañana.", 
            null
        );
        return;
    }

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
    registrarIntento(`rosco_${roscoState.mode}`);
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
            registrarIntento('eleven');
            mostrarMensajePro("⏳ ¡TIEMPO AGOTADO!", "Te faltaron jugadores de " + elevenState.match.team + ".", () => showMenu());
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
        registrarIntento('eleven');
        setTimeout(() => mostrarMensajePro("🏆 ¡LEYENDA EUROPEA!", "Has adivinado el XI Histórico completo.", () => showMenu()), 500);
    }
}

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

    if (previousYellowsUsed < availableYellows) {
        return "present";
    }

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

// --- HIGHER OR LOWER (PREMIER) ---
function initHigherLower() {
    hlState.score = 0;
    document.getElementById('hl-score').innerText = hlState.score;
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
            hlState.p1 = hlState.p2;
            pickNewPlayer2();
            renderHL();
        } else {
            registrarIntento('higherlower');
            mostrarMensajePro("❌ ¡FIN DE LA RACHA!", `El valor de ${hlState.p2.name} es de ${v2} M€.\nHas conseguido ${hlState.score} puntos.`, () => showMenu());
        }
    }, 1500);
}

// --- GUERRA DE AFOROS (LALIGA) ---
function initAforosGame() {
    aforosState.score = 0;
    document.getElementById('aforos-score').innerText = aforosState.score;
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
    document.getElementById('aforos-img-1').src = `estadios/${aforosState.p1.name.replace(/ /g, "_")}.jpg`; 

    document.getElementById('aforos-name-2').innerText = aforosState.p2.name;
    document.getElementById('aforos-img-2').src = `estadios/${aforosState.p2.name.replace(/ /g, "_")}.jpg`;
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
            aforosState.p1 = aforosState.p2;
            pickNewEstadio2();
            renderAforos();
        } else {
            registrarIntento('aforos');
            mostrarMensajePro("❌ ¡FIN DE LA RACHA!", `El aforo de ${aforosState.p2.name} es de ${v2.toLocaleString('es-ES')} espectadores.\nHas conseguido ${aforosState.score} puntos.`, () => showMenu());
        }
    }, 1500);
}

// --- ESCUDOS ZOOM (PREMIER) ---
function initZoomGame() {
    zoomState.team = premierTeamsDB[Math.floor(Math.random() * premierTeamsDB.length)];
    zoomState.lives = 5;
    zoomState.currentScale = 4;
    document.getElementById('zoom-lives').innerText = zoomState.lives;
    document.getElementById('zoom-streak').innerText = zoomState.streak;
    document.getElementById('zoomInput').value = "";
    document.getElementById('zoom-suggestions').innerHTML = "";
    
    const img = document.getElementById('zoom-image');
    img.src = `teams/${zoomState.team}.png`; 
    img.style.transform = `scale(${zoomState.currentScale})`;
    
    const randomX = Math.floor(Math.random() * 60) + 20; 
    const randomY = Math.floor(Math.random() * 60) + 20;
    img.style.transformOrigin = `${randomX}% ${randomY}%`;
}

function checkZoomGuess() {
    const val = document.getElementById('zoomInput').value.toUpperCase().trim();
    if (val === zoomState.team) {
        zoomState.streak++;
        document.getElementById('zoom-image').style.transform = "scale(1)"; 
        registrarIntento('zoom');
        setTimeout(() => mostrarMensajePro("🎯 ¡DIANA!", "Es el escudo del " + zoomState.team, () => showMenu()), 800);
    } else {
        zoomState.lives--;
        document.getElementById('zoom-lives').innerText = zoomState.lives;
        
        if (zoomState.lives <= 0) {
            zoomState.streak = 0;
            document.getElementById('zoom-image').style.transform = "scale(1)";
            registrarIntento('zoom');
            setTimeout(() => mostrarMensajePro("❌ ¡FALLO!", "Era el escudo del " + zoomState.team, () => showMenu()), 800);
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
                <span class="top10-hint">${item.hint}</span>
            </div>
        `;
        listContainer.appendChild(div);
    });
}

function checkTop10Guess() {
    const inputEl = document.getElementById('top10Input');
    const val = inputEl.value.toUpperCase().trim();
    if(!val) return;
    
    const nVal = val.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let found = false;
    
    top10State.currentList.items.forEach(item => {
        if (!item.revealed) {
            const nAns = item.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
            registrarIntento('top10');
            setTimeout(() => mostrarMensajePro("🏆 ¡TOP 10 COMPLETADO!", "¡Conoces a la élite del fútbol al detalle!", () => showMenu()), 800);
        }
    } else {
        inputEl.classList.add("input-error");
        setTimeout(() => {
            inputEl.classList.remove("input-error");
        }, 400);
    }
}

// ==========================================
// 6. EVENT LISTENERS GENERALES
// ==========================================

setupAutocomplete('wordInput', 'hangman-suggestions');
setupAutocomplete('blurInput', 'blur-suggestions');
setupAutocomplete('zoomInput', 'zoom-suggestions'); 
setupAutocomplete('top10Input', 'top10-suggestions');

document.getElementById('solveButton').onclick = solveFullWord;
document.getElementById('btnBlurCheck').onclick = checkBlurGuess;
document.getElementById('btnTmCheck').onclick = checkTimeMachineGuess;
document.getElementById('btnRoscoCheck').onclick = checkRosco;
document.getElementById('btnPasapalabra').onclick = pasapalabra;
document.getElementById('btnZoomCheck').onclick = checkZoomGuess; 
document.getElementById('btnTop10Check').onclick = checkTop10Guess;

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
    }
});
