import Link from "next/link"
import { ArrowLeft, FileText, PlayCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Department141Page() {
    const tests = [
        {
            name: "Test 1",
            description: "Practice test covering important concepts.",
            color: "bg-blue-500",
            hoverColor: "hover:bg-blue-600",
            link: "/department-tests/141/test-1",
            document: "/pdfs/141/test-1.pdf",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Department <span className="text-blue-600">141 Tests</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
                            Practice Tests • Mock Exams • Department Preparation
                        </p>
                    </div>
                </div>
            </section>

            {/* Tests Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Available Tests
                            </h2>

                            <p className="text-xl text-gray-600">
                                Choose a test and start your examination
                            </p>
                        </div>

                        {/* Tests Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {tests.map((test, index) => (
                                <Card
                                    key={index}
                                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <CardHeader className="text-center pb-4">
                                        <div
                                            className={`w-16 h-16 ${test.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <FileText className="h-8 w-8 text-white" />
                                        </div>

                                        <CardTitle className="text-2xl font-bold text-gray-900">
                                            {test.name}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="text-center">
                                        <CardDescription className="text-gray-600 mb-6">
                                            {test.description}
                                        </CardDescription>

                                        <div className="space-y-3">
                                            {/* Start Exam Button */}
                                            <Link href={test.link}>
                                                <Button
                                                    className={`w-full ${test.color} ${test.hoverColor} text-white transition-colors duration-200 py-6 text-base`}
                                                >
                                                    <PlayCircle className="h-4 w-4 mr-2" />
                                                    Start Exam
                                                </Button>
                                            </Link>

                                            {/* View Document Button */}
                                            <Link
                                                href={`/document-viewer?file=${encodeURIComponent(test.document)}`}
                                            >
                                                <Button
                                                    variant="outline"
                                                    className="w-full border-2 border-gray-300 hover:bg-gray-100 py-6 text-base"
                                                >
                                                    <FileText className="h-4 w-4 mr-2" />
                                                    View Document
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Back Button */}
                        <div className="text-center">
                            <Link href="/department-tests">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium">
                                    <ArrowLeft className="h-5 w-5 mr-2" />
                                    Back to Department Tests
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}