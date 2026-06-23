"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "प्रत्यक्ष पद्धति में भाषा किस माध्यम से सिखाई जाती है?",
        options: ["मातृभाषा द्वारा", "लक्ष्य भाषा द्वारा", "संकेत भाषा द्वारा", "अनुवाद द्वारा"],
        answer: 1,
    },
    {
        id: 2,
        question: "प्रत्यक्ष पद्धति में किसका प्रयोग बहुत कम किया जाता है?",
        options: ["चित्र", "वस्तुएँ", "मातृभाषा", "क्रियाएँ"],
        answer: 2,
    },
    {
        id: 3,
        question: "प्रत्यक्ष पद्धति में किस कौशल पर अधिक बल दिया जाता है?",
        options: ["बोलना और सुनना", "लिखना", "व्याकरण", "अनुवाद"],
        answer: 0,
    },
    {
        id: 4,
        question: "प्रत्यक्ष पद्धति में शिक्षक की भूमिका क्या होती है?",
        options: ["नियंत्रक", "मार्गदर्शक", "परीक्षक", "निरीक्षक"],
        answer: 1,
    },
    {
        id: 5,
        question: "प्रत्यक्ष पद्धति किस सिद्धांत पर आधारित है?",
        options: ["रटंत अधिगम", "स्वाभाविक भाषा अधिगम", "अनुवाद", "दंड"],
        answer: 1,
    },
    {
        id: 6,
        question: "प्रत्यक्ष पद्धति में अर्थ स्पष्ट करने के लिए क्या उपयोग किया जाता है?",
        options: ["वस्तुएँ और चित्र", "दंड", "परीक्षा", "नोट्स"],
        answer: 0,
    },
    {
        id: 7,
        question: "प्रत्यक्ष पद्धति किसे विकसित करती है?",
        options: ["भाषा कौशल", "खेल कौशल", "चित्रकला", "गणितीय कौशल"],
        answer: 0,
    },
    {
        id: 8,
        question: "प्रत्यक्ष पद्धति में विद्यार्थी की भूमिका क्या होती है?",
        options: ["निष्क्रिय", "सक्रिय", "मौन", "सीमित"],
        answer: 1,
    },
    {
        id: 9,
        question: "प्रत्यक्ष पद्धति का मुख्य उद्देश्य क्या है?",
        options: ["व्याकरण याद कराना", "भाषा का स्वाभाविक प्रयोग सिखाना", "परीक्षा लेना", "गृहकार्य देना"],
        answer: 1,
    },
    {
        id: 10,
        question: "प्रत्यक्ष पद्धति में किसका प्रयोग नहीं किया जाता?",
        options: ["अनुवाद", "चित्र", "गतिविधियाँ", "प्रश्नोत्तर"],
        answer: 0,
    },
    {
        id: 11,
        question: "परोक्ष पद्धति को अन्य किस नाम से जाना जाता है?",
        options: ["खेल पद्धति", "अनुवाद पद्धति", "प्रत्यक्ष पद्धति", "क्रियात्मक पद्धति"],
        answer: 1,
    },
    {
        id: 12,
        question: "परोक्ष पद्धति में किसका प्रयोग किया जाता है?",
        options: ["मातृभाषा", "अभिनय", "खेल", "प्रयोगशाला"],
        answer: 0,
    },
    {
        id: 13,
        question: "परोक्ष पद्धति किसके लिए अधिक उपयोगी है?",
        options: ["बोलने के लिए", "व्याकरण के लिए", "खेल के लिए", "अभिनय के लिए"],
        answer: 1,
    },
    {
        id: 14,
        question: "परोक्ष पद्धति में किस पर कम बल दिया जाता है?",
        options: ["लिखना", "पढ़ना", "बोलना और सुनना", "अनुवाद"],
        answer: 2,
    },
    {
        id: 15,
        question: "परोक्ष पद्धति का आधार क्या है?",
        options: ["मातृभाषा", "खेल", "चित्र", "गतिविधियाँ"],
        answer: 0,
    },
    {
        id: 16,
        question: "परोक्ष पद्धति का मुख्य उद्देश्य क्या है?",
        options: ["भाषा नियमों को समझाना", "खेल सिखाना", "अभिनय कराना", "चित्र बनाना"],
        answer: 0,
    },
    {
        id: 17,
        question: "परोक्ष पद्धति में कौन महत्वपूर्ण है?",
        options: ["चित्र", "अनुवाद", "अभिनय", "प्रयोग"],
        answer: 1,
    },
    {
        id: 18,
        question: "परोक्ष पद्धति में विद्यार्थी किस माध्यम से सीखते हैं?",
        options: ["मातृभाषा", "संगीत", "चित्र", "खेल"],
        answer: 0,
    },
    {
        id: 19,
        question: "परोक्ष पद्धति किस प्रकार की भाषा सीखने में उपयोगी है?",
        options: ["लिखित भाषा", "अभिनय", "संगीत", "खेल"],
        answer: 0,
    },
    {
        id: 20,
        question: "परोक्ष पद्धति में कौन-सा पक्ष कमजोर रहता है?",
        options: ["बोलना", "लिखना", "पढ़ना", "व्याकरण"],
        answer: 0,
    },
    {
        id: 21,
        question: "खेल पद्धति का आधार क्या है?",
        options: ["खेलते हुए सीखना", "दंड", "परीक्षा", "गृहकार्य"],
        answer: 0,
    },
    {
        id: 22,
        question: "खेल पद्धति के प्रवर्तक कौन थे?",
        options: ["जॉन ड्यूई", "फ्रेडरिक फ्रोबेल", "स्किनर", "ब्लूम"],
        answer: 1,
    },
    {
        id: 23,
        question: "किंडरगार्टन प्रणाली किस वर्ष प्रारंभ हुई?",
        options: ["1837", "1850", "1920", "1963"],
        answer: 0,
    },
    {
        id: 24,
        question: "खेल पद्धति में कौन-सी गतिविधि उपयोगी है?",
        options: ["पहेली", "अभिनय", "गीत", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 25,
        question: "खेल पद्धति से क्या बढ़ता है?",
        options: ["रुचि", "तनाव", "भय", "दंड"],
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
                        Hindi Methodology 4.6 - Part 1
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