"use client"

import { useState } from "react"

const questions = [
    {
        "id": 181,
        "question": "According to Bruner, this type of motivation has more influence on the learner\nब्रूनर के अनुसार इस प्रकार की प्रेरणा छात्र पर अधिक प्रभाव दिखाती है",
        "options": [
            "Extrinsic Motivation बाहरी प्रेरणा",
            "Intrinsic Motivation आंतरिक प्रेरणा",
            "Forceful Motivation बलपूर्वक प्रेरणा",
            "Motivation has no role प्रेरणा का कोई पार नहीं है"
        ],
        "answer": 1
    },
    {
        "id": 182,
        "question": "According to Bruner, which statement is correct?\nब्रूनर के अनुसार कौन-सा कथन सही है?",
        "options": [
            "Interest and curiosity of the learner are major learning factors\nछात्र में रुचि और जिज्ञासा अधिगम के प्रधान अंश हैं।",
            "Self learning should not be given more importance\nस्व-अधिगम को अधिक महत्व नहीं दिया गया",
            "Learning is Teacher centred\nअधिगम शिक्षक केन्द्रित है",
            "The learning content is important rather than method of teaching\nअधिगम पद्धति से अधिगम की विषयवस्तु ही महत्वपूर्ण है"
        ],
        "answer": 0
    },
    {
        "id": 183,
        "question": "Bruner’s Theory is also known as\nब्रूनर सिद्धांत को इस नाम से भी जानते हैं",
        "options": [
            "Classical Conditioning Theory शास्त्रीय अनुबंधन सिद्धांत",
            "Operant Conditioning Theory क्रिया-प्रसूत अनुबंधन सिद्धांत",
            "Trial and Error Theory प्रयास व त्रुटि का सिद्धांत",
            "Discovery Learning Theory खोजपूर्ण अधिगम सिद्धांत"
        ],
        "answer": 3
    },
    {
        "id": 184,
        "question": "Bruner’s approach gives importance to\nब्रूनर वाद इसे महत्व देता है",
        "options": [
            "Self Learning स्व-अधिगम",
            "Teacher centred शिक्षक केन्द्रित",
            "Lecture Method भाषण पद्धति",
            "Rote Learning रटंत विधि"
        ],
        "answer": 0
    },
    {
        "id": 185,
        "question": "The teaching content that presents subject matter in a meaningful and organized form has\nशिक्षण विषय जो विषयवस्तु को अर्थपूर्ण और व्यवस्थित रूप में प्रस्तुत करती है, उसमें यह होती है",
        "options": [
            "Content Validity विषय वैधता",
            "Content Reliability विषय विश्वसनीयता",
            "Content Construction विषय निर्माण",
            "Content Test विषय परीक्षा"
        ],
        "answer": 2
    },
    {
        "id": 186,
        "question": "“Any concept can be effectively taught to any one at any stage,” is said by\n“किसी भी विषय को, किसी व्यक्ति को भी, किसी भी विकास की दशा में सफल रूप से शिक्षण प्रदान कर सकते हैं” किसका कथन है?",
        "options": [
            "Thorndike थार्नडाइक",
            "Ivan Pavlov इवान पावलोव",
            "Skinner स्किनर",
            "Jerome Bruner जेरोम ब्रूनर"
        ],
        "answer": 3
    },
    {
        "id": 187,
        "question": "According to Bruner’s Theory of Instruction, the correct order of teaching is\nब्रूनर ‘शिक्षण सिद्धांत’ के अनुसार सही शिक्षण क्रम को पहचानिए\nA) Enactive Method क्रियात्मक पद्धति\nB) Iconic Method चित्र प्रतिमा पद्धति\nC) Symbolic Method प्रतीकात्मक पद्धति",
        "options": [
            "A, B, C",
            "B, C, A",
            "C, B, A",
            "B, A, C"
        ],
        "answer": 0
    },
    {
        "id": 188,
        "question": "In Bruner’s Theory of Instruction, the teacher mainly acts as\nब्रूनर के शिक्षण सिद्धांत में शिक्षक को मुख्य रूप से इस प्रकार का व्यवहार करना चाहिए",
        "options": [
            "Dictator तानाशाह",
            "Monitor पर्यवेक्षक",
            "Lecturer भाषणदाता / प्रवक्ता",
            "Examiner परीक्षक"
        ],
        "answer": 1
    },
    {
        "id": 189,
        "question": "According to Bruner’s Theory, learning through diagrams and pictures represents\nब्रूनर सिद्धांत के अनुसार चित्र और रेखाचित्रों के द्वारा अधिगम",
        "options": [
            "Enactive Method क्रियात्मक पद्धति",
            "Iconic Method चित्रप्रतिमा पद्धति",
            "Symbolic Method प्रतीकात्मक पद्धति",
            "Verbal Method शाब्दिक पद्धति"
        ],
        "answer": 1
    },
    {
        "id": 190,
        "question": "According to Vygotsky, the private speech at childhood transforms to this speech as they grow up\nवाइगोत्स्की के अनुसार बाल्यावस्था में वैयक्तिक संभाषण, उसके वयस्क होने के बाद इस भाषा के रूप में परिवर्तित होता है",
        "options": [
            "Outer Speech बाह्य संभाषण",
            "Inner Speech आंतरिक संभाषण",
            "Indirect Speech परोक्ष संभाषण",
            "Direct Speech प्रत्यक्ष संभाषण"
        ],
        "answer": 1
    },
    {
        "id": 191,
        "question": "One of the following is not related to Gestaltism.\nनिम्न में से यह गेस्टाल्टवादी नहीं है",
        "options": [
            "Verthimar वर्थाइमर",
            "Kofka कोफ्का",
            "Kohler कोहलर",
            "Skinner स्किनर"
        ],
        "answer": 3
    },
    {
        "id": 192,
        "question": "“The Mentality of Apes” book was written by\n“The Mentality of Apes” ग्रंथ के लेखक",
        "options": [
            "Thorndike थार्नडाइक",
            "Kohler कोहलर",
            "Vygotsky वाइगोत्स्की",
            "Skinner स्किनर"
        ],
        "answer": 1
    },
    {
        "id": 193,
        "question": "Kohler conducted experiments on this animal\nकोहलर ने इस पशु पर प्रयोग किए",
        "options": [
            "Dog कुत्ता",
            "Cat बिल्ली",
            "Elephant हाथी",
            "Chimpanzee चिंपांजी"
        ],
        "answer": 3
    },
    {
        "id": 194,
        "question": "Gestalt means\nगेस्टाल्ट का अर्थ",
        "options": [
            "Configuration समग्राकृति",
            "Intelligence बुद्धि",
            "Reinforcement पुनर्बलन",
            "Teaching Machine शिक्षण यंत्र"
        ],
        "answer": 0
    },
    {
        "id": 195,
        "question": "In Kohler’s experiment, the name of chimpanzee is\nकोहलर के प्रयोग में चिंपांजी का नाम",
        "options": [
            "Rani रानी",
            "Sultana सुल्तान",
            "Fathima फातिमा",
            "Jyothi ज्योति"
        ],
        "answer": 1
    },
    {
        "id": 196,
        "question": "In this type of learning, thought comes like a flash\nइस प्रकार के अधिगम में सोच अकस्मात आती है",
        "options": [
            "Classical Conditioning शास्त्रीय अनुबंधन",
            "Operant Conditioning क्रिया-प्रसूत अनुबंधन",
            "Trial and Error प्रयास व त्रुटि",
            "Insightful अंतर्दृष्टि"
        ],
        "answer": 3
    },
    {
        "id": 197,
        "question": "In Insightful learning, chimpanzee observed different aspects in this manner\nअंतर्दृष्टि अधिगम में चिंपांजी विविध अंशों को इस प्रकार अवलोकित करता है",
        "options": [
            "Analysed विश्लेषण",
            "Organised whole संपूर्ण व्यवस्थित रूप में",
            "Synthesised संश्लेषण",
            "Discriminated विभेदीकरण"
        ],
        "answer": 1
    },
    {
        "id": 198,
        "question": "This is not a characteristic of Insightful Learning\nअंतर्दृष्टि अधिगम का लक्षण नहीं है",
        "options": [
            "Observe the problematic situation समस्यात्मक संदर्भ का निरीक्षण करना",
            "Initially, trying Trial and Error method आरंभ में प्रयास व त्रुटि पद्धति का प्रयोग करना",
            "Understanding the learning status as a whole अधिगम स्थिति को पूर्ण रूप से समझ लेना",
            "Learning new task by conditioning अनुबंधन द्वारा नये कार्य सीखना"
        ],
        "answer": 3
    },
    {
        "id": 199,
        "question": "Effective classroom\nयह असरदार कक्षाकक्ष है",
        "options": [
            "Not safe and secure सुरक्षित एवं संरक्षित नहीं है",
            "Support the student’s needs छात्रों की आवश्यकताओं का सहायक",
            "Rigid in the rules नियमों में सख्त",
            "Lack of proper lighting facilities सही प्रकाश की सुविधा की कमी"
        ],
        "answer": 1
    },
    {
        "id": 200,
        "question": "Most desirable outcome of classroom management\nकक्षा-कक्ष के प्रबंधन में मुख्य संप्राप्ति है",
        "options": [
            "Silence of students छात्रों की खामोशी",
            "Fear towards a teacher शिक्षक के प्रति डर",
            "Good learning environment अच्छा अधिगम वातावरण",
            "Punishing the students विद्यार्थियों को दंड देना"
        ],
        "answer": 2
    },
    {
        "id": 201,
        "question": "Classroom management principle of respect and empathy come under this approach\nकक्षा के प्रबंधन के नियमों में से सम्मान और सहानुभूति नियम इस वाद के अंतर्गत आते हैं",
        "options": [
            "Autocratic Approach तानाशाही वाद",
            "Humanistic Approach मानवतावाद",
            "Behaviouristic Approach व्यवहारवाद",
            "Democratic Approach लोकतांत्रिकवाद"
        ],
        "answer": 1
    },
    {
        "id": 202,
        "question": "As a leader, a teacher should not do\nएक नेता होने के नाते अध्यापक ऐसा न करें",
        "options": [
            "Building a confidence in students छात्रों में विश्वास पैदा करना",
            "Manage time effectively समय का सही निर्वाह करना",
            "Encourage conflicts संघर्षों का प्रोत्साहन करना",
            "Motivate students छात्रों को प्रेरणा देना"
        ],
        "answer": 2
    },
    {
        "id": 203,
        "question": "Kurt Lewin’s Model of Action Research does not possess this step\nकर्ट लेविन क्रियात्मक शोध नमूने में यह सोपान नहीं है",
        "options": [
            "Planning प्रणाली की संरचना",
            "Sharing बाँटना",
            "Action चयन",
            "Observation निरीक्षण"
        ],
        "answer": 1
    },
    {
        "id": 204,
        "question": "Leadership that encourages team members in decision making process\nनिर्णय लेते समय समूह के सदस्यों का प्रोत्साहन इस नेतृत्व में होता है",
        "options": [
            "Democratic Leadership लोकतंत्र नेतृत्व",
            "Autocratic Leadership तानाशाही नेतृत्व",
            "Service Leadership सेवा नेतृत्व",
            "Coaching Leadership प्रशिक्षण नेतृत्व"
        ],
        "answer": 0
    },
    {
        "id": 205,
        "question": "Poor strategy for managing classroom time\nकक्षा-कक्ष के समय के सदुपयोग में यह कमजोर व्यूह है",
        "options": [
            "Setting up clear goals स्पष्ट लक्ष्यों को चुनना",
            "Use of Technology तकनीक का उपयोग करना",
            "Unawareness of the learning objectives अधिगम लक्ष्यों के प्रति ग्राह्यता न होना",
            "Prioritisation प्राथमिकता तय होना"
        ],
        "answer": 2
    },
    {
        "id": 206,
        "question": "Most suitable seating arrangement for the teacher-centred lecture\nअध्यापक केन्द्रित भाषण विधि के लिए अनुकूल बैठने की व्यवस्था है",
        "options": [
            "Traditional Rows परंपरागत कतार",
            "Bean bag Seating बीन बैग सीटिंग",
            "Small Groups छोटे समूह",
            "Circular Environment वृत्ताकार आयोजन"
        ],
        "answer": 0
    },
    {
        "id": 207,
        "question": "Delegative leadership is referred to\nयह डेलिगेटिव नेतृत्व है",
        "options": [
            "Democratic Leadership लोकतांत्रिक नेतृत्व",
            "Autocratic Leadership तानाशाही नेतृत्व",
            "Laissez Faire Leadership लेसेज फेयर नेतृत्व",
            "Coaching Leadership शिक्षण नेतृत्व"
        ],
        "answer": 2
    },
    {
        "id": 208,
        "question": "Group guidance is given to\nसामूहिक मार्गदर्शन इन्हें देते हैं",
        "options": [
            "Teachers only केवल शिक्षकों के लिए",
            "Only to one individual केवल एक व्यक्ति के लिए",
            "A group of individuals of same class एक ही वर्ग के समूह के लिए",
            "Persons working in different professions विभिन्न व्यवसायों में काम करने वालों के लिए"
        ],
        "answer": 2
    },
    {
        "id": 209,
        "question": "It is needed for good physical and mental health\nअच्छे शारीरिक और मानसिक स्वास्थ्य के लिए यह आवश्यक है",
        "options": [
            "Should sleep at late night देर रात को सोना",
            "Should do physical exercise regularly रोज व्यायाम करें",
            "Should involve in unnecessary affairs अनावश्यक बातों में हस्तक्षेप करें",
            "Should be jealous about others दूसरों से ईर्ष्या करें"
        ],
        "answer": 1
    },
    {
        "id": 210,
        "question": "Positive factor that influences mental health\nमानसिक स्वास्थ्य को प्रभावित करने वाला सकारात्मक अंश",
        "options": [
            "Good social relations अच्छे सामाजिक संबंध",
            "Maladjustment असमायोजन",
            "Social Isolation सामाजिक अकेलापन",
            "Overstress तीव्र तनाव"
        ],
        "answer": 0
    },
    {
        "id": 211,
        "question": "Balance between persons needs and desires\nएक व्यक्ति की अपनी आवश्यकताओं और इच्छाओं के बीच होने वाली समतुल्यता",
        "options": [
            "Stress तनाव",
            "Adjustment समायोजन",
            "Behaviour व्यवहार",
            "Personality व्यक्तित्व"
        ],
        "answer": 1
    },
    {
        "id": 212,
        "question": "Day dreaming is this type of defence mechanism\nदिवास्वप्न ऐसा सुरक्षा तंत्र है",
        "options": [
            "Regression प्रतिगमन",
            "Compensation परिहार",
            "Projection प्रक्षेपण",
            "Fantasy स्वैर काल्पनिक"
        ],
        "answer": 3
    },
    {
        "id": 213,
        "question": "Personal Guidance is not related to\nव्यक्तिगत मार्गदर्शन इससे संबंधित नहीं है",
        "options": [
            "Adjustment problems समायोजन समस्याएँ",
            "Organisational problems संगठनात्मक समस्याएँ",
            "Family problems पारिवारिक समस्याएँ",
            "Marital problems वैवाहिक समस्याएँ"
        ],
        "answer": 1
    },
    {
        "id": 214,
        "question": "Guidance given to the students to choose a suitable course\nउपयुक्त पाठ्यक्रम चयन करने में छात्रों को दिये गये मार्गदर्शन",
        "options": [
            "Vocational guidance व्यावसायिक मार्गदर्शन",
            "Educational guidance शैक्षिक मार्गदर्शन",
            "Personal guidance व्यक्तिगत मार्गदर्शन",
            "Sports guidance क्रीड़ा मार्गदर्शन"
        ],
        "answer": 1
    },
    {
        "id": 215,
        "question": "Negative aspect of mental health\nमानसिक स्वास्थ्य से संबंधित एक नकारात्मक अंश है",
        "options": [
            "Having stress तनावपूर्ण होना",
            "Having adjustment समायोजन होना",
            "Having good friends अच्छे मित्र होना",
            "Having good sleep अच्छी नींद होना"
        ],
        "answer": 0
    },
    {
        "id": 216,
        "question": "Positive aspect of mental health\nमानसिक स्वास्थ्य के लिए प्रोत्साहक अंश",
        "options": [
            "Overthinking तीव्र चिंतन",
            "Malnutrition संतुलित भोजन का लोप",
            "Adjustment to the surroundings परिवेश समायोजन",
            "Frustration कुंठा"
        ],
        "answer": 2
    },
    {
        "id": 217,
        "question": "According to RTE–2009 Act the following age group children have the right to compulsory education\nRTE–2009 कानून के आधार पर इस आयु वर्ग के छात्रों के लिए अनिवार्य शिक्षा अधिकार है",
        "options": [
            "5–9 years 5–9 आयु",
            "6–14 years 6–14 आयु",
            "4–12 years 4–12 आयु",
            "7–18 years 7–18 आयु"
        ],
        "answer": 1
    },
    {
        "id": 218,
        "question": "Expand APSCF\nAPSCF का विस्तार कीजिए",
        "options": [
            "Andhra Pradesh School Course Framework",
            "Andhra Pradesh School Curriculum Framework",
            "Andhra Pradesh State Children Framework",
            "Andhra Pradesh State Curriculum Framework"
        ],
        "answer": 3
    },
    {
        "id": 219,
        "question": "NCF–FS 2022 was designed by\nNCF–FS 2022 को किसने बनाया",
        "options": [
            "SCERT",
            "DIET",
            "NCERT",
            "SSA"
        ],
        "answer": 2
    },
    {
        "id": 220,
        "question": "‘4’ belongs to this stage in NEP–2020 structure of education 5+3+3+4\nNEP–2020 के अनुसार 5+3+3+4 शैक्षिक निर्माण में ‘4’ इससे संबंधित है",
        "options": [
            "Foundational level फाउंडेशनल स्तर",
            "Secondary level सेकेंडरी स्तर",
            "Preparatory level प्रिपरेटरी स्तर",
            "Middle level मिडिल स्तर"
        ],
        "answer": 1
    },
    {
        "id": 221,
        "question": "RTE Act was implemented from this year\nRTE अधिनियम इस वर्ष से लागू किया गया",
        "options": [
            "2009",
            "2008",
            "2010",
            "2005"
        ],
        "answer": 2
    },
    {
        "id": 222,
        "question": "DIKSHA means\nदीक्षा का अर्थ",
        "options": [
            "Directorate of Information for Knowledge Sharing",
            "District Institute for Knowledge Sharing",
            "Department of Information for Knowledge Sharing",
            "Digital Infrastructure for Knowledge Sharing"
        ],
        "answer": 3
    },
    {
        "id": 223,
        "question": "NEP–2020 gives importance to\nNEP–2020 इसको महत्व देता है",
        "options": [
            "Experiential Learning प्रयोगात्मक अधिगम",
            "Memorization मेमोराइजेशन",
            "Learning to reading textbooks only केवल पाठ्यपुस्तक पठन",
            "Rote learning रटंत विधि"
        ],
        "answer": 0
    },
    {
        "id": 224,
        "question": "Anganwaadi education comes under this frame\nअंगनवाड़ी शिक्षा इसके अंतर्गत आती है",
        "options": [
            "Primary प्राथमिक",
            "E.C.C.E इ. सी. सी. ई",
            "High School उन्नत पाठशाला",
            "Upper Primary प्राथमिकोन्नत"
        ],
        "answer": 1
    },
    {
        "id": 225,
        "question": "Southern regional office of NCTE is in\nNCTE दक्षिण प्रांत कार्यालय यहाँ है",
        "options": [
            "New Delhi नई दिल्ली",
            "Hyderabad हैदराबाद",
            "Bengaluru बेंगलूर",
            "Lucknow लखनऊ"
        ],
        "answer": 2
    },
    {
        "id": 226,
        "question": "Aim of Continuous Comprehensive Evaluation\nसतत् समग्र मूल्यांकन का उद्देश्य",
        "options": [
            "Rote learning रटंत अधिगम",
            "Remembering Information सूचनाओं को याद रखना",
            "Analytical Thinking विश्लेषणात्मक सोच",
            "Securing good marks अच्छे अंक प्राप्त करना"
        ],
        "answer": 2
    },
    {
        "id": 227,
        "question": "Progress report of the child tells\nबच्चों के प्रगति पत्र के बारे में बताता है",
        "options": [
            "Holistic development of the students छात्रों के समग्र विकास के बारे में",
            "Only the marks of the students केवल छात्रों के अंकों के बारे में",
            "Information about the lessons पाठ्यांशों संबंधित समाचार",
            "Information about the teachers शिक्षकों के बारे में समाचार"
        ],
        "answer": 0
    },
    {
        "id": 228,
        "question": "This is not a quality of a good test\nएक उत्तम परीक्षण का यह गुण नहीं है",
        "options": [
            "Validity वैधता",
            "Reliability विश्वसनीयता",
            "Objectivity लक्ष्यात्मकता",
            "Subjectivity विषय निष्ठता"
        ],
        "answer": 3
    },
    {
        "id": 229,
        "question": "Assessment done after the completion of a course\nएक पाठ्यक्रम समाप्ति पर किया जाने वाला आकलन",
        "options": [
            "Formative Assessment रचनात्मक आकलन",
            "Baseline Test बेसलाइन परीक्षण",
            "Half yearly Examination अर्ध वार्षिक परीक्षण",
            "Summative Assessment सारांशात्मक आकलन"
        ],
        "answer": 3
    },
    {
        "id": 230,
        "question": "Item that is not related to Response Assessment\nप्रतिक्रियात्मक आकलन से संबंधित अंश नहीं है",
        "options": [
            "Multiple-Choice Questions बहुविकल्पीय प्रश्न",
            "Binary Choice Questions द्विविकल्प",
            "Natural Observation सहज निरीक्षण",
            "Matching Type Questions जोड़ी बनाइए प्रश्न"
        ],
        "answer": 2
    },
    {
        "id": 231,
        "question": "This tool is used to know whether a concept exists or not\nएक अवधारणा उपस्थित है या नहीं, इसकी पहचान करने के लिए उपयोगी साधन",
        "options": [
            "Teacher Diary शिक्षक दैनिकी",
            "Student’s Diary छात्र दैनिकी",
            "Checklist जाँच सूची",
            "Portfolio पोर्टफोलियो"
        ],
        "answer": 2
    },
    {
        "id": 232,
        "question": "The Assessment that declares the final judgement on a children’s learning achievement\nयह आकलन बच्चों के अधिगम अभ्यास पर अंतिम निर्णय प्रकट करने वाला है",
        "options": [
            "Assessment of Learning अधिगम का आकलन",
            "Assessment for Learning अधिगम के लिए आकलन",
            "Assessment as Learning अधिगम के साथ आकलन",
            "Assessment by Learning अधिगम द्वारा आकलन"
        ],
        "answer": 0
    },
    {
        "id": 233,
        "question": "This type of questions help students to express their own views\nइस प्रकार के प्रश्न छात्रों को अपने स्वयं के विचारों को व्यक्त करने के लिए उपयोगी हैं",
        "options": [
            "Fill in the blanks रिक्त स्थान की पूर्ति करना",
            "Essay Type Questions निबंधात्मक प्रश्न",
            "Matching जोड़ी बनाइए",
            "Multiple Choice Questions बहुविकल्पीय प्रश्न"
        ],
        "answer": 1
    },
    {
        "id": 234,
        "question": "Assessment conducted at the end of the Academic Year\nशैक्षिक वर्ष के अंत में संपन्न किया जाने वाला आकलन",
        "options": [
            "Baseline Test आरंभिक स्तर का आकलन",
            "Formative Assessment रचनात्मक आकलन",
            "Summative Assessment सारांशात्मक आकलन",
            "Assignment दत्तकार्य"
        ],
        "answer": 2
    },
    {
        "id": 235,
        "question": "Q3 = 80, Q1 = 20 then Quartile deviation is\nQ3 = 80, Q1 = 20 इसका चतुर्थांश का विचलन है",
        "options": [
            "20",
            "30",
            "40",
            "50"
        ],
        "answer": 1
    },
    {
        "id": 236,
        "question": "Difference between the highest value and the lowest value in a data is called\nकिसी आँकड़े में वरिष्ठ-कनिष्ठ मूल्यों के अंतर को ऐसे कहते हैं",
        "options": [
            "Standard Deviation प्रमाणिक विचलन",
            "Quartile Deviation चतुर्थांश विचलन",
            "Mean Deviation मध्यमान विचलन",
            "Range प्रसार क्षेत्र"
        ],
        "answer": 3
    },
    {
        "id": 237,
        "question": "This is a derived score\nयह एक व्युत्पन्न प्राप्तांक है",
        "options": [
            "Range प्रसार-क्षेत्र (व्याप्ति)",
            "Deviation विचलन",
            "Z-Score Z-स्कोर",
            "Mean मध्यमान"
        ],
        "answer": 2
    },
    {
        "id": 238,
        "question": "Classification and interpretation of data is called\nआँकड़ों (डेटा) को विश्लेषण और व्याख्या करने को ऐसे कहते हैं",
        "options": [
            "Numerology न्यूमरॉलजी",
            "Statistics सांख्यिकी",
            "Algebra बीज गणित",
            "Symmetry सममिति (सौष्ठव)"
        ],
        "answer": 1
    },
    {
        "id": 239,
        "question": "In the formula of Median, L + (N/2 − m/f) × c, c denotes\nमध्यांक के सूत्र L + (N/2 − m/f) × c में c किसको सूचित करता है",
        "options": [
            "Frequency आवृत्ति",
            "Lower Limit of the Class वर्ग का निम्न स्तर",
            "Class-Interval वर्ग-विस्तार",
            "Sum of the Frequencies आवृत्तियों का कुल"
        ],
        "answer": 2
    },
    {
        "id": 240,
        "question": "Mode of the data 10, 20, 30, 40, 50\n10, 20, 30, 40, 50 डेटा का बहुलांक",
        "options": [
            "10",
            "20",
            "50",
            "Cannot be determined निर्धारण नहीं कर सकते"
        ],
        "answer": 3
    }
]

export default function Psychology24() {
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
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-center">
                        <h1 className="text-4xl font-bold text-cyan-700">
                            Psychology 2.4 - Result
                        </h1>
                        <p className="text-gray-600 mt-4">Questions 181–240</p>
                        <p className="text-3xl font-bold mt-6">
                            {score} / {questions.length}
                        </p>
                        <p className="text-xl text-cyan-700 mt-2">{percentage}%</p>
                        <button
                            onClick={() => {
                                setAnswers({})
                                setSubmitted(false)
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }}
                            className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3 rounded-xl"
                        >
                            Retake Test
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-6 text-cyan-700">
                            Answer Review
                        </h2>

                        {questions.map((question) => (
                            <div key={question.id} className="border-b py-4">
                                <p className="font-semibold whitespace-pre-line">
                                    {question.id}. {question.question}
                                </p>
                                <p className={answers[question.id] === question.answer ? "text-green-600 mt-2" : "text-red-600 mt-2"}>
                                    Your answer: {question.options[answers[question.id]]}
                                </p>
                                <p className="text-green-700 mt-1">
                                    Correct answer: {question.options[question.answer]}
                                </p>
                            </div>
                        ))}
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
                        Psychology 2.4
                    </h1>
                    <p className="text-center text-gray-600 mt-4">
                        TET (2A) Psychology Practice Test
                    </p>
                    <p className="text-center text-gray-500 mt-2">
                        Questions 181–240
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
                                            handleAnswer(question.id, index)
                                        }
                                    />
                                    <span className="whitespace-pre-line">{option}</span>
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
