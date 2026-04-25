"use client"

import Link from "next/link"
import {
    ArrowLeft,
    PlayCircle,
    BookOpen,
    Puzzle,
    Volume2,
    Layers,
    Image,
    Leaf,
    TrainFront,
    User,
    Eye
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// ✅ Type Definition (Best Practice)
type Activity = {
    title: string
    link: string
    icon: any
    bg: string
    description?: string
}

type Section = {
    title: string
    color: string
    activities: Activity[]
}

export default function SixthHindiActivities() {

    const sections: Section[] = [
        {
            title: "Vowels (स्वर)",
            color: "from-yellow-400 to-orange-500",
            activities: [
                {
                    title: "Re-ordering the Vowels",
                    link: "https://wordwall.net/resource/30032959",
                    icon: Layers,
                    bg: "from-yellow-300 via-yellow-400 to-orange-400"
                },
                {
                    title: "स्वर Match with Telugu",
                    link: "https://wordwall.net/resource/73052547",
                    icon: BookOpen,
                    bg: "from-yellow-300 via-yellow-400 to-orange-400"
                },
                {
                    title: "स्वर & मात्रा (1)",
                    link: "https://wordwall.net/resource/73094013",
                    icon: Puzzle,
                    bg: "from-yellow-300 via-yellow-400 to-orange-400"
                },
                {
                    title: "स्वर & मात्रा (2)",
                    link: "https://wordwall.net/resource/73094264",
                    icon: Puzzle,
                    bg: "from-yellow-300 via-yellow-400 to-orange-400"
                },
            ],
        },
        {
            title: "Consonants (व्यंजन)",
            color: "from-blue-400 to-indigo-600",
            activities: [
                {
                    title: "व्यंजन क्रम में रखिए",
                    link: "https://wordwall.net/resource/73427872",
                    icon: BookOpen,
                    bg: "from-sky-300 via-blue-400 to-blue-500"
                },
                {
                    title: "स्वर vs व्यंजन",
                    link: "https://wordwall.net/resource/73475685",
                    icon: Layers,
                    bg: "from-sky-300 via-blue-400 to-blue-500"
                },
                {
                    title: "संयुक्त व्यंजन (1)",
                    link: "https://wordwall.net/resource/73506746",
                    icon: Layers,
                    bg: "from-sky-300 via-blue-400 to-blue-500"
                },
                {
                    title: "संयुक्त व्यंजन (2)",
                    link: "https://wordwall.net/resource/73507052",
                    icon: Layers,
                    bg: "from-sky-300 via-blue-400 to-blue-500",
                },
            ],
        },
        {
            title: "Advanced / Mixed",
            color: "from-purple-400 to-pink-500",
            activities: [
                {
                    title: "Telugu → Hindi पहचान (1)",
                    link: "https://wordwall.net/resource/73114654",
                    icon: BookOpen,
                    bg: "from-pink-300 via-pink-400 to-purple-400"
                },
                {
                    title: "Telugu → Hindi पहचान (2)",
                    link: "https://wordwall.net/resource/73116014",
                    icon: BookOpen,
                    bg: "from-pink-300 via-pink-400 to-purple-400"
                },
                {
                    title: "Hindi अक्षर पहचान",
                    link: "https://wordwall.net/resource/73264168",
                    icon: Puzzle,
                    bg: "from-pink-300 via-pink-400 to-purple-400"
                },
                {
                    title: "आवाज से शब्द पहचान",
                    link: "https://wordwall.net/resource/73791661",
                    icon: Volume2,
                    bg: "from-pink-300 via-pink-400 to-purple-400"
                },
                {
                    title: "'र' मात्रा (पदेन)",
                    link: "https://wordwall.net/resource/73546692",
                    icon: BookOpen,
                    bg: "from-pink-300 via-pink-400 to-purple-400"
                },
                {
                    title: "'र' मात्रा (रेफ)",
                    link: "https://wordwall.net/resource/73547937",
                    icon: BookOpen,
                    bg: "from-pink-300 via-pink-400 to-purple-400",
                },
                {
                    title: "संयुक्ताक्षर & द्वित्वाक्षर",
                    link: "https://wordwall.net/resource/73626640",
                    icon: Puzzle,
                    bg: "from-pink-300 via-pink-400 to-purple-400",
                },
                {
                    title: "चित्र का नाम पहचानो",
                    description: "బొమ్మ యొక్క హింది పేరును గుర్తించండి",
                    link: "https://wordwall.net/resource/73895929",
                    icon: Image,
                    bg: "from-yellow-300 via-orange-400 to-red-400",
                },
                {
                    title: "फलों का सही नाम मिलाओ",
                    description: "పండ్లును సరియైన హింది పేరుతో జతపరచండి",
                    link: "https://wordwall.net/resource/30587232",
                    icon: Leaf, // ✅ fixed
                    bg: "from-green-300 via-green-400 to-emerald-500",
                },
                {
                    title: "फल को सही नाम से चुनो",
                    description: "Select the correct fruit name and place it in the train",
                    link: "https://wordwall.net/resource/30007039",
                    icon: TrainFront, // ✅ fixed
                    bg: "from-blue-300 via-blue-400 to-indigo-500",
                },
                {
                    title: "शरीर के अंग",
                    description: "Body parts - match the correct pair",
                    link: "https://wordwall.net/resource/30606574",
                    icon: User,
                    bg: "from-purple-300 via-purple-400 to-pink-500",
                },
                {
                    title: "Guess the Correct Image",
                    description: "Identify the correct image",
                    link: "https://wordwall.net/resource/30008170",
                    icon: Eye,
                    bg: "from-cyan-300 via-sky-400 to-blue-500",
                }
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">

            {/* Hero */}
            <section className="relative py-20 text-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                    Hindi Learning Arena 🚀
                </h1>
                <p className="text-gray-300 mt-6 text-xl">
                    Learn • Practice • Play • Master 💡
                </p>
            </section>

            {/* Sections */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6 space-y-16">

                    {sections.map((section, i) => (
                        <div key={i}>
                            <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${section.color} text-transparent bg-clip-text`}>
                                {section.title}
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.activities.map((activity, index) => {
                                    const Icon = activity.icon

                                    return (
                                        <Card key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:scale-105 transition">
                                            <CardContent className="p-6 flex flex-col justify-between h-full">

                                                <div>
                                                    <div className="flex items-center mb-4">
                                                        <div className={`w-12 h-12 bg-gradient-to-r ${activity.bg} rounded-xl flex items-center justify-center mr-4`}>
                                                            <Icon className="text-white w-6 h-6" />
                                                        </div>
                                                        <h3 className="text-lg font-semibold">{activity.title}</h3>
                                                    </div>

                                                    {activity.description && (
                                                        <p className="text-sm text-gray-300 mb-4">
                                                            {activity.description}
                                                        </p>
                                                    )}
                                                </div>

                                                <a href={activity.link} target="_blank">
                                                    <Button className={`w-full bg-gradient-to-r ${activity.bg} text-black font-bold`}>
                                                        <PlayCircle className="w-5 h-5 mr-2" />
                                                        Play Now 🚀
                                                    </Button>
                                                </a>

                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    ))}

                    {/* Back Button */}
                    <div className="text-center mt-16">
                        <Link href="/hindi-activities">
                            <Button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-3">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    )
}