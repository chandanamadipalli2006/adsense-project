"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "विकास के प्रमुख आयाम कौन-कौन से हैं?",
        options: [
            "केवल शारीरिक और मानसिक",
            "शारीरिक, संज्ञानात्मक, संवेगात्मक, सामाजिक, नैतिक एवं भाषाई",
            "केवल सामाजिक और नैतिक",
            "केवल भाषाई",
        ],
        answer: 1,
    },
    {
        id: 2,
        question: "शारीरिक विकास का संबंध किससे है?",
        options: [
            "ऊँचाई, वजन एवं मांसपेशियों की वृद्धि",
            "सोचने की क्षमता",
            "भावनाओं का नियंत्रण",
            "भाषा का विकास",
        ],
        answer: 0,
    },
    {
        id: 3,
        question: "संज्ञानात्मक विकास का संबंध किससे है?",
        options: [
            "शारीरिक वृद्धि",
            "सोचने, समझने एवं समस्या समाधान की क्षमता",
            "मित्रता",
            "भावनाओं",
        ],
        answer: 1,
    },
    {
        id: 4,
        question: "संवेगात्मक विकास का संबंध किससे है?",
        options: [
            "भावनाओं को समझने एवं नियंत्रित करने की क्षमता",
            "ऊँचाई बढ़ने से",
            "भाषा सीखने से",
            "गणित सीखने से",
        ],
        answer: 0,
    },
    {
        id: 5,
        question: "सामाजिक विकास का संबंध किससे है?",
        options: [
            "दूसरों के साथ संबंध एवं सहयोग",
            "केवल शारीरिक वृद्धि",
            "केवल भाषा",
            "केवल स्मृति",
        ],
        answer: 0,
    },
    {
        id: 6,
        question: "नैतिक विकास का संबंध किससे है?",
        options: [
            "सही एवं गलत में अंतर करने की क्षमता",
            "ऊँचाई एवं वजन",
            "भाषा सीखना",
            "शारीरिक कौशल",
        ],
        answer: 0,
    },
    {
        id: 7,
        question: "भाषाई विकास का संबंध किससे है?",
        options: [
            "सुनना, बोलना, पढ़ना एवं लिखना",
            "केवल दौड़ना",
            "केवल खेलना",
            "केवल भावनाएँ",
        ],
        answer: 0,
    },
    {
        id: 8,
        question: "संज्ञानात्मक विकास के सिद्धांत के प्रतिपादक कौन हैं?",
        options: [
            "Gesell",
            "Jean Piaget",
            "Erik Erikson",
            "Kohlberg",
        ],
        answer: 1,
    },
    {
        id: 9,
        question: "Jean Piaget का संज्ञानात्मक विकास सिद्धांत किस वर्ष प्रस्तुत हुआ?",
        options: [
            "1925",
            "1936",
            "1950",
            "1958",
        ],
        answer: 1,
    },
    {
        id: 10,
        question: "मनोसामाजिक विकास सिद्धांत किसने दिया?",
        options: [
            "Piaget",
            "Kohlberg",
            "Erik Erikson",
            "Skinner",
        ],
        answer: 2,
    },
    {
        id: 11,
        question: "Erik Erikson ने अपना सिद्धांत किस वर्ष प्रस्तुत किया?",
        options: [
            "1934",
            "1936",
            "1950",
            "1958",
        ],
        answer: 2,
    },
    {
        id: 12,
        question: "मित्रों के साथ सहयोग करना किस विकास का उदाहरण है?",
        options: [
            "सामाजिक",
            "नैतिक",
            "भाषाई",
            "संज्ञानात्मक",
        ],
        answer: 0,
    },
    {
        id: 13,
        question: "सही और गलत का निर्णय लेने की क्षमता किस विकास से संबंधित है?",
        options: [
            "सामाजिक",
            "संज्ञानात्मक",
            "नैतिक",
            "शारीरिक",
        ],
        answer: 2,
    },
    {
        id: 14,
        question: "नैतिक विकास का सिद्धांत किसने प्रस्तुत किया?",
        options: [
            "Gesell",
            "Piaget",
            "Kohlberg",
            "Watson",
        ],
        answer: 2,
    },
    {
        id: 15,
        question: "Lawrence Kohlberg ने नैतिक विकास सिद्धांत किस वर्ष प्रस्तुत किया?",
        options: [
            "1936",
            "1950",
            "1958",
            "1978",
        ],
        answer: 2,
    },
    {
        id: 16,
        question: "सुनना, बोलना, पढ़ना एवं लिखना किस विकास का भाग है?",
        options: [
            "नैतिक",
            "भाषाई",
            "सामाजिक",
            "शारीरिक",
        ],
        answer: 1,
    },
    {
        id: 17,
        question: "भाषा विकास एवं सामाजिक अंतःक्रिया पर सबसे अधिक बल किसने दिया?",
        options: [
            "Gesell",
            "Piaget",
            "Lev Vygotsky",
            "Kohlberg",
        ],
        answer: 2,
    },
    {
        id: 18,
        question: "Lev Vygotsky का प्रमुख सिद्धांत किस वर्ष प्रकाशित हुआ?",
        options: [
            "1925",
            "1934",
            "1936",
            "1950",
        ],
        answer: 1,
    },
    {
        id: 19,
        question: "बच्चा दौड़ना एवं कूदना सीखता है। यह किस विकास का उदाहरण है?",
        options: [
            "भाषाई",
            "शारीरिक",
            "नैतिक",
            "संवेगात्मक",
        ],
        answer: 1,
    },
    {
        id: 20,
        question: "बच्चा गणित की समस्या हल करता है। यह किस विकास का उदाहरण है?",
        options: [
            "शारीरिक",
            "सामाजिक",
            "संज्ञानात्मक",
            "नैतिक",
        ],
        answer: 2,
    },
    {
        id: 21,
        question: "बच्चा क्रोध पर नियंत्रण करना सीखता है। यह किस विकास का उदाहरण है?",
        options: [
            "सामाजिक",
            "संवेगात्मक",
            "नैतिक",
            "भाषाई",
        ],
        answer: 1,
    },
    {
        id: 22,
        question: "बच्चा विद्यालय में समूह कार्य करता है। यह किस विकास का उदाहरण है?",
        options: [
            "सामाजिक",
            "नैतिक",
            "भाषाई",
            "शारीरिक",
        ],
        answer: 0,
    },
    {
        id: 23,
        question: "बच्चा सत्य बोलता है एवं नियमों का पालन करता है। यह किस विकास का उदाहरण है?",
        options: [
            "सामाजिक",
            "नैतिक",
            "संज्ञानात्मक",
            "शारीरिक",
        ],
        answer: 1,
    },
    {
        id: 24,
        question: "बच्चा कहानी पढ़कर उसका सार बताता है। यह किस विकास का उदाहरण है?",
        options: [
            "शारीरिक",
            "भाषाई",
            "सामाजिक",
            "संवेगात्मक",
        ],
        answer: 1,
    },
    {
        id: 25,
        question: "निम्नलिखित में कौन-सा कथन सही है?",
        options: [
            "विकास केवल शारीरिक होता है।",
            "विकास केवल मानसिक होता है।",
            "सभी विकास आयाम एक-दूसरे से जुड़े होते हैं।",
            "केवल भाषा विकास महत्वपूर्ण है।",
        ],
        answer: 2,
    },
    {
        id: 26,
        question: "Elizabeth B. Hurlock ने विकास को किस प्रकार की प्रक्रिया कहा?",
        options: [
            "रुक-रुक कर होने वाली",
            "सतत एवं क्रमिक",
            "केवल जैविक",
            "केवल मानसिक",
        ],
        answer: 1,
    },
    {
        id: 27,
        question: "Elizabeth B. Hurlock की प्रसिद्ध पुस्तक का महत्वपूर्ण संस्करण किस वर्ष प्रकाशित हुआ?",
        options: [
            "1936",
            "1950",
            "1958",
            "1978",
        ],
        answer: 3,
    },
    {
        id: 28,
        question: "शिक्षक को विकास के सभी आयामों का ज्ञान क्यों होना चाहिए?",
        options: [
            "केवल परीक्षा लेने के लिए",
            "केवल अनुशासन बनाए रखने के लिए",
            "बालक के सर्वांगीण विकास के लिए",
            "केवल गृहकार्य देने के लिए",
        ],
        answer: 2,
    },
    {
        id: 29,
        question: "निम्नलिखित में कौन-सा विकास आयाम भाषा, विचार एवं सामाजिक अंतःक्रिया को जोड़ता है?",
        options: [
            "Piaget का सिद्धांत",
            "Gesell का सिद्धांत",
            "Vygotsky का सिद्धांत",
            "Kohlberg का सिद्धांत",
        ],
        answer: 2,
    },
]

export default function Psychology4() {
    const [answers, setAnswers] = useState<Record<number, number>>({})
    const [submitted, setSubmitted] = useState(false)

    const handleAnswer = (questionId: number, optionIndex: number) => {
        setAnswers((previous) => ({
            ...previous,
            [questionId]: optionIndex,
        }))
    }

    const score = questions.reduce((total, question) => {
        return total + (answers[question.id] === question.answer ? 1 : 0)
    }, 0)

    const percentage = ((score / questions.length) * 100).toFixed(2)

    const allAnswered =
        Object.keys(answers).length === questions.length

    /* =========================
       RESULT PAGE
    ========================= */

    if (submitted) {
        return (
            <div className="min-h-screen bg-slate-50 py-10 px-4">

                <div className="max-w-4xl mx-auto">

                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">

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

                    {/* Answer Review */}

                    <div className="space-y-6">

                        <h2 className="text-2xl font-bold text-center">
                            Answer Review
                        </h2>

                        {questions.map((question) => {

                            const isCorrect =
                                answers[question.id] === question.answer

                            return (
                                <div
                                    key={question.id}
                                    className={`p - 5 rounded - xl border - 2 ${
    isCorrect
        ? "border-green-500 bg-green-50"
        : "border-red-500 bg-red-50"
} `}
                                >

                                    <h3 className="font-semibold mb-3">
                                        {question.id}. {question.question}
                                    </h3>

                                    <p>
                                        <strong>Your Answer:</strong>{" "}
                                        {question.options[answers[question.id]]}
                                    </p>

                                    <p>
                                        <strong>Correct Answer:</strong>{" "}
                                        {question.options[question.answer]}
                                    </p>

                                    <p
                                        className={`font - bold mt - 2 ${
    isCorrect
        ? "text-green-600"
        : "text-red-600"
} `}
                                    >
                                        {isCorrect
                                            ? "✅ Correct"
                                            : "❌ Wrong"}
                                    </p>

                                </div>
                            )
                        })}

                    </div>

                </div>

            </div>
        )
    }

    /* =========================
       TEST PAGE
    ========================= */

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4">

            <div className="max-w-4xl mx-auto">

                {/* Test Heading */}

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

                    <h1 className="text-4xl font-bold text-center text-cyan-700">
                        Psychology 1.4 - विकास के आयाम
                    </h1>

                    <p className="text-center text-gray-600 mt-4">
                        TET (2A) Psychology Practice Test
                    </p>

                    <p className="text-center text-gray-500 mt-2">
                        शारीरिक • संज्ञानात्मक • संवेगात्मक • सामाजिक • नैतिक • भाषाई
                    </p>

                    <p className="text-center text-gray-500 mt-2">
                        Total Questions: {questions.length}
                    </p>

                </div>

                {/* Questions */}

                {questions.map((question) => (

                    <div
                        key={question.id}
                        className="bg-white rounded-2xl shadow-md p-6 mb-6"
                    >

                        <h2 className="font-semibold text-lg mb-4">
                            {question.id}. {question.question}
                        </h2>

                        <div className="space-y-3">

                            {question.options.map((option, index) => (

                                <label
                                    key={index}
                                    className="flex items-center gap-3 border rounded-xl p-3 hover:bg-cyan-50 cursor-pointer"
                                >

                                    <input
                                        type="radio"
                                        name={`question - ${ question.id } `}
                                        checked={
                                            answers[question.id] === index
                                        }
                                        onChange={() =>
                                            handleAnswer(
                                                question.id,
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

                {/* Submit Button */}

                <div className="text-center">

                    <button
                        disabled={!allAnswered}
                        onClick={() => setSubmitted(true)}
                        className={`px - 8 py - 4 rounded - xl text - white font - semibold text - lg ${
    allAnswered
        ? "bg-cyan-600 hover:bg-cyan-700"
        : "bg-gray-400 cursor-not-allowed"
} `}
                    >
                        Submit Test
                    </button>

                    {!allAnswered && (
                        <p className="text-red-500 mt-3">
                            Please answer all {questions.length} questions before submitting.
                        </p>
                    )}

                </div>

            </div>

        </div>
    )
}
