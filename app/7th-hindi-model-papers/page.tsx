"use client"
import Link from "next/link"
import { ArrowLeft, FileSpreadsheet, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SeventhHindiModelPapers() {
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
          link:
            "https://drive.google.com/file/d/1s4uimeTcS9Hhd5GPBxuiKOqrNzJZaqCJ/view?usp=sharing",
        },
        {
          title: "SAMPLE PAPER 2",
          icon: FileSpreadsheet,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Alternative annual exam pattern with marking scheme",
          link:
            "https://drive.google.com/file/d/1piwGuoDB2ry0YZVl0c1_GDhTww9_pb7O/view?usp=sharing",
          
           download: "/pdfs/BALARAM-7-HIN-FA-3-MODEL PAPER-2025-26.pdf",

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
      name: "FA 4 Exam Papers",
      items: [
        {
          title: "SAMPLE PAPER 1",
          icon: FileSpreadsheet,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Alternative annual exam pattern with marking scheme",
          link:
            "https://drive.google.com/file/d/1piwGuoDB2ry0YZVl0c1_GDhTww9_pb7O/view?usp=sharing",
          
           download: "/pdfs/BALARAM-7-HIN-FA-4-MODEL PAPER-2025-26.pdf",

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
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Class 7 <span className="text-red-600">Hindi Model Papers</span>
          
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive exam preparation with practice papers
          </p>
        </div>
      </section>

      {/* Papers Section */}
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
                            <h3 className="font-semibold">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* View Button */}
                        {item.link ? (
                          <Link
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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

                        {/* Download Button */}
                        {item.download ? (
                          <a href={item.download} download>
                            <Button
                              variant="outline"
                              className="w-full"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download PDF
                            </Button>
                          </a>
                        ) : (
                          <Button
                            variant="outline"
                            className="w-full"
                            disabled
                          >
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

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link href="/7th-hindi">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to 7th Hindi Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
