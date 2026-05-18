import Link from "next/link"
import { ArrowLeft, GraduationCap, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
export default function DepartmentTestsPage() {
    const departments = [
        {
            name: "141",
            description: "Department 141 tests and related examination resources.",
            color: "bg-blue-500",
            hoverColor: "hover:bg-blue-600",
            link: "/department-tests/141",
        },
        {
            name: "88",
            description: "Department 88 tests and practice materials for students.",
            color: "bg-green-500",
            hoverColor: "hover:bg-green-600",
            link: "/department-tests-88",
        },
        {
            name: "97",
            description: "Department 97 test papers and preparation resources.",
            color: "bg-purple-500",
            hoverColor: "hover:bg-purple-600",
            link: "/department-tests-97",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-cyan-50 to-blue-50 py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Department <span className="text-cyan-600">Tests</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
                            Access Department Wise Test Resources
                        </p>
                    </div>
                </div>
            </section>

            {/* Department Cards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Summaries - Practice Papers 
                            </h2>

                            <p className="text-xl text-gray-600">
                                Select a department to view test papers and resources
                            </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {departments.map((department, index) => (
                                <Card
                                    key={index}
                                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <CardHeader className="text-center pb-4">
                                        <div
                                            className={`w-16 h-16 ${department.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <GraduationCap className="h-8 w-8 text-white" />
                                        </div>

                                        <CardTitle className="text-2xl font-bold text-gray-900">
                                            {department.name}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="text-center">
                                        <CardDescription className="text-gray-600 mb-6">
                                            {department.description}
                                        </CardDescription>

                                        <Link href={department.link}>
                                            <Button
                                                className={`w-full ${department.color} ${department.hoverColor} text-white transition-colors duration-200 py-6 text-base`}
                                            >
                                                <FileText className="h-4 w-4 mr-2" />
                                                View Details
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Back Button */}
                        <div className="text-center">
                            <Link href="/">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium">
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