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

export default function TenthHindiModelPapers() {
  const modelPapers: PaperCategory[] = [
    {
      name: "Practice Papers",
      items: [
        {
          title: "10-SAMP-3-INITIAL KEY",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Government syllabus based practice paper",
          link:
            "/Balaram-10-Hindi-FA-3-KEY.pdf#toolbar=0&navpanes=0&scrollbar=0",
          download: "/pdfs/Balaram-10-Hindi-FA-3-KEY.pdf",
        },
        {
          title: "Pre Public Keys",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Government syllabus based practice paper",
          link:
            "/pdfs/Balaram-10-Hindi-Pre-Public-KEY.pdf#toolbar=0&navpanes=0&scrollbar=0",
          download: "/pdfs/Balaram-10-Hindi-Pre PublicKEY.pdf",
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
            Class 10 <span className="text-red-600">Hindi Practice Papers</span>
          </h1>
          <p className="text-xl text-gray-600">
            Practice well and earn good marks in exams
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
            <Link href="/10th-hindi">
              <Button className="bg-red-600 text-white px-8 py-3">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to 10th Hindi Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
