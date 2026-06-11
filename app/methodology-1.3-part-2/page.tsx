"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "त्रिभाषा सूत्र का संबंध है—",
        options: [
            "विज्ञान से",
            "भाषा शिक्षा से",
            "गणित से",
            "कंप्यूटर से",
        ],
        answer: 1,
    },
    {
        id: 27,
        question: "भाषा शिक्षण से विकसित होता है—",
        options: [
            "व्यक्तित्व",
            "केवल लेखन",
            "केवल पठन",
            "केवल स्मरण",
        ],
        answer: 0,
    },
    {
        id: 28,
        question: "भाषा शिक्षण का प्रमुख आधार है—",
        options: [
            "संप्रेषण",
            "अनुशासन",
            "परीक्षा",
            "अंक",
        ],
        answer: 0,
    },
    {
        id: 29,
        question: "भारत में संपर्क भाषा के रूप में व्यापक रूप से प्रयुक्त भाषा है—",
        options: [
            "तेलुगु",
            "हिंदी",
            "तमिल",
            "कन्नड़",
        ],
        answer: 1,
    },
    {
        id: 30,
        question: "त्रिभाषा सूत्र विद्यार्थियों में विकसित करता है—",
        options: [
            "बहुभाषिक दक्षता",
            "संकोच",
            "अलगाव",
            "निर्भरता",
        ],
        answer: 0,
    },
    {
        id: 31,
        question: "भाषा समस्या का समाधान माना जाता है—",
        options: [
            "एकभाषा सूत्र",
            "द्विभाषा सूत्र",
            "त्रिभाषा सूत्र",
            "पंचभाषा सूत्र",
        ],
        answer: 2,
    },
    {
        id: 32,
        question: "त्रिभाषा सूत्र के अंतर्गत अंग्रेज़ी का महत्व है—",
        options: [
            "संपर्क भाषा",
            "मातृभाषा",
            "क्षेत्रीय भाषा",
            "राजभाषा",
        ],
        answer: 0,
    },
    {
        id: 33,
        question: "क्षेत्रीय भाषा का महत्व है—",
        options: [
            "सांस्कृतिक संरक्षण",
            "विदेशी संपर्क",
            "व्यापार",
            "तकनीक",
        ],
        answer: 0,
    },
    {
        id: 34,
        question: "भाषा शिक्षण में व्याकरण का उद्देश्य है—",
        options: [
            "शुद्ध भाषा प्रयोग",
            "कठिनाई बढ़ाना",
            "रटना",
            "परीक्षा लेना",
        ],
        answer: 0,
    },
    {
        id: 35,
        question: "त्रिभाषा सूत्र का लाभ है—",
        options: [
            "भाषायी समन्वय",
            "भाषायी संघर्ष",
            "अलगाववाद",
            "भ्रम",
        ],
        answer: 0,
    },
    {
        id: 36,
        question: "किस राज्य ने दो-भाषा नीति अपनाई?",
        options: [
            "आंध्र प्रदेश",
            "तमिलनाडु",
            "कर्नाटक",
            "महाराष्ट्र",
        ],
        answer: 1,
    },
    {
        id: 37,
        question: "राष्ट्रीय शिक्षा नीति 1968 का प्रमुख भाषा संबंधी प्रावधान था—",
        options: [
            "त्रिभाषा सूत्र",
            "द्विभाषा सूत्र",
            "एकभाषा सूत्र",
            "पंचभाषा सूत्र",
        ],
        answer: 0,
    },
    {
        id: 38,
        question: "भाषा शिक्षण का सांस्कृतिक उद्देश्य है—",
        options: [
            "सांस्कृतिक चेतना विकसित करना",
            "प्रतियोगिता बढ़ाना",
            "विभाजन करना",
            "राजनीति सिखाना",
        ],
        answer: 0,
    },
    {
        id: 39,
        question: "भाषा शिक्षण से किसका विकास होता है?",
        options: [
            "चिंतन शक्ति",
            "कल्पना शक्ति",
            "अभिव्यक्ति शक्ति",
            "उपर्युक्त सभी",
        ],
        answer: 3,
    },
    {
        id: 40,
        question: "भाषा शिक्षण का अंतिम लक्ष्य है—",
        options: [
            "प्रभावी संचार",
            "केवल परीक्षा",
            "केवल व्याकरण",
            "केवल साहित्य",
        ],
        answer: 0,
    },
    {
        id: 41,
        question: "त्रिभाषा सूत्र का एक लाभ है—",
        options: [
            "राष्ट्रीय एकता",
            "भाषाई विवाद",
            "विभाजन",
            "संघर्ष",
        ],
        answer: 0,
    },
    {
        id: 42,
        question: "कोठारी आयोग को किस नाम से भी जाना जाता है?",
        options: [
            "शिक्षा आयोग 1964-66",
            "विश्वविद्यालय आयोग",
            "माध्यमिक आयोग",
            "राष्ट्रीय आयोग",
        ],
        answer: 0,
    },
    {
        id: 43,
        question: "भाषा शिक्षण विद्यार्थियों में क्या विकसित करता है?",
        options: [
            "आत्मविश्वास",
            "भय",
            "संकोच",
            "निष्क्रियता",
        ],
        answer: 0,
    },
    {
        id: 44,
        question: "त्रिभाषा सूत्र का उद्देश्य है—",
        options: [
            "भाषाई संतुलन",
            "भाषाई असंतुलन",
            "भाषा समाप्ति",
            "भाषा संघर्ष",
        ],
        answer: 0,
    },
    {
        id: 45,
        question: "भाषा शिक्षण का राष्ट्रीय उद्देश्य है—",
        options: [
            "राष्ट्रीय एकता",
            "राजनीति",
            "प्रतियोगिता",
            "क्षेत्रवाद",
        ],
        answer: 0,
    },
    {
        id: 46,
        question: "त्रिभाषा सूत्र में प्रथम स्थान किसे दिया जाता है?",
        options: [
            "मातृभाषा/क्षेत्रीय भाषा",
            "अंग्रेज़ी",
            "हिंदी",
            "संस्कृत",
        ],
        answer: 0,
    },
    {
        id: 47,
        question: "भाषा शिक्षण का मनोवैज्ञानिक आधार है—",
        options: [
            "बालक की भाषा-अधिगम क्षमता",
            "परीक्षा",
            "पाठ्यपुस्तक",
            "अंक",
        ],
        answer: 0,
    },
    {
        id: 48,
        question: "त्रिभाषा सूत्र का उद्देश्य विद्यार्थियों को बनाना है—",
        options: [
            "बहुभाषी",
            "एकभाषी",
            "निष्क्रिय",
            "निर्भर",
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
                        Hindi Methodology 1.3 - Part 2
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