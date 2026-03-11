import Link from "next/link"
import {
    ArrowLeft,
    BookOpen,
    FileText,
    Library,
    BookMarked,
    PenTool,
    Type,
    ListOrdered,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HindiCategories() {
    const resources = [
        {
            name: "Baraste Badal",
            icon: BookOpen,
            color: "bg-blue-500",
            hoverColor: "hover:bg-blue-600",
            description: "Lesson content, notes and materials for Baraste Badal",
            link: "/baraste-badal",
        },
        {
            name: "Eidgah",
            icon: BookOpen,
            color: "bg-green-500",
            hoverColor: "hover:bg-green-600",
            description: "Study materials and explanation for Eidgah lesson",
            link: "/eidgah",
        },
        {
            name: "Hum Bharatvasi",
            icon: BookOpen,
            color: "bg-purple-500",
            hoverColor: "hover:bg-purple-600",
            description: "Resources related to the lesson Hum Bharatvasi",
            link: "/hum-bharatvasi",
        },
        {
            name: "Kan Kan Ka Adhikari",
            icon: BookOpen,
            color: "bg-orange-500",
            hoverColor: "hover:bg-orange-600",
            description: "Explanation and exercises for this chapter",
            link: "/kan-kan-ka-adhikari",
        },
        {
            name: "Lokgeet",
            icon: BookOpen,
            color: "bg-pink-500",
            hoverColor: "hover:bg-pink-600",
            description: "Materials and notes for Lokgeet",
            link: "/lokgeet",
        },
        {
            name: "Hindi at International Level",
            icon: Library,
            color: "bg-teal-500",
            hoverColor: "hover:bg-teal-600",
            description: "Content explaining the importance of Hindi globally",
            link: "/hindi-international-level",
        },
        {
            name: "Bhakti Pad",
            icon: BookMarked,
            color: "bg-red-500",
            hoverColor: "hover:bg-red-600",
            description: "Study material and explanation of Bhakti Pad",
            link: "/bhakti-pad",
        },
        {
            name: "Foundation of Swarajya",
            icon: BookMarked,
            color: "bg-indigo-500",
            hoverColor: "hover:bg-indigo-600",
            description: "Lesson explanation and exercises",
            link: "/foundation-of-swarajya",
        },
        {
            name: "Dakshini Ganga Godavari",
            icon: BookMarked,
            color: "bg-yellow-500",
            hoverColor: "hover:bg-yellow-600",
            description: "Detailed explanation and notes",
            link: "/dakshini-ganga-godavari",
        },
        {
            name: "Neeti Dohe",
            icon: BookMarked,
            color: "bg-cyan-500",
            hoverColor: "hover:bg-cyan-600",
            description: "Moral couplets and their explanations",
            link: "/neeti-dohe",
        },
        {
            name: "Water is Life",
            icon: BookOpen,
            color: "bg-sky-500",
            hoverColor: "hover:bg-sky-600",
            description: "Lesson content and exercises",
            link: "/water-is-life",
        },
        {
            name: "Earth Questions Space Answers",
            icon: BookOpen,
            color: "bg-lime-500",
            hoverColor: "hover:bg-lime-600",
            description: "Lesson explaining science and curiosity",
            link: "/earth-questions-space-answers",
        },

        {
            name: "Tatsam and Tadbhav",
            icon: Type,
            color: "bg-purple-500",
            hoverColor: "hover:bg-purple-600",
            description: "Learn the difference between Tatsam and Tadbhav words",
            link: "/tatsam-tadbhav",
        },
        {
            name: "Verb (Kriya)",
            icon: PenTool,
            color: "bg-green-500",
            hoverColor: "hover:bg-green-600",
            description: "Grammar explanation for verbs in Hindi",
            link: "/kriya",
        },
        {
            name: "Numbers",
            icon: ListOrdered,
            color: "bg-orange-500",
            hoverColor: "hover:bg-orange-600",
            description: "Hindi numbers and their usage",
            link: "/numbers",
        },
        {
            name: "Karaka",
            icon: FileText,
            color: "bg-blue-500",
            hoverColor: "hover:bg-blue-600",
            description: "Grammar topic explaining Karaka",
            link: "/karaka",
        },
        {
            name: "Synonyms",
            icon: FileText,
            color: "bg-red-500",
            hoverColor: "hover:bg-red-600",
            description: "Collection of Hindi synonyms",
            link: "/synonyms",
        },
        {
            name: "Antonyms",
            icon: FileText,
            color: "bg-teal-500",
            hoverColor: "hover:bg-teal-600",
            description: "Collection of Hindi opposite words",
            link: "/antonyms",
        },
        {
            name: "Samasa",
            icon: FileText,
            color: "bg-indigo-500",
            hoverColor: "hover:bg-indigo-600",
            description: "Compound word grammar explanation",
            link: "/samasa",
        },
        {
            name: "Sandhi Viched",
            icon: FileText,
            color: "bg-pink-500",
            hoverColor: "hover:bg-pink-600",
            description: "Rules and examples of Sandhi Viched",
            link: "/sandhi-viched",
        },
        {
            name: "Prefixes",
            icon: FileText,
            color: "bg-yellow-500",
            hoverColor: "hover:bg-yellow-600",
            description: "Hindi prefixes and examples",
            link: "/prefixes",
        },
        {
            name: "Suffixes",
            icon: FileText,
            color: "bg-cyan-500",
            hoverColor: "hover:bg-cyan-600",
            description: "Hindi suffixes and word formation",
            link: "/suffixes",
        },
        {
            name: "Idioms",
            icon: FileText,
            color: "bg-green-600",
            hoverColor: "hover:bg-green-700",
            description: "Hindi idioms and meanings",
            link: "/idioms",
        },
        {
            name: "Gender",
            icon: FileText,
            color: "bg-purple-600",
            hoverColor: "hover:bg-purple-700",
            description: "Masculine and feminine forms",
            link: "/gender",
        },
        {
            name: "Number",
            icon: FileText,
            color: "bg-blue-600",
            hoverColor: "hover:bg-blue-700",
            description: "Singular and plural forms",
            link: "/number",
        },
        {
            name: "Tense",
            icon: FileText,
            color: "bg-orange-600",
            hoverColor: "hover:bg-orange-700",
            description: "Past, Present and Future tense",
            link: "/tense",
        },
        {
            name: "Correct Word Forms",
            icon: FileText,
            color: "bg-red-600",
            hoverColor: "hover:bg-red-700",
            description: "Practice correct word usage",
            link: "/correct-word-forms",
        },
        {
            name: "Adverbs",
            icon: FileText,
            color: "bg-teal-600",
            hoverColor: "hover:bg-teal-700",
            description: "Hindi adverbs and examples",
            link: "/adverbs",
        },
    ]

    return (
        <div className="min-h-screen bg-white">

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
                <div className="container mx-auto text-center px-6">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Hindi Learning <span className="text-emerald-600">Categories</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Lessons • Grammar • Practice Materials
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-16">
                <div className="container mx-auto px-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {resources.map((resource, index) => {
                            const IconComponent = resource.icon
                            return (
                                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2">
                                    <CardHeader className="text-center">

                                        <div
                                            className={`w-16 h-16 ${resource.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                                        >
                                            <IconComponent className="h-8 w-8 text-white" />
                                        </div>

                                        <CardTitle>{resource.name}</CardTitle>

                                    </CardHeader>

                                    <CardContent className="text-center">

                                        <CardDescription className="mb-6">
                                            {resource.description}
                                        </CardDescription>

                                        <Link href={resource.link}>
                                            <Button className={`w-full ${resource.color} ${resource.hoverColor} text-white`}>
                                                Open {resource.name}
                                            </Button>
                                        </Link>

                                    </CardContent>
                                </Card>
                            )
                        })}

                    </div>

                    <div className="text-center mt-16">
                        <Link href="/">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>

        </div>
    )
}