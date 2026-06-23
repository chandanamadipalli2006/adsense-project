"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "पाठ्यक्रम (Curriculum) क्या है?",
        options: ["केवल पाठ्यपुस्तक", "केवल परीक्षा प्रणाली", "शिक्षा की संपूर्ण योजना", "केवल शिक्षण विधि"],
        answer: 2,
    },
    {
        id: 2,
        question: "पाठ्यक्रम का मुख्य उद्देश्य क्या है?",
        options: ["विद्यार्थियों का सर्वांगीण विकास", "केवल परीक्षा कराना", "केवल पाठ याद कराना", "केवल गृहकार्य देना"],
        answer: 0,
    },
    {
        id: 3,
        question: "पाठ्यक्रम में कौन-सा तत्व शामिल होता है?",
        options: ["शिक्षण उद्देश्य", "मूल्यांकन", "शिक्षण गतिविधियाँ", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 4,
        question: "पाठ्यक्रम किसे निर्धारित करता है?",
        options: ["शिक्षा की दिशा और लक्ष्य", "खेल का समय", "विद्यालय भवन", "अवकाश"],
        answer: 0,
    },
    {
        id: 5,
        question: "NCF-2005 किस पर बल देता है?",
        options: ["रटंत अधिगम", "गतिविधि आधारित अधिगम", "दंड आधारित शिक्षा", "परीक्षा आधारित शिक्षा"],
        answer: 1,
    },
    {
        id: 6,
        question: "NEP-2020 किस पर बल देती है?",
        options: ["केवल पुस्तक ज्ञान", "कौशल आधारित अधिगम", "रटंत शिक्षा", "दंड आधारित शिक्षा"],
        answer: 1,
    },
    {
        id: 7,
        question: "पाठ्यक्रम का संबंध किससे है?",
        options: ["केवल विषय-वस्तु", "संपूर्ण शिक्षण प्रक्रिया", "केवल परीक्षा", "केवल गृहकार्य"],
        answer: 1,
    },
    {
        id: 8,
        question: "आधुनिक पाठ्यक्रम कैसा होना चाहिए?",
        options: ["बालक-केंद्रित", "शिक्षक-केंद्रित", "परीक्षा-केंद्रित", "दंड-केंद्रित"],
        answer: 0,
    },
    {
        id: 9,
        question: "भाषा शिक्षण में पाठ्यक्रम का उद्देश्य क्या है?",
        options: ["भाषा कौशलों का विकास", "खेल सिखाना", "चित्रकला सिखाना", "विज्ञान सिखाना"],
        answer: 0,
    },
    {
        id: 10,
        question: "पाठ्यक्रम का एक महत्वपूर्ण घटक कौन-सा है?",
        options: ["मूल्यांकन", "भोजन", "भवन", "खेल मैदान"],
        answer: 0,
    },
    {
        id: 11,
        question: "किस नीति में आलोचनात्मक चिंतन पर बल दिया गया है?",
        options: ["NEP-2020", "NPE-1968", "आयोग-1952", "RTE-1990"],
        answer: 0,
    },
    {
        id: 12,
        question: "पाठ्यक्रम का उद्देश्य क्या नहीं है?",
        options: ["कौशल विकास", "व्यक्तित्व विकास", "सर्वांगीण विकास", "केवल परीक्षा अंक बढ़ाना"],
        answer: 3,
    },
    {
        id: 13,
        question: "पाठ्यक्रम को कौन तैयार करता है?",
        options: ["शिक्षा विशेषज्ञ", "विद्यार्थी", "अभिभावक", "चौकीदार"],
        answer: 0,
    },
    {
        id: 14,
        question: "पाठ्यक्रम शिक्षण को कैसा बनाता है?",
        options: ["व्यवस्थित", "अव्यवस्थित", "कठिन", "अस्पष्ट"],
        answer: 0,
    },
    {
        id: 15,
        question: "पाठ्यक्रम का संबंध किससे अधिक है?",
        options: ["अधिगम परिणामों से", "अवकाश से", "भवन से", "वेतन से"],
        answer: 0,
    },
    {
        id: 16,
        question: "पाठ्यक्रम में किसे महत्व दिया जाता है?",
        options: ["अनुभव आधारित अधिगम", "दंड", "परीक्षा भय", "अनुशासन"],
        answer: 0,
    },
    {
        id: 17,
        question: "पाठ्यक्रम का एक उद्देश्य कौन-सा है?",
        options: ["रचनात्मकता बढ़ाना", "तनाव बढ़ाना", "भय बढ़ाना", "दंड देना"],
        answer: 0,
    },
    {
        id: 18,
        question: "पाठ्यक्रम विद्यार्थियों के किस विकास पर बल देता है?",
        options: ["मानसिक", "सामाजिक", "भावनात्मक", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 19,
        question: "पाठ्यक्रम का आधार क्या होता है?",
        options: ["शिक्षण उद्देश्य", "दंड", "परीक्षा", "अवकाश"],
        answer: 0,
    },
    {
        id: 20,
        question: "NCF-2005 किस वर्ष लागू हुआ?",
        options: ["1990", "2000", "2005", "2020"],
        answer: 2,
    },
    {
        id: 21,
        question: "NEP कब जारी की गई?",
        options: ["1986", "2005", "2015", "2020"],
        answer: 3,
    },
    {
        id: 22,
        question: "पाठ्यक्रम में क्या शामिल नहीं है?",
        options: ["उद्देश्य", "गतिविधियाँ", "मूल्यांकन", "भवन निर्माण"],
        answer: 3,
    },
    {
        id: 23,
        question: "पाठ्यक्रम का स्वरूप कैसा होना चाहिए?",
        options: ["लचीला", "कठोर", "जटिल", "अस्पष्ट"],
        answer: 0,
    },
    {
        id: 24,
        question: "भाषा कौशलों में कौन शामिल नहीं है?",
        options: ["सुनना", "बोलना", "तैरना", "लिखना"],
        answer: 2,
    },
    {
        id: 25,
        question: "पाठ्यक्रम का अंतिम उद्देश्य क्या है?",
        options: ["प्रभावी अधिगम", "केवल परीक्षा", "दंड", "अनुशासन"],
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
                        Hindi Methodology 5.1 and 5.2 - Part 1
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