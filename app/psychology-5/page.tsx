"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "विकास के अध्ययन में Longitudinal Approach का अर्थ क्या है?",
        options: [
            "अलग-अलग आयु समूहों का अध्ययन",
            "एक ही समूह का लंबे समय तक अध्ययन",
            "केवल वयस्कों का अध्ययन",
            "केवल बच्चों का अध्ययन",
        ],
        answer: 1,
    },
    {
        id: 2,
        question: "Cross-Sectional Approach में अध्ययन कैसे किया जाता है?",
        options: [
            "एक ही व्यक्ति का कई वर्षों तक",
            "अलग-अलग आयु समूहों का एक ही समय में",
            "केवल किशोरों का",
            "केवल शिशुओं का",
        ],
        answer: 1,
    },
    {
        id: 3,
        question: "यदि 20 बच्चों का 10 वर्षों तक अध्ययन किया जाए, तो यह कौन-सी शोध पद्धति होगी?",
        options: [
            "Cross-Sectional",
            "Longitudinal",
            "Experimental",
            "Survey",
        ],
        answer: 1,
    },
    {
        id: 4,
        question: "यदि 5, 10 और 15 वर्ष के बच्चों की एक ही दिन तुलना की जाए, तो यह कौन-सी पद्धति है?",
        options: [
            "Longitudinal",
            "Cross-Sectional",
            "Case Study",
            "Observation",
        ],
        answer: 1,
    },
    {
        id: 5,
        question: "Longitudinal अध्ययन का प्रमुख लाभ क्या है?",
        options: [
            "समय कम लगता है।",
            "विकास की वास्तविक प्रक्रिया का पता चलता है।",
            "खर्च कम होता है।",
            "नमूना बड़ा होता है।",
        ],
        answer: 1,
    },
    {
        id: 6,
        question: "Cross-Sectional अध्ययन का प्रमुख लाभ क्या है?",
        options: [
            "बहुत अधिक समय लगता है।",
            "कम समय एवं कम लागत में पूरा हो जाता है।",
            "केवल एक व्यक्ति का अध्ययन होता है।",
            "परिणाम कभी नहीं मिलते।",
        ],
        answer: 1,
    },
    {
        id: 7,
        question: "Longitudinal अध्ययन की सबसे बड़ी सीमा क्या है?",
        options: [
            "समय एवं धन अधिक लगता है।",
            "तुलना नहीं होती।",
            "नमूना नहीं मिलता।",
            "परिणाम तुरंत मिलते हैं।",
        ],
        answer: 0,
    },
    {
        id: 8,
        question: "Cross-Sectional अध्ययन की मुख्य सीमा क्या है?",
        options: [
            "विकास की निरंतर प्रक्रिया स्पष्ट नहीं होती।",
            "बहुत अधिक समय लगता है।",
            "बहुत महँगा होता है।",
            "केवल एक व्यक्ति का अध्ययन होता है।",
        ],
        answer: 0,
    },
    {
        id: 9,
        question: "बाल विकास पर Longitudinal अध्ययन के लिए प्रसिद्ध मनोवैज्ञानिक कौन हैं?",
        options: [
            "Kohlberg",
            "Gesell",
            "Skinner",
            "Watson",
        ],
        answer: 1,
    },
    {
        id: 10,
        question: "Arnold Gesell के प्रमुख विकासात्मक अध्ययन का वर्ष कौन-सा है?",
        options: [
            "1904",
            "1925",
            "1936",
            "1958",
        ],
        answer: 1,
    },
    {
        id: 11,
        question: "विकास को चरणों में समझाने वाले मनोवैज्ञानिक कौन हैं?",
        options: [
            "Piaget",
            "Gesell",
            "Erikson",
            "Thorndike",
        ],
        answer: 0,
    },
    {
        id: 12,
        question: "Jean Piaget ने अपना प्रसिद्ध सिद्धांत किस वर्ष प्रस्तुत किया?",
        options: [
            "1925",
            "1936",
            "1950",
            "1978",
        ],
        answer: 1,
    },
    {
        id: 13,
        question: "Life-Span Development (जीवनपर्यंत विकास) पर विशेष कार्य किसने किया?",
        options: [
            "Paul Baltes",
            "Watson",
            "Skinner",
            "Bruner",
        ],
        answer: 0,
    },
    {
        id: 14,
        question: "Paul Baltes का प्रमुख योगदान किस वर्ष से जुड़ा माना जाता है?",
        options: [
            "1936",
            "1958",
            "1968",
            "1978",
        ],
        answer: 2,
    },
    {
        id: 15,
        question: "विकासात्मक शोध का मुख्य उद्देश्य क्या है?",
        options: [
            "केवल परीक्षा लेना",
            "विकास में समयानुसार होने वाले परिवर्तनों को समझना",
            "केवल IQ मापना",
            "केवल अंक देना",
        ],
        answer: 1,
    },
    {
        id: 16,
        question: "Longitudinal Approach में प्रतिभागी (Participants) कैसे होते हैं?",
        options: [
            "हर बार अलग-अलग",
            "एक ही समूह",
            "केवल शिक्षक",
            "केवल माता-पिता",
        ],
        answer: 1,
    },
    {
        id: 17,
        question: "Cross-Sectional Approach में प्रतिभागी कैसे होते हैं?",
        options: [
            "एक ही समूह",
            "अलग-अलग आयु समूह",
            "केवल किशोर",
            "केवल शिक्षक",
        ],
        answer: 1,
    },
    {
        id: 18,
        question: "AP TET में किस पद्धति को समय बचाने वाली माना जाता है?",
        options: [
            "Longitudinal",
            "Cross-Sectional",
            "Case Study",
            "Observation",
        ],
        answer: 1,
    },
    {
        id: 19,
        question: "किस पद्धति में प्रतिभागियों के बीच तुलना की जाती है?",
        options: [
            "Longitudinal",
            "Cross-Sectional",
            "Experimental",
            "Survey",
        ],
        answer: 1,
    },
    {
        id: 20,
        question: "किस पद्धति में विकास का वास्तविक क्रम देखा जा सकता है?",
        options: [
            "Cross-Sectional",
            "Longitudinal",
            "Interview",
            "Questionnaire",
        ],
        answer: 1,
    },
    {
        id: 21,
        question: "यदि शोधकर्ता एक ही बच्चे का 15 वर्षों तक अध्ययन करे, तो यह क्या कहलाएगा?",
        options: [
            "Survey",
            "Cross-Sectional",
            "Longitudinal",
            "Experimental",
        ],
        answer: 2,
    },
    {
        id: 22,
        question: "यदि शोधकर्ता 6, 10 एवं 14 वर्ष के बच्चों की एक साथ तुलना करे, तो यह क्या कहलाएगा?",
        options: [
            "Longitudinal",
            "Cross-Sectional",
            "Observation",
            "Interview",
        ],
        answer: 1,
    },
    {
        id: 23,
        question: "विकास की गति एवं दिशा का सही अध्ययन किससे संभव है?",
        options: [
            "Longitudinal",
            "Survey",
            "Observation",
            "Interview",
        ],
        answer: 0,
    },
    {
        id: 24,
        question: "कम लागत में विकास संबंधी अध्ययन के लिए कौन-सी पद्धति अधिक उपयुक्त है?",
        options: [
            "Longitudinal",
            "Cross-Sectional",
            "Experimental",
            "Historical",
        ],
        answer: 1,
    },
    {
        id: 25,
        question: "विकास के अध्ययन में दोनों उपागमों का उपयोग क्यों किया जाता है?",
        options: [
            "केवल अंक बढ़ाने के लिए",
            "अलग-अलग शोध उद्देश्यों के अनुसार",
            "केवल विद्यालय के लिए",
            "केवल विश्वविद्यालय के लिए",
        ],
        answer: 1,
    },
    {
        id: 26,
        question: "Elizabeth B. Hurlock का महत्वपूर्ण संस्करण किस वर्ष प्रकाशित हुआ?",
        options: [
            "1936",
            "1950",
            "1968",
            "1978",
        ],
        answer: 3,
    },
    {
        id: 27,
        question: "विकासात्मक अध्ययन का सबसे महत्वपूर्ण उद्देश्य क्या है?",
        options: [
            "केवल आयु ज्ञात करना",
            "विकास के परिवर्तनों को समझना",
            "केवल परीक्षा लेना",
            "केवल IQ ज्ञात करना",
        ],
        answer: 1,
    },
    {
        id: 28,
        question: "निम्नलिखित में Longitudinal अध्ययन का उदाहरण कौन-सा है?",
        options: [
            "एक दिन में 100 बच्चों की तुलना",
            "एक ही बच्चे का कई वर्षों तक अध्ययन",
            "केवल प्रश्नावली भरवाना",
            "केवल साक्षात्कार लेना",
        ],
        answer: 1,
    },
    {
        id: 29,
        question: "निम्नलिखित में Cross-Sectional अध्ययन का उदाहरण कौन-सा है?",
        options: [
            "5 वर्ष तक एक ही छात्र का अध्ययन",
            "5, 10 और 15 वर्ष के बच्चों की एक साथ तुलना",
            "केवल शिक्षक का अध्ययन",
            "केवल माता-पिता का अध्ययन",
        ],
        answer: 1,
    },
]

export default function Psychology5() {
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
                        Psychology 1.5 - विकास को समझने के उपागम
                    </h1>

                    <p className="text-center text-gray-600 mt-4">
                        TET (2A) Psychology Practice Test
                    </p>

                    <p className="text-center text-gray-500 mt-2">
                        Longitudinal • Cross-Sectional
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
