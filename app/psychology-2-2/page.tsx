"use client"

import { useState } from "react"

const questions = [
    { id: 61, question: "Correct option is / सही विकल्प पहचानिए - A: Social Organizations can influence socialization; B: Exposures in neighbourhood mould the social personality", options: ["Only A is correct / केवल A सही है", "Only B is correct / केवल B सही है", "Both A & B are correct / A और B दोनों सही हैं", "Both A & B are incorrect / A और B दोनों सही नहीं हैं"], answer: 2 },
    { id: 62, question: "This play a role in Socialization / समाजीकरण में इसकी भूमिका है - A) Family  B) School  C) Religion", options: ["Only A is correct / केवल A सही है", "Only B is correct / केवल B सही है", "Only C is correct / केवल C सही है", "A, B, C all are correct / A, B, C तीनों सही हैं"], answer: 3 },
    { id: 63, question: "Socially matured person shows good relations with / सामाजिक परिपक्वता वाला व्यक्ति इनके साथ अच्छे संबंध बनाए रखता है - Family, Friends, Neighbours", options: ["Only A is correct / केवल A सही है", "Only B is correct / केवल B सही है", "Only C is correct / केवल C सही है", "A, B, C all are correct / A, B, C तीनों सही हैं"], answer: 3 },
    { id: 64, question: "“Developmental Psychology: A Life Span Approach” book was written by / पुस्तक के लेखक -", options: ["Elizabeth Hurlock / एलिजाबेथ हर्लॉक", "B.F. Skinner / बी.एफ. स्किनर", "Francis Galton / फ्रांसिस गाल्टन", "Thorndike / थॉर्नडाइक"], answer: 0 },
    { id: 65, question: "According to Elizabeth Hurlock, this is not a social group during Adolescence / हर्लॉक के अनुसार किशोरावस्था में यह सामाजिक समूह नहीं है -", options: ["Crowds / भीड़", "Gangs / गिरोह", "Close Friends / घनिष्ठ मित्र", "Old Friends / पुराने मित्र"], answer: 3 },
    { id: 66, question: "According to Stone and Brown, incorrectly paired crowd is / स्टोन एवं ब्राउन के अनुसार सही जोड़ी नहीं है -", options: ["Brains: Give more importance to Academics / ब्रेइन्स: पढ़ाई को प्राथमिकता", "Jacks: Participate in Games / जैक्स: खेलों में भाग लेते हैं", "Populars: Leaders in Classroom / पॉपुलर्स: कक्षा नेता", "Partyers: Give more importance to Exams / पार्टीयर्स: परीक्षाओं को अधिक महत्व"], answer: 3 },
    { id: 67, question: "“Dictionary of Psychology” was written by / “Dictionary of Psychology” के लेखक", options: ["Chaplin / चैप्लिन", "Skinner / स्किनर", "Weshler / वेश्लर", "Morgan / मॉर्गन"], answer: 0 },
    { id: 68, question: "This is not correct activity to improve leadership characteristics in Adolescents / किशोरों में नेतृत्व विकसित करने के लिए उचित गतिविधि नहीं है -", options: ["Join the students in NCC / छात्रों को NCC में भर्ती कराना", "Training students to develop life skills / जीवन कौशल के लिए प्रशिक्षण", "Participate in school programs / स्कूल कार्यक्रमों में भाग लेना", "Participate in illegal activities / अवैध गतिविधियों में भाग लेना"], answer: 3 },
    { id: 69, question: "In this type of leadership, decisions are taken by the leaders by themselves / इस नेतृत्व में केवल नेता निर्णय लेते हैं", options: ["Authoritarian / तानाशाही", "Democratic / लोकतांत्रिक", "Leissez Farie / हस्तक्षेप रहित", "Friendly / स्नेहपूर्वक"], answer: 0 },
    { id: 70, question: "This is not a special characteristic of Adolescents / यह किशोरों की विशेषता नहीं है -", options: ["Peer group relationship / समवयस्कों से संबंध", "Aspiring for Leadership / नेतृत्व की इच्छा", "No need of Independence / स्वतंत्रता की आवश्यकता न होना", "Firm Self Consciousness / प्रबल स्वचेतना"], answer: 2 },
    { id: 71, question: "Group behaviour of Adolescents is seen in these activities / किशोरों का समूह व्यवहार इन गतिविधियों में देखा जाता है: A singing/dancing for fun; B strikes/protests", options: ["Only A is correct / केवल A सही है", "Only B is correct / केवल B सही है", "Both A & B are correct / A और B दोनों सही हैं", "Both A & B are incorrect / A और B दोनों गलत हैं"], answer: 2 },
    { id: 72, question: "The following life skills are to be taught to adolescents / किशोरों को निम्न जीवन कौशल सिखाने चाहिए: Problem Solving, Creative Thinking, Empathy", options: ["Only A is correct / केवल A सही है", "Only B is correct / केवल B सही है", "Only C is correct / केवल C सही है", "A, B, C all are correct / A, B, C तीनों सही हैं"], answer: 3 },
    { id: 73, question: "A person’s chronological age and mental age are equal. Then his IQ is / शारीरिक और मानसिक आयु समान हो तो IQ", options: ["100", "200", "250", "150"], answer: 0 },
    { id: 74, question: "Competency for purposive behaviour, rational thinking and moulding environment according to needs / उद्देश्‍यपूर्ण व्यवहार, तर्कसंगत चिंतन और परिवेश को आवश्यकतानुसार ढालने की क्षमता", options: ["Personality / व्यक्तित्व", "Reinforcement / पुनर्बलन", "Interest / अभिरुचि", "Intelligence / बुद्धि"], answer: 3 },
    { id: 75, question: "This is not a type of intelligence according to Thorndike / थॉर्नडाइक के अनुसार यह बुद्धि का प्रकार नहीं है", options: ["Abstract intelligence / अमूर्त बुद्धि", "Mechanical Intelligence / यांत्रिक बुद्धि", "Social intelligence / सामाजिक बुद्धि", "Environmental Intelligence / पर्यावरणीय बुद्धि"], answer: 3 },
    { id: 76, question: "The intelligence useful to understand surroundings / आस-पास के परिवेश को समझने के लिए उपयोगी बुद्धि", options: ["Abstract Intelligence / अमूर्त बुद्धि", "Mechanical Intelligence / यांत्रिक बुद्धि", "Mathematical Intelligence / गणितीय बुद्धि", "Social Intelligence / सामाजिक बुद्धि"], answer: 3 },
    { id: 77, question: "The internal energy that can see interrelations in an individual is / व्यक्ति के भीतर पारस्परिक संबंधों को देखने वाली अंतर्निहित शक्ति", options: ["Personality / व्यक्तित्व", "Habit / आदत", "Frustration / कुंठा", "Intelligence / बुद्धि"], answer: 3 },
    { id: 78, question: "The ability of learning by understanding the relations is / संबंधों को समझकर सीखने की क्षमता", options: ["Reinforcement / पुनर्बलन", "Habit / आदत", "Personality / व्यक्तित्व", "Intelligence / बुद्धि"], answer: 3 },
    { id: 79, question: "Reason for backwardness or high achievement among children in curricular aspects / पाठ्यचर्या में पिछड़ापन या उच्च उपलब्धि का कारण", options: ["Conditioning / अनुबंधन", "Intelligence / बुद्धि", "Personality / व्यक्तित्व", "Skills / कौशल"], answer: 1 },
    { id: 80, question: "IQ means / IQ का अर्थ", options: ["Intelligence Questionnaire", "Intelligence Quotient", "Interrelated Questionnaire", "Integrated Quotient"], answer: 1 },
    { id: 81, question: "Ability to adjust and face a new situation quickly and effectively / नई परिस्थिति में शीघ्र अनुकूलन और प्रभावी सामना करने की क्षमता", options: ["Personality / व्यक्तित्व", "Intelligence / बुद्धि", "Learning / अधिगम", "Interest / अभिरुचि"], answer: 1 },
    { id: 82, question: "Politicians, sales representatives, psychological counsellors and teachers usually possess strong / इन लोगों में प्रबल होती है -", options: ["Inter-Personal Intelligence / अंतर-वैयक्तिक बुद्धि", "Intra Personal Intelligence / अंतः-वैयक्तिक बुद्धि", "Spatial Intelligence / स्थानीय बुद्धि", "Musical Intelligence / संगीतात्मक बुद्धि"], answer: 0 },
    { id: 83, question: "People with high intra personal intelligence are referred as / अंतः-वैयक्तिक बुद्धि वाले कहलाते हैं", options: ["Social smart / सामाजिक कुशल", "Self Smart / स्व कुशल", "Nature Smart / प्राकृतिक कुशल", "Word Smart / शाब्दिक कुशल"], answer: 1 },
    { id: 84, question: "Biologists, Environmentalists and Farmers demonstrate a higher degree of / जीव वैज्ञानिक, पर्यावरण वैज्ञानिक और किसान प्रदर्शित करते हैं", options: ["Spatial Intelligence / स्थानीय बुद्धि", "Naturalistic Intelligence / प्रकृति संबंधी बुद्धि", "Linguistic Intelligence / भाषाई बुद्धि", "Intra Personal Intelligence / अंतः-वैयक्तिक बुद्धि"], answer: 1 },
    { id: 85, question: "Carnatic musicians have this type of Intelligence / कर्नाटक संगीतकारों में यह बुद्धि पायी जाती है", options: ["Spatial Intelligence / स्थानीय बुद्धि", "Bodily-Kinaesthetic Intelligence / शारीरिक-स्पर्शात्मक बुद्धि", "Mathematical-Logical Intelligence / गणित-तार्किक बुद्धि", "Musical Intelligence / संगीतात्मक बुद्धि"], answer: 3 },
    { id: 86, question: "Incorrect pair related to intelligence theories and proponents / बुद्धि सिद्धांत और प्रतिपादकों में गलत जोड़ी", options: ["Multiple Intelligence - Howard Gardner / बहुबुद्धि – हॉवर्ड गार्डनर", "Multi Factor Theory - Jean Piaget / बहुकारक – जीन पियाजे", "Group Factor Theory - L.L. Thurston / समूह कारक – एल.एल. थर्स्टन", "Structure of Intellect Model - Guilford / बुद्धि संरचना – गिल्फोर्ड"], answer: 1 },
    { id: 87, question: "According to Carl Spearman, factor useful in doing specific deeds / कार्ल स्पीयरमैन के अनुसार विशेष कार्य के लिए उपयोगी कारक", options: ["General Factor / सामान्य कारक", "Group Factor / समूह कारक", "Specific Factor / विशिष्ट कारक", "Primary Factor / प्राथमिक कारक"], answer: 2 },
    { id: 88, question: "This is a traditional intelligence theory / यह परंपरागत बुद्धि सिद्धांत है", options: ["Theory of Multiple Intelligence / बहुबुद्धि सिद्धांत", "Multi Factor Theory / बहुकारक बुद्धि सिद्धांत", "Group Factor Theory / समूह कारक सिद्धांत", "Uni Factor Theory / एकल कारक बुद्धि सिद्धांत"], answer: 3 },
    { id: 89, question: "Theory believing excellence in one field results in same type of excellence in remaining fields / एक क्षेत्र की कुशलता अन्य सभी क्षेत्रों में भी समान कुशलता देती है", options: ["Multiple Intelligence Theory / बहुबुद्धि सिद्धांत", "Multi Factor Theory / बहुकारक बुद्धि सिद्धांत", "Uni Factor Theory / एकल कारक बुद्धि सिद्धांत", "Two Factor Theory / द्विकारक बुद्धि सिद्धांत"], answer: 2 },
    { id: 90, question: "According to Carl Spearman, reason for definite interest in an individual / निर्दिष्ट अभिरुचि का कारण", options: ["General Factor / सामान्य कारक", "Specific Factor / विशिष्ट कारक", "Group Factor / समूह कारक", "Primary Factor / प्राथमिक कारक"], answer: 1 },
    { id: 91, question: "Memory in which learner directly participates in learning and remembers learned material / अधिगम में सीधे भाग लेकर सीखे विषयों को याद रखने वाली स्मृति", options: ["Short Term Memory / अल्पकालिक स्मृति", "Long Term Memory / दीर्घकालिक स्मृति", "Rote Memory / रटंत स्मृति", "Active Memory / सक्रिय स्मृति"], answer: 3 },
    { id: 92, question: "Memory in which learner remembers things by reading or listening / सुनकर या पढ़कर विषयों को याद रखने वाली स्मृति", options: ["Short Term Memory / अल्पकालिक स्मृति", "Long Term Memory / दीर्घकालिक स्मृति", "Active Memory / क्रियात्मक स्मृति", "Passive Memory / निष्क्रियात्मक स्मृति"], answer: 3 },
    { id: 93, question: "Seeing something now but feeling it was already seen is called / अभी देखी वस्तु पहले देखे जाने का भ्रम", options: ["Dejavu / डेजावू", "Schemata / स्कीमाटा", "Fued / फ्यूड", "Zeigarnik effect / जैगानिक प्रभाव"], answer: 0 },
    { id: 94, question: "Remembering incomplete or interrupted tasks better than completed ones / अधूरे या बीच में छोड़े कार्यों को अधिक याद रखना", options: ["Zeigarnik effect / जैगानिक प्रभाव", "Pigmalian effect / पिग्मालियन प्रभाव", "Plasibo effect / प्लासिबो प्रभाव", "Priming effect / प्राइमिंग प्रभाव"], answer: 0 },
    { id: 95, question: "This is not a reason for forgetting / यह विस्मृति का कारण नहीं है", options: ["Repression / दमन", "Inhibition / अवरोध", "Abnormal forgetting / अपसामान्य विस्मृति", "Relearning / पुनरधिगम"], answer: 3 },
    { id: 96, question: "Reason for memories fading with advancement of time / समय बीतने के साथ स्मृति क्षीण होने का कारण", options: ["Repression / दमन", "Inhibition / अवरोध", "Abnormal forgetting / अपसामान्य विस्मृति", "Passive decay through disuse / अनुपयोग के कारण स्मृति क्षय"], answer: 3 },
    { id: 97, question: "Painful experiences intentionally pushed into unconscious layer is what type of forgetting / दुखद अनुभवों को अचेतन में भेजना", options: ["Repression / दमन", "Abnormal forgetting / अपसामान्य विस्मृति", "Inhibition / अवरोध", "Passive decay through disuse / अनुपयोग के कारण स्मृति क्षय"], answer: 0 },
    { id: 98, question: "This method is not useful for improving memory / स्मृति बढ़ाने के लिए यह पद्धति उपयोगी नहीं है", options: ["Motivation / प्रेरणा", "Attention / अवधान", "Repression / दमन", "Less Emotional / कम संवेगात्मकता"], answer: 2 },
    { id: 99, question: "Remembering Shahjahan on hearing Tajmahal is which memory-improvement method / ताजमहल सुनते ही शाहजहाँ याद आना", options: ["Motivation / प्रेरणा", "Association of ideas / भावों का संसर्ग", "Over learning / तीव्र अधिगम", "Mnemonic devices / धारणावृत्ति चिह्न"], answer: 1 },
    { id: 100, question: "Aptitude test that helps an individual choose a job / नौकरी चुनने में सहायक अभिक्षमता परीक्षण", options: ["Scholastic Aptitude Test / विद्यालय संबंधी अभिक्षमता परीक्षण", "Vocational Aptitude Test / व्यावसायिक अभिक्षमता परीक्षण", "Aesthetic Aptitude Test / सौंदर्य संबंधी अभिक्षमता परीक्षण", "Sports Aptitude Test / खेल संबंधी अभिक्षमता परीक्षण"], answer: 1 },
    { id: 101, question: "Aptitude test used to choose a course in education / शिक्षा क्षेत्र में पाठ्यक्रम चुनने का परीक्षण", options: ["Scholastic Aptitude Test / विद्यालय-संबंधी अभिक्षमता परीक्षण", "Vocational Aptitude Test / व्यावसायिक अभिक्षमता परीक्षण", "Aesthetic Aptitude Test / सौंदर्य संबंधी अभिक्षमता परीक्षण", "Sports Aptitude Test / खेल संबंधी अभिक्षमता परीक्षण"], answer: 0 },
    { id: 102, question: "DAT (Differential Aptitude Test) is useful to measure / DAT किसके मापन के लिए उपयोगी है", options: ["Personality / व्यक्तित्व", "Intelligence / बुद्धि", "Attention / अवधान", "Aptitude / अभिक्षमता"], answer: 3 },
    { id: 103, question: "It is a motive towards an activity / यह किसी गतिविधि की दिशा में प्रेरित करती है", options: ["Interest / अभिरुचि", "Personality / व्यक्तित्व", "Intelligence / बुद्धि", "Cognition / संज्ञान"], answer: 0 },
    { id: 104, question: "Strong’s Vocational Interest Blank is useful to measure / Strong’s Vocational Interest Blank किसका मापन करता है", options: ["Personality / व्यक्तित्व", "Intelligence / बुद्धि", "Interest / अभिरुचि", "Attention / अवधान"], answer: 2 },
    { id: 105, question: "Tendency to respond to people, institutions or events positively or negatively / लोगों, संस्थाओं या घटनाओं के प्रति सकारात्मक या नकारात्मक प्रतिक्रिया की प्रवृत्ति", options: ["Attitude / अभिवृत्ति", "Aptitude / अभिक्षमता", "Attention / अवधान", "Creativity / सृजनात्मकता"], answer: 0 },
    { id: 106, question: "Test that is not useful to measure attitude / अभिवृत्ति मापने के लिए उपयोगी नहीं है", options: ["Likert’s Summated Rating Method / लाइकर्ट संकलित निर्धारण मापन", "Thurston’s Attitude Scale / थर्स्टन अभिवृत्ति मापनी", "Bogardus Social Distance Scale / बोगार्डस सामाजिक अंतर मापन", "Strong Vocational Interest Scale / स्ट्रांग व्यावसायिक अभिरुचि मापन"], answer: 3 },
    { id: 107, question: "First stage in the process of Creativity / सृजनात्मक प्रक्रिया की पहली अवस्था", options: ["Preparatory Stage / पूर्वारंभिक अवस्था", "Latency Stage / गुप्त अवस्था", "Insight Stage / अंतर्दृष्टि अवस्था", "Verification Stage / निर्धारण अवस्था"], answer: 0 },
    { id: 108, question: "It does not develop desirable attitudes towards school among children / बच्चों में विद्यालय के प्रति वांछनीय अभिवृत्ति विकसित नहीं करता", options: ["Learning in free environment / स्वतंत्र वातावरण में अधिगम", "Co-curricular activities designed on uninterested areas / अभिरुचि रहित सह-पाठ्यक्रम बनाना", "School staff should be cordial towards students / अध्यापक छात्रों के प्रति सहृदय हों", "Prepare a plan to develop projects / परियोजना विकास की योजना बनाना"], answer: 1 },
    { id: 109, question: "The way a person visualises, listens, experiences, tastes and smells the environment is / व्यक्ति परिवेश को जिस प्रकार देखता, सुनता, अनुभव करता, स्वाद व गंध लेता है", options: ["Intelligence / बुद्धि", "Perception / प्रत्यक्षीकरण", "Attention / अवधान", "Personality / व्यक्तित्व"], answer: 1 },
    { id: 110, question: "This is not a characteristic of Perception / यह प्रत्यक्षीकरण की विशेषता नहीं है", options: ["It depends on sensation / यह संवेदना पर आधारित है", "Senses help in perception / ज्ञानेन्द्रियाँ सहायता करती हैं", "It is a process of analysis and synthesis / यह विश्लेषण व संश्लेषण की प्रक्रिया है", "It is not affected by external and internal motives / यह आंतरिक व बाह्य प्रेरकों से प्रभावित नहीं होता"], answer: 3 },
    { id: 111, question: "Grouping objects based on similar characteristics like colour, space and magnitude is / रंग, आकार, परिमाण की समानता के आधार पर समूह बनाने का नियम", options: ["Law of Proximity / सामीप्य का नियम", "Law of Similarity / समानता का नियम", "Law of Closure / क्लोजर नियम", "Law of Continuity / निरंतरता का नियम"], answer: 1 },
    { id: 112, question: "Incomplete figures are perceived as complete is / अपूर्ण आकृतियों को पूर्ण आकृति के रूप में देखना", options: ["Law of Closure / क्लोजर नियम", "Law of Proximity / सामीप्य का नियम", "Law of Continuity / निरंतरता का नियम", "Law of Similarity / समानता का नियम"], answer: 0 },
    { id: 113, question: "Bird flies in the sky. In Figure-Ground relationship, the sky is / पक्षी आकाश में उड़ता है; आकृति-क्षेत्र संबंध में आकाश है", options: ["Figure / आकृति", "Ground / क्षेत्र", "Group / समूह", "Base / आधार"], answer: 1 },
    { id: 114, question: "Tendency to perceive objects close to one another as a group is / निकट वस्तुओं को एक समूह के रूप में देखने की प्रवृत्ति", options: ["Law of Continuity / निरंतरता का नियम", "Law of Similarity / समानता का नियम", "Law of Proximity / सामीप्य का नियम", "Law of Figure-Ground relationship / आकृति-क्षेत्र का नियम"], answer: 2 },
    { id: 115, question: "Correct pair related to factors influencing perception / प्रत्यक्षीकरण को प्रभावित करने वाले कारकों की सही जोड़ी: A Personal factors – interests, attitudes, familiarities; B Objective factors – similarity, wholeness, nearness", options: ["Only A is correct / केवल A सही है", "Only B is correct / केवल B सही है", "Both A and B are correct / A और B दोनों सही हैं", "Both A and B are incorrect / A और B दोनों गलत हैं"], answer: 2 },
    { id: 116, question: "The Inventory that is not related to assessment of Interest / अभिरुचि के मापन से संबंधित नहीं है", options: ["Strong Vocational Interest Blank / स्ट्रांग व्यावसायिक अभिरुचि मापक", "Minnesota Vocational Interest Inventory / मिनेसोटा व्यावसायिक अभिरुचि परिसूचिका", "Kuder’s General Interest Survey / कूडर सामान्य अभिरुचि सर्वे", "General Aptitude Test Battery / सामान्य अभिक्षमता टेस्ट बैटरी"], answer: 3 },
    { id: 117, question: "Ability to recognise primary colours like red and green / लाल और हरे जैसे प्राथमिक रंग पहचानने की क्षमता", options: ["Colour Concept / रंग की अवधारणा", "Money Concept / धन की अवधारणा", "Beauty Concept / सौंदर्य की अवधारणा", "Time Concept / समय की अवधारणा"], answer: 0 },
    { id: 118, question: "Number of Spinal nerves in human beings, in pairs / मानव में रीढ़ की स्नायु तंत्रिकाओं की संख्या (जोड़ियों में)", options: ["43", "12", "31", "22"], answer: 2 },
    { id: 119, question: "Vision, hearing and muscular strength depend on functioning of this nervous system / देखने, सुनने और मांसपेशियों की शक्ति इस तंत्र पर निर्भर है", options: ["Central Nervous System / केंद्रीय स्नायु व्यवस्था", "Peripheral Nervous System / परिधीय स्नायु व्यवस्था", "Autonomous Nervous System / स्वायत्त स्नायु व्यवस्था", "Hormones / हार्मोन"], answer: 1 },
    { id: 120, question: "This gland in the human body controls all other endocrine glands / मानव शरीर में यह ग्रंथि सभी अंतःस्रावी ग्रंथियों को नियंत्रित करती है", options: ["Pituitary Gland / पीयूष ग्रंथि", "Thyroid Gland / थायराइड ग्रंथि", "Adrenal Gland / एड्रिनल ग्रंथि", "Testis / वृषण"], answer: 0 },
]

export default function Psychology22() {
    const [answers, setAnswers] = useState<Record<number, number>>({})
    const [submitted, setSubmitted] = useState(false)

    const handleAnswer = (questionId: number, optionIndex: number) => {
        setAnswers((previous) => ({ ...previous, [questionId]: optionIndex }))
    }

    const score = questions.reduce((total, question) =>
        total + (answers[question.id] === question.answer ? 1 : 0), 0)
    const percentage = ((score / questions.length) * 100).toFixed(2)
    const allAnswered = Object.keys(answers).length === questions.length

    if (submitted) {
        return (
            <div className="min-h-screen bg-slate-50 py-10 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
                        <h1 className="text-4xl font-bold text-center text-cyan-700 mb-8">Test Result</h1>
                        <div className="space-y-4 text-center">
                            <div className="text-3xl font-bold">Score: {score}/{questions.length}</div>
                            <div className="text-2xl text-cyan-600 font-semibold">Percentage: {percentage}%</div>
                            <div className="text-xl">Correct Answers: {score} out of {questions.length}</div>
                            <button onClick={() => { setSubmitted(false); setAnswers({}) }} className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl">Retake Test</button>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center">Answer Review</h2>
                        {questions.map((question) => {
                            const isCorrect = answers[question.id] === question.answer
                            return (
                                <div key={question.id} className={`bg-white rounded-2xl shadow-md p-6 border-2 ${isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}>
                                    <h3 className="font-semibold mb-3">{question.id}. {question.question}</h3>
                                    <p><strong>Your Answer:</strong> {question.options[answers[question.id]]}</p>
                                    <p><strong>Correct Answer:</strong> {question.options[question.answer]}</p>
                                    <p className={`font-bold mt-2 ${isCorrect ? "text-green-600" : "text-red-600"}`}>{isCorrect ? "✅ Correct" : "❌ Wrong"}</p>
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
                    <h1 className="text-4xl font-bold text-center text-cyan-700">Psychology 2.2</h1>
                    <p className="text-center text-gray-600 mt-4">TET (2A) Psychology Practice Test</p>
                    <p className="text-center text-gray-500 mt-2">Questions 61–120</p>
                    <p className="text-center text-gray-500 mt-2">Total Questions: {questions.length}</p>
                </div>

                {questions.map((question) => (
                    <div key={question.id} className="bg-white rounded-2xl shadow-md p-6 mb-6">
                        <h2 className="font-semibold text-lg mb-4 whitespace-pre-line">{question.id}. {question.question}</h2>
                        <div className="space-y-3">
                            {question.options.map((option, index) => (
                                <label key={index} className="flex items-center gap-3 border rounded-xl p-3 hover:bg-cyan-50 cursor-pointer">
                                    <input type="radio" name={`question-${question.id}`} checked={answers[question.id] === index} onChange={() => handleAnswer(question.id, index)} />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="text-center">
                    <button disabled={!allAnswered} onClick={() => setSubmitted(true)} className={`px-8 py-3 rounded-xl text-white font-semibold ${allAnswered ? "bg-cyan-600 hover:bg-cyan-700" : "bg-gray-400 cursor-not-allowed"}`}>Submit Test</button>
                    {!allAnswered && <p className="text-sm text-gray-500 mt-3">Please answer all 60 questions before submitting.</p>}
                </div>
            </div>
        </div>
    )
}
