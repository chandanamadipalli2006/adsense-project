"use client"

import { useState } from "react"

const questions = [
    {
        id: 26,
        question: "भाषा शिक्षण में सहायक सामग्री का उद्देश्य है—",
        options: [
            "अधिगम को रोचक बनाना",
            "समय व्यतीत करना",
            "अनुशासन बनाए रखना",
            "परीक्षा लेना",
        ],
        answer: 0,
    },
    {
        id: 27,
        question: "भाषा शिक्षण में कविता का उद्देश्य है—",
        options: [
            "सौंदर्यबोध विकसित करना",
            "केवल याद कराना",
            "परीक्षा लेना",
            "अनुशासन",
        ],
        answer: 0,
    },
    {
        id: 28,
        question: "गद्य शिक्षण का उद्देश्य है—",
        options: [
            "विचार शक्ति का विकास",
            "केवल रटना",
            "केवल लिखना",
            "केवल बोलना",
        ],
        answer: 0,
    },
    {
        id: 29,
        question: "प्रथम भाषा में विद्यार्थी सामान्यतः किस स्तर से आते हैं?",
        options: [
            "पूर्व अनुभव के साथ",
            "बिना अनुभव",
            "विदेशी अनुभव",
            "तकनीकी अनुभव",
        ],
        answer: 0,
    },
    {
        id: 30,
        question: "द्वितीय भाषा शिक्षण में मातृभाषा का प्रयोग—",
        options: [
            "सीमित रूप में सहायक हो सकता है",
            "पूर्णतः वर्जित है",
            "अनिवार्य है",
            "आवश्यक नहीं",
        ],
        answer: 0,
    },
    {
        id: 31,
        question: "भाषा शिक्षण का अंतिम लक्ष्य क्या है?",
        options: [
            "प्रभावी संप्रेषण",
            "परीक्षा",
            "प्रमाणपत्र",
            "अंक",
        ],
        answer: 0,
    },
    {
        id: 32,
        question: "भाषा शिक्षण में सहपाठी अधिगम (Peer Learning) का प्रमुख लाभ क्या है?",
        options: [
            "प्रतियोगिता बढ़ाना",
            "सहयोगात्मक अधिगम को बढ़ावा देना",
            "अनुशासन कम करना",
            "केवल मनोरंजन करना",
        ],
        answer: 1,
    },
    {
        id: 33,
        question: "द्वितीय भाषा शिक्षण में सबसे महत्वपूर्ण तत्व क्या है?",
        options: [
            "रटकर याद करना",
            "संप्रेषणात्मक दक्षता",
            "केवल व्याकरण",
            "केवल लेखन",
        ],
        answer: 1,
    },
    {
        id: 34,
        question: "भाषा शिक्षण में श्रुतलेख (Dictation) का मुख्य उद्देश्य क्या है?",
        options: [
            "केवल परीक्षा लेना",
            "अनुशासन बनाए रखना",
            "श्रवण एवं लेखन कौशल का विकास करना",
            "समय व्यतीत करना",
        ],
        answer: 2,
    },
    {
        id: 35,
        question: "प्रथम भाषा शिक्षण में शिक्षक की भूमिका क्या होनी चाहिए?",
        options: [
            "मार्गदर्शक एवं सहयोगी",
            "केवल परीक्षक",
            "केवल व्याख्याता",
            "नियंत्रक",
        ],
        answer: 0,
    },
    {
        id: 36,
        question: "भाषा शिक्षण में 'ज्ञात से अज्ञात' सिद्धांत का क्या अर्थ है?",
        options: [
            "कठिन से सरल की ओर जाना",
            "नए विषय से पुराने विषय की ओर जाना",
            "केवल पाठ्यपुस्तक पर निर्भर रहना",
            "पूर्व ज्ञान के आधार पर नए ज्ञान का निर्माण करना",
        ],
        answer: 3,
    },
    {
        id: 37,
        question: "माध्यमिक स्तर पर हिंदी शिक्षण का कौन-सा उद्देश्य विद्यार्थियों की कल्पनाशक्ति का विकास करता है?",
        options: [
            "व्याकरण शिक्षण",
            "सृजनात्मक लेखन",
            "अनुशासन",
            "मूल्यांकन",
        ],
        answer: 1,
    },
    {
        id: 38,
        question: "द्वितीय भाषा सीखने में कौन-सा कारक सबसे अधिक सहायक होता है?",
        options: [
            "भाषा वातावरण",
            "दंड",
            "परीक्षा",
            "गृहकार्य",
        ],
        answer: 0,
    },
    {
        id: 39,
        question: "भाषा शिक्षण में पाठ्येतर गतिविधियों का उद्देश्य क्या है?",
        options: [
            "समय व्यतीत करना",
            "मनोरंजन करना",
            "भाषा प्रयोग के अवसर प्रदान करना",
            "परीक्षा लेना",
        ],
        answer: 2,
    },
    {
        id: 40,
        question: "भाषा शिक्षण में वाचन कौशल का मुख्य उद्देश्य क्या है?",
        options: [
            "अर्थ ग्रहण करना",
            "केवल उच्चारण करना",
            "केवल पढ़ना",
            "केवल परीक्षा देना",
        ],
        answer: 0,
    },
    {
        id: 41,
        question: "हिंदी को द्वितीय भाषा के रूप में पढ़ाने का प्रमुख उद्देश्य क्या है?",
        options: [
            "केवल साहित्य पढ़ाना",
            "संप्रेषण क्षमता विकसित करना",
            "केवल व्याकरण सिखाना",
            "केवल लेखन सिखाना",
        ],
        answer: 1,
    },
    {
        id: 42,
        question: "भाषा शिक्षण में त्रुटि विश्लेषण (Error Analysis) का उद्देश्य क्या है?",
        options: [
            "विद्यार्थियों को दंड देना",
            "कमजोर विद्यार्थियों को अलग करना",
            "अंक कम करना",
            "अधिगम संबंधी कठिनाइयों की पहचान करना",
        ],
        answer: 3,
    },
    {
        id: 43,
        question: "भाषा शिक्षण में कहानी का उपयोग क्यों किया जाता है?",
        options: [
            "रुचि एवं भाषा दक्षता बढ़ाने के लिए",
            "समय व्यतीत करने के लिए",
            "अनुशासन बनाए रखने के लिए",
            "परीक्षा लेने के लिए",
        ],
        answer: 0,
    },
    {
        id: 44,
        question: "भाषा शिक्षण में मूल्यांकन का आधुनिक दृष्टिकोण क्या है?",
        options: [
            "केवल वार्षिक परीक्षा",
            "केवल मौखिक परीक्षा",
            "सतत एवं व्यापक मूल्यांकन",
            "केवल लिखित परीक्षा",
        ],
        answer: 2,
    },
    {
        id: 45,
        question: "प्रथम भाषा शिक्षण में कौन-सा कौशल सबसे अंत में विकसित होता है?",
        options: [
            "श्रवण",
            "लेखन",
            "बोलना",
            "समझना",
        ],
        answer: 1,
    },
    {
        id: 46,
        question: "भाषा शिक्षण में परियोजना कार्य (Project Work) का उद्देश्य क्या है?",
        options: [
            "रटने की क्षमता बढ़ाना",
            "अनुभवात्मक अधिगम को बढ़ावा देना",
            "परीक्षा लेना",
            "अनुशासन बनाए रखना",
        ],
        answer: 1,
    },
    {
        id: 47,
        question: "माध्यमिक स्तर पर हिंदी शिक्षण का कौन-सा उद्देश्य विद्यार्थियों में राष्ट्रीय एकता की भावना विकसित करता है?",
        options: [
            "सांस्कृतिक एवं सामाजिक उद्देश्य",
            "केवल व्याकरण शिक्षण",
            "केवल लेखन कौशल",
            "केवल मूल्यांकन",
        ],
        answer: 0,
    },
    {
        id: 48,
        question: "द्वितीय भाषा शिक्षण में दृश्य-श्रव्य सामग्री का उपयोग क्यों किया जाता है?",
        options: [
            "कक्षा सजाने के लिए",
            "मनोरंजन के लिए",
            "अधिगम को प्रभावी एवं रोचक बनाने के लिए",
            "परीक्षा लेने के लिए",
        ],
        answer: 2,
    },
    {
        id: 49,
        question: "भाषा शिक्षण में अभ्यास (Practice) का महत्व क्या है?",
        options: [
            "भाषा कौशलों को सुदृढ़ बनाने के लिए",
            "केवल गृहकार्य पूरा करने के लिए",
            "केवल परीक्षा के लिए",
            "समय व्यतीत करने के लिए",
        ],
        answer: 0,
    },
    {
        id: 50,
        question: "माध्यमिक स्तर पर हिंदी शिक्षण का अंतिम उद्देश्य क्या है?",
        options: [
            "भाषा का प्रभावी एवं सृजनात्मक प्रयोग",
            "केवल परीक्षा में सफलता",
            "केवल व्याकरण ज्ञान",
            "केवल पाठ्यपुस्तक का अध्ययन",
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
                        Hindi Methodology 1.2 - Part 2
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