"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "मूल्यांकन का मुख्य उद्देश्य क्या है?",
        options: ["केवल अंक देना", "अधिगम का आकलन करना", "दंड देना", "गृहकार्य देना"],
        answer: 1,
    },
    {
        id: 2,
        question: "मूल्यांकन किसका आकलन करता है?",
        options: ["ज्ञान", "कौशल", "व्यवहार", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 3,
        question: "शिक्षण के दौरान किया जाने वाला मूल्यांकन क्या कहलाता है?",
        options: ["संकलनात्मक", "निर्माणात्मक", "वार्षिक", "अंतिम"],
        answer: 1,
    },
    {
        id: 4,
        question: "अवधि के अंत में किया जाने वाला मूल्यांकन क्या कहलाता है?",
        options: ["निर्माणात्मक", "निदानात्मक", "संकलनात्मक", "सतत"],
        answer: 2,
    },
    {
        id: 5,
        question: "विद्यार्थियों की कठिनाइयों की पहचान के लिए कौन-सा मूल्यांकन उपयोगी है?",
        options: ["निदानात्मक", "वार्षिक", "अंतिम", "मौखिक"],
        answer: 0,
    },
    {
        id: 6,
        question: "मूल्यांकन शिक्षण का कौन-सा भाग है?",
        options: ["अलग प्रक्रिया", "शिक्षण-अधिगम प्रक्रिया का भाग", "खेल प्रक्रिया", "प्रशासनिक प्रक्रिया"],
        answer: 1,
    },
    {
        id: 7,
        question: "CCE का पूरा नाम क्या है?",
        options: [
            "Continuous and Comprehensive Evaluation",
            "Complete Curriculum Education",
            "Continuous Curriculum Evaluation",
            "Common Comprehensive Education"
        ],
        answer: 0,
    },
    {
        id: 8,
        question: "NCF-2005 ने किस पर बल दिया?",
        options: ["CCE", "दंड", "परीक्षा भय", "गृहकार्य"],
        answer: 0,
    },
    {
        id: 9,
        question: "मूल्यांकन का संबंध किससे है?",
        options: ["सीखने के परिणामों से", "भवन निर्माण से", "अवकाश से", "खेल मैदान से"],
        answer: 0,
    },
    {
        id: 10,
        question: "भाषा मूल्यांकन का उद्देश्य क्या है?",
        options: [
            "भाषा कौशलों का परीक्षण",
            "केवल लिखावट देखना",
            "केवल व्याकरण देखना",
            "केवल रटना"
        ],
        answer: 0,
    },
    {
        id: 11,
        question: "RTE अधिनियम कब लागू हुआ?",
        options: ["2000", "2005", "2009", "2020"],
        answer: 2,
    },
    {
        id: 12,
        question: "मूल्यांकन में कौन शामिल नहीं है?",
        options: ["ज्ञान", "कौशल", "अभिवृत्ति", "भवन निर्माण"],
        answer: 3,
    },
    {
        id: 13,
        question: "मूल्यांकन से शिक्षक को क्या पता चलता है?",
        options: ["विद्यार्थी की प्रगति", "विद्यालय भवन", "खेल सामग्री", "अवकाश समय"],
        answer: 0,
    },
    {
        id: 14,
        question: "मूल्यांकन का उद्देश्य क्या नहीं है?",
        options: ["सुधार करना", "प्रगति जानना", "दंड देना", "उपलब्धि मापना"],
        answer: 2,
    },
    {
        id: 15,
        question: "निदानात्मक मूल्यांकन किसलिए होता है?",
        options: [
            "त्रुटियों का पता लगाने हेतु",
            "अंक देने हेतु",
            "वार्षिक परिणाम हेतु",
            "पदोन्नति हेतु"
        ],
        answer: 0,
    },
    {
        id: 16,
        question: "मूल्यांकन से किसका विकास होता है?",
        options: ["अधिगम", "तनाव", "भय", "दंड"],
        answer: 0,
    },
    {
        id: 17,
        question: "CCE में किसका मूल्यांकन किया जाता है?",
        options: [
            "शैक्षणिक एवं सहशैक्षणिक क्षेत्र",
            "केवल परीक्षा",
            "केवल गृहकार्य",
            "केवल व्यवहार"
        ],
        answer: 0,
    },
    {
        id: 18,
        question: "मूल्यांकन का आधार क्या है?",
        options: ["उद्देश्य", "भवन", "अनुशासन", "अवकाश"],
        answer: 0,
    },
    {
        id: 19,
        question: "आधुनिक मूल्यांकन किस पर आधारित है?",
        options: ["कौशल विकास", "दंड", "रटना", "अनुशासन"],
        answer: 0,
    },
    {
        id: 20,
        question: "मूल्यांकन का अर्थ क्या है?",
        options: ["निर्णय लेना", "परीक्षा लेना", "गृहकार्य देना", "अनुशासन करना"],
        answer: 0,
    },
    {
        id: 21,
        question: "मूल्यांकन की प्रक्रिया कैसी होती है?",
        options: ["सतत", "असंगठित", "अनियमित", "अस्पष्ट"],
        answer: 0,
    },
    {
        id: 22,
        question: "मूल्यांकन का उद्देश्य क्या है?",
        options: ["सुधारात्मक कदम उठाना", "दंड देना", "अवकाश देना", "खेल कराना"],
        answer: 0,
    },
    {
        id: 23,
        question: "निर्माणात्मक मूल्यांकन कब होता है?",
        options: ["शिक्षण के दौरान", "वर्षांत में", "परीक्षा के बाद", "अवकाश में"],
        answer: 0,
    },
    {
        id: 24,
        question: "संकलनात्मक मूल्यांकन कब किया जाता है?",
        options: ["पाठ समाप्ति के बाद", "शुरुआत में", "अवकाश में", "खेल समय में"],
        answer: 0,
    },
    {
        id: 25,
        question: "मूल्यांकन का अंतिम उद्देश्य क्या है?",
        options: ["अधिगम सुधार", "दंड", "परीक्षा भय", "अनुशासन"],
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
                        Hindi Methodology 6.1 and 6.2 - Part 1
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