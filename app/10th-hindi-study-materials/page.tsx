import Link from "next/link"
import { ArrowLeft, FileText, BookOpen, Download, Eye, PenTool, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TenthHindiStudyMaterials() {
  const coreLessonLinks = [
    "https://drive.google.com/file/d/1XH-wnoe-gsbYvTTHiB98rmVmNOLa4Cb9/view",
    "https://drive.google.com/file/d/1_-0_p2HObtPT7x1nlepKOLXo8Jnj1Umy/view",
    "https://drive.google.com/file/d/18uChiH87SEIUncbkjtnCPgF0hTT-nhVb/view",
    "https://drive.google.com/file/d/1Vang2JX5reXTxGZdJbo4PHYyebIVIq1F/view",
    "https://drive.google.com/file/d/13vlHo2jCcVI1AZ_WguUGL7COyasbJ8r8/view",
    "https://drive.google.com/file/d/1JTGwN-MNqq2Nsx0Z1ZfqWoXeVGxu6xK9/view",
    "https://drive.google.com/file/d/1sgyctPnAt1KXAxC1n6ovF8yXL6j5hlko/view",
    "https://drive.google.com/file/d/18dUSB00venlQlIVDD5N2GKcIk2hM0hyD/view",
    "https://drive.google.com/file/d/1hwUJMxvXqnPrxSfIG-uCOZ4x8KE42xnw/view",
    "https://drive.google.com/file/d/1kN7paxZj0BI72CeVUTg-e3e10qfqjrm_/view",
    "https://drive.google.com/file/d/1abc", // 11
    "https://drive.google.com/file/d/1def", // 12
    "https://drive.google.com/file/d/1ghi", // 13
    "https://drive.google.com/file/d/1jkl", // 14
  ]

  const nonDetailedLinks = [
    "https://drive.google.com/file/d/1kIJwgvj2IwJHjn9Npkmw0mTjFQ2QyRxd/view",
    "https://drive.google.com/file/d/1HYIywyc1VHDBDIohRNSlR4uQmZ6_Vxkj/view",
    "https://drive.google.com/file/d/1Uez83UXnxkJXe9iTvE22anwB67JeTHUC/view",
  ]

  const coreLessons = coreLessonLinks.map((link, idx) => ({
    title: `LESSON ${idx + 1}`,
    icon: BookOpen,
    color: "bg-green-600 hover:bg-green-700",
    description: `Core study material for Lesson ${idx + 1}`,
    viewLink: link,
  }))

  const nonDetailed = nonDetailedLinks.map((link, idx) => ({
    title: `NON-DETAILED ${idx + 1}`,
    icon: BookOpen,
    color: "bg-yellow-600 hover:bg-yellow-700",
    description: `Supplementary resource ${idx + 1}`,
    viewLink: link,
  }))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-16 sm:py-24">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Class 10 <span className="text-emerald-600">Hindi Study Materials</span>
          </h1>
          <p className="text-xl text-gray-600">All lessons and non-detailed content in one place</p>
        </div>
      </section>

      {/* Study Materials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Core Lessons */}
          <h2 className="text-2xl font-bold mb-6 text-center">Core Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {coreLessons.map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color.split(" ")[0]}`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <a href={item.viewLink} target="_blank" rel="noopener noreferrer">
                    <Button className={`${item.color} text-white w-full`}>
                      <Eye className="w-4 h-4 mr-2" />
                      View Material
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Non-Detailed */}
          <h2 className="text-2xl font-bold mb-6 text-center">Non - Detailed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {nonDetailed.map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color.split(" ")[0]}`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <a href={item.viewLink} target="_blank" rel="noopener noreferrer">
                    <Button className={`${item.color} text-white w-full`}>
                      <Eye className="w-4 h-4 mr-2" />
                      View Material
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link href="/10th-hindi">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to 10th Hindi Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
