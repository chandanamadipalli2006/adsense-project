"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "भाषा किसका प्रतीक है?",
        options: ["भावों का", "विचारों का", "संस्कृति का", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 27,
        question: "भाषा और संस्कृति का संबंध कैसा है?",
        options: ["घनिष्ठ", "कमजोर", "असंबंधित", "विरोधी"],
        answer: 0,
    },
    {
        id: 28,
        question: "भाषा किसकी वाहक है?",
        options: ["संस्कृति", "ज्ञान", "विचार", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 29,
        question: "भाषा के कितने कौशल महत्वपूर्ण हैं?",
        options: ["2", "3", "4", "5"],
        answer: 2,
    },
    {
        id: 30,
        question: "भाषा कौशल में कौन शामिल नहीं है?",
        options: ["श्रवण", "वाचन", "लेखन", "खेलना"],
        answer: 3,
    },
    {
        id: 31,
        question: "भाषा शिक्षण का मुख्य उद्देश्य क्या है?",
        options: ["परीक्षा", "भाषा कौशलों का विकास", "खेल", "चित्रकला"],
        answer: 1,
    },
    {
        id: 32,
        question: "मनुष्य भाषा कहाँ से सीखता है?",
        options: ["समाज से", "प्रकृति से", "पुस्तक से", "अकेले"],
        answer: 0,
    },
    {
        id: 33,
        question: "भाषा किसका माध्यम नहीं है?",
        options: ["संचार", "संस्कृति", "मौन", "ज्ञान"],
        answer: 2,
    },
    {
        id: 34,
        question: "भाषा का आधार क्या है?",
        options: ["ध्वनि", "रंग", "चित्र", "आकार"],
        answer: 0,
    },
    {
        id: 35,
        question: "भाषा का लिखित स्वरूप किससे संबंधित है?",
        options: ["पढ़ना-लिखना", "बोलना", "सुनना", "संकेत"],
        answer: 0,
    },
    {
        id: 36,
        question: "भाषा के माध्यम से क्या सुरक्षित रहता है?",
        options: ["संस्कृति", "परंपरा", "ज्ञान", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 37,
        question: "भाषा का निर्माण किससे होता है?",
        options: ["ध्वनियों से", "रंगों से", "संकेतों से", "चित्रों से"],
        answer: 0,
    },
    {
        id: 38,
        question: "भाषा किसकी अभिव्यक्ति है?",
        options: ["मनुष्य के विचारों की", "पशुओं की", "मशीनों की", "वस्तुओं की"],
        answer: 0,
    },
    {
        id: 39,
        question: "भाषा सीखने की पहली प्रक्रिया क्या है?",
        options: ["लिखना", "सुनना", "पढ़ना", "चित्र बनाना"],
        answer: 1,
    },
    {
        id: 40,
        question: "भाषा सीखने की दूसरी प्रक्रिया क्या है?",
        options: ["बोलना", "पढ़ना", "लिखना", "खेलना"],
        answer: 0,
    },
    {
        id: 41,
        question: "भाषा का संबंध किससे नहीं है?",
        options: ["भाव", "विचार", "संचार", "मौसम"],
        answer: 3,
    },
    {
        id: 42,
        question: "भाषा किसकी पहचान कराती है?",
        options: ["संस्कृति", "समाज", "व्यक्ति", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 43,
        question: "राष्ट्रीय शिक्षा नीति 2020 में किस पर बल दिया गया?",
        options: ["विदेशी भाषा", "मातृभाषा", "केवल अंग्रेज़ी", "संस्कृत"],
        answer: 1,
    },
    {
        id: 44,
        question: "भाषा की प्रकृति क्या मानी जाती है?",
        options: ["सामाजिक", "व्यक्तिगत", "वैज्ञानिक", "आर्थिक"],
        answer: 0,
    },
    {
        id: 45,
        question: "भाषा किसका साधन नहीं है?",
        options: ["संचार", "शिक्षा", "युद्ध", "ज्ञान"],
        answer: 2,
    },
    {
        id: 46,
        question: "भाषा का अध्ययन करने वाला विज्ञान क्या कहलाता है?",
        options: ["जीवविज्ञान", "भाषाविज्ञान", "गणित", "समाजशास्त्र"],
        answer: 1,
    },
    {
        id: 47,
        question: "भाषा की इकाई क्या है?",
        options: ["शब्द", "ध्वनि", "वाक्य", "पाठ"],
        answer: 1,
    },
    {
        id: 48,
        question: "भाषा का प्रयोग किसलिए होता है?",
        options: ["अभिव्यक्ति", "आदान-प्रदान", "ज्ञान", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 49,
        question: "भाषा का प्रमुख गुण क्या है?",
        options: ["परिवर्तनशीलता", "स्थिरता", "कठोरता", "निष्क्रियता"],
        answer: 0,
    },
    {
        id: 50,
        question: "भाषा शिक्षण में सबसे महत्वपूर्ण क्या है?",
        options: ["रटना", "कौशल विकास", "परीक्षा", "अंक"],
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
                        Hindi Methodology 1.1 - Part 2
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