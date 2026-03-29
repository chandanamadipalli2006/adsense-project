import Link from "next/link"
import { ArrowLeft, Globe, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TenthSocialActivities() {
    const activities = [
        {
            name: "SOCIAL MODEL ACTIVITY 1",
            link: "https://wordwall.net/resource/110312960",
            color: "from-blue-500 to-indigo-500",
        },
        {
            name: "SOCIAL MODEL ACTIVITY 2",
            link: "https://wordwall.net/resource/110313416",
            color: "from-blue-500 to-indigo-500",
        },
        {
            name: "SOCIAL MODEL ACTIVITY 3",
            link: "https://wordwall.net/resource/110313538",
            color: "from-blue-500 to-indigo-500",
        },
        {
            name: "SOCIAL MODEL ACTIVITY 4",
            link: "https://wordwall.net/resource/110313690",
            color: "from-blue-500 to-indigo-500",
        }
    ]

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        10th Class <span className="text-blue-600">Social Activities</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Explore history, geography, civics & economics 🌍
                    </p>
                </div>
            </section>

            {/* Activities Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">

                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Play Social Activities
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Click and explore engaging social studies activities
                            </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            {activities.map((item, index) => (
                                <Card
                                    key={index}
                                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                                >
                                    <CardHeader className="text-center pb-4">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                            <Globe className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-lg font-bold text-gray-900">
                                            {item.name}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="text-center">
                                        <CardDescription className="text-gray-600 mb-6">
                                            Ready to explore? Click below 👇
                                        </CardDescription>

                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            <Button className={`w-full bg-gradient-to-r ${item.color} hover:opacity-90 text-white py-5 text-base shadow-md hover:shadow-xl transition-all duration-300`}>
                                                <Play className="h-4 w-4 mr-2" />
                                                Play Now 🌍
                                            </Button>
                                        </a>

                                    </CardContent>
                                </Card>
                            ))}

                        </div>

                        {/* Back Button */}
                        <div className="text-center mt-12">
                            <Link href="/10th-social">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                                    <ArrowLeft className="h-5 w-5 mr-2" />
                                    Back
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}