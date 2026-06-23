"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "पाठ योजना का मुख्य उद्देश्य क्या है?",
        options: [
            "समय व्यतीत करना",
            "शिक्षण को व्यवस्थित बनाना",
            "परीक्षा लेना",
            "अनुशासन बनाए रखना",
        ],
        answer: 1,
    },
    {
        id: 2,
        question: "पाठ योजना का प्रथम चरण क्या है?",
        options: ["मूल्यांकन", "शिक्षण उद्देश्य", "गृहकार्य", "पुनरावृत्ति"],
        answer: 1,
    },
    {
        id: 3,
        question: "पाठ योजना को कौन तैयार करता है?",
        options: ["विद्यार्थी", "प्रधानाध्यापक", "शिक्षक", "अभिभावक"],
        answer: 2,
    },
    {
        id: 4,
        question: "पाठ योजना शिक्षण को कैसा बनाती है?",
        options: ["अव्यवस्थित", "कठिन", "उद्देश्यपूर्ण", "अस्पष्ट"],
        answer: 2,
    },
    {
        id: 5,
        question: "पाठ योजना का एक घटक कौन-सा है?",
        options: ["मूल्यांकन", "खेल", "अवकाश", "भोजन"],
        answer: 0,
    },
    {
        id: 6,
        question: "NCF-2005 किस पर बल देता है?",
        options: [
            "रटंत शिक्षा",
            "बालक-केंद्रित शिक्षा",
            "दंड आधारित शिक्षा",
            "परीक्षा आधारित शिक्षा",
        ],
        answer: 1,
    },
    {
        id: 7,
        question: "पाठ योजना में शिक्षण सामग्री क्यों उपयोग की जाती है?",
        options: [
            "समय व्यतीत करने हेतु",
            "शिक्षण को प्रभावी बनाने हेतु",
            "परीक्षा हेतु",
            "अनुशासन हेतु",
        ],
        answer: 1,
    },
    {
        id: 8,
        question: "पाठ योजना का अंतिम चरण कौन-सा होता है?",
        options: ["मूल्यांकन", "प्रस्तुतीकरण", "प्रस्तावना", "पूर्वज्ञान"],
        answer: 0,
    },
    {
        id: 9,
        question: "NEP-2020 किस प्रकार के अधिगम पर बल देती है?",
        options: [
            "रटंत अधिगम",
            "अनुभवात्मक अधिगम",
            "दंड आधारित अधिगम",
            "परीक्षा आधारित अधिगम",
        ],
        answer: 1,
    },
    {
        id: 10,
        question: "पाठ योजना किसे सरल बनाती है?",
        options: ["शिक्षण प्रक्रिया", "खेल", "प्रशासन", "अनुशासन"],
        answer: 0,
    },

    {
        id: 11,
        question: "गद्य भाषा का कौन-सा रूप है?",
        options: ["लयात्मक", "सामान्य", "संगीतात्मक", "सांकेतिक"],
        answer: 1,
    },
    {
        id: 12,
        question: "निम्न में कौन गद्य का रूप है?",
        options: ["कविता", "दोहा", "कहानी", "गीत"],
        answer: 2,
    },
    {
        id: 13,
        question: "गद्य शिक्षण का उद्देश्य क्या है?",
        options: ["भाषा विकास", "खेल", "चित्रकला", "नृत्य"],
        answer: 0,
    },
    {
        id: 14,
        question: "गद्य शिक्षण में कौन-सी विधि प्रयुक्त होती है?",
        options: ["प्रश्नोत्तर विधि", "खेल विधि", "योग विधि", "चित्र विधि"],
        answer: 0,
    },
    {
        id: 15,
        question: "गद्य का प्रयोग कहाँ अधिक होता है?",
        options: [
            "दैनिक जीवन में",
            "संगीत में",
            "चित्रकला में",
            "नृत्य में",
        ],
        answer: 0,
    },
    {
        id: 16,
        question: "यात्रा-वृत्तांत किसका प्रकार है?",
        options: ["गद्य", "पद्य", "नाटक", "व्याकरण"],
        answer: 0,
    },
    {
        id: 17,
        question: "गद्य विद्यार्थियों में किसका विकास करता है?",
        options: [
            "शब्द-भंडार",
            "कल्पनाशक्ति",
            "पठन क्षमता",
            "उपर्युक्त सभी",
        ],
        answer: 3,
    },
    {
        id: 18,
        question: "जीवनी किसका रूप है?",
        options: ["पद्य", "गद्य", "व्याकरण", "पत्र"],
        answer: 1,
    },
    {
        id: 19,
        question: "गद्य शिक्षण में विद्यार्थी की क्या भूमिका होती है?",
        options: ["निष्क्रिय", "सक्रिय", "मौन", "स्वतंत्र"],
        answer: 1,
    },
    {
        id: 20,
        question: "गद्य शिक्षण में सबसे महत्वपूर्ण क्या है?",
        options: ["समझ", "दंड", "अनुशासन", "परीक्षा"],
        answer: 0,
    },

    {
        id: 21,
        question: "पद्य भाषा का कौन-सा रूप है?",
        options: ["सामान्य", "लयात्मक", "वैज्ञानिक", "तकनीकी"],
        answer: 1,
    },
    {
        id: 22,
        question: "निम्नलिखित में कौन पद्य का उदाहरण है?",
        options: ["कहानी", "निबंध", "कविता", "पत्र"],
        answer: 2,
    },
    {
        id: 23,
        question: "पद्य शिक्षण का मुख्य उद्देश्य क्या है?",
        options: ["भाव विकास", "गणना", "खेल", "विज्ञान"],
        answer: 0,
    },
    {
        id: 24,
        question: "पद्य शिक्षण में कौन-सी गतिविधि प्रयोग की जाती है?",
        options: [
            "सस्वर वाचन",
            "चित्रांकन",
            "प्रयोगशाला कार्य",
            "खेल",
        ],
        answer: 0,
    },
    {
        id: 25,
        question: "दोहा किसका रूप है?",
        options: ["गद्य", "पद्य", "व्याकरण", "रचना"],
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
                        Hindi Methodology 4.3 - Part 1
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