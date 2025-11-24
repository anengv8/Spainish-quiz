const qna = [
    {num: 1, que: "to speak", true: "hablar", false1: "comer", false2: "vivir"},
    {num: 2, que: "to eat", true: "comer", false1: "beber", false2: "correr"},
    {num: 3, que: "to live", true: "vivir", false1: "trabajar", false2: "estudiar"},
    {num: 4, que: "to be (permanent)", true: "ser", false1: "estar", false2: "tener"},
    {num: 5, que: "to be (temporary)", true: "estar", false1: "ser", false2: "hacer"},
    {num: 6, que: "to have", true: "tener", false1: "hacer", false2: "poner"},
    {num: 7, que: "to do/make", true: "hacer", false1: "decir", false2: "ver"},
    {num: 8, que: "to go", true: "ir", false1: "venir", false2: "salir"},
    {num: 9, que: "to come", true: "venir", false1: "ir", false2: "llegar"},
    {num: 10, que: "to see", true: "ver", false1: "mirar", false2: "buscar"},
    {num: 11, que: "to say/tell", true: "decir", false1: "hablar", false2: "contar"},
    {num: 12, que: "to give", true: "dar", false1: "tomar", false2: "recibir"},
    {num: 13, que: "to know (facts)", true: "saber", false1: "conocer", false2: "aprender"},
    {num: 14, que: "to know (people/places)", true: "conocer", false1: "saber", false2: "encontrar"},
    {num: 15, que: "to want", true: "querer", false1: "necesitar", false2: "desear"},
    {num: 16, que: "to be able to", true: "poder", false1: "deber", false2: "necesitar"},
    {num: 17, que: "to put/place", true: "poner", false1: "tomar", false2: "dejar"},
    {num: 18, que: "to seem/appear", true: "parecer", false1: "aparecer", false2: "mostrar"},
    {num: 19, que: "to believe", true: "creer", false1: "pensar", false2: "saber"},
    {num: 20, que: "to follow/continue", true: "seguir", false1: "continuar", false2: "empezar"},
    {num: 21, que: "to find", true: "encontrar", false1: "buscar", false2: "perder"},
    {num: 22, que: "to call", true: "llamar", false1: "gritar", false2: "hablar"},
    {num: 23, que: "to leave", true: "dejar", false1: "salir", false2: "llegar"},
    {num: 24, que: "to take/drink", true: "tomar", false1: "dar", false2: "recibir"},
    {num: 25, que: "to work", true: "trabajar", false1: "estudiar", false2: "aprender"},
    {num: 26, que: "to need", true: "necesitar", false1: "querer", false2: "desear"},
    {num: 27, que: "to feel", true: "sentir", false1: "pensar", false2: "creer"},
    {num: 28, que: "to become", true: "llegar a ser", false1: "empezar a", false2: "terminar de"},
    {num: 29, que: "to carry/wear", true: "llevar", false1: "traer", false2: "tener"},
    {num: 30, que: "to pass/happen", true: "pasar", false1: "ocurrir", false2: "suceder"},
    {num: 31, que: "to should/must", true: "deber", false1: "poder", false2: "querer"},
    {num: 32, que: "to stay/remain", true: "quedar", false1: "estar", false2: "quedarse"},
    {num: 33, que: "to think", true: "pensar", false1: "creer", false2: "saber"},
    {num: 34, que: "to return", true: "volver", false1: "regresar", false2: "venir"},
    {num: 35, que: "to recognize", true: "reconocer", false1: "conocer", false2: "saber"},
    {num: 36, que: "to look/watch", true: "mirar", false1: "ver", false2: "buscar"},
    {num: 37, que: "to obtain/get", true: "obtener", false1: "conseguir", false2: "recibir"},
    {num: 38, que: "to begin/start", true: "empezar", false1: "comenzar", false2: "terminar"},
    {num: 39, que: "to serve", true: "servir", false1: "ayudar", false2: "trabajar"},
    {num: 40, que: "to speak/talk", true: "hablar", false1: "decir", false2: "contar"},
    {num: 41, que: "to use", true: "usar", false1: "utilizar", false2: "necesitar"},
    {num: 42, que: "to realize", true: "darse cuenta", false1: "entender", false2: "saber"},
    {num: 43, que: "to read", true: "leer", false1: "escribir", false2: "estudiar"},
    {num: 44, que: "to lose", true: "perder", false1: "ganar", false2: "encontrar"},
    {num: 45, que: "to create", true: "crear", false1: "hacer", false2: "construir"},
    {num: 46, que: "to explain", true: "explicar", false1: "entender", false2: "aprender"},
    {num: 47, que: "to understand", true: "entender", false1: "comprender", false2: "saber"},
    {num: 48, que: "to ask for/request", true: "pedir", false1: "preguntar", false2: "decir"},
    {num: 49, que: "to remember", true: "recordar", false1: "acordarse", false2: "pensar"},
    {num: 50, que: "to appear/show up", true: "aparecer", false1: "parecer", false2: "mostrar"},
    {num: 51, que: "to wait for", true: "esperar", false1: "esperarse", false2: "quedar"},
    {num: 52, que: "to consider", true: "considerar", false1: "pensar", false2: "creer"},
    {num: 53, que: "to open", true: "abrir", false1: "cerrar", false2: "entrar"},
    {num: 54, que: "to continue", true: "continuar", false1: "seguir", false2: "empezar"},
    {num: 55, que: "to hear", true: "oír", false1: "escuchar", false2: "oir"},
    {num: 56, que: "to walk", true: "caminar", false1: "andar", false2: "correr"},
    {num: 57, que: "to write", true: "escribir", false1: "leer", false2: "estudiar"},
    {num: 58, que: "to provide", true: "proveer", false1: "dar", false2: "ofrecer"},
    {num: 59, que: "to sit down", true: "sentarse", false1: "sentir", false2: "estar"},
    {num: 60, que: "to stand up", true: "levantarse", false1: "pararse", false2: "subir"},
    {num: 61, que: "to try/attempt", true: "intentar", false1: "tratar", false2: "probar"},
    {num: 62, que: "to change", true: "cambiar", false1: "cambiarse", false2: "volver"},
    {num: 63, que: "to die", true: "morir", false1: "matar", false2: "perder"},
    {num: 64, que: "to born", true: "nacer", false1: "vivir", false2: "empezar"},
    {num: 65, que: "to run", true: "correr", false1: "caminar", false2: "andar"},
    {num: 66, que: "to travel", true: "viajar", false1: "visitar", false2: "conocer"},
    {num: 67, que: "to play (game)", true: "jugar", false1: "tocar", false2: "ganar"},
    {num: 68, que: "to play (instrument)", true: "tocar", false1: "jugar", false2: "cantar"},
    {num: 69, que: "to sing", true: "cantar", false1: "bailar", false2: "escuchar"},
    {num: 70, que: "to dance", true: "bailar", false1: "cantar", false2: "mover"},
    {num: 71, que: "to study", true: "estudiar", false1: "aprender", false2: "enseñar"},
    {num: 72, que: "to learn", true: "aprender", false1: "estudiar", false2: "entender"},
    {num: 73, que: "to teach", true: "enseñar", false1: "aprender", false2: "estudiar"},
    {num: 74, que: "to answer", true: "responder", false1: "preguntar", false2: "decir"},
    {num: 75, que: "to ask (question)", true: "preguntar", false1: "pedir", false2: "decir"},
    {num: 76, que: "to help", true: "ayudar", false1: "necesitar", false2: "servir"},
    {num: 77, que: "to love", true: "amar", false1: "querer", false2: "gustar"},
    {num: 78, que: "to like", true: "gustar", false1: "amar", false2: "querer"},
    {num: 79, que: "to look for", true: "buscar", false1: "encontrar", false2: "mirar"},
    {num: 80, que: "to enter", true: "entrar", false1: "salir", false2: "llegar"},
    {num: 81, que: "to exit/leave", true: "salir", false1: "entrar", false2: "llegar"},
    {num: 82, que: "to arrive", true: "llegar", false1: "salir", false2: "ir"},
    {num: 83, que: "to close", true: "cerrar", false1: "abrir", false2: "terminar"},
    {num: 84, que: "to begin", true: "comenzar", false1: "empezar", false2: "terminar"},
    {num: 85, que: "to finish", true: "terminar", false1: "acabar", false2: "comenzar"},
    {num: 86, que: "to sleep", true: "dormir", false1: "soñar", false2: "descansar"},
    {num: 87, que: "to wake up", true: "despertarse", false1: "despertar", false2: "levantarse"},
    {num: 88, que: "to buy", true: "comprar", false1: "vender", false2: "pagar"},
    {num: 89, que: "to sell", true: "vender", false1: "comprar", false2: "ganar"},
    {num: 90, que: "to pay", true: "pagar", false1: "comprar", false2: "ganar"},
    {num: 91, que: "to cost", true: "costar", false1: "valer", false2: "pagar"},
    {num: 92, que: "to rain", true: "llover", false1: "nevar", false2: "hacer"},
    {num: 93, que: "to snow", true: "nevar", false1: "llover", false2: "hacer"},
    {num: 94, que: "to listen", true: "escuchar", false1: "oír", false2: "hablar"},
    {num: 95, que: "to bring", true: "traer", false1: "llevar", false2: "tener"},
    {num: 96, que: "to forget", true: "olvidar", false1: "olvidarse", false2: "recordar"},
    {num: 97, que: "to prefer", true: "preferir", false1: "querer", false2: "gustar"},
    {num: 98, que: "to send", true: "enviar", false1: "mandar", false2: "dar"},
    {num: 99, que: "to receive", true: "recibir", false1: "tomar", false2: "dar"},
    {num: 100, que: "to offer", true: "ofrecer", false1: "dar", false2: "recibir"},

    // Second 100: Verb Tenses (focusing on most common verbs)
    // Present Tense
    {num: 101, que: "Present: yo (hablar)", true: "hablo", false1: "habla", false2: "hablan"},
    {num: 102, que: "Present: tú (comer)", true: "comes", false1: "come", false2: "comemos"},
    {num: 103, que: "Present: él/ella (vivir)", true: "vive", false1: "vivo", false2: "vives"},
    {num: 104, que: "Present: nosotros (ser)", true: "somos", false1: "sois", false2: "son"},
    {num: 105, que: "Present: ellos (tener)", true: "tienen", false1: "tenemos", false2: "tengo"},
    {num: 106, que: "Present: yo (hacer)", true: "hago", false1: "hace", false2: "hacen"},
    {num: 107, que: "Present: tú (ir)", true: "vas", false1: "va", false2: "voy"},
    {num: 108, que: "Present: yo (ver)", true: "veo", false1: "ves", false2: "ven"},
    {num: 109, que: "Present: él/ella (decir)", true: "dice", false1: "digo", false2: "dicen"},
    {num: 110, que: "Present: yo (querer)", true: "quiero", false1: "quiere", false2: "quieren"},

    // Preterite (Past Simple)
    {num: 111, que: "Preterite: yo (hablar)", true: "hablé", false1: "hablaba", false2: "hablo"},
    {num: 112, que: "Preterite: tú (comer)", true: "comiste", false1: "comías", false2: "comes"},
    {num: 113, que: "Preterite: él/ella (vivir)", true: "vivió", false1: "vivía", false2: "vive"},
    {num: 114, que: "Preterite: nosotros (ser)", true: "fuimos", false1: "éramos", false2: "somos"},
    {num: 115, que: "Preterite: ellos (tener)", true: "tuvieron", false1: "tenían", false2: "tienen"},
    {num: 116, que: "Preterite: yo (hacer)", true: "hice", false1: "hacía", false2: "hago"},
    {num: 117, que: "Preterite: tú (ir)", true: "fuiste", false1: "ibas", false2: "vas"},
    {num: 118, que: "Preterite: él/ella (ver)", true: "vio", false1: "veía", false2: "ve"},
    {num: 119, que: "Preterite: yo (decir)", true: "dije", false1: "decía", false2: "digo"},
    {num: 120, que: "Preterite: tú (querer)", true: "quisiste", false1: "querías", false2: "quieres"},

    // Imperfect
    {num: 121, que: "Imperfect: yo (hablar)", true: "hablaba", false1: "hablé", false2: "hablo"},
    {num: 122, que: "Imperfect: tú (comer)", true: "comías", false1: "comiste", false2: "comes"},
    {num: 123, que: "Imperfect: él/ella (vivir)", true: "vivía", false1: "vivió", false2: "vive"},
    {num: 124, que: "Imperfect: nosotros (ser)", true: "éramos", false1: "fuimos", false2: "somos"},
    {num: 125, que: "Imperfect: ellos (tener)", true: "tenían", false1: "tuvieron", false2: "tienen"},
    {num: 126, que: "Imperfect: yo (hacer)", true: "hacía", false1: "hice", false2: "hago"},
    {num: 127, que: "Imperfect: tú (ir)", true: "ibas", false1: "fuiste", false2: "vas"},
    {num: 128, que: "Imperfect: él/ella (ver)", true: "veía", false1: "vio", false2: "ve"},
    {num: 129, que: "Imperfect: yo (decir)", true: "decía", false1: "dije", false2: "digo"},
    {num: 130, que: "Imperfect: tú (querer)", true: "querías", false1: "quisiste", false2: "quieres"},

    // Future
    {num: 131, que: "Future: yo (hablar)", true: "hablaré", false1: "hablo", false2: "hablaba"},
    {num: 132, que: "Future: tú (comer)", true: "comerás", false1: "comes", false2: "comías"},
    {num: 133, que: "Future: él/ella (vivir)", true: "vivirá", false1: "vive", false2: "vivía"},
    {num: 134, que: "Future: nosotros (ser)", true: "seremos", false1: "somos", false2: "éramos"},
    {num: 135, que: "Future: ellos (tener)", true: "tendrán", false1: "tienen", false2: "tenían"},
    {num: 136, que: "Future: yo (hacer)", true: "haré", false1: "hago", false2: "hacía"},
    {num: 137, que: "Future: tú (ir)", true: "irás", false1: "vas", false2: "ibas"},
    {num: 138, que: "Future: él/ella (ver)", true: "verá", false1: "ve", false2: "veía"},
    {num: 139, que: "Future: yo (decir)", true: "diré", false1: "digo", false2: "decía"},
    {num: 140, que: "Future: tú (querer)", true: "querrás", false1: "quieres", false2: "querías"},

    // Conditional
    {num: 141, que: "Conditional: yo (hablar)", true: "hablaría", false1: "hablo", false2: "hablaré"},
    {num: 142, que: "Conditional: tú (comer)", true: "comerías", false1: "comes", false2: "comerás"},
    {num: 143, que: "Conditional: él/ella (vivir)", true: "viviría", false1: "vive", false2: "vivirá"},
    {num: 144, que: "Conditional: nosotros (ser)", true: "seríamos", false1: "somos", false2: "seremos"},
    {num: 145, que: "Conditional: ellos (tener)", true: "tendrían", false1: "tienen", false2: "tendrán"},
    {num: 146, que: "Conditional: yo (hacer)", true: "haría", false1: "hago", false2: "haré"},
    {num: 147, que: "Conditional: tú (ir)", true: "irías", false1: "vas", false2: "irás"},
    {num: 148, que: "Conditional: él/ella (ver)", true: "vería", false1: "ve", false2: "verá"},
    {num: 149, que: "Conditional: yo (decir)", true: "diría", false1: "digo", false2: "diré"},
    {num: 150, que: "Conditional: tú (querer)", true: "querrías", false1: "quieres", false2: "querrás"},

    // Present Subjunctive
    {num: 151, que: "Subjunctive: yo (hablar)", true: "hable", false1: "hablo", false2: "hablé"},
    {num: 152, que: "Subjunctive: tú (comer)", true: "comas", false1: "comes", false2: "comiste"},
    {num: 153, que: "Subjunctive: él/ella (vivir)", true: "viva", false1: "vive", false2: "vivió"},
    {num: 154, que: "Subjunctive: nosotros (ser)", true: "seamos", false1: "somos", false2: "fuimos"},
    {num: 155, que: "Subjunctive: ellos (tener)", true: "tengan", false1: "tienen", false2: "tuvieron"},
    {num: 156, que: "Subjunctive: yo (hacer)", true: "haga", false1: "hago", false2: "hice"},
    {num: 157, que: "Subjunctive: tú (ir)", true: "vayas", false1: "vas", false2: "fuiste"},
    {num: 158, que: "Subjunctive: él/ella (ver)", true: "vea", false1: "ve", false2: "vio"},
    {num: 159, que: "Subjunctive: yo (decir)", true: "diga", false1: "digo", false2: "dije"},
    {num: 160, que: "Subjunctive: tú (querer)", true: "quieras", false1: "quieres", false2: "quisiste"},

    // More mixed tenses for important verbs
    {num: 161, que: "Present: yo (poder)", true: "puedo", false1: "puede", false2: "pueden"},
    {num: 162, que: "Preterite: él/ella (poder)", true: "pudo", false1: "podía", false2: "puede"},
    {num: 163, que: "Present: tú (saber)", true: "sabes", false1: "sabe", false2: "saben"},
    {num: 164, que: "Preterite: yo (saber)", true: "supe", false1: "sabía", false2: "sé"},
    {num: 165, que: "Present: él/ella (poner)", true: "pone", false1: "pono", false2: "ponen"},
    {num: 166, que: "Preterite: tú (poner)", true: "pusiste", false1: "ponías", false2: "pones"},
    {num: 167, que: "Present: yo (salir)", true: "salgo", false1: "salo", false2: "sale"},
    {num: 168, que: "Future: él/ella (salir)", true: "saldrá", false1: "sale", false2: "salía"},
    {num: 169, que: "Present: tú (venir)", true: "vienes", false1: "viene", false2: "vienen"},
    {num: 170, que: "Preterite: yo (venir)", true: "vine", false1: "venía", false2: "vengo"},

    // Additional important verb tenses
    {num: 171, que: "Present: él/ella (conocer)", true: "conoce", false1: "conozco", false2: "conocen"},
    {num: 172, que: "Preterite: tú (conocer)", true: "conociste", false1: "conocías", false2: "conoces"},
    {num: 173, que: "Present: yo (dar)", true: "doy", false1: "da", false2: "dan"},
    {num: 174, que: "Imperfect: él/ella (dar)", true: "daba", false1: "dio", false2: "da"},
    {num: 175, que: "Present: tú (estar)", true: "estás", false1: "está", false2: "están"},
    {num: 176, que: "Preterite: él/ella (estar)", true: "estuvo", false1: "estaba", false2: "está"},
    {num: 177, que: "Present: yo (pensar)", true: "pienso", false1: "piensa", false2: "piensan"},
    {num: 178, que: "Future: tú (pensar)", true: "pensarás", false1: "piensas", false2: "pensabas"},
    {num: 179, que: "Present: él/ella (encontrar)", true: "encuentra", false1: "encuentro", false2: "encuentran"},
    {num: 180, que: "Preterite: yo (encontrar)", true: "encontré", false1: "encontraba", false2: "encuentro"},

    // Last 20 mixed tense questions
    {num: 181, que: "Present: nosotros (volver)", true: "volvemos", false1: "volvimos", false2: "volveremos"},
    {num: 182, que: "Preterite: ellos (volver)", true: "volvieron", false1: "volvían", false2: "vuelven"},
    {num: 183, que: "Present: yo (pedir)", true: "pido", false1: "pide", false2: "piden"},
    {num: 184, que: "Imperfect: tú (pedir)", true: "pedías", false1: "pediste", false2: "pides"},
    {num: 185, que: "Present: él/ella (sentir)", true: "siente", false1: "siento", false2: "sienten"},
    {num: 186, que: "Future: yo (sentir)", true: "sentiré", false1: "siento", false2: "sentía"},
    {num: 187, que: "Present: tú (dormir)", true: "duermes", false1: "duerme", false2: "duermen"},
    {num: 188, que: "Preterite: él/ella (dormir)", true: "durmió", false1: "dormía", false2: "duerme"},
    {num: 189, que: "Present: yo (jugar)", true: "juego", false1: "juega", false2: "juegan"},
    {num: 190, que: "Imperfect: tú (jugar)", true: "jugabas", false1: "jugaste", false2: "juegas"},
    {num: 191, que: "Present: él/ella (empezar)", true: "empieza", false1: "empiezo", false2: "empiezan"},
    {num: 192, que: "Future: nosotros (empezar)", true: "empezaremos", false1: "empezamos", false2: "empezábamos"},
    {num: 193, que: "Present: yo (entender)", true: "entiendo", false1: "entiende", false2: "entienden"},
    {num: 194, que: "Preterite: tú (entender)", true: "entendiste", false1: "entendías", false2: "entiendes"},
    {num: 195, que: "Present: él/ella (perder)", true: "pierde", false1: "pierdo", false2: "pierden"},
    {num: 196, que: "Conditional: yo (perder)", true: "perdería", false1: "pierdo", false2: "perderé"},
    {num: 197, que: "Present: tú (preferir)", true: "prefieres", false1: "prefiere", false2: "prefieren"},
    {num: 198, que: "Imperfect: él/ella (preferir)", true: "prefería", false1: "prefirió", false2: "prefiere"},
    {num: 199, que: "Present: yo (seguir)", true: "sigo", false1: "sigue", false2: "siguen"},
    {num: 200, que: "Future: tú (seguir)", true: "seguirás", false1: "sigues", false2: "seguías"},
   
    {num: 1, que: "of / from", true: "de", false1: "a", false2: "en"},
    {num: 2, que: "to / at", true: "a", false1: "de", false2: "en"},
    {num: 3, que: "in / on / at", true: "en", false1: "a", false2: "de"},
    {num: 4, que: "with", true: "con", false1: "sin", false2: "por"},
    {num: 5, que: "without", true: "sin", false1: "con", false2: "sobre"},
    {num: 6, que: "for / through / by", true: "por", false1: "para", false2: "según"},
    {num: 7, que: "for / in order to", true: "para", false1: "por", false2: "hasta"},
    {num: 8, que: "under", true: "debajo de", false1: "sobre", false2: "entre"},
    {num: 9, que: "over / above / on", true: "sobre", false1: "bajo", false2: "entre"},
    {num: 10, que: "between / among", true: "entre", false1: "hacia", false2: "según"},
    {num: 11, que: "toward", true: "hacia", false1: "hasta", false2: "desde"},
    {num: 12, que: "until / up to", true: "hasta", false1: "hacia", false2: "desde"},
    {num: 13, que: "from / since", true: "desde", false1: "hasta", false2: "hacia"},
    {num: 14, que: "against", true: "contra", false1: "frente a", false2: "según"},
    {num: 15, que: "according to", true: "según", false1: "contra", false2: "entre"},
    {num: 16, que: "behind", true: "detrás de", false1: "delante de", false2: "debajo de"},
    {num: 17, que: "in front of", true: "delante de", false1: "detrás de", false2: "encima de"},
    {num: 18, que: "next to / beside", true: "al lado de", false1: "cerca de", false2: "lejos de"},
    {num: 19, que: "near", true: "cerca de", false1: "lejos de", false2: "al lado de"},
    {num: 20, que: "far from", true: "lejos de", false1: "cerca de", false2: "al lado de"},
    {num: 21, que: "inside", true: "dentro de", false1: "fuera de", false2: "sobre"},
    {num: 22, que: "outside", true: "fuera de", false1: "dentro de", false2: "sobre"},
    {num: 23, que: "above / on top of", true: "encima de", false1: "debajo de", false2: "sobre"},
    {num: 24, que: "below / underneath", true: "debajo de", false1: "encima de", false2: "sobre"},
    {num: 25, que: "in front of / facing", true: "frente a", false1: "detrás de", false2: "al lado de"},
    {num: 26, que: "around", true: "alrededor de", false1: "a través de", false2: "sobre"},
    {num: 27, que: "across / through", true: "a través de", false1: "alrededor de", false2: "hacia"},
    {num: 28, que: "during", true: "durante", false1: "hasta", false2: "desde"},
    {num: 29, que: "after", true: "después de", false1: "antes de", false2: "durante"},
    {num: 30, que: "before", true: "antes de", false1: "después de", false2: "durante"},

    // QUANTIFIERS (25 questions)
    {num: 31, que: "much / many / a lot", true: "mucho", false1: "poco", false2: "bastante"},
    {num: 32, que: "little / few", true: "poco", false1: "mucho", false2: "bastante"},
    {num: 33, que: "some / a few", true: "alguno", false1: "ninguno", false2: "varios"},
    {num: 34, que: "none / not any", true: "ninguno", false1: "alguno", false2: "varios"},
    {num: 35, que: "several", true: "varios", false1: "alguno", false2: "ninguno"},
    {num: 36, que: "enough / sufficient", true: "bastante", false1: "mucho", false2: "poco"},
    {num: 37, que: "too much", true: "demasiado", false1: "bastante", false2: "mucho"},
    {num: 38, que: "more", true: "más", false1: "menos", false2: "mucho"},
    {num: 39, que: "less", true: "menos", false1: "más", false2: "poco"},
    {num: 40, que: "a lot / very", true: "muy", false1: "mucho", false2: "más"},
    {num: 41, que: "all / every", true: "todo", false1: "cada", false2: "alguno"},
    {num: 42, que: "each / every", true: "cada", false1: "todo", false2: "alguno"},
    {num: 43, que: "both", true: "ambos", false1: "todos", false2: "ninguno"},
    {num: 44, que: "only / just", true: "solo", false1: "todo", false2: "cada"},
    {num: 45, que: "even", true: "incluso", false1: "solo", false2: "también"},
    {num: 46, que: "also / too", true: "también", false1: "incluso", false2: "solo"},
    {num: 47, que: "almost / nearly", true: "casi", false1: "siempre", false2: "nunca"},
    {num: 48, que: "hardly / barely", true: "apenas", false1: "casi", false2: "siempre"},
    {num: 49, que: "always", true: "siempre", false1: "nunca", false2: "a veces"},
    {num: 50, que: "never", true: "nunca", false1: "siempre", false2: "a veces"},
    {num: 51, que: "sometimes", true: "a veces", false1: "siempre", false2: "nunca"},
    {num: 52, que: "often", true: "a menudo", false1: "rara vez", false2: "siempre"},
    {num: 53, que: "rarely / seldom", true: "rara vez", false1: "a menudo", false2: "siempre"},
    {num: 54, que: "almost all", true: "casi todo", false1: "todo", false2: "nada"},
    {num: 55, que: "nothing", true: "nada", false1: "nadie", false2: "ninguno"},

    // COMMON ADJECTIVES (45 questions)
    {num: 56, que: "big / large", true: "grande", false1: "pequeño", false2: "mediano"},
    {num: 57, que: "small / little", true: "pequeño", false1: "grande", false2: "mediano"},
    {num: 58, que: "good", true: "bueno", false1: "malo", false2: "regular"},
    {num: 59, que: "bad", true: "malo", false1: "bueno", false2: "regular"},
    {num: 60, que: "beautiful", true: "hermoso", false1: "feo", false2: "bonito"},
    {num: 61, que: "ugly", true: "feo", false1: "hermoso", false2: "bonito"},
    {num: 62, que: "pretty / nice", true: "bonito", false1: "feo", false2: "hermoso"},
    {num: 63, que: "new", true: "nuevo", false1: "viejo", false2: "moderno"},
    {num: 64, que: "old", true: "viejo", false1: "nuevo", false2: "antiguo"},
    {num: 65, que: "young", true: "joven", false1: "viejo", false2: "nuevo"},
    {num: 66, que: "old (person)", true: "mayor", false1: "joven", false2: "viejo"},
    {num: 67, que: "easy", true: "fácil", false1: "difícil", false2: "simple"},
    {num: 68, que: "difficult", true: "difícil", false1: "fácil", false2: "complicado"},
    {num: 69, que: "important", true: "importante", false1: "necesario", false2: "útil"},
    {num: 70, que: "interesting", true: "interesante", false1: "aburrido", false2: "importante"},
    {num: 71, que: "boring", true: "aburrido", false1: "interesante", false2: "divertido"},
    {num: 72, que: "fun / funny", true: "divertido", false1: "aburrido", false2: "interesante"},
    {num: 73, que: "happy", true: "feliz", false1: "triste", false2: "contento"},
    {num: 74, que: "sad", true: "triste", false1: "feliz", false2: "contento"},
    {num: 75, que: "content / pleased", true: "contento", false1: "triste", false2: "feliz"},
    {num: 76, que: "angry", true: "enojado", false1: "tranquilo", false2: "nervioso"},
    {num: 77, que: "calm", true: "tranquilo", false1: "nervioso", false2: "enojado"},
    {num: 78, que: "nervous", true: "nervioso", false1: "tranquilo", false2: "enojado"},
    {num: 79, que: "tired", true: "cansado", false1: "descansado", false2: "enfermo"},
    {num: 80, que: "sick / ill", true: "enfermo", false1: "sano", false2: "cansado"},
    {num: 81, que: "healthy", true: "sano", false1: "enfermo", false2: "fuerte"},
    {num: 82, que: "strong", true: "fuerte", false1: "débil", false2: "sano"},
    {num: 83, que: "weak", true: "débil", false1: "fuerte", false2: "enfermo"},
    {num: 84, que: "rich", true: "rico", false1: "pobre", false2: "caro"},
    {num: 85, que: "poor", true: "pobre", false1: "rico", false2: "barato"},
    {num: 86, que: "expensive", true: "caro", false1: "barato", false2: "rico"},
    {num: 87, que: "cheap", true: "barato", false1: "caro", false2: "pobre"},
    {num: 88, que: "fast / quick", true: "rápido", false1: "lento", false2: "pronto"},
    {num: 89, que: "slow", true: "lento", false1: "rápido", false2: "tarde"},
    {num: 90, que: "early", true: "temprano", false1: "tarde", false2: "pronto"},
    {num: 91, que: "late", true: "tarde", false1: "temprano", false2: "lento"},
    {num: 92, que: "hot", true: "caliente", false1: "frío", false2: "cálido"},
    {num: 93, que: "cold", true: "frío", false1: "caliente", false2: "fresco"},
    {num: 94, que: "warm", true: "cálido", false1: "frío", false2: "caliente"},
    {num: 95, que: "cool", true: "fresco", false1: "caliente", false2: "frío"},
    {num: 96, que: "long", true: "largo", false1: "corto", false2: "alto"},
    {num: 97, que: "short", true: "corto", false1: "largo", false2: "bajo"},
    {num: 98, que: "tall / high", true: "alto", false1: "bajo", false2: "largo"},
    {num: 99, que: "short / low", true: "bajo", false1: "alto", false2: "corto"},
    {num: 100, que: "wide", true: "ancho", false1: "estrecho", false2: "largo"},
     {num: 1, que: "I (subject)", true: "yo", false1: "mí", false2: "me"},
    {num: 2, que: "you (informal subject)", true: "tú", false1: "usted", false2: "ti"},
    {num: 3, que: "he (subject)", true: "él", false1: "ello", false2: "lo"},
    {num: 4, que: "she (subject)", true: "ella", false1: "él", false2: "la"},
    {num: 5, que: "you (formal subject)", true: "usted", false1: "tú", false2: "ti"},
    {num: 6, que: "we (subject)", true: "nosotros", false1: "nosotras", false2: "nos"},
    {num: 7, que: "they (masculine subject)", true: "ellos", false1: "ellas", false2: "los"},
    {num: 8, que: "they (feminine subject)", true: "ellas", false1: "ellos", false2: "las"},
    {num: 9, que: "you all (formal subject)", true: "ustedes", false1: "vosotros", false2: "vosotras"},

    // DIRECT OBJECT PRONOUNS
    {num: 10, que: "me (direct object)", true: "me", false1: "mí", false2: "yo"},
    {num: 11, que: "you (informal direct object)", true: "te", false1: "tú", false2: "ti"},
    {num: 12, que: "him / it (direct object)", true: "lo", false1: "le", false2: "él"},
    {num: 13, que: "her / it (direct object)", true: "la", false1: "le", false2: "ella"},
    {num: 14, que: "you (formal direct object)", true: "lo/la", false1: "le", false2: "usted"},
    {num: 15, que: "us (direct object)", true: "nos", false1: "nosotros", false2: "nosotras"},
    {num: 16, que: "them (masculine direct object)", true: "los", false1: "les", false2: "ellos"},
    {num: 17, que: "them (feminine direct object)", true: "las", false1: "les", false2: "ellas"},

    // INDIRECT OBJECT PRONOUNS
    {num: 18, que: "to/for me", true: "me", false1: "mí", false2: "yo"},
    {num: 19, que: "to/for you (informal)", true: "te", false1: "tú", false2: "ti"},
    {num: 20, que: "to/for him/her/you (formal)", true: "le", false1: "lo", false2: "la"},
    {num: 21, que: "to/for us", true: "nos", false1: "nosotros", false2: "nosotras"},
    {num: 22, que: "to/for them/you all", true: "les", false1: "los", false2: "las"},

    // REFLEXIVE PRONOUNS
    {num: 23, que: "myself", true: "me", false1: "mí", false2: "yo"},
    {num: 24, que: "yourself (informal)", true: "te", false1: "tú", false2: "ti"},
    {num: 25, que: "himself/herself/yourself (formal)", true: "se", false1: "le", false2: "lo"},
    {num: 26, que: "ourselves", true: "nos", false1: "nosotros", false2: "nosotras"},
    {num: 27, que: "themselves/yourselves", true: "se", false1: "les", false2: "los"},

    // PREPOSITIONAL PRONOUNS
    {num: 28, que: "me (after preposition)", true: "mí", false1: "me", false2: "yo"},
    {num: 29, que: "you (after preposition)", true: "ti", false1: "te", false2: "tú"},
    {num: 30, que: "him (after preposition)", true: "él", false1: "lo", false2: "le"},
    {num: 31, que: "her (after preposition)", true: "ella", false1: "la", false2: "le"},
    {num: 32, que: "us (after preposition)", true: "nosotros/nosotras", false1: "nos", false2: "nuestro"},

    // POSSESSIVE ADJECTIVES (Short Form)
    {num: 33, que: "my", true: "mi", false1: "mis", false2: "mío"},
    {num: 34, que: "your (informal)", true: "tu", false1: "tus", false2: "tuyo"},
    {num: 35, que: "his/her/your (formal)", true: "su", false1: "sus", false2: "suyo"},
    {num: 36, que: "our", true: "nuestro", false1: "nuestra", false2: "nosotros"},
    {num: 37, que: "their/your all", true: "su", false1: "sus", false2: "suyo"},

    // POSSESSIVE PRONOUNS (Long Form)
    {num: 38, que: "mine", true: "mío", false1: "mi", false2: "mis"},
    {num: 39, que: "yours (informal)", true: "tuyo", false1: "tu", false2: "tus"},
    {num: 40, que: "his/hers/yours (formal)", true: "suyo", false1: "su", false2: "sus"},
    {num: 41, que: "ours", true: "nuestro", false1: "nosotros", false2: "nos"},
    {num: 42, que: "theirs/yours all", true: "suyo", false1: "su", false2: "sus"},

    // DEMONSTRATIVE PRONOUNS/ADJECTIVES
    {num: 43, que: "this (masculine)", true: "este", false1: "ese", false2: "aquel"},
    {num: 44, que: "this (feminine)", true: "esta", false1: "esa", false2: "aquella"},
    {num: 45, que: "that (masculine - near)", true: "ese", false1: "este", false2: "aquel"},
    {num: 46, que: "that (feminine - near)", true: "esa", false1: "esta", false2: "aquella"},
    {num: 47, que: "that (masculine - far)", true: "aquel", false1: "ese", false2: "este"},
    {num: 48, que: "that (feminine - far)", true: "aquella", false1: "esa", false2: "esta"},

    // INTERROGATIVE PRONOUNS
    {num: 49, que: "what?", true: "qué", false1: "cuál", false2: "cómo"},
    {num: 50, que: "who?", true: "quién", false1: "qué", false2: "cuál"},
    {num: 51, que: "which?", true: "cuál", false1: "qué", false2: "quién"},
    {num: 52, que: "how much/many?", true: "cuánto", false1: "qué", false2: "cómo"},
    {num: 53, que: "where?", true: "dónde", false1: "cuándo", false2: "cómo"},
    {num: 54, que: "when?", true: "cuándo", false1: "dónde", false2: "cómo"},
    {num: 55, que: "how?", true: "cómo", false1: "qué", false2: "cuál"},
    {num: 56, que: "why?", true: "por qué", false1: "para qué", false2: "qué"},

    // RELATIVE PRONOUNS
    {num: 57, que: "that / which / who", true: "que", false1: "quien", false2: "cual"},
    {num: 58, que: "who / whom", true: "quien", false1: "que", false2: "cual"},
    {num: 59, que: "which (specific)", true: "cual", false1: "que", false2: "quien"},
    {num: 60, que: "whose", true: "cuyo", false1: "quien", false2: "que"},

    // INDEFINITE PRONOUNS
    {num: 61, que: "something", true: "algo", false1: "alguien", false2: "algún"},
    {num: 62, que: "someone", true: "alguien", false1: "algo", false2: "algún"},
    {num: 63, que: "nothing", true: "nada", false1: "nadie", false2: "ninguno"},
    {num: 64, que: "no one / nobody", true: "nadie", false1: "nada", false2: "ninguno"},
    {num: 65, que: "everything", true: "todo", false1: "todos", false2: "cada"},
    {num: 66, que: "everyone", true: "todos", false1: "todo", false2: "cada"},
    {num: 67, que: "each one", true: "cada uno", false1: "todo", false2: "alguien"},

    // CONNECTIVES - COORDINATING CONJUNCTIONS
    {num: 68, que: "and", true: "y", false1: "e", false2: "o"},
    {num: 69, que: "and (before i/hi sound)", true: "e", false1: "y", false2: "o"},
    {num: 70, que: "or", true: "o", false1: "u", false2: "y"},
    {num: 71, que: "or (before o/ho sound)", true: "u", false1: "o", false2: "y"},
    {num: 72, que: "but", true: "pero", false1: "sino", false2: "mas"},
    {num: 73, que: "but (rather)", true: "sino", false1: "pero", false2: "mas"},
    {num: 74, que: "but (formal/literary)", true: "mas", false1: "pero", false2: "sino"},

    // CONNECTIVES - SUBORDINATING CONJUNCTIONS
    {num: 75, que: "because", true: "porque", false1: "por qué", false2: "para que"},
    {num: 76, que: "so that / in order that", true: "para que", false1: "porque", false2: "por qué"},
    {num: 77, que: "although", true: "aunque", false1: "pero", false2: "sin embargo"},
    {num: 78, que: "if", true: "si", false1: "sí", false2: "como"},
    {num: 79, que: "when", true: "cuando", false1: "cuándo", false2: "como"},
    {num: 80, que: "while", true: "mientras", false1: "durante", false2: "cuando"},
    {num: 81, que: "since / as", true: "como", false1: "cuando", false2: "mientras"},
    {num: 82, que: "until", true: "hasta que", false1: "desde que", false2: "cuando"},
    {num: 83, que: "before", true: "antes de que", false1: "después de que", false2: "mientras"},
    {num: 84, que: "after", true: "después de que", false1: "antes de que", false2: "hasta que"},

    // CONNECTIVES - ADVERBIAL CONNECTORS
    {num: 85, que: "however", true: "sin embargo", false1: "pero", false2: "aunque"},
    {num: 86, que: "therefore", true: "por lo tanto", false1: "porque", false2: "además"},
    {num: 87, que: "thus / so", true: "así que", false1: "aunque", false2: "porque"},
    {num: 88, que: "furthermore / moreover", true: "además", false1: "también", false2: "incluso"},
    {num: 89, que: "on the other hand", true: "por otro lado", false1: "por lo tanto", false2: "sin embargo"},
    {num: 90, que: "for example", true: "por ejemplo", false1: "como", false2: "tal como"},
    {num: 91, que: "that is", true: "es decir", false1: "o sea", false2: "por ejemplo"},
    {num: 92, que: "in other words", true: "o sea", false1: "es decir", false2: "por ejemplo"},
    {num: 93, que: "in fact", true: "de hecho", false1: "en efecto", false2: "realmente"},
    {num: 94, que: "actually", true: "en realidad", false1: "realmente", false2: "de hecho"},
    {num: 95, que: "firstly", true: "primero", false1: "primer", false2: "primera"},
    {num: 96, que: "finally", true: "finalmente", false1: "último", false2: "fin"},
    {num: 97, que: "in conclusion", true: "en conclusión", false1: "finalmente", false2: "últimamente"},
    {num: 98, que: "on the contrary", true: "al contrario", false1: "por contrario", false2: "en contrario"},
    {num: 99, que: "otherwise", true: "de lo contrario", false1: "al contrario", false2: "por contrario"},
    {num: 100, que: "similarly", true: "de manera similar", false1: "igual", false2: "como"},
     {num: 1, que: "cool / awesome", true: "bacán", false1: "bueno", false2: "interesante"},
    {num: 2, que: "dude / guy (friend)", true: "weón", false1: "hombre", false2: "chico"},
    {num: 3, que: "thing / stuff", true: "weá", false1: "cosa", false2: "asunto"},
    {num: 4, que: "money", true: "luca", false1: "plata", false2: "dinero"},
    {num: 5, que: "thousand pesos", true: "gamba", false1: "luca", false2: "peso"},
    {num: 6, que: "police officer", true: "paco", false1: "policía", false2: "carabinero"},
    {num: 7, que: "boring", true: "fome", false1: "aburrido", false2: "tedioso"},
    {num: 8, que: "crazy / wild", true: "cuático", false1: "loco", false2: "raro"},
    {num: 9, que: "baby / child", true: "guagua", false1: "bebé", false2: "niño"},
    {num: 10, que: "job / work", true: "pega", false1: "trabajo", false2: "empleo"},

    // EXPRESSIONS AND PHRASES
    {num: 11, que: "What's up? / How's it going?", true: "¿Cómo estai?", false1: "¿Qué pasa?", false2: "¿Qué tal?"},
    {num: 12, que: "I don't care", true: "Me da lo mismo", false1: "No me importa", false2: "No me interesa"},
    {num: 13, que: "for sure / of course", true: "altiro", false1: "claro", false2: "seguro"},
    {num: 14, que: "right now / immediately", true: "al tiro", false1: "ahora", false2: "enseguida"},
    {num: 15, que: "let's go / come on", true: "vamos no má", false1: "vamos", false2: "ándale"},
    {num: 16, que: "seriously? / for real?", true: "¿de veras?", false1: "¿en serio?", false2: "¿verdad?"},
    {num: 17, que: "it's all good", true: "todo bien", false1: "está bien", false2: "todo correcto"},
    {num: 18, que: "that's awesome", true: "qué bacán", false1: "qué bueno", false2: "qué genial"},
    {num: 19, que: "I'm broke", true: "estoy pelao", false1: "no tengo dinero", false2: "estoy pobre"},
    {num: 20, que: "let's hang out", true: "juntémonos", false1: "salimos", false2: "veámonos"},

    // FOOD AND DRINK
    {num: 21, que: "avocado", true: "palta", false1: "aguacate", false2: "avocado"},
    {num: 22, que: "strawberry", true: "frutilla", false1: "fresa", false2: "mora"},
    {num: 23, que: "peach", true: "durazno", false1: "melocotón", false2: "ciruela"},
    {num: 24, que: "beans", true: "porotos", false1: "frijoles", false2: "habichuelas"},
    {num: 25, que: "corn on the cob", true: "choclo", false1: "maíz", false2: "elote"},
    {num: 26, que: "hot dog with toppings", true: "completo", false1: "perro caliente", false2: "hot dog"},

    // SOCIAL AND RELATIONSHIPS
    {num: 27, que: "boyfriend/girlfriend", true: "pololo/polola", false1: "novio/novia", false2: "pareja"},
    {num: 28, que: "to date someone", true: "pololear", false1: "salir", false2: "citar"},
    {num: 29, que: "flirt", true: "lanzar", false1: "coquetear", false2: "ligar"},
    {num: 30, que: "party", true: "carrete", false1: "fiesta", false2: "reunión"},
    {num: 31, que: "to party", true: "carretear", false1: "fiestear", false2: "celebrar"},
    {num: 32, que: "friends / crew", true: "la mancha", false1: "los amigos", false2: "el grupo"},

    // EVERYDAY OBJECTS
    {num: 33, que: "car", true: "auto", false1: "coche", false2: "carro"},
    {num: 34, que: "bus", true: "micro", false1: "autobús", false2: "camión"},
    {num: 35, que: "cell phone", true: "celular", false1: "móvil", false2: "teléfono"},
    {num: 36, que: "t-shirt", true: "polera", false1: "camiseta", false2: "playera"},
    {num: 37, que: "sweater", true: "polerón", false1: "suéter", false2: "jersey"},

    // VERBS AND ACTIONS
    {num: 38, que: "to understand / get it", true: "cachar", false1: "entender", false2: "comprender"},
    {num: 39, que: "to stand someone up", true: "plantar", false1: "dejar plantado", false2: "no aparecer"},
    {num: 40, que: "to be embarrassed", true: "dar vergüenza", false1: "tener pena", false2: "estar apenado"},
    {num: 41, que: "to be in a hurry", true: "andar apurado", false1: "tener prisa", false2: "estar rápido"},

    // MODERN/YOUTH SLANG
    {num: 42, que: "amazing / excellent", true: "la raja", false1: "increíble", false2: "fantástico"},
    {num: 43, que: "to be broke", true: "andar pato", false1: "estar pobre", false2: "no tener plata"},
    {num: 44, que: "to be tired", true: "andar chato", false1: "estar cansado", false2: "estar agotado"},
    {num: 45, que: "to be fed up", true: "estar hasta el loly", false1: "estar harto", false2: "estar cansado"},
    {num: 46, que: "easy", true: "al lote", false1: "fácil", false2: "simple"},
    {num: 47, que: "for free", true: "a la chilena", false1: "gratis", false2: "libre"},

    // EXCLAMATIONS AND REACTIONS
    {num: 48, que: "wow!", true: "¡huahua!", false1: "¡guau!", false2: "¡vaya!"},
    {num: 49, que: "oh my god!", true: "¡la weá!", false1: "¡Dios mío!", false2: "¡caray!"},
    {num: 50, que: "no way!", true: "¡ni cagando!", false1: "¡de ninguna manera!", false2: "¡jamás!"},
    {num: 51, que: "of course!", true: "¡obvio!", false1: "¡claro!", false2: "¡seguro!"},
    {num: 52, que: "what a pity", true: "qué paja", false1: "qué lástima", false2: "qué pena"},

    // DESCRIPTIONS
    {num: 53, que: "ugly / bad", true: "feo", false1: "horrible", false2: "malo"},
    {num: 54, que: "weird / strange", true: "raro", false1: "extraño", false2: "curioso"},
    {num: 55, que: "lazy", true: "flojo", false1: "perezoso", false2: "vago"},
    {num: 56, que: "cheap", true: "barato", false1: "económico", false2: "accesible"},
    {num: 57, que: "expensive", true: "caro", false1: "costoso", false2: "elevado"},

    // MODERN TECHNOLOGY/SOCIAL MEDIA
    {num: 59, que: "social media", true: "redes sociales", false1: "medios sociales", false2: "internet social"},
    {num: 60, que: "to post", true: "postear", false1: "publicar", false2: "subir"},
    {num: 61, que: "internet", true: "internet", false1: "la red", false2: "web"},

    // TIME EXPRESSIONS
    {num: 62, que: "now", true: "ahora", false1: "ya", false2: "enseguida"},
    {num: 63, que: "later", true: "después", false1: "luego", false2: "más tarde"},
    {num: 64, que: "tomorrow", true: "mañana", false1: "pasado mañana", false2: "hoy"},
    {num: 65, que: "yesterday", true: "ayer", false1: "anteayer", false2: "hoy"},

    // CASUAL GREETINGS
    {num: 66, que: "hi / hello", true: "hola", false1: "buenas", false2: "qué tal"},
    {num: 67, que: "see you later", true: "nos vemos", false1: "hasta luego", false2: "chao"},
    {num: 68, que: "bye", true: "chao", false1: "adiós", false2: "hasta pronto"},
    {num: 69, que: "good luck", true: "buena suerte", false1: "suerte", false2: "que te vaya bien"},

    // SCHOOL/STUDY
    {num: 70, que: "to study", true: "estudiar", false1: "aprender", false2: "repasar"},
    {num: 71, que: "exam", true: "prueba", false1: "examen", false2: "test"},
    {num: 72, que: "homework", true: "tarea", false1: "deberes", false2: "trabajo"},

    // SHOPPING
    {num: 73, que: "to buy", true: "comprar", false1: "adquirir", false2: "conseguir"},
    {num: 74, que: "store", true: "tienda", false1: "local", false2: "comercio"},
    {num: 75, que: "mall", true: "mall", false1: "centro comercial", false2: "plaza"},

    // WEATHER
    {num: 76, que: "it's hot", true: "hace calor", false1: "está caliente", false2: "hace sol"},
    {num: 77, que: "it's cold", true: "hace frío", false1: "está frío", false2: "hace viento"},
    {num: 78, que: "it's raining", true: "está lloviendo", false1: "llueve", false2: "hay lluvia"},

    // TRANSPORTATION
    {num: 79, que: "to take the bus", true: "tomar la micro", false1: "coger el bus", false2: "agarrar el bus"},
    {num: 80, que: "metro/subway", true: "metro", false1: "subterráneo", false2: "tren"},

    // CASUAL PHRASES
    {num: 81, que: "I'm hungry", true: "tengo hambre", false1: "estoy hambriento", false2: "quiero comer"},
    {num: 82, que: "I'm thirsty", true: "tengo sed", false1: "estoy sediento", false2: "quiero beber"},
    {num: 83, que: "I'm tired", true: "estoy cansado", false1: "tengo sueño", false2: "estoy agotado"},
    {num: 84, que: "let's eat", true: "vamos a comer", false1: "comamos", false2: "a comer"},

    // MUSIC AND ENTERTAINMENT
    {num: 85, que: "music", true: "música", false1: "sonido", false2: "melodía"},
    {num: 86, que: "concert", true: "concierto", false1: "show", false2: "presentación"},
    {num: 87, que: "movie", true: "película", false1: "cine", false2: "film"},
    {num: 88, que: "to watch a movie", true: "ver una película", false1: "mirar una película", false2: "observar una película"},

    // TECHNOLOGY
    {num: 91, que: "computer", true: "computador", false1: "ordenador", false2: "computadora"},
    {num: 92, que: "phone call", true: "llamada", false1: "telefonazo", false2: "llamado"},
    {num: 93, que: "to text", true: "mensajear", false1: "textear", false2: "escribir"},

    // FEELINGS
    {num: 94, que: "happy", true: "feliz", false1: "contento", false2: "alegre"},
    {num: 95, que: "sad", true: "triste", false1: "deprimido", false2: "apenado"},
    {num: 96, que: "excited", true: "emocionado", false1: "entusiasmado", false2: "nervioso"},
    {num: 97, que: "nervous", true: "nervioso", false1: "ansioso", false2: "preocupado"},

    // CASUAL AGREEMENT
    {num: 98, que: "okay", true: "okay", false1: "de acuerdo", false2: "está bien"},
    {num: 99, que: "sure", true: "seguro", false1: "claro", false2: "por supuesto"},
    {num: 100, que: "maybe", true: "tal vez", false1: "quizás", false2: "a lo mejor"},
     {num: 1, que: "happy", true: "feliz", false1: "triste", false2: "enojado"},
    {num: 2, que: "content / pleased", true: "contento", false1: "triste", false2: "nervioso"},
    {num: 3, que: "excited", true: "emocionado", false1: "aburrido", false2: "preocupado"},
    {num: 4, que: "proud", true: "orgulloso", false1: "avergonzado", false2: "celoso"},
    {num: 5, que: "grateful", true: "agradecido", false1: "enfadado", false2: "triste"},
    {num: 6, que: "optimistic", true: "optimista", false1: "pesimista", false2: "realista"},
    {num: 7, que: "hopeful", true: "esperanzado", false1: "desesperado", false2: "preocupado"},
    {num: 8, que: "loved", true: "amado", false1: "odiado", false2: "ignorado"},
    {num: 9, que: "confident", true: "seguro", false1: "inseguro", false2: "nervioso"},

    // BASIC NEGATIVE FEELINGS
    {num: 10, que: "sad", true: "triste", false1: "feliz", false2: "contento"},
    {num: 11, que: "angry", true: "enojado", false1: "tranquilo", false2: "feliz"},
    {num: 12, que: "tired", true: "cansado", false1: "energético", false2: "activo"},
    {num: 13, que: "bored", true: "aburrido", false1: "interesado", false2: "emocionado"},
    {num: 14, que: "worried", true: "preocupado", false1: "tranquilo", false2: "seguro"},
    {num: 15, que: "scared", true: "asustado", false1: "valiente", false2: "seguro"},
    {num: 16, que: "nervous", true: "nervioso", false1: "tranquilo", false2: "relajado"},
    {num: 17, que: "disappointed", true: "decepcionado", false1: "satisfecho", false2: "contento"},
    {num: 18, que: "lonely", true: "solo", false1: "acompañado", false2: "social"},

    // COMPLEX EMOTIONS
    {num: 19, que: "jealous", true: "celoso", false1: "confiado", false2: "seguro"},
    {num: 20, que: "guilty", true: "culpable", false1: "inocente", false2: "libre"},
    {num: 21, que: "ashamed", true: "avergonzado", false1: "orgulloso", false2: "seguro"},
    {num: 22, que: "anxious", true: "ansioso", false1: "tranquilo", false2: "paciente"},
    {num: 23, que: "frustrated", true: "frustrado", false1: "satisfecho", false2: "contento"},
    {num: 24, que: "confused", true: "confundido", false1: "claro", false2: "seguro"},
    {num: 25, que: "surprised", true: "sorprendido", false1: "esperado", false2: "preparado"},
    {num: 26, que: "shocked", true: "impactado", false1: "indiferente", false2: "normal"},

    // PHYSICAL/MENTAL STATES
    {num: 27, que: "sick / ill", true: "enfermo", false1: "sano", false2: "saludable"},
    {num: 28, que: "hungry", true: "hambriento", false1: "lleno", false2: "satisfecho"},
    {num: 29, que: "thirsty", true: "sediento", false1: "hidratado", false2: "satisfecho"},
    {num: 30, que: "sleepy", true: "soñoliento", false1: "despierto", false2: "activo"},
    {num: 31, que: "dizzy", true: "mareado", false1: "estable", false2: "firme"},
    {num: 32, que: "pain", true: "dolor", false1: "alivio", false2: "bienestar"},

    // CALM/NEUTRAL STATES
    {num: 33, que: "calm", true: "tranquilo", false1: "nervioso", false2: "ansioso"},
    {num: 34, que: "relaxed", true: "relajado", false1: "tenso", false2: "estresado"},
    {num: 35, que: "peaceful", true: "pacífico", false1: "alterado", false2: "molesto"},
    {num: 36, que: "comfortable", true: "cómodo", false1: "incómodo", false2: "molesto"},

    // SOCIAL EMOTIONS
    {num: 37, que: "in love", true: "enamorado", false1: "indiferente", false2: "odiado"},
    {num: 38, que: "friendly", true: "amigable", false1: "hostil", false2: "antipático"},
    {num: 39, que: "shy", true: "tímido", false1: "extrovertido", false2: "social"},
    {num: 40, que: "embarrassed", true: "avergonzado", false1: "orgulloso", false2: "seguro"},

    // INTENSITY WORDS
    {num: 41, que: "very happy", true: "muy feliz", false1: "poco feliz", false2: "algo feliz"},
    {num: 42, que: "a little sad", true: "un poco triste", false1: "muy triste", false2: "extremadamente triste"},
    {num: 43, que: "extremely tired", true: "extremadamente cansado", false1: "un poco cansado", false2: "algo cansado"},

    // COMMON EXPRESSIONS
    {num: 44, que: "I'm fine", true: "Estoy bien", false1: "Estoy mal", false2: "Estoy regular"},
    {num: 45, que: "I'm not feeling well", true: "No me siento bien", false1: "Me siento excelente", false2: "Estoy perfecto"},
    {num: 46, que: "How do you feel?", true: "¿Cómo te sientes?", false1: "¿Qué piensas?", false2: "¿Qué haces?"},
    {num: 351, que: "What is the Spanish phrase for 'it's sunny'?", true: "hace sol", false1: "hay sol", false2: "está soleado"},
    {num: 352, que: "What is the Spanish phrase for 'it's windy'?", true: "hace viento", false1: "hay viento", false2: "está ventoso"},
    {num: 339, que: "What is the Spanish word for 'shoes'?", true: "zapatos", false1: "zapato", false2: "botas"},
    {num: 340, que: "What is the Spanish word for 'shirt'?", true: "camisa", false1: "pantalón", false2: "chaqueta"},

// TRANSPORTATION
    {num: 341, que: "What is the Spanish word for 'car'?", true: "coche", false1: "auto", false2: "carro"},
    {num: 342, que: "What is the Spanish word for 'bus'?", true: "autobús", false1: "bus", false2: "camión"},
    {num: 307, que: "What is the Spanish word for 'morning'?", true: "mañana", false1: "tarde", false2: "noche"},
    {num: 308, que: "What is the Spanish word for 'afternoon'?", true: "tarde", false1: "mañana", false2: "noche"},
    {num: 309, que: "What is the Spanish word for 'evening/night'?", true: "noche", false1: "tarde", false2: "mañana"},
    {num: 310, que: "What is the Spanish word for 'week'?", true: "semana", false1: "fin de semana", false2: "mes"},
    {num: 311, que: "What is the Spanish word for 'weekend'?", true: "fin de semana", false1: "semana", false2: "vacaciones"},
    {num: 312, que: "What is the Spanish word for 'month'?", true: "mes", false1: "año", false2: "semana"},
    {num: 313, que: "What is the Spanish word for 'grandmother'?", true: "abuela", false1: "abuelo", false2: "madre"},
    {num: 314, que: "What is the Spanish word for 'grandfather'?", true: "abuelo", false1: "abuela", false2: "padre"},
    {num: 315, que: "What is the Spanish word for 'cousin'?", true: "primo/prima", false1: "hermano", false2: "tío"},

// HOUSE AND HOME
    {num: 316, que: "What is the Spanish word for 'door'?", true: "puerta", false1: "ventana", false2: "pared"},
    {num: 317, que: "What is the Spanish word for 'window'?", true: "ventana", false1: "puerta", false2: "techo"},
    {num: 318, que: "What is the Spanish word for 'bed'?", true: "cama", false1: "mesa", false2: "silla"},

// PROFESSIONS
    {num: 319, que: "What is the Spanish word for 'teacher'?", true: "profesor/profesora", false1: "estudiante", false2: "doctor"},
    {num: 320, que: "What is the Spanish word for 'doctor'?", true: "médico", false1: "enfermero", false2: "paciente"},
    {num: 321, que: "What is the Spanish word for 'student'?", true: "estudiante", false1: "profesor", false2: "maestro"},

// WEATHER AND SEASONS
    {num: 322, que: "What is the Spanish word for 'summer'?", true: "verano", false1: "invierno", false2: "primavera"},
    {num: 323, que: "What is the Spanish word for 'winter'?", true: "invierno", false1: "verano", false2: "otoño"},
    {num: 324, que: "What is the Spanish word for 'spring'?", true: "primavera", false1: "otoño", false2: "verano"},
    {num: 325, que: "What is the Spanish word for 'autumn'?", true: "otoño", false1: "primavera", false2: "invierno"},
];
const conjtableque = [
    {
    que: "Hablar - To speak",
    yo: ["hablo", "hablé", "hablaba", "hablaría", "hablaré"],
    tu: ["hablas", "hablaste", "hablabas", "hablarías", "hablarás"],
    el: ["habla", "habló", "hablaba", "hablaría", "hablará"],
    nos: ["hablamos", "hablamos", "hablábamos", "hablaríamos", "hablaremos"],
    ellos: ["hablan", "hablaron", "hablaban", "hablarían", "hablarán"]},
    {
    que: "Comer - To eat",
    yo: ["como", "comí", "comía", "comería", "comeré"],
    tu: ["comes", "comiste", "comías", "comerías", "comerás"],
    el: ["come", "comió", "comía", "comería", "comerá"],
    nos: ["comemos", "comimos", "comíamos", "comeríamos", "comeremos"],
    ellos: ["comen", "comieron", "comían", "comerían", "comerán"]
  },
  {
    que: "Vivir - To live",
    yo: ["vivo", "viví", "vivía", "viviría", "viviré"],
    tu: ["vives", "viviste", "vivías", "vivirías", "vivirás"],
    el: ["vive", "vivió", "vivía", "viviría", "vivirá"],
    nos: ["vivimos", "vivimos", "vivíamos", "viviríamos", "viviremos"],
    ellos: ["viven", "vivieron", "vivían", "vivirían", "vivirán"]
  },
  {
    que: "Tener - To have",
    yo: ["tengo", "tuve", "tenía", "tendría", "tendré"],
    tu: ["tienes", "tuviste", "tenías", "tendrías", "tendrás"],
    el: ["tiene", "tuvo", "tenía", "tendría", "tendrá"],
    nos: ["tenemos", "tuvimos", "teníamos", "tendríamos", "tendremos"],
    ellos: ["tienen", "tuvieron", "tenían", "tendrían", "tendrán"]
  },
  {
    que: "Hacer - To do/make",
    yo: ["hago", "hice", "hacía", "haría", "haré"],
    tu: ["haces", "hiciste", "hacías", "harías", "harás"],
    el: ["hace", "hizo", "hacía", "haría", "hará"],
    nos: ["hacemos", "hicimos", "hacíamos", "haríamos", "haremos"],
    ellos: ["hacen", "hicieron", "hacían", "harían", "harán"]
  },
  {
    que: "Decir - To say/tell",
    yo: ["digo", "dije", "decía", "diría", "diré"],
    tu: ["dices", "dijiste", "decías", "dirías", "dirás"],
    el: ["dice", "dijo", "decía", "diría", "dirá"],
    nos: ["decimos", "dijimos", "decíamos", "diríamos", "diremos"],
    ellos: ["dicen", "dijeron", "decían", "dirían", "dirán"]
  },
  {
    que: "Ir - To go",
    yo: ["voy", "fui", "iba", "iría", "iré"],
    tu: ["vas", "fuiste", "ibas", "irías", "irás"],
    el: ["va", "fue", "iba", "iría", "irá"],
    nos: ["vamos", "fuimos", "íbamos", "iríamos", "iremos"],
    ellos: ["van", "fueron", "iban", "irían", "irán"]
  },
  {
    que: "Ver - To see",
    yo: ["veo", "vi", "veía", "vería", "veré"],
    tu: ["ves", "viste", "veías", "verías", "verás"],
    el: ["ve", "vio", "veía", "vería", "verá"],
    nos: ["vemos", "vimos", "veíamos", "veríamos", "veremos"],
    ellos: ["ven", "vieron", "veían", "verían", "verán"]
  },
  {
    que: "Dar - To give",
    yo: ["doy", "di", "daba", "daría", "daré"],
    tu: ["das", "diste", "dabas", "darías", "darás"],
    el: ["da", "dio", "daba", "daría", "dará"],
    nos: ["damos", "dimos", "dábamos", "daríamos", "daremos"],
    ellos: ["dan", "dieron", "daban", "darían", "darán"]
  },
  {
    que: "Saber - To know",
    yo: ["sé", "supe", "sabía", "sabría", "sabré"],
    tu: ["sabes", "supiste", "sabías", "sabrías", "sabrás"],
    el: ["sabe", "supo", "sabía", "sabría", "sabrá"],
    nos: ["sabemos", "supimos", "sabíamos", "sabríamos", "sabremos"],
    ellos: ["saben", "supieron", "sabían", "sabrían", "sabrán"]
  },
  {
    que: "Querer - To want",
    yo: ["quiero", "quise", "quería", "querría", "querré"],
    tu: ["quieres", "quisiste", "querías", "querrías", "querrás"],
    el: ["quiere", "quiso", "quería", "querría", "querrá"],
    nos: ["queremos", "quisimos", "queríamos", "querríamos", "querremos"],
    ellos: ["quieren", "quisieron", "querían", "querrían", "querrán"]
  },
  {
    que: "Llegar - To arrive",
    yo: ["llego", "llegué", "llegaba", "llegaría", "llegaré"],
    tu: ["llegas", "llegaste", "llegabas", "llegarías", "llegarás"],
    el: ["llega", "llegó", "llegaba", "llegaría", "llegará"],
    nos: ["llegamos", "llegamos", "llegábamos", "llegaríamos", "llegaremos"],
    ellos: ["llegan", "llegaron", "llegaban", "llegarían", "llegarán"]
  },
  {
    que: "Empezar - To begin",
    yo: ["empiezo", "empecé", "empezaba", "empezaría", "empezaré"],
    tu: ["empiezas", "empezaste", "empezabas", "empezarías", "empezarás"],
    el: ["empieza", "empezó", "empezaba", "empezaría", "empezará"],
    nos: ["empezamos", "empezamos", "empezábamos", "empezaríamos", "empezaremos"],
    ellos: ["empiezan", "empezaron", "empezaban", "empezarían", "empezarán"]
  },
  {
    que: "Poder - To be able to",
    yo: ["puedo", "pude", "podía", "podría", "podré"],
    tu: ["puedes", "pudiste", "podías", "podrías", "podrás"],
    el: ["puede", "pudo", "podía", "podría", "podrá"],
    nos: ["podemos", "pudimos", "podíamos", "podríamos", "podremos"],
    ellos: ["pueden", "pudieron", "podían", "podrían", "podrán"]
  },
  {
    que: "Ser - To be (permanent)",
    yo: ["soy", "fui", "era", "sería", "seré"],
    tu: ["eres", "fuiste", "eras", "serías", "serás"],
    el: ["es", "fue", "era", "sería", "será"],
    nos: ["somos", "fuimos", "éramos", "seríamos", "seremos"],
    ellos: ["son", "fueron", "eran", "serían", "serán"]
  },
  {
    que: "Estar - To be (temporary)",
    yo: ["estoy", "estuve", "estaba", "estaría", "estaré"],
    tu: ["estás", "estuviste", "estabas", "estarías", "estarás"],
    el: ["está", "estuvo", "estaba", "estaría", "estará"],
    nos: ["estamos", "estuvimos", "estábamos", "estaríamos", "estaremos"],
    ellos: ["están", "estuvieron", "estaban", "estarían", "estarán"]
  }];
const sentenceremA =[
{statement:"lo que",exp:"Means 'that which' or 'what'. Refers to complete ideas: 'Lo que dijiste' (What you said), 'Lo que pasó' (What happened). Replaces an entire previous idea in conversation."},
{statement:"se me olvidó",exp:"Accidental 'se' structure - expresses unintentional actions. Literally 'it forgot itself to me'. Used for mistakes, forgetfulness, or uncontrolled events: 'Se me cayó' (I dropped it), 'Se me rompió' (I broke it)."},
{statement:"ya",exp:"Multifunctional word: 'Ya voy' (I'm coming now), 'Ya lo hice' (I already did it). In Chile: 'Ya po' for emphasis. Marks transition or completion of an action."},
{statement:"puede ser",exp:"Expresses possibility or doubt softly. Similar to 'maybe' but more casual. Uses implicit subjunctive: 'Puede que llueva' = 'It might rain'."},
{statement:"a ver",exp:"Invites looking or paying attention: 'A ver qué pasa' (Let's see what happens). Also for pausing to think: 'A ver, déjame pensar' (Let me think). Different from 'haber' (to have)."},
{statement:"por si acaso",exp:"Takes precautions: 'Llevo paraguas por si acaso llueve' (I'm bringing an umbrella in case it rains). Structure: por + si + acaso = 'in case that maybe'."},
{statement:"de repente",exp:"In Latin America means 'maybe', not 'suddenly'. 'De repente voy mañana' = 'Maybe I'll go tomorrow'. Important regional usage."},
{statement:"qué tal",exp:"Informal question: '¿Qué tal tu día?' (How's your day?). Also for suggesting: '¿Qué tal si vamos al cine?' (How about we go to the movies?)."},
{statement:"así es",exp:"Strong affirmation: 'Así es la vida' (That's life). Confirms something is exactly as described. More emphatic than just 'sí'."},
{statement:"tener que + infinitive",exp:"Expresses obligation: 'Tengo que estudiar' (I have to study). More common than 'deber'. Fixed structure that always takes infinitive."},
{statement:"acabar de + infinitive",exp:"Recently completed action: 'Acabo de comer' (I just ate). Equivalent to past perfect but simpler. Only works in present and preterite."},
{statement:"se dice que",exp:"Impersonal passive voice: 'Se dice que va a llover' (They say it's going to rain). Used for rumors, popular beliefs, or general information."},
{statement:"a lo mejor",exp:"50/50 possibility: 'A lo mejor voy' (I might go). Doesn't take subjunctive unlike 'quizás'. Fixed expression that doesn't translate literally."},
{statement:"dar + emotion",exp:"Expresses feelings: 'Me da miedo' (It scares me), 'Me da pena' (It makes me sad). Structure: [indirect object] + dar + [emotion]."},
{statement:"llevar + time",exp:"Duration from past until now: 'Llevo dos años aquí' (I've been here for two years). Doesn't use present perfect like English."},
{statement:"por cierto",exp:"Natural topic change: 'Por cierto, ¿viste a María?' (By the way, did you see María?). Conversational connector for smooth transitions."},
{statement:"eso sí",exp:"Concedes a point but adds conditions: 'No tengo dinero, eso sí, puedo ayudarte' (I don't have money, however, I can help you)."},
{statement:"ni siquiera",exp:"Emphatic negation: 'Ni siquiera lo intenté' (I didn't even try it). Stronger than 'no'. Used for surprise or frustration."},
{statement:"qué + adjective",exp:"Emotional exclamation: '¡Qué lindo!' (How beautiful!), '¡Qué miedo!' (How scary!). Fixed pattern for expressing strong reactions."},
{statement:"ser vs estar",exp:"Ser: permanent characteristics (soy médico - I'm a doctor). Estar: temporary states (estoy cansado - I'm tired) and locations (estoy en casa - I'm at home). 'Estar muerto' (to be dead) is exception - resulting state."},
{statement:"subjunctive",exp:"For doubts, wishes, emotions and negations: 'Espero que vengas' (I hope you come - wish), 'Dudo que llueva' (I doubt it will rain - doubt). Appears after 'que' when main clause expresses these ideas."},
{statement:"Chilean voseo",exp:"Uses 'tú' but with unique conjugations: 'Tú sabí' (you know), 'Tú tení' (you have). -ar verbs: -ái, -er/ir: -í. Distinctive of Chilean Spanish."},
{statement:"-ito/-ita",exp:"Diminutive expressing affection, smallness, or attenuation: 'momentito' (a little moment), 'casita' (small/cute house). 'Ahora' → 'ahorita' (right now). Culturally important for tone."},
{statement:"double negatives",exp:"Grammatical rule: 'No veo a nadie' (I don't see anyone), 'No hago nunca' (I never do). Multiple negatives reinforce the negation, don't cancel it."},
{statement:"personal 'a'",exp:"Used before direct objects that are specific people: 'Veo a María' (I see María), 'Busco al doctor' (I'm looking for the doctor). Not used for things: 'Veo la tele' (I watch TV)."},
{statement:"verbs like gustar",exp:"Inverted structure: [indirect object] + [verb] + [subject]. 'Me gusta el café' (The coffee pleases me). Includes gustar, encantar, interesar, molestar, faltar."},
{statement:"impersonal haber",exp:"Only third person singular: 'Hay comida' (There is food), 'Había gente' (There were people). Never changes for plural: 'Hay problemas' not 'Han problemas'."},
{statement:"preterite vs imperfect",exp:"Preterite: completed actions (ayer comí - I ate yesterday). Imperfect: habitual actions (cuando era niño, comía - when I was a child, I used to eat) or actions in progress (llovía cuando salí - it was raining when I left). The difference is in how the action is viewed."},
{statement:"hace + time",exp:"Expresses how long something has been happening: 'Hace dos años que vivo aquí' (I've lived here for two years). Structure: hace + [time] + que + [present tense verb]."},
{statement:"desde hace",exp:"Alternative to 'hace' for duration: 'Vivo aquí desde hace dos años' (I've lived here for two years). More common in some regions, same meaning as 'hace...que'."},
{statement:"al + infinitive",exp:"Means 'upon doing something' or 'when': 'Al entrar, vi a María' (Upon entering, I saw María). Expresses two actions happening at the same moment."},
{statement:"con tal de que",exp:"Means 'as long as' or 'provided that': 'Iré con tal de que vengas tú' (I'll go as long as you come). Always requires subjunctive in the dependent clause."},
{statement:"a pesar de que",exp:"Means 'despite the fact that' or 'even though': 'Fui a pesar de que llovía' (I went even though it was raining). Can take indicative or subjunctive depending on reality of situation."},
{statement:"antes de que",exp:"Means 'before': 'Llegué antes de que empezara' (I arrived before it started). Always requires subjunctive in the dependent clause because it refers to future actions."},
{statement:"después de que",exp:"Means 'after': 'Llegué después de que empezara' (I arrived after it started). Takes subjunctive when referring to future events, indicative for past events."},
{statement:"para que",exp:"Means 'so that' or 'in order that': 'Te lo digo para que sepas' (I'm telling you so that you know). Always requires subjunctive in the dependent clause."},
{statement:"sin que",exp:"Means 'without': 'Se fue sin que lo viéramos' (He left without us seeing him). Always requires subjunctive in the dependent clause."},
{statement:"a menos que",exp:"Means 'unless': 'Iremos a menos que llueva' (We'll go unless it rains). Always requires subjunctive in the dependent clause."},
{statement:"en caso de que",exp:"Means 'in case': 'Lleva paraguas en caso de que llueva' (Bring an umbrella in case it rains). Always requires subjunctive in the dependent clause."},
{statement:"ojalá",exp:"Expresses hope or wish: '¡Ojalá que vengas!' (I hope you come!). From Arabic 'inshallah'. Almost always used with subjunctive, even when 'que' is omitted."},
{statement:"como si",exp:"Means 'as if': 'Habla como si supiera todo' (He talks as if he knew everything). Always requires imperfect subjunctive, regardless of main clause tense."},
{statement:"aunque",exp:"Means 'although' or 'even though': 'Iremos aunque llueva' (We'll go even if it rains). Takes subjunctive for hypothetical situations, indicative for known facts."},
{statement:"de modo que",exp:"Means 'so that' or 'in such a way that': 'Lo arreglé de modo que funcione' (I fixed it so that it works). Can take subjunctive (purpose) or indicative (result)."},
{statement:"tan pronto como",exp:"Means 'as soon as': 'Te llamo tan pronto como llegue' (I'll call you as soon as I arrive). Takes subjunctive for future events, indicative for past events."},
{statement:"hasta que",exp:"Means 'until': 'Esperaré hasta que llegues' (I'll wait until you arrive). Takes subjunctive for future events, indicative for past events."},
{statement:"mientras que",exp:"Means 'while' or 'whereas': 'Yo estudio mientras que tú descansas' (I study while you rest). Usually takes indicative, shows contrast between two actions."},
{statement:"siempre que",exp:"Means 'whenever' or 'as long as': 'Voy siempre que puedo' (I go whenever I can). Takes subjunctive for conditions, indicative for habitual actions."},
{statement:"por más que",exp:"Means 'no matter how much' or 'however much': 'Por más que estudio, no apruebo' (No matter how much I study, I don't pass). Takes subjunctive for hypothetical, indicative for real attempts."},
{statement:"dado que",exp:"Means 'given that' or 'since': 'Dado que llueve, nos quedamos' (Given that it's raining, we're staying). Takes indicative, used for stating reasons or causes."},
{statement:"puesto que",exp:"Means 'since' or 'because': 'Puesto que estás aquí, ayúdame' (Since you're here, help me). Takes indicative, formal alternative to 'porque'."},
{statement:"ya que",exp:"Means 'since' or 'now that': 'Ya que terminaste, podemos ir' (Since you finished, we can go). Takes indicative, common in spoken Spanish for explanations."},
{statement:"así que",exp:"Means 'so' or 'therefore': 'Terminé, así que me voy' (I finished, so I'm leaving). Takes indicative, shows consequence or result."},
{statement:"de ahí que",exp:"Means 'hence' or 'that's why': 'Está enfermo, de ahí que no venga' (He's sick, that's why he's not coming). Takes subjunctive, formal connector for conclusions."},
{statement:"con respecto a",exp:"Means 'with respect to' or 'regarding': 'Con respecto a tu pregunta...' (Regarding your question...). Formal prepositional phrase for topic introduction."},
{statement:"en cuanto a",exp:"Means 'as for' or 'regarding': 'En cuanto al dinero, no hay problema' (As for the money, no problem). Common phrase for changing topics or focusing on specific aspects."},
{statement:"a fin de cuentas",exp:"Means 'in the end' or 'after all': 'A fin de cuentas, todo salió bien' (In the end, everything turned out fine). Idiomatic expression for final conclusions or realizations."},
{statement:"de todos modos",exp:"Means 'anyway' or 'in any case': 'No quería ir, pero fui de todos modos' (I didn't want to go, but I went anyway). Common conversational filler for resigned acceptance."},
{statement:"por lo visto",exp:"Means 'apparently' or 'it seems that': 'Por lo visto, no van a venir' (Apparently, they're not coming). Used for reporting observations or likely situations."},
{statement:"ni...ni",exp:"Means 'neither...nor': 'No como ni carne ni pescado' (I eat neither meat nor fish). Negative correlative conjunction, requires 'no' before the verb."},
{statement:"o...o",exp:"Means 'either...or': 'O vienes o te quedas' (Either you come or you stay). Positive correlative conjunction for presenting alternatives."},
{statement:"sea...sea",exp:"Means 'whether...or': 'Sea invierno, sea verano, siempre voy' (Whether it's winter or summer, I always go). Subjunctive construction for indefinite alternatives."},
{statement:"cuanto más...más",exp:"Means 'the more...the more': 'Cuanto más estudio, más aprendo' (The more I study, the more I learn). Comparative structure showing proportional relationship."},
{statement:"no sólo...sino también",exp:"Means 'not only...but also': 'No sólo canta, sino también baila' (He not only sings, but also dances). Emphatic structure for adding information."},
{statement:"tal vez",exp:"Means 'perhaps' or 'maybe': 'Tal vez vaya mañana' (Perhaps I'll go tomorrow). Can take subjunctive (more doubt) or indicative (more certainty)."},
{statement:"quizás",exp:"Means 'perhaps' or 'maybe': 'Quizás llueva hoy' (Perhaps it will rain today). Synonymous with 'tal vez', same subjunctive/indicative flexibility."},
{statement:"a fin de que",exp:"Means 'in order that' or 'so that': 'Estudio a fin de que apruebe' (I study so that I pass). Formal alternative to 'para que', always takes subjunctive."},
{statement:"con objeto de",exp:"Means 'with the purpose of': 'Vine con objeto de ayudarte' (I came with the purpose of helping you). Formal phrase expressing intention, takes infinitive."},
{statement:"de manera que",exp:"Means 'so that' or 'in such a way that': 'Lo hice de manera que funcionara' (I did it so that it would work). Similar to 'de modo que', can take subjunctive (purpose) or indicative (result)."},
{statement:"po",exp:"Chilean filler word added for emphasis or rhythm: 'Sí po' (Yes, of course), 'Ya po' (Alright then). No direct translation, used to soften or emphasize statements."},
{statement:"cachai",exp:"From 'cachar' (to understand). Chilean equivalent of 'y'know?' or 'get it?': 'Es así, cachai?' (It's like that, y'know?). Used constantly in informal speech."},
{statement:"al tiro",exp:"Means 'immediately' or 'right away': 'Voy al tiro' (I'm going right now). More urgent than 'ahora', expresses instant action."},
{statement:"la cagó",exp:"Versatile expression: 'La cagó' can mean 'amazing' or 'terrible' depending on context. 'Esa película la cagó' (That movie was amazing/terrible). Tone-dependent meaning."},
{statement:"fome",exp:"Means 'boring' or 'lame': 'Qué fome esa fiesta' (That party was so boring). Specifically Chilean, more expressive than 'aburrido'."},
{statement:"patudo",exp:"Means 'cheeky' or 'bold': 'Ese niño es muy patudo' (That kid is very cheeky). Describes someone who speaks or acts with inappropriate confidence."},
{statement:"cuático",exp:"Means 'crazy', 'intense', or 'wild': 'Qué cuático el accidente' (The accident was crazy). Expresses shock, surprise, or intensity of situation."},
{statement:"paco",exp:"Slang for police officer: 'Vienen los pacos' (The cops are coming). Informal, slightly irreverent term for police."},
{statement:"pololo/polola",exp:"Boyfriend/girlfriend: 'Mi polola viene' (My girlfriend is coming). More casual and common than 'novio/novia' in Chile."},
{statement:"pololear",exp:"To date or be in a relationship: 'Estamos pololeando' (We're dating). Specific Chilean verb for romantic relationships."},
{statement:"guagua",exp:"Baby or young child: 'La guagua llora' (The baby is crying). Used throughout Chile, from indigenous Quechua word."},
{statement:"palta",exp:"Avocado: 'Pan con palta' (Bread with avocado). Chilean word, different from 'aguacate' used in other countries."},
{statement:"durazno",exp:"Peach: 'Me gusta el durazno' (I like peaches). Chilean term, different from 'melocotón' in Spain."},
{statement:"imperfecto narrativo",exp:"Using imperfect instead of preterite for storytelling: 'Era una noche oscura' (It was a dark night). Creates atmosphere and background in narratives, common in literature."},
{statement:"queísmo/dequeísmo",exp:"Common errors with 'que' vs 'de que'. Correct: 'Estoy seguro de que viene' (I'm sure that he's coming). Incorrect: 'Estoy seguro que viene'. Remember: preposition + 'que'."},
{statement:"voz pasiva refleja",exp:"Passive with 'se': 'Se venden casas' (Houses are sold). More common than true passive in Spanish. Structure: se + third person verb. Plural objects make verb plural."},
{statement:"estilo indirecto",exp:"Reported speech: 'Dijo que vendría' (He said he would come). Requires tense agreement: present → imperfect, preterite → pluperfect, future → conditional."},
{statement:"anáfora",exp:"Repetition at beginning of phrases: 'Vino la noche. Vino el frío. Vino el miedo.' Common literary device for emphasis and rhythm in poetry and prose."},
{statement:"hipérbaton",exp:"Inverted word order: 'Del salón en el ángulo oscuro' instead of 'En el ángulo oscuro del salón'. Poetic device to create rhythm or emphasis."},
{statement:"pluscuamperfecto",exp:"Past perfect: 'Había comido' (I had eaten). For actions before other past actions. Essential for complex narrative timelines in literature."},
{statement:"futuro imperfecto",exp:"Future tense for conjecture: 'Estará en casa' (He's probably at home). Not just future action, but also present probability in spoken Spanish."},
{statement:"condicional compuesto",exp:"Conditional perfect: 'Habría ido' (I would have gone). For hypothetical past situations. Common in reflective or regretful narratives."},
{statement:"subjuntivo imperfecto",exp:"Imperfect subjunctive: 'Si tuviera dinero, viajaría' (If I had money, I would travel). Two forms: -ra and -se endings, same meaning. Essential for hypotheticals."},
{statement:"subjuntivo pluscuamperfecto",exp:"Pluperfect subjunctive: 'Si hubiera sabido, habría venido' (If I had known, I would have come). For hypothetical past conditions and their consequences."},
{statement:"oraciones de relativo",exp:"Relative clauses: 'El libro que leí' (The book that I read). 'Que' for things/people, 'quien' for people, 'cuyo' for possession, 'donde' for place."},
{statement:"preposiciones abstractas",exp:"Abstract prepositions: 'a pesar de' (despite), 'en cuanto a' (regarding), 'con arreglo a' (according to). Formal connectors in written Spanish."},
{statement:"gerundio compuesto",exp:"Compound gerund: 'Habiendo comido' (Having eaten). Expresses action completed before main verb. Formal, literary usage."},
{statement:"infinitivo compuesto",exp:"Compound infinitive: 'Haberse ido' (To have left). Perfect aspect in infinitive form. Used after prepositions and in impersonal expressions."},
{statement:"perífrasis verbal",exp:"Verbal periphrasis: 'ir a + inf' (going to), 'tener que + inf' (have to), 'acabar de + inf' (just finished). Multi-word verb constructions with specific meanings."},
{statement:"dequeísmo",exp:"Overusing 'de que': Incorrect: 'Pienso de que voy' instead of 'Pienso que voy'. Common error even natives make. Test: replace clause with 'eso' - 'Pienso eso' not 'Pienso de eso'."},
{statement:"leísmo/laísmo/loísmo",exp:"Regional pronoun usage: Leísmo (using 'le' for masculine direct objects), laísmo/loísmo (incorrect gender usage). Varies by region, important for understanding different dialects."},
{statement:"artículo neutro 'lo'",exp:"Neuter article: 'lo importante' (the important thing), 'lo bueno' (the good part). Creates abstract nouns from adjectives. Essential for philosophical or abstract discussions."},
{statement:"adjetivo sustantivado",exp:"Adjective as noun: 'el rojo' (the red one), 'los jóvenes' (the young people). Common way to refer to groups or categories without repeating nouns."},
{statement:"complemento directo/indirecto",exp:"Direct/indirect objects: 'Le di el libro (a Juan)' - 'el libro' (direct), 'le' (indirect). Understanding this helps parse complex sentences and pronoun placement."},
{statement:"oraciones impersonales",exp:"Impersonal sentences: 'Llueve' (It rains), 'Hay gente' (There are people). No specific subject. Includes weather, existence, and general statements."},
{statement:"oraciones pasivas",exp:"Passive sentences: 'El libro fue escrito por Cervantes' (The book was written by Cervantes). Less common than English. 'Ser' + past participle, 'por' for agent."},
{statement:"signos de interrogación/exclamación",exp:"Inverted punctuation: '¿Qué pasa?' '¡Cuidado!' Unique to Spanish. In literature, sometimes omitted in internal monologues or for stylistic effect."},
{statement:"voseo reverencial",exp:"Historical 'voseo': 'Vos sois' instead of 'tú eres'. Found in classic literature, religious texts, and historical dialogues. Formal, archaic address."},
{statement:"pretérito anterior",exp:"Preterite anterior: 'Hubo hablado' (I had spoken). Very formal, mostly literary. Expresses immediate past before another past action. Rare in speech."},
{statement:"futuro perfecto",exp:"Future perfect: 'Habré terminado' (I will have finished). For actions completed before another future action. Also used for conjecture about past: 'Habrá llegado' (He must have arrived)."},
{statement:"condicional simple",exp:"Simple conditional: 'Caminaría' (I would walk). Not just conditional sentences, but also polite requests: '¿Podría ayudarme?' (Could you help me?) and reported future in past."},
{statement:"oraciones concesivas",exp:"Concessive clauses: 'Aunque llueva, iré' (Even if it rains, I'll go). Express contrast or opposition. Key connectors: aunque, a pesar de que, si bien."},
{statement:"oraciones finales",exp:"Final clauses: 'Estudio para que apruebe' (I study so that I pass). Express purpose. Key connectors: para que, a fin de que, con el objeto de que."},
{statement:"oraciones causales",exp:"Causal clauses: 'Como llueve, me quedo' (Since it's raining, I'm staying). Express cause or reason. Key connectors: porque, como, puesto que, ya que."},
{statement:"oraciones consecutivas",exp:"Consecutive clauses: 'Hace tanto frío que me congelo' (It's so cold that I'm freezing). Express result or consequence. Key connectors: así que, de modo que, tan...que."},
{statement:"oraciones condicionales",exp:"Conditional sentences: Type 1 (real): 'Si llueve, me mojo'. Type 2 (unreal present): 'Si tuviera dinero, viajaría'. Type 3 (unreal past): 'Si hubiera sabido, habría ido'."},
{statement:"estilo directo/indirecto",exp:"Direct/indirect style: Direct: 'Dijo: 'Voy'' (He said: 'I'm going'). Indirect: 'Dijo que iba' (He said he was going). Changes in pronouns, tenses, and adverbs in reported speech."},
{statement:"metáfora y metonimia",exp:"Common literary devices: Metáfora (direct comparison): 'Tus ojos son dos soles'. Metonimia (associated concept): 'Leer a Cervantes' (read Cervantes' works). Essential for poetry analysis."},
{statement:"sinécdoque",exp:"Part for whole: 'Veinte velas' (twenty ships - sails), 'Techo' (home - roof). Common in poetry and formal writing. Requires cultural and contextual understanding."},
{statement:"personificación",exp:"Personification: 'El viento susurraba' (The wind whispered). Giving human qualities to objects or nature. Very common in Spanish literature and poetry."},
{statement:"aliteración",exp:"Alliteration: 'El ruido con que rueda la ronca tempestad'. Repetition of sounds for musical effect. Important in poetry and rhetorical prose."},
{statement:"paralelismo",exp:"Parallel structure: 'Canta el ave, silba el viento, suena el agua'. Repetition of grammatical structures for rhythm and emphasis. Common in biblical and poetic texts."},
{statement:"antítesis",exp:"Antithesis: 'Blanca nieve, negra noche'. Contrasting concepts for dramatic effect. Used in philosophy, rhetoric, and poetry."},
{statement:"encabalgamiento",exp:"Enjambment: When poetic line continues to next without punctuation. Creates flow and surprise. Essential for understanding Spanish poetry structure."},
{statement:"polisíndeton",exp:"Polysyndeton: 'Y corre y salta y canta'. Repeated conjunctions for rhythm and emphasis. Creates sense of accumulation or urgency."},
{statement:"asíndeton",exp:"Asyndeton: 'Llegué, vi, vencí'. Omission of conjunctions for speed and impact. Opposite of polysyndeton, creates brisk, decisive tone."},
{statement:"elipsis",exp:"Ellipsis: '(Yo) Voy a casa'. Omitting understood elements. Very common in Spanish conversation and informal writing. Requires contextual understanding."},
{statement:"zeugma",exp:"Zeugma: 'Perdió el tren y la paciencia'. One verb governing two unrelated objects. Sophisticated rhetorical device in literary Spanish."},
{statement:"arcaísmos",exp:"Archaisms: 'Vosotros', 'ansí' (así), 'agora' (ahora). Found in classic literature. Understanding these helps read older Spanish texts."},
{statement:"americanismos",exp:"Americanisms: 'Computadora' (computer), 'carro' (car), 'celular' (mobile). Vocabulary differences between Spain and Latin America. Important for regional comprehension."},
{statement:"modismos literarios",exp:"Literary idioms: 'Dar a luz' (to give birth), 'Echar de menos' (to miss someone). Fixed expressions with non-literal meanings common in literature."},
{statement:"cultismos",exp:"Learned words: 'Magnánimo' (magnanimous), 'inefable' (ineffable). Words from Latin/Greek used in formal writing. Essential for academic and literary texts."},
{statement:"jitanjáfora",exp:"Jitanjáfora: Meaningless but musical words in poetry. 'Filiflama alabe cundre' - pure sound play. Shows Spanish poetic experimentation."}
];
const buttons = ['button1', 'button2', 'button3'];
let currentquetype 
let currentchoiceQuestionIndex = 0;
let currentconjQuestionindex = 0
let currentsentenceindex = 0
let Ranswer = 0
let Wanswer = 0
document.addEventListener('DOMContentLoaded', function(){shuffleArray(qna);shuffleArray(conjtableque); shuffleArray(sentenceremA);startfunc();
});

function startfunc(){
document.getElementById('threechoice').style.display = "none";
document.getElementById('conjtable').style.display = "none";
document.getElementById('sentencerem').style.display = "none";
document.getElementById('start').style.display ="";
document.getElementById('startbtn').addEventListener("click", function(){document.getElementById('start').style.display = 'none'; setTimeout(selectquetype,1000)})
}

function resetAll (){
currentchoiceQuestionIndex = 0;
currentconjQuestionindex = 0
currentsentenceindex = 0
Ranswer = 0
Wanswer = 0
currentquetype = undefined
document.getElementById('ranswer').innerHTML = Ranswer
document.getElementById('wanswer').innerHTML = Wanswer
startfunc()
}

document.getElementById('startbtntop').onclick  = ()=> resetAll()

function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {const j = Math.floor(Math.random() * (i + 1));[array[i], array[j]] = [array[j], array[i]];}return array;
}

function selectquetype(){
    currentquetype = Math.floor(Math.random() * 10); if (currentquetype < 7 ){threeChoiceque()} else {sentenceRem()};
    console.log("success?")
}

function threeChoiceque() {
const currentQ = qna[currentchoiceQuestionIndex];
const answers = [currentQ.true, currentQ.false1, currentQ.false2];
buttons.forEach(btnId => {document.getElementById(btnId).disabled = false;});

    document.getElementById('sentencerem').style.display = "none";
    document.getElementById('threechoice').style.display = "";
    document.getElementById("question").innerHTML = currentQ.que;
    
    shuffleArray(answers);
    
    document.getElementById("button1").innerHTML = answers[0];
    document.getElementById("button2").innerHTML = answers[1];
    document.getElementById("button3").innerHTML = answers[2];
    
    document.getElementById("button1").dataset.correct = answers[0] === currentQ.true;
    document.getElementById("button2").dataset.correct = answers[1] === currentQ.true;
    document.getElementById("button3").dataset.correct = answers[2] === currentQ.true;
    
}

function checkAnswer(button){
const buttonbox = document.getElementById("workbox");
if (button.dataset.correct === "true") {
buttons.forEach(btnId => {document.getElementById(btnId).disabled = true;});
workbox.style.backgroundColor = "green";++Ranswer;document.getElementById('ranswer').innerHTML = Ranswer;currentchoiceQuestionIndex++;;

setTimeout(function(){selectquetype();
buttonbox.style.backgroundColor = "";},1500)}
else {buttonbox.style.backgroundColor = "red"; ++Wanswer; document.getElementById('wanswer').innerHTML = Wanswer
buttons.forEach(btnId => {document.getElementById(btnId).disabled = true;});
setTimeout(function() {buttonbox.style.backgroundColor = "";buttons.forEach(btnId => {document.getElementById(btnId).disabled = false;});}, 1500);}
}

function sentenceRem (){
document.getElementById('sentencerem').style.display = "";
document.getElementById('threechoice').style.display = "none";
document.getElementById('explaination').onclick  = ()=> selectquetype(); ++currentsentenceindex;

document.getElementById("explaination").innerHTML = sentenceremA[currentsentenceindex].exp;
document.getElementById("question2").innerHTML = sentenceremA[currentsentenceindex].statement;



}



