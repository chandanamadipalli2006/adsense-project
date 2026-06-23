"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "पुस्तकालय का मुख्य उद्देश्य क्या है?",
        options: ["खेल कराना", "पढ़ने की आदत विकसित करना", "परीक्षा लेना", "अनुशासन करना"],
        answer: 1,
    },
    {
        id: 2,
        question: "पुस्तकालय किसका केंद्र माना जाता है?",
        options: ["मनोरंजन", "ज्ञान", "खेल", "प्रशासन"],
        answer: 1,
    },
    {
        id: 3,
        question: "पुस्तकालय भाषा शिक्षण में किसका विकास करता है?",
        options: ["भाषा कौशल", "खेल कौशल", "चित्रकला", "नृत्य"],
        answer: 0,
    },
    {
        id: 4,
        question: "पुस्तकालय विद्यार्थियों में क्या बढ़ाता है?",
        options: ["स्व-अध्ययन की आदत", "भय", "तनाव", "अनुशासनहीनता"],
        answer: 0,
    },
    {
        id: 5,
        question: "निम्नलिखित में पुस्तकालय सामग्री कौन-सी है?",
        options: ["शब्दकोश", "पत्रिका", "समाचार-पत्र", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 6,
        question: "भाषा शिक्षण में पुस्तकालय किस कौशल को विकसित करता है?",
        options: ["पढ़ना", "लिखना", "बोलना", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 7,
        question: "पुस्तकालय विद्यार्थियों की किस क्षमता को बढ़ाता है?",
        options: ["चिंतन क्षमता", "भय", "तनाव", "आलस्य"],
        answer: 0,
    },
    {
        id: 8,
        question: "पुस्तकालय में कहानी, कविता और जीवनी पढ़ने से क्या बढ़ता है?",
        options: ["भाषा ज्ञान", "तनाव", "अनुशासन", "खेल भावना"],
        answer: 0,
    },
    {
        id: 9,
        question: "पुस्तकालय में पुस्तक समीक्षा किस उद्देश्य से कराई जाती है?",
        options: ["भाषा विकास", "दंड", "समय बिताने हेतु", "अनुशासन हेतु"],
        answer: 0,
    },
    {
        id: 10,
        question: "पुस्तकालय का आधुनिक रूप क्या है?",
        options: ["डिजिटल पुस्तकालय", "खेल कक्ष", "प्रयोगशाला", "सभा भवन"],
        answer: 0,
    },
    {
        id: 11,
        question: "NCF-2005 ने किस पर बल दिया?",
        options: ["पठन संस्कृति", "दंड प्रणाली", "परीक्षा प्रणाली", "खेल प्रणाली"],
        answer: 0,
    },
    {
        id: 12,
        question: "NEP-2020 ने किसके विकास पर बल दिया?",
        options: ["पुस्तकालय", "खेल मैदान", "भवन", "परिवहन"],
        answer: 0,
    },
    {
        id: 13,
        question: "पुस्तकालय किस प्रकार की शिक्षा को बढ़ावा देता है?",
        options: ["स्व-अध्ययन", "रटंत शिक्षा", "दंड शिक्षा", "परीक्षा शिक्षा"],
        answer: 0,
    },
    {
        id: 14,
        question: "पुस्तकालय शिक्षक की किस कार्य में सहायता करता है?",
        options: ["भाषा विकास", "भवन निर्माण", "खेल आयोजन", "प्रशासन"],
        answer: 0,
    },
    {
        id: 15,
        question: "ई-पुस्तक क्या है?",
        options: ["डिजिटल पुस्तक", "कहानी", "चित्र", "मॉडल"],
        answer: 0,
    },
    {
        id: 16,
        question: "शब्द भंडार बढ़ाने में कौन सहायक है?",
        options: ["पुस्तकालय", "खेल", "परीक्षा", "दंड"],
        answer: 0,
    },
    {
        id: 17,
        question: "पुस्तकालय किस आदत को विकसित करता है?",
        options: ["अध्ययन आदत", "आलस्य", "भय", "तनाव"],
        answer: 0,
    },
    {
        id: 18,
        question: "पुस्तकालय का प्रमुख लाभ क्या है?",
        options: ["ज्ञान वृद्धि", "दंड", "अवकाश", "परीक्षा"],
        answer: 0,
    },
    {
        id: 19,
        question: "पुस्तकालय किसका स्रोत है?",
        options: ["ज्ञान", "मनोरंजन", "अनुशासन", "दंड"],
        answer: 0,
    },
    {
        id: 20,
        question: "विद्यालय पुस्तकालय का उद्देश्य क्या नहीं है?",
        options: ["पठन आदत विकसित करना", "ज्ञान देना", "भाषा विकास", "दंड देना"],
        answer: 3,
    },
    {
        id: 21,
        question: "पुस्तकालय में कौन-सी सामग्री मिलती है?",
        options: ["संदर्भ पुस्तकें", "शब्दकोश", "पत्रिकाएँ", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 22,
        question: "पुस्तकालय भाषा शिक्षण को कैसा बनाता है?",
        options: ["प्रभावी", "कठिन", "उबाऊ", "जटिल"],
        answer: 0,
    },
    {
        id: 23,
        question: "डिजिटल पुस्तकालय किससे संबंधित है?",
        options: ["तकनीक", "खेल", "दंड", "परिवहन"],
        answer: 0,
    },
    {
        id: 24,
        question: "पुस्तकालय का संबंध किससे है?",
        options: ["ज्ञानार्जन", "दंड", "अवकाश", "भवन निर्माण"],
        answer: 0,
    },
    {
        id: 25,
        question: "पुस्तकालय विद्यार्थियों में क्या विकसित करता है?",
        options: ["स्वाध्याय", "भय", "तनाव", "आलस्य"],
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
                        Hindi Methodology 5.3 and 5.4 - Part 1
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