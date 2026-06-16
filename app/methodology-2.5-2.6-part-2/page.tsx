"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "व्याख्यान विधि में मुख्य भूमिका किसकी होती है?",
        options: ["विद्यार्थी", "शिक्षक", "अभिभावक", "प्रधानाचार्य"],
        answer: 1,
    },
    {
        id: 2,
        question: "प्रश्नोत्तर विधि का संबंध किससे है?",
        options: ["किलपैट्रिक", "डॉडसन", "सुकरात", "फ्रॉबेल"],
        answer: 2,
    },
    {
        id: 3,
        question: "प्रश्नोत्तर विधि का मुख्य उद्देश्य क्या है?",
        options: ["रटना", "चिंतन एवं सहभागिता", "अनुशासन", "गृहकार्य"],
        answer: 1,
    },
    {
        id: 4,
        question: "परियोजना विधि के जनक कौन हैं?",
        options: ["सुकरात", "किलपैट्रिक", "डॉडसन", "हरबर्ट"],
        answer: 1,
    },
    {
        id: 5,
        question: "परियोजना विधि का विकास किस वर्ष हुआ?",
        options: ["1915", "1916", "1918", "1920"],
        answer: 2,
    },
    {
        id: 6,
        question: "कहानी विधि किस कौशल को विकसित करती है?",
        options: ["श्रवण कौशल", "कल्पनाशक्ति", "दोनों", "लेखन"],
        answer: 2,
    },
    {
        id: 7,
        question: "चर्चा विधि किसका विकास करती है?",
        options: ["संप्रेषण कौशल", "आलोचनात्मक चिंतन", "दोनों", "अनुशासन"],
        answer: 2,
    },
    {
        id: 8,
        question: "गतिविधि विधि में विद्यार्थी होते हैं—",
        options: ["निष्क्रिय", "सक्रिय", "मौन", "निर्भर"],
        answer: 1,
    },
    {
        id: 9,
        question: "NCF-2005 ने किस विधि को अधिक महत्व दिया?",
        options: ["रटंत विधि", "गतिविधि आधारित विधि", "दंड विधि", "व्याख्यान विधि"],
        answer: 1,
    },
    {
        id: 10,
        question: "सहकारी अधिगम विधि का आधार क्या है?",
        options: ["प्रतियोगिता", "सहयोग", "दंड", "नियंत्रण"],
        answer: 1,
    },
    {
        id: 11,
        question: "व्याख्यान विधि की प्रमुख सीमा क्या है?",
        options: ["समय अधिक लगता है", "विद्यार्थी निष्क्रिय रहते हैं", "महंगी है", "कठिन है"],
        answer: 1,
    },
    {
        id: 12,
        question: "प्रश्नोत्तर विधि से क्या विकसित होता है?",
        options: ["तार्किक चिंतन", "आत्मविश्वास", "दोनों", "अनुशासन"],
        answer: 2,
    },
    {
        id: 13,
        question: "परियोजना विधि का आधार क्या है?",
        options: ["वास्तविक समस्या", "परीक्षा", "गृहकार्य", "अनुशासन"],
        answer: 0,
    },
    {
        id: 14,
        question: "कहानी विधि का उपयोग मुख्यतः किस विषय में किया जाता है?",
        options: ["भाषा शिक्षण", "गणित", "विज्ञान", "भूगोल"],
        answer: 0,
    },
    {
        id: 15,
        question: "चर्चा विधि में शिक्षक की भूमिका होती है—",
        options: ["मार्गदर्शक", "नियंत्रक", "दंडाधिकारी", "निरीक्षक"],
        answer: 0,
    },
    {
        id: 16,
        question: "NEP-2020 ने किस प्रकार के अधिगम को बढ़ावा दिया?",
        options: ["अनुभवात्मक अधिगम", "रटंत अधिगम", "निष्क्रिय अधिगम", "दंडात्मक अधिगम"],
        answer: 0,
    },
    {
        id: 17,
        question: "भाषा शिक्षण में सबसे अधिक छात्र-केंद्रित विधि कौन-सी है?",
        options: ["व्याख्यान विधि", "गतिविधि विधि", "अनुवाद विधि", "निगमन विधि"],
        answer: 1,
    },
    {
        id: 18,
        question: "प्रश्नोत्तर विधि किस सिद्धांत पर आधारित है?",
        options: ["जिज्ञासा", "दंड", "नियंत्रण", "प्रतियोगिता"],
        answer: 0,
    },
    {
        id: 19,
        question: "सहकारी अधिगम में विद्यार्थी कार्य करते हैं—",
        options: ["अकेले", "समूह में", "घर पर", "ऑनलाइन"],
        answer: 1,
    },
    {
        id: 20,
        question: "भाषा शिक्षण की प्रभावी विधि मानी जाती है—",
        options: ["गतिविधि विधि", "दंड विधि", "रटंत विधि", "नियंत्रण विधि"],
        answer: 0,
    },
    {
        id: 21,
        question: "परियोजना विधि में शिक्षक होता है—",
        options: ["मार्गदर्शक", "नियंत्रक", "परीक्षक", "दंडाधिकारी"],
        answer: 0,
    },
    {
        id: 22,
        question: "कहानी विधि विद्यार्थियों में क्या विकसित करती है?",
        options: ["कल्पनाशक्ति", "भाषा कौशल", "दोनों", "अनुशासन"],
        answer: 2,
    },
    {
        id: 23,
        question: "चर्चा विधि में प्रमुखता किसकी होती है?",
        options: ["शिक्षक", "विद्यार्थी", "पुस्तक", "परीक्षा"],
        answer: 1,
    },
    {
        id: 24,
        question: "भाषा शिक्षण की आधुनिक विधियों का मुख्य उद्देश्य क्या है?",
        options: ["परीक्षा", "सक्रिय अधिगम", "अनुशासन", "गृहकार्य"],
        answer: 1,
    },
    {
        id: 25,
        question: "भाषा शिक्षण की सर्वोत्तम विधि कौन-सी मानी जाती है?",
        options: [
            "केवल व्याख्यान",
            "केवल अनुवाद",
            "परिस्थिति एवं उद्देश्य के अनुसार उपयुक्त विधि",
            "केवल प्रश्नोत्तर",
        ],
        answer: 2,
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
                        Hindi Methodology 2.5 & 2.6 - Part 2
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