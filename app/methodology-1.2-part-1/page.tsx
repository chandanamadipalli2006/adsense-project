"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "माध्यमिक स्तर पर हिंदी शिक्षण का प्रमुख उद्देश्य क्या है?",
        options: [
            "केवल व्याकरण सिखाना",
            "भाषा कौशलों का विकास करना",
            "केवल परीक्षा की तैयारी कराना",
            "केवल कविता पढ़ाना",
        ],
        answer: 1,
    },
    {
        id: 2,
        question: "हिंदी शिक्षण में कौन-से चार भाषा कौशल विकसित किए जाते हैं?",
        options: [
            "पढ़ना, लिखना, सुनना, बोलना",
            "पढ़ना, गाना, खेलना, लिखना",
            "सुनना, खेलना, चित्र बनाना, बोलना",
            "लिखना, चित्र बनाना, अभिनय, पढ़ना",
        ],
        answer: 0,
    },
    {
        id: 3,
        question: "प्रथम भाषा से क्या अभिप्राय है?",
        options: [
            "विद्यालय में सीखी जाने वाली भाषा",
            "घर में सीखी जाने वाली भाषा",
            "विदेशी भाषा",
            "राजभाषा",
        ],
        answer: 1,
    },
    {
        id: 4,
        question: "द्वितीय भाषा किसे कहते हैं?",
        options: [
            "मातृभाषा",
            "घर में बोली जाने वाली भाषा",
            "मातृभाषा के बाद सीखी जाने वाली भाषा",
            "प्राचीन भाषा",
        ],
        answer: 2,
    },
    {
        id: 5,
        question: "माध्यमिक स्तर पर हिंदी शिक्षण का लक्ष्य है—",
        options: [
            "भाषिक दक्षता विकसित करना",
            "केवल रटना",
            "केवल परीक्षा पास कराना",
            "केवल पाठ याद कराना",
        ],
        answer: 0,
    },
    {
        id: 6,
        question: "भाषा शिक्षण का मुख्य उद्देश्य क्या है?",
        options: [
            "संप्रेषण क्षमता का विकास",
            "केवल लेखन",
            "केवल पठन",
            "केवल व्याकरण",
        ],
        answer: 0,
    },
    {
        id: 7,
        question: "प्रथम भाषा शिक्षण में शिक्षक को किस पर अधिक ध्यान देना चाहिए?",
        options: [
            "स्वाभाविक भाषा प्रयोग पर",
            "केवल व्याकरण पर",
            "केवल साहित्य पर",
            "केवल परीक्षा पर",
        ],
        answer: 0,
    },
    {
        id: 8,
        question: "द्वितीय भाषा शिक्षण में सर्वाधिक महत्वपूर्ण क्या है?",
        options: [
            "भाषा का व्यवहारिक प्रयोग",
            "केवल व्याकरण",
            "केवल अनुवाद",
            "केवल रटना",
        ],
        answer: 0,
    },
    {
        id: 9,
        question: "हिंदी शिक्षण का साहित्यिक उद्देश्य क्या है?",
        options: [
            "साहित्य के प्रति रुचि विकसित करना",
            "केवल परीक्षा कराना",
            "केवल लेखन कराना",
            "केवल कहानी सुनाना",
        ],
        answer: 0,
    },
    {
        id: 10,
        question: "भाषा शिक्षण का सामाजिक उद्देश्य क्या है?",
        options: [
            "सामाजिक समायोजन",
            "प्रतियोगिता",
            "अनुशासन",
            "दंड",
        ],
        answer: 0,
    },
    {
        id: 11,
        question: "माध्यमिक स्तर पर हिंदी शिक्षण किस सिद्धांत पर आधारित होना चाहिए?",
        options: [
            "सरल से कठिन",
            "कठिन से सरल",
            "ज्ञात से अज्ञात",
            "A और C दोनों",
        ],
        answer: 3,
    },
    {
        id: 12,
        question: "प्रथम भाषा शिक्षण का प्रमुख आधार क्या है?",
        options: [
            "पूर्व अनुभव",
            "अनुवाद",
            "शब्दकोश",
            "परीक्षा",
        ],
        answer: 0,
    },
    {
        id: 13,
        question: "द्वितीय भाषा शिक्षण में कौन-सी विधि अधिक उपयोगी मानी जाती है?",
        options: [
            "प्रत्यक्ष विधि",
            "व्याख्यान विधि",
            "परियोजना विधि",
            "व्याकरण विधि",
        ],
        answer: 0,
    },
    {
        id: 14,
        question: "भाषा शिक्षण में श्रवण कौशल का संबंध किससे है?",
        options: [
            "सुनने से",
            "बोलने से",
            "पढ़ने से",
            "लिखने से",
        ],
        answer: 0,
    },
    {
        id: 15,
        question: "हिंदी शिक्षण में बोलने का कौशल किससे संबंधित है?",
        options: [
            "मौखिक अभिव्यक्ति",
            "लेखन",
            "पठन",
            "व्याकरण",
        ],
        answer: 0,
    },
    {
        id: 16,
        question: "पठन कौशल का उद्देश्य क्या है?",
        options: [
            "अर्थ ग्रहण करना",
            "रटना",
            "परीक्षा देना",
            "लेखन",
        ],
        answer: 0,
    },
    {
        id: 17,
        question: "लेखन कौशल का विकास किससे होता है?",
        options: [
            "निरंतर अभ्यास से",
            "रटने से",
            "परीक्षा से",
            "दंड से",
        ],
        answer: 0,
    },
    {
        id: 18,
        question: "प्रथम भाषा शिक्षण में कौन-सा कौशल पहले विकसित होता है?",
        options: [
            "श्रवण",
            "लेखन",
            "पठन",
            "व्याकरण",
        ],
        answer: 0,
    },
    {
        id: 19,
        question: "द्वितीय भाषा शिक्षण में सबसे बड़ी चुनौती क्या है?",
        options: [
            "भाषा वातावरण का अभाव",
            "अधिक पुस्तकें",
            "अधिक शिक्षक",
            "अधिक समय",
        ],
        answer: 0,
    },
    {
        id: 20,
        question: "भाषा शिक्षण में प्रेरणा का महत्व क्या है?",
        options: [
            "सीखने की रुचि बढ़ती है",
            "परीक्षा कठिन होती है",
            "अनुशासन बढ़ता है",
            "समय बचता है",
        ],
        answer: 0,
    },
    {
        id: 21,
        question: "हिंदी शिक्षण का सांस्कृतिक उद्देश्य क्या है?",
        options: [
            "संस्कृति से परिचित कराना",
            "केवल पाठ पढ़ाना",
            "केवल व्याकरण पढ़ाना",
            "परीक्षा लेना",
        ],
        answer: 0,
    },
    {
        id: 22,
        question: "प्रथम भाषा शिक्षण में त्रुटियों को कैसे देखा जाता है?",
        options: [
            "सीखने की प्रक्रिया का भाग",
            "अपराध",
            "अनुशासनहीनता",
            "असफलता",
        ],
        answer: 0,
    },
    {
        id: 23,
        question: "द्वितीय भाषा शिक्षण में शब्द भंडार बढ़ाने का सर्वोत्तम उपाय क्या है?",
        options: [
            "संदर्भ में शब्द सीखना",
            "रटना",
            "दंड देना",
            "केवल शब्दकोश",
        ],
        answer: 0,
    },
    {
        id: 24,
        question: "माध्यमिक स्तर पर हिंदी शिक्षण का एक उद्देश्य है—",
        options: [
            "सृजनात्मकता का विकास",
            "केवल परीक्षा",
            "केवल व्याकरण",
            "केवल अनुवाद",
        ],
        answer: 0,
    },
    {
        id: 25,
        question: "भाषा शिक्षण में मूल्यांकन का उद्देश्य क्या है?",
        options: [
            "प्रगति जानना",
            "दंड देना",
            "तुलना करना",
            "भय उत्पन्न करना",
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
                        Hindi Methodology 1.2 - Part 1
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