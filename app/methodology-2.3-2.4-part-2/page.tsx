"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "भाषा शिक्षण का अंतिम उद्देश्य है—",
        options: [
            "परीक्षा में अंक",
            "प्रभावी संप्रेषण",
            "गृहकार्य",
            "अनुशासन",
        ],
        answer: 1,
    },
    {
        id: 27,
        question: "कौन-सा कौशल सबसे पहले विकसित होता है?",
        options: [
            "लिखना",
            "पढ़ना",
            "सुनना",
            "व्याकरण",
        ],
        answer: 2,
    },
    {
        id: 28,
        question: '"क्रियात्मकता का सिद्धांत" किस पर बल देता है?',
        options: [
            "अभ्यास",
            "व्याख्यान",
            "अनुशासन",
            "परीक्षा",
        ],
        answer: 0,
    },
    {
        id: 29,
        question: "भाषा शिक्षण में वाद-विवाद किस कौशल को बढ़ाता है?",
        options: [
            "बोलना",
            "सुनना",
            "दोनों",
            "लिखना",
        ],
        answer: 2,
    },
    {
        id: 30,
        question: "NCF-2005 किस प्रकार के शिक्षण पर बल देता है?",
        options: [
            "बालक-केंद्रित",
            "शिक्षक-केंद्रित",
            "परीक्षा-केंद्रित",
            "पुस्तक-केंद्रित",
        ],
        answer: 0,
    },
    {
        id: 31,
        question: '"स्थूल से सूक्ष्म" का उदाहरण है—',
        options: [
            "कहानी से शब्द",
            "शब्द से कहानी",
            "अक्षर से शब्द",
            "ध्वनि से अक्षर",
        ],
        answer: 0,
    },
    {
        id: 32,
        question: "भाषा शिक्षण में मूल्यांकन होना चाहिए—",
        options: [
            "वार्षिक",
            "निरंतर",
            "केवल अर्धवार्षिक",
            "केवल अंतिम",
        ],
        answer: 1,
    },
    {
        id: 33,
        question: "भाषा का प्रमुख कार्य है—",
        options: [
            "संप्रेषण",
            "परीक्षा",
            "मनोरंजन",
            "अनुशासन",
        ],
        answer: 0,
    },
    {
        id: 34,
        question: "भाषा शिक्षण में कहानी-कथन किस विधि का उदाहरण है?",
        options: [
            "गतिविधि आधारित",
            "दंड आधारित",
            "व्याख्यान आधारित",
            "परीक्षा आधारित",
        ],
        answer: 0,
    },
    {
        id: 35,
        question: "त्रिभाषा सूत्र को किस राष्ट्रीय शिक्षा नीति में स्वीकार किया गया?",
        options: [
            "1968",
            "1986",
            "1992",
            "2020",
        ],
        answer: 0,
    },
    {
        id: 36,
        question: '"ज्ञात से अज्ञात" सूत्र का आधार क्या है?',
        options: [
            "पूर्व ज्ञान",
            "परीक्षा",
            "पाठ्यपुस्तक",
            "अनुशासन",
        ],
        answer: 0,
    },
    {
        id: 37,
        question: "भाषा शिक्षण में कौन-सा कौशल सबसे अंत में विकसित होता है?",
        options: [
            "सुनना",
            "बोलना",
            "पढ़ना",
            "लिखना",
        ],
        answer: 3,
    },
    {
        id: 38,
        question: "NEP-2020 किस पर बल देती है?",
        options: [
            "रटंत शिक्षा",
            "संवादात्मक शिक्षा",
            "दंड",
            "परीक्षा",
        ],
        answer: 1,
    },
    {
        id: 39,
        question: "भाषा शिक्षण में समूह कार्य का उद्देश्य है—",
        options: [
            "सहयोगात्मक अधिगम",
            "अनुशासन",
            "मूल्यांकन",
            "गृहकार्य",
        ],
        answer: 0,
    },
    {
        id: 40,
        question: "भाषा शिक्षण का कौन-सा सूत्र संपूर्ण से भाग की ओर जाता है?",
        options: [
            "ज्ञात से अज्ञात",
            "पूर्ण से अंश",
            "सरल से कठिन",
            "विशेष से सामान्य",
        ],
        answer: 1,
    },
    {
        id: 41,
        question: "NCFTE-2009 शिक्षक को क्या मानती है?",
        options: [
            "ज्ञान का स्रोत",
            "चिंतनशील मार्गदर्शक",
            "नियंत्रक",
            "निरीक्षक",
        ],
        answer: 1,
    },
    {
        id: 42,
        question: "भाषा शिक्षण का कौन-सा सिद्धांत विद्यार्थियों की रुचि बढ़ाता है?",
        options: [
            "गतिविधि आधारित शिक्षण",
            "रटंत शिक्षण",
            "दंड आधारित शिक्षण",
            "व्याख्यान विधि",
        ],
        answer: 0,
    },
    {
        id: 43,
        question: "भाषा शिक्षण में व्याकरण सिखाने का उद्देश्य है—",
        options: [
            "भाषा शुद्धता",
            "परीक्षा",
            "अनुशासन",
            "गृहकार्य",
        ],
        answer: 0,
    },
    {
        id: 44,
        question: "भाषा शिक्षण का कौन-सा सिद्धांत तार्किकता विकसित करता है?",
        options: [
            "विशेष से सामान्य",
            "कठिन से सरल",
            "अज्ञात से ज्ञात",
            "सूक्ष्म से स्थूल",
        ],
        answer: 0,
    },
    {
        id: 45,
        question: "भाषा शिक्षण में रचनात्मकता विकसित होती है—",
        options: [
            "लेखन से",
            "दंड से",
            "परीक्षा से",
            "अनुशासन से",
        ],
        answer: 0,
    },
    {
        id: 46,
        question: "सतत मूल्यांकन का उद्देश्य है—",
        options: [
            "प्रगति की निगरानी",
            "दंड",
            "प्रतियोगिता",
            "गृहकार्य",
        ],
        answer: 0,
    },
    {
        id: 47,
        question: "भाषा शिक्षण में शिक्षक की भूमिका है—",
        options: [
            "सहयोगी",
            "नियंत्रक",
            "दंडाधिकारी",
            "निरीक्षक",
        ],
        answer: 0,
    },
    {
        id: 48,
        question: "भाषा शिक्षण किस प्रकार की प्रक्रिया है?",
        options: [
            "सक्रिय",
            "निष्क्रिय",
            "यांत्रिक",
            "स्थिर",
        ],
        answer: 0,
    },
    {
        id: 49,
        question: "भाषा शिक्षण का सर्वोत्तम सिद्धांत माना जाता है—",
        options: [
            "ज्ञात से अज्ञात",
            "कठिन से सरल",
            "सूक्ष्म से स्थूल",
            "अज्ञात से ज्ञात",
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
                        Hindi Methodology 2.3 and 2.4 - Part 2
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