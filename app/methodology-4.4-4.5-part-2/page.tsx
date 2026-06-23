"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "शिक्षण उपकरण का मुख्य उद्देश्य क्या है?",
        options: ["शिक्षण को प्रभावी बनाना", "समय बिताना", "अनुशासन करना", "परीक्षा लेना"],
        answer: 0,
    },
    {
        id: 27,
        question: "निम्नलिखित में कौन शिक्षण उपकरण है?",
        options: ["चार्ट", "ब्लैकबोर्ड", "मॉडल", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 28,
        question: "चित्र किस प्रकार का शिक्षण उपकरण है?",
        options: ["दृश्य", "श्रव्य", "दृश्य-श्रव्य", "डिजिटल"],
        answer: 0,
    },
    {
        id: 29,
        question: "रेडियो किस प्रकार का उपकरण है?",
        options: ["दृश्य", "श्रव्य", "दृश्य-श्रव्य", "लिखित"],
        answer: 1,
    },
    {
        id: 30,
        question: "टेलीविजन किस प्रकार का उपकरण है?",
        options: ["दृश्य", "श्रव्य", "दृश्य-श्रव्य", "मौखिक"],
        answer: 2,
    },
    {
        id: 31,
        question: "ब्लैकबोर्ड किसका उदाहरण है?",
        options: ["शिक्षण उपकरण", "खेल उपकरण", "प्रयोगशाला उपकरण", "कार्यालय उपकरण"],
        answer: 0,
    },
    {
        id: 32,
        question: "फ्लैश कार्ड किस श्रेणी में आते हैं?",
        options: ["दृश्य उपकरण", "श्रव्य उपकरण", "दृश्य-श्रव्य उपकरण", "यांत्रिक उपकरण"],
        answer: 0,
    },
    {
        id: 33,
        question: "शिक्षण उपकरण विद्यार्थियों में क्या बढ़ाते हैं?",
        options: ["रुचि", "भय", "आलस्य", "तनाव"],
        answer: 0,
    },
    {
        id: 34,
        question: "शिक्षण उपकरण सीखने को कैसा बनाते हैं?",
        options: ["कठिन", "अस्पष्ट", "रोचक", "असंगत"],
        answer: 2,
    },
    {
        id: 35,
        question: "स्मार्ट बोर्ड किस प्रकार का उपकरण है?",
        options: ["श्रव्य", "दृश्य", "दृश्य-श्रव्य", "मौखिक"],
        answer: 2,
    },
    {
        id: 36,
        question: "शिक्षण उपकरण का उपयोग किसे स्थायी बनाता है?",
        options: ["अधिगम", "अनुशासन", "खेल", "अवकाश"],
        answer: 0,
    },
    {
        id: 37,
        question: "कोठारी आयोग का कार्यकाल क्या था?",
        options: ["1950–52", "1964–66", "1970–72", "1980–82"],
        answer: 1,
    },
    {
        id: 38,
        question: "कोठारी आयोग ने किस पर बल दिया?",
        options: ["तकनीकी शिक्षण सामग्री", "दंड", "परीक्षा", "खेल"],
        answer: 0,
    },
    {
        id: 39,
        question: "कंप्यूटर किस प्रकार का शिक्षण उपकरण है?",
        options: ["दृश्य", "श्रव्य", "दृश्य-श्रव्य", "लिखित"],
        answer: 2,
    },
    {
        id: 40,
        question: "शिक्षण उपकरण कठिन विषयों को कैसा बनाते हैं?",
        options: ["जटिल", "सरल", "लंबा", "कठिनतर"],
        answer: 1,
    },
    {
        id: 41,
        question: "मानचित्र किसका उदाहरण है?",
        options: ["दृश्य उपकरण", "श्रव्य उपकरण", "दृश्य-श्रव्य उपकरण", "डिजिटल उपकरण"],
        answer: 0,
    },
    {
        id: 42,
        question: "ऑडियो रिकॉर्डिंग किसका उदाहरण है?",
        options: ["दृश्य", "श्रव्य", "दृश्य-श्रव्य", "लिखित"],
        answer: 1,
    },
    {
        id: 43,
        question: "शिक्षण उपकरण का प्रयोग किसके लिए होता है?",
        options: ["प्रभावी शिक्षण", "दंड", "अवकाश", "अनुशासन"],
        answer: 0,
    },
    {
        id: 44,
        question: "शिक्षण उपकरण विद्यार्थियों में क्या विकसित करते हैं?",
        options: ["जिज्ञासा", "उदासी", "भय", "तनाव"],
        answer: 0,
    },
    {
        id: 45,
        question: "वीडियो किसका उदाहरण है?",
        options: ["दृश्य", "श्रव्य", "दृश्य-श्रव्य", "लिखित"],
        answer: 2,
    },
    {
        id: 46,
        question: "शिक्षण उपकरण का दूसरा नाम क्या है?",
        options: ["शिक्षण सहायक सामग्री", "परीक्षा सामग्री", "खेल सामग्री", "पुस्तक सामग्री"],
        answer: 0,
    },
    {
        id: 47,
        question: "NCF-2005 ने किस पर बल दिया?",
        options: ["शिक्षण सामग्री के प्रयोग पर", "रटंत शिक्षा पर", "परीक्षा पर", "दंड पर"],
        answer: 0,
    },
    {
        id: 48,
        question: "NEP-2020 ने किस पर बल दिया?",
        options: ["डिजिटल शिक्षा", "दंड", "खेल", "अनुशासन"],
        answer: 0,
    },
    {
        id: 49,
        question: "शिक्षण उपकरण का सबसे बड़ा लाभ क्या है?",
        options: ["अधिगम को रोचक बनाना", "अनुशासन बढ़ाना", "गृहकार्य बढ़ाना", "परीक्षा बढ़ाना"],
        answer: 0,
    },
    {
        id: 50,
        question: "शिक्षण उपकरण का अंतिम उद्देश्य क्या है?",
        options: ["प्रभावी अधिगम", "खेल", "अवकाश", "अनुशासन"],
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
                        Hindi Methodology 4.4 and 4.5 - Part 2
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