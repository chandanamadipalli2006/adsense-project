"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "भाषा के कितने प्रमुख कौशल होते हैं?",
        options: ["2", "3", "4", "5"],
        answer: 2,
    },
    {
        id: 2,
        question: "भाषा के चार प्रमुख कौशल कौन-से हैं?",
        options: [
            "सुनना, बोलना, पढ़ना, लिखना",
            "सुनना, गाना, पढ़ना, लिखना",
            "बोलना, खेलना, पढ़ना, लिखना",
            "सुनना, बोलना, चित्र बनाना, लिखना",
        ],
        answer: 0,
    },
    {
        id: 3,
        question: "भाषा अधिगम का प्राकृतिक क्रम क्या है?",
        options: [
            "पढ़ना → लिखना → सुनना → बोलना",
            "सुनना → बोलना → पढ़ना → लिखना",
            "बोलना → सुनना → लिखना → पढ़ना",
            "लिखना → पढ़ना → सुनना → बोलना",
        ],
        answer: 1,
    },
    {
        id: 4,
        question: "भाषा का प्रथम कौशल कौन-सा है?",
        options: ["पढ़ना", "लिखना", "सुनना", "बोलना"],
        answer: 2,
    },
    {
        id: 5,
        question: "भाषा का सबसे जटिल कौशल कौन-सा माना जाता है?",
        options: ["श्रवण", "भाषण", "पठन", "लेखन"],
        answer: 3,
    },
    {
        id: 6,
        question: "श्रवण एवं पठन किस प्रकार के कौशल हैं?",
        options: ["अभिव्यक्तात्मक", "ग्रहणात्मक", "रचनात्मक", "सामाजिक"],
        answer: 1,
    },
    {
        id: 7,
        question: "भाषण एवं लेखन किस प्रकार के कौशल हैं?",
        options: ["ग्रहणात्मक", "निष्क्रिय", "अभिव्यक्तात्मक", "मौखिक"],
        answer: 2,
    },
    {
        id: 8,
        question: "श्रवण कौशल के विकास हेतु कौन-सी गतिविधि उपयुक्त है?",
        options: ["कहानी सुनाना", "निबंध लेखन", "व्याकरण अभ्यास", "प्रश्नपत्र हल करना"],
        answer: 0,
    },
    {
        id: 9,
        question: "भाषण कौशल विकसित करने का सर्वोत्तम माध्यम क्या है?",
        options: ["मौन पठन", "वाद-विवाद एवं भाषण", "नकल लेखन", "शब्दार्थ लिखना"],
        answer: 1,
    },
    {
        id: 10,
        question: "पठन कौशल का मुख्य उद्देश्य क्या है?",
        options: ["ज्ञान प्राप्त करना", "केवल उच्चारण करना", "परीक्षा देना", "गृहकार्य पूरा करना"],
        answer: 0,
    },
    {
        id: 11,
        question: "लेखन कौशल से किसका विकास होता है?",
        options: ["सृजनात्मकता", "तार्किक चिंतन", "अभिव्यक्ति क्षमता", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 12,
        question: "मौन पठन का उद्देश्य क्या है?",
        options: ["मनोरंजन", "अर्थ ग्रहण करना", "उच्चारण करना", "पाठ याद करना"],
        answer: 1,
    },
    {
        id: 13,
        question: "सस्वर पठन से किसका विकास होता है?",
        options: ["उच्चारण", "आत्मविश्वास", "वाचन कौशल", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 14,
        question: "NCF-2005 में भाषा को क्या माना गया है?",
        options: ["केवल विषय", "ज्ञान निर्माण का साधन", "परीक्षा का माध्यम", "अनुशासन का साधन"],
        answer: 1,
    },
    {
        id: 15,
        question: "NCFTE का प्रकाशन किस वर्ष हुआ?",
        options: ["2005", "2007", "2009", "2010"],
        answer: 2,
    },
    {
        id: 16,
        question: "NEP-2020 किस प्रकार के अधिगम पर बल देती है?",
        options: [
            "रटंत अधिगम",
            "संवादात्मक एवं अनुभवात्मक अधिगम",
            "परीक्षा आधारित अधिगम",
            "दंड आधारित अधिगम",
        ],
        answer: 1,
    },
    {
        id: 17,
        question: "कौन-सा कौशल विद्यार्थी को प्रभावी वक्ता बनाता है?",
        options: ["श्रवण", "पठन", "भाषण", "लेखन"],
        answer: 2,
    },
    {
        id: 18,
        question: "निबंध लेखन किस कौशल से संबंधित है?",
        options: ["श्रवण", "भाषण", "पठन", "लेखन"],
        answer: 3,
    },
    {
        id: 19,
        question: "भाषा शिक्षण का मुख्य उद्देश्य क्या है?",
        options: [
            "केवल व्याकरण सिखाना",
            "भाषा कौशलों का विकास करना",
            "परीक्षा में अंक बढ़ाना",
            "गृहकार्य देना",
        ],
        answer: 1,
    },
    {
        id: 20,
        question: "भाषा कौशलों के विकास के लिए कौन-सी पद्धति सर्वाधिक उपयुक्त है?",
        options: [
            "रटंत शिक्षण",
            "गतिविधि आधारित शिक्षण",
            "दंड आधारित शिक्षण",
            "व्याख्यान विधि",
        ],
        answer: 1,
    },
    {
        id: 21,
        question: "भाषण कौशल विकसित करने हेतु कौन-सी गतिविधि सर्वाधिक उपयुक्त है?",
        options: ["समूह चर्चा", "निबंध लेखन", "मौन पठन", "श्रुतिलेख"],
        answer: 0,
    },
    {
        id: 22,
        question: "भाषा कौशलों के संतुलित विकास के लिए क्या आवश्यक है?",
        options: [
            "केवल पठन",
            "केवल लेखन",
            "चारों कौशलों का समन्वित विकास",
            "केवल श्रवण",
        ],
        answer: 2,
    },
    {
        id: 23,
        question: "भाषा शिक्षण में श्रवण कौशल का प्रमुख लाभ क्या है?",
        options: [
            "सही उच्चारण एवं समझ का विकास",
            "केवल लेखन सुधार",
            "केवल व्याकरण ज्ञान",
            "केवल परीक्षा सफलता",
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
                        Hindi Methodology 3.1 - Part 1
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