"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "विकास का प्रथम सिद्धांत क्या है?",
        options: [
            "विकास अचानक होता है।",
            "विकास निरंतर (Continuous) होता है।",
            "विकास केवल बचपन तक होता है।",
            "विकास समान गति से होता है।",
        ],
        answer: 1,
    },
    {
        id: 2,
        question: "'विकास जन्म से मृत्यु तक चलता है।' यह विकास के किस सिद्धांत को दर्शाता है?",
        options: [
            "व्यक्तिगत भिन्नता",
            "निरंतरता",
            "सरल से जटिल",
            "सामान्य से विशिष्ट",
        ],
        answer: 1,
    },
    {
        id: 3,
        question:
            "विकास का कौन-सा सिद्धांत बताता है कि बालक पहले बैठना, फिर खड़ा होना और बाद में चलना सीखता है?",
        options: [
            "सामान्य से विशिष्ट",
            "क्रमबद्ध विकास",
            "व्यक्तिगत भिन्नता",
            "परिपक्वता",
        ],
        answer: 1,
    },
    {
        id: 4,
        question: "'सिर से पैर की ओर विकास' किस सिद्धांत को कहते हैं?",
        options: [
            "Proximodistal Principle",
            "Cephalocaudal Principle",
            "Readiness Principle",
            "Individual Difference",
        ],
        answer: 1,
    },
    {
        id: 5,
        question: "Cephalocaudal Principle का अर्थ है—",
        options: [
            "केंद्र से बाहरी अंगों की ओर विकास",
            "सिर से पैर की ओर विकास",
            "सरल से जटिल विकास",
            "सामान्य से विशिष्ट विकास",
        ],
        answer: 1,
    },
    {
        id: 6,
        question: "Proximodistal Principle का अर्थ क्या है?",
        options: [
            "सिर से पैर की ओर विकास",
            "केंद्र से बाहरी अंगों की ओर विकास",
            "सामान्य से विशिष्ट विकास",
            "निरंतर विकास",
        ],
        answer: 1,
    },
    {
        id: 7,
        question:
            "बच्चा पहले कंधे पर नियंत्रण प्राप्त करता है और बाद में उँगलियों पर। यह किस सिद्धांत का उदाहरण है?",
        options: [
            "सामान्य से विशिष्ट",
            "Cephalocaudal",
            "Proximodistal",
            "व्यक्तिगत भिन्नता",
        ],
        answer: 2,
    },
    {
        id: 8,
        question:
            "सामान्य से विशिष्ट (General to Specific) विकास का उदाहरण कौन-सा है?",
        options: [
            "पहले पूरे हाथ से पकड़ना, बाद में उँगलियों से पकड़ना।",
            "पहले बैठना, फिर चलना।",
            "पहले सिर उठाना।",
            "पहले बोलना।",
        ],
        answer: 0,
    },
    {
        id: 9,
        question:
            "विकास का कौन-सा सिद्धांत बताता है कि बच्चा पहले शब्द बोलता है, फिर वाक्य बोलना सीखता है?",
        options: [
            "सरल से जटिल",
            "निरंतरता",
            "व्यक्तिगत भिन्नता",
            "परिपक्वता",
        ],
        answer: 0,
    },
    {
        id: 10,
        question:
            "विकास का कौन-सा सिद्धांत बताता है कि सभी बच्चों की विकास गति समान नहीं होती?",
        options: [
            "व्यक्तिगत भिन्नता",
            "सामान्य से विशिष्ट",
            "निरंतरता",
            "सरल से जटिल",
        ],
        answer: 0,
    },
    {
        id: 11,
        question: "निम्नलिखित में विकास का कौन-सा सिद्धांत है?",
        options: [
            "विकास रुक-रुक कर होता है।",
            "विकास अचानक होता है।",
            "विकास क्रमबद्ध होता है।",
            "विकास केवल विद्यालय में होता है।",
        ],
        answer: 2,
    },
    {
        id: 12,
        question:
            "विकास का कौन-सा सिद्धांत कहता है कि विकास की दिशा निश्चित होती है?",
        options: [
            "Cephalocaudal एवं Proximodistal",
            "केवल व्यक्तिगत भिन्नता",
            "केवल परिपक्वता",
            "केवल वातावरण",
        ],
        answer: 0,
    },
    {
        id: 13,
        question: "विकास को प्रभावित करने वाले दो प्रमुख कारक कौन-से हैं?",
        options: [
            "खेल एवं पुस्तकें",
            "परिवार एवं विद्यालय",
            "आनुवंशिकता एवं पर्यावरण",
            "भोजन एवं खेल",
        ],
        answer: 2,
    },
    {
        id: 14,
        question: "विकास के सिद्धांतों के प्रमुख समर्थक कौन हैं?",
        options: [
            "अर्नोल्ड गेसेल",
            "एलिज़ाबेथ हरलॉक",
            "दोनों",
            "कोई नहीं",
        ],
        answer: 2,
    },
    {
        id: 15,
        question: "Arnold Gesell का परिपक्वता सिद्धांत किस वर्ष प्रसिद्ध हुआ?",
        options: [
            "1913",
            "1925",
            "1936",
            "1958",
        ],
        answer: 1,
    },
    {
        id: 16,
        question:
            "Elizabeth Hurlock की पुस्तक Developmental Psychology का महत्वपूर्ण संस्करण किस वर्ष प्रकाशित हुआ?",
        options: [
            "1925",
            "1936",
            "1950",
            "1978",
        ],
        answer: 3,
    },
    {
        id: 17,
        question:
            "विकास का कौन-सा सिद्धांत बताता है कि सभी आयाम एक-दूसरे से जुड़े होते हैं?",
        options: [
            "विकास समन्वित (Integrated) होता है।",
            "विकास रुक-रुक कर होता है।",
            "विकास अचानक होता है।",
            "विकास केवल शारीरिक होता है।",
        ],
        answer: 0,
    },
    {
        id: 18,
        question:
            "यदि एक बच्चा 10 महीने में चलना सीखता है और दूसरा 13 महीने में, तो यह किस सिद्धांत का उदाहरण है?",
        options: [
            "व्यक्तिगत भिन्नता",
            "Cephalocaudal",
            "सामान्य से विशिष्ट",
            "सरल से जटिल",
        ],
        answer: 0,
    },
    {
        id: 19,
        question:
            "विकास का कौन-सा सिद्धांत शिक्षा की योजना बनाने में सबसे अधिक सहायक है?",
        options: [
            "व्यक्तिगत भिन्नता",
            "विकास के सभी सिद्धांत",
            "केवल परिपक्वता",
            "केवल निरंतरता",
        ],
        answer: 1,
    },
    {
        id: 20,
        question:
            "बच्चा पहले चित्र बनाना सीखता है और बाद में सुंदर लेखन करता है। यह किस सिद्धांत का उदाहरण है?",
        options: [
            "सामान्य से विशिष्ट",
            "सरल से जटिल",
            "निरंतरता",
            "व्यक्तिगत भिन्नता",
        ],
        answer: 1,
    },
    {
        id: 21,
        question: "विकास की कौन-सी दिशा सही है?",
        options: [
            "पैर से सिर",
            "सिर से पैर",
            "हाथ से सिर",
            "बाहर से केंद्र",
        ],
        answer: 1,
    },
    {
        id: 22,
        question: "निम्नलिखित में कौन-सा कथन सही है?",
        options: [
            "विकास केवल शारीरिक होता है।",
            "विकास सभी आयामों में होता है।",
            "विकास केवल मानसिक होता है।",
            "विकास केवल विद्यालय में होता है।",
        ],
        answer: 1,
    },
    {
        id: 23,
        question: "विकास के सिद्धांतों का अध्ययन मुख्यतः किसके लिए आवश्यक है?",
        options: [
            "इंजीनियर",
            "शिक्षक",
            "व्यापारी",
            "डॉक्टर",
        ],
        answer: 1,
    },
    {
        id: 24,
        question: "विकास के सिद्धांतों का ज्ञान शिक्षक को किसमें सहायता करता है?",
        options: [
            "आयु-उपयुक्त शिक्षण",
            "परीक्षा लेना",
            "वेतन बढ़ाना",
            "विद्यालय बदलना",
        ],
        answer: 0,
    },
    {
        id: 25,
        question:
            "विकास का कौन-सा सिद्धांत बताता है कि विकास सरल से कठिन कार्यों की ओर बढ़ता है?",
        options: [
            "सरल से जटिल",
            "सामान्य से विशिष्ट",
            "Cephalocaudal",
            "व्यक्तिगत भिन्नता",
        ],
        answer: 0,
    },
    {
        id: 26,
        question: "कौन-सा सिद्धांत Fine Motor Skills के विकास को समझाता है?",
        options: [
            "Cephalocaudal",
            "Proximodistal",
            "व्यक्तिगत भिन्नता",
            "निरंतरता",
        ],
        answer: 1,
    },
    {
        id: 27,
        question:
            "विकास के सिद्धांतों के अनुसार सीखना सबसे प्रभावी कब होता है?",
        options: [
            "जब परिपक्वता हो जाती है।",
            "केवल जन्म के समय।",
            "केवल विद्यालय में।",
            "केवल किशोरावस्था में।",
        ],
        answer: 0,
    },
    {
        id: 28,
        question: "विकास का कौन-सा सिद्धांत बताता है कि प्रत्येक बालक अद्वितीय है?",
        options: [
            "व्यक्तिगत भिन्नता",
            "Cephalocaudal",
            "सरल से जटिल",
            "सामान्य से विशिष्ट",
        ],
        answer: 0,
    },
    {
        id: 30,
        question: "विकास के सिद्धांतों का अंतिम उद्देश्य क्या है?",
        options: [
            "केवल परीक्षा पास करना",
            "बालक के सर्वांगीण विकास को समझना एवं उचित शिक्षण प्रदान करना",
            "केवल अंक बढ़ाना",
            "केवल अनुशासन बनाए रखना",
        ],
        answer: 1,
    },
]

export default function Psychology2() {
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
                        Psychology 1.2 - विकास के सिद्धांत
                    </h1>

                    <p className="text-center text-gray-600 mt-4">
                        TET (2A) Psychology Practice Test
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
