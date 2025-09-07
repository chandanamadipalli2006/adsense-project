import Link from "next/link"
import {
  ArrowLeft,
  FileText,
  BookOpen,
  ClipboardList,
  Calendar,
  BookMarked,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TenthHindiLessonPlans() {
  const driveLinks = [
    "https://drive.google.com/file/d/1Ny3kyheggnszNT3bvw5SVEvV5CXvoiEI/view?usp=sharing",
    "https://drive.google.com/file/d/1cAR0-rEmfo1d9X9Fw8unRj_vK1335hwb/view?usp=sharing",
    "https://drive.google.com/file/d/1hizPlcK_BdcoRDPfII-iighDum8oAGfi/view?usp=sharing",
    "https://drive.google.com/file/d/1jHmI7Of7e_litOCoS6u8h6zP-_ginuEp/view?usp=sharing",
    "https://drive.google.com/file/d/1DI84CqP4OvM5PI9ZZFeu4j4DZRnfS3E1/view?usp=sharing",
    "https://drive.google.com/file/d/1QpHHiMKqqNbGEPPPlLgOElmxM8OQqVoW/view?usp=sharing",
    "https://drive.google.com/file/d/1o2UPFtYAC98duKNKbjkn8vSmWzqA_cDD/view?usp=sharing",
    "https://drive.google.com/file/d/1ZHgJhRHn5NKd_U08gYcFPe5Mq66aikBo/view?usp=sharing",
    "https://drive.google.com/file/d/1Y36c5GJ5Ugk3NEPonlYBP3JSln1Ndp-T/view?usp=sharing",
    "https://drive.google.com/file/d/1Fz-iLXc7kzlpjRqWHPyYUv-pdPmM4VnZ/view?usp=sharing",
    "https://drive.google.com/file/d/10FI5NQ7lB0-p0h7mKzd3qlZp9Y90xSgy/view?usp=sharing",
    "https://drive.google.com/file/d/1IAJg7HItCuh-yEiZvG08xNuFdVOySzAt/view?usp=sharing",
    "https://drive.google.com/file/d/1GR_Xz7IWH7eV6IAfEC0z9-1VNEi3SewN/view?usp=sharing",
    "https://drive.google.com/file/d/18h8_CsJQq7nefYt31KieWHUM72k_R83N/view?usp=sharing",
    "https://drive.google.com/file/d/1dD0HXMRCoZfh-tSwievwrkV7xrA_u7q3/view?usp=sharing",
    "https://drive.google.com/file/d/11vwuL8kgZ0R-_tpuFj8wzNGROUHq-mbG/view?usp=sharing",
    "https://drive.google.com/file/d/1ps75zh2FIaYTAQu_yvFKkYmI-dmwDzZq/view?usp=sharing",
  ]

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
      items: Array.from({ length: 14 }, (_, i) => ({
        title: `LESSON ${i + 1}`,
        icon: BookOpen,
        color: "bg-green-600 hover:bg-green-700",
      })),
    },
  ]

  let linkIndex = 0

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Class 10 <span className="text-emerald-600">Hindi Lesson Plans</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Comprehensive teaching resources for effective instruction
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {planCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const IconComponent = item.icon
                    const href = driveLinks[linkIndex++] || "#"
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
                          <Link href={href} target="_blank">
                            <Button className={`w-full mt-4 ${item.color} text-white py-3`}>
                              <IconComponent className="h-4 w-4 mr-2" />
                              View {item.title}
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Board Exam Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white py-4">
                  <BookMarked className="h-4 w-4 mr-2" />
                  Exam Preparation Guide
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white py-4">
                  <FileText className="h-4 w-4 mr-2" />
                  Question Bank
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white py-4">
                  <ClipboardList className="h-4 w-4 mr-2" />
                  Marking Scheme
                </Button>
              </div>
            </div>

            <div className="text-center">
              <Link href="/10th-hindi">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium">
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
