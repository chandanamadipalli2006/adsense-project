"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "उत्तम परीक्षा की पहली विशेषता क्या है?",
        options: ["वैधता", "दंड", "गृहकार्य", "अवकाश"],
        answer: 0,
    },
    {
        id: 27,
        question: "वैधता का अर्थ क्या है?",
        options: [
            "वही मापना जिसके लिए परीक्षा बनाई गई हो",
            "अधिक प्रश्न देना",
            "कम प्रश्न देना",
            "कठिन प्रश्न देना"
        ],
        answer: 0,
    },
    {
        id: 28,
        question: "विश्वसनीयता का अर्थ क्या है?",
        options: [
            "समान परिणाम देना",
            "कठिन प्रश्न देना",
            "कम अंक देना",
            "अधिक समय देना"
        ],
        answer: 0,
    },
    {
        id: 29,
        question: "वस्तुनिष्ठता का अर्थ क्या है?",
        options: [
            "पक्षपात रहित होना",
            "कठिन होना",
            "लंबी परीक्षा होना",
            "मौखिक होना"
        ],
        answer: 0,
    },
    {
        id: 30,
        question: "व्यावहारिकता का अर्थ क्या है?",
        options: [
            "लागू करने योग्य होना",
            "कठिन होना",
            "लंबी होना",
            "मौखिक होना"
        ],
        answer: 0,
    },
    {
        id: 31,
        question: "अच्छी परीक्षा कैसी होनी चाहिए?",
        options: [
            "विश्वसनीय",
            "वैध",
            "वस्तुनिष्ठ",
            "उपर्युक्त सभी"
        ],
        answer: 3,
    },
    {
        id: 32,
        question: "परीक्षा में पक्षपात नहीं होना चाहिए, यह किस गुण से संबंधित है?",
        options: [
            "वस्तुनिष्ठता",
            "विश्वसनीयता",
            "वैधता",
            "व्यापकता"
        ],
        answer: 0,
    },
    {
        id: 33,
        question: "यदि परीक्षा सही क्षमता मापती है तो उसमें कौन-सा गुण है?",
        options: [
            "वैधता",
            "दंड",
            "विश्वसनीयता",
            "कठिनता"
        ],
        answer: 0,
    },
    {
        id: 34,
        question: "उत्तम परीक्षा में किसे महत्व दिया जाता है?",
        options: [
            "निष्पक्षता",
            "पक्षपात",
            "दंड",
            "भय"
        ],
        answer: 0,
    },
    {
        id: 35,
        question: "NEP-2020 किस मूल्यांकन पर बल देती है?",
        options: [
            "योग्यता आधारित",
            "रटंत आधारित",
            "दंड आधारित",
            "वार्षिक आधारित"
        ],
        answer: 0,
    },
    {
        id: 36,
        question: "उत्तम परीक्षा का उद्देश्य क्या है?",
        options: [
            "वास्तविक उपलब्धि मापना",
            "दंड देना",
            "भय उत्पन्न करना",
            "अवकाश देना"
        ],
        answer: 0,
    },
    {
        id: 37,
        question: "परीक्षा में समय और लागत का संबंध किससे है?",
        options: [
            "व्यावहारिकता",
            "वैधता",
            "विश्वसनीयता",
            "वस्तुनिष्ठता"
        ],
        answer: 0,
    },
    {
        id: 38,
        question: "परीक्षा परिणामों की स्थिरता किस गुण से संबंधित है?",
        options: [
            "विश्वसनीयता",
            "वैधता",
            "व्यापकता",
            "कठिनता"
        ],
        answer: 0,
    },
    {
        id: 39,
        question: "उत्तम परीक्षा में प्रश्न कैसे होने चाहिए?",
        options: [
            "उद्देश्य आधारित",
            "अस्पष्ट",
            "कठिन",
            "पक्षपातपूर्ण"
        ],
        answer: 0,
    },
    {
        id: 40,
        question: "परीक्षा किसका साधन है?",
        options: [
            "मूल्यांकन",
            "दंड",
            "अवकाश",
            "खेल"
        ],
        answer: 0,
    },
    {
        id: 41,
        question: "परीक्षा की गुणवत्ता किस पर निर्भर करती है?",
        options: [
            "विश्वसनीयता",
            "भवन",
            "खेल",
            "अवकाश"
        ],
        answer: 0,
    },
    {
        id: 42,
        question: "परीक्षा का मुख्य उद्देश्य क्या नहीं है?",
        options: [
            "भय उत्पन्न करना",
            "उपलब्धि मापना",
            "अधिगम सुधारना",
            "प्रगति जानना"
        ],
        answer: 0,
    },
    {
        id: 43,
        question: "अच्छी परीक्षा में क्या होना चाहिए?",
        options: [
            "स्पष्ट निर्देश",
            "भ्रम",
            "कठिन भाषा",
            "पक्षपात"
        ],
        answer: 0,
    },
    {
        id: 44,
        question: "परीक्षा की व्यापकता किससे संबंधित है?",
        options: [
            "संपूर्ण पाठ्यवस्तु",
            "केवल एक पाठ",
            "केवल एक प्रश्न",
            "केवल गृहकार्य"
        ],
        answer: 0,
    },
    {
        id: 45,
        question: "निष्पक्ष मूल्यांकन किसका गुण है?",
        options: [
            "वस्तुनिष्ठता",
            "कठिनता",
            "विश्वसनीयता",
            "वैधता"
        ],
        answer: 0,
    },
    {
        id: 46,
        question: "परीक्षा में स्पष्टता क्यों आवश्यक है?",
        options: [
            "सही समझ हेतु",
            "दंड हेतु",
            "समय बढ़ाने हेतु",
            "कठिन बनाने हेतु"
        ],
        answer: 0,
    },
    {
        id: 47,
        question: "अच्छी परीक्षा क्या बढ़ाती है?",
        options: [
            "अधिगम गुणवत्ता",
            "भय",
            "तनाव",
            "दंड"
        ],
        answer: 0,
    },
    {
        id: 48,
        question: "परीक्षा में निष्पक्षता किसे बढ़ाती है?",
        options: [
            "विश्वास",
            "तनाव",
            "भय",
            "भ्रम"
        ],
        answer: 0,
    },
    {
        id: 49,
        question: "परीक्षा का संबंध किससे है?",
        options: [
            "अधिगम परिणाम",
            "भवन",
            "खेल",
            "अवकाश"
        ],
        answer: 0,
    },
    {
        id: 50,
        question: "उत्तम परीक्षा का अंतिम उद्देश्य क्या है?",
        options: [
            "सही मूल्यांकन",
            "दंड",
            "भय",
            "अनुशासन"
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
                        Hindi Methodology 6.1 and 6.2 - Part 2
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