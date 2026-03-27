import Link from "next/link"
import { ArrowLeft, Dna, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TenthBiology() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Class 10 <span className="text-green-600">Biology Activities</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
                            Explore • Learn • Discover Life
                        </p>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">

                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Biology Activities
                            </h2>
                            <p className="text-xl text-gray-600">
                                Strengthen your understanding of life sciences with interactive biology activities
                            </p>
                        </div>

                        {/* Activity Card */}
                        <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <CardHeader className="text-center pb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Dna className="h-8 w-8 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-gray-900">
                                    Activities
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="text-center">
                                <CardDescription className="text-gray-600 mb-6">
                                    Dive into exciting biology exercises covering topics like cells, human body systems, genetics, and environment.
                                </CardDescription>

                                {/* Play Activities Button */}
                                <Link href="/10th-biology-activities">
                                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transition-all duration-300 py-6 text-base shadow-md hover:shadow-lg">
                                        <Play className="h-4 w-4 mr-2" />
                                        Play Activities
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Back Button */}
                        <div className="text-center mt-10">
                            <Link href="/">
                                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium">
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