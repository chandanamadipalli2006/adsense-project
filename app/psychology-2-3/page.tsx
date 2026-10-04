"use client"

import { useState } from "react"

const questions = [
    {
        "id": 121,
        "question": "The gland that is located in the human brain.\nमानव िे मस्स्िष्ि में स्स्थि ग्रंधथ",
        "options": [
            "Pituitary Gland — पीयूष ग्रंधथ",
            "Thyroid Gland — थायराइड ग्रंधथ",
            "Adrenal Gland — अडिनल ग्रंधथ",
            "Testis — वषृ ण"
        ],
        "answer": 0
    },
    {
        "id": 122,
        "question": "Thyroxin deficiency causes\nथैरास्क्सन स्राव िी िमी से उत्पन्न पररणाम -",
        "options": [
            "Dwarfism — िौनापन",
            "Tetani — टे टानी",
            "Myxoedema — समक्सोडडमा",
            "Gigantism — दीघनिायापन"
        ],
        "answer": 2
    },
    {
        "id": 123,
        "question": "This is required to produce Thyroxin\nथैरास्क्सन उत्पवि िे सलए यह आवश्त्यि है -",
        "options": [
            "Sodium — सोडडयम",
            "Zinc — स्जंि",
            "Iodine — अयोडडन",
            "Oxygen — आस्क्सजन"
        ],
        "answer": 2
    },
    {
        "id": 124,
        "question": "It mostly influences the emotions of an individual\nयह एि व्यस्क्ि िे संवेगों पर अधिि प्रभाव ददखािा है",
        "options": [
            "Testis — वषृ ण",
            "Adrenal Gland — अडिनल ग्लान्ड",
            "Thyroid Gland — थैराइड ग्लान्ड",
            "Para thyroid Gland — पैरा थैराइड ग्लान्ड"
        ],
        "answer": 1
    },
    {
        "id": 125,
        "question": "The gland that produces ‘Fight or Flight’ hormone.\n“फैट या फ्लैट” (संघषन या पलायन) हारमोन िी उत्पवि िरने वाली ग्रंधथ",
        "options": [
            "Testis — वषृ ण",
            "Female Gonads — स्त्री िीज िोश",
            "Para thyroid Gland — पैरा थाइराँइड ग्रंधथ",
            "Adrenal Gland — अडिनल ग्रंधथ"
        ],
        "answer": 3
    },
    {
        "id": 126,
        "question": "Socio cultural factors related to Pre-Natal environment\nयह सामास्जि सांस्िृनिि िारिों से संिंधिि जनन पूवन पररवेश है -",
        "options": [
            "Neighbour — अडोस - पेडोस",
            "School — पाठशालाएँ",
            "Peer Group — समवयस्ि",
            "Food habits of Mother — मािा िे आहार िी आदिें"
        ],
        "answer": 3
    },
    {
        "id": 127,
        "question": "According to Spranger’s classification, the value that ‘Mother Theresa’ possess is\nस्प्रेंगर िे वगीिरण िे अनुसार ‘मदर टे रेसा’ िे मूल्य -",
        "options": [
            "Social Values — सामास्जि मूल्य",
            "Political Values — राजनैनिि मूल्य",
            "Economic Values — आधथनि मल् ू य",
            "Aesthetic Values — सौंदयानरािना मल् ू य"
        ],
        "answer": 0
    },
    {
        "id": 128,
        "question": "According to Spranger’s classification, the values that ‘Film Director Bapu’ possess\nस्प्रेंगर िे वगीिरण िे अनुसार कफल्म ननदे शि ‘ िापू ’ िे मूल्य -",
        "options": [
            "Political Values — राजनैनिि मूल्य",
            "Economic Values — आधथनि मूल्य",
            "Social Values — सामास्जि मल् ू य",
            "Aesthetic Values — सौंदयन आरािना मल् ू य"
        ],
        "answer": 3
    },
    {
        "id": 129,
        "question": "According to Spranger’s classification, the values that ‘Smt. Prathiba Patil’ possess\nस्प्रेंगर िे वगीिरण िे अनुसार ‘श्रीमनि प्रनिभा पादटल’ िे मूल्य -",
        "options": [
            "Political Values — राजनैनिि मूल्य",
            "Theoretical Values — सैद्ांनिि मूल्य",
            "Economic Values — आधथनि मूल्य",
            "Religious Values — िासमनि मल् ू य"
        ],
        "answer": 0
    },
    {
        "id": 130,
        "question": "According to Spranger’s classification, the values that ‘M.S. Swaminathan’ possess\nस्प्रेंगर िे वगीिरण िे अनुसार ‘यम. यस. स्वासमनाथन’ िे मूल्य -",
        "options": [
            "Theoretical Values — सैद्ांनिि मल् ू य",
            "Religious Values — िासमनि मल् ू य",
            "Economic Values — आधथनि मूल्य",
            "Political Values — राजनैनिि मूल्य"
        ],
        "answer": 0
    },
    {
        "id": 131,
        "question": "According to R.B. Cattell’s theory, the number of source traits in personality are\nआर.िी. िादटल िे ससद्िांि िे अनुसार व्यस्क्ित्व िे मूल लक्शानांशों िी संख्या -",
        "options": [
            "11",
            "12",
            "14",
            "16"
        ],
        "answer": 3
    },
    {
        "id": 132,
        "question": "According to R. B. Cattell’s theory, the number of primary traits in personality are\nR.B.िादटल िे ससद्ांि िे अनुसार व्यडित्व में पाये जानेवाले मूल लक्षणांशों िी संख्या -",
        "options": [
            "165",
            "170",
            "171",
            "175"
        ],
        "answer": 2
    },
    {
        "id": 133,
        "question": "The psychologist who belongs to trait theory is\nलक्षणांश ससद्ांि िे मनोवैज्ञाननि हैं -",
        "options": [
            "Kretschmer — िेश्त्मर",
            "Sheldon — शोल्डन",
            "R.B. Cattell — R.B.िादटल",
            "Jung — जंग"
        ],
        "answer": 2
    },
    {
        "id": 134,
        "question": "Person with Economic Values\nआधथनि मूल्यों वाला व्यस्क्ि -",
        "options": [
            "Mukesh Ambani — मुिेश अंिानी",
            "Mahatma Gandhi — महात्मा गाँिी",
            "Ravi Varma — रवव वमान",
            "Mother Theresa — मदर टे रेसा"
        ],
        "answer": 0
    },
    {
        "id": 135,
        "question": "The classification of Introverts and Extroverts belongs to\nअंिमुखन ी , िदहमुणन खयों िा वगीिरण इन से संिंधिि है -",
        "options": [
            "Jung — जंग",
            "Kretschmer — िेश्त्मर",
            "R.B. Cattell — R.B.िादटल",
            "Hippocrates — दहपोिोदटस"
        ],
        "answer": 0
    },
    {
        "id": 136,
        "question": "According to Freud’s Structure of Personality, “Smoking is injurious to Health” is suggested by this system\nफ्रायड िे व्यस्क्ित्व ननमानण ससद्िांि िे अनुसार ये ‘िूम्रपान िरना स्वास््य िे सलए हाननिार है।’ – यह किससे सूधचि किया जाएगा ?",
        "options": [
            "Id — इड",
            "Ego — अहम ्",
            "Super Ego — सूपर अहम ्",
            "Libido — सलबिडो"
        ],
        "answer": 1
    },
    {
        "id": 137,
        "question": "According to Freud’s Dynamics of Personality, we are aware of the present moment in this level\nफ्रायड िे ससद्िांि िे अनुसार इस दशा में हम प्रस्िुि स्स्थनि िो जानिे हैं",
        "options": [
            "Conscious Stage — चेिनावस्था",
            "Sub Conscious Stage — उप चेिनावस्था",
            "Unconscious Stage — अचेनावस्था",
            "Super Ego — सूपर ईगो (अद्यहम ्)"
        ],
        "answer": 0
    },
    {
        "id": 138,
        "question": "This works on Reality Principle\nयह वास्िववि सूर पर िाम िरिा है -",
        "options": [
            "Id — अचेिन",
            "Ego — अहम ्",
            "Super Ego — सूपर ईगो (अध्यहम ्)",
            "Libido — सलबिड़ो"
        ],
        "answer": 1
    },
    {
        "id": 139,
        "question": "According to Freud’s Dynamics of Personality, this stage contains memories and stored knowledge.\nफ्रानयड िे व्यस्क्ित्व गनिशील ससद्िांि िे अनुसार संधचि ज्ञान वाली दशा",
        "options": [
            "Conscious Stage — चेिनावस्था",
            "Sub Conscious Stage — उपचेिनावस्था",
            "Unconscious Stage — अचेिनावस्था",
            "Super Ego — सूपर ईगो (अद्यहम ्)"
        ],
        "answer": 1
    },
    {
        "id": 140,
        "question": "According to Freud’s Theory, memories cannot be recalled by an individual in\nफ्रायर्ड िे ससद्िांि िे अनस ु ार व्यस्क्ि इस दशा में अपनी स्मनृ ियों िा पुनः स्मरण नही िर पाएगा -",
        "options": [
            "Conscious Stage — चेिनावस्था",
            "Sub Conscious Stage — उप चेिनावस्था",
            "Unconscious Stage — अचेिनावस्था",
            "Super Ego — सूरप इगो (अद्यहम ्)"
        ],
        "answer": 2
    },
    {
        "id": 141,
        "question": "According to Freud’s Psychosexual Theory, the stage in which a child’s age is between 2 - 3 years\nफ्रायड िे मनोलैंधगि ससद्िांि िे अनुसार इस दशा में िच्चों िी आयु 2 – 3 वषों िे िीच होिी है -",
        "options": [
            "Oral Stage — मौणखि अवस्था",
            "Anal Stage — आसन अवस्था",
            "Phallic Stage — लैंधगि पूवानवस्था",
            "Latency Stage — सप्ु ि अवस्था"
        ],
        "answer": 1
    },
    {
        "id": 142,
        "question": "According to Freud’s Psychosexual Theory, the stage in which a child’s age is in between 4 - 6 years\nफ्रायर्ड िे मनोलैंधगि (मनोववश्त्लेषणात्मि) ससद्िांि िे अनुसार इस दशा में िच्चों िी आयू 4 – 6 वषों िे िीच",
        "options": [
            "Oral Stage — मौणखि दशा",
            "Anal Stage — गुदीय दशा (आसन दशा)",
            "Phallic Stage — लैंधगि पूवानवस्था",
            "Latency Stage — सप्ु ि अवस्था"
        ],
        "answer": 2
    },
    {
        "id": 143,
        "question": "According to Freud’s Psychosexual Theory, the stage in which a child’s age is in between birth to one year is\nफ्रायड िे ससद्िांि िे अनुसार यह दशा सशशुओं में जन्म से एि वषन िे िीच होिी है -",
        "options": [
            "Oral Stage — मौणखि दशा",
            "Anal Stage — आसन दशा",
            "Phallic Stage — लैंधगि पूवानवस्था",
            "Latency Stage — सप्ु ि अवस्था"
        ],
        "answer": 0
    },
    {
        "id": 144,
        "question": "According to Freud, the number of Psychosexual Developmental stages\nफ्रायड िे अनुसार मनो लैंधगि वविास िी दशाएँ -",
        "options": [
            "4",
            "6",
            "5",
            "10"
        ],
        "answer": 2
    },
    {
        "id": 145,
        "question": "It is a tool to assess Social Relationship\nयह सामास्जि संिंिो िा अनम ु ान लगानेवाला सािन है -",
        "options": [
            "M.M.P.I — एम. यम. पी. ए",
            "T.A.T — टी.ए.टी",
            "C.A.T — सी.ए.टी",
            "Sociometry — समाजसमनि"
        ],
        "answer": 3
    },
    {
        "id": 146,
        "question": "The maximum number of cards used for Male in TAT is\nTAT परीक्षा में िेवल पुरुषों िो ही उपयोग िरने वाले अत्यधिि िडो िी संख्या",
        "options": [
            "50 + 1",
            "20 + 1",
            "30 + 1",
            "40 + 1"
        ],
        "answer": 1
    },
    {
        "id": 147,
        "question": "This is not a Projective Test\nयह प्रक्षेपण – परीक्षण नहीं है ।",
        "options": [
            "IBT",
            "TAT",
            "CAT",
            "Case Study — िेस स्टडी"
        ],
        "answer": 3
    },
    {
        "id": 148,
        "question": "This is a projective individual test\nयह वैयस्क्िि प्रक्षेपण परीक्षा है -",
        "options": [
            "Interview — साक्षात्िार",
            "Case Study — िेस स्टडी",
            "Biography — जीवन इनिहास",
            "IBT — स्याही िब्िे परीक्षा"
        ],
        "answer": 3
    },
    {
        "id": 149,
        "question": "The number of Red, Black coloured cards in Ink Blot Test\nस्याही िब्िे परीक्षा मे िाले, लाल िडो िी संख्या -",
        "options": [
            "15",
            "10",
            "3",
            "2"
        ],
        "answer": 3
    },
    {
        "id": 150,
        "question": "The founder of Mental Health Movement is\nमानससि स्वास््य आंदोलन िे प्रविनि -",
        "options": [
            "Freud — फ्रायड",
            "Clifford Beers — किलफ़ोडन िीस ्न",
            "Erikson — एररिसन",
            "J.L. Moreno — जे. यल. मेररनो"
        ],
        "answer": 1
    },
    {
        "id": 151,
        "question": "In Sociometry, a person who is opposed by many is\nसमाजसमनि में आधिि लोगों से निरस्िृि व्यस्क्ि यह है",
        "options": [
            "Isolate — एिािी",
            "Star — िलािार",
            "Hero — िथानायि",
            "Leader — नेिा"
        ],
        "answer": 0
    },
    {
        "id": 152,
        "question": "This Personality test was developed for the children of age group 3 to 10 years\nयह व्यस्क्ित्व परीक्षा 3 से 10 वषन िे िीच िच्चों िे सलए वविससि िी गयी है -",
        "options": [
            "T.A.T",
            "C.A.T",
            "I.B.T",
            "W.A.T"
        ],
        "answer": 1
    },
    {
        "id": 153,
        "question": "In Sociometry, a person who is liked by the most people is\nसमाजसमनि में अधिि लोगो से पसंद किया जानेवाला व्यस्क्ि -",
        "options": [
            "Isolate — एिािी",
            "Star — िलािार",
            "God — भगवान",
            "Object — वस्िु"
        ],
        "answer": 1
    },
    {
        "id": 154,
        "question": "Learning Multiplication tables helps in solving Arithmetic problems. This is an example of\nसीखे गए ‘पहाडे’ अंिगणणि िी समास्याओं िो सुलझाने में उपयोगी होना” – ये किसिा उदाहरण है ?",
        "options": [
            "Positive Transfer — अनुिूल स्थानांिरण",
            "Negative Transfer — प्रनििूल स्थानांिरण",
            "Zero Transfer — शून्य स्थानांिरण",
            "Bilateral Transfer — द्ववपाश्त्वन स्थानांिरण"
        ],
        "answer": 0
    },
    {
        "id": 155,
        "question": "A temporary period where there is no improvement in learning is known as\nअधिगम में बिना किसी प्रिार िे प्रगनि िी ित्िासलि अवस्था िो क्या िहिे है ?",
        "options": [
            "Final Stage — अंनिम अवस्था",
            "Stage of fluctuations — उिार – चढाव िी अवस्था",
            "Plateau Stage — पाठार िी अवस्था",
            "Initial Spurt — आरं सभि स्पूनिन अवस्था"
        ],
        "answer": 2
    },
    {
        "id": 156,
        "question": "Plateau Stage in Learning may be caused due to\nअधिगम में पठार उत्पन्न होने िा िारण",
        "options": [
            "Motivation — प्रेरणा",
            "Practice — अभ्यास",
            "Interest — रुधच",
            "Fatigue — थिान"
        ],
        "answer": 3
    },
    {
        "id": 157,
        "question": "The correct sequence of stages in learning curve\nअधिगम वि रे खा िी सही अवस्थाओं िा िम पहचाननए\nA) Stage of Fluctuations — उिार – चढाव िी अवस्था\nB) Initial Spurt — आरं सभि स्पूनिन अवस्था\nC) Plateau Stage — पठार अवस्था",
        "options": [
            "B, A, C",
            "A, B, C",
            "C, A, B",
            "B, C, A"
        ],
        "answer": 0
    },
    {
        "id": 158,
        "question": "A learning curve mainly represents\nएि अधिगम वि रे खा मुख्य रूप से इसे सूधचि िरिी है",
        "options": [
            "Intelligence — िद्ु धि",
            "Change in performance with practice — अभ्यास से उपलस्ब्ि में पररविन",
            "Personality — व्यस्क्ित्व",
            "Motivation — प्रेरणा"
        ],
        "answer": 1
    },
    {
        "id": 159,
        "question": "Expand “IEP”\n“IEP” िा ववस्िारण िीस्जए",
        "options": [
            "Individual Education Policy",
            "Individualized Education Programme",
            "Indian Education Programme",
            "Inclusive Entertainment programme"
        ],
        "answer": 1
    },
    {
        "id": 160,
        "question": "A child misunderstands + and × symbols while doing Mathematics. The problem faced by him is\nएि िच्चा गणणि सीखिे समय + और × धचह्नों िो गलि समझ रहा है। वह यहाँ किस प्रिार िी समस्था िा सामना िर रहा है?",
        "options": [
            "Dysphasia — डडसफेसशया",
            "Dyslexia — डडसलेस्क्सया",
            "Dyscalculia — डडसक्यालस्ु क्लया",
            "Dysgraphia — डडसग्राकफया"
        ],
        "answer": 2
    },
    {
        "id": 161,
        "question": "Positive transfer occurs when previous learning\nवपछले अधिगम से इस प्रिार िा अनुिूल स्थानांिरण होिा है",
        "options": [
            "Stops new learning — नवीन अधिगम िो रोिना",
            "No Effect — किसी भी प्रिार िा प्रभाव न होना",
            "Helps new learning — नवीन अधिगम में सहायि िनना",
            "Disturbs new learning — नवीन अधिगम मे रुिावटे उत्पन्न िरना"
        ],
        "answer": 2
    },
    {
        "id": 162,
        "question": "Transfer of Learning in playing skill of Veena and becoming an athlete\nणखलाडी िनने और वीणा िजाने में िुशलिा ददखाने िी प्रनिभा िे िीच इस प्रिार िा अधिगम स्थानांिर होिा है",
        "options": [
            "Negative Transfer — प्रनििूल स्थानांिरण",
            "Positive Transfer — अनुिूल स्थानांिरण",
            "Zero Transfer — शून्य स्थानांिरण",
            "Bilateral Transfer — द्ववपाश्त्वन स्थानांिरण"
        ],
        "answer": 2
    },
    {
        "id": 163,
        "question": "This is not a learning theory of E.L. Thorndike\nयह थाननडाइि िा अधिगम ससद्िांि नहीं है -",
        "options": [
            "Trial and Error Theory — प्रयास व रदु ट िा ससद्िांि",
            "Observation Learning — ननरीक्षण अधिगम",
            "Connectionism Theory — संयोजन िा ससद्िांि",
            "Bond Theory — िंिन ससद्िांि"
        ],
        "answer": 1
    },
    {
        "id": 164,
        "question": "The book “Animal Intelligence” is written by\n“Animal Intelligence” ग्रंथ िे लेखि",
        "options": [
            "Skinner — स्स्िनर",
            "Ivan Pavlov — इवान पावलव",
            "Thorndike — थाननडाइि",
            "Bruner — ब्रूनर"
        ],
        "answer": 2
    },
    {
        "id": 165,
        "question": "“If a student is ready to learn, the process becomes quick and effective.” The law is\nइस ननयम िे अनुसार छार सीखने िे सलए िैयार हो िो वह प्रकिया िीव्र और प्रभावपूणन होिी है।",
        "options": [
            "Law of Readiness — संससद्ििा िा ननयम",
            "Law of Effect — प्रभाव िा ननयम",
            "Law of Exercise — अभ्यास िा ननयम",
            "Law of Teaching — सशक्षण िा ननयम"
        ],
        "answer": 0
    },
    {
        "id": 166,
        "question": "“The satisfying experiences to strengthen the bond between stimulus and response.” This reflects in this law\nसंिोषप्रद अनुभवों सें उद्दीपन – प्रनिकियाओं िे िीच संिंि मजिूि होिा है । ये इस ननयम िो प्रनिफसलि िरिा है -",
        "options": [
            "Law of Readiness — संससद्ििा ननयम",
            "Law of Effect — प्रभाव िा ननयम",
            "Law of Exercise — अभ्यास िा ननयम",
            "Law of Teaching — सशक्षण िा ननयम"
        ],
        "answer": 1
    },
    {
        "id": 167,
        "question": "“Practice makes man perfect” is an example of this law.\nअभ्यास मनुष्य िो श्रेष्ठ िनािा है । ये किस ननयम िा उदाहरण है ?",
        "options": [
            "Law of Readiness — संससद्ििा िा ननयम",
            "Law of Effect — प्रभाव िा ननयम",
            "Law of Exercise — अभ्यास िा ननयम",
            "Law of Observation — अवलोिन िा ननयम"
        ],
        "answer": 2
    },
    {
        "id": 168,
        "question": "Classical conditioning theory is also known as\nशास्रीय अनुिंिन ससद्िांि िो इस नाम से भी जानिे हैं -",
        "options": [
            "S - type",
            "R - type",
            "C - type",
            "P – type"
        ],
        "answer": 0
    },
    {
        "id": 169,
        "question": "Ivan Pavlov conducted experiments on\nइवान पावलोव ने इस पर अपने प्रयोग किया -",
        "options": [
            "Dog — िुिा",
            "Rat — चूहा",
            "Cat — बिल्ली",
            "Chimpanzee — धचंपांजी"
        ],
        "answer": 0
    },
    {
        "id": 170,
        "question": "This is not a Law of Thorndike’s Trial and Error Theory\nथाननडाइि िे प्रयास व रदु टससद्िांि में ये ननयम नहीं है",
        "options": [
            "Law of Generalization — सामान्यीिरण िा ननयम",
            "Law of Readiness — संससद्ििा िा ननयम",
            "Law of Effect — प्रभाव िा ननयम",
            "Law of Exercise — अभ्यास िा ननयम"
        ],
        "answer": 0
    },
    {
        "id": 171,
        "question": "This is not a key feature of Trial and Error learning\nये प्रयास व रुदट ससद्िांि िा मुख्य लक्षण नहीं है",
        "options": [
            "Learning is Gradual — अधिगम िीरे – िीरे होिा है",
            "Motivation is essential — प्रेरणा अनि आवश्त्यि है",
            "Elimination of Incorrect Responses — जो प्रनिकियाएँ उपयुक्ि नहीं हैं उनिा ननरािरण",
            "Learning occurs through imitation — अनुिरण िे माध्यम से अधिगम संपन्न होिा है।"
        ],
        "answer": 3
    },
    {
        "id": 172,
        "question": "“Theory of Hierarchy of Needs” was developed by\nआवश्त्यििा पदानुिम ससद्िांि िो वविससि करने वाला -",
        "options": [
            "Thorndike — थाननडाइि",
            "Watson — वाट्सन",
            "Maslow — मास्लो",
            "Pavlov — पावलोव"
        ],
        "answer": 2
    },
    {
        "id": 173,
        "question": "Identify the correct pair\nसही जोडो पहचाननए\nA: Maslow - Theory of Hierarchy of Needs\nB: Carl Rogers - Humanistic Approach Theory",
        "options": [
            "Only A is Correct — िेवल A सही है",
            "Only B is Correct — िेवल B सही है",
            "Both A & B are Correct — A और B दोनों सही हैं",
            "Both A & B are incorrect — A और B दोनों गलि हैं"
        ],
        "answer": 2
    },
    {
        "id": 174,
        "question": "This is a physiological need according to Maslow\nमास्लो िे अनुसार यह शारीररि आवश्त्यििा है",
        "options": [
            "Music — संगीि",
            "Food — भोजन (आहार)",
            "Identity — पहचान",
            "Love — प्रेम"
        ],
        "answer": 1
    },
    {
        "id": 175,
        "question": "According to Maslow, House is a\nमास्लो िे अनुसार घर एि",
        "options": [
            "Physiological Need — शारीररि आवश्त्यििा",
            "Safety Need — सुरक्षा आवश्त्यििा",
            "Esteem Need — सम्मानजनि आवश्त्यििा",
            "Love and Belonging Need — प्रेम - संिंिी आवश्त्यििा"
        ],
        "answer": 1
    },
    {
        "id": 176,
        "question": "According to Maslow, Affection is a\nमास्लो िे अनुसार ‘वात्सल्य’",
        "options": [
            "Physiological Need — शारीररि आवश्त्यििा",
            "Safety Need — सुरक्षा आवश्त्यििा",
            "Love and Belonging — प्रेम संिंिी आवश्त्यििा",
            "Esteem Need — सम्मानजनि आवश्त्यििा"
        ],
        "answer": 2
    },
    {
        "id": 177,
        "question": "Incorrect pair related to Maslow’s Hierarchy of Needs\nमास्लो िे आवश्त्यििा पदानुिम से संिंधिि ये जोडी सही नहीं है -",
        "options": [
            "Water — Physiological Need / जल — शारीररि आवश्त्यििा",
            "Home — Safety Need / घर — सुरक्षा आवश्त्यििा",
            "Love — Self Actualization Need / प्रेम — आत्म ससद्धि आवश्त्यििा",
            "Identity — Esteem Need / पहचान — सम्मानजनि आवश्त्यििा"
        ],
        "answer": 2
    },
    {
        "id": 178,
        "question": "This is not an advantage of Experiential learning\nयह अनुभवपूवनि अधिगम िा प्रयोजन नहीं है",
        "options": [
            "Encourages child centered learning — छार िेंिि अधिगम िो प्रोत्सादहि िरिा है",
            "Students can learn life skills — छार जीवन िौशलों िो सीख सििे हैं",
            "Useful to improve creativity — सृजनात्मििा िो पढाने िे सलए उपयोगी",
            "Students are not happy with this learning — इस अधिगम से छार आनंददि नहीं होिे हैं"
        ],
        "answer": 3
    },
    {
        "id": 179,
        "question": "Maslow’s theory is related to\nमोस्लो िा ससद्िांि इस से संिंधिि है",
        "options": [
            "Conditioning — अनुिंिन",
            "Needs — आवश्त्यििाएँ",
            "Intelligence — िुद्धि",
            "Attention — अविान"
        ],
        "answer": 1
    },
    {
        "id": 180,
        "question": "This is a lower order need according to Maslow\nमास्लो िे अनुसार यह ननचले श्रेणी िी आवश्त्यििा",
        "options": [
            "Esteem Needs — सम्मानजनि आवश्त्यििाएँ",
            "Self Actualization Needs — आत्म ससद्धि आवश्त्यििाएँ",
            "Love and Belonging Needs — प्रेम संिंिी आवश्त्यििाएँ",
            "Physiological Needs — शारीररि आवश्त्यििाएँ"
        ],
        "answer": 3
    }
]

export default function Psychology23() {
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
                                    className={`bg-white rounded-2xl shadow-md p-6 border-2 ${isCorrect
                                        ? "border-green-500 bg-green-50"
                                        : "border-red-500 bg-red-50"
                                        }`}
                                >
                                    <h3 className="font-semibold mb-3">
                                        {question.id}. {question.question}
                                    </h3>

                                    <p>
                                        <strong>Your Answer:</strong>
                                        {question.options[answers[question.id]]}
                                    </p>

                                    <p>
                                        <strong>Correct Answer:</strong>
                                        {question.options[question.answer]}
                                    </p>

                                    <p className={`font-bold mt-2 ${isCorrect
                                            ? "text-green-600"
                                            : "text-red-600"
                                        }`}>
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
                        Psychology 2.3
                    </h1>

                    <p className="text-center text-gray-600 mt-4">
                        TET (2A) Psychology Practice Test
                    </p>

                    <p className="text-center text-gray-500 mt-2">
                        Questions 121–180
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
                                        checked={answers[question.id] === index}
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
                        className="bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-400 text-white font-semibold px-8 py-3 rounded-xl"
                    >
                        Submit Test
                    </button>

                    {!allAnswered && (
                        <p className="text-sm text-gray-500 mt-3">
                            Please answer all questions before submitting.
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
