"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "पद्य शिक्षण विद्यार्थियों में क्या उत्पन्न करता है?",
        options: ["सौंदर्यबोध", "गणना", "अनुशासन", "दंड"],
        answer: 0,
    },
    {
        id: 27,
        question: "पद्य का मुख्य तत्व क्या है?",
        options: ["ताल और लय", "गणित", "चित्र", "अनुशासन"],
        answer: 0,
    },
    {
        id: 28,
        question: "कविता-पाठ किससे संबंधित है?",
        options: ["पद्य", "गद्य", "व्याकरण", "पत्र"],
        answer: 0,
    },
    {
        id: 29,
        question: "चौपाई किसका उदाहरण है?",
        options: ["गद्य", "पद्य", "व्याकरण", "रचना"],
        answer: 1,
    },
    {
        id: 30,
        question: "पद्य शिक्षण में किसका विकास होता है?",
        options: ["संवेदनशीलता", "क्रोध", "आलस्य", "भय"],
        answer: 0,
    },

    {
        id: 31,
        question: "व्याकरण किसका अध्ययन है?",
        options: ["भाषा के नियमों का", "खेलों का", "विज्ञान का", "चित्रों का"],
        answer: 0,
    },
    {
        id: 32,
        question: "संज्ञा व्याकरण का कौन-सा भाग है?",
        options: ["शब्द भेद", "अलंकार", "छंद", "रस"],
        answer: 0,
    },
    {
        id: 33,
        question: "व्याकरण भाषा को कैसा बनाता है?",
        options: ["शुद्ध", "कठिन", "असंगत", "अस्पष्ट"],
        answer: 0,
    },
    {
        id: 34,
        question: "निम्न में कौन व्याकरण का भाग है?",
        options: ["सर्वनाम", "कविता", "कहानी", "पत्र"],
        answer: 0,
    },
    {
        id: 35,
        question: "व्याकरण शिक्षण में कौन-सी विधि प्रयुक्त होती है?",
        options: ["आगमन विधि", "खेल विधि", "अभिनय विधि", "चित्र विधि"],
        answer: 0,
    },
    {
        id: 36,
        question: "व्याकरण का मुख्य उद्देश्य क्या है?",
        options: ["शुद्ध भाषा प्रयोग", "खेल", "चित्रकारी", "संगीत"],
        answer: 0,
    },
    {
        id: 37,
        question: "क्रिया किससे संबंधित है?",
        options: ["कार्य", "व्यक्ति", "स्थान", "वस्तु"],
        answer: 0,
    },
    {
        id: 38,
        question: "भाषा की संरचना का आधार क्या है?",
        options: ["व्याकरण", "कविता", "कहानी", "चित्रकला"],
        answer: 0,
    },
    {
        id: 39,
        question: "NCF-2005 ने व्याकरण को कैसा बनाने पर बल दिया?",
        options: ["संदर्भ आधारित", "कठिन", "रटंत", "निष्क्रिय"],
        answer: 0,
    },
    {
        id: 40,
        question: "भाषा की शुद्धता किस पर निर्भर करती है?",
        options: ["व्याकरण", "खेल", "चित्रकला", "संगीत"],
        answer: 0,
    },

    {
        id: 41,
        question: "रचना का मुख्य उद्देश्य क्या है?",
        options: ["विचार अभिव्यक्ति", "खेल", "चित्र बनाना", "परीक्षा देना"],
        answer: 0,
    },
    {
        id: 42,
        question: "निबंध किसका प्रकार है?",
        options: ["रचना", "पद्य", "व्याकरण", "पत्र"],
        answer: 0,
    },
    {
        id: 43,
        question: "रचना विद्यार्थियों में किसका विकास करती है?",
        options: ["सृजनात्मकता", "आलस्य", "भय", "तनाव"],
        answer: 0,
    },
    {
        id: 44,
        question: "पत्र कितने प्रकार के होते हैं?",
        options: ["1", "2", "3", "4"],
        answer: 1,
    },
    {
        id: 45,
        question: "मित्र को लिखा गया पत्र कौन-सा होता है?",
        options: ["औपचारिक", "अनौपचारिक", "कार्यालयीन", "सरकारी"],
        answer: 1,
    },
    {
        id: 46,
        question: "प्रधानाचार्य को अवकाश हेतु लिखा गया पत्र कौन-सा है?",
        options: ["व्यक्तिगत पत्र", "अनौपचारिक पत्र", "औपचारिक पत्र", "पारिवारिक पत्र"],
        answer: 2,
    },
    {
        id: 47,
        question: "पत्र लेखन का मुख्य उद्देश्य क्या है?",
        options: ["लिखित संप्रेषण", "खेल", "चित्रकारी", "मनोरंजन"],
        answer: 0,
    },
    {
        id: 48,
        question: "पत्र में दिनांक कहाँ लिखा जाता है?",
        options: ["प्रारंभ में", "अंत में", "बीच में", "कहीं भी"],
        answer: 0,
    },
    {
        id: 49,
        question: "रचना शिक्षण में कौन-सी गतिविधि उपयोगी है?",
        options: ["चित्र-वर्णन", "दंड", "परीक्षा", "अनुशासन"],
        answer: 0,
    },
    {
        id: 50,
        question: "पत्र का मुख्य भाग किसे कहा जाता है?",
        options: ["संबोधन", "विषय-वस्तु", "दिनांक", "हस्ताक्षर"],
        answer: 1,
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
                        Hindi Methodology 4.3 - Part 2
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