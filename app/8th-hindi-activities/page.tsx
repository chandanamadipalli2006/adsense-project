import Link from "next/link"
import { ArrowLeft, FileText, BookOpen, PenTool, Puzzle, MessageSquare, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function EighthHindiActivities() {
  const activities = [
    {
      title: "पत्र लेखन (Letter Writing)",
      description: "Practice formal and informal letter writing in Hindi",
      icon: Edit,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      title: "निबंध लेखन (Essay Writing)",
      description: "Develop essay writing skills on various topics",
      icon: PenTool,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      title: "विज्ञापन लेखन (Advertisement Writing)",
      description: "Create effective advertisements in Hindi",
      icon: FileText,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      title: "अपठित गद्यांश (Unseen Passages)",
      description: "Practice comprehension with unseen passages",
      icon: BookOpen,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
    {
      title: "व्याकरण अभ्यास (Grammar Practice)",
      description: "Interactive exercises for Hindi grammar",
      icon: Puzzle,
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
    {
      title: "संवाद लेखन (Dialogue Writing)",
      description: "Create conversations between characters",
      icon: MessageSquare,
      color: "bg-teal-500",
      hoverColor: "hover:bg-teal-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Class 8 <span className="text-emerald-600">Hindi Activities</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Interactive Learning • Language Practice • Skill Development
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Interactive Activities</h2>
              <p className="text-xl text-gray-600">Engage with these fun and educational Hindi language activities</p>
            </div>

            {/* Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {activities.map((activity, index) => {
                const IconComponent = activity.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 ${activity.color} rounded-full flex items-center justify-center mr-4`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{activity.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{activity.description}</p>
                      <Button
                        className={`w-full ${activity.color} ${activity.hoverColor} text-white transition-colors duration-200 py-5`}
                      >
                        Start Activity
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Additional Resources */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Supplementary Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white py-3">
                  <FileText className="h-4 w-4 mr-2" />
                  Grammar Reference
                </Button>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white py-3">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Vocabulary Lists
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white py-3">
                  <PenTool className="h-4 w-4 mr-2" />
                  Writing Guides
                </Button>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/hindi-activities">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Activities
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium">
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
