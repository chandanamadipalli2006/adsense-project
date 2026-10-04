"use client";



import { useEffect, useState } from "react";



type Question = {

    id: number;

    sourceId: number;

    question: string;

    hindi: string;

    options: string[];

    optionsHindi: string[];

    answer: number;

};



const baseQuestions: Question[] = [

    {

        id: 1,

        sourceId: 5,

        question:

            "Development = (maturation × A). Here A is",

        hindi:

            "विकास = (परिपक्वता × A)। यहाँ A का अर्थ है -",

        options: [

            "Learning",

            "Attitude",

            "Interest",

            "Intelligence",

        ],

        optionsHindi: [

            "अधिगम",

            "अभिवृत्ति",

            "रुचि",

            "बुद्धि",

        ],

        answer: 3,

    },



    {

        id: 2,

        sourceId: 13,

        question:

            "Growth is rapid during infancy and childhood. Later it becomes slower. In adolescence it is rapid again. This principle of development is",

        hindi:

            "शैशवावस्था और बाल्यावस्था में विकास की गति अधिक होकर बाद में धीमी पड़कर किशोरावस्था में फिर गति को प्राप्त करेगी। यह इस प्रकार का विकास सिद्धांत है -",

        options: [

            "Principle of Predictability",

            "Principle of Non-Uniform Pattern",

            "Principle of Cephalocaudal development",

            "Principle of Cumulative development",

        ],

        optionsHindi: [

            "विकास की भविष्यवाणी कर सकते हैं",

            "विकास सभी अवस्थाओं में एक जैसा नहीं होता है",

            "शिरो-पादाभिमुख विकास सिद्धांत",

            "विकास संचिति सिद्धांत",

        ],

        answer: 1,

    },



    {

        id: 3,

        sourceId: 20,

        question:

            "This stage is called as 'Period of Overlapping'",

        hindi:

            "इस अवस्था को अतिव्याप्त अवस्था कहते हैं -",

        options: [

            "Pre-natal stage",

            "Infancy",

            "Adulthood",

            "Puberty",

        ],

        optionsHindi: [

            "जन्म पूर्व अवस्था",

            "नवजात शिशु अवस्था",

            "प्रौढ़ावस्था",

            "यौनारंभ अवस्था",

        ],

        answer: 3,

    },



    {

        id: 4,

        sourceId: 27,

        question:

            "In human beings, nine months gestation period inside mother's womb is called",

        hindi:

            "मानव के मातृ गर्भ में नौ महीने तक भ्रूण के रहने की अवधि का नाम है -",

        options: [

            "Pre-natal period",

            "Neonatal stage",

            "Early childhood",

            "Adolescence",

        ],

        optionsHindi: [

            "जन्म पूर्व अवस्था",

            "नवजात शिशु अवस्था",

            "पूर्व बाल्यावस्था",

            "किशोरावस्था",

        ],

        answer: 0,

    },



    {

        id: 5,

        sourceId: 31,

        question:

            "Piaget's Cognitive Development stage from 2 years to 7 years is",

        hindi:

            "पियाजे के संज्ञानात्मक विकास के अनुसार दो वर्ष की आयु से लेकर सात वर्ष की आयु तक की अवस्था -",

        options: [

            "Sensory Motor Stage",

            "Pre-Operational Stage",

            "Concrete-Operational Stage",

            "Formal Operational Stage",

        ],

        optionsHindi: [

            "इन्द्रिय चालक अवस्था",

            "पूर्व प्रचालक अवस्था",

            "मूर्त प्रचालक अवस्था",

            "अमूर्त प्रचालक अवस्था",

        ],

        answer: 1,

    },



    {

        id: 6,

        sourceId: 40,

        question:

            "The Psycho Social crisis faced by a child at the stage of School Age according to Erik Erikson is",

        hindi:

            "एरिक एरिक्सन के अनुसार पाठशालावस्था के बालक इस मनोसामाजिक संक्लिष्ट स्थिति का सामना करता है -",

        options: [

            "Generativity – Stagnation",

            "Initiative – Guilt",

            "Industry – Inferiority",

            "Integrity – Despair",

        ],

        optionsHindi: [

            "उत्पादन – स्थगनता",

            "पहल करना – अपराध की भावना",

            "श्रम करना – न्यूनता",

            "समग्रता – निराशा",

        ],

        answer: 2,

    },



    {

        id: 7,

        sourceId: 47,

        question:

            "According to Kohlberg, at this stage people develop a sense of guilt if they fail to obey the universal principles.",

        hindi:

            "कोहलबर्ग के अनुसार सार्वभौमिक सूत्रों को अमल करने में ये व्यक्ति अगर विफल हो तो अपने अपराध की भावना बढ़ाते हैं -",

        options: [

            "Stage 2",

            "Stage 4",

            "Stage 6",

            "Stage 8",

        ],

        optionsHindi: [

            "अवस्था 2",

            "अवस्था 4",

            "अवस्था 6",

            "अवस्था 8",

        ],

        answer: 2,

    },



    {

        id: 8,

        sourceId: 49,

        question:

            "This is not a characteristic of Emotional Intelligence",

        hindi:

            "यह संवेगात्मक बुद्धि का लक्षण नहीं है -",

        options: [

            "Knowing our own emotions",

            "Managing one's emotions",

            "Handling relationships",

            "Doesn't recognize emotions of others",

        ],

        optionsHindi: [

            "अपने संवेगों को जानना",

            "अपने संवेगों को नियंत्रित करना",

            "संबंधों को संभालना",

            "दूसरों के संवेगों को न पहचानना",

        ],

        answer: 3,

    },



    {

        id: 9,

        sourceId: 56,

        question:

            "Socially matured children participate in this type of play.",

        hindi:

            "सामाजिक परिपक्व बच्चे इस प्रकार के खेलों में भाग लेते हैं -",

        options: [

            "Solitary Play",

            "Parallel Play",

            "Perpendicular Play",

            "Co-Operative Play",

        ],

        optionsHindi: [

            "एकांत खेल",

            "समानांतर खेल",

            "लंबवत खेल",

            "सहयोगात्मक खेल",

        ],

        answer: 3,

    },



    {

        id: 10,

        sourceId: 61,

        question: "Correct option is",

        hindi: "सही विकल्प पहचानिए -",

        options: [

            "Only A is correct",

            "Only B is correct",

            "Both A & B are correct",

            "Both A & B are incorrect",

        ],

        optionsHindi: [

            "केवल A सही है",

            "केवल B सही है",

            "A और B दोनों सही हैं",

            "A और B दोनों सही नहीं हैं",

        ],

        answer: 2,

    },



    {

        id: 11,

        sourceId: 62,

        question: "This play a role in Socialization",

        hindi: "समाजीकरण में इसकी भूमिका है -",

        options: [

            "Only A is correct",

            "Only B is correct",

            "Only C is correct",

            "A, B, C all are correct",

        ],

        optionsHindi: [

            "केवल A सही है",

            "केवल B सही है",

            "केवल C सही है",

            "A, B, C तीनों सही हैं",

        ],

        answer: 3,

    },



    {

        id: 12,

        sourceId: 66,

        question:

            "According to Stone and Brown, incorrectly paired crowd is",

        hindi:

            "स्टोन एवं ब्राउन के अनुसार ये युग्म सही जोड़ी नहीं है -",

        options: [

            "Brains: Give more importance to Academics",

            "Jacks: Participate in Games",

            "Populars: Leaders in Classroom",

            "Partyers: Give more importance to Exams",

        ],

        optionsHindi: [

            "ब्रेनस: पढ़ाई के लिए प्राथमिकता देते हैं",

            "जैक्स: खेलों में भाग लेते हैं",

            "पापुलर्स: कक्षा नेता के रूप में रहते हैं",

            "पार्टीयर्स: परीक्षाओं को अधिक महत्व देते हैं",

        ],

        answer: 3,

    },



    {

        id: 13,

        sourceId: 70,

        question:

            "This is not a special characteristic of Adolescents",

        hindi:

            "यह किशोरों की विशेषता नहीं है -",

        options: [

            "Peer group relationship",

            "Aspiring for Leadership",

            "No need of Independence",

            "Firm Self Consciousness",

        ],

        optionsHindi: [

            "समवयस्कों से संबंध",

            "नेतृत्व करने की इच्छा",

            "स्वतंत्रता की आवश्यकता न होना",

            "प्रबल स्वचेतना",

        ],

        answer: 2,

    },



    {

        id: 14,

        sourceId: 72,

        question:

            "The following life skills are to be taught to adolescents",

        hindi:

            "निम्न जीवन कौशल किशोरों को सिखाना चाहिए -",

        options: [

            "Only A is correct",

            "Only B is correct",

            "Only C is correct",

            "A, B, C all are correct",

        ],

        optionsHindi: [

            "केवल A सही है",

            "केवल B सही है",

            "केवल C सही है",

            "A, B, C तीनों सही हैं",

        ],

        answer: 3,

    },



    {

        id: 15,

        sourceId: 74,

        question:

            "The competency required for a person for purposive behaviourism, rational thinking, moulding the environment according to his needs is",

        hindi:

            "उद्देश्यपूर्ण से व्यवहार करना, हेतुबद्ध चिंतन करने को आवश्यकताओं के अनुरूप परिवेशों को अनुकूलन बनाने की क्षमता है -",

        options: [

            "Personality",

            "Reinforcement",

            "Interest",

            "Intelligence",

        ],

        optionsHindi: [

            "व्यक्तित्व",

            "पुनर्बलन",

            "अभिरुचि",

            "बुद्धि",

        ],

        answer: 3,

    },



    {

        id: 16,

        sourceId: 85,

        question:

            "Carnatic musicians have this type of Intelligence",

        hindi:

            "कर्नाटक संगीतकारों में इस प्रकार की बुद्धि पायी जाती है -",

        options: [

            "Spatial Intelligence",

            "Bodily-Kinaesthetic Intelligence",

            "Mathematical-Logical Intelligence",

            "Musical Intelligence",

        ],

        optionsHindi: [

            "स्थानिक बुद्धि",

            "शारीरिक-स्पर्शात्मक बुद्धि",

            "गणित-तार्किक बुद्धि",

            "संगीतात्मक बुद्धि",

        ],

        answer: 3,

    },



    {

        id: 17,

        sourceId: 92,

        question:

            "In this type of memory, learner remembers things by reading or listening",

        hindi:

            "इस प्रकार की स्मृति में अधिगमकर्ता सुनकर, पढ़कर विषयों को याद रखता है -",

        options: [

            "Short Term Memory",

            "Long Term Memory",

            "Active Memory",

            "Passive Memory",

        ],

        optionsHindi: [

            "अल्पकालिक स्मृति",

            "दीर्घकालिक स्मृति",

            "क्रियात्मक स्मृति",

            "निष्क्रियात्मक स्मृति",

        ],

        answer: 3,

    },



    {

        id: 18,

        sourceId: 157,

        question:

            "The correct sequence of stages in learning curve",

        hindi:

            "अधिगम वक्र रेखा की सही अवस्थाओं का क्रम पहचानिए -",

        options: [

            "B, A, C",

            "A, B, C",

            "C, A, B",

            "B, C, A",

        ],

        optionsHindi: [

            "B, A, C",

            "A, B, C",

            "C, A, B",

            "B, C, A",

        ],

        answer: 2,

    },



    {

        id: 19,

        sourceId: 168,

        question:

            "Classical conditioning theory is also known as",

        hindi:

            "शास्त्रीय अनुबंधन सिद्धांत को इस नाम से भी जानते हैं -",

        options: [

            "S-type",

            "R-type",

            "C-type",

            "P-type",

        ],

        optionsHindi: [

            "S-प्रकार",

            "R-प्रकार",

            "C-प्रकार",

            "P-प्रकार",

        ],

        answer: 1,

    },



    {

        id: 20,

        sourceId: 200,

        question:

            "Most desirable outcome of classroom management",

        hindi:

            "शिक्षा कक्ष के प्रबंध में मुख्य प्राप्ति है -",

        options: [

            "Silence of students",

            "Fear towards a teacher",

            "Good learning environment",

            "Punishing the students",

        ],

        optionsHindi: [

            "छात्रों की खामोशी",

            "शिक्षक के प्रति डर",

            "अच्छी अधिगम का वातावरण",

            "विद्यार्थियों को दंड देना",

        ],

        answer: 0,

    },



    {

        id: 21,

        sourceId: 205,

        question:

            "Poor strategy for managing classroom time",

        hindi:

            "शिक्षा कक्ष के समय के सदुपयोग में यह कमजोर व्यूह है -",

        options: [

            "Setting up clear goals",

            "Use of Technology",

            "Unawareness of the learning objectives",

            "Prioritisation",

        ],

        optionsHindi: [

            "स्पष्ट लक्ष्यों को चुनना",

            "सांकेतिकता का उपयोग करना",

            "अधिगम लक्ष्यों के प्रति ग्राह्यता न होना",

            "प्राथमिकता तय करना",

        ],

        answer: 2,

    },



    {

        id: 22,

        sourceId: 215,

        question:

            "Negative aspect of mental health",

        hindi:

            "मानसिक स्वास्थ्य से संबंधित एक नकारात्मक अंश है -",

        options: [

            "Having stress",

            "Having adjustment",

            "Having good friends",

            "Having good sleep",

        ],

        optionsHindi: [

            "तनावपूर्ण होना",

            "समायोजन होना",

            "अच्छे मित्र होना",

            "अच्छी नींद होना",

        ],

        answer: 0,

    },



    {

        id: 23,

        sourceId: 219,

        question:

            "NCF-FS 2022 was designed by",

        hindi:

            "NCF-FS 2022 को किसने बनाया -",

        options: [

            "SCERT",

            "DIET",

            "NCERT",

            "SSA",

        ],

        optionsHindi: [

            "SCERT",

            "DIET",

            "NCERT",

            "SSA",

        ],

        answer: 2,

    },



    {

        id: 24,

        sourceId: 235,

        question:

            "Q3 = 80, Q1 = 20 then Quartile deviation is",

        hindi:

            "Q3 = 80, Q1 = 20, इसका चतुर्थांश का विचलन है -",

        options: [

            "20",

            "30",

            "40",

            "50",

        ],

        optionsHindi: [

            "20",

            "30",

            "40",

            "50",

        ],

        answer: 1,

    },



    {

        id: 25,

        sourceId: 245,

        question:

            "This is not an advantage of Educational film",

        hindi:

            "यह शिक्षा के चलचित्र का लाभ नहीं है -",

        options: [

            "Creates interest in studies",

            "Teach many people at once",

            "Can't present historical events",

            "Help in acquiring mental abilities necessary for learning",

        ],

        optionsHindi: [

            "छात्रों में रुचि जागृत करते हैं",

            "अधिक लोगों को एक साथ पढ़ा सकते हैं",

            "ऐतिहासिक अंशों का प्रदर्शन नहीं कर सकते हैं",

            "अभ्यसन के लिए आवश्यक मानसिक क्षमताओं के विकास में सहायता करते हैं",

        ],

        answer: 2,

    },



    {

        id: 26,

        sourceId: 249,

        question:

            "Flash cards come under this type of teaching method",

        hindi:

            "'फ्लैश कार्ड्स' इस अधिगम विधि के अंतर्गत आते हैं -",

        options: [

            "Stimulating Visual learning",

            "Listening Teaching Method",

            "Tactile Teaching Method",

            "Kinesthetic Teaching Method",

        ],

        optionsHindi: [

            "दृश्य अधिगम को प्रेरित करना",

            "श्रवण शिक्षण विधि",

            "स्पर्श अधिगम विधि",

            "काइनेस्थेटिक (गति संवेदी) अधिगम विधि",

        ],

        answer: 0,

    },



    {

        id: 27,

        sourceId: 255,

        question:

            "Microsoft's widely used slideshow software",

        hindi:

            "यह एक स्लाइड शो साफ्टवेयर है, जिसे माइक्रोसॉफ्ट विस्तृत रूप से उपयोग करता है -",

        options: [

            "MS WORD",

            "MS EXCEL",

            "MS POWERPOINT",

            "MS DOS",

        ],

        optionsHindi: [

            "MS WORD",

            "MS EXCEL",

            "MS POWERPOINT",

            "MS DOS",

        ],

        answer: 2,

    },



    {

        id: 28,

        sourceId: 259,

        question:

            "In computer network, this is not an advantage of Intranet",

        hindi:

            "इनमें से कंप्यूटर नेटवर्क के इंट्रानेट का लाभ नहीं है -",

        options: [

            "Communication",

            "Collaboration",

            "Affordable",

            "Time Consuming",

        ],

        optionsHindi: [

            "कम्यूनिकेशन",

            "सहकार",

            "कम व्यय",

            "अधिक समय लेने वाला",

        ],

        answer: 3,

    },



    {

        id: 29,

        sourceId: 263,

        question:

            "Full form of WWW",

        hindi:

            "WWW का विस्तार रूप है -",

        options: [

            "Word Wide Web",

            "Wide Web World",

            "World Wide Web",

            "World Web Wide",

        ],

        optionsHindi: [

            "Word Wide Web",

            "Wide Web World",

            "World Wide Web",

            "World Web Wide",

        ],

        answer: 2,

    },



    {

        id: 30,

        sourceId: 13,

        question:

            "Growth is rapid during infancy and childhood. Later it becomes slower. In adolescence it is rapid again.",

        hindi:

            "शैशवावस्था और बाल्यावस्था में विकास की गति अधिक होकर बाद में धीमी पड़कर किशोरावस्था में फिर गति को प्राप्त करेगी।",

        options: [

            "Principle of Predictability",

            "Principle of Non-Uniform Pattern",

            "Principle of Cephalocaudal development",

            "Principle of Cumulative development",

        ],

        optionsHindi: [

            "विकास की भविष्यवाणी कर सकते हैं",

            "विकास सभी अवस्थाओं में एक जैसा नहीं होता है",

            "शिरो-पादाभिमुख विकास सिद्धांत",

            "विकास संचिति सिद्धांत",

        ],

        answer: 1,

    },

];

// First 30 questions + repeated second block + 30 additional source questions.
// IDs are unique so all 90 answers are tracked independently.
const set2Questions: Question[] = [
    {
        id: 61,
        sourceId: 4,
        question: "“Development is the complex process of integrating different structures and functions,” is defined by",
        hindi: "“विकास विभिन्न संरचनाओं और प्रकार्यों को एकीकृत करनेवाली संकिल्ष्ट प्रक्रिया है I” यह परिभाषा इनकी है –",
        options: ["Skinner", "Binet", "Erikson", "Anderson"],
        optionsHindi: ["स्किनर", "बिने", "एरिक्सन", "आंडरसन"],
        answer: 3,
    },

    {
        id: 62,
        sourceId: 45,
        question: "This age group of people face the Psycho Social Crisis, “Isolation”, according to Erikson (in years)",
        hindi: "एरिक्सन के अनुसार इस आयु के व्यक्ति ‘एकांत’ नामक मनो सामाजिक संकट की स्थिति का सामना करते हैं -",
        options: ["3 – 5", "6 – 12", "12 – 20", "20 – 30"],
        optionsHindi: ["3 – 5", "6 – 12", "12 – 20", "20 – 30"],
        answer: 3,
    },

    {
        id: 63,
        sourceId: 52,
        question: "The emotion that is developed from the instinct “Disturb” is",
        hindi: "‘भंग करना’ मूल प्रवृत्ति से उत्पन्न संवेग है -",
        options: ["Love", "Anger", "Wonder", "Unity"],
        optionsHindi: ["प्रेम", "क्रोध", "आश्चर्य", "एकता"],
        answer: 1,
    },

    {
        id: 64,
        sourceId: 57,
        question: "This is not a characteristic of a person with social development during adolescence.",
        hindi: "किशोरावस्था में सामाजिक विकास वाले व्यक्ति का यह लक्षण नहीं है -",
        options: ["Sexual Consciousness", "Social Consciousness", "Group Loyalty", "Lack of interest in Social Service"],
        optionsHindi: ["लैंगिक चेतना", "सामाजिक चेतना", "समूह निष्ठा", "सामाजिक सेवा के प्रति रुचि न दिखाना"],
        answer: 3,
    },

    {
        id: 65,
        sourceId: 64,
        question: "“Developmental Psychology: A Life Span Approach” book was written by",
        hindi: "“Developmental Psychology: A Life Span Approach” पुस्तक के लेखक -",
        options: ["Elizabeth Hurlock", "B.F. Skinner", "Francis Galton", "Thorndike"],
        optionsHindi: ["एलिज्बेथ हर्लॉक", "बी.एफ. स्किनर", "फ्रांसिस गाल्टन", "थार्नडाइक"],
        answer: 0,
    },

    {
        id: 66,
        sourceId: 66,
        question: "According to Stone and Brown, incorrectly paired crowd is",
        hindi: "स्टोन एवं ब्राउन के अनुसार ये युग्म सही जोड़ी नहीं है -",
        options: ["Brains: Give more importance to Academics", "Jacks: Participate in Games", "Populars: Leaders in Classroom", "Partyers: Give more importance to Exams"],
        optionsHindi: ["ब्रेइन्स: पढ़ाई के लिए प्राथमिकता देते हैं", "जैक्स: खेलों में भाग लेते हैं", "पापुलर्स: कक्षा नेता के रूप में रहते हैं", "पार्टीयर्स: परीक्षाओं को अधिक महत्व देते हैं"],
        answer: 3,
    },

    {
        id: 67,
        sourceId: 70,
        question: "This is not a special characteristic of Adolescents",
        hindi: "यह किशोरों की विशेषता नहीं है -",
        options: ["Peer group relationship", "Aspiring for Leadership", "No need of Independence", "Firm Self Consciousness"],
        optionsHindi: ["समवयस्कों से संबंध", "नेतृत्व करने की इच्छा", "स्वतंत्रता की आवश्यकता न होना", "प्रबल स्वचेतना"],
        answer: 2,
    },

    {
        id: 68,
        sourceId: 84,
        question: "Biologists, Environmentalists and Farmers demonstrate a higher degree of",
        hindi: "जीव वैज्ञानिक, पर्यावरण वैज्ञानिक और किसान इस प्रकार की बुद्धि को प्रदर्शित करते हैं -",
        options: ["Spatial Intelligence", "Naturalistic Intelligence", "Linguistic Intelligence", "Intra Personal Intelligence"],
        optionsHindi: ["स्थानिक बुद्धि", "प्रकृति संबंधी बुद्धि", "भाषाई बुद्धि", "अंतः वैयक्तिक बुद्धि"],
        answer: 1,
    },

    {
        id: 69,
        sourceId: 94,
        question: "The phenomenon that people remember incomplete or interrupted tasks better than the completed ones",
        hindi: "पूर्ण रूप से सीखे गये विषयों से भी बीच में छोड़े गये या रुकाये गये विषयों को लोग याद रख पाते हैं। इस दृष्टिविषय को कहते हैं -",
        options: ["Zeigarnik effect", "Pigmalian effect", "Plasibo effect", "Priming effect"],
        optionsHindi: ["जैगार्निक प्रभाव", "पिग्मेलियन प्रभाव", "प्लेसिबो प्रभाव", "प्राइमिंग प्रभाव"],
        answer: 0,
    },

    {
        id: 70,
        sourceId: 106,
        question: "The test that is not useful to measure attitude",
        hindi: "अभिवृत्ति की माप करने के लिए यह परीक्षा उपयोगी नहीं है-",
        options: ["Likert’s Summated Rating Method", "Thurston’s Attitude Scale", "Bogardus Social Distance Scale", "Strong Vocational Interest Scale"],
        optionsHindi: ["लिकर्ट संकलित निर्धारण मापन", "थर्स्टन अभिवृत्ति", "बोगार्डस सामाजिक अंतर मापन", "स्ट्रांग व्यावसायिक अभिरुचि मापन"],
        answer: 3,
    },

    {
        id: 71,
        sourceId: 113,
        question: "Bird fly in the sky. In Figure-Ground relationship of perception, the sky is",
        hindi: "पक्षी आकाश में उड़ता है, प्रत्यक्षीकरण में आकृति–क्षेत्र संबंध में आकाश यह है -",
        options: ["Figure", "Ground", "Group", "Base"],
        optionsHindi: ["आकृति", "क्षेत्र", "समूह", "आधार"],
        answer: 1,
    },

    {
        id: 72,
        sourceId: 121,
        question: "The gland that is located in the human brain.",
        hindi: "मानव के मस्तिष्क में स्थित ग्रंथि",
        options: ["Pituitary Gland", "Thyroid Gland", "Adrenal Gland", "Testis"],
        optionsHindi: ["पीयूष ग्रंथि", "थायराइड ग्रंथि", "एड्रीनल ग्रंथि", "वृषण"],
        answer: 0,
    },

    {
        id: 73,
        sourceId: 123,
        question: "This is required to produce Thyroxin",
        hindi: "थायरॉक्सिन उत्पत्ति के लिए यह आवश्यक है -",
        options: ["Sodium", "Zinc", "Iodine", "Oxygen"],
        optionsHindi: ["सोडियम", "जिंक", "आयोडिन", "ऑक्सीजन"],
        answer: 2,
    },

    {
        id: 74,
        sourceId: 128,
        question: "According to Spranger’s classification, the values that ‘Film Director Bapu’ possess",
        hindi: "स्प्रेंगर के वर्गीकरण के अनुसार फिल्म निर्देशक ‘बापू’ के मूल्य -",
        options: ["Political Values", "Economic Values", "Social Values", "Aesthetic Values"],
        optionsHindi: ["राजनैतिक मूल्य", "आर्थिक मूल्य", "सामाजिक मूल्य", "सौंदर्य आराधना मूल्य"],
        answer: 3,
    },

    {
        id: 75,
        sourceId: 144,
        question: "According to Freud, the number of Psychosexual Developmental stages",
        hindi: "फ्रायड के अनुसार मनो-लैंगिक विकास की दशाएँ -",
        options: ["4", "6", "5", "10"],
        optionsHindi: ["4", "6", "5", "10"],
        answer: 2,
    },

    {
        id: 76,
        sourceId: 145,
        question: "It is a tool to assess Social Relationship",
        hindi: "यह सामाजिक संबंधों का अनुमान लगानेवाला साधन है -",
        options: ["M.M.P.I", "T.A.T", "C.A.T", "Sociometry"],
        optionsHindi: ["एम.एम.पी.आई", "टी.ए.टी", "सी.ए.टी", "समाजमिति"],
        answer: 3,
    },

    {
        id: 77,
        sourceId: 160,
        question: "A child misunderstands + and × symbols while doing Mathematics. The problem faced by him is",
        hindi: "एक बच्चा गणित सीखते समय + और × चिह्नों को गलत समझ रहा है। वह यहाँ किस प्रकार की समस्या का सामना कर रहा है?",
        options: ["Dysphasia", "Dyslexia", "Dyscalculia", "Dysgraphia"],
        optionsHindi: ["डिसफेसिया", "डिस्लेक्सिया", "डिसकैल्कुलिया", "डिस्ग्राफिया"],
        answer: 2,
    },

    {
        id: 78,
        sourceId: 167,
        question: "“Practice makes man perfect” is an example of this law.",
        hindi: "“अभ्यास मनुष्य को श्रेष्ठ बनाता है।” ये किस नियम का उदाहरण है?",
        options: ["Law of Readiness", "Law of Effect", "Law of Exercise", "Law of Observation"],
        optionsHindi: ["संसिद्धता का नियम", "प्रभाव का नियम", "अभ्यास का नियम", "अवलोकन का नियम"],
        answer: 2,
    },

    {
        id: 79,
        sourceId: 177,
        question: "Incorrect pair related to Maslow’s Hierarchy of Needs",
        hindi: "मास्लो के आवश्यकता पदानुक्रम से संबंधित ये जोड़ी सही नहीं है -",
        options: ["Water – Physiological Need", "Home – Safety Need", "Love – Self Actualization Need", "Identity – Esteem Need"],
        optionsHindi: ["जल – शारीरिक आवश्यकता", "घर – सुरक्षा आवश्यकता", "प्रेम – आत्मसिद्धि आवश्यकता", "पहचान – सम्मानजनक आवश्यकता"],
        answer: 2,
    },

    {
        id: 80,
        sourceId: 189,
        question: "According to Bruner’s Theory, learning through diagrams and pictures represents",
        hindi: "ब्रूनर सिद्धांत के अनुसार चित्र और रेखाचित्रों के द्वारा अधिगम को यह सूचित करती है -",
        options: ["Enactive Method", "Iconic Method", "Symbolic Method", "Verbal Method"],
        optionsHindi: ["क्रियात्मक पद्धति", "चित्रप्रतिमा पद्धति", "प्रतीकात्मक पद्धति", "शाब्दिक पद्धति"],
        answer: 1,
    },

    {
        id: 81,
        sourceId: 192,
        question: "“The Mentality of Apes” book was written by",
        hindi: "“The Mentality of Apes” ग्रंथ के लेखक",
        options: ["Thorndike", "Kohler", "Vygotsky", "Skinner"],
        optionsHindi: ["थार्नडाइक", "कोहलर", "वाइगोत्स्की", "स्किनर"],
        answer: 1,
    },

    {
        id: 82,
        sourceId: 197,
        question: "In Insightful learning, chimpanzee observed different aspects in this manner",
        hindi: "अंतर्दृष्टि अधिगम में चिम्पांजी विविध अंशों को इस प्रकार अवलोकित किया -",
        options: ["Analysed", "Organised whole", "Synthesised", "Discriminated"],
        optionsHindi: ["विश्लेषण", "संपूर्ण व्यवस्थित रूप में", "संश्लेषण", "विभेदीकरण"],
        answer: 1,
    },

    {
        id: 83,
        sourceId: 205,
        question: "Poor strategy for managing classroom time",
        hindi: "कक्षा कक्ष के समय के सदुपयोग में यह कमजोर व्यूह है-",
        options: ["Setting up clear goals", "Use of Technology", "Unawareness of the learning objectives", "Prioritisation"],
        optionsHindi: ["स्पष्ट लक्ष्यों को चुनना", "सांकेतिकता का उपयोग करना", "अधिगम लक्ष्यों के प्रति ग्राह्यता न होना", "प्राथमिकता तय होना"],
        answer: 2,
    },

    {
        id: 84,
        sourceId: 210,
        question: "Positive factor that influences mental health",
        hindi: "मानसिक स्वास्थ्य को प्रभावित करने वाले सकारात्मक अंश",
        options: ["Good social relations", "Maladjustment", "Social Isolation", "Overstress"],
        optionsHindi: ["अच्छे सामाजिक संबंध", "असमायोजन", "सामाजिक अकेलापन", "तीव्र तनाव"],
        answer: 0,
    },

    {
        id: 85,
        sourceId: 223,
        question: "NEP – 2020 gives importance to",
        hindi: "NEP – 2020 इसको महत्व देता है",
        options: ["Experiential Learning", "Memorization", "Learning to reading textbooks only", "Rote learning"],
        optionsHindi: ["प्रयोगात्मक अधिगम", "मेमोराइजेशन", "केवल पाठ्य पुस्तक पठन", "रटंत विधि"],
        answer: 0,
    },

    {
        id: 86,
        sourceId: 226,
        question: "Aim of Continuous Comprehensive Evaluation",
        hindi: "सतत् समग्र मूल्यांकन का उद्देश्य",
        options: ["Rote learning", "Remembering Information", "Analytical Thinking", "Securing good marks"],
        optionsHindi: ["रटंत अधिगम", "सूचनाओं को याद रखना", "विश्लेषणात्मक सोच", "अच्छे अंक प्राप्त करना"],
        answer: 2,
    },

    {
        id: 87,
        sourceId: 241,
        question: "This is not related to Graphical representation of data",
        hindi: "यह दांश रेखाचित्रीय प्रदर्शन के लिए नहीं है -",
        options: ["Histogram", "Pie Graph", "Snellen Chart", "Frequency Polygon"],
        optionsHindi: ["हिस्टोग्राम", "पाई ग्राफ", "स्नेलेन चार्ट", "फ्रीक्वेंसी पोलीगॉन"],
        answer: 2,
    },

    {
        id: 88,
        sourceId: 251,
        question: "In Flander’s Interaction Analysis Category Method, the category “Lecturing” comes under this item.",
        hindi: "फ्लैंडर्स परस्पर चर्चा विश्लेषण श्रेणीविधि में भाषण देना नामक श्रेणी इस अंश के अंतर्गत आता है",
        options: ["Teacher Talk", "Student Talk", "Silence", "Confusion"],
        optionsHindi: ["अध्यापक संभाषण", "छात्र संभाषण", "खामोशी", "दुविधा"],
        answer: 0,
    },

    {
        id: 89,
        sourceId: 266,
        question: "Full form of IC",
        hindi: "IC का विस्तृत रूप है",
        options: ["Internet Circuit", "Integrated Circuit", "Internal Circuit", "International Circuit"],
        optionsHindi: ["इंटरनेट सर्किट", "इंटीग्रेटेड सर्किट", "इंटरनल सर्किट", "इंटरनेशनल सर्किट"],
        answer: 1,
    },

    {
        id: 90,
        sourceId: 267,
        question: "Full form of RAM",
        hindi: "RAM का विस्तार रूप है",
        options: ["Read All Memory", "Random Access Manufacturing", "Read Access Memory", "Random Access Memory"],
        optionsHindi: ["रीड ऑल मेमोरी", "रैंडम एक्सेस मैन्युफैक्चरिंग", "रीड एक्सेस मेमोरी", "रैंडम एक्सेस मेमोरी"],
        answer: 3,
    },
    {
        id: 91,
        sourceId: 2,
        question: "जगनक के इस काय म तो बु देल का भाव पटतः देखा जा सकता है।",
        hindi: "जगनक के इस काय म तो बु देल का भाव पटतः देखा जा सकता है।",
        options: ["बु देल रासो", "पमावत", "हमीर रासो", "अहाखंड"],
        optionsHindi: ["बु देल रासो", "पमावत", "हमीर रासो", "अहाखंड"],
        answer: 3,
    },
    {
        id: 92,
        sourceId: 3,
        question: "बौ ध का लखा हुआ साहय अ धकतर इस भाषा म मला है ।",
        hindi: "बौ ध का लखा हुआ साहय अ धकतर इस भाषा म मला है ।",
        options: ["पा ल", "अप ंश", "हद", "सं कृत"],
        optionsHindi: ["पा ल", "अप ंश", "हद", "सं कृत"],
        answer: 0,
    },
    {
        id: 93,
        sourceId: 5,
        question: "आचाय म ने इस काल को “ ंगार काल ” का नाम देना उपयु त समझा था ।",
        hindi: "आचाय म ने इस काल को “ ंगार काल ” का नाम देना उपयु त समझा था ।",
        options: ["भि त काल", "र त काल", "चारण काल", "आदकाल"],
        optionsHindi: ["भि त काल", "र त काल", "चारण काल", "आदकाल"],
        answer: 1,
    },
    {
        id: 94,
        sourceId: 7,
        question: "राहुल सांकृ यायन के अनुसार हद का थम क व है -",
        hindi: "राहुल सांकृ यायन के अनुसार हद का थम क व है -",
        options: ["चंदबरदाई", "सरह पाद", "जगनक", "म बंधु"],
        optionsHindi: ["चंदबरदाई", "सरह पाद", "जगनक", "म बंधु"],
        answer: 1,
    },
    {
        id: 95,
        sourceId: 8,
        question: "जैन आचाय देवसेन वारा र चत थ है -",
        hindi: "जैन आचाय देवसेन वारा र चत थ है -",
        options: ["ा मकाचार", "वामाचार", "शोडसोपचार", "ावकाचार"],
        optionsHindi: ["ा मकाचार", "वामाचार", "शोडसोपचार", "ावकाचार"],
        answer: 3,
    },
    {
        id: 96,
        sourceId: 16,
        question: "मुसलमान का सूफ सं दाय हदुओं के इस वाद के नकट आता है , िजस का अथ है –“सारा संसार ह ईवर है “।",
        hindi: "मुसलमान का सूफ सं दाय हदुओं के इस वाद के नकट आता है , िजस का अथ है –“सारा संसार ह ईवर है “।",
        options: ["एके वर वाद", "अवैत वाद", "वैत वाद", "सववर वाद"],
        optionsHindi: ["एके वर वाद", "अवैत वाद", "वैत वाद", "सववर वाद"],
        answer: 3,
    },
    {
        id: 97,
        sourceId: 21,
        question: "र त कालन क व देव ने अपने इस आय दाता के लए “भवानी वलास “क रचना क -",
        hindi: "र त कालन क व देव ने अपने इस आय दाता के लए “भवानी वलास “क रचना क -",
        options: ["भवानी संह", "कुशल संह", "सतीश संह", "छसाल संह"],
        optionsHindi: ["भवानी संह", "कुशल संह", "सतीश संह", "छसाल संह"],
        answer: 0,
    },
    {
        id: 98,
        sourceId: 27,
        question: "सदल म जी का मुख थ िजसे उहने फोट व लयम कॉलेज म लखा था -",
        hindi: "सदल म जी का मुख थ िजसे उहने फोट व लयम कॉलेज म लखा था -",
        options: ["ेम सागर", "ना सकेतोपा यान", "उदयभानु चरत", "सुख सागर"],
        optionsHindi: ["ेम सागर", "ना सकेतोपा यान", "उदयभानु चरत", "सुख सागर"],
        answer: 1,
    },
    {
        id: 99,
        sourceId: 29,
        question: "जनमेजय का नागय , अजातश ु , कद गु त , च गु त , ुववा मनी आद नाटक का नाटककार है-",
        hindi: "जनमेजय का नागय , अजातश ु , कद गु त , च गु त , ुववा मनी आद नाटक का नाटककार है-",
        options: ["सेठ गो वद दास", "मै थलशरण गु त", "जयशंकर साद", "देवकनंदन ख ी"],
        optionsHindi: ["सेठ गो वद दास", "मै थलशरण गु त", "जयशंकर साद", "देवकनंदन ख ी"],
        answer: 2,
    },
    {
        id: 100,
        sourceId: 31,
        question: "इस क ववर के अनुसार “ छायावाद “ पदबंध के छाया शद का अथ “ मोती क आभा “ से है ।",
        hindi: "इस क ववर के अनुसार “ छायावाद “ पदबंध के छाया शद का अथ “ मोती क आभा “ से है ।",
        options: ["सु म ानंदन पत", "जयशंकर साद", "दनकर", "ेमचंद"],
        optionsHindi: ["सु म ानंदन पत", "जयशंकर साद", "दनकर", "ेमचंद"],
        answer: 1,
    },
    {
        id: 101,
        sourceId: 36,
        question: "परमल क इस क वता को हद क रहयवाद परंपरा म वशेष थान है ।",
        hindi: "परमल क इस क वता को हद क रहयवाद परंपरा म वशेष थान है ।",
        options: ["ये और वे", "तुम और म", "आप और हम", "यह और वह"],
        optionsHindi: ["ये और वे", "तुम और म", "आप और हम", "यह और वह"],
        answer: 1,
    },
    {
        id: 102,
        sourceId: 40,
        question: "फारसी के हालावाद साहय म इनका नाम बहुत सध है-",
        hindi: "फारसी के हालावाद साहय म इनका नाम बहुत सध है-",
        options: ["इंशा अला खॉ", "ग़ा लब", "उमर खैयाम", "महमद इकबाल"],
        optionsHindi: ["इंशा अला खॉ", "ग़ा लब", "उमर खैयाम", "महमद इकबाल"],
        answer: 2,
    },
    {
        id: 103,
        sourceId: 43,
        question: "वष 2005 को ानपीठ पुरकार कस हद साहयकार को दान कया गया ?",
        hindi: "वष 2005 को ानपीठ पुरकार कस हद साहयकार को दान कया गया ?",
        options: ["महादेवी वमा", "कु ंवर नारायण", "नरेश मेहता", "नमल वमा"],
        optionsHindi: ["महादेवी वमा", "कु ंवर नारायण", "नरेश मेहता", "नमल वमा"],
        answer: 1,
    },
    {
        id: 104,
        sourceId: 47,
        question: "मु ंशी ेमचंद क सव थम कहानी नन म से पहचानए-",
        hindi: "मु ंशी ेमचंद क सव थम कहानी नन म से पहचानए-",
        options: ["बड़े घर क बहू", "ईदगाह", "शतरंज के खलाड़ी", "पंच परमे वर"],
        optionsHindi: ["बड़े घर क बहू", "ईदगाह", "शतरंज के खलाड़ी", "पंच परमे वर"],
        answer: 3,
    },
    {
        id: 105,
        sourceId: 49,
        question: "हद भाषा के थम उपयासकार है -",
        hindi: "हद भाषा के थम उपयासकार है -",
        options: ["देवकनंदन ख ी", "लाला ीनवास", "सदल म", "जगमोहन संह"],
        optionsHindi: ["देवकनंदन ख ी", "लाला ीनवास", "सदल म", "जगमोहन संह"],
        answer: 1,
    },
    {
        id: 106,
        sourceId: 51,
        question: "“ सेवासदन “ उपयास के लेखक ह –",
        hindi: "“ सेवासदन “ उपयास के लेखक ह –",
        options: ["वृ दावन लाल", "मु ंशी ेमचंद", "चतुरसेन शा ी", "बालकृ ण भट"],
        optionsHindi: ["वृ दावन लाल", "मु ंशी ेमचंद", "चतुरसेन शा ी", "बालकृ ण भट"],
        answer: 1,
    },
    {
        id: 107,
        sourceId: 53,
        question: "जयशंकर सादजी का यह नाटक अ भनय क िट से सवा धक सफल है -",
        hindi: "जयशंकर सादजी का यह नाटक अ भनय क िट से सवा धक सफल है -",
        options: ["अजातश ु", "ुववा मनी", "च गु त", "कंदगु त"],
        optionsHindi: ["अजातश ु", "ुववा मनी", "च गु त", "कंदगु त"],
        answer: 1,
    },
    {
        id: 108,
        sourceId: 54,
        question: "हद नाटक रंग म सु सध “ आधे – अधूरे “ नाटक का नाटककार ह –",
        hindi: "हद नाटक रंग म सु सध “ आधे – अधूरे “ नाटक का नाटककार ह –",
        options: ["उपनाथ अक", "डॉ. सये", "जगदशचं ठाकु र", "मोहन राकेश"],
        optionsHindi: ["उपनाथ अक", "डॉ. सये", "जगदशचं ठाकु र", "मोहन राकेश"],
        answer: 3,
    },
    {
        id: 109,
        sourceId: 56,
        question: "खड़ीबोल या कौरवी बोल इस उपभाषा के अंतगत आती है -",
        hindi: "खड़ीबोल या कौरवी बोल इस उपभाषा के अंतगत आती है -",
        options: ["पिचमी हद", "राजथानी", "बहार", "पहाडी"],
        optionsHindi: ["पिचमी हद", "राजथानी", "बहार", "पहाडी"],
        answer: 0,
    },
    {
        id: 110,
        sourceId: 61,
        question: "जल ह जीवन है। ( जल शद का पयायवाची शद इस वा य म है । )",
        hindi: "जल ह जीवन है। ( जल शद का पयायवाची शद इस वा य म है । )",
        options: ["भगवान ह जीवन है ।", "बल ह जीवन है ।", "पानी ह जीवन है ।", "वषा ह जीवन है ।"],
        optionsHindi: ["भगवान ह जीवन है ।", "बल ह जीवन है ।", "पानी ह जीवन है ।", "वषा ह जीवन है ।"],
        answer: 2,
    },
    {
        id: 111,
        sourceId: 63,
        question: "‘ सरता ‘ शद का पयायवाची शद या है?",
        hindi: "‘ सरता ‘ शद का पयायवाची शद या है?",
        options: ["नद", "समु", "धरती", "वनता"],
        optionsHindi: ["नद", "समु", "धरती", "वनता"],
        answer: 0,
    },
    {
        id: 112,
        sourceId: 65,
        question: "घर से कूल दूर है। ( रेखां कत शद का वलोम शद या है? )",
        hindi: "घर से कूल दूर है। ( रेखां कत शद का वलोम शद या है? )",
        options: ["पास", "अदूर", "यास", "सुदूर"],
        optionsHindi: ["पास", "अदूर", "यास", "सुदूर"],
        answer: 0,
    },
    {
        id: 113,
        sourceId: 67,
        question: "नन म से तसम शद पहचानए ।",
        hindi: "नन म से तसम शद पहचानए ।",
        options: ["सावन", "च", "सूरज", "सपना"],
        optionsHindi: ["सावन", "च", "सूरज", "सपना"],
        answer: 1,
    },
    {
        id: 114,
        sourceId: 69,
        question: "बादल को देखते ह मोर खुशी से नाच उठता है। ( रेखां कत शद का तसम प या है ? )",
        hindi: "बादल को देखते ह मोर खुशी से नाच उठता है। ( रेखां कत शद का तसम प या है ? )",
        options: ["मोरा", "मोरनी", "मयूर", "मोती"],
        optionsHindi: ["मोरा", "मोरनी", "मयूर", "मोती"],
        answer: 2,
    },
    {
        id: 115,
        sourceId: 72,
        question: "‘ वर ‘ शद का सह ी लंग शद नन म कस वा य म है ?",
        hindi: "‘ वर ‘ शद का सह ी लंग शद नन म कस वा य म है ?",
        options: ["नव वरणी का गृह वेश हुई है ।", "नव वधुर का गृह वेश हुआ है ।", "नव वधू का गृह वेश हुआ है ।", "नव वाधुर का गृह वेश हुआ है ।"],
        optionsHindi: ["नव वरणी का गृह वेश हुई है ।", "नव वधुर का गृह वेश हुआ है ।", "नव वधू का गृह वेश हुआ है ।", "नव वाधुर का गृह वेश हुआ है ।"],
        answer: 2,
    },
    {
        id: 116,
        sourceId: 74,
        question: "कतूर के पता करघे पर कपड़े बुनते ह । ( रेखां कत शद के आधार पर वा य का सह बहुवचन प पहचानए। )",
        hindi: "कतूर के पता करघे पर कपड़े बुनते ह । ( रेखां कत शद के आधार पर वा य का सह बहुवचन प पहचानए। )",
        options: ["कतूर के पता करघा पर कपड़े बुनते ह ।", "कतूर के पता करघओं पर कपड़े बुनते ह ।", "कतूर के पता करघ पर कपड़े बुनते ह ।", "कतूर के पता करघ पर कपड़े बुनते ह ।"],
        optionsHindi: ["कतूर के पता करघा पर कपड़े बुनते ह ।", "कतूर के पता करघओं पर कपड़े बुनते ह ।", "कतूर के पता करघ पर कपड़े बुनते ह ।", "कतूर के पता करघ पर कपड़े बुनते ह ।"],
        answer: 3,
    },
    {
        id: 117,
        sourceId: 79,
        question: "अभुत रस का थायी भाव नन म से पहचानए ।",
        hindi: "अभुत रस का थायी भाव नन म से पहचानए ।",
        options: ["शोक", "भय", "उसाह", "वमय"],
        optionsHindi: ["शोक", "भय", "उसाह", "वमय"],
        answer: 3,
    },
    {
        id: 118,
        sourceId: 82,
        question: "नन म दो लघु मा ावाला शद पहचानए ।",
        hindi: "नन म दो लघु मा ावाला शद पहचानए ।",
        options: ["जाल", "कौन", "जल", "जाला"],
        optionsHindi: ["जाल", "कौन", "जल", "जाला"],
        answer: 2,
    },
    {
        id: 119,
        sourceId: 85,
        question: "जहाँ एक वतु क तुलना दूसर वतु से क जाय,वहाँ अलंकार होता है –",
        hindi: "जहाँ एक वतु क तुलना दूसर वतु से क जाय,वहाँ अलंकार होता है –",
        options: ["पक अलंकार", "उपमालंकार", "अनु ास अलंकार", "संदेहालंकार"],
        optionsHindi: ["पक अलंकार", "उपमालंकार", "अनु ास अलंकार", "संदेहालंकार"],
        answer: 1,
    },
    {
        id: 120,
        sourceId: 88,
        question: "नन म से “ दुगुण “ शद का सह सं ध वछेद पहचानए I",
        hindi: "नन म से “ दुगुण “ शद का सह सं ध वछेद पहचानए I",
        options: ["दुरा + गुण", "दुर + गुण", "दु: + गुण", "दूर + गुण"],
        optionsHindi: ["दुरा + गुण", "दुर + गुण", "दु: + गुण", "दूर + गुण"],
        answer: 2,
    },
    {
        id: 121,
        sourceId: 91,
        question: "“ शता द “ म कौन सा समास है ?",
        hindi: "“ शता द “ म कौन सा समास है ?",
        options: ["कमधारय समास", "वगु समास", "अययीभाव समास", "तपु ष समास"],
        optionsHindi: ["कमधारय समास", "वगु समास", "अययीभाव समास", "तपु ष समास"],
        answer: 1,
    },
    {
        id: 122,
        sourceId: 94,
        question: "अनुशासन का पालन कर। ( इस वा य म यु त उपसग या है ? )",
        hindi: "अनुशासन का पालन कर। ( इस वा य म यु त उपसग या है ? )",
        options: ["अन्", "अ", "अनु", "शासन"],
        optionsHindi: ["अन्", "अ", "अनु", "शासन"],
        answer: 2,
    },
    {
        id: 123,
        sourceId: 97,
        question: "“ लखावट “ शद म यु त यय पहचानए।",
        hindi: "“ लखावट “ शद म यु त यय पहचानए।",
        options: ["आवट", "वट", "लख", "अट"],
        optionsHindi: ["आवट", "वट", "लख", "अट"],
        answer: 0,
    },
    {
        id: 124,
        sourceId: 100,
        question: "“ नद “ शद म यह सं ा है -",
        hindi: "“ नद “ शद म यह सं ा है -",
        options: ["यि तवाचक", "भाववाचक", "यवाचक", "जातवाचक"],
        optionsHindi: ["यि तवाचक", "भाववाचक", "यवाचक", "जातवाचक"],
        answer: 3,
    },
    {
        id: 125,
        sourceId: 103,
        question: "उम पु षवाचक सवनाम है -",
        hindi: "उम पु षवाचक सवनाम है -",
        options: ["म", "तुम", "वह", "वे"],
        optionsHindi: ["म", "तुम", "वह", "वे"],
        answer: 0,
    },
    {
        id: 126,
        sourceId: 106,
        question: "हमारे झंडे क बीचवाल पट सफेद रंग क है। ‘ सफेद ’ कौन – सा वशेषण है -",
        hindi: "हमारे झंडे क बीचवाल पट सफेद रंग क है। ‘ सफेद ’ कौन – सा वशेषण है -",
        options: ["सं यावाचक वशेषण", "गुणवाचक वशेषण", "परमाणवाचक वशेषण", "सावना मक वशेषण"],
        optionsHindi: ["सं यावाचक वशेषण", "गुणवाचक वशेषण", "परमाणवाचक वशेषण", "सावना मक वशेषण"],
        answer: 1,
    },
    {
        id: 127,
        sourceId: 109,
        question: "मोहन कताब पढ़ चुका है। इस वा य म संयु त या का यह प है -",
        hindi: "मोहन कताब पढ़ चुका है। इस वा य म संयु त या का यह प है -",
        options: ["आरंभ बोधक", "अयास बोधक", "समाित बोधक", "इछा बोधक"],
        optionsHindi: ["आरंभ बोधक", "अयास बोधक", "समाित बोधक", "इछा बोधक"],
        answer: 2,
    },
    {
        id: 128,
        sourceId: 112,
        question: "लडका पानी पीता है। ‘ पीना ‘ शद का वतीय ेरणाथक या का प है -",
        hindi: "लडका पानी पीता है। ‘ पीना ‘ शद का वतीय ेरणाथक या का प है -",
        options: ["पीलाना", "पलाना", "पलयाना", "पलवाना"],
        optionsHindi: ["पीलाना", "पलाना", "पलयाना", "पलवाना"],
        answer: 3,
    },
    {
        id: 129,
        sourceId: 118,
        question: "वा य म जहाँ अप वराम क अपे ा कुछ अ धक देर कना पड़ता है ,वहाँ इस वराम चन का योग कया जाता है।",
        hindi: "वा य म जहाँ अप वराम क अपे ा कुछ अ धक देर कना पड़ता है ,वहाँ इस वराम चन का योग कया जाता है।",
        options: ["पूण वराम", "अध वराम", "नदेशक", "योजक चन"],
        optionsHindi: ["पूण वराम", "अध वराम", "नदेशक", "योजक चन"],
        answer: 1,
    },
    {
        id: 130,
        sourceId: 121,
        question: "श ,ष ,स और ह और यंजन के उचारण म एक कार क गरमाहट अथवा सुरसुराहट तीत होती है,इन यंजन को कहते ह -",
        hindi: "श ,ष ,स और ह और यंजन के उचारण म एक कार क गरमाहट अथवा सुरसुराहट तीत होती है,इन यंजन को कहते ह -",
        options: ["अनुनास सक यंजन", "ऊम यंजन", "पश यंजन", "उि त यंजन"],
        optionsHindi: ["अनुनास सक यंजन", "ऊम यंजन", "पश यंजन", "उि त यंजन"],
        answer: 1,
    },
    {
        id: 131,
        sourceId: 124,
        question: "छोट -छोट बात पर आगबबूला होना एक कमजोर है। रेखां कत मुहावरा का अथ है -",
        hindi: "छोट -छोट बात पर आगबबूला होना एक कमजोर है। रेखां कत मुहावरा का अथ है -",
        options: ["बकवास करना", "बहुत रोना", "अयंत ो धत होना", "पसंद न करना"],
        optionsHindi: ["बकवास करना", "बहुत रोना", "अयंत ो धत होना", "पसंद न करना"],
        answer: 2,
    },
    {
        id: 132,
        sourceId: 125,
        question: "सुबह से कुछ नहं खाया तो दोपहर तक पेट म चूहे कूदने लगे।पेट म चूहे कूदना - मुहावरा का अथ है -",
        hindi: "सुबह से कुछ नहं खाया तो दोपहर तक पेट म चूहे कूदने लगे।पेट म चूहे कूदना - मुहावरा का अथ है -",
        options: ["न र होना", "खुशामुद होना", "बहुत अ धक भूख लगना", "घबरा जाना"],
        optionsHindi: ["न र होना", "खुशामुद होना", "बहुत अ धक भूख लगना", "घबरा जाना"],
        answer: 2,
    },
    {
        id: 133,
        sourceId: 128,
        question: "“ दोन हाथ लडू “ लोकोि त का अथ है -",
        hindi: "“ दोन हाथ लडू “ लोकोि त का अथ है -",
        options: ["सव लाभ ह लाभ होना", "धोखेबाजी", "फूट जाना", "अ ववसनीय"],
        optionsHindi: ["सव लाभ ह लाभ होना", "धोखेबाजी", "फूट जाना", "अ ववसनीय"],
        answer: 0,
    },
    {
        id: 134,
        sourceId: 130,
        question: "‘तरकार दरबार ‘ पाठ म संहासन पर कौन बैठा हुआ है?",
        hindi: "‘तरकार दरबार ‘ पाठ म संहासन पर कौन बैठा हुआ है?",
        options: ["गोभी", "टमाटर", "आलू", "शलगम"],
        optionsHindi: ["गोभी", "टमाटर", "आलू", "शलगम"],
        answer: 1,
    },
    {
        id: 135,
        sourceId: 133,
        question: "‘अरकु ‘ के आदवा सय क अपनी भाषा यह है -",
        hindi: "‘अरकु ‘ के आदवा सय क अपनी भाषा यह है -",
        options: ["सं कृत", "अं ेजी", "कुवी", "ओ डया"],
        optionsHindi: ["सं कृत", "अं ेजी", "कुवी", "ओ डया"],
        answer: 2,
    },
    {
        id: 136,
        sourceId: 137,
        question: "ीहरकोटा के पास यह झील है -",
        hindi: "ीहरकोटा के पास यह झील है -",
        options: ["मु ने", "पु लकाट", "को ले", "नायले"],
        optionsHindi: ["मु ने", "पु लकाट", "को ले", "नायले"],
        answer: 1,
    },
    {
        id: 137,
        sourceId: 140,
        question: "‘ तारे जमीं पर ‘ फ़म के नमाता और नदशक ये थे -",
        hindi: "‘ तारे जमीं पर ‘ फ़म के नमाता और नदशक ये थे -",
        options: ["समान खान", "आ मर खान", "खादर खान", "रशीद खान"],
        optionsHindi: ["समान खान", "आ मर खान", "खादर खान", "रशीद खान"],
        answer: 1,
    },
    {
        id: 138,
        sourceId: 142,
        question: "भोजपुर म करब तीस – चालस बरस से इस गीत का चार हुआ है -",
        hindi: "भोजपुर म करब तीस – चालस बरस से इस गीत का चार हुआ है -",
        options: ["बाउल", "भतयाल", "बदे शया", "सोहनी – महवाल"],
        optionsHindi: ["बाउल", "भतयाल", "बदे शया", "सोहनी – महवाल"],
        answer: 2,
    },
    {
        id: 139,
        sourceId: 145,
        question: "यि त का यह वभाव है क वह कसी काम को बहुत जद करना चाहता है I दो चारण म यह बात पाई जाती है I फलत: शद का पूण उचारण नहं हो पाता यथा- वजय - वजे यह इस कार का उचारण दोष है -",
        hindi: "यि त का यह वभाव है क वह कसी काम को बहुत जद करना चाहता है I दो चारण म यह बात पाई जाती है I फलत: शद का पूण उचारण नहं हो पाता यथा- वजय - वजे यह इस कार का उचारण दोष है -",
        options: ["आदत", "शी यन", "शु धो चारण", "थान परवतन"],
        optionsHindi: ["आदत", "शी यन", "शु धो चारण", "थान परवतन"],
        answer: 1,
    },
    {
        id: 140,
        sourceId: 147,
        question: "बहुत से यि त ‘ न ‘ को ‘ शन ‘ और ‘ छपना ‘ को ‘ छुपना ’ कहते ह I इस उचारण दोष का कारण है-",
        hindi: "बहुत से यि त ‘ न ‘ को ‘ शन ‘ और ‘ छपना ‘ को ‘ छुपना ’ कहते ह I इस उचारण दोष का कारण है-",
        options: ["शु धो चारण का ान न होना", "आदत", "शी यन", "वण का लोप"],
        optionsHindi: ["शु धो चारण का ान न होना", "आदत", "शी यन", "वण का लोप"],
        answer: 0,
    },
    {
        id: 141,
        sourceId: 149,
        question: "सवर वाचन के ‘ साहचय व ध ‘ का आ वकार इसने कया था -",
        hindi: "सवर वाचन के ‘ साहचय व ध ‘ का आ वकार इसने कया था -",
        options: ["ी आर पी नायक", "ो अंड ो", "ीमती मा तेसर", "रघुवीर सहाय"],
        optionsHindi: ["ी आर पी नायक", "ो अंड ो", "ीमती मा तेसर", "रघुवीर सहाय"],
        answer: 2,
    },
    {
        id: 142,
        sourceId: 152,
        question: "भाई योगे जीत ने अपनी पु तक ‘ हद भाषा शण ‘ म इस क ा से ह मौन वाचन ारंभ कराने का सुझाव दया है -",
        hindi: "भाई योगे जीत ने अपनी पु तक ‘ हद भाषा शण ‘ म इस क ा से ह मौन वाचन ारंभ कराने का सुझाव दया है -",
        options: ["चौथी क ा", "पाँचवीं क ा", "दूसर क ा", "तीसर क ा"],
        optionsHindi: ["चौथी क ा", "पाँचवीं क ा", "दूसर क ा", "तीसर क ा"],
        answer: 3,
    },
    {
        id: 143,
        sourceId: 154,
        question: "लखना सखाने क इस व ध म आँख , कान आद ान य और हाथ – तीन से सहायता ल जाती है,बालक पहले अ र को देखता है , वनय को कान से सुनता है और रेगमाल आद के अ र पर अंगुल फे रता है I वह लखना सीख जाता है -",
        hindi: "लखना सखाने क इस व ध म आँख , कान आद ान य और हाथ – तीन से सहायता ल जाती है,बालक पहले अ र को देखता है , वनय को कान से सुनता है और रेगमाल आद के अ र पर अंगुल फे रता है I वह लखना सीख जाता है -",
        options: ["वनसा य व ध", "अनुकरण व ध", "देखो और कहो व ध", "मा तेसर व ध"],
        optionsHindi: ["वनसा य व ध", "अनुकरण व ध", "देखो और कहो व ध", "मा तेसर व ध"],
        answer: 3,
    },
    {
        id: 144,
        sourceId: 156,
        question: "बालक – बा लकाओं के वारा अयापक के आदश लेख का बकुल वैसा का वैसा अनुकरण करना यह ल प है-",
        hindi: "बालक – बा लकाओं के वारा अयापक के आदश लेख का बकुल वैसा का वैसा अनुकरण करना यह ल प है-",
        options: ["सु ल प", "ुत ल प", "अनु ल प", "आशु ल प"],
        optionsHindi: ["सु ल प", "ुत ल प", "अनु ल प", "आशु ल प"],
        answer: 2,
    },
    {
        id: 145,
        sourceId: 159,
        question: "भाषा और साहय म च लेना और सवृ याँ का वकास करना इस उ दे य के अंतगत आता है -",
        hindi: "भाषा और साहय म च लेना और सवृ याँ का वकास करना इस उ दे य के अंतगत आता है -",
        options: ["ानामक उ दे य", "रागामक उ दे य", "भावामक उ दे य", "कौला मक उ दे य"],
        optionsHindi: ["ानामक उ दे य", "रागामक उ दे य", "भावामक उ दे य", "कौला मक उ दे य"],
        answer: 2,
    },
    {
        id: 146,
        sourceId: 162,
        question: "हैडो के अनुसार क वता का रसा वादन केवल इनके वारा ह हो सकता है -",
        hindi: "हैडो के अनुसार क वता का रसा वादन केवल इनके वारा ह हो सकता है -",
        options: ["कान के वारा", "आँख के वारा", "नाक के वारा", "हाथ – पैर के वारा"],
        optionsHindi: ["कान के वारा", "आँख के वारा", "नाक के वारा", "हाथ – पैर के वारा"],
        answer: 0,
    },
    {
        id: 147,
        sourceId: 166,
        question: "याकरण क इस व ध म वया थय के सामने पहले पयात सं या म उदाहरण तुत कये जाते ह I फर इन उदाहरण के आधार पर वया थय क सहायता से यापकता नयम का नमाण कया जाता है -",
        hindi: "याकरण क इस व ध म वया थय के सामने पहले पयात सं या म उदाहरण तुत कये जाते ह I फर इन उदाहरण के आधार पर वया थय क सहायता से यापकता नयम का नमाण कया जाता है -",
        options: ["आगमन व ध", "भाषा – संसग व ध", "सहयोग व ध", "सू व ध"],
        optionsHindi: ["आगमन व ध", "भाषा – संसग व ध", "सहयोग व ध", "सू व ध"],
        answer: 0,
    },
    {
        id: 148,
        sourceId: 169,
        question: "अ , आ , ह – इन वण का उचारण थान है -",
        hindi: "अ , आ , ह – इन वण का उचारण थान है -",
        options: ["दतो ठ", "तालु और ना सका", "ओठ और ना सका", "कंठ"],
        optionsHindi: ["दतो ठ", "तालु और ना सका", "ओठ और ना सका", "कंठ"],
        answer: 3,
    },
    {
        id: 149,
        sourceId: 175,
        question: "“बालक को पूर बात बताने के बाद ह उसके भाग को बताइय I “ कस शण सू का संकेत देता है ?",
        hindi: "“बालक को पूर बात बताने के बाद ह उसके भाग को बताइय I “ कस शण सू का संकेत देता है ?",
        options: ["थूल से सू म क ओर", "वले ण से सं लेषण क ओर", "य से अ य क ओर", "पूण से अंश क ओर"],
        optionsHindi: ["थूल से सू म क ओर", "वले ण से सं लेषण क ओर", "य से अ य क ओर", "पूण से अंश क ओर"],
        answer: 3,
    },
    {
        id: 150,
        sourceId: 179,
        question: "ये ारं भक न होते ह ,िजनसे अयापक अपना पाठ आरंभ करता है -",
        hindi: "ये ारं भक न होते ह ,िजनसे अयापक अपना पाठ आरंभ करता है -",
        options: ["तुलना मक न", "बोध न", "तावना मक न", "वचारामक न"],
        optionsHindi: ["तुलना मक न", "बोध न", "तावना मक न", "वचारामक न"],
        answer: 2,
    },

];

const questions: Question[] = [
    ...baseQuestions,
    ...baseQuestions.map((q) => ({
        ...q,
        id: q.id + 30,
    })),
    ...set2Questions,
];

export default function GrandTest2Page() {

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

        setAnswers((prev) => ({

            ...prev,

            [question.id]: optionIndex,

        }));

    };



    const formatTime = (seconds: number) => {

        const hours = Math.floor(seconds / 3600);

        const minutes = Math.floor((seconds % 3600) / 60);

        const secs = seconds % 60;



        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(

            2,

            "0"

        )}:${String(secs).padStart(2, "0")}`;

    };



    const goNext = () => {

        if (current < questions.length - 1) {

            setCurrent((prev) => prev + 1);

        }

    };



    const goPrevious = () => {

        if (current > 0) {

            setCurrent((prev) => prev - 1);

        }

    };



    const score = questions.reduce((total, q) => {

        return total + (answers[q.id] === q.answer ? 1 : 0);

    }, 0);



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

            <main

                style={{

                    minHeight: "100vh",

                    background: "#f5f7fb",

                    padding: "30px 16px",

                    fontFamily: "Arial, sans-serif",

                }}

            >

                <div

                    style={{

                        maxWidth: 1000,

                        margin: "0 auto",

                    }}

                >

                    <div

                        style={{

                            background: "white",

                            borderRadius: 16,

                            padding: 35,

                            boxShadow: "0 4px 18px rgba(0,0,0,0.08)",

                            textAlign: "center",

                        }}

                    >

                        <h1 style={{ marginBottom: 10 }}>CDP Grand Test 2</h1>



                        <p style={{ color: "#666", marginBottom: 30 }}>

                            Test completed successfully.

                        </p>



                        <div

                            style={{

                                display: "grid",

                                gridTemplateColumns:

                                    "repeat(auto-fit, minmax(160px, 1fr))",

                                gap: 15,

                                marginBottom: 30,

                            }}

                        >

                            <div

                                style={{

                                    background: "#eef4ff",

                                    padding: 20,

                                    borderRadius: 12,

                                }}

                            >

                                <div style={{ fontSize: 30, fontWeight: 700 }}>

                                    {score}

                                </div>

                                <div>Score</div>

                            </div>



                            <div

                                style={{

                                    background: "#eefbf2",

                                    padding: 20,

                                    borderRadius: 12,

                                }}

                            >

                                <div style={{ fontSize: 30, fontWeight: 700 }}>

                                    {percentage}%

                                </div>

                                <div>Percentage</div>

                            </div>



                            <div

                                style={{

                                    background: "#fff7e8",

                                    padding: 20,

                                    borderRadius: 12,

                                }}

                            >

                                <div style={{ fontSize: 30, fontWeight: 700 }}>

                                    {attempted}

                                </div>

                                <div>Attempted</div>

                            </div>



                            <div

                                style={{

                                    background: "#f7efff",

                                    padding: 20,

                                    borderRadius: 12,

                                }}

                            >

                                <div style={{ fontSize: 30, fontWeight: 700 }}>

                                    {questions.length - attempted}

                                </div>

                                <div>Unattempted</div>

                            </div>

                        </div>



                        <button

                            onClick={restartTest}

                            style={{

                                border: "none",

                                background: "#2563eb",

                                color: "white",

                                padding: "13px 25px",

                                borderRadius: 9,

                                cursor: "pointer",

                                fontSize: 16,

                                fontWeight: 600,

                            }}

                        >

                            Retake Test

                        </button>

                    </div>



                    <div

                        style={{

                            marginTop: 20,

                            background: "white",

                            borderRadius: 16,

                            padding: 25,

                            boxShadow: "0 4px 18px rgba(0,0,0,0.08)",

                        }}

                    >

                        <h2 style={{ marginTop: 0 }}>Review Answers</h2>



                        {questions.map((q, index) => {

                            const selected = answers[q.id];

                            const correct = selected === q.answer;



                            return (

                                <div

                                    key={q.id}

                                    style={{

                                        borderBottom: "1px solid #eee",

                                        padding: "18px 0",

                                    }}

                                >

                                    <div

                                        style={{

                                            fontWeight: 700,

                                            marginBottom: 8,

                                        }}

                                    >

                                        Q{index + 1}. Source Q{q.sourceId}

                                    </div>



                                    <div style={{ marginBottom: 5 }}>

                                        {q.question}

                                    </div>



                                    <div

                                        style={{

                                            color: "#555",

                                            marginBottom: 10,

                                        }}

                                    >

                                        {q.hindi}

                                    </div>



                                    <div>

                                        <b>Your answer:</b>{" "}

                                        {selected !== undefined

                                            ? `${q.options[selected]} / ${q.optionsHindi[selected]}`

                                            : "Not Attempted"}

                                    </div>



                                    <div style={{ marginTop: 5 }}>

                                        <b>Correct answer:</b>{" "}

                                        {q.options[q.answer]} / {q.optionsHindi[q.answer]}

                                    </div>



                                    <div

                                        style={{

                                            marginTop: 7,

                                            fontWeight: 600,

                                            color: correct ? "#16a34a" : "#dc2626",

                                        }}

                                    >

                                        {correct ? "Correct" : "Incorrect"}

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </main>

        );

    }



    return (

        <main

            style={{

                minHeight: "100vh",

                background: "#f5f7fb",

                fontFamily: "Arial, sans-serif",

                padding: "15px",

            }}

        >

            <div

                style={{

                    maxWidth: 1250,

                    margin: "0 auto",

                }}

            >

                {/* Header */}

                <div

                    style={{

                        background: "white",

                        borderRadius: 12,

                        padding: "15px 20px",

                        marginBottom: 15,

                        boxShadow: "0 3px 12px rgba(0,0,0,0.07)",

                        display: "flex",

                        justifyContent: "space-between",

                        alignItems: "center",

                        gap: 15,

                        flexWrap: "wrap",

                    }}

                >

                    <div>

                        <h1

                            style={{

                                margin: 0,

                                fontSize: 23,

                            }}

                        >

                            AP TET 2A – CDP Grand Test 2

                        </h1>



                        <div

                            style={{

                                color: "#666",

                                marginTop: 5,

                                fontSize: 14,

                            }}

                        >

                            90 Questions • 90 Marks

                        </div>

                    </div>



                    <div

                        style={{

                            background: "#111827",

                            color: "white",

                            padding: "10px 18px",

                            borderRadius: 9,

                            fontSize: 18,

                            fontWeight: 700,

                            minWidth: 110,

                            textAlign: "center",

                        }}

                    >

                        ⏱ {formatTime(timeLeft)}

                    </div>

                </div>



                <div

                    style={{

                        display: "grid",

                        gridTemplateColumns: "1fr 300px",

                        gap: 15,

                        alignItems: "start",

                    }}

                >

                    {/* Question area */}

                    <div

                        style={{

                            background: "white",

                            borderRadius: 14,

                            padding: 25,

                            boxShadow: "0 3px 12px rgba(0,0,0,0.07)",

                        }}

                    >

                        <div

                            style={{

                                display: "flex",

                                justifyContent: "space-between",

                                marginBottom: 20,

                                color: "#555",

                                fontSize: 14,

                            }}

                        >

                            <span>

                                Question {current + 1} of {questions.length}

                            </span>



                            <span>

                                Source Question: {question.sourceId}

                            </span>

                        </div>



                        <h2

                            style={{

                                fontSize: 20,

                                lineHeight: 1.5,

                                marginBottom: 12,

                            }}

                        >

                            {question.question}

                        </h2>



                        <div

                            style={{

                                fontSize: 19,

                                lineHeight: 1.8,

                                marginBottom: 25,

                                padding: 15,

                                background: "#fafafa",

                                borderRadius: 10,

                                borderLeft: "4px solid #2563eb",

                            }}

                        >

                            {question.hindi}

                        </div>



                        <div>

                            {question.options.map((option, index) => {

                                const selected = answers[question.id] === index;



                                return (

                                    <label

                                        key={index}

                                        style={{

                                            display: "block",

                                            padding: "14px 15px",

                                            marginBottom: 12,

                                            border: selected

                                                ? "2px solid #2563eb"

                                                : "1px solid #d8dce5",

                                            borderRadius: 10,

                                            cursor: "pointer",

                                            background: selected

                                                ? "#eff6ff"

                                                : "white",

                                        }}

                                    >

                                        <div

                                            style={{

                                                display: "flex",

                                                alignItems: "flex-start",

                                                gap: 10,

                                            }}

                                        >

                                            <input

                                                type="radio"

                                                name={`question-${question.id}`}

                                                checked={selected}

                                                onChange={() => selectAnswer(index)}

                                                style={{

                                                    marginTop: 5,

                                                }}

                                            />



                                            <div>

                                                <div

                                                    style={{

                                                        fontWeight: 600,

                                                        marginBottom: 5,

                                                    }}

                                                >

                                                    {index + 1}. {option}

                                                </div>



                                                <div

                                                    style={{

                                                        color: "#555",

                                                        fontSize: 16,

                                                    }}

                                                >

                                                    {question.optionsHindi[index]}

                                                </div>

                                            </div>

                                        </div>

                                    </label>

                                );

                            })}

                        </div>



                        {/* Navigation */}

                        <div

                            style={{

                                display: "flex",

                                justifyContent: "space-between",

                                gap: 10,

                                marginTop: 25,

                            }}

                        >

                            <button

                                onClick={goPrevious}

                                disabled={current === 0}

                                style={{

                                    padding: "12px 22px",

                                    borderRadius: 8,

                                    border: "1px solid #ccc",

                                    background:

                                        current === 0 ? "#eee" : "white",

                                    cursor:

                                        current === 0

                                            ? "not-allowed"

                                            : "pointer",

                                    fontWeight: 600,

                                }}

                            >

                                ← Previous

                            </button>



                            {current === questions.length - 1 ? (

                                <button

                                    onClick={() => setSubmitted(true)}

                                    style={{

                                        padding: "12px 25px",

                                        borderRadius: 8,

                                        border: "none",

                                        background: "#16a34a",

                                        color: "white",

                                        cursor: "pointer",

                                        fontWeight: 700,

                                    }}

                                >

                                    Submit Test

                                </button>

                            ) : (

                                <button

                                    onClick={goNext}

                                    style={{

                                        padding: "12px 25px",

                                        borderRadius: 8,

                                        border: "none",

                                        background: "#2563eb",

                                        color: "white",

                                        cursor: "pointer",

                                        fontWeight: 700,

                                    }}

                                >

                                    Next →

                                </button>

                            )}

                        </div>

                    </div>



                    {/* Question Palette */}

                    <div

                        style={{

                            background: "white",

                            borderRadius: 14,

                            padding: 20,

                            boxShadow: "0 3px 12px rgba(0,0,0,0.07)",

                            position: "sticky",

                            top: 15,

                        }}

                    >

                        <h3 style={{ marginTop: 0 }}>

                            Question Palette

                        </h3>



                        <div

                            style={{

                                display: "grid",

                                gridTemplateColumns:

                                    "repeat(5, 1fr)",

                                gap: 8,

                            }}

                        >

                            {questions.map((q, index) => {

                                const answered =

                                    answers[q.id] !== undefined;

                                const active = current === index;



                                return (

                                    <button

                                        key={q.id}

                                        onClick={() => setCurrent(index)}

                                        style={{

                                            height: 42,

                                            borderRadius: 7,

                                            border: active

                                                ? "3px solid #111827"

                                                : "1px solid #ddd",

                                            background: answered

                                                ? "#22c55e"

                                                : "#f3f4f6",

                                            color: answered

                                                ? "white"

                                                : "#111827",

                                            fontWeight: 700,

                                            cursor: "pointer",

                                        }}

                                    >

                                        {index + 1}

                                    </button>

                                );

                            })}

                        </div>



                        <div

                            style={{

                                marginTop: 20,

                                fontSize: 13,

                                color: "#555",

                            }}

                        >

                            <div

                                style={{

                                    display: "flex",

                                    alignItems: "center",

                                    gap: 8,

                                    marginBottom: 8,

                                }}

                            >

                                <span

                                    style={{

                                        width: 15,

                                        height: 15,

                                        background: "#22c55e",

                                        borderRadius: 4,

                                        display: "inline-block",

                                    }}

                                />

                                Answered

                            </div>



                            <div

                                style={{

                                    display: "flex",

                                    alignItems: "center",

                                    gap: 8,

                                }}

                            >

                                <span

                                    style={{

                                        width: 15,

                                        height: 15,

                                        background: "#f3f4f6",

                                        border: "1px solid #ddd",

                                        borderRadius: 4,

                                        display: "inline-block",

                                    }}

                                />

                                Not Answered

                            </div>

                        </div>



                        <div

                            style={{

                                marginTop: 20,

                                padding: 15,

                                background: "#f8fafc",

                                borderRadius: 9,

                            }}

                        >

                            <div>

                                <b>Attempted:</b>{" "}

                                {attempted}/{questions.length}

                            </div>



                            <div style={{ marginTop: 5 }}>

                                <b>Remaining:</b>{" "}

                                {questions.length - attempted}

                            </div>

                        </div>



                        <button

                            onClick={() => setSubmitted(true)}

                            style={{

                                width: "100%",

                                marginTop: 18,

                                padding: "12px",

                                border: "none",

                                borderRadius: 8,

                                background: "#dc2626",

                                color: "white",

                                fontWeight: 700,

                                cursor: "pointer",

                            }}

                        >

                            Submit Test

                        </button>

                    </div>

                </div>

            </div>



            {/* Mobile responsive adjustment */}

            <style jsx>{`

        @media (max-width: 850px) {

          main > div > div:nth-child(2) {

            grid-template-columns: 1fr !important;

          }



          main > div > div:nth-child(2) > div:last-child {

            position: static !important;

          }

        }



        @media (max-width: 600px) {

          h1 {

            font-size: 19px !important;

          }

        }

      `}</style>

        </main>

    );

}