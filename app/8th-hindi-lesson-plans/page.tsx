import Link from "next/link"
import { ArrowLeft, FileText, BookOpen, ClipboardList, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function EighthHindiLessonPlans() {
  // Define lesson plan categories with icons and colors
  const planCategories = [
    {
      name: "Planning Documents",
      items: [
        { title: "COVER PAGE", icon: FileText, color: "bg-blue-600 hover:bg-blue-700" },
        { title: "ACTION PLAN", icon: ClipboardList, color: "bg-emerald-600 hover:bg-emerald-700" },
        { title: "YEAR PLAN", icon: Calendar, color: "bg-purple-600 hover:bg-purple-700" },
      ],
    },
    {
      name: "Lesson Plans",
      items: [
        { title: "LESSON 1", icon: BookOpen, color: "bg-green-600 hover:bg-green-700" },
        { title: "LESSON 2", icon: BookOpen, color: "bg-green-600 hover:bg-green-700" },
        { title: "LESSON 3", icon: BookOpen, color: "bg-green-600 hover:bg-green-700" },
        { title: "LESSON 4", icon: BookOpen, color: "bg-green-600 hover:bg-green-700" },
        { title: "LESSON 5", icon: BookOpen, color: "bg-green-600 hover:bg-green-700" },
        { title: "LESSON 6", icon: BookOpen, color: "bg-green-600 hover:bg-green-700" },
        { title: "LESSON 7", icon: BookOpen, color: "bg-green-600 hover:bg-green-700" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Class 8 <span className="text-emerald-600">Hindi Lesson Plans</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Comprehensive teaching resources for effective instruction
            </p>
          </div>
        </div>
      </section>

      {/* Lesson Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {planCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const IconComponent = item.icon
                    return (
                      <Card
                        key={itemIndex}
                        className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-emerald-200"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color.split(" ")[0]}`}
                            >
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                              <p className="text-sm text-gray-500">
                                {item.title.includes("LESSON")
                                  ? "Detailed lesson plan with objectives and activities"
                                  : "Essential planning document"}
                              </p>
                            </div>
                          </div>
                          <Button className={`w-full mt-4 ${item.color} text-white py-3`}>
                            <IconComponent className="h-4 w-4 mr-2" />
                            View {item.title}
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}

            {/* Additional Resources */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Quarterly Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white py-4">
                  <FileText className="h-4 w-4 mr-2" />
                  First Quarter
                </Button>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white py-4">
                  <FileText className="h-4 w-4 mr-2" />
                  Second Quarter
                </Button>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white py-4">
                  <FileText className="h-4 w-4 mr-2" />
                  Third Quarter
                </Button>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white py-4">
                  <FileText className="h-4 w-4 mr-2" />
                  Fourth Quarter
                </Button>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center">
              <Link href="/8th-hindi">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to 8th Hindi Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
