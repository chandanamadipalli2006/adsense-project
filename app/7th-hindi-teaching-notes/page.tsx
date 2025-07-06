import Link from "next/link"
import { ArrowLeft, NotebookPen, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SeventhHindiTeachingNotes() {
  // Define teaching notes with icons and colors
  const teachingNotes = [
    {
      name: "Core Teaching Notes",
      items: [
        {
          title: "CHAPTER 1",
          icon: NotebookPen,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Foundation building teaching strategies",
        },
        {
          title: "CHAPTER 2",
          icon: NotebookPen,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Interactive classroom activities and approaches",
        },
        {
          title: "CHAPTER 3",
          icon: NotebookPen,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Grammar instruction methodologies",
        },
        {
          title: "CHAPTER 4",
          icon: NotebookPen,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Reading comprehension teaching techniques",
        },
        {
          title: "CHAPTER 5",
          icon: NotebookPen,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Writing skills development approaches",
        },
      ],
    },
    {
      name: "Advanced Teaching Notes",
      items: [
        {
          title: "CHAPTER 6",
          icon: NotebookPen,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Literature teaching strategies for middle school",
        },
        {
          title: "CHAPTER 7",
          icon: NotebookPen,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Critical thinking development methods",
        },
        {
          title: "CHAPTER 8",
          icon: NotebookPen,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Poetry teaching approaches with activities",
        },
        {
          title: "CHAPTER 9",
          icon: NotebookPen,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Assessment and feedback techniques",
        },
        {
          title: "CHAPTER 10",
          icon: NotebookPen,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Revision and reinforcement teaching strategies",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-indigo-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Class 7 <span className="text-purple-600">Hindi Teaching Notes</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Effective teaching strategies for middle school instruction
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Notes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {teachingNotes.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const IconComponent = item.icon
                    return (
                      <Card
                        key={itemIndex}
                        className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-purple-200"
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
                              View Notes
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

            {/* Chapter-wise Teaching Resources */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Chapter-wise Teaching Resources</h3>
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
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium">
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
