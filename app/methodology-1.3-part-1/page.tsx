"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "त्रिभाषा सूत्र का मुख्य उद्देश्य क्या है?",
        options: [
            "केवल हिंदी का विकास",
            "केवल अंग्रेज़ी का विकास",
            "राष्ट्रीय एकता एवं बहुभाषिकता का विकास",
            "क्षेत्रीय भाषाओं को समाप्त करना",
        ],
        answer: 2,
    },
    {
        id: 2,
        question: "त्रिभाषा सूत्र की सिफारिश किस आयोग ने की?",
        options: [
            "मुदालियर आयोग",
            "राधाकृष्णन आयोग",
            "कोठारी आयोग",
            "हंटर आयोग",
        ],
        answer: 2,
    },
    {
        id: 3,
        question: "कोठारी आयोग का कार्यकाल था—",
        options: [
            "1962-64",
            "1964-66",
            "1966-68",
            "1968-70",
        ],
        answer: 1,
    },
    {
        id: 4,
        question: "कोठारी आयोग के अध्यक्ष कौन थे?",
        options: [
            "डॉ. जाकिर हुसैन",
            "डॉ. डी.एस. कोठारी",
            "मौलाना आजाद",
            "डॉ. राधाकृष्णन",
        ],
        answer: 1,
    },
    {
        id: 5,
        question: "कोठारी आयोग का गठन कब हुआ?",
        options: [
            "14 जुलाई 1964",
            "29 जून 1966",
            "15 अगस्त 1965",
            "26 जनवरी 1964",
        ],
        answer: 0,
    },
    {
        id: 6,
        question: "कोठारी आयोग ने अपनी रिपोर्ट कब प्रस्तुत की?",
        options: [
            "1965",
            "1967",
            "29 जून 1966",
            "1968",
        ],
        answer: 2,
    },
    {
        id: 7,
        question: "राष्ट्रीय शिक्षा नीति 1968 में किसे स्वीकार किया गया?",
        options: [
            "द्विभाषा सूत्र",
            "त्रिभाषा सूत्र",
            "पंचभाषा सूत्र",
            "एकभाषा सूत्र",
        ],
        answer: 1,
    },
    {
        id: 8,
        question: "गैर-हिंदी राज्यों में त्रिभाषा सूत्र का स्वरूप क्या है?",
        options: [
            "हिंदी + अंग्रेज़ी + संस्कृत",
            "क्षेत्रीय भाषा + हिंदी + अंग्रेज़ी",
            "हिंदी + उर्दू + अंग्रेज़ी",
            "क्षेत्रीय भाषा + संस्कृत + अंग्रेज़ी",
        ],
        answer: 1,
    },
    {
        id: 9,
        question: "हिंदी भाषी राज्यों में तीसरी भाषा सामान्यतः होती है—",
        options: [
            "अंग्रेज़ी",
            "संस्कृत",
            "आधुनिक भारतीय भाषा",
            "उर्दू",
        ],
        answer: 2,
    },
    {
        id: 10,
        question: "त्रिभाषा सूत्र किस समस्या के समाधान हेतु बनाया गया?",
        options: [
            "बेरोजगारी",
            "जनसंख्या",
            "भाषा समस्या",
            "गरीबी",
        ],
        answer: 2,
    },
    {
        id: 11,
        question: "भारत की प्रमुख विशेषता क्या है?",
        options: [
            "एकभाषिकता",
            "बहुभाषिकता",
            "निरक्षरता",
            "औद्योगीकरण",
        ],
        answer: 1,
    },
    {
        id: 12,
        question: "भाषा शिक्षण का प्रमुख उद्देश्य क्या है?",
        options: [
            "केवल परीक्षा पास करना",
            "संप्रेषण क्षमता विकसित करना",
            "रटना",
            "केवल लेखन करना",
        ],
        answer: 1,
    },
    {
        id: 13,
        question: "त्रिभाषा सूत्र राष्ट्रीय एकता को—",
        options: [
            "कमजोर करता है",
            "प्रभावित नहीं करता",
            "सुदृढ़ करता है",
            "समाप्त करता है",
        ],
        answer: 2,
    },
    {
        id: 14,
        question: "राष्ट्रीय शिक्षा नीति 1986 में त्रिभाषा सूत्र को—",
        options: [
            "समाप्त किया गया",
            "संशोधित कर हटाया गया",
            "बनाए रखा गया",
            "अस्वीकार किया गया",
        ],
        answer: 2,
    },
    {
        id: 15,
        question: "नई शिक्षा नीति 2020 में किस पर बल दिया गया?",
        options: [
            "केवल हिंदी",
            "केवल अंग्रेज़ी",
            "बहुभाषिकता",
            "विदेशी भाषाएँ",
        ],
        answer: 2,
    },
    {
        id: 16,
        question: "भाषा शिक्षण में सुनना किस प्रकार का कौशल है?",
        options: [
            "ग्रहणात्मक",
            "सृजनात्मक",
            "साहित्यिक",
            "सांस्कृतिक",
        ],
        answer: 0,
    },
    {
        id: 17,
        question: "भाषा शिक्षण में पढ़ना किस प्रकार का कौशल है?",
        options: [
            "ग्रहणात्मक",
            "अभिव्यक्तात्मक",
            "मौखिक",
            "रचनात्मक",
        ],
        answer: 0,
    },
    {
        id: 18,
        question: "भाषा शिक्षण में बोलना किस प्रकार का कौशल है?",
        options: [
            "ग्रहणात्मक",
            "अभिव्यक्तात्मक",
            "निष्क्रिय",
            "साहित्यिक",
        ],
        answer: 1,
    },
    {
        id: 19,
        question: "भाषा शिक्षण में लिखना किस प्रकार का कौशल है?",
        options: [
            "ग्रहणात्मक",
            "अभिव्यक्तात्मक",
            "निष्क्रिय",
            "श्रवणात्मक",
        ],
        answer: 1,
    },
    {
        id: 20,
        question: "निम्न में से कौन-सा भाषा कौशल नहीं है?",
        options: [
            "सुनना",
            "बोलना",
            "गणना करना",
            "लिखना",
        ],
        answer: 2,
    },
    {
        id: 21,
        question: "त्रिभाषा सूत्र का एक उद्देश्य है—",
        options: [
            "सांस्कृतिक आदान-प्रदान",
            "क्षेत्रीय भाषाओं का अंत",
            "केवल हिंदी का प्रचार",
            "केवल अंग्रेज़ी का प्रचार",
        ],
        answer: 0,
    },
    {
        id: 22,
        question: "मातृभाषा का अध्ययन क्यों आवश्यक है?",
        options: [
            "सहज अभिव्यक्ति हेतु",
            "केवल परीक्षा हेतु",
            "नौकरी हेतु",
            "अंक प्राप्ति हेतु",
        ],
        answer: 0,
    },
    {
        id: 23,
        question: "बहुभाषिकता का अर्थ है—",
        options: [
            "एक भाषा का ज्ञान",
            "दो भाषाओं का ज्ञान",
            "अनेक भाषाओं का ज्ञान",
            "विदेशी भाषा का ज्ञान",
        ],
        answer: 2,
    },
    {
        id: 24,
        question: "भाषा और संस्कृति का संबंध है—",
        options: [
            "कोई संबंध नहीं",
            "घनिष्ठ संबंध",
            "विरोधी संबंध",
            "अस्थायी संबंध",
        ],
        answer: 1,
    },
    {
        id: 25,
        question: "भाषा शिक्षण का सामाजिक उद्देश्य है—",
        options: [
            "सामाजिक समरसता",
            "प्रतियोगिता",
            "विभाजन",
            "अलगाव",
        ],
        answer: 0,
    },
]

export default function MethodologyPart1() {
    const [answers, setAnswers] = useState<Record<number, number>>({})
    const [submitted, setSubmitted] = useState(false)

    const handleAnswer = (qId: number, optionIndex: number) => {
        setAnswers((prev) => ({
            ...prev,
            [qId]: optionIndex,
        }))
    }

    const score = questions.reduce((total, q) => {
        return total + (answers[q.id] === q.answer ? 1 : 0)
    }, 0)

    const percentage = ((score / questions.length) * 100).toFixed(2)

    const allAnswered =
        Object.keys(answers).length === questions.length

    if (submitted) {
        return (
            <div className="min-h-screen bg-slate-50 p-6">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
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
                <div className="mt-10 space-y-6">
                    <h2 className="text-2xl font-bold text-center">
                        Answer Review
                    </h2>

                    {questions.map((q) => {
                        const isCorrect = answers[q.id] === q.answer

                        return (
                            <div
                                key={q.id}
                                className={`p-5 rounded-xl border-2 ${isCorrect
                                        ? "border-green-500 bg-green-50"
                                        : "border-red-500 bg-red-50"
                                    }`}
                            >
                                <h3 className="font-semibold mb-3">
                                    {q.id}. {q.question}
                                </h3>

                                <p>
                                    <strong>Your Answer:</strong>{" "}
                                    {q.options[answers[q.id]]}
                                </p>

                                <p>
                                    <strong>Correct Answer:</strong>{" "}
                                    {q.options[q.answer]}
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
            
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h1 className="text-4xl font-bold text-center text-cyan-700">
                        Hindi Methodology 1.3 - Part 1
                    </h1>
                </div>

                {questions.map((q) => (
                    <div
                        key={q.id}
                        className="bg-white rounded-2xl shadow-md p-6 mb-6"
                    >
                        <h2 className="font-semibold text-lg mb-4">
                            {q.id}. {q.question}
                        </h2>

                        <div className="space-y-3">
                            {q.options.map((option, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-3 border rounded-xl p-3 hover:bg-cyan-50 cursor-pointer"
                                >
                                    <input
                                        type="radio"
                                        name={`question-${q.id}`}
                                        checked={
                                            answers[q.id] === index
                                        }
                                        onChange={() =>
                                            handleAnswer(
                                                q.id,
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
                </div>
            </div>
        </div>
    )
}