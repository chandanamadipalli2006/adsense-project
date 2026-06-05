"use client";

import { useEffect, useState } from "react";
import { questions } from "./questions";

export default function TetMockTest() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answers, setAnswers] = useState<{
        [key: number]: number;
    }>({});

    const [timeLeft, setTimeLeft] = useState(150 * 60);

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const question = questions[currentQuestion];

    const selectOption = (optionIndex: number) => {
        setAnswers({
            ...answers,
            [question.id]: optionIndex,
        });
    };

    const handleSubmit = () => {
        let score = 0;

        questions.forEach((q) => {
            if (answers[q.id] === q.answer) {
                score++;
            }
        });

        alert(
            `Test Submitted!\n\nScore: ${score}/${questions.length}`
        );

        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow">
                    <h1 className="text-3xl font-bold mb-4">
                        Test Completed
                    </h1>

                    <p>
                        Thank you for attempting the mock test.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">

            {/* HEADER */}

            <div className="bg-blue-700 text-white p-4 sticky top-0 z-50">

                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    <h1 className="font-bold text-xl">
                        AP TET Mock Test
                    </h1>

                    <div className="font-bold text-lg">
                        ⏰ {Math.floor(timeLeft / 60)}
                        :
                        {(timeLeft % 60)
                            .toString()
                            .padStart(2, "0")}
                    </div>

                </div>

            </div>

            <div className="max-w-7xl mx-auto p-4 grid lg:grid-cols-4 gap-6">

                {/* QUESTION AREA */}

                <div className="lg:col-span-3 bg-white rounded-lg shadow p-6">

                    <h2 className="text-xl font-bold mb-4">
                        Question {question.id}
                    </h2>

                    <p className="mb-6 text-lg">
                        {question.question}
                    </p>

                    <div className="space-y-3">

                        {question.options.map((option, index) => (

                            <button
                                key={index}
                                onClick={() =>
                                    selectOption(index)
                                }
                                className={`w-full text-left p-4 border rounded-lg transition

                                ${answers[question.id] === index
                                        ? "bg-blue-600 text-white"
                                        : "bg-white hover:bg-gray-50"
                                    }
                                `}
                            >
                                {option}
                            </button>

                        ))}

                    </div>

                    <div className="flex justify-between mt-8">

                        <button
                            disabled={currentQuestion === 0}
                            onClick={() =>
                                setCurrentQuestion(
                                    currentQuestion - 1
                                )
                            }
                            className="bg-gray-200 px-6 py-2 rounded"
                        >
                            Previous
                        </button>

                        <button
                            disabled={
                                currentQuestion ===
                                questions.length - 1
                            }
                            onClick={() =>
                                setCurrentQuestion(
                                    currentQuestion + 1
                                )
                            }
                            className="bg-blue-600 text-white px-6 py-2 rounded"
                        >
                            Next
                        </button>

                    </div>

                </div>

                {/* QUESTION PALETTE */}

                <div className="bg-white rounded-lg shadow p-4">

                    <h3 className="font-bold mb-4">
                        Question Palette
                    </h3>

                    <div className="grid grid-cols-5 gap-2">

                        {questions.map((q, index) => (

                            <button
                                key={q.id}
                                onClick={() =>
                                    setCurrentQuestion(index)
                                }
                                className={`h-10 rounded text-sm font-medium

                                ${answers[q.id] !== undefined
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-200"
                                    }
                                `}
                            >
                                {q.id}
                            </button>

                        ))}

                    </div>

                    <div className="mt-6">

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold"
                        >
                            Submit Test
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}