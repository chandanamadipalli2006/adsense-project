"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "शैशवावस्था (Infancy) की आयु क्या है?",
        options: [
            "जन्म–2 वर्ष",
            "2–6 वर्ष",
            "6–12 वर्ष",
            "12–18 वर्ष",
        ],
        answer: 0,
    },
    {
        id: 2,
        question: "बाल्यावस्था (Childhood) की सामान्य आयुसीमा क्या है?",
        options: [
            "जन्म–2 वर्ष",
            "2–12 वर्ष",
            "12–18 वर्ष",
            "18–25 वर्ष",
        ],
        answer: 1,
    },
    {
        id: 3,
        question: "किशोरावस्था (Adolescence) की सामान्य आयुसीमा क्या है?",
        options: [
            "2–6 वर्ष",
            "6–12 वर्ष",
            "12–18 वर्ष",
            "18–30 वर्ष",
        ],
        answer: 2,
    },
    {
        id: 4,
        question: "जीवन की सबसे तीव्र शारीरिक वृद्धि किस अवस्था में होती है?",
        options: [
            "बाल्यावस्था",
            "किशोरावस्था",
            "शैशवावस्था",
            "वृद्धावस्था",
        ],
        answer: 2,
    },
    {
        id: 5,
        question: "शिशु सामान्यतः किस आयु में चलना प्रारंभ करता है?",
        options: [
            "3–4 माह",
            "6–8 माह",
            "12–15 माह",
            "24 माह",
        ],
        answer: 2,
    },
    {
        id: 6,
        question: "परिपक्वता सिद्धांत के प्रमुख प्रतिपादक कौन हैं?",
        options: [
            "Piaget",
            "Gesell",
            "Erikson",
            "Kohlberg",
        ],
        answer: 1,
    },
    {
        id: 7,
        question: "Arnold Gesell ने अपना प्रसिद्ध परिपक्वता सिद्धांत किस वर्ष प्रस्तुत किया?",
        options: [
            "1904",
            "1925",
            "1936",
            "1950",
        ],
        answer: 1,
    },
    {
        id: 8,
        question: "बाल्यावस्था को किस नाम से जाना जाता है?",
        options: [
            "संघर्ष की अवस्था",
            "सीखने एवं समाजीकरण की अवस्था",
            "वृद्धावस्था",
            "केवल शारीरिक विकास की अवस्था",
        ],
        answer: 1,
    },
    {
        id: 9,
        question: "संज्ञानात्मक विकास के सिद्धांत के प्रतिपादक कौन हैं?",
        options: [
            "Gesell",
            "Erikson",
            "Jean Piaget",
            "Watson",
        ],
        answer: 2,
    },
    {
        id: 10,
        question: "Jean Piaget ने संज्ञानात्मक विकास सिद्धांत किस वर्ष प्रस्तुत किया?",
        options: [
            "1925",
            "1936",
            "1950",
            "1958",
        ],
        answer: 1,
    },
    {
        id: 11,
        question: "Piaget के अनुसार 2–7 वर्ष की अवस्था क्या कहलाती है?",
        options: [
            "Sensori-Motor",
            "Preoperational",
            "Concrete Operational",
            "Formal Operational",
        ],
        answer: 1,
    },
    {
        id: 12,
        question: "Piaget के अनुसार 7–11 वर्ष की अवस्था क्या कहलाती है?",
        options: [
            "Sensori-Motor",
            "Formal Operational",
            "Concrete Operational",
            "Preoperational",
        ],
        answer: 2,
    },
    {
        id: 13,
        question: "\"Storm and Stress\" शब्द किसने दिया?",
        options: [
            "Piaget",
            "Gesell",
            "G. Stanley Hall",
            "Skinner",
        ],
        answer: 2,
    },
    {
        id: 14,
        question: "G. Stanley Hall ने किशोरावस्था को Storm and Stress किस वर्ष कहा?",
        options: [
            "1904",
            "1925",
            "1936",
            "1950",
        ],
        answer: 0,
    },
    {
        id: 15,
        question: "Erik Erikson का \"Identity vs Role Confusion\" किस अवस्था से संबंधित है?",
        options: [
            "शैशवावस्था",
            "बाल्यावस्था",
            "किशोरावस्था",
            "वृद्धावस्था",
        ],
        answer: 2,
    },
    {
        id: 16,
        question: "Erik Erikson ने मनोसामाजिक विकास सिद्धांत किस वर्ष प्रस्तुत किया?",
        options: [
            "1904",
            "1936",
            "1950",
            "1958",
        ],
        answer: 2,
    },
    {
        id: 17,
        question: "भाषा का तीव्र विकास मुख्यतः किस अवस्था में होता है?",
        options: [
            "शैशवावस्था",
            "बाल्यावस्था",
            "किशोरावस्था",
            "वृद्धावस्था",
        ],
        answer: 1,
    },
    {
        id: 18,
        question: "मित्रता एवं समाजीकरण का विकास सबसे अधिक किस अवस्था में होता है?",
        options: [
            "शैशवावस्था",
            "बाल्यावस्था",
            "वृद्धावस्था",
            "जन्म से पहले",
        ],
        answer: 1,
    },
    {
        id: 19,
        question: "करियर एवं आत्म-पहचान पर विचार किस अवस्था में अधिक होता है?",
        options: [
            "शैशवावस्था",
            "बाल्यावस्था",
            "किशोरावस्था",
            "प्रौढ़ावस्था",
        ],
        answer: 2,
    },
    {
        id: 20,
        question: "शैशवावस्था की सबसे प्रमुख विशेषता क्या है?",
        options: [
            "नौकरी करना",
            "तीव्र शारीरिक एवं मस्तिष्क विकास",
            "विवाह",
            "सामाजिक नेतृत्व",
        ],
        answer: 1,
    },
    {
        id: 21,
        question: "\"संक्रमण काल\" किस अवस्था को कहा जाता है?",
        options: [
            "शैशवावस्था",
            "बाल्यावस्था",
            "किशोरावस्था",
            "प्रौढ़ावस्था",
        ],
        answer: 2,
    },
    {
        id: 22,
        question: "बच्चा खेल-खेल में सबसे अधिक किस अवस्था में सीखता है?",
        options: [
            "बाल्यावस्था",
            "किशोरावस्था",
            "वृद्धावस्था",
            "प्रौढ़ावस्था",
        ],
        answer: 0,
    },
    {
        id: 23,
        question: "विद्यालयी शिक्षा का प्रारंभ सामान्यतः किस अवस्था में होता है?",
        options: [
            "शैशवावस्था",
            "बाल्यावस्था",
            "किशोरावस्था",
            "वृद्धावस्था",
        ],
        answer: 1,
    },
    {
        id: 24,
        question: "उचित मार्गदर्शन एवं परामर्श की सबसे अधिक आवश्यकता किस अवस्था में होती है?",
        options: [
            "शैशवावस्था",
            "बाल्यावस्था",
            "किशोरावस्था",
            "वृद्धावस्था",
        ],
        answer: 2,
    },
    {
        id: 25,
        question: "निम्नलिखित में कौन-सा शैशवावस्था का उदाहरण है?",
        options: [
            "रेंगना सीखना",
            "गणित हल करना",
            "करियर चुनना",
            "नौकरी करना",
        ],
        answer: 0,
    },
    {
        id: 26,
        question: "निम्नलिखित में कौन-सा बाल्यावस्था का उदाहरण है?",
        options: [
            "चलना सीखना",
            "भाषा एवं लेखन सीखना",
            "रोजगार प्राप्त करना",
            "विवाह करना",
        ],
        answer: 1,
    },
    {
        id: 27,
        question: "निम्नलिखित में कौन-सा किशोरावस्था का उदाहरण है?",
        options: [
            "रेंगना",
            "चित्र बनाना सीखना",
            "आत्म-पहचान विकसित करना",
            "माँ का दूध पीना",
        ],
        answer: 2,
    },
    {
        id: 28,
        question: "विकास की अवस्थाओं का अध्ययन शिक्षक के लिए क्यों आवश्यक है?",
        options: [
            "केवल परीक्षा लेने के लिए",
            "आयु-उपयुक्त शिक्षण प्रदान करने के लिए",
            "केवल अनुशासन बनाए रखने के लिए",
            "केवल अंक देने के लिए",
        ],
        answer: 1,
    },
    {
        id: 29,
        question: "Elizabeth B. Hurlock का महत्वपूर्ण संस्करण किस वर्ष प्रकाशित हुआ?",
        options: [
            "1925",
            "1936",
            "1950",
            "1978",
        ],
        answer: 3,
    },
]

export default function Psychology3() {
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

                    {/* Result Card */}

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
                        Psychology 1.3 - वृद्धि एवं विकास की अवस्थाएँ
                    </h1>

                    <p className="text-center text-gray-600 mt-4">
                        TET (2A) Psychology Practice Test
                    </p>

                    <p className="text-center text-gray-500 mt-2">
                        शैशवावस्था • बाल्यावस्था • किशोरावस्था
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
