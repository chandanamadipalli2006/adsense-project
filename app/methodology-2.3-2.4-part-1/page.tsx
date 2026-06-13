"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "भाषा शिक्षण का मुख्य उद्देश्य क्या है?",
        options: [
            "केवल व्याकरण सिखाना",
            "केवल परीक्षा में सफलता दिलाना",
            "भाषा कौशलों का विकास करना",
            "केवल पाठ्यपुस्तक पढ़ाना",
        ],
        answer: 2,
    },
    {
        id: 2,
        question: "भाषा के चार मूलभूत कौशल कौन-से हैं?",
        options: [
            "सुनना, बोलना, पढ़ना, लिखना",
            "पढ़ना, खेलना, लिखना, गाना",
            "बोलना, चित्र बनाना, पढ़ना, लिखना",
            "सुनना, खेलना, लिखना, गाना",
        ],
        answer: 0,
    },
    {
        id: 3,
        question: "भाषा शिक्षण का कौन-सा सूत्र विद्यार्थियों के पूर्व ज्ञान पर आधारित है?",
        options: [
            "सरल से कठिन",
            "ज्ञात से अज्ञात",
            "पूर्ण से अंश",
            "स्थूल से सूक्ष्म",
        ],
        answer: 1,
    },
    {
        id: 4,
        question: '"सरल से कठिन" सूत्र का अर्थ है—',
        options: [
            "कठिन विषय पहले पढ़ाना",
            "सरल विषयों से प्रारंभ करना",
            "केवल कठिन अभ्यास कराना",
            "केवल व्याकरण पढ़ाना",
        ],
        answer: 1,
    },
    {
        id: 5,
        question: "NCF-2005 में भाषा शिक्षण का आधार क्या माना गया है?",
        options: [
            "दंड",
            "बहुभाषिकता",
            "परीक्षा",
            "गृहकार्य",
        ],
        answer: 1,
    },
    {
        id: 6,
        question: "भाषा शिक्षण का कौन-सा सिद्धांत बालक के अनुभवों पर आधारित है?",
        options: [
            "ज्ञात से अज्ञात",
            "आगमन से निगमन",
            "विश्लेषण से संश्लेषण",
            "पूर्ण से अंश",
        ],
        answer: 0,
    },
    {
        id: 7,
        question: "भाषा शिक्षण में सुनना किस प्रकार का कौशल है?",
        options: [
            "अभिव्यक्तात्मक",
            "ग्रहणात्मक",
            "सृजनात्मक",
            "सामाजिक",
        ],
        answer: 1,
    },
    {
        id: 8,
        question: "भाषा शिक्षण में लिखना किस प्रकार का कौशल है?",
        options: [
            "ग्रहणात्मक",
            "अभिव्यक्तात्मक",
            "निष्क्रिय",
            "सामाजिक",
        ],
        answer: 1,
    },
    {
        id: 9,
        question: '"पूर्ण से अंश" सूत्र में पहले क्या पढ़ाया जाता है?',
        options: [
            "अक्षर",
            "शब्द",
            "पूरा पाठ",
            "व्याकरण",
        ],
        answer: 2,
    },
    {
        id: 10,
        question: "भाषा शिक्षण का कौन-सा सिद्धांत बालक-केंद्रित है?",
        options: [
            "रटंत शिक्षण",
            "गतिविधि आधारित शिक्षण",
            "व्याख्यान विधि",
            "दंड आधारित शिक्षण",
        ],
        answer: 1,
    },
    {
        id: 11,
        question: "NCF का प्रकाशन किस वर्ष हुआ?",
        options: [
            "2003",
            "2004",
            "2005",
            "2006",
        ],
        answer: 2,
    },
    {
        id: 12,
        question: "NCFTE का प्रकाशन किस वर्ष हुआ?",
        options: [
            "2007",
            "2008",
            "2009",
            "2010",
        ],
        answer: 2,
    },
    {
        id: 13,
        question: 'भाषा शिक्षण में "स्थूल से सूक्ष्म" का अर्थ है—',
        options: [
            "छोटे से बड़ा",
            "संपूर्ण से विवरण की ओर",
            "कठिन से सरल",
            "ज्ञात से अज्ञात",
        ],
        answer: 1,
    },
    {
        id: 14,
        question: "भाषा शिक्षण में विद्यार्थियों की सक्रिय भागीदारी क्यों आवश्यक है?",
        options: [
            "अनुशासन हेतु",
            "भाषा कौशल विकास हेतु",
            "परीक्षा हेतु",
            "अंक बढ़ाने हेतु",
        ],
        answer: 1,
    },
    {
        id: 15,
        question: "कहानी-कथन किस भाषा कौशल के विकास में सहायक है?",
        options: [
            "बोलना",
            "सुनना",
            "दोनों",
            "लिखना",
        ],
        answer: 2,
    },
    {
        id: 16,
        question: "भाषा शिक्षण का मुख्य केंद्र कौन है?",
        options: [
            "शिक्षक",
            "विद्यार्थी",
            "प्रधानाचार्य",
            "पुस्तक",
        ],
        answer: 1,
    },
    {
        id: 17,
        question: "भाषा शिक्षण में बहुभाषिकता को क्या माना गया है?",
        options: [
            "बाधा",
            "समस्या",
            "संसाधन",
            "चुनौती",
        ],
        answer: 2,
    },
    {
        id: 18,
        question: "राष्ट्रीय शिक्षा नीति 2020 में किस प्रकार के अधिगम पर बल दिया गया है?",
        options: [
            "रटंत अधिगम",
            "अनुभवात्मक अधिगम",
            "निष्क्रिय अधिगम",
            "पुस्तक आधारित अधिगम",
        ],
        answer: 1,
    },
    {
        id: 19,
        question: '"विशेष से सामान्य" सूत्र किस शिक्षण पद्धति से संबंधित है?',
        options: [
            "आगमन विधि",
            "निगमन विधि",
            "व्याख्यान विधि",
            "प्रदर्शन विधि",
        ],
        answer: 0,
    },
    {
        id: 20,
        question: "भाषा शिक्षण में संवाद का उद्देश्य है—",
        options: [
            "अनुशासन",
            "संप्रेषण कौशल",
            "गृहकार्य",
            "मूल्यांकन",
        ],
        answer: 1,
    },
    {
        id: 21,
        question: "भाषा शिक्षण का कौन-सा सिद्धांत सीखने को सरल बनाता है?",
        options: [
            "सरल से कठिन",
            "कठिन से सरल",
            "सूक्ष्म से स्थूल",
            "अज्ञात से ज्ञात",
        ],
        answer: 0,
    },
    {
        id: 22,
        question: "सुनना और पढ़ना किस प्रकार के कौशल हैं?",
        options: [
            "ग्रहणात्मक",
            "अभिव्यक्तात्मक",
            "सृजनात्मक",
            "सामाजिक",
        ],
        answer: 0,
    },
    {
        id: 23,
        question: "बोलना और लिखना किस प्रकार के कौशल हैं?",
        options: [
            "ग्रहणात्मक",
            "अभिव्यक्तात्मक",
            "निष्क्रिय",
            "यांत्रिक",
        ],
        answer: 1,
    },
    {
        id: 24,
        question: "भाषा शिक्षण में अभ्यास का महत्व क्यों है?",
        options: [
            "भाषा अभ्यास से सीखी जाती है",
            "परीक्षा के लिए",
            "समय बिताने हेतु",
            "गृहकार्य हेतु",
        ],
        answer: 0,
    },
    {
        id: 25,
        question: "कौन-सा सिद्धांत बालक के अनुभवों का उपयोग करता है?",
        options: [
            "ज्ञात से अज्ञात",
            "सरल से कठिन",
            "पूर्ण से अंश",
            "स्थूल से सूक्ष्म",
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
                        Hindi Methodology 2.3 and 2.4 - Part 1
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