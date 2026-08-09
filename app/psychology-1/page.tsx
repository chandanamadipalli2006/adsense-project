"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "'वृद्धि (Growth)' से क्या तात्पर्य है?",
        options: [
            "व्यवहार में परिवर्तन",
            "शारीरिक आकार एवं वजन में मात्रात्मक वृद्धि",
            "नैतिक विकास",
            "भाषा विकास",
        ],
        answer: 1,
    },
    {
        id: 2,
        question: "'विकास (Development)' का सही अर्थ क्या है?",
        options: [
            "केवल ऊँचाई बढ़ना",
            "केवल वजन बढ़ना",
            "व्यक्तित्व के सभी पक्षों में गुणात्मक एवं मात्रात्मक परिवर्तन",
            "केवल मस्तिष्क का विकास",
        ],
        answer: 2,
    },
    {
        id: 3,
        question: "'परिपक्वता (Maturation)' क्या है?",
        options: [
            "केवल विद्यालयी शिक्षा",
            "प्राकृतिक जैविक तैयारी",
            "केवल अनुभव",
            "केवल अभ्यास",
        ],
        answer: 1,
    },
    {
        id: 4,
        question:
            "'विकास व्यक्ति को परिपक्वता की ओर ले जाने वाली क्रमिक प्रक्रिया है।' यह कथन किसका है?",
        options: [
            "जॉन वॉटसन",
            "एलिज़ाबेथ बी. हरलॉक",
            "स्किनर",
            "थॉर्नडाइक",
        ],
        answer: 1,
    },
    {
        id: 5,
        question:
            "एलिज़ाबेथ बी. हरलॉक की प्रसिद्ध पुस्तक 'Developmental Psychology' का संस्करण किस वर्ष प्रकाशित हुआ?",
        options: [
            "1936",
            "1950",
            "1978",
            "1986",
        ],
        answer: 2,
    },
    {
        id: 6,
        question: "परिपक्वता (Maturation Theory) के प्रमुख प्रतिपादक कौन हैं?",
        options: [
            "जीन पियाजे",
            "अर्नोल्ड गेसेल",
            "एरिक्सन",
            "कोहलबर्ग",
        ],
        answer: 1,
    },
    {
        id: 7,
        question:
            "अर्नोल्ड गेसेल ने परिपक्वता सिद्धांत पर अपने प्रमुख अध्ययन लगभग किस वर्ष प्रस्तुत किए?",
        options: [
            "1913",
            "1925",
            "1934",
            "1958",
        ],
        answer: 1,
    },
    {
        id: 8,
        question: "निम्नलिखित में वृद्धि (Growth) का उदाहरण कौन-सा है?",
        options: [
            "तर्क करना सीखना",
            "मित्र बनाना",
            "ऊँचाई 120 सेमी से 125 सेमी होना",
            "कविता लिखना",
        ],
        answer: 2,
    },
    {
        id: 9,
        question: "निम्नलिखित में विकास (Development) का उदाहरण कौन-सा है?",
        options: [
            "वजन बढ़ना",
            "बाल लंबे होना",
            "समस्या का समाधान करना सीखना",
            "हाथ का बड़ा होना",
        ],
        answer: 2,
    },
    {
        id: 10,
        question:
            "सामान्यतः 12–15 महीने की आयु में बच्चा चलना प्रारम्भ करता है। यह किसका उदाहरण है?",
        options: [
            "वृद्धि",
            "परिपक्वता",
            "केवल शिक्षा",
            "केवल अभ्यास",
        ],
        answer: 1,
    },
    {
        id: 11,
        question: "विकास की प्रक्रिया कब से कब तक चलती है?",
        options: [
            "जन्म से 18 वर्ष तक",
            "जन्म से 60 वर्ष तक",
            "गर्भाधान से मृत्यु तक",
            "केवल विद्यालय काल तक",
        ],
        answer: 2,
    },
    {
        id: 12,
        question: "निम्नलिखित में कौन-सा गुणात्मक परिवर्तन है?",
        options: [
            "वजन बढ़ना",
            "ऊँचाई बढ़ना",
            "भाषा सीखना",
            "सिर का आकार बढ़ना",
        ],
        answer: 2,
    },
    {
        id: 13,
        question: "निम्नलिखित में कौन-सा मात्रात्मक परिवर्तन है?",
        options: [
            "नैतिकता",
            "भाषा",
            "ऊँचाई",
            "सोचने की क्षमता",
        ],
        answer: 2,
    },
    {
        id: 14,
        question: "संज्ञानात्मक विकास (Cognitive Development) का सिद्धांत किसने दिया?",
        options: [
            "पियाजे",
            "गेसेल",
            "हरलॉक",
            "वॉटसन",
        ],
        answer: 0,
    },
    {
        id: 15,
        question:
            "जीन पियाजे ने संज्ञानात्मक विकास सिद्धांत किस वर्ष प्रस्तुत किया?",
        options: [
            "1913",
            "1925",
            "1936",
            "1950",
        ],
        answer: 2,
    },
    {
        id: 16,
        question: "वृद्धि मुख्यतः किस प्रकार का परिवर्तन है?",
        options: [
            "गुणात्मक",
            "मात्रात्मक",
            "सामाजिक",
            "नैतिक",
        ],
        answer: 1,
    },
    {
        id: 17,
        question: "विकास मुख्यतः किस प्रकार का परिवर्तन है?",
        options: [
            "केवल मात्रात्मक",
            "केवल शारीरिक",
            "गुणात्मक एवं मात्रात्मक दोनों",
            "केवल जैविक",
        ],
        answer: 2,
    },
    {
        id: 18,
        question: "परिपक्वता मुख्यतः किस पर आधारित होती है?",
        options: [
            "केवल विद्यालय",
            "केवल परिवार",
            "आनुवंशिकता एवं जैविक विकास",
            "केवल अभ्यास",
        ],
        answer: 2,
    },
    {
        id: 19,
        question: "निम्नलिखित में कौन-सा विकास का उदाहरण है?",
        options: [
            "बच्चा सहयोग करना सीखता है।",
            "वजन बढ़ता है।",
            "ऊँचाई बढ़ती है।",
            "दाँत निकलते हैं।",
        ],
        answer: 0,
    },
    {
        id: 20,
        question:
            "निम्नलिखित में वृद्धि और विकास का सही संबंध कौन-सा है?",
        options: [
            "दोनों समान हैं।",
            "वृद्धि, विकास का एक भाग है।",
            "विकास, वृद्धि का भाग है।",
            "दोनों असंबंधित हैं।",
        ],
        answer: 1,
    },
    {
        id: 21,
        question: "निम्नलिखित में कौन-सा परिपक्वता का उदाहरण है?",
        options: [
            "बच्चा अभ्यास से तैरना सीखता है।",
            "उचित आयु पर बोलना प्रारम्भ करना।",
            "परीक्षा पास करना।",
            "कविता याद करना।",
        ],
        answer: 1,
    },
    {
        id: 22,
        question:
            "यदि किसी बच्चे का वजन 20 किग्रा से 25 किग्रा हो जाए, तो यह क्या कहलाएगा?",
        options: [
            "विकास",
            "परिपक्वता",
            "वृद्धि",
            "अधिगम",
        ],
        answer: 2,
    },
    {
        id: 23,
        question:
            "विकास को सर्वाधिक प्रभावित करने वाले दो प्रमुख कारक कौन-से हैं?",
        options: [
            "परिवार और विद्यालय",
            "आनुवंशिकता एवं पर्यावरण",
            "मित्र एवं समाज",
            "खेल एवं पुस्तकें",
        ],
        answer: 1,
    },
    {
        id: 24,
        question:
            "'बालक सक्रिय रूप से ज्ञान का निर्माण करता है।' यह किसका सिद्धांत है?",
        options: [
            "गेसेल",
            "पियाजे",
            "स्किनर",
            "हरलॉक",
        ],
        answer: 1,
    },
    {
        id: 25,
        question: "कौन-सा कथन सही है?",
        options: [
            "वृद्धि जीवनभर चलती है।",
            "विकास केवल बचपन तक होता है।",
            "विकास गर्भाधान से मृत्यु तक चलता है।",
            "परिपक्वता केवल शिक्षा से होती है।",
        ],
        answer: 2,
    },
]

export default function Psychology11() {
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

    /* =========================
       RESULT PAGE
       ========================= */

    if (submitted) {
        return (
            <div className="min-h-screen bg-slate-50 py-10 px-4">

                <div className="max-w-4xl mx-auto">

                    {/* Result */}
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

                        {questions.map((q) => {

                            const isCorrect =
                                answers[q.id] === q.answer

                            return (
                                <div
                                    key={q.id}
                                    className={`p - 5 rounded - xl border - 2 ${
    isCorrect
        ? "border-green-500 bg-green-50"
        : "border-red-500 bg-red-50"
} `}
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
                        Psychology 1.1 - वृद्धि, विकास एवं परिपक्वता
                    </h1>

                    <p className="text-center text-gray-600 mt-4">
                        TET (2A) Psychology Practice Test
                    </p>

                    <p className="text-center text-gray-500 mt-2">
                        Total Questions: 25
                    </p>

                </div>

                {/* Questions */}
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
                                        name={`question - ${ q.id } `}
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

                {/* Submit */}
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
                            Please answer all 25 questions before submitting.
                        </p>
                    )}

                </div>

            </div>

        </div>
    )
}
