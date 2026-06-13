"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "आदर्श हिंदी अध्यापक का सबसे महत्वपूर्ण गुण क्या है?",
        options: [
            "कठोरता",
            "भाषा का गहन ज्ञान",
            "दंड देना",
            "पक्षपात",
        ],
        answer: 1,
    },
    {
        id: 2,
        question: "कोठारी आयोग (1964-66) के अनुसार शिक्षा की गुणवत्ता किस पर निर्भर करती है?",
        options: [
            "भवन",
            "पुस्तकें",
            "शिक्षक की गुणवत्ता",
            "परीक्षा",
        ],
        answer: 2,
    },
    {
        id: 3,
        question: "NCF-2005 के अनुसार शिक्षक की भूमिका क्या है?",
        options: [
            "नियंत्रक",
            "अधिगम का सहायक",
            "दंडाधिकारी",
            "निरीक्षक",
        ],
        answer: 1,
    },
    {
        id: 4,
        question: "NCFTE-2009 के अनुसार शिक्षक कैसा होना चाहिए?",
        options: [
            "कठोर",
            "चिंतनशील",
            "पक्षपाती",
            "निष्क्रिय",
        ],
        answer: 1,
    },
    {
        id: 5,
        question: "आदर्श हिंदी अध्यापक को किसका विशेष ज्ञान होना चाहिए?",
        options: [
            "विज्ञान",
            "गणित",
            "हिंदी व्याकरण",
            "भूगोल",
        ],
        answer: 2,
    },
    {
        id: 6,
        question: "एक अच्छा शिक्षक विद्यार्थियों में किसका विकास करता है?",
        options: [
            "भय",
            "आत्मविश्वास",
            "तनाव",
            "संकोच",
        ],
        answer: 1,
    },
    {
        id: 7,
        question: "शिक्षक का व्यवहार कैसा होना चाहिए?",
        options: [
            "तानाशाही",
            "लोकतांत्रिक",
            "कठोर",
            "पक्षपातपूर्ण",
        ],
        answer: 1,
    },
    {
        id: 8,
        question: "भाषा शिक्षण का मुख्य उद्देश्य क्या है?",
        options: [
            "परीक्षा",
            "रटना",
            "संप्रेषण कौशल",
            "गृहकार्य",
        ],
        answer: 2,
    },
    {
        id: 9,
        question: "अच्छे शिक्षक की प्रमुख विशेषता क्या है?",
        options: [
            "निष्पक्षता",
            "क्रोध",
            "पक्षपात",
            "कठोरता",
        ],
        answer: 0,
    },
    {
        id: 10,
        question: "आदर्श हिंदी अध्यापक में कौन-सा गुण होना चाहिए?",
        options: [
            "अहंकार",
            "सहानुभूति",
            "ईर्ष्या",
            "क्रोध",
        ],
        answer: 1,
    },
    {
        id: 11,
        question: "विद्यार्थी-केंद्रित शिक्षण किसकी विशेषता है?",
        options: [
            "अच्छे शिक्षक की",
            "कठोर शिक्षक की",
            "तानाशाही शिक्षक की",
            "निष्क्रिय शिक्षक की",
        ],
        answer: 0,
    },
    {
        id: 12,
        question: "आदर्श हिंदी अध्यापक विद्यार्थियों को किसके लिए प्रेरित करता है?",
        options: [
            "नकल",
            "स्वतंत्र अभिव्यक्ति",
            "झगड़ा",
            "प्रतियोगिता",
        ],
        answer: 1,
    },
    {
        id: 13,
        question: "भाषा के चार कौशल कौन-से हैं?",
        options: [
            "पढ़ना, लिखना, सुनना, बोलना",
            "पढ़ना, खेलना, लिखना, बोलना",
            "सुनना, खेलना, पढ़ना, लिखना",
            "बोलना, खेलना, गाना, पढ़ना",
        ],
        answer: 0,
    },
    {
        id: 14,
        question: "अच्छा शिक्षक विद्यार्थियों को प्रश्न पूछने के लिए क्या करता है?",
        options: [
            "रोकता है",
            "दंड देता है",
            "प्रोत्साहित करता है",
            "अनदेखा करता है",
        ],
        answer: 2,
    },
    {
        id: 15,
        question: "आदर्श शिक्षक की वाणी कैसी होनी चाहिए?",
        options: [
            "अस्पष्ट",
            "प्रभावशाली",
            "डरावनी",
            "कठोर",
        ],
        answer: 1,
    },
    {
        id: 16,
        question: "NCFTE का प्रकाशन किस वर्ष हुआ?",
        options: [
            "2005",
            "2008",
            "2009",
            "2010",
        ],
        answer: 2,
    },
    {
        id: 17,
        question: "NEP-2020 के अनुसार शिक्षक होना चाहिए—",
        options: [
            "निष्क्रिय",
            "नवाचारी",
            "कठोर",
            "केवल पारंपरिक",
        ],
        answer: 1,
    },
    {
        id: 18,
        question: "एक अच्छे शिक्षक का महत्वपूर्ण गुण है—",
        options: [
            "धैर्य",
            "क्रोध",
            "पक्षपात",
            "अहंकार",
        ],
        answer: 0,
    },
    {
        id: 19,
        question: "अच्छा शिक्षक विद्यार्थियों में किसका विकास करता है?",
        options: [
            "जिज्ञासा",
            "भय",
            "तनाव",
            "संकोच",
        ],
        answer: 0,
    },
    {
        id: 20,
        question: "आदर्श हिंदी अध्यापक को साहित्य में रुचि क्यों होनी चाहिए?",
        options: [
            "भाषा समृद्ध करने हेतु",
            "समय बिताने हेतु",
            "परीक्षा हेतु",
            "मनोरंजन हेतु",
        ],
        answer: 0,
    },
    {
        id: 21,
        question: "अच्छा शिक्षक विद्यार्थियों के साथ कैसा व्यवहार करता है?",
        options: [
            "समान",
            "पक्षपातपूर्ण",
            "कठोर",
            "उदासीन",
        ],
        answer: 0,
    },
    {
        id: 22,
        question: "भाषा शिक्षण में सुनना किस प्रकार का कौशल है?",
        options: [
            "ग्रहणात्मक",
            "अभिव्यक्तात्मक",
            "रचनात्मक",
            "सामाजिक",
        ],
        answer: 0,
    },
    {
        id: 23,
        question: "लेखन किस प्रकार का कौशल है?",
        options: [
            "ग्रहणात्मक",
            "अभिव्यक्तात्मक",
            "निष्क्रिय",
            "सामाजिक",
        ],
        answer: 1,
    },
    {
        id: 24,
        question: "अच्छे शिक्षक का मूल्यांकन किससे होता है?",
        options: [
            "वेतन",
            "परीक्षा",
            "विद्यार्थियों के विकास",
            "भवन",
        ],
        answer: 2,
    },
    {
        id: 25,
        question: "आदर्श हिंदी अध्यापक को होना चाहिए—",
        options: [
            "अध्ययनशील",
            "आलसी",
            "निष्क्रिय",
            "असहयोगी",
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
                        Hindi Methodology 2.1 and 2.2 - Part 1
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