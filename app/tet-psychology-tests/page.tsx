import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

type Test = {
    name: string
    description: string
    emoji: string
    link?: string
    disabled?: boolean
}

export default function TetPsychologyPage() {
    const tests: Test[] = [
        {
            name: "1",
            description:
                "🎯 Practice important Psychology concepts through carefully designed TET-oriented questions. Improve your understanding, accuracy, and confidence.",
            emoji: "📘",
        },
        {
            name: "2",
            description:
                "📝 Attempt exam-oriented Psychology questions covering important concepts, theories, and applications for TET preparation.",
            emoji: "🚀",
            disabled: true,
        },
        {
            name: "3",
            description:
                "🏆 Challenge yourself with advanced Psychology practice questions. Test your preparation and improve your exam performance.",
            emoji: "⭐",
            disabled: true,
        },
    ]

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-cyan-50 to-blue-50 py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            TET <span className="text-cyan-600">(2A)</span> Psychology
                            Practice Tests
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
                            Learn • Practice • Succeed 🎯
                        </p>

                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Access Psychology practice tests designed to strengthen
                            your concepts, improve accuracy, and prepare effectively
                            for TET Paper 2A.
                        </p>

                    </div>
                </div>
            </section>

            {/* Tests Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-6xl mx-auto">

                        {/* Section Heading */}
                        <div className="text-center mb-12">

                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Psychology Practice Tests
                            </h2>

                            <p className="text-xl text-gray-600">
                                Select a test and start your preparation journey today.
                            </p>

                        </div>

                        {/* Tests Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

                            {tests.map((test, index) => (

                                <div
                                    key={index}
                                    className={`bg - white rounded - 2xl border shadow - md p - 6 transition - all duration - 300 ${
    test.disabled
        ? "border-gray-200 opacity-70"
        : "border-cyan-100 hover:shadow-2xl hover:-translate-y-2"
} `}
                                >

                                    {/* Number Badge */}
                                    <div
                                        className={`flex items - center justify - center w - 14 h - 14 rounded - full mb - 4 font - bold text - lg ${
    test.disabled
        ? "bg-gray-200 text-gray-500"
        : "bg-cyan-100 text-cyan-700"
} `}
                                    >
                                        {test.name}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {test.emoji} Psychology - {test.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed mb-6 min-h-[100px]">
                                        {test.description}
                                    </p>

                                    {/* ========================= */}
                                    {/* FIRST CONTAINER - 5 BUTTONS */}
                                    {/* ========================= */}

                                    {test.name === "1" && (
                                        <div className="flex flex-col gap-3">

                                            <Link href="/psychology-1">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6 text-base rounded-xl transition-all duration-300">
                                                    🚀 Start Test 1
                                                </Button>
                                            </Link>

                                            <Link href="/psychology-2">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6 text-base rounded-xl transition-all duration-300">
                                                    🚀 Start Test 2
                                                </Button>
                                            </Link>

                                            <Link href="/psychology-3">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6 text-base rounded-xl transition-all duration-300">
                                                    🚀 Start Test 3
                                                </Button>
                                            </Link>

                                            <Link href="/psychology-4">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6 text-base rounded-xl transition-all duration-300">
                                                    🚀 Start Test 4
                                                </Button>
                                            </Link>

                                            <Link href="/psychology-5">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6 text-base rounded-xl transition-all duration-300">
                                                    🚀 Start Test 5
                                                </Button>
                                            </Link>

                                        </div>
                                    )}

                                    {/* ========================= */}
                                    {/* CONTAINER 2 & 3 DISABLED */}
                                    {/* ========================= */}

                                    {test.disabled && (
                                        <Button
                                            disabled
                                            className="w-full bg-gray-300 text-gray-600 font-semibold py-6 text-base rounded-xl cursor-not-allowed"
                                        >
                                            <Lock className="h-5 w-5 mr-2" />
                                            Tests Coming Soon
                                        </Button>
                                    )}

                                </div>

                            ))}

                        </div>

                        {/* Back Button */}
                        <div className="text-center">

                            <Link href="/tet-methodology-and-psychology">

                                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg font-medium rounded-xl">

                                    <ArrowLeft className="h-5 w-5 mr-2" />

                                    Back to Home

                                </Button>

                            </Link>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

