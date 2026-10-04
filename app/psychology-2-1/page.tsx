"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "Father of Adolescence ….\nकिशोरावस्था के जनक ...",
        options: [
            "Stanley Hall स्टैन्ली हॉल",
            "Thorndike थॉर्नडाइक",
            "Binet बिने",
            "Rousseau रूसो",
        ],
        answer: 0,
    },
    {
        id: 2,
        question: "Father of Experimental Psychology ….\nप्रयोगात्मक मनोविज्ञान शास्त्र के जनक ....",
        options: [
            "Skinner स्किनर",
            "Sigmund Freud सिग्मंड फ्रायड",
            "Wilhelm Wundt विल्हेल्म वुंट",
            "Erikson एरिक्सन",
        ],
        answer: 2,
    },
    {
        id: 3,
        question: "Meaning of words psyche and logos\npsyche और logos शब्दों का अर्थ है -",
        options: [
            "Science, School — शास्त्र और पाठशाला",
            "Soul, Knowledge — आत्मा और ज्ञान",
            "Behaviour, Nature — व्यवहार और स्वभाव",
            "Cognition, Mind — संज्ञान और मस्तिष्क",
        ],
        answer: 1,
    },
    {
        id: 4,
        question: "“Development is the complex process of integrating different structures and functions,” is defined by\n“विकास विभिन्न संरचनाओं और प्रकार्यों को एकीकृत करनेवाली संकलिष्ट प्रक्रिया है।” यह परिभाषा इनकी है –",
        options: [
            "Skinner स्किनर",
            "Binet बिने",
            "Erikson एरिक्सन",
            "Anderson आंडरसन",
        ],
        answer: 3,
    },
    {
        id: 5,
        question: "Development =  (maturation × A). Here A is\nविकास =  (परिपक्वता × A). यहाँ A का अर्थ",
        options: [
            "Learning — अधिगम",
            "Attitude — अभिवृत्ति",
            "Interest — रुचि",
            "Intelligence — बुद्धि",
        ],
        answer: 0,
    },
    {
        id: 6,
        question: "Father of Educational Psychology\nशिक्षा मनोविज्ञान शास्त्र के जनक ...",
        options: [
            "Aristotle अरस्तु",
            "Thorndike थॉर्नडाइक",
            "Stanley Hall स्टैन्ली हॉल",
            "Binet बिने",
        ],
        answer: 1,
    },
    {
        id: 7,
        question: "‘Gymnasia School’ was established by\nनिम्न में से जिम्नेसिया पाठशाला की स्थापना इन्होंने की -",
        options: [
            "Plato प्लेटो",
            "Freud फ्रायड",
            "Piaget पियाजे",
            "Thorndike थॉर्नडाइक",
        ],
        answer: 0,
    },
    {
        id: 8,
        question: "The slogan “Go back to nature” was given by\n“प्रकृति की तरफ लौटो” नारा देनेवाले हैं -",
        options: [
            "Thorndike थॉर्नडाइक",
            "Rousseau रूसो",
            "Stanley Hall स्टैन्ली हॉल",
            "Froebel फ्रॉबेल",
        ],
        answer: 1,
    },
    {
        id: 9,
        question: "This is incorrect related to growth\n“अभिवृद्धि” से यह संबंधित नहीं है",
        options: [
            "Narrow Concept — संकुचित अवधारणा",
            "Quantitative — परिमाणात्मक",
            "Lifelong process — आजीवन प्रक्रिया",
            "Measured accurately — सटीक मापन",
        ],
        answer: 2,
    },
    {
        id: 10,
        question: "The sequence of Crawling → Sitting → Standing → Walking follows in all individuals. This principle of development is\n“रेंगना → बैठना → खड़ा होना → चलना। यह क्रम सभी लोगों में एक जैसा होता है।” यह विकास सिद्धांत है -",
        options: [
            "Development is continuous — विकास निरंतरशील है।",
            "Development is predictable — विकास की भविष्यवाणी कर सकते हैं।",
            "Principle of Uniform Pattern — एकरूपता का सिद्धांत",
            "Principle of Proximodistal development — निकट-दूरस्थ सिद्धांत",
        ],
        answer: 2,
    },
    {
        id: 11,
        question: "A physically challenged child shows aggressive behaviour in some emotions. This principle of development is\nएक दिव्यांग बालक कुछ संवेगों में हमलावर व्यवहार करता है। यह इस विकास सिद्धांत के अनुसार है -",
        options: [
            "Development is continuous — विकास निरंतरशील है।",
            "Different aspects of development are interrelated — विभिन्न विकास आपस में संबंधित होते हैं।",
            "Development is cumulative — विकास संचित है।",
            "Development is predictable — विकास की भविष्यवाणी कर सकते हैं।",
        ],
        answer: 1,
    },
    {
        id: 12,
        question: "We see that an infant uses his shoulders and elbows first to reach an object and then uses his wrists and fingers. This principle of development is\nशिशु किसी चीज़ को पकड़ने के लिए पहले भुजाएँ, बाद में कुहनी का उपयोग करने के बाद अपनी कलाई व उंगलियों का उपयोग करता है। यह किस प्रकार का विकास सिद्धांत है?",
        options: [
            "Development is continuous — विकास निरंतरशील है।",
            "Development is cumulative — विकास संचित है।",
            "Principle of Cephalocaudal development — शिरो-पादाभिमुख विकास",
            "Principle of Proximodistal development — निकट-दूरस्थ सिद्धांत",
        ],
        answer: 3,
    },
    {
        id: 13,
        question: "Growth is rapid during infancy and childhood. Later it becomes slower. In adolescence it is rapid again. This principle of development is\nशैशवावस्था और बाल्यावस्था में विकास की गति अधिक होकर बाद में धीमी पड़कर किशोरावस्था में फिर गति को प्राप्त करेगी। यह विकास सिद्धांत है -",
        options: [
            "Principle of Predictability — विकास की भविष्यवाणी कर सकते हैं।",
            "Principle of Non-Uniform Pattern — विकास सभी अवस्थाओं में एक जैसा नहीं होता है।",
            "Principle of Cephalocaudal development — शिरो-पादाभिमुख विकास सिद्धांत",
            "Principle of Cumulative development — विकास संचित सिद्धांत",
        ],
        answer: 1,
    },
    {
        id: 14,
        question: "A girl who is singing very well in her childhood is appreciated and blessed to become a good singer in future by her teacher. This principle of development is\nअपनी बाल्यावस्था में मधुर गानेवाली बच्ची, अपने अध्यापक द्वारा प्रशंसा पाकर भविष्य में एक अच्छी गायिका बनने का आशीर्वाद पायी है। यह विकास का सिद्धांत है -",
        options: [
            "Development is cumulative — विकास संचित है।",
            "Development is continuous — विकास निरंतरशील है।",
            "Development is predictable — विकास की भविष्यवाणी कर सकते हैं।",
            "Principle of Proxima distal development — निकट-दूरस्थ सिद्धांत",
        ],
        answer: 2,
    },
    {
        id: 15,
        question: "A mother is feeling bad finding her 1 year old son not being able to walk properly while her neighbour’s 10 months old boy is good at walking. This principle of development is\nएक वर्ष की आयु वाले बच्चे की माँ चिंतित है कि उसके पड़ोसिन का बच्चा 10वें महीने में ही चल पा रहा है, लेकिन अपना बच्चा अब तक नहीं। यह विकास के इस सिद्धांत से जुड़ा है।",
        options: [
            "Development is cumulative — विकास संचित है।",
            "Development is continuous — विकास निरंतरशील है।",
            "Development is predictable — विकास की भविष्यवाणी कर सकते हैं।",
            "Development has individual differences — विकास में व्यक्तिगत भेद होते हैं।",
        ],
        answer: 3,
    },
    {
        id: 16,
        question: "Development starts from the central part of the body. Then it spreads to outer parts of the body. This principle of development is\nविकास की प्रक्रिया सबसे पहले शरीर के मध्य भागों में प्रारंभ होकर बाद में बाहर के अंगों तक फैलती है। यह विकास का कौन-सा सिद्धांत है?",
        options: [
            "Development is predictable — विकास की भविष्यवाणी कर सकते हैं।",
            "Development is cumulative — विकास संचित है।",
            "Principle of Cephalocaudal development — शिरो-पादाभिमुख विकास सिद्धांत",
            "Principle of Proximodistal development — निकट-दूरस्थ सिद्धांत",
        ],
        answer: 3,
    },
    {
        id: 17,
        question: "A child starts crawling at 5 months while another child starts at 7 months. This principle of development is\nएक शिशु ने अपने पाँचवें महीने में रेंगना शुरू किया और एक शिशु अपने सातवें महीने में। यह विकास सिद्धांत से संबंधित है -",
        options: [
            "Development is cumulative — विकास संचित है।",
            "Development is continuous — विकास निरंतरशील है।",
            "Development is predictable — विकास की भविष्यवाणी कर सकते हैं।",
            "Development has individual differences — विकास में व्यक्तिगत भेद होते हैं।",
        ],
        answer: 3,
    },
    {
        id: 18,
        question: "A girl who is good at emotional development is also good at social relations. This principle of development is\nजिस लड़की का संवेगात्मक विकास उत्तम होता है, उसके सामाजिक संबंध भी उत्तम होते हैं। यह विकास के सिद्धांत से संबंधित है -",
        options: [
            "Development is continuous — विकास निरंतरशील है।",
            "Development is predictable — विकास की भविष्यवाणी कर सकते हैं।",
            "Development is cumulative — विकास संचित है।",
            "Different aspects of development are interrelated — विभिन्न प्रकार के विकास पारस्परिक संबंधों में जुड़े होते हैं।",
        ],
        answer: 3,
    },
    {
        id: 19,
        question: "The word ‘Pubertas’ means\n‘प्यूबर्टास’ का अर्थ है -",
        options: [
            "Age of manhood — पुंसत्व की आयु",
            "Age of childhood — बाल्यावस्था की आयु",
            "Age of play — खेलने की आयु",
            "Age of questioning — प्रश्न करने की आयु",
        ],
        answer: 0,
    },
    {
        id: 20,
        question: "This stage is called as ‘Period of Overlapping’\nइस अवस्था को अतिक्रमण/व्याप्त अवस्था कहते हैं -",
        options: [
            "Pre-natal stage — जनन पूर्व अवस्था",
            "Infancy — नवजात शिशु अवस्था",
            "Adulthood — प्रौढ़ावस्था",
            "Puberty — यौनारंभ अवस्था",
        ],
        answer: 3,
    },
    {
        id: 21,
        question: "This is not related to Neonatal stage\nनिम्न में से यह नवजात शिशु की अवस्था से संबंधित नहीं है -",
        options: [
            "Period of first two weeks of child — शिशु के प्रथम दो सप्ताहों का समय",
            "It lasts up to the detachment of umbilical cord — शिशु की नाभि रज्जू अलग हो जाने तक इस अवस्था में रहता है।",
            "Takes 14 to 17 hours a day for sleeping — सोने का समय दिन में 14 से 17 घंटों तक रहता है।",
            "Language development is very high at this stage — इस दशा में भाषा का अधिक विकास होता है।",
        ],
        answer: 3,
    },
    {
        id: 22,
        question: "This is not the characteristic of Infancy\nनिम्न में से यह शैशव अवस्था से संबंधित नहीं है -",
        options: [
            "Period from 2 weeks to 2 years — दो सप्ताहों से लेकर दो वर्षों का समय",
            "The age of questioning — प्रश्न करने की आयु",
            "Period of rapid growth and development — इस समय अभिवृद्धि और विकास अधिक होता है।",
            "First pair of milk teeth arises at this stage — दूध के दाँतों की पहली जोड़ी इसी अवस्था में निकलती है।",
        ],
        answer: 1,
    },
    {
        id: 23,
        question: "The word ‘Puberty’ is derived from this language\n‘Puberty’ शब्द इस भाषा से उत्पन्न है।",
        options: [
            "Urdu — उर्दू",
            "Kannada — कन्नड़",
            "Tamil — तमिल",
            "Latin — लैटिन",
        ],
        answer: 3,
    },
    {
        id: 24,
        question: "This is the characteristic of Adulthood\nनिम्न में से प्रौढ़ावस्था की विशेषता है।",
        options: [
            "Called as Gang age — गिरोह व टोली दशा",
            "Increased responsibilities of life’s activities — इस दशा में जीवन संबंधी क्रियाकलापों का दायित्व बढ़ता है।",
            "Period of rapid growth and development — अभिवृद्धि एवं विकास तीव्र गति में होता है।",
            "Takes 15 to 20 hours a day for sleeping — सोने के लिए 15 से 20 घंटे लगते हैं।",
        ],
        answer: 1,
    },
    {
        id: 25,
        question: "Zygote is\nजाइगोट एक -",
        options: [
            "Ending of the life — जीवन का अंत",
            "Beginning of the life — जीवन का आरंभ",
            "Middle stage of the life — जीवन की मध्य दशा",
            "Stage of maturity — परिपक्वता की दशा",
        ],
        answer: 1,
    },
    {
        id: 26,
        question: "Secondary sexual characters are seen at this stage\nगौण लैंगिक गुण इस अवस्था में दिखाई देते हैं -",
        options: [
            "Infancy — नवजात शिशु अवस्था",
            "Early childhood — पूर्व बाल्यावस्था",
            "Puberty — यौनारंभ अवस्था",
            "Adulthood — प्रौढ़ावस्था",
        ],
        answer: 2,
    },
    {
        id: 27,
        question: "In human beings, nine months gestation period inside mother’s womb is called\nमानव के माँ के गर्भ में नौ महीने तक भ्रूण के रहने की अवधि का नाम है -",
        options: [
            "Pre-natal period — जनन पूर्व अवस्था",
            "Neonatal stage — नवजात शिशु अवस्था",
            "Early childhood — पूर्व बाल्यावस्था",
            "Adolescence — किशोरावस्था",
        ],
        answer: 0,
    },
    {
        id: 28,
        question: "The process by which the individual knows himself and the environment is\nव्यक्ति अपने बारे में और परिवेश के बारे में जानने की प्रक्रिया है -",
        options: [
            "Attitude — अभिवृत्ति",
            "Cognition — संज्ञानात्मकता",
            "Learning — अधिगम",
            "Personality — व्यक्तित्व",
        ],
        answer: 1,
    },
    {
        id: 29,
        question: "Understanding new situations is\nनई परिस्थितियों को समझना है -",
        options: [
            "Incorporation — संश्लेषण / समावेशन",
            "Learning — अधिगम",
            "Interest — रुचि",
            "Motivation — प्रेरणा",
        ],
        answer: 0,
    },
    {
        id: 30,
        question: "Piaget’s Cognitive Development stage from birth to 2 years\nपियाजे के संज्ञानात्मक विकास के अनुसार जन्म से लेकर दो वर्ष की आयु तक की अवस्था -",
        options: [
            "Sensory Motor Stage — इन्द्रिय चालक दशा",
            "Pre-Operational Stage — पूर्व प्रचालन दशा",
            "Concrete-Operational Stage — मूर्त प्रचालन दशा",
            "Formal Operational Stage — अमूर्त प्रचालन दशा",
        ],
        answer: 0,
    },
    {
        id: 31,
        question: "Piaget’s Cognitive Development stage from 2 years to 7 years is\nपियाजे के संज्ञानात्मक विकास के अनुसार दो वर्ष की आयु से लेकर सात वर्ष की आयु तक की अवस्था -",
        options: [
            "Sensory Motor Stage — इन्द्रिय चालक अवस्था",
            "Pre-Operational Stage — पूर्व प्रचालन अवस्था",
            "Concrete-Operational Stage — मूर्त प्रचालन अवस्था",
            "Formal Operational Stage — अमूर्त प्रचालन अवस्था",
        ],
        answer: 1,
    },
    {
        id: 32,
        question: "Piaget’s Cognitive Development stage from 7 years to 11 years is\nपियाजे के संज्ञानात्मक विकास के अनुसार 7 वर्ष की आयु से लेकर 11 वर्ष की आयु तक की अवस्था -",
        options: [
            "Sensory Motor Stage — इन्द्रिय चालक अवस्था",
            "Pre-Operational Stage — पूर्व प्रचालन अवस्था",
            "Concrete-Operational Stage — मूर्त प्रचालन अवस्था",
            "Formal Operational Stage — अमूर्त प्रचालन अवस्था",
        ],
        answer: 2,
    },
    {
        id: 33,
        question: "Piaget’s Cognitive Development stage from 11 years to 15 or 16 years is\nपियाजे के संज्ञानात्मक विकास के अनुसार 11 वर्ष की आयु से लेकर 15 या 16 वर्ष की आयु तक की अवस्था -",
        options: [
            "Sensory Motor Stage — इन्द्रिय चालक अवस्था",
            "Pre-Operational Stage — पूर्व प्रचालन अवस्था",
            "Concrete-Operational Stage — मूर्त प्रचालन अवस्था",
            "Formal Operational Stage — अमूर्त प्रचालन अवस्था",
        ],
        answer: 3,
    },
    {
        id: 34,
        question: "At this stage of Piaget’s Cognitive Development stages, the child develops problem solving ability\nपियाजे के संज्ञानात्मक विकास की अवस्थाओं में से इस अवस्था में बालक समस्या को हल करने में कुशल बनेगा -",
        options: [
            "Sensory Motor Stage — इन्द्रिय चालक अवस्था",
            "Pre-Operational Stage — पूर्व प्रचालन अवस्था",
            "Concrete-Operational Stage — मूर्त प्रचालन अवस्था",
            "Formal Operational Stage — अमूर्त प्रचालन अवस्था",
        ],
        answer: 3,
    },
    {
        id: 35,
        question: "At this stage of Piaget’s Cognitive Development stages, we can observe the concepts like Classification, Analysis and Preservation\nपियाजे के संज्ञानात्मक विकास की अवस्थाओं में से इस अवस्था में हम वर्गीकरण, विश्लेषण, संरक्षण आदि भावनाएँ पाते हैं -",
        options: [
            "Sensory Motor Stage — इन्द्रिय चालक अवस्था",
            "Pre-Operational Stage — पूर्व प्रचालन अवस्था",
            "Concrete-Operational Stage — मूर्त प्रचालन अवस्था",
            "Formal Operational Stage — अमूर्त प्रचालन अवस्था",
        ],
        answer: 2,
    },
    {
        id: 36,
        question: "At this stage of Piaget’s Cognitive Development stages, we can see higher levels of Ego centrism in child\nपियाजे के संज्ञानात्मक विकास की अवस्थाओं में से इस अवस्था में बालक में अहं केन्द्रित भावना अधिक दिखाई देती है।",
        options: [
            "Sensory Motor Stage — इन्द्रिय चालक अवस्था",
            "Pre-Operational Stage — पूर्व प्रचालन अवस्था",
            "Concrete-Operational Stage — मूर्त प्रचालन अवस्था",
            "Formal Operational Stage — अमूर्त प्रचालन अवस्था",
        ],
        answer: 0,
    },
    {
        id: 37,
        question: "The Psycho Social crisis faced by a child at the stage of Babyhood according to Erik Erikson is\nएरिक एरिक्सन के अनुसार शैशवोत्तर अवस्था में बालक इस मनोसामाजिक संकट स्थिति का सामना करता है -",
        options: [
            "Initiative – Guilt — पहल करना – अपराध की भावना",
            "Autonomy – Doubt — स्वाधिपत्य – संशय",
            "Generativity – Stagnation — उत्पादन – स्थब्धता",
            "Integrity – Despair — समग्रता – निराशा",
        ],
        answer: 1,
    },
    {
        id: 38,
        question: "The Psycho Social crisis faced by an individual at the stage of Adolescence according to Erik Erikson is\nएरिक एरिक्सन के अनुसार किशोरावस्था में बालक इस मनोसामाजिक संकट स्थिति का सामना करता है -",
        options: [
            "Role Identity – Role Confusion — भूमिका की पहचान – भूमिका की संदिग्धता",
            "Intimacy – Isolation — घनिष्ठता – एकांत",
            "Autonomy – Doubt — स्वायत्तता – संशय",
            "Integrity – Despair — समग्रता – निराशा",
        ],
        answer: 0,
    },
    {
        id: 39,
        question: "The Psycho Social crisis faced by a child at the age of first year according to Erik Erikson is\nएरिक एरिक्सन के अनुसार पहले वर्ष का बालक इस मनोसामाजिक संकट स्थिति का सामना करता है -",
        options: [
            "Autonomy – Doubt — स्वायत्तता – संशय",
            "Trust – Mistrust — विश्वास – अविश्वास",
            "Intimacy – Isolation — घनिष्ठता – एकांत",
            "Integrity – Despair — समग्रता – निराशा",
        ],
        answer: 1,
    },
    {
        id: 40,
        question: "The Psycho Social crisis faced by a child at the stage of School Age according to Erik Erikson is\nएरिक एरिक्सन के अनुसार पाठशालावस्था के बालक इस मनोसामाजिक संकट स्थिति का सामना करता है -",
        options: [
            "Generativity – Stagnation — उत्पादन – स्थब्धता",
            "Initiative – Guilt — पहल करना – अपराध की भावना",
            "Industry – Inferiority — श्रम करना – न्यूनता",
            "Integrity – Despair — समग्रता – निराशा",
        ],
        answer: 2,
    },
    {
        id: 41,
        question: "The Psycho Social crisis faced by an individual at the stage of Middle Adulthood according to Erik Erikson is\nएरिक एरिक्सन के अनुसार मध्य प्रौढ़ावस्था का व्यक्ति इस मनोसामाजिक संकट स्थिति का सामना करता है -",
        options: [
            "Trust – Mistrust — विश्वास – अविश्वास",
            "Industry – Inferiority — श्रम करना – न्यूनता",
            "Intimacy – Isolation — घनिष्ठता – एकांत",
            "Generativity – Stagnation — उत्पादन – स्थब्धता",
        ],
        answer: 3,
    },
    {
        id: 42,
        question: "Identify the correctly matched pair related to Erikson’s Psycho Social Developmental Stage/s\nएरिक्सन मनोसामाजिक विकास सिद्धांत के बारे में सही जोड़ियाँ हैं-\nA) Infancy → Trust – Mistrust\nB) Babyhood → Industry – Inferiority",
        options: [
            "Only A is Correct — केवल A सही",
            "Only B is Correct — केवल B सही",
            "Both A, B are Correct — A और B दोनों सही",
            "Both A, B are Incorrect — A और B दोनों सही नहीं",
        ],
        answer: 0,
    },
    {
        id: 43,
        question: "Correctly matched pair related to Erikson’s Psycho Social Developmental Stage/s\nएरिक्सन मनोसामाजिक विकास सिद्धांत के बारे में सही जोड़ियाँ हैं-\nA) Adolescence → Role Identity – Role Confusion\nB) School Age → Industry – Inferiority",
        options: [
            "Only A is Correct — केवल A सही",
            "Only B is Correct — केवल B सही",
            "Both A, B are Correct — A और B दोनों सही",
            "Both A, B are Incorrect — A और B दोनों सही नहीं",
        ],
        answer: 2,
    },
    {
        id: 44,
        question: "The age group of people face Psycho Social Crisis, ‘Integrity – Despair’, according to Erikson (in years)\nएरिक एरिक्सन के अनुसार इस आयु के व्यक्ति ‘समग्रता – निराशा’ नामक मनोसामाजिक संकट स्थिति का सामना करते हैं -",
        options: [
            "12 – 20",
            "20 – 30",
            "30 – 60",
            "> 60",
        ],
        answer: 3,
    },
    {
        id: 45,
        question: "This age group of people face the Psycho Social Crisis, “Isolation”, according to Erikson (in years)\nएरिक्सन के अनुसार इस आयु के व्यक्ति ‘एकांत’ नामक मनोसामाजिक संकट स्थिति का सामना करते हैं -",
        options: [
            "3 – 5",
            "6 – 12",
            "12 – 20",
            "20 – 30",
        ],
        answer: 3,
    },
    {
        id: 46,
        question: "The stage of Moral Development that belongs to Level–1 of Pre-conventional Morality in Kohlberg’s theory\nकोहलबर्ग सिद्धांत के नैतिक विकास की दशाओं में पहली स्थायी-पूर्व पारंपरिक अवस्था इस अवस्था से संबंधित है -",
        options: [
            "Punishment – Obedience — दंड – आज्ञापालन नीति",
            "Good Boy – Good Girl — अच्छा बालक – अच्छी बालिका नीति",
            "Law and Order — कानून व व्यवस्था",
            "Universal Ethical Principle — सार्वभौमिक नैतिक सिद्धांत",
        ],
        answer: 0,
    },
    {
        id: 47,
        question: "According to Kohlberg, at this stage people develop a sense of guilt if they fail to obey the universal principles.\nकोहलबर्ग के अनुसार सार्वभौमिक सूत्रों को अमल करने में ये व्यक्ति अगर विफल हो तो अपने अपराध की भावना बढ़ाते हैं -",
        options: [
            "Stage 2 – अवस्था 2",
            "Stage 4 – अवस्था 4",
            "Stage 6 – अवस्था 6",
            "Stage 8 – अवस्था 8",
        ],
        answer: 2,
    },
    {
        id: 48,
        question: "Expand EQ in the context of Emotional Intelligence.\nसंवेगात्मक बुद्धि के संबंध में EQ का विस्तार कीजिए।",
        options: [
            "Educational Quotient",
            "Emotional Quotient",
            "Emotional Question",
            "Evaluation Question",
        ],
        answer: 1,
    },
    {
        id: 49,
        question: "This is not a characteristic of Emotional Intelligence\nयह संवेगात्मक बुद्धि का लक्षण नहीं है -",
        options: [
            "Knowing our own emotions — अपने संवेगों को जानना",
            "Managing one’s emotions — अपने संवेगों को नियंत्रित करना",
            "Handling relationships — संबंधों को संभालना",
            "Doesn’t recognize emotions of others — दूसरों के संवेगों को न पहचानना",
        ],
        answer: 3,
    },
    {
        id: 50,
        question: "The emotion that is developed from the instinct “Escape” is\nयह संवेग पलायन नामक मूलप्रवृत्ति से विकसित होता है -",
        options: [
            "Love — प्रेम",
            "Fear — भय",
            "Wonder — आश्चर्य",
            "Unity — एकता",
        ],
        answer: 1,
    },
    {
        id: 51,
        question: "The emotion that is developed from the instinct “parental care” is\n‘माँ–बाप का संरक्षण’ मूल प्रवृत्ति से उत्पन्न संवेग है -",
        options: [
            "Fear — भय",
            "Anger — क्रोध",
            "Love — प्रेम",
            "Excitement — उत्तेजना",
        ],
        answer: 2,
    },
    {
        id: 52,
        question: "The emotion that is developed from the instinct “Disturb” is\n‘भंग करना’ मूल प्रवृत्ति से उत्पन्न संवेग है -",
        options: [
            "Love — प्रेम",
            "Anger — क्रोध",
            "Wonder — आश्चर्य",
            "Unity — एकता",
        ],
        answer: 1,
    },
    {
        id: 53,
        question: "Emotion is derived from the word of this language\n‘Emotion’ शब्द इस भाषा से उत्पन्न हुआ है -",
        options: [
            "Telugu — तेलुगु",
            "Hindi — हिंदी",
            "Tamil — तमिल",
            "Latin — लैटिन",
        ],
        answer: 3,
    },
    {
        id: 54,
        question: "This is not a positive emotion\nयह सकारात्मक संवेग नहीं है -",
        options: [
            "Affection — वात्सल्य",
            "Creativity — सृजनात्मकता",
            "Happiness — आनंद",
            "Anger — क्रोध",
        ],
        answer: 3,
    },
    {
        id: 55,
        question: "A girl is playing alone by imitating her cousin, who is playing beside her. This type of play is\nएक लड़की अपनी चचेरी बहन के खेल का अनुकरण करते हुए अकेली खेल रही है। यह इस प्रकार का खेल है -",
        options: [
            "Solitary Play — एकांत खेल",
            "Parallel Play — समानांतर खेल",
            "Perpendicular Play — लंबवत खेल",
            "Social Play — सामाजिक खेल",
        ],
        answer: 1,
    },
    {
        id: 56,
        question: "Socially matured children participate in this type of play.\nसामाजिक परिपक्व बच्चे इस प्रकार के खेलों में भाग लेते हैं -",
        options: [
            "Solitary Play — एकांत खेल",
            "Parallel Play — समानांतर खेल",
            "Perpendicular Play — लंबवत खेल",
            "Co-Operative Play — सहयोगात्मक खेल",
        ],
        answer: 3,
    },
    {
        id: 57,
        question: "This is not a characteristic of a person with social development during adolescence.\nकिशोरावस्था में सामाजिक विकास वाले व्यक्ति का यह लक्षण नहीं है -",
        options: [
            "Sexual Consciousness — लैंगिक चेतना",
            "Social Consciousness — सामाजिक चेतना",
            "Group Loyalty — समूह निष्ठा",
            "Lack of interest in Social Service — सामाजिक सेवा के प्रति रुचि न दिखाना",
        ],
        answer: 3,
    },
    {
        id: 58,
        question: "Characteristic of a person with social development during adolescence is\nकिशोरावस्था में सामाजिक विकास वाले व्यक्ति का लक्षण है -",
        options: [
            "Lack of Social Consciousness — सामाजिक चेतना न होना",
            "Lack of interest in Social Service — सामाजिक सेवा के प्रति रुचि न होना",
            "Group Loyalty — समूह निष्ठा",
            "Lack of Sexual Consciousness — लैंगिक चेतना न होना",
        ],
        answer: 2,
    },
    {
        id: 59,
        question: "Sexual Cleavage means\n‘लैंगिक विखंडन’ (Sexual Cleavage) का अर्थ है -",
        options: [
            "Boys and Girls play together — लड़के–लड़कियाँ मिलकर खेलना",
            "Boys and Girls reject to play together — लड़के–लड़कियाँ मिलकर खेलने से मना करना",
            "Boys liking their mother — लड़के माँ को पसंद करना",
            "Girls liking their father — लड़कियाँ पिता को पसंद करना",
        ],
        answer: 1,
    },
    {
        id: 60,
        question: "Correct option is\nसही विकल्प पहचानिए -\nA: Mass Media plays an important role in socialization of an individual.\nB: Peer Groups play a key role in socialization.",
        options: [
            "Only A is correct — केवल A सही है",
            "Only B is correct — केवल B सही है",
            "Both A & B are correct — A और B दोनों सही हैं",
            "Both A & B are incorrect — A और B दोनों सही नहीं हैं",
        ],
        answer: 2,
    },
]

export default function Psychology21() {
    const [answers, setAnswers] = useState<Record<number, number>>({})
    const [submitted, setSubmitted] = useState(false)

    const handleAnswer = (questionId: number, optionIndex: number) => {
        setAnswers((previous) => ({
            ...previous,
            [questionId]: optionIndex,
        }))
    }

    const score = questions.reduce((total, question) => {
        return total + (answers[question.id] === question.answer ? 1 : 0)
    }, 0)

    const percentage = ((score / questions.length) * 100).toFixed(2)

    const allAnswered = Object.keys(answers).length === questions.length

    if (submitted) {
        return (
            <div className="min-h-screen bg-slate-50 py-10 px-4">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
                        <h1 className="text-4xl font-bold text-center text-cyan-700 mb-8">
                            Test Result
                        </h1>

                        <div className="space-y-4 text-center">
                            <div className="text-3xl font-bold">
                                Score: {score}/{questions.length}
                            </div>

                            <div className="text-2xl text-cyan-600 font-semibold">
                                Percentage: {percentage}%
                            </div>

                            <div className="text-xl">
                                Correct Answers: {score} out of {questions.length}
                            </div>

                            <button
                                onClick={() => {
                                    setSubmitted(false)
                                    setAnswers({})
                                }}
                                className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl"
                            >
                                Retake Test
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center">
                            Answer Review
                        </h2>

                        {questions.map((question) => {
                            const isCorrect =
                                answers[question.id] === question.answer

                            return (
                                <div
                                    key={question.id}
                                    className={`p-5 rounded-xl border-2 ${isCorrect
                                            ? "border-green-500 bg-green-50"
                                            : "border-red-500 bg-red-50"
                                        }`}
                                >
                                    <h3 className="font-semibold mb-3 whitespace-pre-line">
                                        {question.id}. {question.question}
                                    </h3>

                                    <p>
                                        <strong>Your Answer:</strong>{" "}
                                        {question.options[answers[question.id]]}
                                    </p>

                                    <p>
                                        <strong>Correct Answer:</strong>{" "}
                                        {question.options[question.answer]}
                                    </p>

                                    <p
                                        className={`font-bold mt-2 ${isCorrect
                                                ? "text-green-600"
                                                : "text-red-600"
                                            }`}
                                    >
                                        {isCorrect ? "✅ Correct" : "❌ Wrong"}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4">
            <div className="max-w-4xl mx-auto">

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h1 className="text-4xl font-bold text-center text-cyan-700">
                        Psychology 2.1 - TET (2A) CDP
                    </h1>

                    <p className="text-center text-gray-600 mt-4">
                        TET (2A) Psychology Practice Test
                    </p>

                    <p className="text-center text-gray-500 mt-2">
                        Child Development &amp; Pedagogy
                    </p>

                    <p className="text-center text-gray-500 mt-2">
                        Total Questions: {questions.length}
                    </p>
                </div>

                {questions.map((question) => (
                    <div
                        key={question.id}
                        className="bg-white rounded-2xl shadow-md p-6 mb-6"
                    >
                        <h2 className="font-semibold text-lg mb-4 whitespace-pre-line">
                            {question.id}. {question.question}
                        </h2>

                        <div className="space-y-3">
                            {question.options.map((option, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-3 border rounded-xl p-3 hover:bg-cyan-50 cursor-pointer"
                                >
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        checked={
                                            answers[question.id] === index
                                        }
                                        onChange={() =>
                                            handleAnswer(
                                                question.id,
                                                index
                                            )
                                        }
                                    />

                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="text-center">
                    <button
                        disabled={!allAnswered}
                        onClick={() => setSubmitted(true)}
                        className={`px-8 py-4 rounded-xl text-white font-semibold text-lg ${allAnswered
                                ? "bg-cyan-600 hover:bg-cyan-700"
                                : "bg-gray-400 cursor-not-allowed"
                            }`}
                    >
                        Submit Test
                    </button>

                    {!allAnswered && (
                        <p className="text-red-500 mt-3">
                            Please answer all {questions.length} questions before submitting.
                        </p>
                    )}
                </div>

            </div>
        </div>
    )
}
