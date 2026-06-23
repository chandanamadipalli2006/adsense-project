"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "शिक्षण उद्देश्यों के वर्गीकरण का प्रतिपादन किसने किया?",
        options: ["जॉन ड्यूई", "बेंजामिन ब्लूम", "स्किनर", "पियाजे"],
        answer: 1,
    },
    {
        id: 2,
        question: "ब्लूम का शिक्षण उद्देश्यों का वर्गीकरण किस वर्ष प्रकाशित हुआ?",
        options: ["1949", "1956", "1968", "2005"],
        answer: 1,
    },
    {
        id: 3,
        question: "ब्लूम ने शिक्षण उद्देश्यों को कितने क्षेत्रों में विभाजित किया?",
        options: ["2", "3", "4", "5"],
        answer: 1,
    },
    {
        id: 4,
        question: "निम्नलिखित में से कौन-सा ब्लूम वर्गीकरण का क्षेत्र नहीं है?",
        options: ["ज्ञानात्मक", "भावात्मक", "मनोगत्यात्मक", "आर्थिक"],
        answer: 3,
    },
    {
        id: 5,
        question: "ज्ञानात्मक क्षेत्र किससे संबंधित है?",
        options: [
            "भावनाओं से",
            "शारीरिक गतिविधियों से",
            "ज्ञान एवं बौद्धिक विकास से",
            "खेल से",
        ],
        answer: 2,
    },
    {
        id: 6,
        question: "भावात्मक क्षेत्र किससे संबंधित है?",
        options: [
            "भावनाओं एवं मूल्यों से",
            "शारीरिक क्रियाओं से",
            "गणितीय कौशल से",
            "लेखन से",
        ],
        answer: 0,
    },
    {
        id: 7,
        question: "मनोगत्यात्मक क्षेत्र किससे संबंधित है?",
        options: ["ज्ञान से", "भावनाओं से", "शारीरिक कौशल से", "स्मृति से"],
        answer: 2,
    },
    {
        id: 8,
        question: "निम्नलिखित में से कौन-सा ज्ञानात्मक क्षेत्र का स्तर है?",
        options: ["ग्रहण करना", "विश्लेषण", "अनुकरण", "प्रतिक्रिया"],
        answer: 1,
    },
    {
        id: 9,
        question: "ब्लूम वर्गीकरण में ज्ञानात्मक क्षेत्र का प्रथम स्तर कौन-सा है?",
        options: ["प्रयोग", "विश्लेषण", "ज्ञान", "मूल्यांकन"],
        answer: 2,
    },
    {
        id: 10,
        question: "ज्ञानात्मक क्षेत्र का सर्वोच्च स्तर कौन-सा है?",
        options: ["ज्ञान", "बोध", "मूल्यांकन", "प्रयोग"],
        answer: 2,
    },
    {
        id: 11,
        question: "संशोधित ब्लूम वर्गीकरण में सर्वोच्च स्तर कौन-सा है?",
        options: ["समझना", "विश्लेषण करना", "मूल्यांकन करना", "सृजन करना"],
        answer: 3,
    },
    {
        id: 12,
        question: "ब्लूम वर्गीकरण का संशोधित रूप किस वर्ष प्रस्तुत किया गया?",
        options: ["1995", "2000", "2001", "2005"],
        answer: 2,
    },
    {
        id: 13,
        question: "निम्नलिखित में से कौन-सा ज्ञानात्मक क्षेत्र का स्तर नहीं है?",
        options: ["प्रयोग", "संश्लेषण", "मूल्यांकन", "अनुकरण"],
        answer: 3,
    },
    {
        id: 14,
        question: "‘समझना’ किस क्षेत्र का स्तर है?",
        options: ["भावात्मक", "ज्ञानात्मक", "मनोगत्यात्मक", "सामाजिक"],
        answer: 1,
    },
    {
        id: 15,
        question: "विद्यार्थियों में रुचि एवं दृष्टिकोण का विकास किस क्षेत्र से संबंधित है?",
        options: ["ज्ञानात्मक", "मनोगत्यात्मक", "भावात्मक", "शारीरिक"],
        answer: 2,
    },
    {
        id: 16,
        question: "भाषा शिक्षण में सुंदर लेखन किस क्षेत्र से संबंधित है?",
        options: ["ज्ञानात्मक", "भावात्मक", "मनोगत्यात्मक", "सामाजिक"],
        answer: 2,
    },
    {
        id: 17,
        question: "किस क्षेत्र में मूल्यों का विकास होता है?",
        options: ["भावात्मक", "ज्ञानात्मक", "मनोगत्यात्मक", "मानसिक"],
        answer: 0,
    },
    {
        id: 18,
        question: "NCF-2005 ने किस प्रकार के शिक्षण पर बल दिया?",
        options: [
            "रटंत शिक्षण",
            "बालक-केंद्रित शिक्षण",
            "दंड आधारित शिक्षण",
            "परीक्षा आधारित शिक्षण",
        ],
        answer: 1,
    },
    {
        id: 19,
        question: "NEP-2020 में किस पर विशेष बल दिया गया है?",
        options: [
            "केवल परीक्षा",
            "रटंत अधिगम",
            "कौशल आधारित अधिगम",
            "दंड आधारित शिक्षण",
        ],
        answer: 2,
    },
    {
        id: 20,
        question: "शिक्षण उद्देश्यों का वर्गीकरण किसे व्यवस्थित बनाता है?",
        options: ["खेल", "शिक्षण और मूल्यांकन", "अवकाश", "अनुशासन"],
        answer: 1,
    },
    {
        id: 21,
        question: "‘ज्ञान’ के बाद ज्ञानात्मक क्षेत्र का दूसरा स्तर कौन-सा है?",
        options: ["प्रयोग", "बोध", "मूल्यांकन", "विश्लेषण"],
        answer: 1,
    },
    {
        id: 22,
        question: "‘नई परिस्थिति में ज्ञान का उपयोग करना’ किस स्तर से संबंधित है?",
        options: ["ज्ञान", "बोध", "प्रयोग", "विश्लेषण"],
        answer: 2,
    },
    {
        id: 23,
        question: "समस्या को भागों में विभाजित करने की क्षमता किस स्तर से संबंधित है?",
        options: ["संश्लेषण", "प्रयोग", "विश्लेषण", "ज्ञान"],
        answer: 2,
    },
    {
        id: 24,
        question: "विभिन्न विचारों को जोड़कर नया निर्माण करना किस स्तर से संबंधित है?",
        options: ["संश्लेषण", "ज्ञान", "बोध", "प्रयोग"],
        answer: 0,
    },
    {
        id: 25,
        question: "शिक्षण उद्देश्यों का अंतिम उद्देश्य क्या है?",
        options: [
            "केवल परीक्षा में अंक प्राप्त करना",
            "विद्यार्थियों के व्यवहार में वांछित परिवर्तन लाना",
            "केवल पाठ्यपुस्तक समाप्त करना",
            "गृहकार्य पूरा करना",
        ],
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
                        Hindi Methodology 4.1 and 4.2 - Part 1
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