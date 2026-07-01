"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "भाषा शब्द किस धातु से बना है?",
        options: ["लिख्", "भाष्", "पठ्", "गम्"],
        answer: 1,
    },
    {
        id: 2,
        question: "‘भाषा’ का मूल अर्थ क्या है?",
        options: ["पढ़ना", "लिखना", "बोलना", "सुनना"],
        answer: 2,
    },
    {
        id: 3,
        question: "भाषा का मुख्य कार्य क्या है?",
        options: ["खेलना", "संचार करना", "चित्र बनाना", "गणना करना"],
        answer: 1,
    },
    {
        id: 4,
        question: "भाषा किसका माध्यम है?",
        options: ["मनोरंजन", "विचारों के आदान-प्रदान", "व्यापार", "राजनीति"],
        answer: 1,
    },
    {
        id: 5,
        question: "भाषा का सबसे महत्वपूर्ण उद्देश्य क्या है?",
        options: ["ज्ञान प्राप्त करना", "विचार व्यक्त करना", "यात्रा करना", "परीक्षा देना"],
        answer: 1,
    },
    {
        id: 6,
        question: "भाषा किसकी अर्जित संपत्ति है?",
        options: ["पशु", "समाज", "मनुष्य", "पेड़"],
        answer: 2,
    },
    {
        id: 7,
        question: "भाषा जन्मजात होती है या अर्जित?",
        options: ["जन्मजात", "अर्जित", "दोनों", "इनमें से कोई नहीं"],
        answer: 1,
    },
    {
        id: 8,
        question: "भाषा का विकास किसके कारण होता है?",
        options: ["समाज", "खेल", "मौसम", "विज्ञान"],
        answer: 0,
    },
    {
        id: 9,
        question: "भाषा का स्वरूप कैसा होता है?",
        options: ["स्थिर", "परिवर्तनशील", "कठोर", "सीमित"],
        answer: 1,
    },
    {
        id: 10,
        question: "भाषा किसका आधार है?",
        options: ["सामाजिक जीवन", "खेल", "चित्रकला", "संगीत"],
        answer: 0,
    },
    {
        id: 11,
        question: "भाषा के कितने प्रमुख रूप हैं?",
        options: ["2", "3", "4", "5"],
        answer: 1,
    },
    {
        id: 12,
        question: "निम्न में से भाषा का रूप कौन-सा है?",
        options: ["मौखिक", "लिखित", "सांकेतिक", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 13,
        question: "बोलने और सुनने से संबंधित भाषा कौन-सी है?",
        options: ["लिखित भाषा", "मौखिक भाषा", "सांकेतिक भाषा", "साहित्यिक भाषा"],
        answer: 1,
    },
    {
        id: 14,
        question: "पढ़ने और लिखने से संबंधित भाषा कौन-सी है?",
        options: ["मौखिक भाषा", "लिखित भाषा", "सांकेतिक भाषा", "लोकभाषा"],
        answer: 1,
    },
    {
        id: 15,
        question: "संकेतों द्वारा व्यक्त भाषा क्या कहलाती है?",
        options: ["मातृभाषा", "राष्ट्रभाषा", "सांकेतिक भाषा", "लोकभाषा"],
        answer: 2,
    },
    {
        id: 16,
        question: "भाषा का संबंध किससे होता है?",
        options: ["समाज", "संस्कृति", "विचार", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 17,
        question: "भाषा का अध्ययन किस शास्त्र में किया जाता है?",
        options: ["इतिहास", "भाषाविज्ञान", "समाजशास्त्र", "अर्थशास्त्र"],
        answer: 1,
    },
    {
        id: 18,
        question: "भाषा का मूल तत्व क्या है?",
        options: ["वाक्य", "शब्द", "ध्वनि", "अनुच्छेद"],
        answer: 2,
    },
    {
        id: 19,
        question: "भाषा का सबसे छोटा रूप क्या है?",
        options: ["वाक्य", "ध्वनि", "अनुच्छेद", "पाठ"],
        answer: 1,
    },
    {
        id: 20,
        question: "भाषा के बिना क्या संभव नहीं है?",
        options: ["भोजन", "संप्रेषण", "यात्रा", "व्यापार"],
        answer: 1,
    },
    {
        id: 21,
        question: "भाषा किसका साधन है?",
        options: ["ज्ञानार्जन", "संचार", "शिक्षा", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 22,
        question: "भाषा का सामाजिक स्वरूप किसे कहा जाता है?",
        options: ["समूह में सीखी जाने वाली", "अकेले सीखी जाने वाली", "लिखी जाने वाली", "पढ़ी जाने वाली"],
        answer: 0,
    },
    {
        id: 23,
        question: "भाषा किसके साथ बदलती रहती है?",
        options: ["समय", "स्थान", "परिस्थिति", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 24,
        question: "संस्कृत से विकसित भाषा कौन-सी है?",
        options: ["अंग्रेज़ी", "हिंदी", "तमिल", "अरबी"],
        answer: 1,
    },
    {
        id: 25,
        question: "भाषा की प्रकृति कैसी होती है?",
        options: ["गतिशील", "स्थिर", "निष्क्रिय", "सीमित"],
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
                        Hindi Methodology 1.1 - Part 1
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