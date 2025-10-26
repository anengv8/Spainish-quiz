const qna = [
    // Original verb questions (1-16)
    {num:1,que:"What does the verb 'hablar' mean?",true: "to speak",false1: "to eat",false2: "to write"},
    {num:2,que:"How do you conjugate 'yo' form of 'comer' in present tense?",true: "como",false1: "comes",false2: "comen"},
    {num:3,que:"What is the 'ellos/ellas' form of 'vivir' in present tense?",true: "viven",false1: "vive",false2: "vivimos"},
    {num:4,que:"What does the verb 'tener' mean?",true: "to have",false1: "to be",false2: "to want"},
    {num:5,que:"How do you say 'I am' (temporary) in Spanish?",true: "estoy",false1: "soy",false2: "tengo"},
    {num:6,que:"What is the preterite tense 'yo' form of 'hablar'?",true: "hablé",false1: "hablo",false2: "hablaba"},
    {num:7,que:"What does the verb 'poder' mean?",true: "to be able to/can",false1: "to put",false2: "to sleep"},
    {num:8,que:"How do you conjugate 'nosotros' form of 'ir' in present tense?",true: "vamos",false1: "van",false2: "vais"},
    {num:9,que:"What is the imperfect tense 'yo' form of 'ser'?",true: "era",false1: "soy",false2: "fui"},
    {num:10,que:"What does the verb 'saber' mean?",true: "to know (information)",false1: "to know (people)",false2: "to taste"},
    {num:11,que:"How do you conjugate 'tú' form of 'jugar' in present tense?",true: "juegas",false1: "jugas",false2: "juega"},
    {num:12,que:"What is the future tense 'yo' form of 'tener'?",true: "tendré",false1: "tengo",false2: "tenía"},
    {num:13,que:"What does the verb 'venir' mean?",true: "to come",false1: "to go",false2: "to see"},
    {num:14,que:"How do you conjugate 'usted' form of 'estudiar' in present tense?",true: "estudia",false1: "estudias",false2: "estudian"},
    {num:15,que:"What is the conditional tense 'yo' form of 'hablar'?",true: "hablaría",false1: "hablo",false2: "hablé"},
    {num:16,que:"What is 'ser'?",true: "to be",false1: "to see",false2: "to hear"},

    // More Essential Verbs (17-30)
    {num:17,que:"What does 'hacer' mean?",true: "to do/make",false1: "to have",false2: "to be"},
    {num:18,que:"What does 'decir' mean?",true: "to say/tell",false1: "to give",false2: "to see"},
    {num:19,que:"What does 'ver' mean?",true: "to see",false1: "to come",false2: "to go"},
    {num:20,que:"What does 'dar' mean?",true: "to give",false1: "to take",false2: "to have"},
    {num:21,que:"What does 'querer' mean?",true: "to want",false1: "to love",false2: "to need"},
    {num:22,que:"What does 'llegar' mean?",true: "to arrive",false1: "to leave",false2: "to stay"},
    {num:23,que:"What does 'pasar' mean?",true: "to pass/to happen",false1: "to stop",false2: "to continue"},
    {num:24,que:"What does 'deber' mean?",true: "should/must",false1: "to be able to",false2: "to want to"},
    {num:25,que:"What does 'poner' mean?",true: "to put",false1: "to take",false2: "to give"},
    {num:26,que:"What does 'parecer' mean?",true: "to seem",false1: "to appear",false2: "to disappear"},
    {num:27,que:"What does 'conocer' mean?",true: "to know (people/places)",false1: "to know (information)",false2: "to learn"},
    {num:28,que:"What does 'salir' mean?",true: "to leave",false1: "to enter",false2: "to stay"},
    {num:29,que:"What does 'volver' mean?",true: "to return",false1: "to go",false2: "to come"},
    {num:30,que:"What does 'sentir' mean?",true: "to feel",false1: "to sit",false2: "to sleep"},

    // Verb Conjugations (31-45)
    {num:31,que:"Present tense 'yo' form of 'tener'",true: "tengo",false1: "tiene",false2: "tenemos"},
    {num:32,que:"Present tense 'tú' form of 'venir'",true: "vienes",false1: "viene",false2: "venimos"},
    {num:33,que:"Present tense 'él/ella' form of 'poder'",true: "puede",false1: "puedo",false2: "pueden"},
    {num:34,que:"Preterite 'yo' form of 'hacer'",true: "hice",false1: "hago",false2: "hacía"},
    {num:35,que:"Preterite 'ellos' form of 'ser'",true: "fueron",false1: "eran",false2: "son"},
    {num:36,que:"Imperfect 'yo' form of 'ver'",true: "veía",false1: "vi",false2: "veré"},
    {num:37,que:"Future 'yo' form of 'querer'",true: "querré",false1: "quiero",false2: "quería"},
    {num:38,que:"Conditional 'tú' form of 'decir'",true: "dirías",false1: "dices",false2: "decías"},
    {num:39,que:"Present subjunctive 'yo' form of 'estar'",true: "esté",false1: "estoy",false2: "estaba"},
    {num:40,que:"Present tense 'nosotros' form of 'dormir'",true: "dormimos",false1: "duermen",false2: "duermo"},
    {num:41,que:"Present tense 'yo' form of 'pedir'",true: "pido",false1: "pide",false2: "piden"},
    {num:42,que:"Preterite 'yo' form of 'saber'",true: "supe",false1: "sé",false2: "sabía"},
    {num:43,que:"Imperfect 'nosotros' form of 'ir'",true: "íbamos",false1: "vamos",false2: "fuimos"},
    {num:44,que:"Future 'él' form of 'haber'",true: "habrá",false1: "hay",false2: "había"},
    {num:45,que:"Present tense 'ustedes' form of 'jugar'",true: "juegan",false1: "juegas",false2: "jugamos"},

    // Common Nouns (46-60)
    {num:46,que:"What does 'casa' mean?",true: "house",false1: "car",false2: "city"},
    {num:47,que:"What does 'tiempo' mean?",true: "time/weather",false1: "temperature",false2: "temple"},
    {num:48,que:"What does 'hombre' mean?",true: "man",false1: "woman",false2: "human"},
    {num:49,que:"What does 'mujer' mean?",true: "woman",false1: "mother",false2: "man"},
    {num:50,que:"What does 'agua' mean?",true: "water",false1: "air",false2: "earth"},
    {num:51,que:"What does 'trabajo' mean?",true: "work/job",false1: "travel",false2: "study"},
    {num:52,que:"What does 'vida' mean?",true: "life",false1: "video",false2: "view"},
    {num:53,que:"What does 'parte' mean?",true: "part",false1: "party",false2: "partner"},
    {num:54,que:"What does 'año' mean?",true: "year",false1: "month",false2: "day"},
    {num:55,que:"What does 'día' mean?",true: "day",false1: "date",false2: "diary"},
    {num:56,que:"What does 'cosa' mean?",true: "thing",false1: "cause",false2: "case"},
    {num:57,que:"What does 'persona' mean?",true: "person",false1: "people",false2: "personal"},
    {num:58,que:"What does 'mano' mean?",true: "hand",false1: "arm",false2: "finger"},
    {num:59,que:"What does 'mundo' mean?",true: "world",false1: "mountain",false2: "moon"},
    {num:60,que:"What does 'país' mean?",true: "country",false1: "city",false2: "place"},

    // Adjectives (61-75)
    {num:61,que:"What does 'bueno' mean?",true: "good",false1: "bad",false2: "big"},
    {num:62,que:"What does 'malo' mean?",true: "bad",false1: "small",false2: "mad"},
    {num:63,que:"What does 'grande' mean?",true: "big/large",false1: "grand",false2: "great"},
    {num:64,que:"What does 'pequeño' mean?",true: "small",false1: "petite",false2: "peculiar"},
    {num:65,que:"What does 'importante' mean?",true: "important",false1: "imported",false2: "impossible"},
    {num:66,que:"What does 'nuevo' mean?",true: "new",false1: "nine",false2: "known"},
    {num:67,que:"What does 'viejo' mean?",true: "old",false1: "view",false2: "village"},
    {num:68,que:"What does 'joven' mean?",true: "young",false1: "job",false2: "journey"},
    {num:69,que:"What does 'mejor' mean?",true: "better",false1: "worse",false2: "major"},
    {num:70,que:"What does 'peor' mean?",true: "worse",false1: "poor",false2: "peer"},
    {num:71,que:"What does 'primero' mean?",true: "first",false1: "primary",false2: "prime"},
    {num:72,que:"What does 'último' mean?",true: "last",false1: "ultimate",false2: "only"},
    {num:73,que:"What does 'difícil' mean?",true: "difficult",false1: "different",false2: "definite"},
    {num:74,que:"What does 'fácil' mean?",true: "easy",false1: "fast",false2: "face"},
    {num:75,que:"What does 'posible' mean?",true: "possible",false1: "positive",false2: "potable"},

    // Adverbs (76-85)
    {num:76,que:"What does 'ahora' mean?",true: "now",false1: "hour",false2: "today"},
    {num:77,que:"What does 'siempre' mean?",true: "always",false1: "sometimes",false2: "never"},
    {num:78,que:"What does 'nunca' mean?",true: "never",false1: "none",false2: "nothing"},
    {num:79,que:"What does 'aquí' mean?",true: "here",false1: "there",false2: "where"},
    {num:80,que:"What does 'allí' mean?",true: "there",false1: "here",false2: "everywhere"},
    {num:81,que:"What does 'muy' mean?",true: "very",false1: "much",false2: "many"},
    {num:82,que:"What does 'mucho' mean?",true: "a lot/much",false1: "more",false2: "most"},
    {num:83,que:"What does 'poco' mean?",true: "a little",false1: "few",false2: "point"},
    {num:84,que:"What does 'bien' mean?",true: "well",false1: "good",false2: "better"},
    {num:85,que:"What does 'mal' mean?",true: "badly",false1: "male",false2: "mall"},

    // Pronouns (86-95)
    {num:86,que:"What does 'yo' mean?",true: "I",false1: "you",false2: "he"},
    {num:87,que:"What does 'tú' mean?",true: "you (informal)",false1: "you (formal)",false2: "they"},
    {num:88,que:"What does 'él' mean?",true: "he",false1: "she",false2: "it"},
    {num:89,que:"What does 'ella' mean?",true: "she",false1: "he",false2: "it"},
    {num:90,que:"What does 'nosotros' mean?",true: "we",false1: "you all",false2: "they"},
    {num:91,que:"What does 'ellos' mean?",true: "they (masculine)",false1: "they (feminine)",false2: "you all"},
    {num:92,que:"What does 'me' as a pronoun means?",true: "me (direct/indirect object)",false1: "my",false2: "I"},
    {num:93,que:"What does 'te' as a pronoun mean?",true: "you (direct/indirect object)",false1: "your",false2: "to you"},
    {num:94,que:"What does 'lo' as a pronoun mean?",true: "him/it (direct object)",false1: "the",false2: "his"},
    {num:95,que:"What does 'se' as a pronoun often indicates?",true: "reflexive/impersonal",false1: "she",false2: "self"},

    // Prepositions (96-105)
    {num:96,que:"What does 'a' mean?",true: "to/at",false1: "from",false2: "with"},
    {num:97,que:"What does 'de' mean?",true: "of/from",false1: "the",false2: "to"},
    {num:98,que:"What does 'en' mean?",true: "in/on",false1: "and",false2: "end"},
    {num:99,que:"What does 'con' mean?",true: "with",false1: "against",false2: "without"},
    {num:100,que:"What does 'sin' mean?",true: "without",false1: "with",false2: "since"},
    {num:101,que:"What does 'por' mean?",true: "for/by",false1: "through",false2: "per"},
    {num:102,que:"What does 'para' mean?",true: "for/in order to",false1: "by",false2: "through"},
    {num:103,que:"What does 'sobre' mean?",true: "on/above/about",false1: "under",false2: "around"},
    {num:104,que:"What does 'entre' mean?",true: "between",false1: "enter",false2: "inside"},
    {num:105,que:"What does 'hacia' mean?",true: "toward",false1: "from",false2: "here"},

    // Conjunctions & Glue Words (106-120)
    {num:106,que:"What does 'y' mean?",true: "and",false1: "or",false2: "but"},
    {num:107,que:"What does 'o' mean?",true: "or",false1: "and",false2: "but"},
    {num:108,que:"What does 'pero' mean?",true: "but",false1: "and",false2: "or"},
    {num:109,que:"What does 'porque' mean?",true: "because",false1: "why",false2: "for"},
    {num:110,que:"What does 'cuando' mean?",true: "when",false1: "where",false2: "how"},
    {num:111,que:"What does 'donde' mean?",true: "where",false1: "when",false2: "how"},
    {num:112,que:"What does 'como' mean?",true: "how/like/as",false1: "who",false2: "what"},
    {num:113,que:"What does 'que' mean?",true: "that/which",false1: "what",false2: "who"},
    {num:114,que:"What does 'si' mean?",true: "if",false1: "yes",false2: "see"},
    {num:115,que:"What does 'aunque' mean?",true: "although",false1: "and",false2: "or"},
    {num:116,que:"What does 'también' mean?",true: "also",false1: "too much",false2: "same"},
    {num:117,que:"What does 'tampoco' mean?",true: "neither",false1: "also",false2: "too"},
    {num:118,que:"What does 'entonces' mean?",true: "then",false1: "now",false2: "when"},
    {num:119,que:"What does 'antes' mean?",true: "before",false1: "after",false2: "during"},
    {num:120,que:"What does 'después' mean?",true: "after",false1: "before",false2: "during"},

    // Essential Phrases & Expressions (121-135)
    {num:121,que:"What does 'gracias' mean?",true: "thank you",false1: "please",false2: "you're welcome"},
    {num:122,que:"What does 'por favor' mean?",true: "please",false1: "thank you",false2: "excuse me"},
    {num:123,que:"What does 'lo siento' mean?",true: "I'm sorry",false1: "I feel",false2: "I know"},
    {num:124,que:"What does 'de nada' mean?",true: "you're welcome",false1: "thank you",false2: "please"},
    {num:125,que:"What does 'claro' mean?",true: "of course",false1: "clear",false2: "closed"},
    {num:126,que:"What does 'quizás' mean?",true: "maybe/perhaps",false1: "quick",false2: "quiz"},
    {num:127,que:"What does 'probablemente' mean?",true: "probably",false1: "possible",false2: "problem"},
    {num:128,que:"What does 'realmente' mean?",true: "really",false1: "royal",false2: "real"},
    {num:129,que:"What does 'especialmente' mean?",true: "especially",false1: "special",false2: "specific"},
    {num:130,que:"What does 'generalmente' mean?",true: "generally",false1: "generous",false2: "genuine"},
    {num:131,que:"What does 'normalmente' mean?",true: "normally",false1: "formal",false2: "north"},
    {num:132,que:"What does 'finalmente' mean?",true: "finally",false1: "fine",false2: "finish"},
    {num:133,que:"What does 'seguramente' mean?",true: "surely",false1: "secure",false2: "second"},
    {num:134,que:"What does 'actualmente' mean?",true: "currently",false1: "actually",false2: "active"},
    {num:135,que:"What does 'principalmente' mean?",true: "mainly",false1: "principal",false2: "primary"},

    // Advanced Grammar & Usage (136-150)
    {num:136,que:"What is the difference between 'ser' and 'estar'?",true: "ser=permanent, estar=temporary",false1: "ser=temporary, estar=permanent",false2: "they are interchangeable"},
    {num:137,que:"When do you use 'saber' vs 'conocer'?",true: "saber=knowledge, conocer=acquaintance",false1: "saber=people, conocer=facts",false2: "they mean the same"},
    {num:138,que:"What does the personal 'a' indicate?",true: "precedes specific direct object people",false1: "indicates location",false2: "shows possession"},
    {num:139,que:"How do you say 'I like' in Spanish?",true: "me gusta",false1: "yo gusto",false2: "me gusto"},
    {num:140,que:"What construction is 'tener que'?",true: "to have to (obligation)",false1: "to want to",false2: "to be able to"},
    {num:141,que:"What construction is 'ir a'?",true: "going to (future)",false1: "to have to",false2: "to want to"},
    {num:142,que:"What does 'acabar de' mean?",true: "to have just done something",false1: "tobe about to",false2: "to finish"},
    {num:143,que:"When is 'hay' used?",true: "there is/there are",false1: "here is",false2: "where is"},
    {num:144,que:"What does 'se' in 'se habla español' mean?",true: "impersonal/passive construction",false1: "reflexive",false2: "indirect object"},
    {num:145,que:"What is the subjunctive mood used for?",true: "doubt, desire, uncertainty",false1: "facts and certainty",false2: "past events"},
    {num:146,que:"What triggers subjunctive after 'que'?",true: "wishes, emotions, doubt",false1: "certainty and facts",false2: "past events"},
    {num:147,que:"When do you use 'por' vs 'para'?",true: "por=reason/cause, para=purpose/destination",false1: "they are interchangeable",false2: "por=purpose, para=reason"},
    {num:148,que:"What are the direct object pronouns?",true: "me, te, lo, la, nos, os, los, las",false1: "yo, tú, él, nosotros, vosotros, ellos",false2: "mi, tu, su, nuestro, vuestro, su"},
    {num:149,que:"What are the indirect object pronouns?",true: "me, te, le, nos, os, les",false1: "yo, tú, él, nosotros, vosotros, ellos",false2: "mi, tu, su, nuestro, vuestro, su"},
    {num:150,que:"What is 'gustar' conjugation pattern?",true: "thing liked + gusta/gustan + pronoun",false1: "pronoun + gusta/gustan + thing",false2: "gustar conjugates like regular -ar verb"},

    // Everyday Conversations & Greetings (151-165)
    {num:151,que:"How do you say 'How are you?' (informal)",true: "¿Cómo estás?",false1: "¿Cómo está?",false2: "¿Qué tal estás?"},
    {num:152,que:"How do you respond to '¿Cómo estás?' when you're fine",true: "Estoy bien",false1: "Soy bueno",false2: "Tengo bien"},
    {num:153,que:"What's the response to 'Gracias'",true: "De nada",false1: "Por favor",false2: "Lo siento"},
    {num:154,que:"How do you say 'See you later'",true: "Hasta luego",false1: "Hasta nunca",false2: "Hasta pronto"},
    {num:155,que:"How do you ask someone's name",true: "¿Cómo te llamas?",false1: "¿Qué es tu nombre?",false2: "¿Quién eres?"},
    {num:156,que:"How do you say 'My name is...'",true: "Me llamo...",false1: "Mi nombre es...",false2: "Soy llamado..."},
    {num:157,que:"How do you say 'Nice to meet you'",true: "Mucho gusto",false1: "Mucho gusto en conocerte",false2: "Encantado de conocerte"},
    {num:158,que:"How do you ask 'Where are you from?'",true: "¿De dónde eres?",false1: "¿Dónde estás?",false2: "¿De dónde vienes?"},
    {num:159,que:"How do you say 'I'm from...'",true: "Soy de...",false1: "Estoy de...",false2: "Vengo de..."},
    {num:160,que:"How do you say 'What's new?'",true: "¿Qué hay de nuevo?",false1: "¿Qué es nuevo?",false2: "¿Qué nuevo?"},
    {num:161,que:"How do you say 'Not much' in response",true: "No mucho",false1: "Poco",false2: "Nada mucho"},
    {num:162,que:"How do you say 'Take care'",true: "Cuídate",false1: "Cuida tú",false2: "Toma cuidado"},
    {num:163,que:"How do you say 'Good luck'",true: "Buena suerte",false1: "Buen suerte",false2: "Suerte buena"},
    {num:164,que:"How do you say 'Congratulations'",true: "Felicidades",false1: "Congratulaciones",false2: "Enhorabuena"},
    {num:165,que:"How do you say 'I miss you'",true: "Te extraño",false1: "Te pierdo",false2: "Te echo de menos"},

    // Restaurant & Food Vocabulary (166-180)
    {num:166,que:"How do you ask for the menu",true: "La carta, por favor",false1: "El menú, por favor",false2: "La lista, por favor"},
    {num:167,que:"How do you say 'I would like...' when ordering",true: "Quisiera...",false1: "Yo quiero...",false2: "Me gustaría..."},
    {num:168,que:"How do you ask for the bill",true: "La cuenta, por favor",false1: "El bill, por favor",false2: "El total, por favor"},
    {num:169,que:"How do you say 'Cheers!' when drinking",true: "¡Salud!",false1: "¡Cheers!",false2: "¡Brindis!"},
    {num:170,que:"How do you ask 'What do you recommend?'",true: "¿Qué recomienda?",false1: "¿Qué recomiendas?",false2: "¿Qué sugieres?"},
    {num:171,que:"How do you say 'It's delicious'",true: "Está delicioso",false1: "Es delicioso",false2: "Está rico"},
    {num:172,que:"How do you ask for water",true: "Agua, por favor",false1: "Aqua, por favor",false2: "Agua, por favor"},
    {num:173,que:"How do you say 'I'm vegetarian'",true: "Soy vegetariano/a",false1: "Estoy vegetariano",false2: "Tengo vegetariano"},
    {num:174,que:"How do you ask 'What is this?' (pointing at food)",true: "¿Qué es esto?",false1: "¿Qué está esto?",false2: "¿Qué son estos?"},
    {num:175,que:"How do you say 'More coffee, please'",true: "Más café, por favor",false1: "Más café, por favor",false2: "Otro café, por favor"},
    {num:176,que:"How do you say 'No onions, please'",true: "Sin cebolla, por favor",false1: "No cebolla, por favor",false2: "Sin cebollas, por favor"},
    {num:177,que:"How do you ask 'Is it spicy?'",true: "¿Es picante?",false1: "¿Está picante?",false2: "¿Tiene picante?"},
    {num:178,que:"How do you say 'I'm allergic to...'",true: "Soy alérgico/a a...",false1: "Tengo alergia a...",false2: "Estoy alérgico a..."},
    {num:179,que:"How do you say 'Can I have the check?'",true: "¿Me trae la cuenta?",false1: "¿Puedo tener la cuenta?",false2: "¿Dame la cuenta?"},
    {num:180,que:"How do you compliment the chef",true: "Estaba excelente",false1: "Fue excelente",false2: "Es excelente"},

    // Shopping & Transactions (181-195)
    {num:181,que:"How do you ask 'How much does it cost?'",true: "¿Cuánto cuesta?",false1: "¿Cuánto está?",false2: "¿Qué cuesta?"},
    {num:182,que:"How do you say 'I'm just looking'",true: "Solo estoy mirando",false1: "Solo miro",false2: "Estoy mirando solamente"},
    {num:183,que:"How do you ask 'Do you accept credit cards?'",true: "¿Aceptan tarjetas de crédito?",false1: "¿Toman tarjetas?",false2: "¿Reciben crédito?"},
    {num:184,que:"How do you say 'That's too expensive'",true: "Es demasiado caro",false1: "Está demasiado caro",false2: "Es muy caro"},
    {num:185,que:"How do you ask for a different size",true: "¿Tiene otra talla?",false1: "¿Tiene otro tamaño?",false2: "¿Tiene diferente tamaño?"},
    {num:186,que:"How do you say 'I'll take it'",true: "Me lo llevo",false1: "Yo lo tomo",false2: "Lo compro"},
    {num:187,que:"How do you ask 'Where is the bathroom?'",true: "¿Dónde está el baño?",false1: "¿Dónde es el baño?",false2: "¿Dónde están los baños?"},
    {num:188,que:"How do you say 'Do you have...?'",true: "¿Tiene...?",false1: "¿Tienes...?",false2: "¿Hay...?"},
    {num:189,que:"How do you ask for help in a store",true: "Disculpe, ¿me puede ayudar?",false1: "Oye, ayúdame",false2: "Perdón, ayuda"},
    {num:190,que:"How do you say 'I'm looking for...'",true: "Busco...",false1: "Estoy buscando...",false2: "Miro para..."},
    {num:191,que:"How do you ask about store hours",true: "¿A qué hora abren/cierran?",false1: "¿Cuándo abren?",false2: "¿Qué horas tienen?"},
    {num:192,que:"How do you say 'On sale'",true: "En oferta",false1: "En venta",false2: "En descuento"},
    {num:193,que:"How do you ask for a receipt",true: "El recibo, por favor",false1: "La recepción, por favor",false2: "El recibimiento, por favor"},
    {num:194,que:"How do you say 'It doesn't fit'",true: "No me queda",false1: "No me cabe",false2: "No me entra"},
    {num:195,que:"How do you ask 'Can I try it on?'",true: "¿Me lo puedo probar?",false1: "¿Puedo probarlo?",false2: "¿Puedo intentarlo?"},

    // Directions & Transportation (196-210)
    {num:196,que:"How do you ask 'Where is...?'",true: "¿Dónde está...?",false1: "¿Dónde es...?",false2: "¿Dónde hay...?"},
    {num:197,que:"How do you say 'Go straight'",true: "Siga derecho",false1: "Vaya derecho",false2: "Camina derecho"},
    {num:198,que:"How do you say 'Turn left'",true: "Gire a la izquierda",false1: "Voltee a la izquierda",false2: "Doble a la izquierda"},
    {num:199,que:"How do you ask 'How do I get to...?'",true: "¿Cómo llego a...?",false1: "¿Cómo voy a...?",false2: "¿Cómo llegar a...?"},
    {num:200,que:"How do you say 'It's near/far'",true: "Está cerca/lejos",false1: "Es cerca/lejos",false2: "Hay cerca/lejos"},
    {num:201,que:"How do you ask for a taxi",true: "Necesito un taxi",false1: "Quiero un taxi",false2: "Dame un taxi"},
    {num:202,que:"How do you say 'To the airport, please'",true: "Al aeropuerto, por favor",false1: "Para el aeropuerto, por favor",false2: "Hacia el aeropuerto, por favor"},
    {num:203,que:"How do you ask about bus schedules",true: "¿A qué hora sale el autobús?",false1: "¿Cuándo sale el bus?",false2: "¿Qué hora tiene el bus?"},
    {num:204,que:"How do you say 'One ticket, please'",true: "Un boleto, por favor",false1: "Una entrada, por favor",false2: "Un ticket, por favor"},
    {num:205,que:"How do you ask 'Does this bus go to...?'",true: "¿Este autobús va a...?",false1: "¿Este bus está yendo a...?",false2: "¿Va este bus a...?"},
    {num:206,que:"How do you say 'I'm lost'",true: "Estoy perdido/a",false1: "Soy perdido",false2: "Me he perdido"},
    {num:207,que:"How do you ask for the address",true: "¿Cuál es la dirección?",false1: "¿Qué es la dirección?",false2: "¿Dónde es la dirección?"},
    {num:208,que:"How do you say 'Next to the bank'",true: "Al lado del banco",false1: "Junto al banco",false2: "Cerca del banco"},
    {num:209,que:"How do you ask 'Is it within walking distance?'",true: "¿Se puede ir caminando?",false1: "¿Está caminando distancia?",false2: "¿Podemos caminar?"},
    {num:210,que:"How do you say 'Stop here, please' to a driver",true: "Pare aquí, por favor",false1: "Alto aquí, por favor",false2: "Para aquí, por favor"},

    // Time & Dates (211-225)
    {num:211,que:"How do you ask 'What time is it?'",true: "¿Qué hora es?",false1: "¿Qué tiempo es?",false2: "¿Cuál hora es?"},
    {num:212,que:"How do you say 'It's 3:00'",true: "Son las tres",false1: "Es las tres",false2: "Está las tres"},
    {num:213,que:"How do you ask 'What day is today?'",true: "¿Qué día es hoy?",false1: "¿Qué fecha es hoy?",false2: "¿Cuál día es hoy?"},
    {num:214,que:"How do you say 'Today is Monday'",true: "Hoy es lunes",false1: "Hoy está lunes",false2: "Hoy hay lunes"},
    {num:215,que:"How do you ask 'When?'",true: "¿Cuándo?",false1: "¿Qué cuando?",false2: "¿A qué tiempo?"},
    {num:216,que:"How do you say 'Tomorrow'",true: "Mañana",false1: "Pasado mañana",false2: "Próximo día"},
    {num:217,que:"How do you say 'Yesterday'",true: "Ayer",false1: "Antes de hoy",false2: "Pasado"},
    {num:218,que:"How do you ask 'At what time?'",true: "¿A qué hora?",false1: "¿En qué hora?",false2: "¿Para qué hora?"},
    {num:219,que:"How do you say 'In the morning'",true: "Por la mañana",false1: "En la mañana",false2: "Durante la mañana"},
    {num:220,que:"How do you say 'In the afternoon'",true: "Por la tarde",false1: "En la tarde",false2: "Durante la tarde"},
    {num:221,que:"How do you say 'At night'",true: "Por la noche",false1: "En la noche",false2: "Durante la noche"},
    {num:222,que:"How do you ask 'How long?'",true: "¿Cuánto tiempo?",false1: "¿Qué largo?",false2: "¿Cuán largo?"},
    {num:223,que:"How do you say 'All day'",true: "Todo el día",false1: "Cada día",false2: "Toda la día"},
    {num:224,que:"How do you say 'Every week'",true: "Cada semana",false1: "Toda semana",false2: "Todas las semanas"},
    {num:225,que:"How do you ask 'What's the date?'",true: "¿Qué fecha es hoy?",false1: "¿Qué día es hoy?",false2: "¿Cuál es la fecha?"},

    // Emergency & Health (226-240)
    {num:226,que:"How do you say 'Help!'",true: "¡Ayuda!",false1: "¡Help!",false2: "¡Auxilio!"},
    {num:227,que:"How do you say 'I need a doctor'",true: "Necesito un médico",false1: "Quiero un doctor",false2: "Busco un médico"},
    {num:228,que:"How do you say 'It hurts here'",true: "Me duele aquí",false1: "Duele aquí",false2: "Estoy dolorido aquí"},
    {num:229,que:"How do you say 'I'm sick'",true: "Estoy enfermo/a",false1: "Soy enfermo",false2: "Tengo enfermo"},
    {num:230,que:"How do you call for emergency",true: "¡Emergencia!",false1: "¡Urgencia!",false2: "¡Emergency!"},
    {num:231,que:"How do you say 'Call an ambulance'",true: "Llame una ambulancia",false1: "Llama una ambulancia",false2: "Llamen una ambulancia"},
    {num:232,que:"How do you say 'Where is the hospital?'",true: "¿Dónde está el hospital?",false1: "¿Dónde es el hospital?",false2: "¿Dónde hay hospital?"},
    {num:233,que:"How do you say 'I have a fever'",true: "Tengo fiebre",false1: "Estoy con fiebre",false2: "Soy fiebre"},
    {num:234,que:"How do you say 'I'm allergic to...'",true: "Soy alérgico/a a...",false1: "Tengo alergia a...",false2: "Estoy alérgico a..."},
    {num:235,que:"How do you ask for a pharmacy",true: "¿Dónde hay una farmacia?",false1: "¿Dónde está la farmacia?",false2: "¿Dónde es la farmacia?"},
    {num:236,que:"How do you say 'I have a headache'",true: "Tengo dolor de cabeza",false1: "Me duele la cabeza",false2: "Estoy con dolor de cabeza"},
    {num:237,que:"How do you say 'Be careful'",true: "Ten cuidado",false1: "Está cuidadoso",false2: "Sé cuidadoso"},
    {num:238,que:"How do you say 'It's dangerous'",true: "Es peligroso",false1: "Está peligroso",false2: "Hay peligro"},
    {num:239,que:"How do you say 'I lost my passport'",true: "Perdí mi pasaporte",false1: "He perdido mi pasaporte",false2: "Estoy perdiendo mi pasaporte"},
    {num:240,que:"How do you ask for police",true: "Necesito la policía",false1: "Quiero la policía",false2: "Busco la policía"},

    // Social & Relationships (241-255)
    {num:241,que:"How do you say 'Do you want to go out?'",true: "¿Quieres salir?",false1: "¿Quieres ir afuera?",false2: "¿Quieres salir conmigo?"},
    {num:242,que:"How do you say 'I love you' to a romantic partner",true: "Te amo",false1: "Te quiero",false2: "Te adoro"},
    {num:243,que:"How do you say 'I like you' (friendly)",true: "Me caes bien",false1: "Me gustas",false2: "Te quiero"},
    {num:244,que:"How do you ask 'Are you married?'",true: "¿Estás casado/a?",false1: "¿Eres casado?",false2: "¿Tienes casado?"},
    {num:245,que:"How do you say 'I'm single'",true: "Estoy soltero/a",false1: "Soy soltero",false2: "Tengo soltero"},
    {num:246,que:"How do you invite someone for coffee",true: "¿Quieres tomar un café?",false1: "¿Quieres un café?",false2: "¿Vamos por café?"},
    {num:247,que:"How do you say 'Let's be friends'",true: "Seamos amigos",false1: "Vamos a ser amigos",false2: "Podemos ser amigos"},
    {num:248,que:"How do you ask for someone's phone number",true: "¿Me das tu número de teléfono?",false1: "¿Cuál es tu teléfono?",false2: "¿Puedo tener tu número?"},
    {num:249,que:"How do you say 'Call me'",true: "Llámame",false1: "Me llamas",false2: "Llamarme"},
    {num:250,que:"How do you say 'Text me'",true: "Escríbeme",false1: "Textearme",false2: "Mándame un texto"},

    // Household & Daily Life (251-265)
    {num:251,que:"How do you say 'I live in...'",true: "Vivo en...",false1: "Estoy viviendo en...",false2: "Vivir en..."},
    {num:252,que:"How do you ask 'Do you live nearby?'",true: "¿Vives cerca?",false1: "¿Estás viviendo cerca?",false2: "¿Vivir cerca?"},
    {num:253,que:"How do you say 'I'm hungry'",true: "Tengo hambre",false1: "Estoy hambre",false2: "Soy hambre"},
    {num:254,que:"How do you say 'I'm thirsty'",true: "Tengo sed",false1: "Estoy sed",false2: "Soy sed"},
    {num:255,que:"How do you say 'I'm tired'",true: "Estoy cansado/a",false1: "Tengo cansado",false2: "Soy cansado"},
    {num:256,que:"How do you say 'I'm busy'",true: "Estoy ocupado/a",false1: "Tengo ocupado",false2: "Soy ocupado"},
    {num:257,que:"How do you ask 'What are you doing?'",true: "¿Qué estás haciendo?",false1: "¿Qué haces?",false2: "¿Qué estás hacendo?"},
    {num:258,que:"How do you say 'I'm working'",true: "Estoy trabajando",false1: "Trabajo",false2: "Estoy en trabajo"},
    {num:259,que:"How do you say 'I'm studying'",true: "Estoy estudiando",false1: "Estudio",false2: "Estoy en estudio"},
    {num:260,que:"How do you ask 'What do you do for work?'",true: "¿A qué te dedicas?",false1: "¿Qué trabajas?",false2: "¿Qué haces para trabajo?"},
    {num:261,que:"How do you say 'I'm a student'",true: "Soy estudiante",false1: "Estoy estudiante",false2: "Tengo estudiante"},
    {num:262,que:"How do you say 'I work in...'",true: "Trabajo en...",false1: "Estoy trabajando en...",false2: "Trabajar en..."},
    {num:263,que:"How do you ask about family",true: "¿Tienes familia?",false1: "¿Tienes una familia?",false2: "¿Estás con familia?"},
    {num:264,que:"How do you say 'I have children'",true: "Tengo hijos",false1: "Estoy con hijos",false2: "Tengo niños"},
    {num:265,que:"How do you ask about siblings",true: "¿Tienes hermanos?",false1: "¿Tienes hermanos y hermanas?",false2: "¿Estás con hermanos?"},

    // Technology & Modern Life (266-280)
    {num:266,que:"How do you say 'I don't understand'",true: "No entiendo",false1: "No comprendo",false2: "No capto"},
    {num:267,que:"How do you ask 'Can you repeat that?'",true: "¿Puede repetir?",false1: "¿Repite?",false2: "¿Otra vez?"},
    {num:268,que:"How do you say 'Speak slowly, please'",true: "Hable despacio, por favor",false1: "Habla lento, por favor",false2: "Despacio, por favor"},
    {num:269,que:"How do you ask 'Do you speak English?'",true: "¿Habla inglés?",false1: "¿Hablas inglés?",false2: "¿Sabes inglés?"},
    {num:270,que:"How do you say 'I speak a little Spanish'",true: "Hablo un poco de español",false1: "Hablo poco español",false2: "Sé un poco español"},
    {num:271,que:"How do you ask for Wi-Fi password",true: "¿Cuál es la contraseña del Wi-Fi?",false1: "¿Qué es el password del Wi-Fi?",false2: "¿Cómo se conecta al Wi-Fi?"},
    {num:272,que:"How do you say 'I need to charge my phone'",true: "Necesito cargar mi teléfono",false1: "Quiero cargar mi celular",false2: "Tengo que cargar el teléfono"},
    {num:273,que:"How do you ask to connect on social media",true: "¿Te puedo seguir en redes?",false1: "¿Tienes redes sociales?",false2: "¿Podemos conectar en redes?"},
    {num:274,que:"How do you say 'Send me an email'",true: "Mándame un correo",false1: "Envíame un email",false2: "Mándame un email"},
    {num:275,que:"How do you ask for someone's Instagram",true: "¿Cuál es tu Instagram?",false1: "¿Qué es tu Instagram?",false2: "¿Tienes Instagram?"},

    // Weather & Nature (276-285)
    {num:276,que:"How do you ask about the weather",true: "¿Qué tiempo hace?",false1: "¿Cómo está el tiempo?",false2: "¿Qué clima hace?"},
    {num:277,que:"How do you say 'It's sunny'",true: "Hace sol",false1: "Está soleado",false2: "Hay sol"},
    {num:278,que:"How do you say 'It's raining'",true: "Está lloviendo",false1: "Llueve",false2: "Hay lluvia"},
    {num:279,que:"How do you say 'It's cold/hot'",true: "Hace frío/calor",false1: "Está frío/caliente",false2: "Es frío/calor"},
    {num:280,que:"How do you say 'It's windy'",true: "Hace viento",false1: "Está ventoso",false2: "Hay viento"},
    {num:281,que:"How do you say 'It's beautiful weather'",true: "Hace buen tiempo",false1: "Está buen tiempo",false2: "Es buen tiempo"},
    {num:282,que:"How do you say 'It's cloudy'",true: "Está nublado",false1: "Hay nubes",false2: "Hace nubes"},
    {num:283,que:"How do you say 'What's the temperature?'",true: "¿Cuál es la temperatura?",false1: "¿Qué temperatura hace?",false2: "¿Cuánto temperatura?"},
    {num:284,que:"How do you say 'It's snowing'",true: "Está nevando",false1: "Nieva",false2: "Hay nieve"},
    {num:285,que:"How do you say 'I'm cold/hot'",true: "Tengo frío/calor",false1: "Estoy frío/caliente",false2: "Soy frío/calor"},

    // Emotions & Feelings (286-300)
    {num:286,que:"How do you say 'I'm happy'",true: "Estoy feliz",false1: "Soy feliz",false2: "Tengo feliz"},
    {num:287,que:"How do you say 'I'm sad'",true: "Estoy triste",false1: "Soy triste",false2: "Tengo triste"},
    {num:288,que:"How do you say 'I'm excited'",true: "Estoy emocionado/a",false1: "Soy emocionado",false2: "Tengo emocionado"},
    {num:289,que:"How do you say 'I'm nervous'",true: "Estoy nervioso/a",false1: "Soy nervioso",false2: "Tengo nervioso"},
    {num:290,que:"How do you say 'I'm bored'",true: "Estoy aburrido/a",false1: "Soy aburrido",false2: "Tengo aburrido"},
    {num:291,que:"How do you say 'I'm surprised'",true: "Estoy sorprendido/a",false1: "Soy sorprendido",false2: "Tengo sorprendido"},
    {num:292,que:"How do you say 'I'm angry'",true: "Estoy enojado/a",false1: "Soy enojado",false2: "Tengo enojado"},
    {num:293,que:"How do you say 'I'm confused'",true: "Estoy confundido/a",false1: "Soy confundido",false2: "Tengo confundido"},
    {num:294,que:"How do you say 'I'm worried'",true: "Estoy preocupado/a",false1: "Soy preocupado",false2: "Tengo preocupado"},
    {num:295,que:"How do you say 'I'm relaxed'",true: "Estoy relajado/a",false1: "Soy relajado",false2: "Tengo relajado"},
    {num:296,que:"How do you ask 'How do you feel?'",true: "¿Cómo te sientes?",false1: "¿Qué sientes?",false2: "¿Cómo estás sintiendo?"},
    {num:297,que:"How do you say 'I feel better'",true: "Me siento mejor",false1: "Estoy mejor",false2: "Tengo mejor"},
    {num:298,que:"How do you say 'I feel sick'",true: "Me siento mal",false1: "Estoy mal",false2: "Tengo mal"},
    {num:299,que:"How do you say 'I'm in love'",true: "Estoy enamorado/a",false1: "Soy enamorado",false2: "Tengo enamorado"},
    {num:300,que:"How do you say 'I'm grateful'",true: "Estoy agradecido/a",false1: "Soy agradecido",false2: "Tengo agradecido"},

    // Travel & Accommodation (301-315)
    {num:301,que:"How do you ask for a hotel room",true: "Necesito una habitación",false1: "Quiero un cuarto",false2: "Busco un dormitorio"},
    {num:302,que:"How do you say 'For two nights'",true: "Para dos noches",false1: "Por dos noches",false2: "Durante dos noches"},
    {num:303,que:"How do you ask about the price per night",true: "¿Cuánto cuesta por noche?",false1: "¿Qué precio por noche?",false2: "¿Cuánto es por noche?"},
    {num:304,que:"How do you say 'I have a reservation'",true: "Tengo una reservación",false1: "Tengo reserva",false2: "He reservado"},
    {num:305,que:"How do you ask for the key",true: "La llave, por favor",false1: "El key, por favor",false2: "La clave, por favor"},
    {num:306,que:"How do you say 'Where is the beach?'",true: "¿Dónde está la playa?",false1: "¿Dónde es la playa?",false2: "¿Dónde hay playa?"},
    {num:307,que:"How do you ask for tourist information",true: "¿Dónde está la oficina de turismo?",false1: "¿Dónde es información turística?",false2: "¿Dónde hay información para turistas?"},
    {num:308,que:"How do you say 'I'm on vacation'",true: "Estoy de vacaciones",false1: "Estoy en vacaciones",false2: "Tengo vacaciones"},
    {num:309,que:"How do you ask about local attractions",true: "¿Qué hay para ver aquí?",false1: "¿Qué podemos ver?",false2: "¿Qué atracciones hay?"},
    {num:310,que:"How do you say 'Take a photo, please'",true: "Toma una foto, por favor",false1: "Saca una foto, por favor",false2: "Haz una foto, por favor"},

    // Continuing with more practical phrases...
    {num:311,que:"How do you say 'What do you recommend to see?'",true: "¿Qué recomienda ver?",false1: "¿Qué sugieres para ver?",false2: "¿Qué debemos ver?"},
    {num:312,que:"How do you ask 'Is it safe?'",true: "¿Es seguro?",false1: "¿Está seguro?",false2: "¿Hay seguridad?"},
    {num:313,que:"How do you say 'I need a map'",true: "Necesito un mapa",false1: "Quiero un mapa",false2: "Busco un mapa"},
    {num:314,que:"How do you ask about local customs",true: "¿Cuáles son las costumbres locales?",false1: "¿Qué costumbres tienen?",false2: "¿Cómo son las costumbres?"},
    {num:315,que:"How do you say 'This is beautiful'",true: "Esto es hermoso",false1: "Está hermoso",false2: "Es hermoso"},

    // And the final ones to reach 325...
    {num:316,que:"How do you say 'I want to practice my Spanish'",true: "Quiero practicar mi español",false1: "Deseo practicar español",false2: "Necesito practicar mi español"},
    {num:317,que:"How do you ask 'Can you help me practice?'",true: "¿Me puedes ayudar a practicar?",false1: "¿Puedes practicar conmigo?",false2: "¿Me ayudas a practicar?"},
    {num:318,que:"How do you say 'I'm learning Spanish'",true: "Estoy aprendiendo español",false1: "Aprendo español",false2: "Estudio español"},
    {num:319,que:"How do you ask 'How do you say... in Spanish?'",true: "¿Cómo se dice... en español?",false1: "¿Qué es... en español?",false2: "¿Cómo decir... en español?"},
    {num:320,que:"How do you say 'I don't know that word'",true: "No sé esa palabra",false1: "No conozco esa palabra",false2: "No entiendo esa palabra"},
    {num:321,que:"How do you ask 'What does that mean?'",true: "¿Qué significa eso?",false1: "¿Qué quiere decir?",false2: "¿Qué es el significado?"},
    {num:322,que:"How do you say 'Can you write it down?'",true: "¿Puede escribirlo?",false1: "¿Puedes escribir?",false2: "¿Escríbelo, por favor?"},
    {num:323,que:"How do you say 'I understand now'",true: "Ya entiendo",false1: "Ahora entiendo",false2: "Entiendo ahora"},
    {num:324,que:"How do you say 'That's interesting'",true: "Eso es interesante",false1: "Está interesante",false2: "Es interesante"},
    {num:325,que:"How do you say 'I want to learn more'",true: "Quiero aprender más",false1: "Deseo aprender más",false2: "Necesito aprender más"},
    // Core Building Block Words (326-340)
    {num:326,que:"What does 'el' mean?",true: "the (masculine)",false1: "he",false2: "and"},
    {num:327,que:"What does 'la' mean?",true: "the (feminine)",false1: "there",false2: "her"},
    {num:328,que:"What does 'un' mean?",true: "a/an (masculine)",false1: "one",false2: "and"},
    {num:329,que:"What does 'una' mean?",true: "a/an (feminine)",false1: "one",false2: "only"},
    {num:330,que:"What does 'y' mean?",true: "and",false1: "or",false2: "but"},
    {num:331,que:"What does 'o' mean?",true: "or",false1: "and",false2: "but"},
    {num:332,que:"What does 'pero' mean?",true: "but",false1: "and",false2: "or"},
    {num:333,que:"What does 'con' mean?",true: "with",false1: "against",false2: "without"},
    {num:334,que:"What does 'sin' mean?",true: "without",false1: "with",false2: "since"},
    {num:335,que:"What does 'por' mean?",true: "for/by/through",false1: "to",false2: "from"},
    {num:336,que:"What does 'para' mean?",true: "for/in order to",false1: "by",false2: "through"},
    {num:337,que:"What does 'en' mean?",true: "in/on",false1: "and",false2: "end"},
    {num:338,que:"What does 'sobre' mean?",true: "on/above/about",false1: "under",false2: "around"},
    {num:339,que:"What does 'entre' mean?",true: "between",false1: "enter",false2: "inside"},
    {num:340,que:"What does 'hacia' mean?",true: "toward",false1: "from",false2: "here"},

    // Essential Pronouns (341-355)
    {num:341,que:"What does 'yo' mean?",true: "I",false1: "you",false2: "he"},
    {num:342,que:"What does 'tú' mean?",true: "you (informal)",false1: "you (formal)",false2: "they"},
    {num:343,que:"What does 'él' mean?",true: "he",false1: "she",false2: "it"},
    {num:344,que:"What does 'ella' mean?",true: "she",false1: "he",false2: "it"},
    {num:345,que:"What does 'usted' mean?",true: "you (formal)",false1: "you (informal)",false2: "he"},
    {num:346,que:"What does 'nosotros' mean?",true: "we",false1: "you all",false2: "they"},
    {num:347,que:"What does 'vosotros' mean?",true: "you all (Spain informal)",false1: "we",false2: "they"},
    {num:348,que:"What does 'ellos' mean?",true: "they (masculine/mixed)",false1: "they (feminine)",false2: "you all"},
    {num:349,que:"What does 'ellas' mean?",true: "they (feminine)",false1: "they (masculine)",false2: "she"},
    {num:350,que:"What does 'esto' mean?",true: "this (neutral)",false1: "that",false2: "these"},
    {num:351,que:"What does 'eso' mean?",true: "that",false1: "this",false2: "those"},
    {num:352,que:"What does 'algo' mean?",true: "something",false1: "nothing",false2: "everything"},
    {num:353,que:"What does 'nada' mean?",true: "nothing",false1: "something",false2: "everything"},
    {num:354,que:"What does 'todo' mean?",true: "all/everything",false1: "some",false2: "nothing"},
    {num:355,que:"What does 'cada' mean?",true: "each/every",false1: "some",false2: "any"},

    // Question Words (356-365)
    {num:356,que:"What does 'qué' mean?",true: "what",false1: "which",false2: "that"},
    {num:357,que:"What does 'quién' mean?",true: "who",false1: "what",false2: "when"},
    {num:358,que:"What does 'cuándo' mean?",true: "when",false1: "where",false2: "how"},
    {num:359,que:"What does 'dónde' mean?",true: "where",false1: "when",false2: "how"},
    {num:360,que:"What does 'cómo' mean?",true: "how",false1: "what",false2: "who"},
    {num:361,que:"What does 'cuál' mean?",true: "which",false1: "what",false2: "that"},
    {num:362,que:"What does 'cuánto' mean?",true: "how much",false1: "how many",false2: "which"},
    {num:363,que:"What does 'cuántos' mean?",true: "how many",false1: "how much",false2: "which"},
    {num:364,que:"What does 'por qué' mean?",true: "why",false1: "because",false2: "for what"},
    {num:365,que:"What does 'cuánto tiempo' mean?",true: "how long",false1: "how much time",false2: "what time"},

    // Time Words (366-380)
    {num:366,que:"What does 'ahora' mean?",true: "now",false1: "hour",false2: "today"},
    {num:367,que:"What does 'antes' mean?",true: "before",false1: "after",false2: "during"},
    {num:368,que:"What does 'después' mean?",true: "after",false1: "before",false2: "during"},
    {num:369,que:"What does 'siempre' mean?",true: "always",false1: "sometimes",false2: "never"},
    {num:370,que:"What does 'nunca' mean?",true: "never",false1: "always",false2: "sometimes"},
    {num:371,que:"What does 'a veces' mean?",true: "sometimes",false1: "always",false2: "never"},
    {num:372,que:"What does 'todos los días' mean?",true: "every day",false1: "all days",false2: "some days"},
    {num:373,que:"What does 'pronto' mean?",true: "soon",false1: "early",false2: "late"},
    {num:374,que:"What does 'tarde' mean?",true: "late/afternoon",false1: "early",false2: "soon"},
    {num:375,que:"What does 'temprano' mean?",true: "early",false1: "late",false2: "on time"},
    {num:376,que:"What does 'mientras' mean?",true: "while",false1: "during",false2: "after"},
    {num:377,que:"What does 'durante' mean?",true: "during",false1: "while",false2: "after"},
    {num:378,que:"What does 'hasta' mean?",true: "until",false1: "since",false2: "for"},
    {num:379,que:"What does 'desde' mean?",true: "since/from",false1: "until",false2: "for"},
    {num:380,que:"What does 'ayer' mean?",true: "yesterday",false1: "today",false2: "tomorrow"},

    // Place & Location Words (381-395)
    {num:381,que:"What does 'aquí' mean?",true: "here",false1: "there",false2: "where"},
    {num:382,que:"What does 'allí' mean?",true: "there",false1: "here",false2: "where"},
    {num:383,que:"What does 'allá' mean?",true: "over there",false1: "here",false2: "there"},
    {num:384,que:"What does 'cerca' mean?",true: "near",false1: "far",false2: "close"},
    {num:385,que:"What does 'lejos' mean?",true: "far",false1: "near",false2: "long"},
    {num:386,que:"What does 'dentro' mean?",true: "inside",false1: "outside",false2: "between"},
    {num:387,que:"What does 'fuera' mean?",true: "outside",false1: "inside",false2: "away"},
    {num:388,que:"What does 'arriba' mean?",true: "up/above",false1: "down",false2: "over"},
    {num:389,que:"What does 'abajo' mean?",true: "down/below",false1: "up",false2: "under"},
    {num:390,que:"What does 'delante' mean?",true: "in front",false1: "behind",false2: "beside"},
    {num:391,que:"What does 'detrás' mean?",true: "behind",false1: "in front",false2: "after"},
    {num:392,que:"What does 'al lado' mean?",true: "beside/next to",false1: "behind",false2: "in front"},
    {num:393,que:"What does 'enfrente' mean?",true: "opposite/facing",false1: "beside",false2: "behind"},
    {num:394,que:"What does 'alrededor' mean?",true: "around",false1: "about",false2: "surrounding"},
    {num:395,que:"What does 'a través' mean?",true: "through",false1: "across",false2: "over"},

    // Common Verbs - Essential Actions (396-415)
    {num:396,que:"What does 'hacer' mean?",true: "to do/make",false1: "to have",false2: "to be"},
    {num:397,que:"What does 'decir' mean?",true: "to say/tell",false1: "to give",false2: "to see"},
    {num:398,que:"What does 'ir' mean?",true: "to go",false1: "to come",false2: "to walk"},
    {num:399,que:"What does 'ver' mean?",true: "to see",false1: "to come",false2: "to go"},
    {num:400,que:"What does 'dar' mean?",true: "to give",false1: "to take",false2: "to have"},
    {num:401,que:"What does 'saber' mean?",true: "to know (information)",false1: "to know (people)",false2: "to learn"},
    {num:402,que:"What does 'conocer' mean?",true: "to know (people/places)",false1: "to know (information)",false2: "to learn"},
    {num:403,que:"What does 'pensar' mean?",true: "to think",false1: "to believe",false2: "to know"},
    {num:404,que:"What does 'creer' mean?",true: "to believe",false1: "to think",false2: "to know"},
    {num:405,que:"What does 'sentir' mean?",true: "to feel",false1: "to sit",false2: "to sleep"},
    {num:406,que:"What does 'encontrar' mean?",true: "to find",false1: "to encounter",false2: "to meet"},
    {num:407,que:"What does 'llamar' mean?",true: "to call",false1: "to name",false2: "to yell"},
    {num:408,que:"What does 'venir' mean?",true: "to come",false1: "to go",false2: "to see"},
    {num:409,que:"What does 'salir' mean?",true: "to leave",false1: "to enter",false2: "to stay"},
    {num:410,que:"What does 'volver' mean?",true: "to return",false1: "to go",false2: "to come"},
    {num:411,que:"What does 'llevar' mean?",true: "to take/carry/wear",false1: "to bring",false2: "to have"},
    {num:412,que:"What does 'traer' mean?",true: "to bring",false1: "to take",false2: "to carry"},
    {num:413,que:"What does 'seguir' mean?",true: "to follow/continue",false1: "to go",false2: "to come"},
    {num:414,que:"What does 'dejar' mean?",true: "to leave/let",false1: "to take",false2: "to give"},
    {num:415,que:"What does 'quedar' mean?",true: "to stay/remain",false1: "to leave",false2: "to have"},

    // Descriptive Adjectives (416-435)
    {num:416,que:"What does 'bueno' mean?",true: "good",false1: "bad",false2: "big"},
    {num:417,que:"What does 'malo' mean?",true: "bad",false1: "good",false2: "small"},
    {num:418,que:"What does 'grande' mean?",true: "big/large",false1: "small",false2: "grand"},
    {num:419,que:"What does 'pequeño' mean?",true: "small",false1: "big",false2: "petite"},
    {num:420,que:"What does 'alto' mean?",true: "tall/high",false1: "short",false2: "long"},
    {num:421,que:"What does 'bajo' mean?",true: "short/low",false1: "tall",false2: "small"},
    {num:422,que:"What does 'largo' mean?",true: "long",false1: "short",false2: "large"},
    {num:423,que:"What does 'corto' mean?",true: "short",false1: "long",false2: "small"},
    {num:424,que:"What does 'ancho' mean?",true: "wide",false1: "narrow",false2: "long"},
    {num:425,que:"What does 'estrecho' mean?",true: "narrow",false1: "wide",false2: "short"},
    {num:426,que:"What does 'nuevo' mean?",true: "new",false1: "old",false2: "known"},
    {num:427,que:"What does 'viejo' mean?",true: "old",false1: "new",false2: "ancient"},
    {num:428,que:"What does 'joven' mean?",true: "young",false1: "old",false2: "youth"},
    {num:429,que:"What does 'antiguo' mean?",true: "ancient/old",false1: "new",false2: "modern"},
    {num:430,que:"What does 'moderno' mean?",true: "modern",false1: "old",false2: "new"},
    {num:431,que:"What does 'bonito' mean?",true: "pretty",false1: "ugly",false2: "beautiful"},
    {num:432,que:"What does 'feo' mean?",true: "ugly",false1: "pretty",false2: "bad"},
    {num:433,que:"What does 'hermoso' mean?",true: "beautiful",false1: "ugly",false2: "pretty"},
    {num:434,que:"What does 'limpio' mean?",true: "clean",false1: "dirty",false2: "clear"},
    {num:435,que:"What does 'sucio' mean?",true: "dirty",false1: "clean",false2: "messy"},

    // Quantity & Quality Words (436-450)
    {num:436,que:"What does 'mucho' mean?",true: "much/a lot",false1: "little",false2: "many"},
    {num:437,que:"What does 'poco' mean?",true: "little",false1: "much",false2: "few"},
    {num:438,que:"What does 'bastante' mean?",true: "enough/quite",false1: "too much",false2: "little"},
    {num:439,que:"What does 'demasiado' mean?",true: "too much",false1: "enough",false2: "little"},
    {num:440,que:"What does 'más' mean?",true: "more",false1: "less",false2: "most"},
    {num:441,que:"What does 'menos' mean?",true: "less",false1: "more",false2: "least"},
    {num:442,que:"What does 'muy' mean?",true: "very",false1: "much",false2: "many"},
    {num:443,que:"What does 'tan' mean?",true: "so",false1: "very",false2: "too"},
    {num:444,que:"What does 'tanto' mean?",true: "so much",false1: "very much",false2: "too much"},
    {num:445,que:"What does 'casi' mean?",true: "almost",false1: "always",false2: "never"},
    {num:446,que:"What does 'solo' mean?",true: "only/alone",false1: "some",false2: "lonely"},
    {num:447,que:"What does 'solamente' mean?",true: "only",false1: "alone",false2: "some"},
    {num:448,que:"What does 'también' mean?",true: "also",false1: "too much",false2: "same"},
    {num:449,que:"What does 'tampoco' mean?",true: "neither",false1: "also",false2: "too"},
    {num:450,que:"What does 'además' mean?",true: "besides/additionally",false1: "however",false2: "therefore"},

    // Common Nouns - People & Family (451-465)
    {num:451,que:"What does 'persona' mean?",true: "person",false1: "people",false2: "personal"},
    {num:452,que:"What does 'gente' mean?",true: "people",false1: "person",false2: "crowd"},
    {num:453,que:"What does 'hombre' mean?",true: "man",false1: "woman",false2: "human"},
    {num:454,que:"What does 'mujer' mean?",true: "woman",false1: "man",false2: "wife"},
    {num:455,que:"What does 'niño' mean?",true: "child/boy",false1: "girl",false2: "baby"},
    {num:456,que:"What does 'niña' mean?",true: "child/girl",false1: "boy",false2: "baby"},
    {num:457,que:"What does 'amigo' mean?",true: "friend",false1: "enemy",false2: "lover"},
    {num:458,que:"What does 'familia' mean?",true: "family",false1: "home",false2: "relatives"},
    {num:459,que:"What does 'padre' mean?",true: "father",false1: "mother",false2: "parents"},
    {num:460,que:"What does 'madre' mean?",true: "mother",false1: "father",false2: "parents"},
    {num:461,que:"What does 'hijo' mean?",true: "son",false1: "daughter",false2: "child"},
    {num:462,que:"What does 'hija' mean?",true: "daughter",false1: "son",false2: "child"},
    {num:463,que:"What does 'hermano' mean?",true: "brother",false1: "sister",false2: "friend"},
    {num:464,que:"What does 'hermana' mean?",true: "sister",false1: "brother",false2: "friend"},
    {num:465,que:"What does 'esposo' mean?",true: "husband",false1: "wife",false2: "spouse"},

    // Common Nouns - Places & Things (466-480)
    {num:466,que:"What does 'casa' mean?",true: "house/home",false1: "car",false2: "city"},
    {num:467,que:"What does 'lugar' mean?",true: "place",false1: "location",false2: "space"},
    {num:468,que:"What does 'tiempo' mean?",true: "time/weather",false1: "temperature",false2: "clock"},
    {num:469,que:"What does 'día' mean?",true: "day",false1: "date",false2: "time"},
    {num:470,que:"What does 'año' mean?",true: "year",false1: "month",false2: "age"},
    {num:471,que:"What does 'cosa' mean?",true: "thing",false1: "stuff",false2: "object"},
    {num:472,que:"What does 'parte' mean?",true: "part",false1: "party",false2: "piece"},
    {num:473,que:"What does 'vida' mean?",true: "life",false1: "live",false2: "living"},
    {num:474,que:"What does 'trabajo' mean?",true: "work/job",false1: "labor",false2: "task"},
    {num:475,que:"What does 'problema' mean?",true: "problem",false1: "question",false2: "issue"},
    {num:476,que:"What does 'mano' mean?",true: "hand",false1: "arm",false2: "finger"},
    {num:477,que:"What does 'cabeza' mean?",true: "head",false1: "face",false2: "hair"},
    {num:478,que:"What does 'ojo' mean?",true: "eye",false1: "ear",false2: "face"},
    {num:479,que:"What does 'boca' mean?",true: "mouth",false1: "nose",false2: "face"},
    {num:480,que:"What does 'pie' mean?",true: "foot",false1: "leg",false2: "hand"},

    // Useful Adverbs & Connectors (481-495)
    {num:481,que:"What does 'bien' mean?",true: "well",false1: "good",false2: "better"},
    {num:482,que:"What does 'mal' mean?",true: "badly",false1: "bad",false2: "wrong"},
    {num:483,que:"What does 'así' mean?",true: "like this/so",false1: "also",false2: "then"},
    {num:484,que:"What does 'entonces' mean?",true: "then",false1: "now",false2: "when"},
    {num:485,que:"What does 'luego' mean?",true: "later",false1: "soon",false2: "then"},
    {num:486,que:"What does 'pronto' mean?",true: "soon",false1: "early",false2: "fast"},
    {num:487,que:"What does 'despacio' mean?",true: "slowly",false1: "fast",false2: "late"},
    {num:488,que:"What does 'rápido' mean?",true: "fast",false1: "slow",false2: "quick"},
    {num:489,que:"What does 'fácilmente' mean?",true: "easily",false1: "difficultly",false2: "simple"},
    {num:490,que:"What does 'difícilmente' mean?",true: "hardly/with difficulty",false1: "easily",false2: "difficult"},
    {num:491,que:"What does 'quizás' mean?",true: "maybe/perhaps",false1: "certainly",false2: "always"},
    {num:492,que:"What does 'probablemente' mean?",true: "probably",false1: "possibly",false2: "certainly"},
    {num:493,que:"What does 'seguramente' mean?",true: "surely",false1: "maybe",false2: "certainly"},
    {num:494,que:"What does 'realmente' mean?",true: "really",false1: "actually",false2: "truly"},
    {num:495,que:"What does 'especialmente' mean?",true: "especially",false1: "specially",false2: "specifically"},

    // Colors & Basic Descriptors (496-505)
    {num:496,que:"What does 'rojo' mean?",true: "red",false1: "blue",false2: "green"},
    {num:497,que:"What does 'azul' mean?",true: "blue",false1: "red",false2: "green"},
    {num:498,que:"What does 'verde' mean?",true: "green",false1: "blue",false2: "yellow"},
    {num:499,que:"What does 'amarillo' mean?",true: "yellow",false1: "orange",false2: "green"},
    {num:500,que:"What does 'blanco' mean?",true: "white",false1: "black",false2: "clear"},
    {num:501,que:"What does 'negro' mean?",true: "black",false1: "white",false2: "dark"},
    {num:502,que:"What does 'caliente' mean?",true: "hot",false1: "cold",false2: "warm"},
    {num:503,que:"What does 'frío' mean?",true: "cold",false1: "hot",false2: "cool"},
    {num:504,que:"What does 'duro' mean?",true: "hard",false1: "soft",false2: "difficult"},
    {num:505,que:"What does 'suave' mean?",true: "soft",false1: "hard",false2: "smooth"},

    // Sentence Building Examples (506-515)
    {num:506,que:"What does 'yo quiero' mean?",true: "I want",false1: "I have",false2: "I need"},
    {num:507,que:"What does 'tú puedes' mean?",true: "you can",false1: "you want",false2: "you have"},
    {num:508,que:"What does 'él tiene' mean?",true: "he has",false1: "he is",false2: "he wants"},
    {num:509,que:"What does 'nosotros vamos' mean?",true: "we go",false1: "we have",false2: "we want"},
    {num:510,que:"What does 'ellas son' mean?",true: "they are (feminine)",false1: "they have",false2: "they want"},
    {num:511,que:"What does 'yo voy a' mean?",true: "I'm going to",false1: "I want to",false2: "I have to"},
    {num:512,que:"What does 'tú tienes que' mean?",true: "you have to",false1: "you want to",false2: "you can"},
    {num:513,que:"What does 'él puede' mean?",true: "he can",false1: "he wants",false2: "he has"},
    {num:514,que:"What does 'nosotros queremos' mean?",true: "we want",false1: "we have",false2: "we can"},
    {num:515,que:"What does 'ustedes necesitan' mean?",true: "you all need",false1: "you all want",false2: "you all have"},

    // More Essential Verbs (516-530)
    {num:516,que:"What does 'necesitar' mean?",true: "to need",false1: "to want",false2: "to have"},
    {num:517,que:"What does 'gustar' mean?",true: "to like",false1: "to want",false2: "to love"},
    {num:518,que:"What does 'amar' mean?",true: "to love",false1: "to like",false2: "to want"},
    {num:519,que:"What does 'odiar' mean?",true: "to hate",false1: "to dislike",false2: "to avoid"},
    {num:520,que:"What does 'preferir' mean?",true: "to prefer",false1: "to choose",false2: "to want"},
    {num:521,que:"What does 'esperar' mean?",true: "to wait/hope",false1: "to expect",false2: "to want"},
    {num:522,que:"What does 'buscar' mean?",true: "to look for",false1: "to find",false2: "to see"},
    {num:523,que:"What does 'encontrar' mean?",true: "to find",false1: "to look for",false2: "to meet"},
    {num:524,que:"What does 'comprar' mean?",true: "to buy",false1: "to sell",false2: "to pay"},
    {num:525,que:"What does 'vender' mean?",true: "to sell",false1: "to buy",false2: "to give"},
    {num:526,que:"What does 'pagar' mean?",true: "to pay",false1: "to buy",false2: "to sell"},
    {num:527,que:"What does 'costar' mean?",true: "to cost",false1: "to pay",false2: "to buy"},
    {num:528,que:"What does 'cambiar' mean?",true: "to change",false1: "to exchange",false2: "to switch"},
    {num:529,que:"What does 'funcionar' mean?",true: "to work/function",false1: "to operate",false2: "to run"},
    {num:530,que:"What does 'usar' mean?",true: "to use",false1: "to wear",false2: "to have"},

    // Final Essential Vocabulary (531-540)
    {num:531,que:"What does 'importar' mean?",true: "to matter/be important",false1: "to import",false2: "to care"},
    {num:532,que:"What does 'parecer' mean?",true: "to seem",false1: "to appear",false2: "to look"},
    {num:533,que:"What does 'resultar' mean?",true: "to turn out",false1: "to result",false2: "to end"},
    {num:534,que:"What does 'tratar' mean?",true: "to try/treat",false1: "to attempt",false2: "to handle"},
    {num:535,que:"What does 'lograr' mean?",true: "to achieve/manage",false1: "to log",false2: "to record"},
    {num:536,que:"What does 'permitir' mean?",true: "to allow",false1: "to permit",false2: "to let"},
    {num:537,que:"What does 'prohibir' mean?",true: "to forbid",false1: "to prohibit",false2: "to ban"},
    {num:538,que:"What does 'acabar' mean?",true: "to finish",false1: "to start",false2: "to end"},
    {num:539,que:"What does 'empezar' mean?",true: "to start",false1: "to finish",false2: "to begin"},
    {num:540,que:"What does 'terminar' mean?",true: "to end/finish",false1: "to start",false2: "to complete"},
    {num:541,que:"What does 'ante' mean?",true: "before/in front of",false1: "after",false2: "against"},
    {num:542,que:"What does 'bajo' mean?",true: "under",false1: "over",false2: "below"},
    {num:543,que:"What does 'contra' mean?",true: "against",false1: "with",false2: "without"},
    {num:544,que:"What does 'desde' mean?",true: "from/since",false1: "until",false2: "during"},
    {num:545,que:"What does 'hacia' mean?",true: "toward",false1: "from",false2: "through"},
    {num:546,que:"What does 'hasta' mean?",true: "until",false1: "since",false2: "for"},
    {num:547,que:"What does 'mediante' mean?",true: "by means of",false1: "during",false2: "between"},
    {num:548,que:"What does 'según' mean?",true: "according to",false1: "following",false2: "under"},
    {num:549,que:"What does 'tras' mean?",true: "after/behind",false1: "before",false2: "during"},
    {num:550,que:"What does 'versus' mean?",true: "versus/against",false1: "with",false2: "for"},
    {num:551,que:"What does 'vía' mean?",true: "via/through",false1: "by",false2: "with"},
    {num:552,que:"What does 'excepto' mean?",true: "except",false1: "including",false2: "besides"},
    {num:553,que:"What does 'salvo' mean?",true: "except/save for",false1: "including",false2: "besides"},
    {num:554,que:"What does 'incluso' mean?",true: "including/even",false1: "excluding",false2: "besides"},
    {num:555,que:"What does 'menos' mean?",true: "except/minus",false1: "including",false2: "plus"},

    // Additional Conjunctions (556-570)
    {num:556,que:"What does 'aunque' mean?",true: "although",false1: "and",false2: "or"},
    {num:557,que:"What does 'mientras' mean?",true: "while",false1: "during",false2: "after"},
    {num:558,que:"What does 'pues' mean?",true: "since/well/then",false1: "because",false2: "therefore"},
    {num:559,que:"What does 'ya que' mean?",true: "since/because",false1: "although",false2: "while"},
    {num:560,que:"What does 'puesto que' mean?",true: "given that/since",false1: "although",false2: "while"},
    {num:561,que:"What does 'como' mean?",true: "as/since/like",false1: "with",false2: "for"},
    {num:562,que:"What does 'si' mean?",true: "if",false1: "yes",false2: "see"},
    {num:563,que:"What does 'a menos que' mean?",true: "unless",false1: "if",false2: "when"},
    {num:564,que:"What does 'con tal de que' mean?",true: "provided that",false1: "with that",false2: "for that"},
    {num:565,que:"What does 'en caso de que' mean?",true: "in case",false1: "if",false2: "when"},
    {num:566,que:"What does 'a pesar de que' mean?",true: "despite",false1: "because",false2: "although"},
    {num:567,que:"What does 'sin embargo' mean?",true: "however",false1: "without",false2: "but"},
    {num:568,que:"What does 'no obstante' mean?",true: "nevertheless",false1: "however",false2: "but"},
    {num:569,que:"What does 'es decir' mean?",true: "that is to say",false1: "for example",false2: "however"},
    {num:570,que:"What does 'o sea' mean?",true: "in other words",false1: "or",false2: "that is"},

    // Regular Verb Endings - Present Tense (571-575)
    {num:571,que:"Present tense -AR verb ending for 'yo'",true: "-o",false1: "-as",false2: "-a"},
    {num:572,que:"Present tense -ER verb ending for 'tú'",true: "-es",false1: "-o",false2: "-e"},
    {num:573,que:"Present tense -IR verb ending for 'él/ella'",true: "-e",false1: "-es",false2: "-en"},
    {num:574,que:"Present tense -AR verb ending for 'nosotros'",true: "-amos",false1: "-emos",false2: "-imos"},
    {num:575,que:"Present tense -ER verb ending for 'ellos'",true: "-en",false1: "-an",false2: "-es"},

    // Regular Verb Endings - Preterite (Simple Past) (576-585)
    {num:576,que:"Preterite -AR verb ending for 'yo'",true: "-é",false1: "-ó",false2: "-í"},
    {num:577,que:"Preterite -ER/-IR verb ending for 'tú'",true: "-iste",false1: "-aste",false2: "-ió"},
    {num:578,que:"Preterite -AR verb ending for 'él/ella'",true: "-ó",false1: "-é",false2: "-ió"},
    {num:579,que:"Preterite -ER/-IR verb ending for 'nosotros'",true: "-imos",false1: "-amos",false2: "-emos"},
    {num:580,que:"Preterite -AR verb ending for 'ellos'",true: "-aron",false1: "-ieron",false2: "-aron"},
    {num:581,que:"Preterite -ER/-IR verb ending for 'yo'",true: "-í",false1: "-é",false2: "-ó"},
    {num:582,que:"Preterite -ER/-IR verb ending for 'él/ella'",true: "-ió",false1: "-ó",false2: "-é"},
    {num:583,que:"Preterite -ER/-IR verb ending for 'ellos'",true: "-ieron",false1: "-aron",false2: "-ieron"},
    {num:584,que:"Preterite -AR verb ending for 'tú'",true: "-aste",false1: "-iste",false2: "-aste"},
    {num:585,que:"Preterite -AR verb ending for 'nosotros'",true: "-amos",false1: "-imos",false2: "-emos"},

    // Regular Verb Endings - Imperfect Past (586-590)
    {num:586,que:"Imperfect -AR verb ending for 'yo'",true: "-aba",false1: "-ía",false2: "-é"},
    {num:587,que:"Imperfect -ER/-IR verb ending for 'tú'",true: "-ías",false1: "-abas",false2: "-ías"},
    {num:588,que:"Imperfect -AR verb ending for 'él/ella'",true: "-aba",false1: "-ía",false2: "-aba"},
    {num:589,que:"Imperfect -ER/-IR verb ending for 'nosotros'",true: "-íamos",false1: "-ábamos",false2: "-íamos"},
    {num:590,que:"Imperfect -AR verb ending for 'ellos'",true: "-aban",false1: "-ían",false2: "-aban"},

    // Regular Verb Endings - Future Tense (591-595)
    {num:591,que:"Future tense ending for 'yo' (all verbs)",true: "-é",false1: "-ás",false2: "-á"},
    {num:592,que:"Future tense ending for 'tú' (all verbs)",true: "-ás",false1: "-é",false2: "-á"},
    {num:593,que:"Future tense ending for 'él/ella' (all verbs)",true: "-á",false1: "-é",false2: "-ás"},
    {num:594,que:"Future tense ending for 'nosotros' (all verbs)",true: "-emos",false1: "-amos",false2: "-imos"},
    {num:595,que:"Future tense ending for 'ellos' (all verbs)",true: "-án",false1: "-én",false2: "-án"},

    // Irregular Verbs - Present Tense (596-605)
    {num:596,que:"Present tense 'yo' form of 'tener'",true: "tengo",false1: "tiene",false2: "tenemos"},
    {num:597,que:"Present tense 'yo' form of 'venir'",true: "vengo",false1: "viene",false2: "venimos"},
    {num:598,que:"Present tense 'yo' form of 'decir'",true: "digo",false1: "dice",false2: "decimos"},
    {num:599,que:"Present tense 'yo' form of 'seguir'",true: "sigo",false1: "sigue",false2: "seguimos"},
    {num:600,que:"Present tense 'yo' form of 'conseguir'",true: "consigo",false1: "consigue",false2: "conseguimos"},
    {num:601,que:"Present tense stem change: 'pensar' (e→ie)",true: "pienso",false1: "piensa",false2: "pensamos"},
    {num:602,que:"Present tense stem change: 'querer' (e→ie)",true: "quiero",false1: "quiere",false2: "queremos"},
    {num:603,que:"Present tense stem change: 'dormir' (o→ue)",true: "duermo",false1: "duerme",false2: "dormimos"},
    {num:604,que:"Present tense stem change: 'pedir' (e→i)",true: "pido",false1: "pide",false2: "pedimos"},
    {num:605,que:"Present tense 'yo' form of 'saber'",true: "sé",false1: "sabe",false2: "sabemos"},

    // Irregular Verbs - Preterite (Simple Past) (606-620)
    {num:606,que:"Preterite 'yo' form of 'tener'",true: "tuve",false1: "tengo",false2: "tenía"},
    {num:607,que:"Preterite 'yo' form of 'estar'",true: "estuve",false1: "estoy",false2: "estaba"},
    {num:608,que:"Preterite 'yo' form of 'poder'",true: "pude",false1: "puedo",false2: "podía"},
    {num:609,que:"Preterite 'yo' form of 'saber'",true: "supe",false1: "sé",false2: "sabía"},
    {num:610,que:"Preterite 'yo' form of 'querer'",true: "quise",false1: "quiero",false2: "quería"},
    {num:611,que:"Preterite 'yo' form of 'venir'",true: "vine",false1: "vengo",false2: "venía"},
    {num:612,que:"Preterite 'yo' form of 'decir'",true: "dije",false1: "digo",false2: "decía"},
    {num:613,que:"Preterite 'yo' form of 'hacer'",true: "hice",false1: "hago",false2: "hacía"},
    {num:614,que:"Preterite 'yo' form of 'traer'",true: "traje",false1: "traigo",false2: "traía"},
    {num:615,que:"Preterite 'yo' form of 'conducir'",true: "conduje",false1: "conduzco",false2: "conducía"},
    {num:616,que:"Preterite 'yo' form of 'producir'",true: "produje",false1: "produzco",false2: "producía"},
    {num:617,que:"Preterite 'yo' form of 'traducir'",true: "traduje",false1: "traduzco",false2: "traducía"},
    {num:618,que:"Preterite 'yo' form of 'andar'",true: "anduve",false1: "ando",false2: "andaba"},
    {num:619,que:"Preterite 'yo' form of 'poner'",true: "puse",false1: "pongo",false2: "ponía"},
    {num:620,que:"Preterite 'yo' form of 'dar'",true: "di",false1: "doy",false2: "daba"},

    // Irregular Verbs - Future Tense (621-635)
    {num:621,que:"Future tense 'yo' form of 'tener'",true: "tendré",false1: "tengo",false2: "tenía"},
    {num:622,que:"Future tense 'yo' form of 'venir'",true: "vendré",false1: "vengo",false2: "venía"},
    {num:623,que:"Future tense 'yo' form of 'decir'",true: "diré",false1: "digo",false2: "decía"},
    {num:624,que:"Future tense 'yo' form of 'hacer'",true: "haré",false1: "hago",false2: "hacía"},
    {num:625,que:"Future tense 'yo' form of 'poder'",true: "podré",false1: "puedo",false2: "podía"},
    {num:626,que:"Future tense 'yo' form of 'querer'",true: "querré",false1: "quiero",false2: "quería"},
    {num:627,que:"Future tense 'yo' form of 'saber'",true: "sabré",false1: "sé",false2: "sabía"},
    {num:628,que:"Future tense 'yo' form of 'salir'",true: "saldré",false1: "salgo",false2: "salía"},
    {num:629,que:"Future tense 'yo' form of 'poner'",true: "pondré",false1: "pongo",false2: "ponía"},
    {num:630,que:"Future tense 'yo' form of 'haber'",true: "habré",false1: "he",false2: "había"},
    {num:631,que:"Future tense 'yo' form of 'caber'",true: "cabré",false1: "quepo",false2: "cabía"},
    {num:632,que:"Future tense 'yo' form of 'valer'",true: "valdré",false1: "valgo",false2: "valía"},
    {num:633,que:"Future tense 'tú' form of 'tener'",true: "tendrás",false1: "tienes",false2: "tenías"},
    {num:634,que:"Future tense 'él' form of 'venir'",true: "vendrá",false1: "viene",false2: "venía"},
    {num:635,que:"Future tense 'nosotros' form of 'hacer'",true: "haremos",false1: "hacemos",false2: "hacíamos"},

    // Conditional Tense (636-645)
    {num:636,que:"Conditional tense ending for 'yo'",true: "-ía",false1: "-é",false2: "-á"},
    {num:637,que:"Conditional 'yo' form of 'tener'",true: "tendría",false1: "tengo",false2: "tenía"},
    {num:638,que:"Conditional 'yo' form of 'venir'",true: "vendría",false1: "vengo",false2: "venía"},
    {num:639,que:"Conditional 'yo' form of 'decir'",true: "diría",false1: "digo",false2: "decía"},
    {num:640,que:"Conditional 'yo' form of 'hacer'",true: "haría",false1: "hago",false2: "hacía"},
    {num:641,que:"Conditional 'yo' form of 'poder'",true: "podría",false1: "puedo",false2: "podía"},
    {num:642,que:"Conditional 'yo' form of 'querer'",true: "querría",false1: "quiero",false2: "quería"},
    {num:643,que:"Conditional 'yo' form of 'saber'",true: "sabría",false1: "sé",false2: "sabía"},
    {num:644,que:"Conditional 'yo' form of 'salir'",true: "saldría",false1: "salgo",false2: "salía"},
    {num:645,que:"Conditional 'yo' form of 'haber'",true: "habría",false1: "he",false2: "había"},

    // Past Participles (646-655)
    {num:646,que:"Past participle of 'abrir'",true: "abierto",false1: "abrido",false2: "abriendo"},
    {num:647,que:"Past participle of 'decir'",true: "dicho",false1: "decido",false2: "diciendo"},
    {num:648,que:"Past participle of 'escribir'",true: "escrito",false1: "escribido",false2: "escribiendo"},
    {num:649,que:"Past participle of 'hacer'",true: "hecho",false1: "hacido",false2: "haciendo"},
    {num:650,que:"Past participle of 'morir'",true: "muerto",false1: "morido",false2: "muriendo"},
    {num:651,que:"Past participle of 'poner'",true: "puesto",false1: "ponido",false2: "poniendo"},
    {num:652,que:"Past participle of 'romper'",true: "roto",false1: "rompido",false2: "rompiendo"},
    {num:653,que:"Past participle of 'ver'",true: "visto",false1: "vido",false2: "viendo"},
    {num:654,que:"Past participle of 'volver'",true: "vuelto",false1: "volvido",false2: "volviendo"},
    {num:655,que:"Past participle of 'cubrir'",true: "cubierto",false1: "cubrido",false2: "cubriendo"},

    // Imperfect vs Preterite Usage (656-665)
    {num:656,que:"Which tense describes ongoing past actions?",true: "imperfect",false1: "preterite",false2: "future"},
    {num:657,que:"Which tense describes completed past actions?",true: "preterite",false1: "imperfect",false2: "conditional"},
    {num:658,que:"'When I was a child' uses which past tense?",true: "imperfect",false1: "preterite",false2: "future"},
    {num:659,que:"'I ate at 8:00' uses which past tense?",true: "preterite",false1: "imperfect",false2: "conditional"},
    {num:660,que:"Which tense describes background actions?",true: "imperfect",false1: "preterite",false2: "future"},
    {num:661,que:"Which tense describes interrupted actions?",true: "imperfect",false1: "preterite",false2: "conditional"},
    {num:662,que:"'I used to play' uses which tense?",true: "imperfect",false1: "preterite",false2: "future"},
    {num:663,que:"'I played yesterday' uses which tense?",true: "preterite",false1: "imperfect",false2: "conditional"},
    {num:664,que:"Which tense describes weather in the past?",true: "imperfect",false1: "preterite",false2: "future"},
    {num:665,que:"Which tense describes specific past events?",true: "preterite",false1: "imperfect",false2: "conditional"},

    // More Irregular Preterite (666-675)
    {num:666,que:"Preterite 'yo' form of 'ser'",true: "fui",false1: "soy",false2: "era"},
    {num:667,que:"Preterite 'yo' form of 'ir'",true: "fui",false1: "voy",false2: "iba"},
    {num:668,que:"Preterite 'ellos' form of 'ser'",true: "fueron",false1: "son",false2: "eran"},
    {num:669,que:"Preterite 'ellos' form of 'ir'",true: "fueron",false1: "van",false2: "iban"},
    {num:670,que:"Preterite 'yo' form of 'ver'",true: "vi",false1: "veo",false2: "veía"},
    {num:671,que:"Preterite 'yo' form of 'leer'",true: "leí",false1: "leo",false2: "leía"},
    {num:672,que:"Preterite 'yo' form of 'creer'",true: "creí",false1: "creo",false2: "creía"},
    {num:673,que:"Preterite 'yo' form of 'oir'",true: "oí",false1: "oigo",false2: "oía"},
    {num:674,que:"Preterite 'yo' form of 'caer'",true: "caí",false1: "caigo",false2: "caía"},
    {num:675,que:"Preterite 'yo' form of 'construir'",true: "construí",false1: "construyo",false2: "construía"},

    // Present Perfect Tense (676-680)
    {num:676,que:"Present perfect 'yo' form of 'hablar'",true: "he hablado",false1: "hube hablado",false2: "había hablado"},
    {num:677,que:"Present perfect 'tú' form of 'comer'",true: "has comido",false1: "habías comido",false2: "hubiste comido"},
    {num:678,que:"Present perfect 'él' form of 'vivir'",true: "ha vivido",false1: "había vivido",false2: "hubo vivido"},
    {num:679,que:"Present perfect 'nosotros' form of 'escribir'",true: "hemos escrito",false1: "habíamos escrito",false2: "hubimos escrito"},
    {num:680,que:"Present perfect 'ellos' form of 'hacer'",true: "han hecho",false1: "habían hecho",false2: "hubieron hecho"},

    // Subjunctive Present (681-685)
    {num:681,que:"Present subjunctive 'yo' form of 'hablar'",true: "hable",false1: "hablo",false2: "hablé"},
    {num:682,que:"Present subjunctive 'tú' form of 'comer'",true: "comas",false1: "comes",false2: "comiste"},
    {num:683,que:"Present subjunctive 'él' form of 'vivir'",true: "viva",false1: "vive",false2: "vivió"},
    {num:684,que:"Present subjunctive 'yo' form of 'tener'",true: "tenga",false1: "tengo",false2: "tuve"},
    {num:685,que:"Present subjunctive 'yo' form of 'ser'",true: "sea",false1: "soy",false2: "fui"},

    // Final Mixed Grammar (686-690)
    {num:686,que:"What tense is 'hablaría'?",true: "conditional",false1: "future",false2: "imperfect"},
    {num:687,que:"What tense is 'hablé'?",true: "preterite",false1: "present",false2: "imperfect"},
    {num:688,que:"What tense is 'hablaba'?",true: "imperfect",false1: "present",false2: "preterite"},
    {num:689,que:"What tense is 'hablaré'?",true: "future",false1: "conditional",false2: "present"},
    {num:690,que:"What tense is 'hable'?",true: "present subjunctive",false1: "present",false2: "preterite"},
];


let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    setQ(currentQuestionIndex);
    setupEventListeners();
});

function setQ(index) {
    const currentQ = qna[index];
    document.getElementById("question").innerHTML = currentQ.que;
    
    // Create array of answers and shuffle them
    const answers = [currentQ.true, currentQ.false1, currentQ.false2];
    shuffleArray(answers);
    
    document.getElementById("button1").innerHTML = answers[0];
    document.getElementById("button2").innerHTML = answers[1];
    document.getElementById("button3").innerHTML = answers[2];
    
    // Store correct answer for checking
    document.getElementById("button1").dataset.correct = answers[0] === currentQ.true;
    document.getElementById("button2").dataset.correct = answers[1] === currentQ.true;
    document.getElementById("button3").dataset.correct = answers[2] === currentQ.true;
}

function setupEventListeners() {
    document.getElementById("button1").addEventListener("click", function() {
        checkAnswer(this);
    });
    document.getElementById("button2").addEventListener("click", function() {
        checkAnswer(this);
    });
    document.getElementById("button3").addEventListener("click", function() {
        checkAnswer(this);
    });
}

function checkAnswer(button) {
    const isCorrect = button.dataset.correct === "true";
    const buttonbox = document.getElementById("buttonbox");
    
    if (isCorrect) {
        buttonbox.style.backgroundColor = "green";
        // Move to next question after delay
        setTimeout(function() {
            currentQuestionIndex++;
            if (currentQuestionIndex < qna.length) {
                setQ(currentQuestionIndex);
                buttonbox.style.backgroundColor = ""; // Reset color
            } else {
                document.getElementById("question").innerHTML = "Quiz Complete! 🎉";
                buttonbox.innerHTML = "<p>Well done! You finished all questions.</p>";
            }
        }, 1000);
    } else {
        buttonbox.style.backgroundColor = "red";
        // Reset color after short delay
        setTimeout(function() {
            buttonbox.style.backgroundColor = "";
        }, 1000);
    }
}

// Helper function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}