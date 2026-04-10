"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { questions } from "@/app/data/polycet2025"
import { useRouter } from "next/navigation"

/* ================= TYPES ================= */
type Status = "not-visited" | "answered" | "not-answered" | "review"

/* ================= MAIN ================= */
export default function PolycetMockTest() {
    const router = useRouter()

    const [started, setStarted] = useState(false)
    const [timeLeft, setTimeLeft] = useState(120 * 60)
    const [currentQ, setCurrentQ] = useState(0)
    const [answers, setAnswers] = useState<Record<number, number>>({})
    const [status, setStatus] = useState<Record<number, Status>>({})
    const [submitted, setSubmitted] = useState(false)
    const [score, setScore] = useState(0)

    const q = questions[currentQ]
    const updateStatusBeforeMove = () => {
        const currentId = q.id

        if (answers[currentId] === undefined && status[currentId] !== "review") {
            setStatus((prev) => ({
                ...prev,
                [currentId]: "not-answered",
            }))
        }
    }

    const nextQuestion = () => {
        updateStatusBeforeMove()
        setCurrentQ((prev) => Math.min(prev + 1, questions.length - 1))
    }

    const prevQuestion = () => {
        updateStatusBeforeMove()
        setCurrentQ((prev) => Math.max(prev - 1, 0))
    }
    /* ================= TIMER ================= */
    useEffect(() => {
        if (!started || submitted) return

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    handleSubmit()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [started, submitted])

    /* ================= FORMAT TIME ================= */
    const formatTime = (time: number) => {
        const m = Math.floor(time / 60)
        const s = time % 60
        return `${m}:${s.toString().padStart(2, "0")}`
    }

    /* ================= SELECT OPTION ================= */
    const selectOption = (index: number) => {
        setAnswers((prev) => ({ ...prev, [q.id]: index }))
        setStatus((prev) => ({ ...prev, [q.id]: "answered" }))
    }

    /* ================= NAVIGATION ================= */
    const goToQuestion = (index: number) => {
        setCurrentQ(index)
    }


    /* ================= MARK REVIEW ================= */
    const markForReview = () => {
        setStatus((prev) => ({ ...prev, [q.id]: "review" }))
        nextQuestion()
    }

    /* ================= SUBMIT ================= */
    const handleSubmit = () => {
        let sc = 0
        questions.forEach((q) => {
            if (answers[q.id] === q.answer) sc++
        })
        setScore(sc)
        setSubmitted(true)
    }

    /* ================= START SCREEN ================= */
    if (!started) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">POLYCET Mock Test</h1>
                <p className="mb-6 text-gray-600">120 Questions • 120 Minutes</p>
                <Button onClick={() => setStarted(true)}>Start Exam</Button>
            </div>
        )
    }

    /* ================= RESULT SCREEN ================= */
    if (submitted) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Exam Completed</h1>

                <p className="text-xl mb-2">
                    Score: {score} / {questions.length}
                </p>

                <p className="text-gray-600 mb-6">
                    Percentage: {((score / questions.length) * 100).toFixed(2)}%
                </p>

                <div className="flex gap-4">
                    <Button
                        onClick={() => router.push("/")}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        Go to Home
                    </Button>

                    <Button
                        onClick={() => {
                            setSubmitted(false)
                            setStarted(false)
                            setAnswers({})
                            setStatus({})
                            setTimeLeft(120 * 60)
                            setCurrentQ(0)
                        }}
                        className="bg-green-600 hover:bg-green-700"
                    >
                        Retry Test
                    </Button>
                </div>
            </div>
        )
    }

    /* ================= PALETTE COLOR ================= */
    const getColor = (id: number) => {
        if (status[id] === "answered") return "bg-green-500 text-white"
        if (status[id] === "review") return "bg-yellow-400"
        if (status[id] === "not-answered") return "bg-red-400"
        return "bg-gray-200"
    }

    /* ================= MAIN EXAM UI ================= */
    return (
        <div className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">

            {/* LEFT PANEL */}
            <div className="lg:col-span-3">
                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-semibold">
                        Question {q.id}
                    </h2>
                    <div className="text-red-600 font-bold">
                        ⏱ {formatTime(timeLeft)}
                    </div>
                </div>

                <p className="mb-6">{q.question}</p>

                <div className="space-y-3">
                    {q.options.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => selectOption(idx)}
                            className={`w-full text-left p-3 border rounded-lg ${answers[q.id] === idx
                                    ? "bg-blue-500 text-white"
                                    : "bg-white hover:bg-gray-100"
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                    <Button onClick={prevQuestion}>Previous</Button>
                    <Button onClick={nextQuestion}>Next</Button>
                    <Button onClick={markForReview} className="bg-yellow-500">
                        Mark for Review
                    </Button>
                    <Button onClick={handleSubmit} className="bg-green-600">
                        Submit
                    </Button>
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Question Palette</h3>

                <div className="grid grid-cols-5 gap-2">
                    {questions.map((q, i) => (
                        <button
                            key={q.id}
                            onClick={() => goToQuestion(i)}
                            className={`p-2 rounded text-sm ${getColor(q.id)}`}
                        >
                            {q.id}
                        </button>
                    ))}
                </div>

                <div className="mt-4 text-sm space-y-1">
                    <p>🟢 Answered</p>
                    <p>🟡 Review</p>
                    <p>🔴 Not Answered</p>
                    <p>⚪ Not Visited</p>
                </div>
            </div>
        </div>
    )
}