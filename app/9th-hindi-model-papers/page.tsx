"use client"
import Link from "next/link"
import {
  ArrowLeft,
  FileSpreadsheet,
  Download,
  Eye,
  Award,
  Clock,
  CheckCircle,
  LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

/* ============================
   Types
============================ */
interface PaperItem {
  title: string
  icon: LucideIcon
  color: string
  description: string
  link?: string
  download?: string
}

interface PaperCategory {
  name: string
  items: PaperItem[]
}

/* ============================
   Component
============================ */
export default function NinthHindiModelPapers() {
  const modelPapers: PaperCategory[] = [
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
      name: "FA 4 Exam Papers",
      items: [
        {
          title: "SAMPLE PAPER 1",
          icon: FileSpreadsheet,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Complete annual exam sample paper with solutions",
          link:
            "https://drive.google.com/file/d/1amPm80sN7bQC3NvbKORJGgW2hQOqHPbD/view?usp=sharing",
          download: "/pdfs/BALARAM-9-HIN-FA-4-MODEL PAPER-2025-26.pdf",
        },
        {
          title: "Key 1",
          icon: FileSpreadsheet,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Alternative annual exam pattern with marking scheme",
          link:
            "https://drive.google.com/file/d/1p0Lh-Q95ZcksMqOQmqZTkPM3vLWpPMtm/view?usp=drive_link",
          download: "/pdfs/Balaram-9-Hindi-FA-4-KEY.pdf",
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
      name: "Annual Exam Papers",
      items: [
        {
          title: "SAMPLE PAPER 1",
          icon: FileSpreadsheet,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Complete annual exam sample paper with solutions",
          link:
            "https://drive.google.com/file/d/13Vvl4JVGkBVU5l0EOaOZKbXbDD8IBz9c/view?usp=sharing",
        },
        {
          title: "SAMPLE PAPER 2",
          icon: FileSpreadsheet,
          color: "bg-purple-600 hover:bg-purple-700",
          description: "Alternative annual exam pattern with marking scheme",
          link:
            "https://drive.google.com/file/d/1amPm80sN7bQC3NvbKORJGgW2hQOqHPbD/view?usp=sharing",
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Class 9 <span className="text-red-600">Hindi Model Papers</span>
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive exam preparation with sample papers
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
                    <Card key={ii} className="hover:shadow-lg border-2">
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
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              Exam Preparation Tools
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button className="bg-indigo-600 text-white">
                <Award className="mr-2 h-4 w-4" />
                Marking Scheme
              </Button>
              <Button className="bg-indigo-600 text-white">
                <Clock className="mr-2 h-4 w-4" />
                Time Management
              </Button>
              <Button className="bg-indigo-600 text-white">
                <CheckCircle className="mr-2 h-4 w-4" />
                Answer Guidelines
              </Button>
            </div>
          </div>

          {/* Back */}
          <div className="text-center">
            <Link href="/9th-hindi">
              <Button className="bg-red-600 text-white px-8 py-3">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to 9th Hindi Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
