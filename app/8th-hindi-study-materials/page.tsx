import Link from "next/link"
import { ArrowLeft, FileText, BookOpen, Download, Eye, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function EighthHindiStudyMaterials() {
  // Define study materials with icons and colors
  const studyMaterials = [
    {
      name: "Core Lessons",
      items: [
        {
          title: "LESSON 1",
          icon: BookOpen,
          color: "bg-green-600 hover:bg-green-700",
          description: "Foundation concepts with clear explanations",
        },
        {
          title: "LESSON 2",
          icon: BookOpen,
          color: "bg-green-600 hover:bg-green-700",
          description: "Interactive content with visual learning",
        },
        {
          title: "LESSON 3",
          icon: BookOpen,
          color: "bg-green-600 hover:bg-green-700",
          description: "Practical examples and exercises",
        },
        {
          title: "LESSON 4",
          icon: BookOpen,
          color: "bg-green-600 hover:bg-green-700",
          description: "Comprehensive study material",
        },
        {
          title: "LESSON 5",
          icon: BookOpen,
          color: "bg-green-600 hover:bg-green-700",
          description: "Skill-building activities and practice",
        },
      ],
    },
    {
      name: "Advanced Lessons",
      items: [
        {
          title: "LESSON 6",
          icon: BookOpen,
          color: "bg-blue-600 hover:bg-blue-700",
          description: "Advanced topics with detailed analysis",
        },
        {
          title: "LESSON 7",
          icon: BookOpen,
          color: "bg-blue-600 hover:bg-blue-700",
          description: "Critical thinking and application",
        },
        {
          title: "LESSON 8",
          icon: BookOpen,
          color: "bg-blue-600 hover:bg-blue-700",
          description: "Complex concepts made simple",
        },
        {
          title: "LESSON 9",
          icon: BookOpen,
          color: "bg-blue-600 hover:bg-blue-700",
          description: "Advanced practice and assessment",
        },
        {
          title: "LESSON 10-1",
          icon: BookOpen,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Specialized learning content",
        },
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
              Class 8 <span className="text-emerald-600">Hindi Study Materials</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Interactive learning resources for skill development
            </p>
          </div>
        </div>
      </section>

      {/* Study Materials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {studyMaterials.map((category, categoryIndex) => (
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
                              View Material
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

            {/* Quarterly Resources */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Quarterly Study Materials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white py-4">
                  <FileText className="h-4 w-4 mr-2" />
                  First Quarter
                </Button>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white py-4">
                  <PenTool className="h-4 w-4 mr-2" />
                  Second Quarter
                </Button>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white py-4">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Third Quarter
                </Button>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white py-4">
                  <Download className="h-4 w-4 mr-2" />
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
