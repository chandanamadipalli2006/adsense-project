"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "भाषा सहगामी क्रियाएँ क्या हैं?",
        options: ["पाठ्यक्रम के साथ होने वाली गतिविधियाँ", "केवल परीक्षा", "खेल सामग्री", "भवन कार्य"],
        answer: 0,
    },
    {
        id: 27,
        question: "भाषण प्रतियोगिता किसका उदाहरण है?",
        options: ["भाषा सहगामी क्रिया", "परीक्षा", "खेल", "अनुशासन"],
        answer: 0,
    },
    {
        id: 28,
        question: "वाद-विवाद से किसका विकास होता है?",
        options: ["अभिव्यक्ति क्षमता", "भय", "तनाव", "आलस्य"],
        answer: 0,
    },
    {
        id: 29,
        question: "नाटक किसका उदाहरण है?",
        options: ["भाषा सहगामी गतिविधि", "खेल", "दंड", "प्रशासन"],
        answer: 0,
    },
    {
        id: 30,
        question: "भाषा सहगामी क्रियाओं का उद्देश्य क्या है?",
        options: ["भाषा विकास", "दंड देना", "परीक्षा लेना", "अनुशासन करना"],
        answer: 0,
    },
    {
        id: 31,
        question: "भाषा सहगामी गतिविधियों से क्या बढ़ता है?",
        options: ["आत्मविश्वास", "भय", "तनाव", "आलस्य"],
        answer: 0,
    },
    {
        id: 32,
        question: "कहानी लेखन किस प्रकार की गतिविधि है?",
        options: ["भाषा सहगामी", "खेल", "प्रशासनिक", "वैज्ञानिक"],
        answer: 0,
    },
    {
        id: 33,
        question: "भाषा दिवस कार्यक्रम किससे संबंधित है?",
        options: ["भाषा विकास", "खेल", "अनुशासन", "विज्ञान"],
        answer: 0,
    },
    {
        id: 34,
        question: "सहगामी गतिविधियाँ किसका विकास करती हैं?",
        options: ["नेतृत्व क्षमता", "तनाव", "भय", "आलस्य"],
        answer: 0,
    },
    {
        id: 35,
        question: "कोठारी आयोग का समय क्या था?",
        options: ["1964–66", "1986", "2005", "2020"],
        answer: 0,
    },
    {
        id: 36,
        question: "कोठारी आयोग ने किस पर बल दिया?",
        options: ["सर्वांगीण विकास", "दंड", "परीक्षा", "भवन निर्माण"],
        answer: 0,
    },
    {
        id: 37,
        question: "NCF-2005 ने किस पर बल दिया?",
        options: ["गतिविधि आधारित शिक्षण", "रटंत शिक्षा", "दंड शिक्षा", "परीक्षा शिक्षा"],
        answer: 0,
    },
    {
        id: 38,
        question: "NEP-2020 किस पर बल देती है?",
        options: ["अनुभवात्मक अधिगम", "दंड", "भय", "अनुशासन"],
        answer: 0,
    },
    {
        id: 39,
        question: "भाषा सहगामी क्रिया विद्यार्थियों में क्या विकसित करती है?",
        options: ["सृजनात्मकता", "तनाव", "भय", "आलस्य"],
        answer: 0,
    },
    {
        id: 40,
        question: "प्रश्नोत्तरी प्रतियोगिता किससे संबंधित है?",
        options: ["भाषा सहगामी गतिविधि", "खेल", "प्रशासन", "अनुशासन"],
        answer: 0,
    },
    {
        id: 41,
        question: "निबंध लेखन का उद्देश्य क्या है?",
        options: ["भाषा अभिव्यक्ति", "दंड", "अवकाश", "अनुशासन"],
        answer: 0,
    },
    {
        id: 42,
        question: "भाषा सहगामी क्रिया सीखने को कैसा बनाती है?",
        options: ["रोचक", "कठिन", "उबाऊ", "जटिल"],
        answer: 0,
    },
    {
        id: 43,
        question: "कविता पाठ किस प्रकार की गतिविधि है?",
        options: ["भाषा गतिविधि", "खेल गतिविधि", "प्रशासनिक गतिविधि", "वैज्ञानिक गतिविधि"],
        answer: 0,
    },
    {
        id: 44,
        question: "भाषा सहगामी क्रिया का मुख्य केंद्र कौन है?",
        options: ["विद्यार्थी", "भवन", "वेतन", "परीक्षा"],
        answer: 0,
    },
    {
        id: 45,
        question: "सहगामी गतिविधियों से क्या विकसित नहीं होता?",
        options: ["भय", "आत्मविश्वास", "नेतृत्व", "सहयोग"],
        answer: 0,
    },
    {
        id: 46,
        question: "कहानी कथन से क्या बढ़ता है?",
        options: ["भाषा कौशल", "तनाव", "दंड", "अनुशासन"],
        answer: 0,
    },
    {
        id: 47,
        question: "भाषा सहगामी क्रियाएँ किसे प्रोत्साहित करती हैं?",
        options: ["सक्रिय सहभागिता", "निष्क्रियता", "भय", "आलस्य"],
        answer: 0,
    },
    {
        id: 48,
        question: "सहगामी क्रियाएँ किस विकास से संबंधित हैं?",
        options: ["व्यक्तित्व विकास", "भवन विकास", "आर्थिक विकास", "प्रशासनिक विकास"],
        answer: 0,
    },
    {
        id: 49,
        question: "भाषा सहगामी गतिविधियों का अंतिम उद्देश्य क्या है?",
        options: ["भाषा दक्षता विकास", "परीक्षा लेना", "दंड देना", "अनुशासन करना"],
        answer: 0,
    },
    {
        id: 50,
        question: "भाषा सहगामी क्रियाओं से विद्यार्थी क्या सीखते हैं?",
        options: ["भाषा का व्यावहारिक प्रयोग", "केवल रटना", "केवल लिखना", "केवल परीक्षा देना"],
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
                        Hindi Methodology 5.3 and 5.4 - Part 2
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