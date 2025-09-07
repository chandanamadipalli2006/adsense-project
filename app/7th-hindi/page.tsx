import Link from "next/link"
import { ArrowLeft, BookOpen, FileText, NotebookPen, BookMarked, FileSpreadsheet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SeventhHindi() {
  const resources = [
    {
      name: "Lesson Plans",
      icon: BookOpen,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      description: "Detailed lesson plans for 7th class Hindi curriculum",
      link: "/7th-hindi-lesson-plans",
    },
    {
      name: "Study Materials",
      icon: FileText,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      description: "Comprehensive study materials covering all topics in the syllabus",
      link: "/7th-hindi-study-materials",
    },
    {
      name: "Teaching Notes",
      icon: NotebookPen,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      description: "Teacher's notes and guidelines for effective Hindi instruction",
      link: "/7th-hindi-teaching-notes",
    },
    {
      name: "Diaries",
      icon: BookMarked,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      description: "Daily and weekly planning diaries for systematic learning",
      link: "/7th-hindi-diaries",
    },
    {
      name: "Model Papers",
      icon: FileSpreadsheet,
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      description: "Sample question papers and model answers for exam preparation",
      link: "/7th-hindi-model-papers",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Class 7 <span className="text-emerald-600">Hindi Resources</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Lesson Plans • Study Materials • Model Papers
            </p>
          </div>
        </div>
      </section>

      {/* 7th Class Hindi Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Educational Resources</h2>
              <p className="text-xl text-gray-600">
                Access comprehensive teaching and learning materials for Class 7 Hindi
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-16 h-16 ${resource.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">{resource.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-gray-600 mb-6">{resource.description}</CardDescription>
                      <Link href={resource.link}>
                        <Button
                          className={`w-full ${resource.color} ${resource.hoverColor} text-white transition-colors duration-200 py-6 text-base`}
                        >
                          <IconComponent className="h-4 w-4 mr-2" />
                          Access {resource.name}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Chapter-wise Resources */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Chapter-wise Resources</h3>
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
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium">
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
