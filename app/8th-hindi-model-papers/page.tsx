import Link from "next/link"
import {
  ArrowLeft,
  FileSpreadsheet,
  Download,
  Eye,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function EighthHindiModelPapers() {
  const modelPapers = [
    {
      name: "Unit Test Papers",
      items: [
        {
          title: "UNIT TEST 1",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Comprehensive unit test covering first quarter syllabus",
        },
        {
          title: "UNIT TEST 2",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Detailed unit test for second quarter curriculum",
        },
        {
          title: "UNIT TEST 3",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Structured unit test for third quarter topics",
        },
        {
          title: "UNIT TEST 4",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Final unit test covering fourth quarter syllabus",
        },
      ],
    },
    {
      name: "Quarterly Exam Papers",
      items: [
        {
          title: "FIRST QUARTER",
          icon: FileSpreadsheet,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Comprehensive first quarter examination paper",
        },
        {
          title: "SECOND QUARTER",
          icon: FileSpreadsheet,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Detailed second quarter assessment paper",
        },
        {
          title: "THIRD QUARTER",
          icon: FileSpreadsheet,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Structured third quarter examination",
        },
        {
          title: "FOURTH QUARTER",
          icon: FileSpreadsheet,
          color: "bg-orange-600 hover:bg-orange-700",
          description: "Final quarter comprehensive exam paper",
        },
      ],
    },
    {
      name: "FA - 3 Model Papers",
      items: [
        {
          title: "SAMPLE PAPER 1",
          icon: FileSpreadsheet,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Complete annual exam sample paper with solutions",
          link:
            "https://drive.google.com/file/d/1Sj3Fi6aadbPL76b3ksdsIM2ZzcD5jGpJ/view?usp=sharing",
        },
        {
          title: "SAMPLE PAPER 2",
          icon: FileSpreadsheet,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Alternative annual exam pattern with marking scheme",
          link:
            "https://drive.google.com/file/d/18Z3nW-T6FiLBPzXGlo_Z699v0Ruq25sb/view?usp=sharing",
          download:
            "/BALARAM-8-HIN-FA-3-MODEL PAPER-2025-26.pdf",
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
    {
      name: "FA - 4 Model Papers",
      items: [
       
        {
          title: "SAMPLE PAPER 1",
          icon: FileSpreadsheet,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Complete annual exam sample paper with solutions",
          link:
            "https://drive.google.com/file/d/18Z3nW-T6FiLBPzXGlo_Z699v0Ruq25sb/view?usp=sharing",
          download:
            "/pdfs/BALARAM-8-HIN-FA-4-MODEL PAPER-2025-26.pdf",
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
    }
    

  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Class 8 <span className="text-red-600">Hindi Model Papers</span>
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive exam preparation with practice papers
          </p>
        </div>
      </section>

      {/* Papers */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {modelPapers.map((category, ci) => (
            <div key={ci} className="mb-14">
              <h2 className="text-2xl font-bold text-center mb-6">
                {category.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, ii) => {
                  const Icon = item.icon
                  return (
                    <Card
                      key={ii}
                      className="hover:shadow-lg transition-all border-2"
                    >
                      <CardContent className="p-6">
                        <div className="flex gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color.split(" ")[0]}`}
                          >
                            <Icon className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* View */}
                        {item.link ? (
                          <Link href={item.link} target="_blank">
                            <Button className={`w-full mb-2 ${item.color}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              View Paper
                            </Button>
                          </Link>
                        ) : (
                          <Button className="w-full mb-2" disabled>
                            <Eye className="mr-2 h-4 w-4" />
                            View Paper
                          </Button>
                        )}

                        {/* Download */}
                        {item.download ? (
                          <a href={item.download} download>
                            <Button variant="outline" className="w-full">
                              <Download className="mr-2 h-4 w-4" />
                              Download PDF
                            </Button>
                          </a>
                        ) : (
                          <Button variant="outline" className="w-full" disabled>
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Tools */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              Assessment Tools
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button className="bg-yellow-600 text-white">
                <Award className="mr-2 h-4 w-4" />
                Grading Rubric
              </Button>
              <Button className="bg-yellow-600 text-white">
                <Clock className="mr-2 h-4 w-4" />
                Time Guidelines
              </Button>
              <Button className="bg-yellow-600 text-white">
                <CheckCircle className="mr-2 h-4 w-4" />
                Answer Key
              </Button>
            </div>
          </div>

          {/* Back */}
          <div className="text-center">
            <Link href="/8th-hindi">
              <Button className="bg-red-600 text-white px-8 py-3">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to 8th Hindi Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
