"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "CCE का पूरा नाम क्या है?",
        options: [
            "Continuous and Comprehensive Evaluation",
            "Complete Curriculum Evaluation",
            "Common Course Education",
            "Continuous Course Examination",
        ],
        answer: 0,
    },
    {
        id: 27,
        question: "CCE किस पर आधारित है?",
        options: [
            "सतत मूल्यांकन",
            "केवल वार्षिक परीक्षा",
            "केवल मौखिक परीक्षा",
            "केवल लिखित परीक्षा",
        ],
        answer: 0,
    },
    {
        id: 28,
        question: "CCE में किसका मूल्यांकन किया जाता है?",
        options: [
            "शैक्षणिक एवं सहशैक्षणिक क्षेत्र",
            "केवल परीक्षा",
            "केवल गृहकार्य",
            "केवल खेल",
        ],
        answer: 0,
    },
    {
        id: 29,
        question: "CCE का उद्देश्य क्या है?",
        options: [
            "सर्वांगीण विकास",
            "दंड देना",
            "अनुशासन करना",
            "अवकाश देना",
        ],
        answer: 0,
    },
    {
        id: 30,
        question: "CCE पर किसने बल दिया?",
        options: [
            "NCF-2005",
            "खेल नीति",
            "स्वास्थ्य नीति",
            "परिवहन नीति",
        ],
        answer: 0,
    },
    {
        id: 31,
        question: "CCE का संबंध किससे है?",
        options: [
            "सतत अधिगम",
            "भवन निर्माण",
            "खेल आयोजन",
            "प्रशासन",
        ],
        answer: 0,
    },
    {
        id: 32,
        question: "CCE में कौन शामिल नहीं है?",
        options: [
            "केवल अंतिम परीक्षा",
            "परियोजना कार्य",
            "गतिविधियाँ",
            "व्यवहार मूल्यांकन",
        ],
        answer: 0,
    },
    {
        id: 33,
        question: "CCE कब लागू करने पर अधिक बल दिया गया?",
        options: ["2009", "1980", "1990", "2015"],
        answer: 0,
    },
    {
        id: 34,
        question: "CCE किस अधिनियम से जुड़ा है?",
        options: ["RTE-2009", "RTI", "GST", "UGC"],
        answer: 0,
    },
    {
        id: 35,
        question: "CCE का मुख्य लाभ क्या है?",
        options: [
            "तनाव कम करना",
            "तनाव बढ़ाना",
            "दंड बढ़ाना",
            "अनुशासन बढ़ाना",
        ],
        answer: 0,
    },
    {
        id: 36,
        question: "CCE में विद्यार्थी की किस क्षमता का मूल्यांकन होता है?",
        options: [
            "संपूर्ण व्यक्तित्व",
            "केवल लिखना",
            "केवल पढ़ना",
            "केवल बोलना",
        ],
        answer: 0,
    },
    {
        id: 37,
        question: "CCE किस प्रकार का मूल्यांकन है?",
        options: ["निरंतर", "वार्षिक", "अंतिम", "अस्थायी"],
        answer: 0,
    },
    {
        id: 38,
        question: "CCE में कौन-सी गतिविधि शामिल हो सकती है?",
        options: [
            "परियोजना कार्य",
            "नाटक",
            "प्रश्नोत्तरी",
            "उपर्युक्त सभी",
        ],
        answer: 3,
    },
    {
        id: 39,
        question: "CCE का लक्ष्य क्या है?",
        options: ["समग्र विकास", "दंड", "अनुशासन", "खेल"],
        answer: 0,
    },
    {
        id: 40,
        question: "CCE किस प्रकार के मूल्यांकन को बढ़ावा देता है?",
        options: [
            "सतत मूल्यांकन",
            "एकबारगी परीक्षा",
            "वार्षिक परीक्षा",
            "अंतिम परीक्षा",
        ],
        answer: 0,
    },
    {
        id: 41,
        question: "CCE का आधार क्या है?",
        options: [
            "विद्यार्थी केंद्रित अधिगम",
            "भवन",
            "अवकाश",
            "खेल",
        ],
        answer: 0,
    },
    {
        id: 42,
        question: "CCE से किसका विकास होता है?",
        options: ["व्यक्तित्व", "तनाव", "भय", "आलस्य"],
        answer: 0,
    },
    {
        id: 43,
        question: "CCE का उद्देश्य क्या नहीं है?",
        options: [
            "दंड देना",
            "प्रगति देखना",
            "सुधार करना",
            "अधिगम बढ़ाना",
        ],
        answer: 0,
    },
    {
        id: 44,
        question: "CCE में मूल्यांकन कैसा होता है?",
        options: ["व्यापक", "सीमित", "कठिन", "अस्पष्ट"],
        answer: 0,
    },
    {
        id: 45,
        question: "CCE किसके लिए उपयोगी है?",
        options: [
            "शिक्षक और विद्यार्थी",
            "केवल शिक्षक",
            "केवल विद्यार्थी",
            "केवल प्रधानाचार्य",
        ],
        answer: 0,
    },
    {
        id: 46,
        question: "CCE में किसे महत्व दिया जाता है?",
        options: [
            "गतिविधि आधारित अधिगम",
            "दंड",
            "परीक्षा भय",
            "रटना",
        ],
        answer: 0,
    },
    {
        id: 47,
        question: "CCE किस प्रकार की शिक्षा को बढ़ावा देता है?",
        options: [
            "बालक-केंद्रित शिक्षा",
            "दंड आधारित शिक्षा",
            "रटंत शिक्षा",
            "परीक्षा आधारित शिक्षा",
        ],
        answer: 0,
    },
    {
        id: 48,
        question: "CCE का अंतिम उद्देश्य क्या है?",
        options: [
            "सर्वांगीण विकास",
            "दंड",
            "अनुशासन",
            "परीक्षा",
        ],
        answer: 0,
    },
    {
        id: 49,
        question: "CCE किसे कम करता है?",
        options: [
            "परीक्षा तनाव",
            "अध्ययन",
            "अधिगम",
            "रुचि",
        ],
        answer: 0,
    },
    {
        id: 50,
        question: "CCE किसका मूल्यांकन करता है?",
        options: [
            "ज्ञान, कौशल एवं व्यवहार",
            "केवल ज्ञान",
            "केवल कौशल",
            "केवल व्यवहार",
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
                        Hindi Methodology 6.3 and 6.4 - Part 2
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