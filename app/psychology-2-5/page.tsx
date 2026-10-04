"use client"

import { useState } from "react"

const questions = [
    {
        "id": 241,
        "question": "This is not related to Graphical representation of data\nयह आँकड़ों के रेखाचित्रीय प्रदर्शन के लिए नहीं है",
        "options": [
            "Histogram हिस्टोग्राम",
            "Pie Graph पाई ग्राफ",
            "Snellen Chart स्नेलेन चार्ट",
            "Frequency Polygon फ्रीक्वेन्सी पॉलीगॉन"
        ],
        "answer": 2
    },
    {
        "id": 242,
        "question": "Σf is equal to\nΣf इसके समान है",
        "options": [
            "C",
            "N",
            "m",
            "d"
        ],
        "answer": 1
    },
    {
        "id": 243,
        "question": "Median of the scores 76, 24, 53, 35, 80, 09, 43\n76, 24, 53, 35, 80, 09, 43 इन प्राप्तांकों का मध्यांक",
        "options": [
            "53",
            "43",
            "80",
            "76"
        ],
        "answer": 1
    },
    {
        "id": 244,
        "question": "This characteristic is not required for Educational films used in Education\nशिक्षा कक्ष में उपयोग करने वाले चलचित्रों के लिए यह आवश्यक गुण नहीं है",
        "options": [
            "Must align with curriculum context पाठ्यप्रणाली से संबंधित हो",
            "Should not facilitate group learning सामूहिक अधिगम के लिए अनुकूल न हो",
            "Authenticity is crucial प्रामाणिकता की खासियत",
            "Should follow a structured format रचनात्मक प्रारूप का अनुसरण करें"
        ],
        "answer": 1
    },
    {
        "id": 245,
        "question": "This is not an advantage of Educational film\nयह शिक्षा के चलचित्र का लाभ नहीं है",
        "options": [
            "Creates interest in studies छात्रों में रुचि जागृत करते हैं",
            "Teach many people at once अधिक लोगों को एक साथ पढ़ा सकते हैं",
            "Can’t present historical events ऐतिहासिक अंशों का प्रदर्शन नहीं कर सकते हैं",
            "Help in acquiring mental abilities necessary for learning अधिगम के लिए आवश्यक मानसिक क्षमताओं के संपादन में सहायक हैं"
        ],
        "answer": 2
    },
    {
        "id": 246,
        "question": "This is not a limitation of Educational films\nशिक्षा चलचित्रों की सीमा यह नहीं है",
        "options": [
            "Training is required to operate projector प्रोजेक्टर का उपयोग करने के लिए शिक्षण की आवश्यकता है",
            "Some schools do not have necessary resources आवश्यक साधन कुछ पाठशालाओं में उपलब्ध न होंगे",
            "It is very expensive अधिक व्ययात्मक हैं",
            "Creates interest to students छात्रों में आसक्ति बढ़ाते हैं"
        ],
        "answer": 3
    },
    {
        "id": 247,
        "question": "Incorrect statement on the importance of ICT to teachers\nअध्यापकों के लिए ICT की प्रमुखता के संबंध में गलत कथन है",
        "options": [
            "Creating new course material नये कोर्स मेटीरियल की तैयारी",
            "Make abstract concepts easier to understand अमूर्त भावों की ग्राह्यता को आसान कर सकते हैं",
            "Can provide real life experiences वास्तविक जीवन के अनुभवों को प्रदान कर सकते हैं",
            "Doesn’t support the development of teaching methods शिक्षण प्रणालियों की वृद्धि में सहायक नहीं है"
        ],
        "answer": 3
    },
    {
        "id": 248,
        "question": "“Music” comes under this type of teaching technique\n‘म्यूजिक’ (संगीत) इस प्रकार की अधिगम विधि होगी",
        "options": [
            "Stimulating Visual learning दृश्य अधिगम को प्रेरित करना",
            "Listening Teaching Method श्रवण शिक्षण विधि",
            "Tactile Teaching Method स्पर्श बोध विधि",
            "Kinesthetic Teaching Method काइनेस्थेटिक अधिगम विधि (गति संवेदी)"
        ],
        "answer": 1
    },
    {
        "id": 249,
        "question": "Flash cards come under this type of teaching method\n‘फ्लैश कार्ड्स’ इस अधिगम विधि के अंतर्गत आते हैं",
        "options": [
            "Stimulating Visual learning दृश्य अधिगम को प्रेरित करना",
            "Listening Teaching Method श्रवण शिक्षण विधि",
            "Tactile Teaching Method स्पर्श अधिगम विधि",
            "Kinesthetic Teaching Method काइनेस्थेटिक (गति संवेदी)"
        ],
        "answer": 0
    },
    {
        "id": 250,
        "question": "This is not a feature of written communication\nनिम्न में से यह लिखित संप्रेषण का लक्षण नहीं है",
        "options": [
            "It is clear यह स्पष्ट होता है",
            "Can’t be used as evidence साक्ष्य / सबूत के रूप में काम नहीं आता",
            "It is contextually useful समयानुकूल उपयोगी है",
            "It is concise संक्षिप्त रहता है"
        ],
        "answer": 1
    },
    {
        "id": 251,
        "question": "In Flander’s Interaction Analysis Category Method, the category “Lecturing” comes under this item.\nफ्लैंडर्स परस्पर चर्चा विश्लेषण श्रेणीविधि में ‘भाषण देना’ नामक श्रेणी इस अंश के अंतर्गत आती है",
        "options": [
            "Teacher Talk अध्यापक संभाषण",
            "Student Talk छात्र संभाषण",
            "Silence खामोशी",
            "Confusion दुविधा"
        ],
        "answer": 0
    },
    {
        "id": 252,
        "question": "In Flander’s Interaction Analysis Category Method, ‘student talk response’ comes under this item\nफ्लैंडर्स परस्पर चर्चा विश्लेषण श्रेणी विधि में छात्र की प्रतिस्पंदना नामक श्रेणी इस अंश के अंतर्गत आती है",
        "options": [
            "Teacher Talk अध्यापक संभाषण",
            "Student Talk छात्र संभाषण",
            "Silence खामोशी",
            "Confusion दुविधा"
        ],
        "answer": 1
    },
    {
        "id": 253,
        "question": "This is not an output device\nइन में से यह आउटपुट उपकरण नहीं है",
        "options": [
            "Monitor मॉनिटर",
            "Printer प्रिंटर",
            "Speaker स्पीकर",
            "Mouse माउस"
        ],
        "answer": 3
    },
    {
        "id": 254,
        "question": "This is not a type of memory in ICT\nयह ICT में मेमोरी का प्रकार नहीं है",
        "options": [
            "Cache memory",
            "Primary memory",
            "Elementary memory",
            "Secondary memory"
        ],
        "answer": 2
    },
    {
        "id": 255,
        "question": "Microsoft’s widely used slideshow software\nयह एक स्लाइड शो सॉफ्टवेयर है, जिसे माइक्रोसॉफ्ट विस्तृत रूप से उपयोग करता है",
        "options": [
            "MS WORD",
            "MS EXCEL",
            "MS POWERPOINT",
            "MS DOS"
        ],
        "answer": 2
    },
    {
        "id": 256,
        "question": "The network works across large areas such as countries and continents\nमहाद्वीपों व देशों जैसे विशाल प्रांतों में काम करने वाले नेटवर्क हैं",
        "options": [
            "LAN",
            "MAN",
            "CAN",
            "WAN"
        ],
        "answer": 3
    },
    {
        "id": 257,
        "question": "The network that works in small areas like a building or a campus\nभवन या कैंपस जैसे छोटे जगहों पर काम करने वाला नेटवर्क है",
        "options": [
            "MAN",
            "LAN",
            "GAN",
            "WAN"
        ],
        "answer": 1
    },
    {
        "id": 258,
        "question": "This is not a type of computer network\nयह कंप्यूटर नेटवर्क का प्रकार नहीं है",
        "options": [
            "LAN",
            "MAN",
            "CAN",
            "WAN"
        ],
        "answer": 2
    },
    {
        "id": 259,
        "question": "In computer network, this is not an advantage of Intranet\nइनमें से कंप्यूटर नेटवर्क के इंट्रानेट का लाभ नहीं है",
        "options": [
            "Communication कम्यूनिकेशन",
            "Collaboration सहकार",
            "Affordable कम व्यय",
            "Time Consuming अधिक समय लेनेवाला"
        ],
        "answer": 3
    },
    {
        "id": 260,
        "question": "Father of modern computer\nआधुनिक संगणक का पितामह है",
        "options": [
            "Charles Babbage चार्ल्स बैबेज",
            "Stephen Hawking स्टीफेन हॉकिंग",
            "Pascal पास्कल",
            "Leibniz लेइब्निज"
        ],
        "answer": 0
    },
    {
        "id": 261,
        "question": "Logarithms were invented by\nइन्होंने लॉगरिथम्स का आविष्कार किया",
        "options": [
            "Pascal पास्कल",
            "Napier नेपियर",
            "Leibniz लेइब्निज",
            "Babbage बैबेज"
        ],
        "answer": 1
    },
    {
        "id": 262,
        "question": "Full form of CD\nCD का विस्तरण रूप है",
        "options": [
            "Compact Disc",
            "Computer Disk",
            "Compact Device",
            "Computer Device"
        ],
        "answer": 0
    },
    {
        "id": 263,
        "question": "Full form of WWW\nWWW का विस्तार रूप है",
        "options": [
            "Word Wide Web",
            "Wide Web World",
            "World Wide Web",
            "World Web Wide"
        ],
        "answer": 2
    },
    {
        "id": 264,
        "question": "Full form of DOS\nDOS का विस्तार रूप है",
        "options": [
            "Desk Operating Sound",
            "Disk Operating Sound",
            "Desk Operating System",
            "Disk Operating System"
        ],
        "answer": 3
    },
    {
        "id": 265,
        "question": "Full form of LAN\nLAN का विस्तार रूप है",
        "options": [
            "Local Area Network",
            "Local Aided Network",
            "Local Advanced Network",
            "List Automated Network"
        ],
        "answer": 0
    },
    {
        "id": 266,
        "question": "Full form of IC\nIC का विस्तार रूप है",
        "options": [
            "Internet Circuit",
            "Integrated Circuit",
            "Internal Circuit",
            "International Circuit"
        ],
        "answer": 1
    },
    {
        "id": 267,
        "question": "Full form of RAM\nRAM का विस्तार रूप है",
        "options": [
            "Read All Memory",
            "Random Access Manufacturing",
            "Read Access Memory",
            "Random Access Memory"
        ],
        "answer": 3
    },
    {
        "id": 268,
        "question": "Full form of HTTP\nHTTP का विस्तार रूप है",
        "options": [
            "Hyper Text Transfer Protocol",
            "Hyper Test Transfer Protocol",
            "Hyper Text Transfer Publishing",
            "Higher Test Transfer Protocol"
        ],
        "answer": 0
    },
    {
        "id": 269,
        "question": "Full form of ICT\nICT का विस्तार रूप है",
        "options": [
            "Information and Communication Technology",
            "International Computer Training",
            "International Computer Technology",
            "Information and Communication Training"
        ],
        "answer": 0
    },
    {
        "id": 270,
        "question": "E-mail means\nE-mail का अर्थ है",
        "options": [
            "Energetic Mail",
            "Electronic Mail",
            "Emerging Mail",
            "Entertainment Mail"
        ],
        "answer": 1
    }
]

export default function Psychology25() {
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
                        <h1 className="text-4xl font-bold text-cyan-700">Psychology 2.5 - Result</h1>
                        <p className="text-gray-600 mt-4">Questions 241–270</p>
                        <p className="text-3xl font-bold mt-6">{score} / {questions.length}</p>
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
                        <h2 className="text-2xl font-bold mb-6 text-cyan-700">Answer Review</h2>
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
                    <h1 className="text-4xl font-bold text-center text-cyan-700">Psychology 2.5</h1>
                    <p className="text-center text-gray-600 mt-4">TET (2A) Psychology Practice Test</p>
                    <p className="text-center text-gray-500 mt-2">Questions 241–270</p>
                    <p className="text-center text-gray-500 mt-2">Total Questions: {questions.length}</p>
                </div>

                {questions.map((question) => (
                    <div key={question.id} className="bg-white rounded-2xl shadow-md p-6 mb-6">
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
                                        onChange={() => handleAnswer(question.id, index)}
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
