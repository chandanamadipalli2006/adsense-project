import Link from "next/link"
import {
    ArrowLeft,
    PlayCircle,
    BookOpen,
    Puzzle,
    Volume2,
    Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SixthHindiActivities() {

    const sections = [
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
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">

            {/* 🔥 Flashy Hero */}
            <section className="relative py-20 text-center overflow-hidden">

                {/* Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-500/20 to-purple-500/20 blur-3xl"></div>

                <h1 className="relative text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 text-transparent bg-clip-text drop-shadow-lg">
                    Hindi Learning Arena 🚀
                </h1>

                <p className="relative text-gray-300 mt-6 text-xl">
                    Learn • Practice • Play • Master 💡
                </p>
            </section>

            {/* Sections */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6 space-y-16">

                    {sections.map((section, i) => (
                        <div key={i}>

                            {/* Section Title */}
                            <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${section.color} text-transparent bg-clip-text`}>
                                {section.title}
                            </h2>

                            {/* Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                                {section.activities.map((activity, index) => {
                                    const Icon = activity.icon

                                    return (
                                        <Card
                                            key={index}
                                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-300"
                                        >
                                            <CardContent className="p-6 flex flex-col justify-between h-full">

                                                {/* Icon + Title */}
                                                <div className="flex items-center mb-6">
                                                    <div className={`w-12 h-12 bg-gradient-to-r ${activity.bg} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                                                        <Icon className="text-white w-6 h-6" />
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-white">
                                                        {activity.title}
                                                    </h3>
                                                </div>

                                                {/* Button */}
                                                <a href={activity.link} target="_blank">
                                                    <Button
                                                        className={`w-full 
  bg-gradient-to-r ${activity.bg} 
  text-black font-bold tracking-wide

  shadow-lg shadow-black/30
  hover:shadow-xl hover:shadow-yellow-300/50

  hover:scale-105 active:scale-95
  animate-pulse

  transition-all duration-300`}
                                                    >
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
                            <Button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:scale-105 text-white px-8 py-3 shadow-lg">
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