import Link from "next/link"
import { ArrowLeft, FileSpreadsheet, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SeventhHindiModelPapers() {
  // Define model papers with icons and colors
  const modelPapers = [
    {
      name: "Chapter-wise Test Papers",
      items: [
        {
          title: "CHAPTERS 1-2",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Test paper covering first two chapters",
        },
        {
          title: "CHAPTERS 3-4",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Assessment for chapters three and four",
        },
        {
          title: "CHAPTERS 5-6",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Mid-term test for chapters five and six",
        },
        {
          title: "CHAPTERS 7-10",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Final chapters comprehensive test",
        },
      ],
    },
    {
      name: "Monthly Test Papers",
      items: [
        {
          title: "JUNE TEST",
          icon: FileSpreadsheet,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Monthly assessment for June curriculum",
        },
        {
          title: "JULY TEST",
          icon: FileSpreadsheet,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Comprehensive July monthly test paper",
        },
        {
          title: "AUGUST TEST",
          icon: FileSpreadsheet,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Detailed August monthly assessment",
        },
        {
          title: "SEPTEMBER TEST",
          icon: FileSpreadsheet,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "September monthly test with answer key",
        },
      ],
    },
    {
      name: "FA 3 Exam Papers",
      items: [
        {
          title: "SAMPLE PAPER 1",
          icon: FileSpreadsheet,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Complete annual exam sample paper with solutions",
          link : "https://drive.google.com/file/d/1s4uimeTcS9Hhd5GPBxuiKOqrNzJZaqCJ/view?usp=sharing",
        },
        {
          title: "SAMPLE PAPER 2",
          icon: FileSpreadsheet,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Alternative annual exam pattern with marking scheme",
          link?: "https://drive.google.com/file/d/1piwGuoDB2ry0YZVl0c1_GDhTww9_pb7O/view?usp=sharing",
        },
        {
          title: "PRACTICE PAPER 1",
          icon: FileSpreadsheet,
          color: "bg-blue-600 hover:bg-blue-700",
          description: "Comprehensive practice paper for exam preparation",
        },
        {
          title: "PRACTICE PAPER 2",
          icon: FileSpreadsheet,
          color: "bg-blue-600 hover:bg-blue-700",
          description: "Additional practice paper with detailed solutions",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-orange-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Class 7 <span className="text-red-600">Hindi Model Papers</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Comprehensive exam preparation with practice papers
            </p>
          </div>
        </div>
      </section>

      {/* Model Papers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {modelPapers.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const IconComponent = item.icon
                    return (
                      <Card
                        key={itemIndex}
                        className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-red-200"
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
  <Link href={item.link} target="_blank" rel="noopener noreferrer">
    <Button className={`w-full ${item.color} text-white py-2`}>
      <Eye className="h-4 w-4 mr-2" />
      View Paper
    </Button>
  </Link>
) : (
  <Button className={`w-full ${item.color} text-white py-2`} disabled>
    <Eye className="h-4 w-4 mr-2" />
    View Paper
  </Button>
)}

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

            {/* Chapter-wise Assessment Tools */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Chapter-wise Assessment Tools</h3>
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
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-medium">
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
