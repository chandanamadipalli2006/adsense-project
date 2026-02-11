"use client";

import Link from "next/link";
import {
  ArrowLeft,
  FileSpreadsheet,
  Download,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TenthHindiModelPapers() {
  const modelPapers = [
    {
      name: "Practice Papers",
      items: [
        {
          title: "10-SAMP-3-INITIAL KEY",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Government syllabus based practice paper",

          // 📌 FILE IN /public
          downloadLink: "/Balaram-10-Hindi-FA-3-KEY.pdf",
          downloadName: "10-SAMP-3-INITIAL-KEY.pdf",

          // 👁 View only (toolbar hidden)
          viewLink:
            "/Balaram-10-Hindi-FA-3-KEY.pdf#toolbar=0&navpanes=0&scrollbar=0",
        },
        {
          title: "Pre Public Keys",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Government syllabus based practice paper",

          // 📌 FILE IN /public/pdfs
          downloadLink: "/pdfs/Balaram-10-Hindi-Pre PublicKEY.pdf",
          downloadName: "Pre-Public-KEY.pdf",

          // 👁 View only
          viewLink:
            "/pdfs/Balaram-10-Hindi-Pre PublicKEY.pdf#toolbar=0&navpanes=0&scrollbar=0",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Class 10 <span className="text-red-600">Hindi Practice Papers</span>
          </h1>
          <p className="text-xl text-gray-600">
            Practice well and earn good marks in exams
          </p>
        </div>
      </section>

      {/* PAPERS */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {modelPapers.map((category, ci) => (
            <div key={ci} className="mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">
                {category.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, ii) => {
                  const Icon = item.icon;

                  return (
                    <Card
                      key={ii}
                      className="hover:shadow-lg transition-all duration-300 border-2"
                    >
                      <CardContent className="p-6">
                        <div className="flex gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color.split(" ")[0]}`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>

                          <div>
                            <h3 className="font-semibold text-lg">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* VIEW */}
                        <a
                          href={item.viewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className={`w-full mb-2 ${item.color}`}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Paper
                          </Button>
                        </a>

                        {/* DOWNLOAD */}
                        <a
                          href={item.downloadLink}
                          download={item.downloadName}
                        >
                          <Button variant="outline" className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}

          {/* BACK */}
          <div className="text-center mt-10">
            <Link href="/10th-hindi">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to 10th Hindi Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
