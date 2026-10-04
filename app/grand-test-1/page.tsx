"use client"



import { useEffect, useState } from "react"



type Question = {

    id: number

    section: string

    question: string

    options: string[]

    answer: number

}



const questions: Question[] = [

    // =========================

    // SYNONYMS - 1 to 24

    // =========================



    {

        id: 1,

        section: "Synonyms",

        question:

            'They were stopped by a terrible noise.\nChoose the synonym of the word “terrible”.',

        options: ["negligible", "dreadful", "insignificant", "pleasant"],

        answer: 1,

    },

    {

        id: 2,

        section: "Synonyms",

        question:

            'The magic waterfall gave the delicious sake.\nChoose the synonym of the word “delicious”.',

        options: ["inedible", "unpalatable", "tasty", "horrible"],

        answer: 2,

    },

    {

        id: 3,

        section: "Synonyms",

        question:

            'She was also a certified flight instructor.\nChoose the synonym of the word “instructor”.',

        options: ["trainer", "pupil", "student", "schoolboy"],

        answer: 0,

    },

    {

        id: 4,

        section: "Synonyms",

        question:

            "There was shock and disbelief.\nChoose the synonym of the word “disbelief”.",

        options: ["credence", "faith", "belief", "doubt"],

        answer: 3,

    },

    {

        id: 5,

        section: "Synonyms",

        question:

            "There is no misery about it.\nChoose the synonym of the word “misery”.",

        options: ["pleasure", "easy", "difficulty", "contenment"],

        answer: 2,

    },

    {

        id: 6,

        section: "Synonyms",

        question:

            'The two friends were seldom seen together.\nChoose the synonym of the word “seldom”.',

        options: ["often", "rarely", "frequently", "never"],

        answer: 1,

    },

    {

        id: 7,

        section: "Synonyms",

        question:

            'He brought us nothing but ruin.\nChoose the synonym of the word “ruin”.',

        options: ["reconstruction", "preservstion", "care", "damage"],

        answer: 3,

    },

    {

        id: 8,

        section: "Synonyms",

        question:

            'It was to be a battle of champions.\nChoose the synonym of the word “battle”.',

        options: ["truce", "fight", "peace", "calm"],

        answer: 1,

    },

    {

        id: 9,

        section: "Synonyms",

        question:

            'What a weird sound!\nChoose the synonym of the word “weird”.',

        options: ["normal", "ordinary", "strange", "usual"],

        answer: 2,

    },

    {

        id: 10,

        section: "Synonyms",

        question:

            'So many vendors came to the door.\nChoose the synonym of the word “vendors”.',

        options: ["sellers", "buyers", "customers", "consumers"],

        answer: 0,

    },

    {

        id: 11,

        section: "Synonyms",

        question:

            'He looked unsure.\nChoose the synonym of the word “unsure”.',

        options: ["unconfident", "confident", "assertive", "sure"],

        answer: 0,

    },

    {

        id: 12,

        section: "Synonyms",

        question:

            'It is a tribute to some of the bravest soldiers.\nChoose the synonym of the word “tribute”.',

        options: ["criticism", "salute", "condemnation", "price"],

        answer: 1,

    },

    {

        id: 13,

        section: "Synonyms",

        question:

            'It was a pleasure to receive your letter.\nChoose the synonym of the word “pleasure”.',

        options: ["sorrow", "pain", "unhappy", "delight"],

        answer: 3,

    },

    {

        id: 14,

        section: "Synonyms",

        question:

            'In the end I used brute force.\nChoose the synonym of the word “brute”.',

        options: ["still", "flat", "beast", "hunger"],

        answer: 2,

    },

    {

        id: 15,

        section: "Synonyms",

        question:

            'I shall never forget this moment.\nChoose the synonym of the word “moment”.',

        options: ["short time", "lengthy", "lasting", "permanent"],

        answer: 0,

    },

    {

        id: 16,

        section: "Synonyms",

        question:

            'A time I will treasure as long as I live.\nChoose the synonym of the word “treasure”.',

        options: ["calm", "cheap", "less", "preserve"],

        answer: 3,

    },

    {

        id: 17,

        section: "Synonyms",

        question:

            'She is still traumatised.\nChoose the synonym of the word “traumatised”.',

        options: [

            "greatly shocked",

            "smiled",

            "explained",

            "examined",

        ],

        answer: 0,

    },

    {

        id: 18,

        section: "Synonyms",

        question:

            'They have been trigged by a massive earthquake.\nChoose the synonym of the word “massive”.',

        options: ["tiny", "small", "very big", "short"],

        answer: 2,

    },

    {

        id: 19,

        section: "Synonyms",

        question:

            'The family took refuge in the third floor.\nChoose the synonym of the word “refuge”.',

        options: ["protection", "voluntary", "learned", "concious"],

        answer: 0,

    },

    {

        id: 20,

        section: "Synonyms",

        question:

            'He lived alone.\nChoose the synonym of the word “alone”.',

        options: ["familiar", "solo", "in company", "possible"],

        answer: 1,

    },

    {

        id: 21,

        section: "Synonyms",

        question:

            'He had an excellent memory.\nChoose the synonym of the word “excellent”.',

        options: ["poor", "inferior", "very good", "bad"],

        answer: 2,

    },

    {

        id: 22,

        section: "Synonyms",

        question:

            'He had lost his appetite.\nChoose the synonym of the word “appetite”.',

        options: ["aversion", "hunger", "poverty", "richness"],

        answer: 1,

    },

    {

        id: 23,

        section: "Synonyms",

        question:

            'There was no harm in asking him.\nChoose the synonym of the word “harm”.',

        options: ["benefit", "harmless", "good", "pain"],

        answer: 3,

    },

    {

        id: 24,

        section: "Synonyms",

        question:

            'The entire episode has slipped out of your mind.\nChoose the synonym of the word “entire”.',

        options: ["partial", "whole", "broken", "small"],

        answer: 1,

    },



    // =========================

    // ANTONYMS - 25 to 48

    // =========================



    {

        id: 25,

        section: "Antonyms",

        question:

            'What homework do you usually have?\nChoose the antonym of the word “usually”.',

        options: ["normally", "generally", "exceptionally", "regularly"],

        answer: 2,

    },

    {

        id: 26,

        section: "Antonyms",

        question:

            'He yelled.\nChoose the antonym of the word “yelled”.',

        options: ["whispered", "cried", "screamed", "shrieked"],

        answer: 0,

    },

    {

        id: 27,

        section: "Antonyms",

        question:

            "Muttering their anger and disappointment, the villagers left the place one by one.\nChoose the antonym of the word “mutter”.",

        options: [

            "speaking unclearly",

            "murmur",

            "mumble",

            "speak out",

        ],

        answer: 3,

    },

    {

        id: 28,

        section: "Antonyms",

        question:

            'It takes enormous ability to become an astronaut.\nChoose the antonym of the word “enormous”.',

        options: ["huge", "vast", "tiny", "extensive"],

        answer: 2,

    },

    {

        id: 29,

        section: "Antonyms",

        question:

            '“Are your helpers kind to you?” I asked.\nChoose the antonym of the word “kind”.',

        options: [

            "affectionate",

            "considerate",

            "good-natured",

            "unkind",

        ],

        answer: 3,

    },

    {

        id: 30,

        section: "Antonyms",

        question:

            '“Shall I lead you anywhere?” I asked.\nChoose the antonym of the word “lead”.',

        options: ["guide", "follow", "show", "steer"],

        answer: 1,

    },

    {

        id: 31,

        section: "Antonyms",

        question:

            'Jithin had an old aunt.\nChoose the antonym of the word “old”.',

        options: ["aged", "senior", "older", "young"],

        answer: 3,

    },

    {

        id: 32,

        section: "Antonyms",

        question:

            'Many wise men came to the king.\nChoose the antonym of the word “wise”.',

        options: ["intelligent", "foolish", "clever", "knowledgeable"],

        answer: 1,

    },

    {

        id: 33,

        section: "Antonyms",

        question:

            'He could remember where he was.\nChoose the antonym of the word “remember”.',

        options: ["forget", "recall", "recollect", "memorize"],

        answer: 0,

    },

    {

        id: 34,

        section: "Antonyms",

        question:

            'The king was very happy.\nChoose the antonym of the word “happy”.',

        options: ["cheerful", "sad", "joyful", "merry"],

        answer: 1,

    },

    {

        id: 35,

        section: "Antonyms",

        question:

            '“Ravi, send that beggar away!” cried his mother.\nChoose the antonym of the word “send”.',

        options: ["dispatch", "forward", "receive", "communicate"],

        answer: 2,

    },

    {

        id: 36,

        section: "Antonyms",

        question:

            'My legs are so thin and ugly!\nChoose the antonym of the word “thin”.',

        options: ["thick", "narrow", "lightweight", "delicate"],

        answer: 0,

    },

    {

        id: 37,

        section: "Antonyms",

        question:

            'Muko would sit on it as Snug as any cat.\nChoose the antonym of the word “Snug”.',

        options: ["comfortable", "cosy", "warm", "bleak"],

        answer: 3,

    },

    {

        id: 38,

        section: "Antonyms",

        question:

            'The covetous old fellow began to dig.\nChoose the antonym of the word “covetous”.',

        options: ["greedy", "satisfied", "rapacious", "jealous"],

        answer: 1,

    },

    {

        id: 39,

        section: "Antonyms",

        question:

            'The next day the stingy neighbour came.\nChoose the antonym of the word “stingy”.',

        options: ["miserly", "mean", "generous", "parsimonious"],

        answer: 2,

    },

    {

        id: 40,

        section: "Antonyms",

        question:

            'Our valiant soldiers have made great sacrifices for us.\nChoose the antonym of the word “valiant”.',

        options: ["very brave", "cowardly", "firm", "bold"],

        answer: 1,

    },

    {

        id: 41,

        section: "Antonyms",

        question:

            'I haven’t been brave.\nChoose the antonym of the word “brave”.',

        options: ["valiant", "cowardly", "valorous", "heroic"],

        answer: 1,

    },

    {

        id: 42,

        section: "Antonyms",

        question:

            'Suddenly I felt weak all over.\nChoose the antonym of the word “suddenly”.',

        options: ["instantly", "promptly", "gradually", "abruptly"],

        answer: 2,

    },

    {

        id: 43,

        section: "Antonyms",

        question:

            'I had wanted one, but they were far too expensive.\nChoose the antonym of the word “expensive”.',

        options: ["costly", "overpriced", "exorbitant", "cheap"],

        answer: 3,

    },

    {

        id: 44,

        section: "Antonyms",

        question:

            'A tsunami is very large and powerful wave.\nChoose the antonym of the word “large”.',

        options: ["big", "small", "great", "huge"],

        answer: 1,

    },

    {

        id: 45,

        section: "Antonyms",

        question:

            'We accept you as rulers.\nChoose the antonym of the word “accept”.',

        options: ["receive", "reject", "take", "get"],

        answer: 1,

    },

    {

        id: 46,

        section: "Antonyms",

        question:

            'All the misery in the world is due to human desires.\nChoose the antonym of the word “misery”.',

        options: ["unhappiness", "distress", "anguish", "contentment"],

        answer: 3,

    },

    {

        id: 47,

        section: "Antonyms",

        question:

            'I have more personal answer to the question.\nChoose the antonym of the word “personal”.',

        options: ["public", "unique", "individual", "private"],

        answer: 0,

    },

    {

        id: 48,

        section: "Antonyms",

        question:

            'Knowledge should be practical and scientific.\nChoose the antonym of the word “practical”.',

        options: ["hands-on", "real", "actual", "theoretical"],

        answer: 3,

    },



    // =========================

    // CORRECT SPELLING - 49 to 60

    // =========================



    {

        id: 49,

        section: "Correct Spelling",

        question: "Choose the correctly spelt word.",

        options: ["misery", "misary", "micery", "micary"],

        answer: 0,

    },

    {

        id: 50,

        section: "Correct Spelling",

        question: "Choose the correctly spelt word.",

        options: ["favarate", "favorate", "favarate", "favourite"],

        answer: 3,

    },

    {

        id: 51,

        section: "Correct Spelling",

        question: "Choose the correctly spelt word.",

        options: [

            "respancible",

            "responcible",

            "responsible",

            "respansable",

        ],

        answer: 2,

    },

    {

        id: 52,

        section: "Correct Spelling",

        question: "Choose the correctly spelt word.",

        options: ["deliciose", "delicious", "dalicious", "dilecious"],

        answer: 1,

    },

    {

        id: 53,

        section: "Correct Spelling",

        question: "Choose the correctly spelt word.",

        options: ["kichen", "kitchen", "ketchin", "kitchan"],

        answer: 1,

    },

    {

        id: 54,

        section: "Correct Spelling",

        question: "Choose the correctly spelt word.",

        options: ["cliff", "cliph", "clif", "clife"],

        answer: 0,

    },

    {

        id: 55,

        section: "Correct Spelling",

        question: "Choose the correctly spelt word.",

        options: ["shrieked", "shreiked", "shreeked", "shreked"],

        answer: 0,

    },

    {

        id: 56,

        section: "Correct Spelling",

        question: "Choose the correctly spelt word.",

        options: ["atitude", "attitude", "attetude", "atitud"],

        answer: 1,

    },

    {

        id: 57,

        section: "Correct Spelling",

        question: "Choose the correctly spelt word.",

        options: ["cowncil", "counsil", "council", "cownsil"],

        answer: 2,

    },

    {

        id: 58,

        section: "Correct Spelling",

        question: "Choose the correctly spelt word.",

        options: ["squerral", "squerrel", "squirel", "squirrel"],

        answer: 3,

    },

    {

        id: 59,

        section: "Correct Spelling",

        question: "Choose the correctly spelt word.",

        options: ["begar", "begger", "baggar", "beggar"],

        answer: 3,

    },

    {

        id: 60,

        section: "Correct Spelling",

        question: "Choose the correctly spelt word.",

        options: ["varandha", "verandah", "verendah", "verndha"],

        answer: 1,

    },



    // =========================
    // HINDI LANGUAGE - 61 to 90
    // =========================

    {
        id: 61,
        section: "Reading",
        question: "दिये गये पद्यांश को पढ़कर प्रश्न का सही उत्तर पहचानिए।\nहे मातृभूमि! तेरी जय हो, सदा विजय हो। प्रत्येक भक्त तेरा सुख-शांति-कांतिमय हो। अज्ञान की निशा में, दुख से भरी दिशा में, संसार के हृदय में तेरी प्रभा उदय हो।\nप्रश्न - कविता में इसकी तुलना अंधकार से की गयी है।",
        options: ["भक्त", "संसार", "दिशा", "अज्ञान"],
        answer: 3,
    },
    {
        id: 62,
        section: "Reading",
        question: "दिये गये पद्यांश को पढ़कर प्रश्न का सही उत्तर पहचानिए।\nउगता सूरज जिधर सामने, अधर खड़े हो मुँह करके तुम। ठीक सामने पूरब होगा और पीछे पश्चिम।\nप्रश्न - पश्चिम दिशा किस तरफ होती है?",
        options: ["सूरज के उगने की ओर", "सूरज के उगने के उल्टी दिशा में", "सूरज के उगने की बायीं ओर", "सूरज के उगने की दाहिनी ओर"],
        answer: 1,
    },
    {
        id: 63,
        section: "Correct Spelling",
        question: "निम्न शब्दों में से संयुक्ताक्षर शब्द पहचानिए",
        options: ["समुंदर", "समुद्र", "सागर", "सुग्गा"],
        answer: 1,
    },
    {
        id: 64,
        section: "Correct Spelling",
        question: "निम्न में से संयुक्ताक्षर और ऋत्व के प्रयोग का उदाहरण पहचानिए",
        options: ["ऋण", "कृपा", "प्रभु", "प्रकृति"],
        answer: 3,
    },
    {
        id: 65,
        section: "Synonyms",
        question: "निम्न में से ‘साँप’ शब्द के पर्याय शब्द पहचानिए।",
        options: ["नाग, नगर", "तक्षक, समीर", "सर्प, विषधर", "डसकर, काल"],
        answer: 2,
    },
    {
        id: 66,
        section: "Synonyms",
        question: "निम्न में से ‘भानु’ शब्द के पर्याय शब्द पहचानिए।",
        options: ["सूर्य, रवि", "अनुचर, भानु", "कर, दिनकर, कुसुमाकर", "सूरज, सुरेश"],
        answer: 0,
    },
    {
        id: 67,
        section: "Sandhi",
        question: "उच्चारण शब्द का सही संधि-विच्छेद पहचानिए।",
        options: ["उच्च + आरण", "उच् + चारण", "उत् + चारण", "उः + चारण"],
        answer: 2,
    },
    {
        id: 68,
        section: "Samas",
        question: "निम्न में से बहुव्रीहि समास का सही उदाहरण पहचानिए।",
        options: ["विद्यादान", "चंद्रमुख", "नवरात्र", "चक्रधर"],
        answer: 3,
    },
    {
        id: 69,
        section: "Noun",
        question: "निम्न विकल्प में से सही समूहवाचक संज्ञा शब्द पहचानिए।",
        options: ["सुंदरता", "झुंड", "त्याग", "सिंह"],
        answer: 1,
    },
    {
        id: 70,
        section: "Adjective",
        question: "निम्न में से सही गुणवाचक विशेषण पहचानिए।",
        options: ["हजार", "दूसरा", "अट्ठम", "भलाबुरा"],
        answer: 3,
    },
    {
        id: 71,
        section: "Adjective",
        question: "निम्न में से सही परिमाणबोधक विशेषण पहचानिए।",
        options: ["अधिक", "भला", "बुरा", "सच"],
        answer: 0,
    },
    {
        id: 72,
        section: "Adjective",
        question: "निम्न में से सही सार्वनामिक विशेषण शब्द पहचानिए।",
        options: ["धार्मिक", "ऊपर", "तुम्हारा", "प्रामाणिक"],
        answer: 2,
    },
    {
        id: 73,
        section: "One Word Substitution",
        question: "‘जो किसी विषय की जानकारी रखता हो’ सही एक शब्द रूप पहचानिए।",
        options: ["अन्वेषक", "अनभिज्ञ", "विशेषज्ञ", "विस्थापित"],
        answer: 2,
    },
    {
        id: 74,
        section: "Idioms",
        question: "पोता अपने दादा को उँगली पर नचा रहा है। वाक्य में प्रयुक्त मुहावरे को पहचानिए।",
        options: ["अपने दादा को", "उँगली पर नचाना", "दादा को उँगली", "पोता अपने दादा को"],
        answer: 1,
    },
    {
        id: 75,
        section: "Prefixes",
        question: "भगवान इस संसार के अधिनायक हैं। ‘अधिनायक’ शब्द में कौन सा उपसर्ग है?",
        options: ["अधि", "अ", "अधी", "अध्"],
        answer: 0,
    },
    {
        id: 76,
        section: "Prefixes",
        question: "प्रतिदिन व्यायाम करना है। ‘प्रतिदिन’ शब्द में कौन सा उपसर्ग है?",
        options: ["प्र", "प्रत", "प्रति", "प्रती"],
        answer: 2,
    },
    {
        id: 77,
        section: "Suffixes",
        question: "साँप को सपेरा नचाता है। ‘सपेरा’ शब्द में कौन सा प्रत्यय है?",
        options: ["पेटा", "रा", "एरा", "परा"],
        answer: 2,
    },
    {
        id: 78,
        section: "Gender",
        question: "बिल्ली दूध पीती है। इस वाक्य का सही पुल्लिंग रूप पहचानिए।",
        options: ["बिलाव दूध पीता है।", "बिल्लू दूध पीता है।", "बिलान दूध पीता है।", "बिल्लन दूध पीता है।"],
        answer: 0,
    },
    {
        id: 79,
        section: "Gender",
        question: "माली बगीचे की परवरिश करता है। इस वाक्य का सही स्त्रीलिंग रूप पहचानिए।",
        options: ["मालिकिन बगीचे की परवरिश करती है।", "मालिनी बगीचे की परवरिश करती है।", "मालिन बगीचे की परवरिश करती है।", "मालिका बगीचे की परवरिश करती है।"],
        answer: 2,
    },
    {
        id: 80,
        section: "Number",
        question: "‘दिशा गूँज उठती है।’ इस वाक्य का सही वचन परिवर्तित रूप पहचानिए।",
        options: ["दिशाओं गूँज उठती हैं।", "दिशाएँ गूँज उठती हैं।", "दिशायाँ गूँज उठती हैं।", "दिशायें गूँज उठती है।"],
        answer: 1,
    },
    {
        id: 81,
        section: "Case",
        question: "वह दफ्तर से लौटा। इस वाक्य में कौन सा कारक है?",
        options: ["कर्ता कारक", "संबंध कारक", "अपादान कारक", "अधिकरण कारक"],
        answer: 2,
    },
    {
        id: 82,
        section: "Compound Verb",
        question: "रमा रोने लगी। इस वाक्य में कौन सी संयुक्त क्रिया है?",
        options: ["समाप्ति बोधक", "आरंभ बोधक", "अनुमति बोधक", "अभ्यास बोधक"],
        answer: 0,
    },
    {
        id: 83,
        section: "Adverb",
        question: "मुझे बचपन की थोड़ी-थोड़ी यादें आती हैं। ‘थोड़ी-थोड़ी’ शब्द में कौन सा क्रिया विशेषण है?",
        options: ["कालवाचक", "परिमाणवाचक", "स्थानवाचक", "रीतिवाचक"],
        answer: 1,
    },
    {
        id: 84,
        section: "Adverb",
        question: "घर के बाहर एक भिखारी खड़ा है। ‘बाहर’ शब्द में कौन सा क्रिया विशेषण है?",
        options: ["स्थानवाचक", "कालवाचक", "रीतिवाचक", "परिमाणवाचक"],
        answer: 0,
    },
    {
        id: 85,
        section: "Punctuation",
        question: "जब किसी बात का विवरण, उत्तर या उदाहरण अगली पंक्ति से देना हो तो इस विराम चिह्न का प्रयोग किया जाता है।",
        options: ["योजक चिह्न", "पूर्ण विराम", "विवरण चिह्न", "अल्प विराम"],
        answer: 2,
    },
    {
        id: 86,
        section: "Tatsam-Tadbhav",
        question: "‘दूध’ तद्भव शब्द का सही तत्सम रूप पहचानिए。",
        options: ["दुर्वा", "का", "दुग्ध", "दूब"],
        answer: 2,
    },
    {
        id: 87,
        section: "Literature",
        question: "‘कश्मीर का केसर जिसका तिलक लगाता है’ — यह पंक्ति छठवीं कक्षा के इस पाठ से है।",
        options: ["जन्मदिन", "मेरा देश महान है", "तितली", "मेरी बहना"],
        answer: 1,
    },
    {
        id: 88,
        section: "Literature",
        question: "‘हम नन्हे बच्चे’ पाठ में बच्चे किस पर्वत पर चढ़ने की बात कहते हैं?",
        options: ["हिमगिरि", "अरावली", "विंध्याचल", "पूर्व की घाटियाँ"],
        answer: 0,
    },
    {
        id: 89,
        section: "Literature",
        question: "‘सफलता का मंत्र’ पाठ में व्यापारी लोग अपना माल बेचने कहाँ से गुजर रहे थे?",
        options: ["समुद्र से", "मैदान से", "रेगिस्तान से", "नदी से"],
        answer: 2,
    },
    {
        id: 90,
        section: "Literature",
        question: "‘राष्ट्रीय एकता दिवस’ कब मनाते हैं?",
        options: ["14 नवंबर", "2 अक्टूबर", "31 अक्टूबर", "12 नवंबर"],
        answer: 2,
    },
    {
        id: 91,
        section: "Literature",
        question: "‘ हंद ‘ शद क यु प  इस शद से मानी जाती है -",
        options: ["बंद", "सधु", "बू ँद", "सं ध"],
        answer: 1,
    },

    {
        id: 92,
        section: "Literature",
        question: "डॉ. नग जी का “ हद साहय का इतहास “ के अनुसार 7 वीं सद के मय से 14 वीं सद के मय तक का काल है -",
        options: ["र तकाल", "सं धकाल", "आधुनक काल", "आदकाल"],
        answer: 3,
    },

    {
        id: 93,
        section: "Literature",
        question: "चंदबरदाई के इस बंध काय म छपय ,क व , दूहा, तोमर , ोटक ... आद छंद का ाचुय पाया जाता है -",
        options: ["पउम चरउ", "राउलवेल", "हमीर रासो", "पृ वीराज रासो"],
        answer: 3,
    },

    {
        id: 94,
        section: "Literature",
        question: "नन म से कृ ण भि तशाखा के मुख क व ह -",
        options: ["कबीरदास", "शबर पा", "सूरदास", "तुलसीदास"],
        answer: 3,
    },

    {
        id: 95,
        section: "Literature",
        question: "सगुण भि त धारा के इस क व ने “राम के नाम को राम से भी बड़ा माना है । ”",
        options: ["गु नानक", "सूरदास", "जायसी", "तुलसीदास"],
        answer: 3,
    },

    {
        id: 96,
        section: "Literature",
        question: "मयकालन हद काय काल के वग म “उ र मयकाल “ को इस नाम से जानते ह -",
        options: ["भि त काल", "र त काल", "वै दक काल", "सं ध काल"],
        answer: 1,
    },

    {
        id: 97,
        section: "Literature",
        question: "र सक या , क व या , रामचं का ... आद ं थ क रचना इहने क -",
        options: ["घनानंद", "केशवदास", "नरहरदास", "वलभाचाय"],
        answer: 1,
    },

    {
        id: 98,
        section: "Literature",
        question: "हद म पहल बार साहय का अ धकतर  वकास गया मक और पया मक दो कार से इस काल म हुआ-",
        options: ["र त काल", "आदकाल", "आधुनक काल", "सं ध काल"],
        answer: 3,
    },

    {
        id: 99,
        section: "Literature",
        question: "“ अंधेर नगर  “ नाटक इनके वारा  लखे गये 14 मुख नाटक म से एक हसन है -",
        options: ["भारतदु हरचंद", "जयशंकर साद", "ेमचंद", "सोहनलाल  ववेद"],
        answer: 0,
    },

    {
        id: 100,
        section: "Literature",
        question: "उपयास स ाट के नाम से  सध इनके उपयास म नमाला, गोदान ,गबन , रंगभू म , कमभू म आद उपयास मुख ह-",
        options: ["सुदशन", "वृ दावन लाल", "ववंभरनाथ शमा", "ेमचंद"],
        answer: 3,
    },

    {
        id: 101,
        section: "Literature",
        question: "छायावाद के बृहद यी क वय म जयशंकर साद , सूयकांत पाठ नराला के साथ ये भी ह-",
        options: ["माखनलाल चतुवद", "शवमंगल  संह", "रामधार  संह दनकर", "सु म ानंदन पत"],
        answer: 3,
    },

    {
        id: 102,
        section: "Literature",
        question: "छायावाद क व जयशंकर साद क इस महाकाय म मनु और धा क कहानी है -",
        options: ["आँसू", "सीता वनवास", "धांजल", "कामायनी"],
        answer: 3,
    },

    {
        id: 103,
        section: "Literature",
        question: "इनके रहयवाद को साधना धान रहयवाद मानते ह -",
        options: ["संत और सू फय क", "योगवादय क", "सध सं दाय क", "गतवादय क"],
        answer: 0,
    },

    {
        id: 104,
        section: "Literature",
        question: "इस हालावाद क व ने फारसी क व कृत “ मधुशाला “ के अनुवाद के साथ-साथ अपनी वत प से भी और एक  “ मधुशाला “  लखी ।",
        options: ["अ मताभ बचन", "अिजताभ बचन", "हरवंशराय बचन", " शववंशराय बचन"],
        answer: 2,
    },

    {
        id: 105,
        section: "Literature",
        question: "वष 1999 को ानपीठ पुरकार इस कथाकार को दान  कया गया है -",
        options: ["ी लाल शु ल", "अ ेय", " वणु भाकर", "अमरकांत"],
        answer: 3,
    },

    {
        id: 106,
        section: "Literature",
        question: "मु ंशी ेमचंद क सव थम कहानी नन म से पहचानए-",
        options: ["बड़े घर क बहू", "ईदगाह", "शतरंज के  खलाड़ी", "पंच परमे वर"],
        answer: 1,
    },

    {
        id: 107,
        section: "Literature",
        question: "“ सेवासदन “ उपयास के  लेखक ह –",
        options: ["वृ दावन लाल", "मु ंशी ेमचंद", "चतुरसेन शा ी", "बालकृ ण भट"],
        answer: 1,
    },

    {
        id: 108,
        section: "Literature",
        question: "जयशंकर सादजी का यह नाटक अ भनय क  िट से सवा धक सफल है -",
        options: ["अजातश ु", "ुववा मनी", "च गु त", "कंदगु त"],
        answer: 3,
    },

    {
        id: 109,
        section: "Literature",
        question: "खड़ीबोल या कौरवी बोल इस उपभाषा के अंतगत आती है -",
        options: ["पिचमी हद", "राजथानी", "बहार", "पहाडी"],
        answer: 0,
    },

    {
        id: 110,
        section: "Literature",
        question: "ुववा मनी नाटक के लेखक कौन ह ?",
        options: ["हरकृ ण ेमी", "भारतदु हरचं", "जयशंकर साद", "वणु भाकर"],
        answer: 2,
    },

    {
        id: 111,
        section: "Vocabulary",
        question: "जल ह जीवन है। ( जल शद का पयायवाची शद इस वा य म है । )",
        options: ["भगवान ह जीवन है ।", "बल ह जीवन है ।", "पानी ह जीवन है ।", "वषा ह जीवन है ।"],
        answer: 2,
    },

    {
        id: 112,
        section: "Vocabulary",
        question: "‘ सरता ‘ शद का पयायवाची शद या है?",
        options: ["नद", "समु", "धरती", "वनता"],
        answer: 0,
    },

    {
        id: 113,
        section: "Vocabulary",
        question: "लकडहारा ईमानदार था । (रेखां कत शद का सह  वलोम शद यु त वा य पहचानए । )",
        options: ["लकडहार ईमानदार थी ।", "लकडहारा अईमानदार था ।", "लकडहार बेईमानदार थी ।", "लकडहारा बेईमानदार था ।"],
        answer: 3,
    },

    {
        id: 114,
        section: "Vocabulary",
        question: "घर से कूल दूर है। ( रेखां कत शद का  वलोम शद या है? )",
        options: ["पास", "अदूर", "यास", "सुदूर"],
        answer: 0,
    },

    {
        id: 115,
        section: "Vocabulary",
        question: "हे! भगवान हमारे अ ान को दूर करके ान दिजए । (इस वा य म  वलोम शद क सह जोड़ी या है ? )",
        options: ["हमारे x करके", "भगवान x अ ान", "दूर x ान", "ान x अ ान"],
        answer: 3,
    },

    {
        id: 116,
        section: "Tatsam-Tadbhav",
        question: "नन म से तसम शद पहचानए ।",
        options: ["सावन", "च ", "सूरज", "सपना"],
        answer: 1,
    },

    {
        id: 117,
        section: "Tatsam-Tadbhav",
        question: "बादल को देखते ह मोर खुशी से नाच उठता है। ( रेखां कत शद का तसम प या है ? )",
        options: ["मोरा", "मोरनी", "मयूर", "मोती"],
        answer: 2,
    },

    {
        id: 118,
        section: "Gender",
        question: "नन शद म से ी  लंग शद को पहचानए ।",
        options: ["गगन , ावण", "सभा , मंडल", "वग , सागर", "ापक , संघ"],
        answer: 1,
    },

    {
        id: 119,
        section: "Gender",
        question: "नन शद म से पु लंग शद क जोड़ी पहचानए ।",
        options: ["कामना , इछा", "ताला , पहया", "माया , दया", "आभा , छाया"],
        answer: 1,
    },

    {
        id: 120,
        section: "Number",
        question: "कतूर के  पता करघे पर कपड़े बुनते ह । ( रेखां कत शद के आधार पर वा य का सह बहुवचन प पहचानए। )",
        options: [
            "कतूर के  पता करघा पर कपड़े बुनते ह ।",
            "कतूर के  पता करघओं पर कपड़े बुनते ह ।",
            "कतूर के  पता करघ पर कपड़े बुनते ह ।",
            "कतूर के  पता करघ पर कपड़े बुनते ह ।"
        ],
        answer: 3,
    },

    {
        id: 121,
        section: "Case",
        question: "राजा ी कृ णदेवराय तेनालराम ....... चतुराई ...... बहुत खुश हुए । (र त थान के  लए सह कारक  चन चुनए । )",
        options: ["के , ने", "क , से", "क , म", "के , से"],
        answer: 1,
    },

    {
        id: 122,
        section: "Literature",
        question: "नन म शांत रस का थाई भाव पहचानए ।",
        options: ["शम / नवद", "नेह", "जुगु सा", "ोध"],
        answer: 1,
    },

    {
        id: 123,
        section: "Prosody",
        question: "नन म दो लघु मा ावाला शद पहचानए ।",
        options: ["जाल", "कौन", "जल", "जाला"],
        answer: 3,
    },

    {
        id: 124,
        section: "Prosody",
        question: "तीन गु होनेवाले गण को पहचानए।",
        options: ["न गण", "त गण", "म गण", "र गण"],
        answer: 3,
    },

    {
        id: 125,
        section: "Alankar",
        question: "जहाँ एक वतु क तुलना दूसर वतु से क जाय,वहाँ अलंकार होता है –",
        options: ["पक अलंकार", "उपमालंकार", "अनु ास अलंकार", "संदेहालंकार"],
        answer: 1,
    },

    {
        id: 126,
        section: "Sandhi",
        question: "“ कपीश “ शद का सह सं ध  वछेद पहचानए ।",
        options: ["कपी + इश", "क प + ईश", "कपी + ईश", "कप + इश"],
        answer: 2,
    },

    {
        id: 127,
        section: "Adjective",
        question: "गोपाल दुबला – पतला लडका है। ‘ दुबला – पतला ‘ कौन – सा  वशेषण है -",
        options: ["गुणवाचक  वशेषण", "सं यावाचक  वशेषण", "परमाणवाचक  वशेषण", "सावना मक  वशेषण"],
        answer: 0,
    },

    {
        id: 128,
        section: "Verb",
        question: "पवन अब  सनेमा जाना चाहता है। इस वा य म संयु त  या का यह प है -",
        options: ["समाित बोधक", "शि त बोधक", "अयास बोधक", "इछा बोधक"],
        answer: 3,
    },

    {
        id: 129,
        section: "Verb",
        question: "लडका पानी पीता है। ‘ पीना ‘ शद का  वतीय ेरणाथक     या का प है -",
        options: ["पीलाना", "पलाना", "पलयाना", "पलवाना"],
        answer: 3,
    },

    {
        id: 130,
        section: "Punctuation",
        question: "वा य म जहाँ अप  वराम क अपे ा कुछ अ धक देर कना पड़ता है ,वहाँ इस  वराम  चन का योग  कया जाता है।",
        options: ["पूण  वराम", "अध  वराम", "नदेशक", "योजक  चन"],
        answer: 1,
    },

    {
        id: 131,
        section: "Punctuation",
        question: "जहाँ  कसी बात को लेकर अलग करके दखाना हो, वहाँ  इस  वराम  चन का योग  कया जाता है I ाय: इसका योग शीषक म देखा जा सकता है -",
        options: ["अप  वराम", "उप  वराम", "नदेशक", "पूण  वराम"],
        answer: 0,
    },

    {
        id: 132,
        section: "Literature",
        question: "‘तरकार दरबार ‘ पाठ म  संहासन पर कौन बैठा हुआ है?",
        options: ["गोभी", "टमाटर", "आलू", "शलगम"],
        answer: 1,
    },

    {
        id: 133,
        section: "Literature",
        question: "‘तरकार दरबार ‘ पाठ म पहरा देनेवाले ह -",
        options: ["पेठा व कटहल", "लोबया व टमाटर", "टमाटर व सेम", "टमाटर व तोर"],
        answer: 0,
    },

    {
        id: 134,
        section: "Literature",
        question: "‘  धंसा ‘ लोकनृ य का ारंभ इस गाँव म हुआ -",
        options: ["सरपुर", "कदर", "उ डपी", "सपी"],
        answer: 3,
    },

    {
        id: 135,
        section: "Literature",
        question: "नन म से ‘ ीहरकोटा ‘ पाठ के पा ह -",
        options: ["गंगा और यमुना", "सीता और राधा", "रना और सुजाता", "कमला और  वमला"],
        answer: 2,
    },

    {
        id: 136,
        section: "Literature",
        question: "‘ बदल अपनी सोच ‘ पाठ म  कस समया पर चचा हुई है?",
        options: ["पढाई पर", "आ थक अंश पर", "पयावरण समया पर", "रा य समयाओं पर"],
        answer: 2,
    },

    {
        id: 137,
        section: "Literature",
        question: "‘ बेट के नाम प “ पाठ म  कस जेल से नेहजी ने अपनी बेट के नाम प  लखा था -",
        options: ["नैनी जेल", "मांडले जेल", "तीहार जेल", "कालापानी जेल"],
        answer: 0,
    },

    {
        id: 138,
        section: "Literature",
        question: "भोजपुर म करब तीस – चालस बरस से इस गीत का चार हुआ है -",
        options: ["बाउल", "भतयाल", "बदे शया", "सोहनी – महवाल"],
        answer: 2,
    },

    {
        id: 139,
        section: "Language Teaching",
        question: "सवर वाचन के ‘ साहचय  व ध ‘ का आ वकार इसने  कया था -",
        options: ["ी आर पी नायक", "ो अंड ो", "ीमती मा तेसर", "रघुवीर सहाय"],
        answer: 2,
    },

    {
        id: 140,
        section: "Language Teaching",
        question: "भाई योगे जीत ने अपनी पु तक ‘ हद भाषा  शण ‘ म इस क ा से ह मौन वाचन ारंभ कराने का सुझाव दया है -",
        options: ["चौथी क ा", "पाँचवीं क ा", "दूसर क ा", "तीसर क ा"],
        answer: 3,
    },

    {
        id: 141,
        section: "Language Teaching",
        question: "बालक – बा लकाओं के वारा अयापक के आदश लेख का बकुल वैसा का वैसा अनुकरण करना यह  ल प है-",
        options: ["सु ल प", "ुत ल प", "अनु ल प", "आशु ल प"],
        answer: 2,
    },

    {
        id: 142,
        section: "Language Teaching",
        question: "भाषा तव का ान ात करना और साहय क  व वध  वधाओं का ान ात करना- इस उ दे य के अंतगत आते ह –",
        options: ["ानामक उ दे य", "कौला मक उ दे य", "भावामक उ दे य", "कलामक उदे य"],
        answer: 0,
    },

    {
        id: 143,
        section: "Language Teaching",
        question: "भाषा और साहय म  च लेना और सवृ याँ का  वकास करना इस उ दे य के अंतगत आता है -",
        options: ["ानामक उ दे य", "रागामक उ दे य", "भावामक उ दे य", "कौला मक उ दे य"],
        answer: 2,
    },

    {
        id: 144,
        section: "Language Teaching",
        question: "ारं भक क ाओं के  लए इस कार क क वताएँ  वशेष कार से उपयु त ह -",
        options: ["घटनाओं का वणन", " वचारामक क वताएँ", "बालगीत या तुकबि दयाँ", "महापु ष क पयामक कथाएँ"],
        answer: 2,
    },

    {
        id: 145,
        section: "Language Teaching",
        question: "कहानी क उपयो गता के संबंध म यह कथन सह नहं है-",
        options: [
            "बालक क कपना शि त  वक सत होती है I",
            "कहानी मनोरंजन का मु य साधन है I",
            "बालक का शद भंडार बढ़ता है I",
            "बालक का ान - वधन नह ं होता है I"
        ],
        answer: 3,
    },

    {
        id: 146,
        section: "Language Teaching",
        question: "याकरण क इस  व ध म  वया थय के सामने पहले पयात सं या म उदाहरण तुत  कये जाते ह I  फर इन उदाहरण के आधार पर  वया थय क सहायता से यापकता नयम का नमाण  कया जाता है -",
        options: ["आगमन  व ध", "भाषा – संसग  व ध", "सहयोग  व ध", "सू  व ध"],
        answer: 0,
    },

    {
        id: 147,
        section: "Language Teaching",
        question: "याकरण क यह  व ध सबसे अछ मानी गयी है , य   क इस  व ध के वारा  वया थय क उसुकता अंत तक बनी रहती है -",
        options: ["सू  व ध", "आगमन  व ध", "भाषा – संसग  व ध", "सहयोग  व ध"],
        answer: 1,
    },

    {
        id: 148,
        section: "Language Teaching",
        question: "जहाँ बंदु क आवयकता है , वहाँ बंदु नहं लगाया जाता – यथा – पढ़ना ( पढना ) , काढ़ना ( काढना ) आद I यह अशु ध है -",
        options: ["बंदु का लोप", "अनावयक बंदु", "थान परवतन", "अनावयक वण"],
        answer: 0,
    },

    {
        id: 149,
        section: "Language Teaching",
        question: "“बालक को पूर बात बताने के बाद ह उसके भाग को बताइय I “  कस  शण सू का संकेत देता है ?",
        options: ["थूल से सू म क ओर", " वले ण से सं लेषण क ओर", "य से अ य क ओर", "पूण से अंश क ओर"],
        answer: 3,
    },

    {
        id: 150,
        section: "Language Teaching",
        question: "ये ारं भक न होते ह ,िजनसे अयापक अपना पाठ  आरंभ करता है -",
        options: ["तुलना मक न", "बोध न", "तावना मक न", " वचारामक न"],
        answer: 2,
    },
    
]



export default function GrandTest1Page() {

    const [current, setCurrent] = useState(0)

    const [answers, setAnswers] = useState<Record<number, number>>({})

    const [timeLeft, setTimeLeft] = useState(2 * 60 * 60)

    const [submitted, setSubmitted] = useState(false)



    useEffect(() => {

        if (submitted || timeLeft <= 0) return



        const timer = window.setInterval(() => {

            setTimeLeft((prev) => {

                if (prev <= 1) {

                    window.clearInterval(timer)

                    setSubmitted(true)

                    return 0

                }



                return prev - 1

            })

        }, 1000)



        return () => window.clearInterval(timer)

    }, [submitted, timeLeft])



    const formatTime = (seconds: number) => {

        const hours = Math.floor(seconds / 3600)

        const minutes = Math.floor((seconds % 3600) / 60)

        const secs = seconds % 60



        return `${String(hours).padStart(2, "0")}:${String(

            minutes

        ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`

    }



    const chooseAnswer = (optionIndex: number) => {

        setAnswers((previous) => ({

            ...previous,

            [questions[current].id]: optionIndex,

        }))

    }



    const goTo = (index: number) => {

        if (index < 0 || index >= questions.length) return



        setCurrent(index)



        window.scrollTo({

            top: 0,

            behavior: "smooth",

        })

    }



    const submitTest = () => {

        setSubmitted(true)



        window.scrollTo({

            top: 0,

            behavior: "smooth",

        })

    }



    const restart = () => {

        setCurrent(0)

        setAnswers({})

        setTimeLeft(2 * 60 * 60)

        setSubmitted(false)



        window.scrollTo({

            top: 0,

            behavior: "smooth",

        })

    }



    const score = questions.reduce((total, question) => {

        return total + (answers[question.id] === question.answer ? 1 : 0)

    }, 0)



    const answered = Object.keys(answers).length



    // =========================

    // RESULT SCREEN

    // =========================



    if (submitted) {

        const percentage = Math.round((score / questions.length) * 100)



        return (

            <main className="min-h-screen bg-gray-100 px-4 py-8">

                <div className="mx-auto max-w-6xl">

                    <div className="rounded-2xl bg-white p-8 text-center shadow-lg">

                        <div className="mb-4 text-5xl">

                            {percentage >= 60 ? "🎉" : "📚"}

                        </div>



                        <h1 className="text-3xl font-bold text-gray-900">

                            Grand Test - Practice Paper 1

                        </h1>



                        <p className="mt-2 text-gray-500">

                            TET 2A • English & Hindi Language

                        </p>



                        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">

                            <div className="rounded-xl bg-blue-50 p-6">

                                <p className="text-gray-500">Score</p>

                                <p className="mt-1 text-3xl font-bold text-blue-600">

                                    {score}/{questions.length}

                                </p>

                            </div>



                            <div className="rounded-xl bg-green-50 p-6">

                                <p className="text-gray-500">Percentage</p>

                                <p className="mt-1 text-3xl font-bold text-green-600">

                                    {percentage}%

                                </p>

                            </div>



                            <div className="rounded-xl bg-purple-50 p-6">

                                <p className="text-gray-500">Attempted</p>

                                <p className="mt-1 text-3xl font-bold text-purple-600">

                                    {answered}/{questions.length}

                                </p>

                            </div>

                        </div>



                        <button

                            onClick={restart}

                            className="mt-8 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"

                        >

                            Retake Test

                        </button>

                    </div>



                    {/* REVIEW */}



                    <div className="mt-8 space-y-5">

                        {questions.map((question, index) => {

                            const selected = answers[question.id]

                            const isCorrect = selected === question.answer



                            return (

                                <div

                                    key={question.id}

                                    className="rounded-xl bg-white p-6 shadow-sm"

                                >

                                    <div className="mb-4 flex items-center justify-between">

                                        <div>

                                            <h2 className="text-lg font-bold">

                                                Question {index + 1}

                                            </h2>



                                            <span className="mt-1 inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">

                                                {question.section}

                                            </span>

                                        </div>



                                        <span

                                            className={`rounded-full px-3 py-1 text-sm font-semibold ${isCorrect

                                                ? "bg-green-100 text-green-700"

                                                : "bg-red-100 text-red-700"

                                                }`}

                                        >

                                            {isCorrect ? "Correct" : "Incorrect"}

                                        </span>

                                    </div>



                                    <p className="whitespace-pre-line text-lg font-medium leading-8 text-gray-900">

                                        {question.question}

                                    </p>



                                    <div className="mt-5 space-y-2">

                                        {question.options.map((option, optionIndex) => {

                                            const correct = optionIndex === question.answer

                                            const selectedOption = optionIndex === selected



                                            return (

                                                <div

                                                    key={optionIndex}

                                                    className={`rounded-lg border p-3 ${correct

                                                        ? "border-green-400 bg-green-50"

                                                        : selectedOption

                                                            ? "border-red-400 bg-red-50"

                                                            : "border-gray-200"

                                                        }`}

                                                >

                                                    <span className="mr-2 font-bold">

                                                        {String.fromCharCode(65 + optionIndex)}.

                                                    </span>



                                                    {option}



                                                    {correct && (

                                                        <span className="ml-2 font-semibold text-green-700">

                                                            ✓ Correct Answer

                                                        </span>

                                                    )}



                                                    {selectedOption && !correct && (

                                                        <span className="ml-2 font-semibold text-red-700">

                                                            ✗ Your Answer

                                                        </span>

                                                    )}

                                                </div>

                                            )

                                        })}

                                    </div>

                                </div>

                            )

                        })}

                    </div>

                </div>

            </main>

        )

    }



    const question = questions[current]



    // =========================

    // TEST SCREEN

    // =========================



    return (

        <main className="min-h-screen bg-gray-100">

            {/* HEADER */}



            <header className="sticky top-0 z-50 border-b bg-white">

                <div className="mx-auto max-w-7xl px-4 py-4">

                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                        <div>

                            <h1 className="text-xl font-bold text-gray-900 md:text-2xl">

                                Grand Test - Practice Paper 1

                            </h1>



                            <p className="text-sm text-gray-500">

                                TET 2A • English & Hindi Language • 60 Questions

                            </p>

                        </div>



                        <div

                            className={`rounded-lg px-5 py-3 text-lg font-bold ${timeLeft <= 300

                                ? "bg-red-600 text-white"

                                : "bg-red-100 text-red-700"

                                }`}

                        >

                            ⏱ {formatTime(timeLeft)}

                        </div>

                    </div>

                </div>

            </header>



            <div className="mx-auto max-w-7xl px-4 py-6">

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">

                    {/* QUESTION */}



                    <section className="rounded-2xl bg-white p-5 shadow-sm md:p-8">

                        <div className="mb-6 flex items-start justify-between">

                            <div>

                                <p className="text-sm text-gray-500">

                                    Question {current + 1} of {questions.length}

                                </p>



                                <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">

                                    {question.section}

                                </span>

                            </div>



                            <span className="text-sm font-semibold text-gray-500">

                                {current + 1}/{questions.length}

                            </span>

                        </div>



                        <div className="whitespace-pre-line text-lg font-medium leading-8 text-gray-900 md:text-xl">

                            {question.question}

                        </div>



                        {/* OPTIONS */}



                        <div className="mt-8 space-y-3">

                            {question.options.map((option, index) => {

                                const selected = answers[question.id] === index



                                return (

                                    <label

                                        key={index}

                                        className={`block cursor-pointer rounded-xl border-2 p-4 transition ${selected

                                            ? "border-blue-600 bg-blue-50"

                                            : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"

                                            }`}

                                    >

                                        <div className="flex gap-4">

                                            <input

                                                type="radio"

                                                name={`question-${question.id}`}

                                                checked={selected}

                                                onChange={() => chooseAnswer(index)}

                                                className="mt-1 h-5 w-5 accent-blue-600"

                                            />



                                            <div className="flex-1">

                                                <p className="font-medium text-gray-900">

                                                    <span className="mr-2 font-bold">

                                                        {String.fromCharCode(65 + index)}.

                                                    </span>



                                                    {option}

                                                </p>

                                            </div>

                                        </div>

                                    </label>

                                )

                            })}

                        </div>



                        {/* NAVIGATION */}



                        <div className="mt-8 flex items-center justify-between border-t pt-6">

                            <button

                                onClick={() => goTo(current - 1)}

                                disabled={current === 0}

                                className="rounded-lg bg-gray-500 px-5 py-3 font-semibold text-white transition hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-40"

                            >

                                ← Previous

                            </button>



                            {current === questions.length - 1 ? (

                                <button

                                    onClick={submitTest}

                                    className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"

                                >

                                    Submit Test

                                </button>

                            ) : (

                                <button

                                    onClick={() => goTo(current + 1)}

                                    className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"

                                >

                                    Next →

                                </button>

                            )}

                        </div>

                    </section>



                    {/* QUESTION PALETTE */}



                    <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm lg:sticky lg:top-24">

                        <h2 className="text-lg font-bold text-gray-900">

                            Question Palette

                        </h2>



                        <p className="mb-5 mt-1 text-sm text-gray-500">

                            Answered: {answered}/{questions.length}

                        </p>



                        <div className="grid grid-cols-5 gap-2">

                            {questions.map((item, index) => {

                                const isAnswered = answers[item.id] !== undefined

                                const isCurrent = current === index



                                return (

                                    <button

                                        key={item.id}

                                        onClick={() => goTo(index)}

                                        className={`h-10 rounded-md text-sm font-semibold transition ${isCurrent

                                            ? "bg-blue-600 text-white ring-2 ring-blue-300"

                                            : isAnswered

                                                ? "bg-green-500 text-white"

                                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"

                                            }`}

                                    >

                                        {index + 1}

                                    </button>

                                )

                            })}

                        </div>



                        {/* LEGEND */}



                        <div className="mt-6 space-y-3 text-sm">

                            <div className="flex items-center gap-2">

                                <span className="h-4 w-4 rounded bg-gray-200" />

                                <span>Not Answered</span>

                            </div>



                            <div className="flex items-center gap-2">

                                <span className="h-4 w-4 rounded bg-green-500" />

                                <span>Answered</span>

                            </div>



                            <div className="flex items-center gap-2">

                                <span className="h-4 w-4 rounded bg-blue-600" />

                                <span>Current</span>

                            </div>

                        </div>



                        {/* SUBMIT */}



                        <button

                            onClick={submitTest}

                            className="mt-6 w-full rounded-lg bg-red-600 py-3 font-bold text-white transition hover:bg-red-700"

                        >

                            Submit Test

                        </button>

                    </aside>

                </div>

            </div>

        </main>

    )

}