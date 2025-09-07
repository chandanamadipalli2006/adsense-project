import Link from "next/link"
import { ArrowLeft, BookMarked, Download, Eye, Calendar, Clock, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TenthHindiDiaries() {
  const diaries = [
    {
      name: "Daily Planning Diaries",
      items: [
        {
          title: "Braste Badal",
          icon: BookMarked,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Dairies that are useful to teachers",
          link: "https://drive.google.com/file/d/1Y2FPw8h0bMa4ARgRy66iEWyUGuMYUcre/view?usp=sharing",
        },
        {
          title: "Idgah",
          icon: BookMarked,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Dairies that are useful to teachers",
          link: "https://drive.google.com/file/d/1vfNrIx28z8pRiWP_3MEXZ3DQ5hhuf-gD/view?usp=sharing",
        },
        {
          title: "Hum Bharathvasi",
          icon: BookMarked,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Dairies that are useful to teachers",
          link: "https://drive.google.com/file/d/1MbT58XSrUkIaOQ5GKl-jCVZ8k8jpZQwF/view?usp=sharing",
        },
        {
          title: "Kan - Kan Ka Adikari",
          icon: BookMarked,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Dairies that are useful to teachers",
          link: "https://drive.google.com/file/d/1bDwbbb-PoOrLfSxqOvWizOJInDT_RoNX/view?usp=sharing",
        },
      ],
    },
    {
      name: "Board Exam Planning Diaries",
      items: [
        {
          title: "PRE-BOARD PLANNER",
          icon: BookMarked,
          color: "bg-red-600 hover:bg-red-700",
          description: "Comprehensive pre-board exam preparation planning",
        },
        {
          title: "REVISION PLANNER",
          icon: BookMarked,
          color: "bg-red-600 hover:bg-red-700",
          description: "Structured revision planning for board exams",
        },
        {
          title: "FINAL PREP DIARY",
          icon: BookMarked,
          color: "bg-red-600 hover:bg-red-700",
          description: "Last-minute preparation planning for board exams",
        },
        {
          title: "EXAM STRATEGY",
          icon: BookMarked,
          color: "bg-red-600 hover:bg-red-700",
          description: "Strategic planning for board exam success",
        },
      ],
    },
    {
      name: "Quarterly Planning Diaries",
      items: [
        {
          title: "FIRST QUARTER",
          icon: BookMarked,
          color: "bg-amber-600 hover:bg-amber-700",
          description: "Comprehensive planning for first academic quarter",
        },
        {
          title: "SECOND QUARTER",
          icon: BookMarked,
          color: "bg-amber-600 hover:bg-amber-700",
          description: "Detailed plans for second quarter curriculum",
        },
        {
          title: "THIRD QUARTER",
          icon: BookMarked,
          color: "bg-amber-600 hover:bg-amber-700",
          description: "Structured planning for third quarter teaching",
        },
        {
          title: "FOURTH QUARTER",
          icon: BookMarked,
          color: "bg-amber-600 hover:bg-amber-700",
          description: "Complete planning for final academic quarter",
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
              Class 10 <span className="text-orange-600">Hindi Diaries</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Board exam preparation with systematic planning tools
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
                            {item.link ? (
                              <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <Button className={`w-full ${item.color} text-white py-2`}>
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Diary
                                </Button>
                              </a>
                            ) : (
                              <Button className={`w-full ${item.color} text-white py-2`} disabled>
                                <Eye className="h-4 w-4 mr-2" />
                                View Diary
                              </Button>
                            )}
                            <Button variant="outline" className="w-full py-2" disabled>
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

            {/* Board Exam Planning Tools */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Board Exam Planning Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white py-4">
                  <Award className="h-4 w-4 mr-2" />
                  Exam Calendar
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white py-4">
                  <Clock className="h-4 w-4 mr-2" />
                  Study Timetable
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white py-4">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Topic Tracker
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white py-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Revision Planner
                </Button>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center">
              <Link href="/10th-hindi">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-medium">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to 10th Hindi Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
