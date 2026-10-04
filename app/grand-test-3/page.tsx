"use client";

import { useEffect, useState } from "react";

type Question = {
    id: number;
    sourceId: number;
    question: string;
    hindi?: string;
    options: string[];
    optionsHindi?: string[];
    answer: number;
};

const questions: Question[] = [
    // -------------------- CDP : 1-30 --------------------
    {
        id: 1, sourceId: 8,
        question: 'The slogan "Go back to nature" was given by',
        hindi: '"प्रकृति की तरफ लौटो" नारा देनेवाले हैं -',
        options: ["Thorndike", "Rousseau", "Stanley Hall", "Froebel"],
        optionsHindi: ["थॉर्नडाइक", "रूसो", "स्टैनली हॉल", "फ्रोबेल"], answer: 1,
    },
    {
        id: 2, sourceId: 11,
        question: "A physically challenged child shows aggressive behaviour in some emotions. This principle of development is",
        hindi: "एक दिव्यांग बालक कुछ संवेगों में हमलावर व्यवहार करता है। यह इस विकास सिद्धांत के अनुसार है -",
        options: ["Development is continuous", "Different aspects of development are interrelated", "Development is cumulative", "Development is predictable"],
        optionsHindi: ["विकास निरंतरशील है।", "विभिन्न विकास आपस में संबंधित होते हैं।", "विकास संचित है।", "विकास की भविष्यवाणी कर सकते हैं।"], answer: 1,
    },
    {
        id: 3, sourceId: 16,
        question: "Development starts from the central part of the body. Then it spreads to outer parts of the body. This principle of development is",
        hindi: "विकास शरीर के मध्य भाग से प्रारंभ होता है। फिर यह शरीर के बाहरी भागों में फैलता है। यह विकास सिद्धांत है -",
        options: ["Development is predictable", "Development is cumulative", "Principle of Cephalocaudal development", "Principle of Proximodistal development"],
        optionsHindi: ["विकास की भविष्यवाणी कर सकते हैं", "विकास संचित है", "शिरो-पादाभिमुख विकास सिद्धांत", "निकट-दूरस्थ विकास सिद्धांत"], answer: 3,
    },
    {
        id: 4, sourceId: 22,
        question: "This is not the characteristic of Infancy",
        hindi: "यह शैशवावस्था की विशेषता नहीं है -",
        options: ["Period from 2 weeks to 2 years", "The age of questioning", "Period of rapid growth and development", "First pair of milk teeth arises at this stage"],
        optionsHindi: ["2 सप्ताह से 2 वर्ष तक की अवधि", "प्रश्न करने की अवस्था", "तीव्र वृद्धि और विकास की अवधि", "इस अवस्था में दूध के दाँतों की पहली जोड़ी निकलती है"], answer: 1,
    },
    {
        id: 5, sourceId: 32,
        question: "Piaget's Cognitive Development stage from 7 years to 11 years is",
        hindi: "पियाजे के संज्ञानात्मक विकास के अनुसार 7 वर्ष की आयु से लेकर 11 वर्ष की आयु तक की अवस्था -",
        options: ["Sensory Motor Stage", "Pre Operational Stage", "Concrete - Operational Stage", "Formal Operational Stage"],
        optionsHindi: ["इन्द्रिय चालक अवस्था", "पूर्व प्रचालक अवस्था", "मूर्त प्रचालक अवस्था", "अमूर्त प्रचालक अवस्था"], answer: 2,
    },
    {
        id: 6, sourceId: 41,
        question: "The Psycho Social crisis faced by an individual at the stage of Middle Adulthood according to Erik Erikson is",
        hindi: "एरिक एरिक्सन के अनुसार मध्य प्रौढ़ावस्था का व्यक्ति इस मनोसामाजिक संक्लिष्ट स्थिति का सामना करता है -",
        options: ["Trust – Mistrust", "Industry – Inferiority", "Intimacy – Isolation", "Generativity – Stagnation"],
        optionsHindi: ["विश्वास – अविश्वास", "श्रम करना – न्यूनता", "घनिष्ठता – एकांत", "उत्पादन – स्थगनता"], answer: 3,
    },
    {
        id: 7, sourceId: 44,
        question: "The age group of people face Psycho Social Crisis, 'Integrity – Despair', according to Erikson (in years)",
        hindi: "एरिक एरिक्सन के अनुसार इस आयु के व्यक्ति 'समग्रता – निराशा' नामक मनोसामाजिक संकट की स्थिति का सामना करते हैं -",
        options: ["12 – 20", "20 – 30", "30 – 60", "> 60"],
        optionsHindi: ["12 – 20", "20 – 30", "30 – 60", "> 60"], answer: 3,
    },
    {
        id: 8, sourceId: 54,
        question: "This is not a positive emotion",
        hindi: "यह सकारात्मक संवेग नहीं है -",
        options: ["Affection", "Creativity", "Happiness", "Anger"],
        optionsHindi: ["स्नेह", "रचनात्मकता", "खुशी", "क्रोध"], answer: 3,
    },
    {
        id: 9, sourceId: 142,
        question: "According to Freud's Psychosexual Theory, the stage in which a child's age is in between 4 - 6 years",
        hindi: "फ्रायड के मनोलैंगिक (मनोविश्लेषणात्मक) सिद्धांत के अनुसार इस दशा में बच्चों की आयु 4 – 6 वर्षों के बीच होती है -",
        options: ["Oral Stage", "Anal Stage", "Phallic Stage", "Latency Stage"],
        optionsHindi: ["मौखिक दशा", "गुदीय दशा (आसन दशा)", "लैंगिक पूर्वावस्था", "सुप्त अवस्था"], answer: 2,
    },
    {
        id: 10, sourceId: 57,
        question: "This is not a characteristic of a person with social development during adolescence.",
        hindi: "किशोरावस्था में सामाजिक विकास वाले व्यक्ति का यह लक्षण नहीं है -",
        options: ["Sexual Consciousness", "Social Consciousness", "Group Loyalty", "Lack of interest in Social Service"],
        optionsHindi: ["लैंगिक चेतना", "सामाजिक चेतना", "समूह निष्ठा", "सामाजिक सेवा के प्रति रुचि न दिखाना"], answer: 3,
    },
    {
        id: 11, sourceId: 58,
        question: "Characteristic of a person with social development during adolescence is",
        hindi: "किशोरावस्था में सामाजिक विकास वाले व्यक्ति का लक्षण है -",
        options: ["Lack of Social Consciousness", "Lack of interest in Social Service", "Group Loyalty", "Lack of Sexual Consciousness"],
        optionsHindi: ["सामाजिक चेतना न होना", "सामाजिक सेवा के प्रति रुचि न होना", "समूह निष्ठा", "लैंगिक चेतना न होना"], answer: 2,
    },
    {
        id: 12, sourceId: 59,
        question: "Sexual Cleavage means",
        hindi: "'लैंगिक विखंडन' (Sexual Cleavage) का अर्थ है -",
        options: ["Boys and Girls play together", "Boys and Girls reject to play together", "Boys liking their mother", "Girls liking their father"],
        optionsHindi: ["लड़के – लड़कियाँ मिलकर खेलना", "लड़के – लड़कियाँ मिलकर खेलने से मना करना", "लड़के माँ को पसंद करना", "लड़कियाँ पिता को पसंद करना"], answer: 1,
    },
    {
        id: 13, sourceId: 67,
        question: '"Dictionary of Psychology" was written by',
        hindi: '"Dictionary of Psychology" के लेखक हैं -',
        options: ["Chaplin", "Skinner", "Weshler", "Morgan"],
        optionsHindi: ["चैप्लिन", "स्किनर", "वेश्लर", "मॉर्गन"], answer: 0,
    },
    {
        id: 14, sourceId: 68,
        question: "This is not correct activity to improve leadership characteristics in Adolescents",
        hindi: "किशोरों में नेतृत्व लक्षणों को विकसित करने के लिए यह उचित गतिविधि नहीं है -",
        options: ["Join the students in NCC", "Training the students to develop life skills", "To make participate in school programs", "To make participate in illegal activities"],
        optionsHindi: ["छात्रों को NCC में भर्ती कराना", "जीवन कौशलों को विकसित करने के लिए छात्रों को प्रशिक्षण देना", "पाठशाला के कार्यक्रमों में भाग लेने के लिए प्रोत्साहित करना", "अवैध गतिविधियों में भाग लेने के लिए प्रोत्साहित करना"], answer: 3,
    },
    {
        id: 15, sourceId: 71,
        question: "The group behaviour of Adolescents is seen in the following activities. A: Fun and joy through activities like singing, dancing etc. B: Indulging in destructive activities like strikes, protests etc.",
        hindi: "किशोरों के समूह के प्रति व्यवहार को निम्न गतिविधियों में देखा जा सकता है। A: मजा और आनंद प्रदान करने वाले गीत गाना, नृत्य करना जैसे कार्यक्रमों में भाग लेना। B: हड़ताल, विरोध आदि जैसी विनाशकारी गतिविधियों में लिप्त होना।",
        options: ["Only A is correct", "Only B is correct", "Both A & B are correct", "Both A & B are incorrect"],
        optionsHindi: ["केवल A सही", "केवल B सही", "A और B दोनों सही", "A और B दोनों सही नहीं"], answer: 2,
    },
    {
        id: 16, sourceId: 75,
        question: "This is not the type of intelligence according to Thorndike",
        hindi: "थॉर्नडाइक के अनुसार यह बुद्धि का प्रकार नहीं है -",
        options: ["Abstract intelligence", "Mechanical Intelligence", "Social intelligence", "Environmental Intelligence"],
        optionsHindi: ["अमूर्त बुद्धि", "यांत्रिक बुद्धि", "सामाजिक बुद्धि", "पर्यावरणीय बुद्धि"], answer: 3,
    },
    {
        id: 17, sourceId: 86,
        question: "Incorrect pair related to theories of Intelligence and their proponents",
        hindi: "बुद्धि के सिद्धांत और उनके प्रतिपादकों से संबंधित गलत जोड़ी पहचानिए -",
        options: ["Multiple Intelligence Theory - Howard Gardner", "Multi Factor Theory of Intelligence - Jean Piaget", "Group Factor Theory of Intelligence - L.L. Thurstone", "A Structure of Intellect Model Theory - Guilford"],
        optionsHindi: ["बहुबुद्धि सिद्धांत - हावर्ड गार्डनर", "बहुकारक बुद्धि सिद्धांत - जीन पियाजे", "समूह कारक बुद्धि सिद्धांत - एल.एल. थर्स्टन", "संरचना-प्रकार बुद्धि मॉडल सिद्धांत - गिलफोर्ड"], answer: 1,
    },
    {
        id: 18, sourceId: 93,
        question: "Sometimes we experience that things which we are seeing now are already seen. This is called",
        hindi: "कई बार हम जिन विषयों को देखते हैं, उनको पहले ही देखे जाने के भ्रम में रहते हैं। इसे क्या कहते हैं -",
        options: ["Dejavu", "Schemata", "Fued", "Zeigarnik effect"],
        optionsHindi: ["डेजावू", "स्कीमाटा", "फ्यूड", "जैगार्निक प्रभाव"], answer: 0,
    },
    {
        id: 19, sourceId: 161,
        question: "Positive transfer occurs when previous learning",
        hindi: "सकारात्मक अंतरण तब होता है जब पूर्व अधिगम -",
        options: ["Stops new learning", "No Effect", "Helps new learning", "Disturbs new learning"],
        optionsHindi: ["नए अधिगम को रोकता है", "कोई प्रभाव नहीं डालता", "नए अधिगम में सहायता करता है", "नए अधिगम को बाधित करता है"], answer: 2,
    },
    {
        id: 20, sourceId: 172,
        question: "Theory of Hierarchy of Needs was developed by",
        hindi: "आवश्यकताओं के पदानुक्रम का सिद्धांत किसने दिया?",
        options: ["Thorndike", "Watson", "Maslow", "Pavlov"],
        optionsHindi: ["थॉर्नडाइक", "वॉटसन", "मास्लो", "पावलॉव"], answer: 2,
    },
    {
        id: 21, sourceId: 201,
        question: "Classroom management principle of respect and empathy come under this approach",
        hindi: "सम्मान और सहानुभूति का कक्षा प्रबंधन सिद्धांत इस उपागम के अंतर्गत आता है -",
        options: ["Autocratic Approach", "Humanistic Approach", "Behaviouristic Approach", "Democratic Approach"],
        optionsHindi: ["निरंकुश उपागम", "मानवतावादी उपागम", "व्यवहारवादी उपागम", "लोकतांत्रिक उपागम"], answer: 1,
    },
    {
        id: 22, sourceId: 206,
        question: "Most suitable seating arrangement for the teacher-centred lecture",
        hindi: "शिक्षक-केंद्रित व्याख्यान के लिए सबसे उपयुक्त बैठने की व्यवस्था है -",
        options: ["Traditional Rows", "Bean bag Seating", "Small Groups", "Circular Environment"],
        optionsHindi: ["पारंपरिक पंक्तियाँ", "बीन बैग बैठने की व्यवस्था", "छोटे समूह", "वृत्ताकार वातावरण"], answer: 0,
    },
    {
        id: 23, sourceId: 216,
        question: "Positive aspect of mental health",
        hindi: "मानसिक स्वास्थ्य का सकारात्मक पक्ष है -",
        options: ["Overthinking", "Malnutrition", "Adjustment to the surroundings", "Frustration"],
        optionsHindi: ["अधिक सोचना", "कुपोषण", "परिवेश के साथ समायोजन", "निराशा"], answer: 2,
    },
    {
        id: 24, sourceId: 221,
        question: "RTE Act was implemented from this year",
        hindi: "RTE अधिनियम इस वर्ष से लागू हुआ -",
        options: ["2009", "2008", "2010", "2005"],
        optionsHindi: ["2009", "2008", "2010", "2005"], answer: 2,
    },
    {
        id: 25, sourceId: 239,
        question: "In the formula of Median, + 2, c denotes",
        hindi: "माध्यिका के सूत्र में + 2 में c का अर्थ है -",
        options: ["Frequency", "Lower Limit of the Class", "Class - Interval", "Sum of the Frequency"],
        optionsHindi: ["आवृत्ति", "वर्ग की निम्न सीमा", "वर्ग-अंतराल", "आवृत्तियों का योग"], answer: 2,
    },
    {
        id: 26, sourceId: 246,
        question: "This is not a limitation of Educational films",
        hindi: "यह शैक्षिक चलचित्रों की सीमा नहीं है -",
        options: ["Training is required to operate projector", "Some schools do not have necessary resources", "It is very expensive", "Creates interest to students"],
        optionsHindi: ["प्रोजेक्टर चलाने के लिए प्रशिक्षण आवश्यक है", "कुछ विद्यालयों में आवश्यक संसाधन नहीं होते", "यह बहुत महँगा है", "छात्रों में रुचि उत्पन्न करता है"], answer: 3,
    },
    {
        id: 27, sourceId: 251,
        question: "In Flander's Interaction Analysis Category Method, the category Lecturing comes under this item.",
        hindi: "फ्लैंडर्स की अंतःक्रिया विश्लेषण श्रेणी विधि में Lecturing इस मद के अंतर्गत आता है -",
        options: ["Teacher Talk", "Student Talk", "Silence", "Confusion"],
        optionsHindi: ["शिक्षक वार्ता", "विद्यार्थी वार्ता", "मौन", "भ्रम"], answer: 0,
    },
    {
        id: 28, sourceId: 257,
        question: "The network that works in small areas like a building or a campus",
        hindi: "भवन या कैंपस जैसे छोटे स्थानों पर काम करने वाला नेटवर्क है -",
        options: ["MAN", "LAN", "GAN", "WAN"],
        optionsHindi: ["MAN", "LAN", "GAN", "WAN"], answer: 1,
    },
    {
        id: 29, sourceId: 260,
        question: "Father of modern computer",
        hindi: "आधुनिक संगणक का पितामह है -",
        options: ["Charles Babbage", "Stephen Hawking", "Pascal", "Leibniz"],
        optionsHindi: ["चार्ल्स बैबेज", "स्टीफेन हॉकिंग", "पास्कल", "लाइबनिज"], answer: 0,
    },
    {
        id: 30, sourceId: 268,
        question: "Full form of HTTP",
        hindi: "HTTP का विस्तृत रूप है -",
        options: ["Hyper Text Transfer Protocol", "Hyper Test Transfer Protocol", "Hyper Text Transfer Publishing", "Higher Test Transfer Protocol"],
        optionsHindi: ["Hyper Text Transfer Protocol", "Hyper Test Transfer Protocol", "Hyper Text Transfer Publishing", "Higher Test Transfer Protocol"], answer: 0,
    },

    // -------------------- ENGLISH : 31-60 --------------------
    {
        id: 31, sourceId: 3,
        question: 'She was also a certified flight instructor. Choose the synonym of the word “instructor”.',
        options: ["trainer", "pupil", "student", "schoolboy"], answer: 0,
    },
    {
        id: 32, sourceId: 39,
        question: "The next day the stingy neighbour came. Choose the antonym of the word „stingy‟.",
        options: ["miserly", "mean", "generous", "parsimonious"], answer: 2,
    },
    {
        id: 33, sourceId: 105,
        question: "Choose the correct idiomatic expression.",
        options: ["to fright tooth and nail.", "to feel tooth and hail.", "to fight bone and nail.", "to fight tooth and nail."], answer: 3,
    },
    {
        id: 34, sourceId: 113,
        question: "Choose the correct idiomatic expression.",
        options: ["a drop in the ocean", "a fish in the ocean", "a snake in the ocean", "a boat in the ocean"], answer: 0,
    },
    {
        id: 35, sourceId: 126,
        question: "He’s always plunging in at the deep end. Choose the correct meaning of the phrase „plunging in‟.",
        options: ["doing without thinking", "doing carefully", "refusing", "accepting"], answer: 0,
    },
    {
        id: 36, sourceId: 140,
        question: "Everybody ridiculed my accent. Choose the correct phrasal verb for the underlined word.",
        options: ["laughed at", "laughed in", "laughed out", "laughed after"], answer: 0,
    },
    {
        id: 37, sourceId: 149,
        question: "The ___ was shining brightly when the farmer called his ____. Identify the correct option that fits the blanks.",
        options: ["son, sun", "sun, son", "son, son", "sun, sun"], answer: 1,
    },
    {
        id: 38, sourceId: 165,
        question: "Blood flows through your ____",
        options: ["vain", "vanes", "veins", "vans"], answer: 2,
    },
    {
        id: 39, sourceId: 173,
        question: "„Botany‟ is the scientific study of plants and their structure. Add a suitable suffix to „Botany‟ to make it „adjective‟.",
        options: ["-ical", "–ically", "–call", "–cally"], answer: 0,
    },
    {
        id: 40, sourceId: 199,
        question: "The teacher ___ an important role in shaping the student‟s future. Choose the option that collocates the best.",
        options: ["makes", "gives", "does", "plays"], answer: 3,
    },
    {
        id: 41, sourceId: 219,
        question: "It was so tasty and juicy. Identify the part of the speech of the word „and‟.",
        options: ["Noun", "Adjective", "Adverb", "Conjunction"], answer: 3,
    },
    {
        id: 42, sourceId: 255,
        question: "Which is ____ longest river in India? Choose the option that fits the blank.",
        options: ["a", "an", "the", "No article"], answer: 2,
    },
    {
        id: 43, sourceId: 274,
        question: "Identify the tense. I am not working this week.",
        options: ["Simple Present Tense", "Present Perfect Tense", "Present Continuous Tense", "Past Continuous Tense"], answer: 2,
    },
    {
        id: 44, sourceId: 298,
        question: "He had caught many snakes. Choose the correct Passive Voice.",
        options: ["Many snakes had been caught by him.", "Many snakes have been caught by him.", "Many snakes had been caught by he.", "Many snakes has been caught by him."], answer: 0,
    },
    {
        id: 45, sourceId: 322,
        question: 'Direct: He said to her, “Look at the paper.” Indirect: He ordered her to ___ at the paper. Choose the correct option that fits in the blank.',
        options: ["looked", "has looked", "looking", "look"], answer: 3,
    },
    {
        id: 46, sourceId: 346,
        question: "Identify the correct negative declarative sentence.",
        options: ["She does not sell fish.", "She does not sells fish.", "She do not sell fish.", "She do not sells fish."], answer: 0,
    },
    {
        id: 47, sourceId: 374,
        question: "Vivekananda faced many difficulties in his life. _____, he always had a positive Attitude towards life. Choose the correct linker.",
        options: ["So", "Therefore", "However", "Besides"], answer: 2,
    },
    {
        id: 48, sourceId: 394,
        question: "Would you like to have a cup of coffee? Identify the language function in the above sentence.",
        options: ["Ability", "Permission", "Possibility", "Offer"], answer: 3,
    },
    {
        id: 49, sourceId: 425,
        question: "Choose the sentence that has the correct agreement of the verb with the subject.",
        options: ["Neither his mother nor his father is alive.", "Neither his mother nor his father were alive.", "Neither his mother nor his father will alive.", "Neither his mother nor his father would alive."], answer: 0,
    },
    {
        id: 50, sourceId: 474,
        question: "Choose the expression in which the adjectives are in their correct order.",
        options: ["a wooden beautiful picture frame", "a beautiful wooden picture frame", "beautiful picture a wooden frame", "a wooden picture beautiful frame"], answer: 1,
    },
    {
        id: 51, sourceId: 581,
        question: "Identify the correctly punctuated sentence.",
        options: ['Somu said, “i am tired”.', 'Somu , “said I am tired”.', 'Somu said, “I am tired.”', 'Somu said, i am “tired”.'], answer: 2,
    },
    {
        id: 52, sourceId: 592,
        question: "Identify the correctly punctuated sentence.",
        options: ['“How beautiful this child is!” Geeta exclaimed.', '“How beautiful this child is.” Geeta exclaimed.', '“How beautiful this child is?” Geeta exclaimed.', '“How is this child beautiful.” Geeta exclaimed.'], answer: 0,
    },
    {
        id: 53, sourceId: 599,
        question: "Identify the correctly capitalized sentence.",
        options: ["Amaravti is the Capital of Andhra pradesh.", "Amaravti is the capital of andhra pradesh.", "Amaravti is the capital of Andhra Pradesh.", "amaravti is the Capital of andhra Pradesh."], answer: 2,
    },
    {
        id: 54, sourceId: 604,
        question: "Choose the correct subscription written in a letter to a teacher by a student.",
        options: ["Yours lovingly,", "Yours faithfully,", "Yours Obediently,", "Yours affectionately,"], answer: 2,
    },
    {
        id: 55, sourceId: 609,
        question: "____ is popularly known as e-mail.",
        options: ["Educational mail", "Entertainment mail", "Employment mail", "Electronic mail"], answer: 3,
    },
    {
        id: 56, sourceId: 616,
        question: "___ is a permanent record of personal events, thoughts and ideas of an individual.",
        options: ["A diary", "A notice", "A biographical sketch", "An invitation"], answer: 0,
    },
    {
        id: 57, sourceId: 651,
        question: "Identify the silent letter from the word „tomb‟.",
        options: ["m", "o", "b", "t"], answer: 2,
    },
    {
        id: 58, sourceId: 660,
        question: "Identify the silent letter from the word „monarch‟.",
        options: ["m", "n", "r", "a"], answer: 2,
    },
    {
        id: 59, sourceId: 690,
        question: "Read the following.\nA tree saw its friend, a river crying. The tree asked the river for the reason. The river said, “There is no water left in me. Everyone is dumping waste into me. I am going to die very soon.”\nAnswer the following.\nWhy was the river crying?",
        options: ["Its friend the tree was dying.", "It was going to die.", "There was a lot of water into it.", "It was going to flow into a sea."], answer: 1,
    },
    {
        id: 60, sourceId: 720,
        question: "Read the following.\nThe trees inside are moving out into the forest,\nThe forest that was empty all these days\nWhere no bird could sit\nNo insect hide.\nAnswer the following.\nWhere are the trees going?",
        options: ["They are going inside the house.", "They are going into the forest", "They are going into the town", "They are going to the neighboring house."], answer: 1,
    },
    // -------------------- Hindi : 61-90 --------------------
    {
        id: 61, sourceId: 2,
        question: "तो सया उठ और सपने को याद करने लगी। वह एकदम से घबरा गयी। तो सया सोचने लगी कि क्या सचमुच रंग गायब हो गये हैं? तो सया क्या सोच रही थी?",
        options: ["तो सया की नींद खराब हुई।", "तो सया के सपने में सारे रंग गायब हो गये हैं।", "तो सया को घबराने की आदत है।", "तो सया की तबीयत खराब हुई।"], answer: 1,
    },
    {
        id: 62, sourceId: 20,
        question: "गुजरात के एक प्रकार का दलिय गायन गरबा है, जिसे विशेष विधि से घेरे में घूम-घूमकर औरत गाती हैं। साथ ही लकड़ियाँ भी बजाती जाती हैं जो बाजे का काम करती हैं। गरबा गीत में ये बाजे का काम करती हैं?",
        options: ["लकड़ियाँ", "ढोलक", "शहनाई", "सारंगी"], answer: 0,
    },
    {
        id: 63, sourceId: 36,
        question: "अपना पथ कभी न छोड़ें, अपना प्रण कभी न तोड़ेंगे, हिम्मत से नाता जोड़ेंगे। कवि किससे नाता जोड़ने की बात कह रहा है?",
        options: ["प्रण से", "पथ से", "हिम्मत से", "अपने से"], answer: 2,
    },
    {
        id: 64, sourceId: 41,
        question: "संस्कृत व्याकरण में व्यंजन को ऐसे कहते हैं—",
        options: ["अच्", "हल", "हल", "हलंत"], answer: 2,
    },
    {
        id: 65, sourceId: 43,
        question: "यह अनुनासिक स्वर के चिह्न का नाम है—",
        options: ["चंद्ररेखा", "चंद्रबिंदु", "बंब", "चंद्रकांत"], answer: 1,
    },
    {
        id: 66, sourceId: 51,
        question: "निम्न विकल्पों में से द और व वर्ण के संयुक्ताक्षर का योग पहचानिए।",
        options: ["दवाई", "वाद-विवाद", "महाद्वीप", "विद्रोह"], answer: 2,
    },
    {
        id: 67, sourceId: 72,
        question: "‘समान’ शब्द का विलोम शब्द विकल्प में से पहचानिए।",
        options: ["असमान", "आसमान", "अपमान", "असमान"], answer: 2,
    },
    {
        id: 68, sourceId: 79,
        question: "‘रवि’ शब्द का सही संधि-विच्छेद पहचानिए।",
        options: ["रवी + इ", "रव + इ", "रव + इं", "रवः + इं"], answer: 1,
    },
    {
        id: 69, sourceId: 92,
        question: "दिए गये विकल्प से ‘हाथी’ शब्द का सही संज्ञा भेद पहचानिए।",
        options: ["जातिवाचक संज्ञा", "व्यक्तिवाचक संज्ञा", "द्रव्यवाचक संज्ञा", "समूहवाचक संज्ञा"], answer: 0,
    },
    {
        id: 70, sourceId: 98,
        question: "निम्न विकल्पों में से सही जातिवाचक संज्ञा शब्द पहचानिए।",
        options: ["जवानी", "सभा", "हिमालय", "अभिनेता"], answer: 3,
    },
    {
        id: 71, sourceId: 112,
        question: "निम्न में से सही अपूर्णांकबोधक विशेषण शब्द पहचानिए।",
        options: ["करोड़", "आधा", "अधिक", "मीठा"], answer: 1,
    },
    {
        id: 72, sourceId: 119,
        question: "‘जिसके आने की तिथि ज्ञात न हो’ सही एक शब्द पहचानिए।",
        options: ["अतिथि", "अयागत", "अनुज", "अमर"], answer: 0,
    },
    {
        id: 73, sourceId: 134,
        question: "मेहनत करने वाले विद्यार्थी दिन दूनी रात चौगुनी तरक्की करते रहते हैं। वाक्य में युक्त मुहावरे को पहचानिए।",
        options: ["मेहनत करने वाले", "विद्यार्थी दिन दूनी", "तरक्की करना", "दिन दूनी रात चौगुनी"], answer: 3,
    },
    {
        id: 74, sourceId: 137,
        question: "गंगोत्री में गंगा का ‘उद्भव’ हुआ है। ‘उद्भव’ शब्द में कौन सा उपसर्ग है?",
        options: ["उ", "उद", "उत्", "उभ"], answer: 2,
    },
    {
        id: 75, sourceId: 146,
        question: "चरण झगड़ालू लड़का है। ‘झगड़ालू’ शब्द में कौन सा प्रत्यय है?",
        options: ["आ", "लू", "आलू", "डालू"], answer: 2,
    },
    {
        id: 76, sourceId: 156,
        question: "घोड़ा ईमानदार जानवर है। इस वाक्य का सही स्त्रीलिंग रूप पहचानिए।",
        options: ["घोड़िया ईमानदार जानवर है।", "घोड़न ईमानदार जानवर है।", "घोड़नी ईमानदार जानवर है।", "घोड़ी ईमानदार जानवर है।"], answer: 3,
    },
    {
        id: 77, sourceId: 159,
        question: "शिक्षिका अच्छी तरह पढ़ाती है। इस वाक्य का सही पुल्लिंग रूप पहचानिए।",
        options: ["शिक्षक अच्छी तरह पढ़ाता है।", "शिक्षालु अच्छी तरह पढ़ाता है।", "शिक्षक अच्छी तरह पढ़ाता है।", "शैक्षिक अच्छी तरह पढ़ाता है।"], answer: 2,
    },
    {
        id: 78, sourceId: 169,
        question: "‘मकड़ी जाल बुनती है।’ इस वाक्य का सही वचन परिवर्तित रूप पहचानिए।",
        options: ["मकड़े जाल बुनती हैं।", "मकड़एँ जाल बुनती हैं।", "मकड़ियाँ जाल बुनती हैं।", "मकड़याँ जाल बुनती हैं।"], answer: 3,
    },
    {
        id: 79, sourceId: 175,
        question: "पता पुत्र के लिए खिलौना लाया। इस वाक्य में कौन सा कारक है?",
        options: ["करण कारक", "संबंध कारक", "संबोधन कारक", "संदान कारक"], answer: 0,
    },
    {
        id: 80, sourceId: 179,
        question: "अरे भई! तुम अब तक कहाँ थे? इस वाक्य में कौन सा कारक है?",
        options: ["संबोधन कारक", "कर्ता कारक", "करण कारक", "संदान कारक"], answer: 0,
    },
    {
        id: 81, sourceId: 185,
        question: "वह घर आना चाहता है। इस वाक्य में कौन सी संयुक्त क्रिया है?",
        options: ["इच्छा बोधक", "समाप्ति बोधक", "शक्ति बोधक", "निश्चय बोधक"], answer: 0,
    },
    {
        id: 82, sourceId: 191,
        question: "आप उधर जाइए। ‘उधर’ शब्द में कौन सा क्रिया विशेषण है?",
        options: ["स्थानवाचक", "रीतिवाचक", "परिमाणवाचक", "कालवाचक"], answer: 0,
    },
    {
        id: 83, sourceId: 199,
        question: "निश्चयवाचक वाक्य को छोड़कर सभी प्रकार के वाक्य के अंत में इस विराम चिह्न का प्रयोग किया जाता है।",
        options: ["पूर्ण विराम", "विस्मय सूचक चिन्ह", "प्रश्न सूचक चिन्ह", "अर्ध विराम"], answer: 0,
    },
    {
        id: 84, sourceId: 215,
        question: "‘मत्स्य’ तत्सम शब्द का सही तद्भव रूप पहचानिए।",
        options: ["मदार", "मोर", "मछल", "मैल"], answer: 2,
    },
    {
        id: 85, sourceId: 225,
        question: "‘जमदन’ पाठ में मामा-मामी चिट्ठी के लिए क्या लाये हैं?",
        options: ["नये कपड़े", "कहानियों की किताब", "फल-फूल", "बोलने वाली गुड़िया"], answer: 1,
    },
    {
        id: 86, sourceId: 230,
        question: "‘मेरी बहना’ पाठ में पूरे घर का गहना कौन है?",
        options: ["भैया", "बहना", "पड़ोसी", "पिता"], answer: 1,
    },
    {
        id: 87, sourceId: 231,
        question: "‘खिलौनेवाला’ पाठ में गुद्दे का दाम क्या है?",
        options: ["एक पैसा", "दो पैसे", "तीन पैसे", "दस पैसे"], answer: 0,
    },
    {
        id: 88, sourceId: 243,
        question: "‘कोयल’ की कविता की कवयित्री है—",
        options: ["सुभद्रा कुमारी चौहान", "महादेवी वर्मा", "अनन्ता गंग", "जया मेहता"], answer: 0,
    },
    {
        id: 89, sourceId: 244,
        question: "‘ज्ञान हमको दीजिए’ कविता पाठ के कवि हैं—",
        options: ["रांगेय राघव", "रामकुमार वर्मा", "रामनरेश पाठ", "महादेवी वर्मा"], answer: 2,
    },
    {
        id: 90, sourceId: 269,
        question: "आठवीं कक्षा की “गीत” कविता पाठ के कवि हैं—",
        options: ["मैथिलीशरण गुप्त", "जयशंकर प्रसाद", "केदारनाथ अग्रवाल", "सूर्यकांत पाठ नराला"], answer: 2,
    },
    {
        id: 91,
        sourceId: 1,
        question: "Which word is considered a synonym of ‘हंद’?",
        hindi: "‘हंद’ शब्द का पर्याय इस शब्द से मानी जाती है -",
        options: ["बंद", "सधु", "बूँद", "संध"],
        optionsHindi: ["बंद", "सधु", "बूँद", "संध"],
        answer: 1,
    },
    {
        id: 92,
        sourceId: 4,
        question: "What name did Dr. Ram Kumar Verma give instead of ‘Veergathakal’?",
        hindi: "डॉ. रामकुमार वर्मा ने “वीरगाथाकाल” के स्थान पर यह नाम दिया -",
        options: ["चारण काल", "रीति काल", "भक्ति काल", "नवीन काल"],
        optionsHindi: ["चारण काल", "रीति काल", "भक्ति काल", "नवीन काल"],
        answer: 0,
    },
    {
        id: 93,
        sourceId: 7,
        question: "According to Rahul Sankrityayan, who was the first poet of Hindi?",
        hindi: "राहुल सांकृत्यायन के अनुसार हिंदी का प्रथम कवि है -",
        options: ["चंदबरदाई", "सरहपाद", "जगनक", "मैथिलीशरण गुप्त"],
        optionsHindi: ["चंदबरदाई", "सरहपाद", "जगनक", "मैथिलीशरण गुप्त"],
        answer: 1,
    },
    {
        id: 94,
        sourceId: 10,
        question: "Which of the following is a work of the Adikal period?",
        hindi: "निम्न में से आदिकालीन रचना है -",
        options: ["असाइत वार", "सोहला", "खुमाण रासो", "नसीहत नामा"],
        optionsHindi: ["असाइत वार", "सोहला", "खुमाण रासो", "नसीहत नामा"],
        answer: 2,
    },
    {
        id: 95,
        sourceId: 14,
        question: "Who is a major poet of the Premashrayi branch?",
        hindi: "निम्न में से प्रेमाश्रयी शाखा के प्रमुख कवि हैं -",
        options: ["कबीरदास", "जायसी", "तुलसीदास", "सूरदास"],
        optionsHindi: ["कबीरदास", "जायसी", "तुलसीदास", "सूरदास"],
        answer: 1,
    },
    {
        id: 96,
        sourceId: 18,
        question: "According to the poet of the Jnanashrayi path, who is greater than Guru Govind?",
        hindi: "ज्ञानाश्रयी मार्ग के इस प्रमुख कवि के अनुसार गुरु गोविंद से भी बड़े हैं -",
        options: ["कबीरदास", "तुलसीदास", "नरहरदास", "देवोदास"],
        optionsHindi: ["कबीरदास", "तुलसीदास", "नरहरदास", "देवोदास"],
        answer: 0,
    },
    {
        id: 97,
        sourceId: 21,
        question: "For which patron did the poet Dev compose ‘Bhavani Vilas’?",
        hindi: "रीतिकालीन कवि देव ने अपने आश्रयदाता के लिए “भवानी विलास” की रचना की -",
        options: ["भवानी सिंह", "कुशल सिंह", "सतीश सिंह", "छत्रसाल सिंह"],
        optionsHindi: ["भवानी सिंह", "कुशल सिंह", "सतीश सिंह", "छत्रसाल सिंह"],
        answer: 0,
    },
    {
        id: 98,
        sourceId: 25,
        question: "In which period did Hindi literature develop mainly in prose and poetry?",
        hindi: "हिंदी में पहली बार साहित्य का अधिकतर विकास गद्यात्मक और पद्यात्मक दो प्रकार से इस काल में हुआ -",
        options: ["रीतिकाल", "आदिकाल", "आधुनिक काल", "संधिकाल"],
        optionsHindi: ["रीतिकाल", "आदिकाल", "आधुनिक काल", "संधिकाल"],
        answer: 2,
    },
    {
        id: 99,
        sourceId: 28,
        question: "Who wrote the play ‘अंधेर नगरी’?",
        hindi: "“अंधेर नगरी” नाटक इनके द्वारा लिखे गये 14 प्रमुख नाटकों में से एक है -",
        options: ["भारतेंदु हरिश्चंद्र", "जयशंकर प्रसाद", "प्रेमचंद", "सोहनलाल द्विवेदी"],
        optionsHindi: ["भारतेंदु हरिश्चंद्र", "जयशंकर प्रसाद", "प्रेमचंद", "सोहनलाल द्विवेदी"],
        answer: 0,
    },
    {
        id: 100,
        sourceId: 31,
        question: "According to this poet, the word ‘छाया’ in ‘छायावाद’ means ‘the radiance of a pearl’.",
        hindi: "इस कवि के अनुसार “छायावाद” पदबंध के छाया शब्द का अर्थ “मोती की आभा” से है -",
        options: ["सुमित्रानंदन पंत", "जयशंकर प्रसाद", "दिनकर", "प्रेमचंद"],
        optionsHindi: ["सुमित्रानंदन पंत", "जयशंकर प्रसाद", "दिनकर", "प्रेमचंद"],
        answer: 1,
    },
    {
        id: 101,
        sourceId: 33,
        question: "Which epic by Jaishankar Prasad contains the story of Manu and Shraddha?",
        hindi: "छायावाद कवि जयशंकर प्रसाद की इस महाकाव्य में मनु और श्रद्धा की कहानी है -",
        options: ["आँसू", "सीता वनवास", "ध्रुवस्वामिनी", "कामायनी"],
        optionsHindi: ["आँसू", "सीता वनवास", "ध्रुवस्वामिनी", "कामायनी"],
        answer: 3,
    },
    {
        id: 102,
        sourceId: 36,
        question: "Which poem by Parmal has a special place in the Hindi mysticism tradition?",
        hindi: "परमल की इस कविता को हिंदी के रहस्यवाद परंपरा में विशेष स्थान है -",
        options: ["ये और वे", "तुम और मैं", "आप और हम", "यह और वह"],
        optionsHindi: ["ये और वे", "तुम और मैं", "आप और हम", "यह और वह"],
        answer: 1,
    },
    {
        id: 103,
        sourceId: 40,
        question: "Who is very famous in Persian Haalavad literature?",
        hindi: "फारसी के हालावाद साहित्य में इनका नाम बहुत प्रसिद्ध है -",
        options: ["इंशा अल्ला खाँ", "ग़ालिब", "उमर खैयाम", "महमद इकबाल"],
        optionsHindi: ["इंशा अल्ला खाँ", "ग़ालिब", "उमर खैयाम", "महमद इकबाल"],
        answer: 2,
    },
    {
        id: 104,
        sourceId: 43,
        question: "Which Hindi literary figure received the Jnanpith Award in 2005?",
        hindi: "वर्ष 2005 को ज्ञानपीठ पुरस्कार किस हिंदी साहित्यकार को प्रदान किया गया?",
        options: ["महादेवी वर्मा", "कुँवर नारायण", "नरेश मेहता", "निर्मल वर्मा"],
        optionsHindi: ["महादेवी वर्मा", "कुँवर नारायण", "नरेश मेहता", "निर्मल वर्मा"],
        answer: 1,
    },
    {
        id: 105,
        sourceId: 46,
        question: "Who is considered the first Hindi story writer?",
        hindi: "ये हिंदी की पहली कहानी लेखिका हैं -",
        options: ["हेमावती देवी", "चंद्रकिरण सौनरेक्सा", "बंग महिला", "चंद्रमुखी ओझा"],
        optionsHindi: ["हेमावती देवी", "चंद्रकिरण सौनरेक्सा", "बंग महिला", "चंद्रमुखी ओझा"],
        answer: 1,
    },
    {
        id: 106,
        sourceId: 49,
        question: "Who is the first novelist of the Hindi language?",
        hindi: "हिंदी भाषा के प्रथम उपन्यासकार हैं -",
        options: ["देवकीनंदन खत्री", "लाला श्रीनिवास", "सदल मिश्र", "जगमोहन सिंह"],
        optionsHindi: ["देवकीनंदन खत्री", "लाला श्रीनिवास", "सदल मिश्र", "जगमोहन सिंह"],
        answer: 1,
    },
    {
        id: 107,
        sourceId: 52,
        question: "In which century did drama originate?",
        hindi: "नाटक का उद्भव किस सदी में हुआ?",
        options: ["19वीं सदी", "18वीं सदी", "20वीं सदी", "17वीं सदी"],
        optionsHindi: ["19वीं सदी", "18वीं सदी", "20वीं सदी", "17वीं सदी"],
        answer: 1,
    },
    {
        id: 108,
        sourceId: 54,
        question: "Who is the playwright of the famous Hindi play ‘आधे-अधूरे’?",
        hindi: "हिंदी नाटक रंग में सुप्रसिद्ध “आधे-अधूरे” नाटक का नाटककार है -",
        options: ["उपनाथ अश्क", "डॉ. सुदर्शन", "जगदीशचंद्र ठाकुर", "मोहन राकेश"],
        optionsHindi: ["उपनाथ अश्क", "डॉ. सुदर्शन", "जगदीशचंद्र ठाकुर", "मोहन राकेश"],
        answer: 3,
    },

    {
        id: 109,
        sourceId: 55,
        question: "Marwari, Jaipur, Mewati and Malvi dialects belong to which sub-language?",
        hindi: "मारवाड़ी, जयपुर, मेवाती और मालवी बोलियाँ इस उपभाषा के अंतर्गत आती हैं -",
        options: ["कश्मीरी", "राजस्थानी", "पहाड़ी", "बिहारी"],
        optionsHindi: ["कश्मीरी", "राजस्थानी", "पहाड़ी", "बिहारी"],
        answer: 1,
    },
    {
        id: 110,
        sourceId: 57,
        question: "Awadhi dialect belongs to which sub-language?",
        hindi: "अवधी बोली इस उपभाषा के अंतर्गत आती है -",
        options: ["पहाड़ी", "राजस्थानी", "बिहारी", "पूर्वी हिंदी"],
        optionsHindi: ["पहाड़ी", "राजस्थानी", "बिहारी", "पूर्वी हिंदी"],
        answer: 3,
    },

    {
        id: 111,
        sourceId: 59,
        question: "Who is the author of the play ‘ध्रुवस्वामिनी’?",
        hindi: "ध्रुवस्वामिनी नाटक के लेखक कौन हैं?",
        options: ["हरिकृष्ण प्रेमी", "भारतेंदु हरिश्चंद्र", "जयशंकर प्रसाद", "विष्णु प्रभाकर"],
        optionsHindi: ["हरिकृष्ण प्रेमी", "भारतेंदु हरिश्चंद्र", "जयशंकर प्रसाद", "विष्णु प्रभाकर"],
        answer: 2,
    },
    {
        id: 112,
        sourceId: 61,
        question: "Which word is a synonym of ‘जल’ in the sentence?",
        hindi: "जल ही जीवन है। (जल शब्द का पर्यायवाची शब्द इस वाक्य में है।)",
        options: ["भगवान ही जीवन है।", "बल ही जीवन है।", "पानी ही जीवन है।", "वर्षा ही जीवन है।"],
        optionsHindi: ["भगवान ही जीवन है।", "बल ही जीवन है।", "पानी ही जीवन है।", "वर्षा ही जीवन है।"],
        answer: 2,
    },
    {
        id: 113,
        sourceId: 63,
        question: "What is the synonym of ‘सरिता’?",
        hindi: "‘सरिता’ शब्द का पर्यायवाची शब्द क्या है?",
        options: ["नद", "समुद्र", "धरती", "वनिता"],
        optionsHindi: ["नद", "समुद्र", "धरती", "वनिता"],
        answer: 0,
    },
    {
        id: 114,
        sourceId: 65,
        question: "What is the antonym of ‘दूर’?",
        hindi: "घर से दूर है। (रेखांकित शब्द का विलोम शब्द क्या है?)",
        options: ["पास", "अदूर", "व्यास", "सुदूर"],
        optionsHindi: ["पास", "अदूर", "व्यास", "सुदूर"],
        answer: 0,
    },
    {
        id: 115,
        sourceId: 67,
        question: "Identify the Tatsam word.",
        hindi: "निम्न में से तत्सम शब्द पहचानिए।",
        options: ["सावन", "चंद्र", "सूरज", "सपना"],
        optionsHindi: ["सावन", "चंद्र", "सूरज", "सपना"],
        answer: 1,
    },
    {
        id: 116,
        sourceId: 69,
        question: "What is the Tatsam form of ‘मोर’?",
        hindi: "बादल को देखते ही मोर खुशी से नाच उठता है। (रेखांकित शब्द का तत्सम रूप क्या है?)",
        options: ["मोरा", "मोरनी", "मयूर", "मोती"],
        optionsHindi: ["मोरा", "मोरनी", "मयूर", "मोती"],
        answer: 2,
    },
    {
        id: 117,
        sourceId: 71,
        question: "Identify the pair of masculine words.",
        hindi: "निम्न शब्दों में से पुल्लिंग शब्दों की जोड़ी पहचानिए।",
        options: ["कामना, इच्छा", "ताला, पहिया", "माया, दया", "आभा, छाया"],
        optionsHindi: ["कामना, इच्छा", "ताला, पहिया", "माया, दया", "आभा, छाया"],
        answer: 1,
    },
    {
        id: 118,
        sourceId: 73,
        question: "Choose the correct plural form of the sentence.",
        hindi: "बच्ची दूध पीती है। (इस वाक्य का सही बहुवचन रूप क्या है?)",
        options: ["बच्चा दूध पीता है।", "बच्ची दूध पीता है।", "बच्चे दूध पीते हैं।", "बच्चियाँ दूध पीती हैं।"],
        optionsHindi: ["बच्चा दूध पीता है।", "बच्ची दूध पीता है।", "बच्चे दूध पीते हैं।", "बच्चियाँ दूध पीती हैं।"],
        answer: 3,
    },
    {
        id: 119,
        sourceId: 76,
        question: "Choose the correct case markers for the blanks.",
        hindi: "राजा श्री कृष्णदेवराय तेनालीराम ....... चतुराई ...... बहुत खुश हुए। (रिक्त स्थान के लिए सही कारक चिह्न चुनिए।)",
        options: ["के, ने", "की, से", "की, में", "के, से"],
        optionsHindi: ["के, ने", "की, से", "की, में", "के, से"],
        answer: 1,
    },
    {
        id: 120,
        sourceId: 79,
        question: "What is the स्थायी भाव of Adbhut Rasa?",
        hindi: "अद्भुत रस का स्थायी भाव निम्न में से पहचानिए।",
        options: ["शोक", "भय", "उत्साह", "विस्मय"],
        optionsHindi: ["शोक", "भय", "उत्साह", "विस्मय"],
        answer: 3,
    },
    {
        id: 121,
        sourceId: 82,
        question: "Identify the word having two short matras.",
        hindi: "निम्न में दो लघु मात्रावाला शब्द पहचानिए।",
        options: ["जाल", "कौन", "जल", "जाला"],
        optionsHindi: ["जाल", "कौन", "जल", "जाला"],
        answer: 2,
    },
    {
        id: 122,
        sourceId: 85,
        question: "Which figure of speech is used when one object is compared with another?",
        hindi: "जहाँ एक वस्तु की तुलना दूसरी वस्तु से की जाय, वहाँ अलंकार होता है -",
        options: ["रूपक अलंकार", "उपमा अलंकार", "अनुप्रास अलंकार", "संदेह अलंकार"],
        optionsHindi: ["रूपक अलंकार", "उपमा अलंकार", "अनुप्रास अलंकार", "संदेह अलंकार"],
        answer: 1,
    },
    {
        id: 123,
        sourceId: 88,
        question: "Identify the correct Sandhi-viched of ‘दुर्गुण’.",
        hindi: "निम्न में से “दुर्गुण” शब्द का सही संधि-विच्छेद पहचानिए।",
        options: ["दुरा + गुण", "दुर + गुण", "दुः + गुण", "दूर + गुण"],
        optionsHindi: ["दुरा + गुण", "दुर + गुण", "दुः + गुण", "दूर + गुण"],
        answer: 2,
    },
    {
        id: 124,
        sourceId: 91,
        question: "Which Samasa is used in ‘शताब्द’?",
        hindi: "“शताब्द” में कौन सा समास है?",
        options: ["कर्मधारय समास", "द्विगु समास", "अव्ययीभाव समास", "तत्पुरुष समास"],
        optionsHindi: ["कर्मधारय समास", "द्विगु समास", "अव्ययीभाव समास", "तत्पुरुष समास"],
        answer: 1,
    },
    {
        id: 125,
        sourceId: 94,
        question: "Identify the prefix used in ‘अनुशासन’.",
        hindi: "अनुशासन का पालन कर। (इस वाक्य में युक्त उपसर्ग क्या है?)",
        options: ["अन्", "अ", "अनु", "शासन"],
        optionsHindi: ["अन्", "अ", "अनु", "शासन"],
        answer: 2,
    },
    {
        id: 126,
        sourceId: 97,
        question: "Identify the suffix used in ‘लिखावट’.",
        hindi: "“लिखावट” शब्द में युक्त प्रत्यय पहचानिए।",
        options: ["आवट", "वट", "लिख", "अट"],
        optionsHindi: ["आवट", "वट", "लिख", "अट"],
        answer: 0,
    },
    {
        id: 127,
        sourceId: 100,
        question: "What type of noun is ‘नदी’?",
        hindi: "“नदी” शब्द में यह संज्ञा है -",
        options: ["व्यक्तिवाचक", "भाववाचक", "द्रव्यवाचक", "जातिवाचक"],
        optionsHindi: ["व्यक्तिवाचक", "भाववाचक", "द्रव्यवाचक", "जातिवाचक"],
        answer: 3,
    },
    {
        id: 128,
        sourceId: 103,
        question: "Identify the first-person pronoun.",
        hindi: "उत्तम पुरुषवाचक सर्वनाम है -",
        options: ["मैं", "तुम", "वह", "वे"],
        optionsHindi: ["मैं", "तुम", "वह", "वे"],
        answer: 0,
    },
    {
        id: 129,
        sourceId: 106,
        question: "What type of adjective is ‘सफेद’?",
        hindi: "हमारे झंडे की बीचवाली पट्टी सफेद रंग की है। ‘सफेद’ कौन-सा विशेषण है?",
        options: ["संख्यावाचक विशेषण", "गुणवाचक विशेषण", "परिमाणवाचक विशेषण", "सार्वनामिक विशेषण"],
        optionsHindi: ["संख्यावाचक विशेषण", "गुणवाचक विशेषण", "परिमाणवाचक विशेषण", "सार्वनामिक विशेषण"],
        answer: 1,
    },
    {
        id: 130,
        sourceId: 109,
        question: "What type of संयुक्त क्रिया is used in the sentence?",
        hindi: "मोहन किताब पढ़ चुका है। इस वाक्य में संयुक्त क्रिया का यह रूप है -",
        options: ["आरंभ बोधक", "अभ्यास बोधक", "समाप्ति बोधक", "इच्छा बोधक"],
        optionsHindi: ["आरंभ बोधक", "अभ्यास बोधक", "समाप्ति बोधक", "इच्छा बोधक"],
        answer: 2,
    },
    {
        id: 131,
        sourceId: 112,
        question: "What is the second causative form of ‘पीना’?",
        hindi: "लड़का पानी पीता है। ‘पीना’ शब्द का द्वितीय प्रेरणार्थक क्रिया का रूप है -",
        options: ["पीलाना", "पिलाना", "पिलयाना", "पिलवाना"],
        optionsHindi: ["पीलाना", "पिलाना", "पिलयाना", "पिलवाना"],
        answer: 3,
    },
    {
        id: 132,
        sourceId: 115,
        question: "What type of क्रिया विशेषण is ‘भीतर’?",
        hindi: "दादाजी घर के भीतर काम करते हैं। रेखांकित शब्द में कौन-सा क्रिया विशेषण है?",
        options: ["स्थानवाचक क्रिया विशेषण", "कालवाचक क्रिया विशेषण", "परिमाणवाचक क्रिया विशेषण", "रीतिवाचक क्रिया विशेषण"],
        optionsHindi: ["स्थानवाचक क्रिया विशेषण", "कालवाचक क्रिया विशेषण", "परिमाणवाचक क्रिया विशेषण", "रीतिवाचक क्रिया विशेषण"],
        answer: 0,
    },
    {
        id: 133,
        sourceId: 121,
        question: "What are श, ष, स and ह called based on their pronunciation?",
        hindi: "श, ष, स और ह व्यंजन के उच्चारण में एक प्रकार की गरमाहट अथवा सुरसुराहट प्रतीत होती है, इन व्यंजन को कहते हैं -",
        options: ["अनुनासिक व्यंजन", "ऊष्म व्यंजन", "स्पर्श व्यंजन", "उच्चरित व्यंजन"],
        optionsHindi: ["अनुनासिक व्यंजन", "ऊष्म व्यंजन", "स्पर्श व्यंजन", "उच्चरित व्यंजन"],
        answer: 1,
    },

    {
        id: 134,
        sourceId: 125,
        question: "What is the meaning of the idiom ‘पेट में चूहे कूदना’?",
        hindi: "सुबह से कुछ नहीं खाया तो दोपहर तक पेट में चूहे कूदने लगे। ‘पेट में चूहे कूदना’ मुहावरे का अर्थ है -",
        options: ["निराश होना", "खुशामद होना", "बहुत अधिक भूख लगना", "घबरा जाना"],
        optionsHindi: ["निराश होना", "खुशामद होना", "बहुत अधिक भूख लगना", "घबरा जाना"],
        answer: 2,
    },
    {
        id: 135,
        sourceId: 128,
        question: "What is the meaning of the proverb ‘दोनों हाथ लड्डू’?",
        hindi: "“दोनों हाथ लड्डू” लोकोक्ति का अर्थ है -",
        options: ["सर्व लाभ ही लाभ होना", "धोखेबाजी", "फूट जाना", "अविश्वसनीय"],
        optionsHindi: ["सर्व लाभ ही लाभ होना", "धोखेबाजी", "फूट जाना", "अविश्वसनीय"],
        answer: 0,
    },
    {
        id: 136,
        sourceId: 131,
        question: "Who are described as holding the fan in ‘तरकारी दरबार’?",
        hindi: "‘तरकारी दरबार’ पाठ में पंखा झेलनेवाले हैं -",
        options: ["गोभी, आलू", "बैंगन, टमाटर", "मूल, गाजर", "टमाटर, भिंडी"],
        optionsHindi: ["गोभी, आलू", "बैंगन, टमाटर", "मूल, गाजर", "टमाटर, भिंडी"],
        answer: 2,
    },
    {
        id: 137,
        sourceId: 134,
        question: "In which village did the ‘ढिंसा’ folk dance originate?",
        hindi: "‘ढिंसा’ लोकनृत्य का प्रारंभ इस गाँव में हुआ -",
        options: ["सिरपुर", "कदर", "उडुपी", "सपी"],
        optionsHindi: ["सिरपुर", "कदर", "उडुपी", "सपी"],
        answer: 3,
    },
    {
        id: 138,
        sourceId: 137,
        question: "Which lake is near Sriharikota?",
        hindi: "श्रीहरिकोटा के पास यह झील है -",
        options: ["मुने", "पुलिकाट", "कोलेरू", "नायले"],
        optionsHindi: ["मुने", "पुलिकाट", "कोलेरू", "नायले"],
        answer: 1,
    },
    {
        id: 139,
        sourceId: 140,
        question: "Who were the producer and director of the film ‘तारे जमीन पर’?",
        hindi: "‘तारे जमीन पर’ फिल्म के निर्माता और निर्देशक ये थे -",
        options: ["सलमान खान", "आमिर खान", "खादर खान", "रशीद खान"],
        optionsHindi: ["सलमान खान", "आमिर खान", "खादर खान", "रशीद खान"],
        answer: 1,
    },

    {
        id: 140,
        sourceId: 145,
        question: "What type of pronunciation defect is shown by ‘विजय-वजे’?",
        hindi: "व्यक्ति का यह स्वभाव है कि वह किसी काम को बहुत जल्दी करना चाहता है। दो चरणों में यह बात पाई जाती है। फलतः शब्द का पूर्ण उच्चारण नहीं हो पाता यथा- विजय-वजे। यह इस प्रकार का उच्चारण दोष है -",
        options: ["आदत", "शीघ्रता", "शुद्धोच्चारण", "स्थान परिवर्तन"],
        optionsHindi: ["आदत", "शीघ्रता", "शुद्धोच्चारण", "स्थान परिवर्तन"],
        answer: 1,
    },
    {
        id: 141,
        sourceId: 148,
        question: "Which method is described using words with similar sounds such as धर्म, मर्म, गर्म and कर्म?",
        hindi: "स्वरवाचन की विधि में प्रारंभिक अवस्था में बालक के सामने वह शब्द रखे जाएँ, जिनके ध्वन्यात्मक समानता हो, जैसे- धर्म, मर्म, गर्म, कर्म।",
        options: ["देखो और कहो विधि", "साहचर्य विधि", "कहानी विधि", "विन्यास विधि"],
        optionsHindi: ["देखो और कहो विधि", "साहचर्य विधि", "कहानी विधि", "विन्यास विधि"],
        answer: 3,
    },
    {
        id: 142,
        sourceId: 151,
        question: "In which book did Aine discuss comparison and experimentation related to oral and silent reading?",
        hindi: "आइन ने अपनी इस पुस्तक में छात्रों के स्वरवाचन और मौन वाचन संबंधी उपलब्धियों की तुलना और प्रयोग की चर्चा की है -",
        options: ["रीडर्स डाइजेस्ट", "साइलेंट रीडिंग", "टीचिंग चिल्ड्रन", "टीचिंग पोयम"],
        optionsHindi: ["रीडर्स डाइजेस्ट", "साइलेंट रीडिंग", "टीचिंग चिल्ड्रन", "टीचिंग पोयम"],
        answer: 1,
    },
    {
        id: 143,
        sourceId: 154,
        question: "Which writing method uses the eyes, ears and hand together?",
        hindi: "लिखना सिखाने की इस विधि में आँख, कान आदि ज्ञानेंद्रिय और हाथ-तीन से सहायता ली जाती है, बालक पहले अक्षर को देखता है, ध्वनि को कान से सुनता है और रेगमाल आदि के अक्षर पर अंगुली फेरता है। वह लिखना सीख जाता है -",
        options: ["विन्यास विधि", "अनुकरण विधि", "देखो और कहो विधि", "मॉन्टेसरी विधि"],
        optionsHindi: ["विन्यास विधि", "अनुकरण विधि", "देखो और कहो विधि", "मॉन्टेसरी विधि"],
        answer: 3,
    },
    {
        id: 144,
        sourceId: 157,
        question: "Knowledge of language elements and different forms of literature comes under which objective?",
        hindi: "भाषा तत्व का ज्ञान प्राप्त करना और साहित्य की विविध विधाओं का ज्ञान प्राप्त करना- इस उद्देश्य के अंतर्गत आते हैं -",
        options: ["ज्ञानात्मक उद्देश्य", "कौशलात्मक उद्देश्य", "भावात्मक उद्देश्य", "कलात्मक उद्देश्य"],
        optionsHindi: ["ज्ञानात्मक उद्देश्य", "कौशलात्मक उद्देश्य", "भावात्मक उद्देश्य", "कलात्मक उद्देश्य"],
        answer: 0,
    },
    {
        id: 145,
        sourceId: 160,
        question: "Which type of poems are especially suitable for primary classes?",
        hindi: "प्रारंभिक कक्षाओं के लिए इस प्रकार की कविताएँ विशेष रूप से उपयुक्त हैं -",
        options: ["घटनाओं का वर्णन", "विचारात्मक कविताएँ", "बालगीत या तुकबंदियाँ", "महापुरुष की पौराणिक कथाएँ"],
        optionsHindi: ["घटनाओं का वर्णन", "विचारात्मक कविताएँ", "बालगीत या तुकबंदियाँ", "महापुरुष की पौराणिक कथाएँ"],
        answer: 2,
    },
    {
        id: 146,
        sourceId: 163,
        question: "Which statement about the usefulness of stories is NOT correct?",
        hindi: "कहानी की उपयोगिता के संबंध में यह कथन सही नहीं है-",
        options: [
            "बालक की कल्पना शक्ति विकसित होती है।",
            "कहानी मनोरंजन का मुख्य साधन है।",
            "बालक का शब्द भंडार बढ़ता है।",
            "बालक का ज्ञान-वर्धन नहीं होता है।"
        ],
        optionsHindi: [
            "बालक की कल्पना शक्ति विकसित होती है।",
            "कहानी मनोरंजन का मुख्य साधन है।",
            "बालक का शब्द भंडार बढ़ता है।",
            "बालक का ज्ञान-वर्धन नहीं होता है।"
        ],
        answer: 3,
    },
    {
        id: 147,
        sourceId: 166,
        question: "Which grammar teaching method presents examples first and then derives a general rule?",
        hindi: "व्याकरण की इस विधि में विद्यार्थियों के सामने पहले पर्याप्त संख्या में उदाहरण प्रस्तुत किये जाते हैं। फिर इन उदाहरणों के आधार पर विद्यार्थियों की सहायता से व्यापक नियम का निर्माण किया जाता है -",
        options: ["आगमन विधि", "भाषा-संसर्ग विधि", "सहयोग विधि", "सूत्र विधि"],
        optionsHindi: ["आगमन विधि", "भाषा-संसर्ग विधि", "सहयोग विधि", "सूत्र विधि"],
        answer: 0,
    },
    {
        id: 148,
        sourceId: 169,
        question: "What is the place of pronunciation of अ, आ and ह?",
        hindi: "अ, आ, ह – इन वर्णों का उच्चारण स्थान है -",
        options: ["दंतोष्ठ", "तालु और नासिका", "ओठ और नासिका", "कंठ"],
        optionsHindi: ["दंतोष्ठ", "तालु और नासिका", "ओठ और नासिका", "कंठ"],
        answer: 3,
    },
    {
        id: 149,
        sourceId: 172,
        question: "What type of spelling error is shown by placing a matra in the wrong position?",
        hindi: "कभी-कभी विद्यार्थी गलत स्थान पर भी मात्रा लगा देते हैं, यथा- ससुराल (सुसराल), परिणत (परिणत) आदि। यह अक्षर-विन्यास संबंधी यह अशुद्धि है -",
        options: ["मात्राओं का लोप", "स्थान परिवर्तन", "अशुद्ध मात्राएँ", "अनावश्यक मात्राएँ"],
        optionsHindi: ["मात्राओं का लोप", "स्थान परिवर्तन", "अशुद्ध मात्राएँ", "अनावश्यक मात्राएँ"],
        answer: 1,
    },
    {
        id: 150,
        sourceId: 175,
        question: "Which teaching principle is indicated by explaining the whole before explaining its parts?",
        hindi: "“बालक को पूरी बात बताने के बाद ही उसके भाग को बताइए।” किस शिक्षण सूत्र का संकेत देता है?",
        options: ["स्थूल से सूक्ष्म की ओर", "विश्लेषण से संश्लेषण की ओर", "ज्ञात से अज्ञात की ओर", "पूर्ण से अंश की ओर"],
        optionsHindi: ["स्थूल से सूक्ष्म की ओर", "विश्लेषण से संश्लेषण की ओर", "ज्ञात से अज्ञात की ओर", "पूर्ण से अंश की ओर"],
        answer: 3,
    },
];

export default function GrandTest3Page() {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (submitted) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setSubmitted(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [submitted]);

    const question = questions[current];

    const selectAnswer = (optionIndex: number) => {
        setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }));
    };

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    const goNext = () => {
        if (current < questions.length - 1) setCurrent((prev) => prev + 1);
    };

    const goPrevious = () => {
        if (current > 0) setCurrent((prev) => prev - 1);
    };

    const score = questions.reduce(
        (total, q) => total + (answers[q.id] === q.answer ? 1 : 0),
        0
    );
    const attempted = Object.keys(answers).length;
    const percentage = Math.round((score / questions.length) * 100);

    const restartTest = () => {
        setCurrent(0);
        setAnswers({});
        setTimeLeft(2 * 60 * 60);
        setSubmitted(false);
    };

    if (submitted) {
        return (
            <main style={{ minHeight: "100vh", background: "#f5f7fb", padding: "30px 16px", fontFamily: "Arial, sans-serif" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <div style={{ background: "white", borderRadius: 16, padding: 35, boxShadow: "0 4px 18px rgba(0,0,0,0.08)", textAlign: "center" }}>
                        <h1>AP TET 2A – Grand Test 3</h1>
                        <p style={{ color: "#666" }}>Test completed successfully.</p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 15, margin: "30px 0" }}>
                            <div style={{ background: "#eef4ff", padding: 20, borderRadius: 12 }}><b style={{ fontSize: 30 }}>{score}</b><div>Score</div></div>
                            <div style={{ background: "#eefbf2", padding: 20, borderRadius: 12 }}><b style={{ fontSize: 30 }}>{percentage}%</b><div>Percentage</div></div>
                            <div style={{ background: "#fff7e8", padding: 20, borderRadius: 12 }}><b style={{ fontSize: 30 }}>{attempted}</b><div>Attempted</div></div>
                            <div style={{ background: "#f7efff", padding: 20, borderRadius: 12 }}><b style={{ fontSize: 30 }}>{questions.length - attempted}</b><div>Unattempted</div></div>
                        </div>
                        <button onClick={restartTest} style={{ border: "none", background: "#2563eb", color: "white", padding: "13px 25px", borderRadius: 9, cursor: "pointer", fontSize: 16, fontWeight: 600 }}>Retake Test</button>
                    </div>

                    <div style={{ marginTop: 20, background: "white", borderRadius: 16, padding: 25, boxShadow: "0 4px 18px rgba(0,0,0,0.08)" }}>
                        <h2>Review Answers</h2>
                        {questions.map((q, index) => {
                            const selected = answers[q.id];
                            const correct = selected === q.answer;
                            return (
                                <div key={q.id} style={{ borderBottom: "1px solid #eee", padding: "18px 0" }}>
                                    <b>Q{index + 1}. Source Q{q.sourceId}</b>
                                    <p style={{ whiteSpace: "pre-line" }}>{q.question}</p>
                                    {q.hindi && <p style={{ color: "#555" }}>{q.hindi}</p>}
                                    <div><b>Your answer:</b>{" "}{selected !== undefined ? q.options[selected] : "Not Attempted"}</div>
                                    <div style={{ marginTop: 5 }}><b>Correct answer:</b>{" "}{q.options[q.answer]}</div>
                                    <div style={{ marginTop: 7, color: correct ? "#16a34a" : "#dc2626", fontWeight: 600 }}>{correct ? "Correct" : "Incorrect"}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main style={{ minHeight: "100vh", background: "#f5f7fb", fontFamily: "Arial, sans-serif", padding: 15 }}>
            <div style={{ maxWidth: 1250, margin: "0 auto" }}>
                <div style={{ background: "white", borderRadius: 12, padding: "15px 20px", marginBottom: 15, boxShadow: "0 3px 12px rgba(0,0,0,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 15, flexWrap: "wrap" }}>
                    <div>
                        <h1 style={{ margin: 0, fontSize: 23 }}>AP TET 2A – Grand Test 3</h1>
                        <div style={{ color: "#666", marginTop: 5, fontSize: 14 }}>90 Questions • 90 Marks</div>
                    </div>
                    <div style={{ background: "#111827", color: "white", padding: "10px 18px", borderRadius: 9, fontSize: 18, fontWeight: 700 }}>⏱ {formatTime(timeLeft)}</div>
                </div>

                <div className="exam-layout" style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 15, alignItems: "start" }}>
                    <div style={{ background: "white", borderRadius: 14, padding: 25, boxShadow: "0 3px 12px rgba(0,0,0,0.07)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, color: "#555", fontSize: 14 }}>
                            <span>Question {current + 1} of {questions.length}</span>
                            <span>Source Question: {question.sourceId}</span>
                        </div>

                        <h2 style={{ fontSize: 20, lineHeight: 1.5, marginBottom: 12, whiteSpace: "pre-line" }}>{question.question}</h2>

                        {question.hindi && (
                            <div style={{ fontSize: 19, lineHeight: 1.8, marginBottom: 25, padding: 15, background: "#fafafa", borderRadius: 10, borderLeft: "4px solid #2563eb" }}>
                                {question.hindi}
                            </div>
                        )}

                        {question.options.map((option, index) => {
                            const selected = answers[question.id] === index;
                            const hindiOption = question.optionsHindi?.[index];
                            return (
                                <label key={index} style={{ display: "block", padding: "14px 15px", marginBottom: 12, border: selected ? "2px solid #2563eb" : "1px solid #d8dce5", borderRadius: 10, cursor: "pointer", background: selected ? "#eff6ff" : "white" }}>
                                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                                        <input type="radio" name={`question-${question.id}`} checked={selected} onChange={() => selectAnswer(index)} style={{ marginTop: 5 }} />
                                        <div>
                                            <div style={{ fontWeight: 600, marginBottom: hindiOption ? 5 : 0 }}>{index + 1}. {option}</div>
                                            {hindiOption && <div style={{ color: "#555", fontSize: 16 }}>{hindiOption}</div>}
                                        </div>
                                    </div>
                                </label>
                            );
                        })}

                        <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 25 }}>
                            <button onClick={goPrevious} disabled={current === 0} style={{ padding: "12px 22px", borderRadius: 8, border: "1px solid #ccc", background: current === 0 ? "#eee" : "white", cursor: current === 0 ? "not-allowed" : "pointer", fontWeight: 600 }}>← Previous</button>
                            {current === questions.length - 1 ? (
                                <button onClick={() => setSubmitted(true)} style={{ padding: "12px 25px", borderRadius: 8, border: "none", background: "#16a34a", color: "white", cursor: "pointer", fontWeight: 700 }}>Submit Test</button>
                            ) : (
                                <button onClick={goNext} style={{ padding: "12px 25px", borderRadius: 8, border: "none", background: "#2563eb", color: "white", cursor: "pointer", fontWeight: 700 }}>Next →</button>
                            )}
                        </div>
                    </div>

                    <div style={{ background: "white", borderRadius: 14, padding: 20, boxShadow: "0 3px 12px rgba(0,0,0,0.07)", position: "sticky", top: 15 }}>
                        <h3 style={{ marginTop: 0 }}>Question Palette</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
                            {questions.map((q, index) => {
                                const answered = answers[q.id] !== undefined;
                                const active = current === index;
                                return (
                                    <button key={q.id} onClick={() => setCurrent(index)} style={{ height: 42, borderRadius: 7, border: active ? "3px solid #111827" : "1px solid #ddd", background: answered ? "#22c55e" : "#f3f4f6", color: answered ? "white" : "#111827", fontWeight: 700, cursor: "pointer" }}>{index + 1}</button>
                                );
                            })}
                        </div>

                        <div style={{ marginTop: 20, fontSize: 13, color: "#555" }}>
                            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}><span style={{ width: 15, height: 15, background: "#22c55e", borderRadius: 4 }} />Answered</div>
                            <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 15, height: 15, background: "#f3f4f6", border: "1px solid #ddd", borderRadius: 4 }} />Not Answered</div>
                        </div>

                        <div style={{ marginTop: 20, padding: 15, background: "#f8fafc", borderRadius: 9 }}>
                            <div><b>Attempted:</b> {attempted}/{questions.length}</div>
                            <div style={{ marginTop: 5 }}><b>Remaining:</b> {questions.length - attempted}</div>
                        </div>

                        <button onClick={() => setSubmitted(true)} style={{ width: "100%", marginTop: 18, padding: "12px", border: "none", borderRadius: 8, background: "#dc2626", color: "white", fontWeight: 700, cursor: "pointer" }}>Submit Test</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 850px) {
          .exam-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </main>
    );
}
