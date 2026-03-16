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
            name: "बरसते बादल",
            icon: BookOpen,
            color: "bg-blue-500",
            hoverColor: "hover:bg-blue-600",
            description: "Lesson content, notes and materials for Baraste Badal",
            link: "/baraste-badal-key",
        },
        {
            name: "ईदगाह",
            icon: BookOpen,
            color: "bg-green-500",
            hoverColor: "hover:bg-green-600",
            description: "Study materials and explanation for Eidgah lesson",
            link: "/eidgah-key",
        },
        {
            name: "हम भारतवासी",
            icon: BookOpen,
            color: "bg-purple-500",
            hoverColor: "hover:bg-purple-600",
            description: "Resources related to the lesson Hum Bharatvasi",
            link: "/hum-bharatvasi-key",
        },
        {
            name: "कण-कण का अधिकारी",
            icon: BookOpen,
            color: "bg-orange-500",
            hoverColor: "hover:bg-orange-600",
            description: "Explanation and exercises for this chapter",
            link: "/kan-kan-ka-adhikari-key",
        },
        {
            name: "लोकगीत",
            icon: BookOpen,
            color: "bg-pink-500",
            hoverColor: "hover:bg-pink-600",
            description: "Materials and notes for Lokgeet",
            link: "/lokgeet-key",
        },
        {
            name: "अंतर्राष्ट्रीय स्तर पर हिंदी",
            icon: Library,
            color: "bg-teal-500",
            hoverColor: "hover:bg-teal-600",
            description: "Content explaining the importance of Hindi globally",
            link: "/antarraashtriya-star-par-hindi-key",
        },
        {
            name: "भक्ति पद",
            icon: BookMarked,
            color: "bg-red-500",
            hoverColor: "hover:bg-red-600",
            description: "Study material and explanation of Bhakti Pad",
            link: "/bhakti-pad-key",
        },
        {
            name: "स्वराज्य की नींव",
            icon: BookMarked,
            color: "bg-indigo-500",
            hoverColor: "hover:bg-indigo-600",
            description: "Lesson explanation and exercises",
            link: "/swarajya-ki-neev-key",
        },
        {
            name: "दक्षिणी गंगा गोदावरी",
            icon: BookMarked,
            color: "bg-yellow-500",
            hoverColor: "hover:bg-yellow-600",
            description: "Detailed explanation and notes",
            link: "/dakshini-ganga-godavari-key",
        },
        {
            name: "नीति के दोहे",
            icon: BookMarked,
            color: "bg-cyan-500",
            hoverColor: "hover:bg-cyan-600",
            description: "Moral couplets and their explanations",
            link: "/neeti-ke-dohe-key",
        },
        {
            name: "जल ही जीवन है",
            icon: BookOpen,
            color: "bg-sky-500",
            hoverColor: "hover:bg-sky-600",
            description: "Lesson content and exercises",
            link: "/jal-hi-jeevan-hai-key",
        },
        {
            name: "धरती के सवाल – अंतरिक्ष के जवाब",
            icon: BookOpen,
            color: "bg-lime-500",
            hoverColor: "hover:bg-lime-600",
            description: "Lesson explaining science and curiosity",
            link: "/dharti-ke-sawal-antariksh-ke-jawab-key",
        }
    ];

    return (
        <div className="min-h-screen bg-white">

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
                <div className="container mx-auto text-center px-6">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        1 To 12 <span className="text-emerald-600">Lessons Key Key</span>
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