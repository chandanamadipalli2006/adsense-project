"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "भाषा की सबसे छोटी मौखिक इकाई क्या कहलाती है?",
        options: ["शब्द", "वाक्य", "ध्वनि", "अक्षर"],
        answer: 2,
    },
    {
        id: 2,
        question: "ध्वनि उत्पन्न करने में प्रमुख भूमिका किसकी होती है?",
        options: ["हाथ", "वागयंत्र", "पैर", "आँख"],
        answer: 1,
    },
    {
        id: 3,
        question: "निम्नलिखित में से कौन वागयंत्र का भाग नहीं है?",
        options: ["जीभ", "होंठ", "दाँत", "कंधा"],
        answer: 3,
    },
    {
        id: 4,
        question: "भाषा अधिगम का प्रथम चरण कौन-सा है?",
        options: ["लेखन", "पठन", "श्रवण", "भाषण"],
        answer: 2,
    },
    {
        id: 5,
        question: "ध्वनि और श्रवण का संबंध कैसा है?",
        options: ["विरोधी", "पूरक", "असंबंधित", "स्वतंत्र"],
        answer: 1,
    },
    {
        id: 6,
        question: "बालक सबसे पहले क्या सीखता है?",
        options: ["लिखना", "पढ़ना", "सुनना", "व्याकरण"],
        answer: 2,
    },
    {
        id: 7,
        question: "श्रवण कौशल के विकास हेतु कौन-सी गतिविधि उपयोगी है?",
        options: ["निबंध लेखन", "कहानी सुनना", "श्रुतिलेख", "सुलेख"],
        answer: 1,
    },
    {
        id: 8,
        question: "बोलना किस प्रकार का कौशल है?",
        options: ["ग्रहणात्मक", "अभिव्यक्तात्मक", "निष्क्रिय", "यांत्रिक"],
        answer: 1,
    },
    {
        id: 9,
        question: "शब्दोच्चारण का अर्थ क्या है?",
        options: ["शब्द लिखना", "शब्द पढ़ना", "शब्दों का शुद्ध उच्चारण", "शब्द याद करना"],
        answer: 2,
    },
    {
        id: 10,
        question: "गलत उच्चारण से क्या प्रभावित होता है?",
        options: ["संप्रेषण", "खेल", "चित्रकला", "गणित"],
        answer: 0,
    },
    {
        id: 11,
        question: "उच्चारण सुधारने के लिए कौन-सी गतिविधि उपयुक्त है?",
        options: ["कविता-पाठ", "चित्रांकन", "प्रयोगशाला कार्य", "गृहकार्य"],
        answer: 0,
    },
    {
        id: 12,
        question: "ओष्ठ्य ध्वनियाँ किसकी सहायता से उच्चरित होती हैं?",
        options: ["जीभ", "होंठ", "तालु", "कंठ"],
        answer: 1,
    },
    {
        id: 13,
        question: "दंत्य ध्वनियाँ किसकी सहायता से उच्चरित होती हैं?",
        options: ["दाँत", "होंठ", "तालु", "नाक"],
        answer: 0,
    },
    {
        id: 14,
        question: "वागयंत्रों का ज्ञान किसके लिए आवश्यक है?",
        options: ["उच्चारण सुधार", "खेल", "चित्रकला", "विज्ञान"],
        answer: 0,
    },
    {
        id: 15,
        question: "अनुकरण विधि का उपयोग किसके विकास हेतु किया जाता है?",
        options: ["उच्चारण", "लेखन", "गणना", "चित्रांकन"],
        answer: 0,
    },
    {
        id: 16,
        question: "पाठशाला में वार्तालाप का मुख्य उद्देश्य क्या है?",
        options: ["मौखिक अभिव्यक्ति", "परीक्षा", "अनुशासन", "गृहकार्य"],
        answer: 0,
    },
    {
        id: 17,
        question: "समूह चर्चा किस कौशल के विकास में सहायक है?",
        options: ["वार्तालाप", "सुलेख", "गणित", "चित्रकला"],
        answer: 0,
    },
    {
        id: 18,
        question: "भूमिका-अभिनय (Role Play) किस कौशल को विकसित करता है?",
        options: ["लेखन", "वार्तालाप", "वर्तनी", "व्याकरण"],
        answer: 1,
    },
    {
        id: 19,
        question: "पढ़ना किस प्रकार का कौशल है?",
        options: ["अभिव्यक्तात्मक", "ग्रहणात्मक", "निष्क्रिय", "यांत्रिक"],
        answer: 1,
    },
    {
        id: 20,
        question: "अच्छे वाचन की प्रमुख विशेषता क्या है?",
        options: ["स्पष्टता", "शुद्धता", "अर्थग्रहण", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 21,
        question: "वाचन के मुख्य प्रकार कितने हैं?",
        options: ["1", "2", "3", "4"],
        answer: 1,
    },
    {
        id: 22,
        question: "सस्वर वाचन में विद्यार्थी—",
        options: [
            "मन ही मन पढ़ता है",
            "आवाज़ के साथ पढ़ता है",
            "लिखता है",
            "सुनता है",
        ],
        answer: 1,
    },
    {
        id: 23,
        question: "मौन वाचन का मुख्य उद्देश्य क्या है?",
        options: ["अर्थ समझना", "उच्चारण सुधारना", "भाषण देना", "लिखना"],
        answer: 0,
    },
    {
        id: 24,
        question: "गहन वाचन का उद्देश्य क्या है?",
        options: ["विस्तृत समझ", "मनोरंजन", "खेल", "वार्तालाप"],
        answer: 0,
    },
    {
        id: 25,
        question: "व्यापक वाचन का उद्देश्य क्या है?",
        options: [
            "सामान्य ज्ञान और रुचि",
            "केवल परीक्षा",
            "केवल लेखन",
            "केवल उच्चारण",
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
                        Hindi Methodology 3.2 - Part 1
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