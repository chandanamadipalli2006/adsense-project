"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "शिक्षक का नैतिक गुण है—",
        options: [
            "ईमानदारी",
            "क्रोध",
            "पक्षपात",
            "अहंकार",
        ],
        answer: 0,
    },
    {
        id: 27,
        question: "NCF किस वर्ष प्रकाशित हुई?",
        options: [
            "2003",
            "2004",
            "2005",
            "2006",
        ],
        answer: 2,
    },
    {
        id: 28,
        question: "अच्छा शिक्षक विद्यार्थियों में विकसित करता है—",
        options: [
            "आलोचनात्मक चिंतन",
            "भय",
            "तनाव",
            "संकोच",
        ],
        answer: 0,
    },
    {
        id: 29,
        question: "कोठारी आयोग की रिपोर्ट किस वर्ष प्रस्तुत की गई?",
        options: [
            "1964",
            "1965",
            "1966",
            "1968",
        ],
        answer: 2,
    },
    {
        id: 30,
        question: "कोठारी आयोग का गठन कब हुआ?",
        options: [
            "1962",
            "1963",
            "1964",
            "1965",
        ],
        answer: 2,
    },
    {
        id: 31,
        question: "कक्षा को रोचक बनाना किसका दायित्व है?",
        options: [
            "छात्र",
            "शिक्षक",
            "अभिभावक",
            "प्रधानाचार्य",
        ],
        answer: 1,
    },
    {
        id: 32,
        question: "अच्छा शिक्षक होता है—",
        options: [
            "अच्छा श्रोता",
            "दंडाधिकारी",
            "नियंत्रक",
            "निरीक्षक",
        ],
        answer: 0,
    },
    {
        id: 33,
        question: "आदर्श शिक्षक विद्यार्थियों में विकसित करता है—",
        options: [
            "जीवन कौशल",
            "भय",
            "तनाव",
            "संकोच",
        ],
        answer: 0,
    },
    {
        id: 34,
        question: "शिक्षक विद्यार्थियों के प्रति होना चाहिए—",
        options: [
            "संवेदनशील",
            "कठोर",
            "उदासीन",
            "पक्षपाती",
        ],
        answer: 0,
    },
    {
        id: 35,
        question: "अच्छे शिक्षक का सर्वोत्तम गुण है—",
        options: [
            "प्रेरणादायक व्यक्तित्व",
            "कठोरता",
            "दंड",
            "नियंत्रण",
        ],
        answer: 0,
    },
    {
        id: 36,
        question: "शिक्षक की व्यावसायिक उन्नति का आधार क्या है?",
        options: [
            "वेतन",
            "सतत अधिगम",
            "अनुभव",
            "परीक्षा",
        ],
        answer: 1,
    },
    {
        id: 37,
        question: "आदर्श शिक्षक का व्यवहार कैसा होता है?",
        options: [
            "न्यायपूर्ण",
            "कठोर",
            "पक्षपातपूर्ण",
            "उदासीन",
        ],
        answer: 0,
    },
    {
        id: 38,
        question: "राष्ट्र निर्माण में महत्वपूर्ण भूमिका कौन निभाता है?",
        options: [
            "व्यापारी",
            "किसान",
            "शिक्षक",
            "अधिकारी",
        ],
        answer: 2,
    },
    {
        id: 39,
        question: "शिक्षक को अभिभावकों से क्या बनाए रखना चाहिए?",
        options: [
            "दूरी",
            "सहयोग",
            "विरोध",
            "प्रतिस्पर्धा",
        ],
        answer: 1,
    },
    {
        id: 40,
        question: "आधुनिक शिक्षक की विशेषता क्या है?",
        options: [
            "तकनीकी दक्षता",
            "कठोरता",
            "दंड",
            "नियंत्रण",
        ],
        answer: 0,
    },
    {
        id: 41,
        question: "हिंदी शिक्षक का विशेष दायित्व क्या है?",
        options: [
            "विज्ञान पढ़ाना",
            "खेल कराना",
            "अनुशासन बनाए रखना",
            "भाषा एवं साहित्य के प्रति रुचि विकसित करना",
        ],
        answer: 3,
    },
    {
        id: 42,
        question: "अच्छा शिक्षक छात्रों में क्या विकसित करता है?",
        options: [
            "निर्भरता",
            "आत्मनिर्भरता",
            "भय",
            "तनाव",
        ],
        answer: 1,
    },
    {
        id: 43,
        question: "भाषा शिक्षण का केंद्र कौन है?",
        options: [
            "शिक्षक",
            "विद्यार्थी",
            "पुस्तक",
            "परीक्षा",
        ],
        answer: 1,
    },
    {
        id: 44,
        question: "अच्छा शिक्षक कौन-सी शिक्षण पद्धति अपनाता है?",
        options: [
            "रटंत शिक्षण",
            "व्याख्यान विधि",
            "गतिविधि आधारित शिक्षण",
            "दंड आधारित शिक्षण",
        ],
        answer: 2,
    },
    {
        id: 45,
        question: "आदर्श शिक्षक का एक गुण है—",
        options: [
            "समयपालन",
            "क्रोध",
            "पक्षपात",
            "अहंकार",
        ],
        answer: 0,
    },
    {
        id: 46,
        question: "अच्छे शिक्षक की पहचान क्या है?",
        options: [
            "नकारात्मक सोच",
            "कठोरता",
            "दंड",
            "सकारात्मक दृष्टिकोण",
        ],
        answer: 3,
    },
    {
        id: 47,
        question: "शिक्षक को किसका सम्मान करना चाहिए?",
        options: [
            "केवल मेधावी विद्यार्थियों का",
            "केवल अनुशासित विद्यार्थियों का",
            "सभी विद्यार्थियों का",
            "केवल प्रतिभाशाली विद्यार्थियों का",
        ],
        answer: 2,
    },
    {
        id: 48,
        question: "शिक्षक को विद्यार्थियों में क्या विकसित करना चाहिए?",
        options: [
            "भय",
            "तनाव",
            "सृजनात्मकता",
            "संकोच",
        ],
        answer: 2,
    },
    {
        id: 49,
        question: "आदर्श हिंदी अध्यापक का प्रमुख उद्देश्य क्या है?",
        options: [
            "केवल व्याकरण पढ़ाना",
            "भाषा दक्षता विकसित करना",
            "केवल परीक्षा लेना",
            "केवल गृहकार्य देना",
        ],
        answer: 1,
    },
    {
        id: 50,
        question: "आदर्श हिंदी अध्यापक कौन है?",
        options: [
            "केवल भाषा विशेषज्ञ",
            "केवल साहित्यकार",
            "केवल मार्गदर्शक",
            "भाषा विशेषज्ञ, साहित्य प्रेमी, संवेदनशील मार्गदर्शक एवं नैतिक व्यक्तित्व वाला शिक्षक",
        ],
        answer: 3,
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
                        Hindi Methodology 2.1 and 2.2 - Part 2
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