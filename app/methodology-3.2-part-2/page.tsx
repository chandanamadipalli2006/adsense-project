"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "वाचन संबंधी सामान्य दोष कौन-सा है?",
        options: ["अशुद्ध उच्चारण", "सही विराम", "स्पष्टता", "प्रवाह"],
        answer: 0,
    },
    {
        id: 27,
        question: "शब्द छोड़कर पढ़ना किससे संबंधित है?",
        options: ["वाचन दोष", "लेखन दोष", "श्रवण दोष", "व्याकरण दोष"],
        answer: 0,
    },
    {
        id: 28,
        question: "वाचन दोष दूर करने का सर्वोत्तम उपाय क्या है?",
        options: ["अभ्यास", "दंड", "परीक्षा", "अवकाश"],
        answer: 0,
    },
    {
        id: 29,
        question: "आदर्श वाचन किसके सुधार में सहायक है?",
        options: ["वाचन कौशल", "चित्रकला", "खेल", "गणित"],
        answer: 0,
    },
    {
        id: 30,
        question: "लेखन किस प्रकार का कौशल है?",
        options: ["ग्रहणात्मक", "अभिव्यक्तात्मक", "निष्क्रिय", "श्रवणात्मक"],
        answer: 1,
    },
    {
        id: 31,
        question: "भाषा का सबसे जटिल कौशल कौन-सा है?",
        options: ["श्रवण", "भाषण", "पठन", "लेखन"],
        answer: 3,
    },
    {
        id: 32,
        question: "लेखन से किसका विकास होता है?",
        options: ["सृजनात्मकता", "तार्किकता", "अभिव्यक्ति", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 33,
        question: "निबंध लेखन किस कौशल से संबंधित है?",
        options: ["श्रवण", "भाषण", "पठन", "लेखन"],
        answer: 3,
    },
    {
        id: 34,
        question: "लेखन में सबसे अधिक महत्व किसका है?",
        options: ["शुद्धता", "गति", "खेल", "चित्र"],
        answer: 0,
    },
    {
        id: 35,
        question: "लेखन के नियमों में कौन-सा शामिल है?",
        options: [
            "सही वर्तनी",
            "सही विराम चिह्न",
            "व्याकरणिक शुद्धता",
            "उपर्युक्त सभी",
        ],
        answer: 3,
    },
    {
        id: 36,
        question: "श्रुतिलेख किस कौशल के विकास में सहायक है?",
        options: ["लेखन", "खेल", "चित्रांकन", "संगीत"],
        answer: 0,
    },
    {
        id: 37,
        question: "अक्षर विन्यास का संबंध किससे है?",
        options: ["लिखावट", "श्रवण", "भाषण", "वाचन"],
        answer: 0,
    },
    {
        id: 38,
        question: "अच्छा अक्षर विन्यास क्या बढ़ाता है?",
        options: ["पठनीयता", "कठिनाई", "भ्रम", "त्रुटियाँ"],
        answer: 0,
    },
    {
        id: 39,
        question: "सुलेख अभ्यास किसके लिए उपयोगी है?",
        options: ["अक्षर विन्यास", "श्रवण", "वाचन", "भाषण"],
        answer: 0,
    },
    {
        id: 40,
        question: "स्पष्ट लिखावट का लाभ क्या है?",
        options: [
            "सामग्री समझने में सुविधा",
            "समय की बर्बादी",
            "त्रुटियाँ बढ़ना",
            "भ्रम उत्पन्न होना",
        ],
        answer: 0,
    },
    {
        id: 41,
        question: "भाषा के चारों कौशलों का संबंध कैसा है?",
        options: ["अलग-अलग", "परस्पर संबंधित", "विरोधी", "असंबंधित"],
        answer: 1,
    },
    {
        id: 42,
        question: "श्रवण से किस कौशल का विकास होता है?",
        options: ["भाषण", "लेखन", "चित्रांकन", "गणना"],
        answer: 0,
    },
    {
        id: 43,
        question: "पठन से किस कौशल का विकास होता है?",
        options: ["लेखन", "खेल", "चित्रकला", "नृत्य"],
        answer: 0,
    },
    {
        id: 44,
        question: "कौशलों के समन्वय का उद्देश्य क्या है?",
        options: [
            "समग्र भाषा विकास",
            "परीक्षा",
            "अनुशासन",
            "गृहकार्य",
        ],
        answer: 0,
    },
    {
        id: 45,
        question: "NCF-2005 किस पर बल देता है?",
        options: [
            "भाषा कौशलों का विकास",
            "दंड",
            "रटंत शिक्षा",
            "केवल परीक्षा",
        ],
        answer: 0,
    },
    {
        id: 46,
        question: "NEP-2020 किस प्रकार के अधिगम को बढ़ावा देती है?",
        options: [
            "संवादात्मक",
            "अनुभवात्मक",
            "बहुभाषिक",
            "उपर्युक्त सभी",
        ],
        answer: 3,
    },
    {
        id: 47,
        question: "श्रवण और पठन को क्या कहा जाता है?",
        options: [
            "ग्रहणात्मक कौशल",
            "अभिव्यक्तात्मक कौशल",
            "लेखन कौशल",
            "मौखिक कौशल",
        ],
        answer: 0,
    },
    {
        id: 48,
        question: "भाषण और लेखन को क्या कहा जाता है?",
        options: [
            "ग्रहणात्मक कौशल",
            "अभिव्यक्तात्मक कौशल",
            "निष्क्रिय कौशल",
            "वाचन कौशल",
        ],
        answer: 1,
    },
    {
        id: 49,
        question: "भाषा शिक्षण का अंतिम लक्ष्य क्या है?",
        options: [
            "प्रभावी संप्रेषण क्षमता का विकास",
            "केवल परीक्षा में सफलता",
            "केवल व्याकरण ज्ञान",
            "केवल लेखन कौशल",
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
                        Hindi Methodology 3.2 - Part 2
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