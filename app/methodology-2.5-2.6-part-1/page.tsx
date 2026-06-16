"use client"

import { useState } from "react"

const questions = [
    {
        id: 1,
        question: "भाषा शिक्षण की प्रत्यक्ष प्रणाली (Direct Method) में किस भाषा का प्रयोग किया जाता है?",
        options: ["केवल मातृभाषा", "केवल लक्ष्य भाषा", "दोनों भाषाएँ", "कोई भाषा नहीं"],
        answer: 1,
    },
    {
        id: 2,
        question: "प्रत्यक्ष प्रणाली का मुख्य उद्देश्य क्या है?",
        options: ["व्याकरण ज्ञान", "अनुवाद कौशल", "बोलने एवं समझने की क्षमता", "रटना"],
        answer: 2,
    },
    {
        id: 3,
        question: "अनुवाद प्रणाली का दूसरा नाम क्या है?",
        options: ["द्विभाषिक प्रणाली", "व्याकरण-अनुवाद प्रणाली", "प्रत्यक्ष प्रणाली", "संप्रेषणात्मक प्रणाली"],
        answer: 1,
    },
    {
        id: 4,
        question: "अनुवाद प्रणाली में किस पर अधिक बल दिया जाता है?",
        options: ["बोलना", "सुनना", "व्याकरण एवं अनुवाद", "खेल"],
        answer: 2,
    },
    {
        id: 5,
        question: "द्विभाषिक प्रणाली के प्रतिपादक कौन हैं?",
        options: ["किलपैट्रिक", "सुकरात", "सी. जे. डॉडसन", "फ्रॉबेल"],
        answer: 2,
    },
    {
        id: 6,
        question: "द्विभाषिक प्रणाली का प्रतिपादन किस वर्ष किया गया?",
        options: ["1965", "1966", "1967", "1968"],
        answer: 2,
    },
    {
        id: 7,
        question: "द्विभाषिक प्रणाली में किन भाषाओं का प्रयोग होता है?",
        options: ["केवल मातृभाषा", "केवल लक्ष्य भाषा", "मातृभाषा एवं लक्ष्य भाषा", "विदेशी भाषा"],
        answer: 2,
    },
    {
        id: 8,
        question: "भारत जैसे बहुभाषी देश में कौन-सी प्रणाली अधिक उपयुक्त मानी जाती है?",
        options: ["प्रत्यक्ष प्रणाली", "द्विभाषिक प्रणाली", "व्याख्यान प्रणाली", "निगमन प्रणाली"],
        answer: 1,
    },
    {
        id: 9,
        question: "संप्रेषणात्मक प्रणाली का मुख्य उद्देश्य क्या है?",
        options: ["व्याकरण ज्ञान", "प्रभावी संप्रेषण क्षमता", "अनुवाद", "रटंत अधिगम"],
        answer: 1,
    },
    {
        id: 10,
        question: "प्रत्यक्ष प्रणाली में अर्थ स्पष्ट करने के लिए क्या प्रयोग किया जाता है?",
        options: ["अनुवाद", "चित्र एवं संकेत", "शब्दकोश", "व्याकरण नियम"],
        answer: 1,
    },
    {
        id: 11,
        question: "भाषा शिक्षण की सबसे पुरानी प्रणाली कौन-सी है?",
        options: ["प्रत्यक्ष प्रणाली", "द्विभाषिक प्रणाली", "अनुवाद प्रणाली", "संप्रेषणात्मक प्रणाली"],
        answer: 2,
    },
    {
        id: 12,
        question: "संप्रेषणात्मक प्रणाली किस पर आधारित है?",
        options: ["वास्तविक जीवन स्थितियाँ", "रटना", "केवल व्याकरण", "केवल लेखन"],
        answer: 0,
    },
    {
        id: 13,
        question: "प्रत्यक्ष प्रणाली में व्याकरण सिखाया जाता है—",
        options: ["नियमों द्वारा", "अप्रत्यक्ष रूप से", "अनुवाद द्वारा", "बिल्कुल नहीं"],
        answer: 1,
    },
    {
        id: 14,
        question: "कौन-सी प्रणाली बोलने के कौशल को अधिक विकसित करती है?",
        options: ["अनुवाद प्रणाली", "प्रत्यक्ष प्रणाली", "व्याख्यान प्रणाली", "परियोजना प्रणाली"],
        answer: 1,
    },
    {
        id: 15,
        question: "NCF-2005 ने किस प्रकार के भाषा शिक्षण पर बल दिया?",
        options: ["बालक-केंद्रित", "दंड-केंद्रित", "परीक्षा-केंद्रित", "शिक्षक-केंद्रित"],
        answer: 0,
    },
    {
        id: 16,
        question: "NEP-2020 ने किस प्रकार के भाषा शिक्षण को बढ़ावा दिया?",
        options: ["रटंत", "संप्रेषणात्मक", "दंडात्मक", "निष्क्रिय"],
        answer: 1,
    },
    {
        id: 17,
        question: "भाषा शिक्षण प्रणाली का मुख्य उद्देश्य क्या है?",
        options: ["परीक्षा", "भाषा कौशल विकास", "गृहकार्य", "अनुशासन"],
        answer: 1,
    },
    {
        id: 18,
        question: "प्रत्यक्ष प्रणाली में मातृभाषा का प्रयोग—",
        options: ["अधिक होता है", "कम होता है", "नहीं होता", "आवश्यक होता है"],
        answer: 2,
    },
    {
        id: 19,
        question: "द्विभाषिक प्रणाली का प्रमुख लाभ क्या है?",
        options: ["समय की बचत", "अनुशासन", "परीक्षा सफलता", "गृहकार्य"],
        answer: 0,
    },
    {
        id: 20,
        question: "अनुवाद प्रणाली में किस कौशल का विकास कम होता है?",
        options: ["पढ़ना", "लिखना", "सुनना एवं बोलना", "शब्दज्ञान"],
        answer: 2,
    },
    {
        id: 21,
        question: "भाषा शिक्षण में बहुभाषिकता को क्या माना गया है?",
        options: ["समस्या", "संसाधन", "बाधा", "कमजोरी"],
        answer: 1,
    },
    {
        id: 22,
        question: "संप्रेषणात्मक प्रणाली का केंद्र क्या है?",
        options: ["भाषा का प्रयोग", "व्याकरण", "परीक्षा", "पाठ्यपुस्तक"],
        answer: 0,
    },
    {
        id: 23,
        question: "प्रत्यक्ष प्रणाली का विकास किस शताब्दी में हुआ?",
        options: ["17वीं", "18वीं", "19वीं", "20वीं"],
        answer: 2,
    },
    {
        id: 24,
        question: "भाषा शिक्षण में कौन-सी प्रणाली आधुनिक मानी जाती है?",
        options: ["अनुवाद प्रणाली", "संप्रेषणात्मक प्रणाली", "व्याख्यान प्रणाली", "रटंत प्रणाली"],
        answer: 1,
    },
    {
        id: 25,
        question: "भाषा शिक्षण की प्रणालियों का अंतिम लक्ष्य क्या है?",
        options: ["परीक्षा", "प्रभावी भाषा प्रयोग", "अनुशासन", "गृहकार्य"],
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
                        Hindi Methodology 2.5 & 2.6 - Part 1
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