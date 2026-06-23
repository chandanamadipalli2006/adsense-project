"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "पाठ्यपुस्तक क्या है?",
        options: ["पाठ्यक्रम आधारित पुस्तक", "कहानी पुस्तक", "खेल पुस्तक", "पत्रिका"],
        answer: 0,
    },
    {
        id: 27,
        question: "पाठ्यपुस्तक का मुख्य उद्देश्य क्या है?",
        options: ["विषय-वस्तु प्रस्तुत करना", "खेल कराना", "दंड देना", "परीक्षा लेना"],
        answer: 0,
    },
    {
        id: 28,
        question: "अच्छी पाठ्यपुस्तक की भाषा कैसी होनी चाहिए?",
        options: ["कठिन", "अस्पष्ट", "सरल और स्पष्ट", "जटिल"],
        answer: 2,
    },
    {
        id: 29,
        question: "पाठ्यपुस्तक किसके अनुसार तैयार की जाती है?",
        options: ["पाठ्यक्रम", "खेल", "भवन", "परीक्षा"],
        answer: 0,
    },
    {
        id: 30,
        question: "पाठ्यपुस्तक में क्या होना चाहिए?",
        options: ["चित्र", "गतिविधियाँ", "अभ्यास प्रश्न", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 31,
        question: "पाठ्यपुस्तक विद्यार्थियों में किसका विकास करती है?",
        options: ["भाषा कौशल", "ज्ञान", "सोचने की क्षमता", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 32,
        question: "पाठ्यपुस्तक शिक्षक के लिए क्या है?",
        options: ["मार्गदर्शक साधन", "खेल सामग्री", "दंड सामग्री", "मनोरंजन सामग्री"],
        answer: 0,
    },
    {
        id: 33,
        question: "आधुनिक शिक्षा में किसका उपयोग बढ़ा है?",
        options: ["ई-पुस्तक", "रेडियो", "समाचार पत्र", "पोस्टर"],
        answer: 0,
    },
    {
        id: 34,
        question: "पाठ्यपुस्तक में उदाहरण क्यों दिए जाते हैं?",
        options: ["समझ आसान बनाने हेतु", "समय व्यतीत करने हेतु", "दंड हेतु", "अनुशासन हेतु"],
        answer: 0,
    },
    {
        id: 35,
        question: "पाठ्यपुस्तक का आधार क्या है?",
        options: ["पाठ्यक्रम", "अवकाश", "खेल", "परीक्षा"],
        answer: 0,
    },
    {
        id: 36,
        question: "पाठ्यपुस्तक का संबंध किससे है?",
        options: ["अध्ययन सामग्री", "भवन", "खेल", "वेतन"],
        answer: 0,
    },
    {
        id: 37,
        question: "NCF-2005 ने पाठ्यपुस्तकों को कैसा बनाने पर बल दिया?",
        options: ["रोचक एवं गतिविधि आधारित", "कठिन", "केवल सैद्धांतिक", "लंबी"],
        answer: 0,
    },
    {
        id: 38,
        question: "पाठ्यपुस्तक का आधुनिक रूप क्या है?",
        options: ["ई-बुक", "पत्र", "समाचार पत्र", "डायरी"],
        answer: 0,
    },
    {
        id: 39,
        question: "पाठ्यपुस्तक में अभ्यास प्रश्न क्यों दिए जाते हैं?",
        options: ["पुनरावृत्ति हेतु", "दंड हेतु", "अवकाश हेतु", "मनोरंजन हेतु"],
        answer: 0,
    },
    {
        id: 40,
        question: "पाठ्यपुस्तक का मुख्य केंद्र कौन है?",
        options: ["विद्यार्थी", "भवन", "परीक्षा", "वेतन"],
        answer: 0,
    },
    {
        id: 41,
        question: "भाषा शिक्षण में पाठ्यपुस्तक क्या बढ़ाती है?",
        options: ["शब्दावली", "भाषा कौशल", "समझ", "उपर्युक्त सभी"],
        answer: 3,
    },
    {
        id: 42,
        question: "पाठ्यपुस्तक में चित्रों का उद्देश्य क्या है?",
        options: ["विषय को रोचक बनाना", "समय नष्ट करना", "अनुशासन करना", "दंड देना"],
        answer: 0,
    },
    {
        id: 43,
        question: "पाठ्यपुस्तक कैसी होनी चाहिए?",
        options: ["विद्यार्थी स्तर के अनुसार", "कठिन", "जटिल", "अस्पष्ट"],
        answer: 0,
    },
    {
        id: 44,
        question: "पाठ्यपुस्तक का उपयोग कौन करता है?",
        options: ["शिक्षक एवं विद्यार्थी", "केवल शिक्षक", "केवल विद्यार्थी", "प्रधानाचार्य"],
        answer: 0,
    },
    {
        id: 45,
        question: "डिजिटल सामग्री को किसका आधुनिक रूप माना जाता है?",
        options: ["पाठ्यपुस्तक", "भवन", "खेल सामग्री", "परीक्षा सामग्री"],
        answer: 0,
    },
    {
        id: 46,
        question: "पाठ्यपुस्तक शिक्षण को कैसा बनाती है?",
        options: ["व्यवस्थित", "अस्पष्ट", "कठिन", "जटिल"],
        answer: 0,
    },
    {
        id: 47,
        question: "पाठ्यपुस्तक में भाषा कैसी नहीं होनी चाहिए?",
        options: ["सरल", "स्पष्ट", "कठिन", "स्तरानुसार"],
        answer: 2,
    },
    {
        id: 48,
        question: "पाठ्यपुस्तक का उपयोग किसलिए होता है?",
        options: ["अध्ययन हेतु", "खेल हेतु", "दंड हेतु", "अवकाश हेतु"],
        answer: 0,
    },
    {
        id: 49,
        question: "पाठ्यक्रम और पाठ्यपुस्तक में कौन अधिक व्यापक है?",
        options: ["पाठ्यक्रम", "पाठ्यपुस्तक", "दोनों समान", "कोई नहीं"],
        answer: 0,
    },
    {
        id: 50,
        question: "पाठ्यपुस्तक का अंतिम उद्देश्य क्या है?",
        options: ["प्रभावी अधिगम", "परीक्षा बढ़ाना", "दंड देना", "अनुशासन करना"],
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
                        Hindi Methodology 5.1 and 5.2 - Part 2
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