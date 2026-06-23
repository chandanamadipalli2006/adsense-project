"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "उद्देश्य आधारित मूल्यांकन का मुख्य आधार क्या है?",
        options: ["शिक्षण उद्देश्य", "खेल गतिविधि", "भवन निर्माण", "अनुशासन"],
        answer: 0,
    },
    {
        id: 2,
        question: "उद्देश्य आधारित मूल्यांकन का मुख्य उद्देश्य क्या है?",
        options: ["सीखने की उपलब्धि मापना", "दंड देना", "खेल कराना", "अवकाश देना"],
        answer: 0,
    },
    {
        id: 3,
        question: "उद्देश्य आधारित मूल्यांकन किसके अनुसार किया जाता है?",
        options: [
            "पूर्व निर्धारित उद्देश्यों",
            "विद्यार्थियों की इच्छा",
            "खेल योजना",
            "विद्यालय भवन",
        ],
        answer: 0,
    },
    {
        id: 4,
        question: "उद्देश्य आधारित मूल्यांकन किसे मापता है?",
        options: ["ज्ञान एवं कौशल", "ऊँचाई", "आयु", "वजन"],
        answer: 0,
    },
    {
        id: 5,
        question: "उद्देश्य आधारित मूल्यांकन से शिक्षक को क्या पता चलता है?",
        options: [
            "विद्यार्थियों की उपलब्धि",
            "विद्यालय खर्च",
            "खेल प्रदर्शन",
            "भवन स्थिति",
        ],
        answer: 0,
    },
    {
        id: 6,
        question: "उद्देश्य आधारित मूल्यांकन में प्रश्न किस आधार पर बनाए जाते हैं?",
        options: [
            "उद्देश्यों के आधार पर",
            "अनुमान के आधार पर",
            "खेल के आधार पर",
            "समय के आधार पर",
        ],
        answer: 0,
    },
    {
        id: 7,
        question: "NCF-2005 ने किस पर बल दिया?",
        options: [
            "बालक-केंद्रित मूल्यांकन",
            "दंड प्रणाली",
            "परीक्षा भय",
            "रटंत शिक्षा",
        ],
        answer: 0,
    },
    {
        id: 8,
        question: "NEP-2020 किस प्रकार के मूल्यांकन को प्रोत्साहित करती है?",
        options: [
            "योग्यता आधारित",
            "रटंत आधारित",
            "वार्षिक आधारित",
            "दंड आधारित",
        ],
        answer: 0,
    },
    {
        id: 9,
        question: "उद्देश्य आधारित मूल्यांकन का लाभ क्या है?",
        options: [
            "शिक्षण में सुधार",
            "तनाव बढ़ाना",
            "दंड देना",
            "अवकाश बढ़ाना",
        ],
        answer: 0,
    },
    {
        id: 10,
        question: "उद्देश्य आधारित मूल्यांकन किसे अधिक प्रभावी बनाता है?",
        options: [
            "शिक्षण प्रक्रिया",
            "खेल प्रक्रिया",
            "अनुशासन",
            "अवकाश",
        ],
        answer: 0,
    },
    {
        id: 11,
        question: "उद्देश्य आधारित मूल्यांकन में किसका परीक्षण होता है?",
        options: [
            "अधिगम परिणाम",
            "भवन स्थिति",
            "खेल क्षमता",
            "ऊँचाई",
        ],
        answer: 0,
    },
    {
        id: 12,
        question: "उद्देश्य आधारित मूल्यांकन का उद्देश्य क्या नहीं है?",
        options: [
            "दंड देना",
            "उपलब्धि मापना",
            "प्रगति देखना",
            "सुधार करना",
        ],
        answer: 0,
    },
    {
        id: 13,
        question: "उद्देश्य आधारित मूल्यांकन में प्राथमिकता किसे दी जाती है?",
        options: ["उद्देश्यों को", "समय को", "भवन को", "खेल को"],
        answer: 0,
    },
    {
        id: 14,
        question: "अधिगम परिणाम का संबंध किससे है?",
        options: [
            "उद्देश्य आधारित मूल्यांकन",
            "खेल",
            "भवन",
            "अवकाश",
        ],
        answer: 0,
    },
    {
        id: 15,
        question: "उद्देश्य आधारित मूल्यांकन किस प्रकार का होना चाहिए?",
        options: ["वस्तुनिष्ठ", "पक्षपातपूर्ण", "अस्पष्ट", "कठिन"],
        answer: 0,
    },
    {
        id: 16,
        question: "उद्देश्य आधारित मूल्यांकन से क्या बढ़ता है?",
        options: [
            "शिक्षण गुणवत्ता",
            "भय",
            "तनाव",
            "दंड",
        ],
        answer: 0,
    },
    {
        id: 17,
        question: "पूर्व निर्धारित उद्देश्यों का निर्धारण कब किया जाता है?",
        options: [
            "शिक्षण से पहले",
            "परीक्षा के बाद",
            "अवकाश में",
            "खेल के बाद",
        ],
        answer: 0,
    },
    {
        id: 18,
        question: "उद्देश्य आधारित मूल्यांकन में कौन महत्वपूर्ण है?",
        options: ["स्पष्ट उद्देश्य", "दंड", "अवकाश", "खेल"],
        answer: 0,
    },
    {
        id: 19,
        question: "उद्देश्य आधारित मूल्यांकन क्या बताता है?",
        options: [
            "सीखने की सफलता",
            "स्वास्थ्य स्थिति",
            "आयु",
            "ऊँचाई",
        ],
        answer: 0,
    },
    {
        id: 20,
        question: "उद्देश्य आधारित मूल्यांकन का संबंध किससे नहीं है?",
        options: [
            "भवन निर्माण",
            "अधिगम",
            "उपलब्धि",
            "शिक्षण उद्देश्य",
        ],
        answer: 0,
    },
    {
        id: 21,
        question: "शिक्षण उद्देश्यों का निर्धारण किसलिए किया जाता है?",
        options: [
            "मूल्यांकन हेतु",
            "दंड हेतु",
            "खेल हेतु",
            "अवकाश हेतु",
        ],
        answer: 0,
    },
    {
        id: 22,
        question: "उद्देश्य आधारित मूल्यांकन का अंतिम उद्देश्य क्या है?",
        options: [
            "अधिगम सुधारना",
            "दंड देना",
            "भय उत्पन्न करना",
            "अनुशासन करना",
        ],
        answer: 0,
    },
    {
        id: 23,
        question: "उद्देश्य आधारित मूल्यांकन का केंद्र क्या है?",
        options: [
            "विद्यार्थी उपलब्धि",
            "भवन",
            "खेल",
            "अवकाश",
        ],
        answer: 0,
    },
    {
        id: 24,
        question: "उद्देश्य आधारित मूल्यांकन किस प्रकार की शिक्षा को बढ़ावा देता है?",
        options: [
            "प्रभावी शिक्षा",
            "दंड आधारित शिक्षा",
            "रटंत शिक्षा",
            "परीक्षा आधारित शिक्षा",
        ],
        answer: 0,
    },
    {
        id: 25,
        question: "उद्देश्य आधारित मूल्यांकन में प्रश्न कैसे होने चाहिए?",
        options: [
            "उद्देश्य अनुरूप",
            "कठिन",
            "अस्पष्ट",
            "पक्षपातपूर्ण",
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
                        Hindi Methodology 6.5 and 6.6 - Part 1
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