import Link from "next/link"
import { ArrowLeft, BookMarked, Download, Eye, Calendar, Clock, CheckCircle, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SixthHindiDiaries() {
  // Define diaries with icons and colors
  const diaries = [
    {
      name: "Foundation Planning Diaries",
      items: [
        {
          title: "JUNE DIARY",
          icon: BookMarked,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Foundation building daily planning for June",
        },
        {
          title: "JULY DIARY",
          icon: BookMarked,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Basic skills development plans for July",
        },
        {
          title: "AUGUST DIARY",
          icon: BookMarked,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Structured learning planning for August",
        },
        {
          title: "SEPTEMBER DIARY",
          icon: BookMarked,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Progressive learning plans for September",
        },
      ],
    },
    {
      name: "Skill Development Diaries",
      items: [
        {
          title: "READING SKILLS",
          icon: BookMarked,
          color: "bg-amber-600 hover:bg-amber-700",
          description: "Focused planning for reading skill development",
        },
        {
          title: "WRITING SKILLS",
          icon: BookMarked,
          color: "bg-amber-600 hover:bg-amber-700",
          description: "Comprehensive writing skills planning",
        },
        {
          title: "VOCABULARY BUILDING",
          icon: BookMarked,
          color: "bg-amber-600 hover:bg-amber-700",
          description: "Systematic vocabulary development planning",
        },
        {
          title: "GRAMMAR BASICS",
          icon: BookMarked,
          color: "bg-amber-600 hover:bg-amber-700",
          description: "Foundation grammar instruction planning",
        },
      ],
    },
    {
      name: "Activity Planning Diaries",
      items: [
        {
          title: "FUN ACTIVITIES",
          icon: BookMarked,
          color: "bg-green-600 hover:bg-green-700",
          description: "Engaging activities planning for young learners",
        },
        {
          title: "ASSESSMENT DIARY",
          icon: BookMarked,
          color: "bg-blue-600 hover:bg-blue-700",
          description: "Simple assessment planning and tracking",
        },
        {
          title: "PROJECT PLANNER",
          icon: BookMarked,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Basic project planning for class activities",
        },
        {
          title: "CREATIVE EXPRESSION",
          icon: BookMarked,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Creative activities planning for expression",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Class 6 <span className="text-orange-600">Hindi Diaries</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Foundation planning tools for beginning Hindi instruction
            </p>
          </div>
        </div>
      </section>

      {/* Diaries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {diaries.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const IconComponent = item.icon
                    return (
                      <Card
                        key={itemIndex}
                        className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-orange-200"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color.split(" ")[0]}`}
                            >
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Button className={`w-full ${item.color} text-white py-2`}>
                              <Eye className="h-4 w-4 mr-2" />
                              View Diary
                            </Button>
                            <Button variant="outline" className="w-full py-2">
                              <Download className="h-4 w-4 mr-2" />
                              Download PDF
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}

            {/* Foundation Planning Tools */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Foundation Planning Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white py-4">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Learning Goals
                </Button>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white py-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Simple Calendar
                </Button>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white py-4">
                  <Clock className="h-4 w-4 mr-2" />
                  Time Planning
                </Button>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white py-4">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Progress Check
                </Button>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center">
              <Link href="/6th-hindi">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-medium">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to 6th Hindi Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
