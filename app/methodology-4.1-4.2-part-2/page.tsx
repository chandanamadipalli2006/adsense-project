"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "न्यूनतम अधिगम स्तर (MLL) का पूर्ण रूप क्या है?",
        options: [
            "Maximum Learning Level",
            "Minimum Levels of Learning",
            "Medium Learning Level",
            "Main Learning Level",
        ],
        answer: 1,
    },
    {
        id: 27,
        question: "न्यूनतम अधिगम स्तर का मुख्य उद्देश्य क्या है?",
        options: [
            "केवल पाठ्यक्रम पूरा करना",
            "विद्यार्थियों को परीक्षा दिलाना",
            "विद्यार्थियों में न्यूनतम आवश्यक दक्षताओं का विकास करना",
            "केवल गृहकार्य करवाना",
        ],
        answer: 2,
    },
    {
        id: 28,
        question: "भारत में न्यूनतम अधिगम स्तर की अवधारणा को विशेष महत्व किस नीति में दिया गया?",
        options: [
            "राष्ट्रीय शिक्षा नीति 1968",
            "राष्ट्रीय शिक्षा नीति 1986",
            "राष्ट्रीय शिक्षा नीति 1992",
            "राष्ट्रीय शिक्षा नीति 2020",
        ],
        answer: 1,
    },
    {
        id: 29,
        question: "MLL के दिशा-निर्देश किस संस्था द्वारा जारी किए गए?",
        options: ["UGC", "SCERT", "NCERT", "CBSE"],
        answer: 2,
    },
    {
        id: 30,
        question: "NCERT द्वारा MLL संबंधी दिशा-निर्देश किस वर्ष जारी किए गए?",
        options: ["1986", "1990", "1991", "2005"],
        answer: 2,
    },
    {
        id: 31,
        question: "न्यूनतम अधिगम स्तर मुख्यतः किससे संबंधित है?",
        options: [
            "विद्यार्थियों की अपेक्षित उपलब्धियों से",
            "विद्यालय भवन से",
            "शिक्षक वेतन से",
            "खेल गतिविधियों से",
        ],
        answer: 0,
    },
    {
        id: 32,
        question: "MLL का मुख्य ध्यान किस पर होता है?",
        options: [
            "केवल पाठ्यक्रम पर",
            "केवल परीक्षा पर",
            "सीखने के परिणामों पर",
            "केवल अनुशासन पर",
        ],
        answer: 2,
    },
    {
        id: 33,
        question: "निम्नलिखित में से कौन-सा MLL के अंतर्गत प्रमुख विषय है?",
        options: [
            "भाषा",
            "गणित",
            "पर्यावरण अध्ययन",
            "उपर्युक्त सभी",
        ],
        answer: 3,
    },
    {
        id: 34,
        question: "न्यूनतम अधिगम स्तर शिक्षण को किस प्रकार बनाता है?",
        options: ["अस्पष्ट", "उद्देश्यपूर्ण", "कठिन", "जटिल"],
        answer: 1,
    },
    {
        id: 35,
        question: "NCF-2005 ने किस प्रकार के शिक्षण पर बल दिया?",
        options: [
            "रटंत शिक्षण",
            "बालक-केंद्रित शिक्षण",
            "दंड आधारित शिक्षण",
            "परीक्षा आधारित शिक्षण",
        ],
        answer: 1,
    },
    {
        id: 36,
        question: "राष्ट्रीय शिक्षा नीति 2020 किस प्रकार के अधिगम पर बल देती है?",
        options: [
            "रटंत अधिगम",
            "दक्षता-आधारित अधिगम",
            "दंड आधारित अधिगम",
            "पुस्तक आधारित अधिगम",
        ],
        answer: 1,
    },
    {
        id: 37,
        question: "MLL के अनुसार शिक्षक का मुख्य कार्य क्या है?",
        options: [
            "केवल पढ़ाना",
            "केवल परीक्षा लेना",
            "यह सुनिश्चित करना कि विद्यार्थी न्यूनतम दक्षताएँ प्राप्त करें",
            "केवल गृहकार्य देना",
        ],
        answer: 2,
    },
    {
        id: 38,
        question: "न्यूनतम अधिगम स्तर किस स्तर पर प्रारंभ में लागू किया गया था?",
        options: [
            "उच्च शिक्षा",
            "माध्यमिक स्तर",
            "प्राथमिक स्तर",
            "विश्वविद्यालय स्तर",
        ],
        answer: 2,
    },
    {
        id: 39,
        question: "MLL का संबंध किससे अधिक है?",
        options: [
            "विद्यालय भवन",
            "अधिगम परिणाम",
            "पुस्तकालय",
            "खेल मैदान",
        ],
        answer: 1,
    },
    {
        id: 40,
        question: "AP TET के अनुसार न्यूनतम अधिगम स्तर का अंतिम उद्देश्य क्या है?",
        options: [
            "केवल परीक्षा में अंक बढ़ाना",
            "सभी विद्यार्थियों को अपेक्षित न्यूनतम अधिगम उपलब्ध कराना",
            "केवल पाठ्यक्रम पूरा करना",
            "अनुशासन बनाए रखना",
        ],
        answer: 1,
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
                        Hindi Methodology 4.1 and 4.2 - Part 2
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