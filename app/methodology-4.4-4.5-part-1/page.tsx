"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "इकाई योजना किससे संबंधित होती है?",
        options: ["एक प्रश्न", "एक दिन", "पूरे अध्याय या इकाई", "परीक्षा"],
        answer: 2,
    },
    {
        id: 2,
        question: "इकाई योजना का मुख्य उद्देश्य क्या है?",
        options: ["समय व्यतीत करना", "शिक्षण को व्यवस्थित बनाना", "अनुशासन बनाए रखना", "परीक्षा लेना"],
        answer: 1,
    },
    {
        id: 3,
        question: "इकाई योजना किसके द्वारा तैयार की जाती है?",
        options: ["अभिभावक", "प्रधानाचार्य", "शिक्षक", "विद्यार्थी"],
        answer: 2,
    },
    {
        id: 4,
        question: "पाठ योजना और इकाई योजना में मुख्य अंतर क्या है?",
        options: ["कोई अंतर नहीं", "पाठ योजना पूरे अध्याय से संबंधित होती है", "इकाई योजना बड़े भाग से संबंधित होती है", "दोनों केवल परीक्षा हेतु हैं"],
        answer: 2,
    },
    {
        id: 5,
        question: "इकाई योजना का प्रमुख घटक कौन-सा है?",
        options: ["उद्देश्य", "खेल", "अवकाश", "भोजन"],
        answer: 0,
    },
    {
        id: 6,
        question: "इकाई योजना में शिक्षण सामग्री का उपयोग क्यों किया जाता है?",
        options: ["मनोरंजन हेतु", "प्रभावी शिक्षण हेतु", "परीक्षा हेतु", "दंड हेतु"],
        answer: 1,
    },
    {
        id: 7,
        question: "इकाई योजना में किसका निर्धारण पहले किया जाता है?",
        options: ["खेल", "शिक्षण उद्देश्य", "गृहकार्य", "अनुशासन"],
        answer: 1,
    },
    {
        id: 8,
        question: "इकाई योजना किसे सरल बनाती है?",
        options: ["शिक्षण प्रक्रिया", "खेल", "चित्रकला", "प्रशासन"],
        answer: 0,
    },
    {
        id: 9,
        question: "इकाई योजना किससे संबंधित नहीं है?",
        options: ["मूल्यांकन", "शिक्षण सामग्री", "विषय-वस्तु", "वेतन निर्धारण"],
        answer: 3,
    },
    {
        id: 10,
        question: "इकाई योजना शिक्षण को कैसा बनाती है?",
        options: ["अस्पष्ट", "अव्यवस्थित", "उद्देश्यपूर्ण", "जटिल"],
        answer: 2,
    },
    {
        id: 11,
        question: "इकाई योजना में समय प्रबंधन का क्या लाभ है?",
        options: ["पाठ्यक्रम पूर्ण होता है", "खेल बढ़ते हैं", "अनुशासन घटता है", "अवकाश बढ़ता है"],
        answer: 0,
    },
    {
        id: 12,
        question: "इकाई योजना का अंतिम चरण कौन-सा है?",
        options: ["प्रस्तावना", "मूल्यांकन", "पुनरावृत्ति", "उद्देश्य"],
        answer: 1,
    },
    {
        id: 13,
        question: "NCF-2005 किस पर बल देता है?",
        options: ["रटंत शिक्षा", "बालक-केंद्रित शिक्षा", "परीक्षा आधारित शिक्षा", "दंड आधारित शिक्षा"],
        answer: 1,
    },
    {
        id: 14,
        question: "NEP-2020 किस प्रकार के अधिगम पर बल देती है?",
        options: ["रटंत अधिगम", "अनुभवात्मक अधिगम", "दंड आधारित अधिगम", "पुस्तक आधारित अधिगम"],
        answer: 1,
    },
    {
        id: 15,
        question: "इकाई योजना का आधार क्या है?",
        options: ["उद्देश्य", "खेल", "परीक्षा", "दंड"],
        answer: 0,
    },
    {
        id: 16,
        question: "इकाई योजना में किसका समावेश किया जाता है?",
        options: ["गतिविधियाँ", "अवकाश", "भोजन", "यात्रा"],
        answer: 0,
    },
    {
        id: 17,
        question: "इकाई योजना का संबंध किससे अधिक है?",
        options: ["संपूर्ण अधिगम प्रक्रिया", "खेल", "भवन निर्माण", "वेतन"],
        answer: 0,
    },
    {
        id: 18,
        question: "इकाई योजना से क्या बढ़ता है?",
        options: ["शिक्षण की प्रभावशीलता", "अनुशासनहीनता", "भ्रम", "कठिनाई"],
        answer: 0,
    },
    {
        id: 19,
        question: "इकाई योजना में विद्यार्थियों की भूमिका क्या होती है?",
        options: ["निष्क्रिय", "सक्रिय", "मौन", "सीमित"],
        answer: 1,
    },
    {
        id: 20,
        question: "इकाई योजना में मूल्यांकन क्यों आवश्यक है?",
        options: ["सीखने का आकलन करने हेतु", "खेल हेतु", "अनुशासन हेतु", "समय व्यतीत करने हेतु"],
        answer: 0,
    },
    {
        id: 21,
        question: "इकाई योजना में शिक्षण विधियाँ क्यों निर्धारित की जाती हैं?",
        options: ["पाठ को प्रभावी बनाने हेतु", "समय नष्ट करने हेतु", "केवल परीक्षा हेतु", "दंड हेतु"],
        answer: 0,
    },
    {
        id: 22,
        question: "इकाई योजना किस प्रकार की योजना है?",
        options: ["अल्पकालीन", "व्यापक", "व्यक्तिगत", "आर्थिक"],
        answer: 1,
    },
    {
        id: 23,
        question: "इकाई योजना का संबंध किससे है?",
        options: ["पाठ्यक्रम", "खेल", "अवकाश", "वेतन"],
        answer: 0,
    },
    {
        id: 24,
        question: "इकाई योजना का मुख्य केंद्र कौन है?",
        options: ["शिक्षक", "विद्यार्थी", "अभिभावक", "प्रधानाचार्य"],
        answer: 1,
    },
    {
        id: 25,
        question: "इकाई योजना किसे बेहतर बनाती है?",
        options: ["अधिगम परिणाम", "खेल", "अवकाश", "अनुशासन"],
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
                        Hindi Methodology 4.4 and 4.5 - Part 1
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