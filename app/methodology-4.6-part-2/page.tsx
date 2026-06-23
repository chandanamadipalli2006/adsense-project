"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "खेल पद्धति किस प्रकार के शिक्षण को प्रोत्साहित करती है?",
        options: ["बालक-केंद्रित", "शिक्षक-केंद्रित", "परीक्षा-केंद्रित", "दंड-केंद्रित"],
        answer: 0,
    },
    {
        id: 27,
        question: "खेल पद्धति में विद्यार्थी की भूमिका क्या होती है?",
        options: ["निष्क्रिय", "सक्रिय", "मौन", "सीमित"],
        answer: 1,
    },
    {
        id: 28,
        question: "खेल पद्धति बच्चों में क्या विकसित करती है?",
        options: ["सृजनात्मकता", "भय", "तनाव", "आलस्य"],
        answer: 0,
    },
    {
        id: 29,
        question: "खेल पद्धति किस नीति में प्रोत्साहित की गई?",
        options: ["NCF-2005", "NPE-1968", "आयोग-1952", "RTE-1990"],
        answer: 0,
    },
    {
        id: 30,
        question: "खेल पद्धति सीखने को कैसा बनाती है?",
        options: ["कठिन", "रोचक", "जटिल", "उबाऊ"],
        answer: 1,
    },
    {
        id: 31,
        question: "डाल्टन योजना के प्रवर्तक कौन थे?",
        options: ["ब्लूम", "Helen Parkhurst", "स्किनर", "पियाजे"],
        answer: 1,
    },
    {
        id: 32,
        question: "डाल्टन योजना किस वर्ष प्रारंभ हुई?",
        options: ["1920", "1956", "1963", "2005"],
        answer: 0,
    },
    {
        id: 33,
        question: "डाल्टन योजना का मुख्य सिद्धांत क्या है?",
        options: ["स्वतंत्र अध्ययन", "दंड", "परीक्षा", "रटंत अधिगम"],
        answer: 0,
    },
    {
        id: 34,
        question: "डाल्टन योजना में शिक्षक की भूमिका क्या है?",
        options: ["मार्गदर्शक", "नियंत्रक", "परीक्षक", "निरीक्षक"],
        answer: 0,
    },
    {
        id: 35,
        question: "सूक्ष्म शिक्षण किससे संबंधित है?",
        options: ["शिक्षक प्रशिक्षण", "खेल", "नृत्य", "चित्रकला"],
        answer: 0,
    },
    {
        id: 36,
        question: "सूक्ष्म शिक्षण का विकास किस वर्ष हुआ?",
        options: ["1920", "1950", "1963", "1986"],
        answer: 2,
    },
    {
        id: 37,
        question: "सूक्ष्म शिक्षण का विकास कहाँ हुआ?",
        options: ["ऑक्सफोर्ड विश्वविद्यालय", "हार्वर्ड विश्वविद्यालय", "स्टैनफोर्ड विश्वविद्यालय", "दिल्ली विश्वविद्यालय"],
        answer: 2,
    },
    {
        id: 38,
        question: "सूक्ष्म शिक्षण के प्रवर्तक कौन थे?",
        options: ["स्किनर", "Dwight Allen", "ब्लूम", "फ्रॉबेल"],
        answer: 1,
    },
    {
        id: 39,
        question: "सूक्ष्म शिक्षण में कितने विद्यार्थियों का समूह होता है?",
        options: ["बड़ा समूह", "छोटा समूह", "संपूर्ण विद्यालय", "कोई नहीं"],
        answer: 1,
    },
    {
        id: 40,
        question: "सूक्ष्म शिक्षण में किस पर ध्यान दिया जाता है?",
        options: ["विशेष शिक्षण कौशल", "खेल", "परीक्षा", "अनुशासन"],
        answer: 0,
    },
    {
        id: 41,
        question: "सूक्ष्म शिक्षण का पहला चरण क्या है?",
        options: ["Feedback", "Teach", "Reteach", "Replan"],
        answer: 1,
    },
    {
        id: 42,
        question: "सूक्ष्म शिक्षण में Feedback का उद्देश्य क्या है?",
        options: ["त्रुटि सुधार", "दंड", "परीक्षा", "उपस्थिति"],
        answer: 0,
    },
    {
        id: 43,
        question: "डाल्टन योजना में क्या विकसित होता है?",
        options: ["आत्मनिर्भरता", "भय", "तनाव", "अनुशासनहीनता"],
        answer: 0,
    },
    {
        id: 44,
        question: "सूक्ष्म शिक्षण का समय सामान्य शिक्षण से कैसा होता है?",
        options: ["अधिक", "कम", "समान", "अनिश्चित"],
        answer: 1,
    },
    {
        id: 45,
        question: "सूक्ष्म शिक्षण का उद्देश्य क्या है?",
        options: ["कौशल विकास", "परीक्षा", "खेल", "गृहकार्य"],
        answer: 0,
    },
    {
        id: 46,
        question: "प्रश्न पूछना किसका कौशल है?",
        options: ["सूक्ष्म शिक्षण", "खेल पद्धति", "परोक्ष पद्धति", "डाल्टन योजना"],
        answer: 0,
    },
    {
        id: 47,
        question: "पुनर्बलन किससे संबंधित है?",
        options: ["सूक्ष्म शिक्षण", "खेल पद्धति", "प्रत्यक्ष पद्धति", "परोक्ष पद्धति"],
        answer: 0,
    },
    {
        id: 48,
        question: "सूक्ष्म शिक्षण चक्र में Replan का अर्थ क्या है?",
        options: ["पुनः योजना बनाना", "पुनः परीक्षा", "पुनः खेल", "पुनः मूल्यांकन"],
        answer: 0,
    },
    {
        id: 49,
        question: "सूक्ष्म शिक्षण में पुनः पढ़ाने को क्या कहते हैं?",
        options: ["Teach", "Reteach", "Replan", "Feedback"],
        answer: 1,
    },
    {
        id: 50,
        question: "सूक्ष्म शिक्षण का अंतिम उद्देश्य क्या है?",
        options: ["प्रभावी शिक्षक बनाना", "परीक्षा बढ़ाना", "अनुशासन बढ़ाना", "गृहकार्य बढ़ाना"],
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
                        Hindi Methodology 4.6 - Part 2
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