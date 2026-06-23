"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "निदानात्मक शिक्षण का उद्देश्य क्या है?",
        options: [
            "कठिनाइयों की पहचान करना",
            "दंड देना",
            "खेल कराना",
            "अवकाश देना",
        ],
        answer: 0,
    },
    {
        id: 27,
        question: "उपचारात्मक शिक्षण कब दिया जाता है?",
        options: [
            "कठिनाइयों की पहचान के बाद",
            "परीक्षा से पहले",
            "अवकाश के दौरान",
            "खेल के समय",
        ],
        answer: 0,
    },
    {
        id: 28,
        question: "निदानात्मक शिक्षण का पहला चरण क्या है?",
        options: [
            "समस्या पहचानना",
            "परीक्षा लेना",
            "दंड देना",
            "गृहकार्य देना",
        ],
        answer: 0,
    },
    {
        id: 29,
        question: "उपचारात्मक शिक्षण का मुख्य उद्देश्य क्या है?",
        options: [
            "कमियों को दूर करना",
            "दंड देना",
            "समय व्यतीत करना",
            "खेल कराना",
        ],
        answer: 0,
    },
    {
        id: 30,
        question: "निदानात्मक शिक्षण किससे संबंधित है?",
        options: [
            "त्रुटि पहचान",
            "खेल",
            "भवन",
            "अनुशासन",
        ],
        answer: 0,
    },
    {
        id: 31,
        question: "निदानात्मक और उपचारात्मक शिक्षण का क्रम क्या है?",
        options: [
            "निदान → उपचार",
            "उपचार → निदान",
            "परीक्षा → खेल",
            "खेल → निदान",
        ],
        answer: 0,
    },
    {
        id: 32,
        question: "विद्यार्थियों की सीखने की कठिनाइयों को दूर करने के लिए क्या प्रयोग किया जाता है?",
        options: [
            "उपचारात्मक शिक्षण",
            "खेल",
            "दंड",
            "अवकाश",
        ],
        answer: 0,
    },
    {
        id: 33,
        question: "कोठारी आयोग का समय क्या था?",
        options: [
            "1964–66",
            "1986",
            "2005",
            "2020",
        ],
        answer: 0,
    },
    {
        id: 34,
        question: "भाषा शिक्षण में उपचारात्मक शिक्षण का महत्व क्यों है?",
        options: [
            "कमजोरियाँ दूर करने हेतु",
            "दंड हेतु",
            "खेल हेतु",
            "अनुशासन हेतु",
        ],
        answer: 0,
    },
    {
        id: 35,
        question: "उपचारात्मक शिक्षण किसे ध्यान में रखता है?",
        options: [
            "व्यक्तिगत भिन्नता",
            "भवन",
            "खेल",
            "समय",
        ],
        answer: 0,
    },
    {
        id: 36,
        question: "उच्चारण त्रुटि सुधारने हेतु क्या उपयोगी है?",
        options: [
            "उपचारात्मक शिक्षण",
            "खेल",
            "अवकाश",
            "दंड",
        ],
        answer: 0,
    },
    {
        id: 37,
        question: "निदानात्मक परीक्षण किसलिए किया जाता है?",
        options: [
            "त्रुटि पहचानने हेतु",
            "अंक देने हेतु",
            "खेल हेतु",
            "मनोरंजन हेतु",
        ],
        answer: 0,
    },
    {
        id: 38,
        question: "उपचारात्मक शिक्षण किसके बाद आता है?",
        options: [
            "निदानात्मक शिक्षण",
            "खेल",
            "वार्षिक परीक्षा",
            "अवकाश",
        ],
        answer: 0,
    },
    {
        id: 39,
        question: "NEP-2020 किस पर बल देती है?",
        options: [
            "समावेशी शिक्षा",
            "दंड",
            "रटना",
            "परीक्षा भय",
        ],
        answer: 0,
    },
    {
        id: 40,
        question: "निदानात्मक शिक्षण का अंतिम उद्देश्य क्या है?",
        options: [
            "समस्या पहचानना",
            "दंड देना",
            "खेल कराना",
            "अनुशासन करना",
        ],
        answer: 0,
    },
    {
        id: 41,
        question: "उपचारात्मक शिक्षण किसका समाधान करता है?",
        options: [
            "अधिगम कठिनाइयाँ",
            "खेल समस्या",
            "भवन समस्या",
            "आर्थिक समस्या",
        ],
        answer: 0,
    },
    {
        id: 42,
        question: "व्यक्तिगत मार्गदर्शन किससे संबंधित है?",
        options: [
            "उपचारात्मक शिक्षण",
            "खेल",
            "अवकाश",
            "अनुशासन",
        ],
        answer: 0,
    },
    {
        id: 43,
        question: "निदानात्मक शिक्षण का आधार क्या है?",
        options: [
            "त्रुटि विश्लेषण",
            "भवन",
            "खेल",
            "परीक्षा भय",
        ],
        answer: 0,
    },
    {
        id: 44,
        question: "उपचारात्मक शिक्षण से क्या बढ़ता है?",
        options: [
            "अधिगम स्तर",
            "भय",
            "तनाव",
            "दंड",
        ],
        answer: 0,
    },
    {
        id: 45,
        question: "उपचारात्मक शिक्षण का उद्देश्य क्या नहीं है?",
        options: [
            "दंड देना",
            "सुधार करना",
            "सहायता देना",
            "कठिनाई दूर करना",
        ],
        answer: 0,
    },
    {
        id: 46,
        question: "निदानात्मक परीक्षण किसकी पहचान करता है?",
        options: [
            "कमजोर क्षेत्र",
            "खेल क्षमता",
            "ऊँचाई",
            "आयु",
        ],
        answer: 0,
    },
    {
        id: 47,
        question: "भाषा शिक्षण में अतिरिक्त अभ्यास किससे संबंधित है?",
        options: [
            "उपचारात्मक शिक्षण",
            "खेल",
            "भवन",
            "अनुशासन",
        ],
        answer: 0,
    },
    {
        id: 48,
        question: "निदानात्मक शिक्षण का केंद्र क्या है?",
        options: [
            "विद्यार्थी समस्या",
            "भवन",
            "समय",
            "खेल",
        ],
        answer: 0,
    },
    {
        id: 49,
        question: "उपचारात्मक शिक्षण किसे बढ़ावा देता है?",
        options: [
            "प्रभावी अधिगम",
            "तनाव",
            "भय",
            "दंड",
        ],
        answer: 0,
    },
    {
        id: 50,
        question: "निदानात्मक और उपचारात्मक शिक्षण का अंतिम उद्देश्य क्या है?",
        options: [
            "विद्यार्थियों का अधिगम सुधारना",
            "दंड देना",
            "अनुशासन करना",
            "खेल कराना",
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
                        Hindi Methodology 6.5 and 6.6 - Part 2
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