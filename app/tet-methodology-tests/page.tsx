import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

type Test = {
    name: string
    description: string
    emoji: string
    link?: string
    special?: boolean
}

export default function TetTestsPage() {
    const tests: Test[] = [
        {
            name: "1.1 भाषा अर्थ और स्वरूप",
            description:
                "🎯 Practice core concepts through carefully designed mock tests. Improve understanding, build confidence, and strengthen your exam preparation.",
            link: "https://wordwall.net/resource/114722997",
            emoji: "📘",
        },
        {
            name: "1.2 माध्‍यमिक स्‍तर पर हिंदी शिक्षण के उद्देश्‍य, प्रथम भाषा के रूप में, द्वितीय भाषा के रूप में",
            description:
                "📝 Attempt exam-oriented questions covering important topics. Enhance your speed, accuracy, and problem-solving skills.",
            emoji: "🚀",
            special: true,
        },
        {
            name: "1.3 भाषा की समस्या–त्भाषा सूत्र",
            description:
                "🏆 Challenge yourself with advanced-level practice tests. Evaluate your readiness and maximize your chances of success.",
            emoji: "⭐",
            special: true,
        },
        {
            name: "2.1 & 2.2 आदर् हिंदी अध्याप पे गुण अच्े शरकप पी विरेषतयऍं",
            description:
                "📚 Combined Practice Tests for Chapters 2.1 and 2.2.",
            emoji: "📖",
            special: true,
        },
        {
            name: "2.3 & 2.4 भाषा शिक् की समान् शसद्ाां & भाषा शिक् के सूत",
            description:
                "🎯 Combined Practice Tests for Chapters 2.3 and 2.4.",
            emoji: "🏅",
            special: true,
        },
        {
            name: "2.5 & 2.6 भाषा शिक्षण की प्रणालियाँ & भाषा शिक्षण की विधियाँ",
            description:
                "📚 Combined Practice Tests for Chapters 2.5 and 2.6.",
            emoji: "📗",
            special: true,
        },
        {
            name: "3.1 शिक्षण में भाषा कौशलों का महत्व",
            description:
                "🎯 Practice tests, syllabus and question bank for Language Skills Importance.",
            emoji: "📝",
            special: true,
        },
        {
            name: "3.2 भाषा कौशलों का विकास",
            description:
                "🚀 Improve language skill development concepts through tests and PDFs.",
            emoji: "🏆",
            special: true,
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
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {test.emoji} {test.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed mb-6 min-h-[100px]">
                                        {test.description}
                                    </p>

                                    {/* Special Card (1.2) */}
                                    {test.name.startsWith("1.2") ? (
                                        <div className="flex flex-col gap-3">
                                            <Link href="/document-viewer?file=/pdfs/Balaram-Tet-1.2-Summary.pdf">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    📘 Syllabus
                                                </Button>
                                            </Link>

                                            <Link href="/document-viewer?file=/pdfs/Balaram-Tet-1.2-QA-50.pdf">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    📄 Questions in PDF
                                                </Button>
                                            </Link>

                                            <Link href="/methodology-1.2-part-1">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    🚀 Start Test - Part 1
                                                </Button>
                                            </Link>

                                            <Link href="/methodology-1.2-part-2">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    🚀 Start Test - Part 2
                                                </Button>
                                            </Link>
                                        </div>
                                    ) : test.name.startsWith("1.3") ? (
                                        <div className="flex flex-col gap-3">
                                            <Link href="/document-viewer?file=/pdfs/Balaram-Tet-1.3-Summary.pdf">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    📘 Syllabus
                                                </Button>
                                            </Link>

                                            <Link href="/document-viewer?file=/pdfs/Balaram-Tet-1.3-QA-(50).pdf">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    📄 Questions in PDF
                                                </Button>
                                            </Link>

                                            <Link href="/methodology-1.3-part-1">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    🚀 Start Test - Part 1
                                                </Button>
                                            </Link>

                                            <Link href="/methodology-1.3-part-2">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    🚀 Start Test - Part 2
                                                </Button>
                                            </Link>
                                        </div>
                                    ) : test.name.startsWith("2.1") ? (
                                        <div className="flex flex-col gap-3">
                                            <Link href="/document-viewer?file=/pdfs/Balaram-Tet-2.1&2.2-Summary.pdf">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    📘 Syllabus
                                                </Button>
                                            </Link>

                                            <Link href="/document-viewer?file=/pdfs/Balaram-Tet-2.1-2.2-QA.pdf">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    📄 Questions in PDF
                                                </Button>
                                            </Link>

                                            <Link href="/methodology-2.1-2.2-part-1">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    🚀 Start Test - Part 1
                                                </Button>
                                            </Link>

                                            <Link href="/methodology-2.1-2.2-part-2">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    🚀 Start Test - Part 2
                                                </Button>
                                            </Link>
                                        </div>
                                    ) : test.name.startsWith("2.3") ? (
                                        <div className="flex flex-col gap-3">
                                            <Link href="/document-viewer?file=/pdfs/Balaram-Tet-2.3-2.4-Summary.pdf">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    📘 Syllabus
                                                </Button>
                                            </Link>

                                            <Link href="/document-viewer?file=/pdfs/Balaram-Tet-2.3-2.4-QA.pdf">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    📄 Questions in PDF
                                                </Button>
                                            </Link>

                                            <Link href="/methodology-2.3-2.4-part-1">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    🚀 Start Test - Part 1
                                                </Button>
                                            </Link>

                                            <Link href="/methodology-2.3-2.4-part-2">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    🚀 Start Test - Part 2
                                                </Button>
                                            </Link>
                                        </div>
                                    ) : test.name.startsWith("2.5") ? (
                                        <div className="flex flex-col gap-3">
                                                            <Link href="/document-viewer?file=/pdfs/Balaram-Tet-2.5-2.6-Summary.pdf">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    📘 Syllabus
                                                </Button>
                                            </Link>

                                            <Link href="/document-viewer?file=/pdfs/Balaram-Tet-2.5-2.6-QA-(50)-भाषा_शिक्षाण_की_प्रणालियॉं.pdf">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    📄 Questions in PDF
                                                </Button>
                                            </Link>

                                            <Link href="/methodology-2.5-2.6-part-1">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    🚀 Start Test - Part 1
                                                </Button>
                                            </Link>

                                            <Link href="/methodology-2.5-2.6-part-2">
                                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                    🚀 Start Test - Part 2
                                                </Button>
                                            </Link>
                                        </div>) : test.name.startsWith("3.1") ? (
                                            <div className="flex flex-col gap-3">
                                                                <Link href="/document-viewer?file=/pdfs/Balaram-Tet-3.1-Summary-भाषा_शिक्षण_में_भाषा_कौशलों_का_महत्व.pdf">
                                                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                        📘 Syllabus
                                                    </Button>
                                                </Link>

                                                <Link href="/document-viewer?file=/pdfs/Balaram-Tet-3.1-QA-50-भाषा_शिक्षण_में_भाषा_कौशलों_का_महत्व.pdf">
                                                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                        📄 Questions in PDF
                                                    </Button>
                                                </Link>

                                                <Link href="/methodology-3.1-part-1">
                                                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                        🚀 Start Test - Part 1
                                                    </Button>
                                                </Link>

                                            </div>) : test.name.startsWith("3.2") ? (
                                                <div className="flex flex-col gap-3">
                                                                    <Link href="/document-viewer?file=/pdfs/Balaram-Tet-3.2-Summary-भाषा_कौशलों_का_विकास.pdf">
                                                        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                            📘 Syllabus
                                                        </Button>
                                                    </Link>

                                                                    <Link href="/document-viewer?file=/pdfs/Balaram-Tet-3.2-QA-50-भाषा_कौशलों_का_विकास.pdf">
                                                        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                            📄 Questions in PDF
                                                        </Button>
                                                    </Link>

                                                    <Link href="/methodology-3.2-part-1">
                                                        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                            🚀 Start Test - Part 1
                                                        </Button>
                                                    </Link>

                                                    <Link href="/methodology-3.2-part-2">
                                                        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12">
                                                            🚀 Start Test - Part 2
                                                        </Button>
                                                    </Link>
                                                </div>) : (<Link href={test.link!}>
                                                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6 text-base rounded-xl transition-all duration-300">
                                                        🚀 Start Test
                                                    </Button>
                                                </Link>
                                    )}
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