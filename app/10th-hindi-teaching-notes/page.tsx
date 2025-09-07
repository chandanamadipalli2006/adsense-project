import Link from "next/link"
import { ArrowLeft, FileText, NotebookPen, Download, Eye, Lightbulb, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TenthHindiTeachingNotes() {
  const teachingNotes = [
    {
      name: "Core Teaching Notes",
      items: [
        {
          title: "Baraste Badal",
          icon: NotebookPen,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "It is very useful to teachers",
          link: "https://drive.google.com/file/d/1_70hWNTJ5g6L3pBMEwlPxPlcjMAeA1rq/view?usp=sharing"
        },
        {
          title: "Idgah",
          icon: NotebookPen,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "It is very useful to teachers",
          link: "https://drive.google.com/file/d/1VwsksdYukWtO1zDeIB3AWNFAVvllUKPz/view?usp=sharing"
        },
        {
          title: "Hum Bharathvasi",
          icon: NotebookPen,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "It is very useful to teachers",
          link: "https://drive.google.com/file/d/1H6neHWu3YG7NHeBxhnU1KAY2uWO7VU1C/view?usp=sharing"
        },
        {
          title: "Kan - Kan Ka Adhikari",
          icon: NotebookPen,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "It is very useful to teachers",
          link: "https://drive.google.com/file/d/1M-_oRPxLV_lbxUprsTXgfmTqiWp4qMAN/view?usp=sharing"
        },
        {
          title: "CHAPTER 5",
          icon: NotebookPen,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Comprehension teaching strategies",
          link: "https://drive.google.com/file/d/1jjP0xfmPD3Ikryc8h-yq4aZR8rh89ZAA/view?usp=sharing"
        },
      ],
    },
    {
      name: "Board Exam Teaching Notes",
      items: [
        {
          title: "CHAPTER 6",
          icon: NotebookPen,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Exam-oriented teaching methodologies",
          link: "https://drive.google.com/file/d/1pYWPmjmtDkBql72OvSgrpGuvr7l2GZTl/view?usp=sharing"
        },
        {
          title: "CHAPTER 7",
          icon: NotebookPen,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Answer writing techniques and guidance",
          link: "https://drive.google.com/file/d/1eJ96JwJhTafycm1_ylLyutiXLUFrZOzH/view?usp=sharing"
        },
        {
          title: "CHAPTER 8",
          icon: NotebookPen,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Literature analysis teaching approaches",
          link: "https://drive.google.com/file/d/1AC5KRvdPlfi_FHKaJu1eGykQrwMyR3Ce/view?usp=sharing"
        },
        {
          title: "CHAPTER 9",
          icon: NotebookPen,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Advanced writing instruction methods",
          link: "https://drive.google.com/file/d/1iFgLldDhuBb4zw9fowv_u-FS9QnP3riN/view?usp=sharing"
        },
        {
          title: "CHAPTER 10",
          icon: NotebookPen,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Comprehensive revision teaching strategies",
          link: "https://drive.google.com/file/d/1ZXQJ7TR3YEvrfgNHW_vUDcxDSOirs_lZ/view?usp=sharing"
        },
        {
          title: "CHAPTER 13",
          icon: NotebookPen,
          color: "bg-indigo-600 hover:bg-indigo-700",
          description: "Final prep tips and question strategy",
          link: "https://drive.google.com/file/d/1eh0qe-boA2ll2hJXCzBmPSwileo0EwXk/view?usp=sharing"
        }
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
              Class 10 <span className="text-purple-600">Hindi Teaching Notes</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Board exam preparation with effective teaching strategies
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
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              <Button className={`w-full ${item.color} text-white py-2`}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Notes
                              </Button>
                            </a>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" download>
                              <Button variant="outline" className="w-full py-2">
                                <Download className="h-4 w-4 mr-2" />
                                Download PDF
                              </Button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}

            {/* New Non-Detailed Teaching Resources */}
            <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Extra Teaching Aids</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border-2 hover:border-green-300 transition">
                  <CardContent className="p-4 text-center">
                    <Lightbulb className="h-6 w-6 mx-auto text-green-600 mb-2" />
                    <p className="text-gray-800 font-semibold">Sample Board Questions</p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-green-300 transition">
                  <CardContent className="p-4 text-center">
                    <FileText className="h-6 w-6 mx-auto text-green-600 mb-2" />
                    <p className="text-gray-800 font-semibold">Lesson Plan Outlines</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center">
              <Link href="/10th-hindi">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium">
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
