"use client"

import Link from "next/link"
import {
    ArrowLeft,
    FileText,
    Activity,
    BookOpen,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function EighthHindiSMAndActivities() {

    const handleComingSoon = () => {
        alert("Coming Soon 🚀")
    }

    const lessons = [
        {
            title: "Lesson 1",
            material: "/document-viewer?file=/pdfs/balaram-8-hindi-sm-2026-27.pdf",
            realLinks: true,
            activities: [
                "https://wordwall.net/resource/34307706",
                "https://wordwall.net/resource/34307894",
                "https://wordwall.net/resource/34308022",
            ],
        },
        {
            title: "Lesson 2",
            material: "#",
            realLinks: false,
            activities: ["#", "#", "#"],
        },
        {
            title: "Lesson 3",
            material: "#",
            realLinks: false,
            activities: ["#", "#", "#"],
        },
        {
            title: "Lesson 4",
            material: "#",
            realLinks: false,
            activities: ["#", "#", "#"],
        },
        {
            title: "Lesson 5",
            material: "#",
            realLinks: false,
            activities: ["#", "#", "#"],
        },
        {
            title: "Lesson 6",
            material: "#",
            realLinks: false,
            activities: ["#", "#", "#"],
        },
        {
            title: "Lesson 7",
            material: "#",
            realLinks: false,
            activities: ["#", "#", "#"],
        },
    ]

    const colors = [
        "from-red-500 to-pink-500",
        "from-blue-500 to-cyan-500",
        "from-green-500 to-emerald-500",
        "from-purple-500 to-violet-500",
        "from-orange-500 to-yellow-500",
        "from-indigo-500 to-blue-500",
        "from-teal-500 to-green-500",
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">

            {/* Hero Section */}
            <section className="relative py-16 sm:py-20 bg-[#0F172A] overflow-hidden">

                {/* Decorative Circles */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-6">
                        <BookOpen className="h-10 w-10 text-emerald-400" />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        8th Hindi S.M. & Activities
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Interactive study materials, activities, and learning resources
                        designed for Class 8 Hindi students.
                    </p>
                </div>
            </section>

            {/* Semester Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Semester Heading */}
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-3 bg-white shadow-lg rounded-full px-8 py-4 border border-gray-100">
                            <BookOpen className="h-7 w-7 text-emerald-600" />

                            <h2 className="text-3xl font-bold text-gray-800">
                                Semester 1
                            </h2>
                        </div>
                    </div>

                    {/* Lessons Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {lessons.map((lesson, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-3xl bg-white"
                            >

                                {/* Top Gradient Line */}
                                <div
                                    className={`h-3 bg-gradient-to-r ${colors[index]}`}
                                />

                                <CardHeader className="pb-4">
                                    <div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colors[index]} flex items-center justify-center shadow-lg mb-4`}
                                    >
                                        <BookOpen className="h-8 w-8 text-white" />
                                    </div>

                                    <CardTitle className="text-2xl font-bold text-gray-800">
                                        {lesson.title}
                                    </CardTitle>

                                    <p className="text-gray-600 leading-relaxed">
                                        Access lesson materials and engaging classroom activities.
                                    </p>
                                </CardHeader>

                                <CardContent className="space-y-4">

                                    {/* View Material Button */}
                                    {lesson.realLinks ? (
                                        <Link href={lesson.material}>
                                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 rounded-xl text-base font-medium shadow-md">
                                                <FileText className="h-5 w-5 mr-2" />
                                                View Material
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Button
                                            onClick={handleComingSoon}
                                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 rounded-xl text-base font-medium shadow-md"
                                        >
                                            <FileText className="h-5 w-5 mr-2" />
                                            View Material
                                        </Button>
                                    )}

                                    {/* Activity Buttons */}
                                    {/* Activity Buttons */}
                                    <div className="grid grid-cols-1 gap-3">

                                        {/* Activity 1 */}
                                        {lesson.realLinks ? (
                                            <a
                                                href={lesson.activities[0]}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-5 shadow-md">
                                                    <Activity className="h-4 w-4 mr-2" />

                                                    {index === 0
                                                        ? "Activity (Meanings)"
                                                        : "Activity 1"}
                                                </Button>
                                            </a>
                                        ) : (
                                            <Button
                                                onClick={handleComingSoon}
                                                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-5 shadow-md"
                                            >
                                                <Activity className="h-4 w-4 mr-2" />

                                                {index === 0
                                                    ? "Activity (Meanings)"
                                                    : "Activity 1"}
                                            </Button>
                                        )}

                                        {/* Activity 2 */}
                                        {lesson.realLinks ? (
                                            <a
                                                href={lesson.activities[1]}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-5 shadow-md">
                                                    <Activity className="h-4 w-4 mr-2" />

                                                    {index === 0
                                                        ? "Activity (Synonyms)"
                                                        : "Activity 2"}
                                                </Button>
                                            </a>
                                        ) : (
                                            <Button
                                                onClick={handleComingSoon}
                                                className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-5 shadow-md"
                                            >
                                                <Activity className="h-4 w-4 mr-2" />

                                                {index === 0
                                                    ? "Activity (Synonyms)"
                                                    : "Activity 2"}
                                            </Button>
                                        )}

                                        {/* Activity 3 */}
                                        {lesson.realLinks ? (
                                            <a
                                                href={lesson.activities[2]}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-5 shadow-md">
                                                    <Activity className="h-4 w-4 mr-2" />

                                                    {index === 0
                                                        ? "Activity (Opposites)"
                                                        : "Activity 3"}
                                                </Button>
                                            </a>
                                        ) : (
                                            <Button
                                                onClick={handleComingSoon}
                                                className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-5 shadow-md"
                                            >
                                                <Activity className="h-4 w-4 mr-2" />

                                                {index === 0
                                                    ? "Activity (Opposites)"
                                                    : "Activity 3"}
                                            </Button>
                                        )}

                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Back Button */}
                    <div className="text-center mt-16">
                        <Link href="/8th-hindi">
                            <Button className="bg-slate-900 hover:bg-black text-white px-10 py-6 rounded-2xl text-lg shadow-xl">
                                <ArrowLeft className="h-5 w-5 mr-2" />
                                Back to 8th Hindi
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    )
}