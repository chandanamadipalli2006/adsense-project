import Link from "next/link"
import { ArrowLeft, BookMarked, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SeventhHindiDiaries() {
  // Define diaries with icons and colors
  const diaries = [
    {
      name: "Daily Planning Diaries",
      items: [
        {
          title: "JUNE DIARY",
          icon: BookMarked,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Daily lesson planning for June with detailed activities",
        },
        {
          title: "JULY DIARY",
          icon: BookMarked,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Comprehensive daily plans for July curriculum",
        },
        {
          title: "AUGUST DIARY",
          icon: BookMarked,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Structured daily planning for August lessons",
        },
        {
          title: "SEPTEMBER DIARY",
          icon: BookMarked,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Detailed daily plans for September teaching",
        },
      ],
    },
    {
      name: "Chapter-wise Planning Diaries",
      items: [
        {
          title: "CHAPTERS 1-3",
          icon: BookMarked,
          color: "bg-amber-600 hover:bg-amber-700",
          description: "Detailed planning for first three chapters",
        },
        {
          title: "CHAPTERS 4-6",
          icon: BookMarked,
          color: "bg-amber-600 hover:bg-amber-700",
          description: "Comprehensive planning for middle chapters",
        },
        {
          title: "CHAPTERS 7-10",
          icon: BookMarked,
          color: "bg-amber-600 hover:bg-amber-700",
          description: "Strategic planning for final chapters",
        },
        {
          title: "REVISION PLANNER",
          icon: BookMarked,
          color: "bg-amber-600 hover:bg-amber-700",
          description: "Complete revision planning for all chapters",
        },
      ],
    },
    {
      name: "Special Planning Diaries",
      items: [
        {
          title: "ACTIVITY PLANNER",
          icon: BookMarked,
          color: "bg-green-600 hover:bg-green-700",
          description: "Interactive activities planning for engagement",
        },
        {
          title: "ASSESSMENT DIARY",
          icon: BookMarked,
          color: "bg-blue-600 hover:bg-blue-700",
          description: "Comprehensive assessment planning and tracking",
        },
        {
          title: "PROJECT PLANNER",
          icon: BookMarked,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Detailed planning for class projects and activities",
        },
        {
          title: "SKILL DEVELOPMENT",
          icon: BookMarked,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Focused planning for language skill development",
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
              Class 7 <span className="text-orange-600">Hindi Diaries</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Systematic planning tools for effective teaching
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

            {/* Chapter-wise Planning Tools */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Chapter-wise Planning Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((chapter) => (
                  <Button key={chapter} className="bg-pink-600 hover:bg-pink-700 text-white py-3">
                    Chapter {chapter}
                  </Button>
                ))}
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center">
              <Link href="/7th-hindi">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-medium">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to 7th Hindi Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
