import Link from "next/link";
import {
  ArrowLeft,
  FileSpreadsheet,
  Download,
  Eye,
  Award,
  Clock,
  CheckCircle,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TenthHindiModelPapers() {
  const modelPapers = [
    {
      name: "Greenera06.com Practice Papers",
      items: [
        {
          title: "10-SAMP-3-INITIAL KEY",
          icon: FileSpreadsheet,
          color: "bg-red-600 hover:bg-red-700",
          description: "Government syllabus based practice paper",

          // ✅ PDF must exist in /public folder
          downloadLink: "/Balaram-10-Hindi-FA-3-KEY.pdf",
          downloadName: "10-SAMP-3-INITIAL KEY.pdf",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-red-50 to-orange-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Class 10 <span className="text-red-600">Hindi Practice Papers</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Practice well and earn good marks in exam.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {modelPapers.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const IconComponent = item.icon;

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
                              <h3 className="text-lg font-semibold text-gray-900">
                                {item.title}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2">

                            {/* ❌ View disabled because no link yet */}
                            <Button disabled className={`w-full ${item.color} text-white py-2`}>
                              <Eye className="h-4 w-4 mr-2" />
                              View Paper
                            </Button>

                            {/* ✅ WORKING DOWNLOAD BUTTON */}
                            <a
                              href={item.downloadLink}
                              download={item.downloadName}
                              className="block"
                            >
                              <Button
                                variant="outline"
                                className={`w-full py-2 ${
                                  categoryIndex === 0 && itemIndex === 0
                                    ? "blink-download"
                                    : ""
                                }`}
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Download PDF
                              </Button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="text-center mt-10">
              <Link href="/10th-hindi">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-medium">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to 10th Hindi Resources
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
