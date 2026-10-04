import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TetMethodologyAndContentPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-cyan-50 to-blue-50 py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            TET <span className="text-cyan-600">(2A)</span> Tests
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
                            Methodology • Content • Success 🎯
                        </p>

                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Access methodology and content-based practice tests designed
                            to strengthen your preparation and improve your performance
                            in the TET 2A examination.
                        </p>
                    </div>
                </div>
            </section>

            {/* Practice Areas */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-5xl mx-auto">

                        {/* Section Heading */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Choose Your Practice Area
                            </h2>

                            <p className="text-xl text-gray-600">
                                Select a category and start your preparation journey.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                            {/* Grand Test Card */}
                            <div className="bg-white rounded-2xl border border-cyan-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8">

                                {/* Number Badge */}
                                <div className="flex items-center justify-center w-14 h-14 bg-cyan-100 rounded-full mb-5 text-cyan-700 font-bold text-lg">
                                    1
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    🏆 Grand Tests (3)
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    📝 Test your overall preparation with complete
                                    TET 2A grand tests covering important questions
                                    and topics.
                                </p>

                                {/* Test Buttons */}
                                <div className="space-y-3">

                                    <Link href="/grand-test-1" className="block">
                                        <Button
                                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-5 text-base rounded-xl"
                                        >
                                            📝 Test 1
                                        </Button>
                                    </Link>

                                    <Link href="/grand-test-2" className="block">
                                        <Button
                                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-5 text-base rounded-xl"
                                        >
                                            📝 Test 2
                                        </Button>
                                    </Link>

                                    <Link href="/grand-test-3" className="block">
                                        <Button
                                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-5 text-base rounded-xl"
                                        >
                                            📝 Test 3
                                        </Button>
                                    </Link>

                                </div>
                            </div>

                            {/* Methodology Card */}
                            <div className="bg-white rounded-2xl border border-cyan-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8">

                                {/* Number Badge */}
                                <div className="flex items-center justify-center w-14 h-14 bg-cyan-100 rounded-full mb-5 text-cyan-700 font-bold text-lg">
                                    2
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    📚 Methodology
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    🎯 Practice teaching methodology concepts through
                                    carefully designed mock tests. Strengthen
                                    pedagogical skills, classroom strategies, and
                                    exam readiness for TET 2A.
                                </p>

                                {/* Button */}
                                <Link href="/tet-methodology-tests" className="block">
                                    <Button
                                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6 text-base rounded-xl"
                                    >
                                        📋 View Tests
                                    </Button>
                                </Link>

                            </div>

                            {/* Psychology Card */}
                            <div className="bg-white rounded-2xl border border-cyan-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8">

                                {/* Number Badge */}
                                <div className="flex items-center justify-center w-14 h-14 bg-cyan-100 rounded-full mb-5 text-cyan-700 font-bold text-lg">
                                    3
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    🚀 Psychology
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    📝 Access psychology-based practice tests covering
                                    important subject concepts, exam-oriented
                                    questions, and key topics frequently asked in
                                    TET 2A examinations.
                                </p>

                                {/* Button */}
                                <Link href="/tet-psychology-tests" className="block">
                                    <Button
                                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6 text-base rounded-xl"
                                    >
                                        📋 View Tests
                                    </Button>
                                </Link>

                            </div>

                        </div>

                        {/* Back Button */}
                        <div className="text-center">
                            <Link href="/">
                                <Button
                                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg font-medium rounded-xl"
                                >
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