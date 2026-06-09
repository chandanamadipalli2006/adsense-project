import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TetTestsPage() {
    const tests = [
        {
            name: "1.1 भाषा अर्थ और स्वरूप",
            description:
                "🎯 Practice core concepts through carefully designed mock tests. Improve understanding, build confidence, and strengthen your exam preparation.",
            link: "https://wordwall.net/resource/114722997",
            emoji: "📘",
        },
        {
            name: "1.2 माध्_यमिक स्_तर पर हिंदी शिक्षण के उद्देश्_य, प्रथम भाषा के रूप में, द्वितीय भाषा के रूप में",
            description:
                "📝 Attempt exam-oriented questions covering important topics. Enhance your speed, accuracy, and problem-solving skills.",
            link: "#",
            emoji: "🚀",
        },
        {
            name: "1.3 भाषा की समस्ा–त्भाषा सू्त्र",
            description:
                "🏆 Challenge yourself with advanced-level practice tests. Evaluate your readiness and maximize your chances of success.",
            link: "#",
            emoji: "⭐",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-cyan-50 to-blue-50 py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            TET <span className="text-cyan-600">(2A)</span> Practice Tests
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
                            Learn • Practice • Succeed 🎯
                        </p>

                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Access chapter-wise practice tests, mock exams, and concept-based
                            assessments designed to help you excel in TET Paper 2A.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tests Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                D. 3 Language - Hindi (60M) Practice Tests
                            </h2>

                            <p className="text-xl text-gray-600">
                                Select a test and start your preparation journey today.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {tests.map((test, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl border border-cyan-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6"
                                >
                                    {/* Number Badge */}
                                    <div className="flex items-center justify-center w-14 h-14 bg-cyan-100 rounded-full mb-4 text-cyan-700 font-bold text-lg">
                                        {index + 1}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {test.emoji} {test.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed mb-6 min-h-[110px]">
                                        {test.description}
                                    </p>

                                    {/* Start Button */}
                                    <Link href={test.link}>
                                        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6 text-base rounded-xl transition-all duration-300">
                                            🚀 Start Test
                                        </Button>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Back Button */}
                        <div className="text-center">
                            <Link href="/tet-methodology-and-content">
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