"use client"

import Link from "next/link"
import { ArrowLeft, FileSpreadsheet, Eye, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NinthHindiSAModelPapers() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Class 9 <span className="text-red-600">SA Model Papers</span>
          </h1>
          <p className="text-xl text-gray-600">
            Summative Assessment Preparation Material
          </p>
        </div>
      </section>

      {/* Model Papers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">

          <h2 className="text-2xl font-bold text-center mb-10">
            Model Papers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* SA Model Paper 2 */}
            <Card className="hover:shadow-lg border-2 transition duration-300">
              <CardContent className="p-6">

                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-600">
                    <FileSpreadsheet className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      SA Model Paper 2
                    </h3>
                    <p className="text-sm text-gray-500">
                      BALARAM 9th Hindi SA-2 Model Paper (2025-26)
                    </p>
                  </div>
                </div>

                {/* View Button */}
                <Link
                  href="/pdfs/BALARAM_9-HIN-SA-2-MODEL-PAPER-2025-26.pdf"
                  target="_blank"
                >
                  <Button className="w-full mb-2 bg-red-600 hover:bg-red-700 text-white">
                    <Eye className="mr-2 h-4 w-4" />
                    View Paper
                  </Button>
                </Link>

                {/* Download Button */}
                <a
                  href="/pdfs/BALARAM_9-HIN-SA-2-MODEL-PAPER-2025-26.pdf"
                  download
                >
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </a>

              </CardContent>
            </Card>

          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link href="/9th-hindi">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
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