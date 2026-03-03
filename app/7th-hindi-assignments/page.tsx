import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hindi8thMaterials() {
  const materialData = [
        {
      name: "ज्ञान हमको दीजिए",
      link: "https://drive.google.com/file/d/1OVQcJG49i3FSm_0FNtE_evcqdBVBhlU2/view?usp=sharing",
    },
    {
      name: "होशियार कौआ",
      link: "https://drive.google.com/file/d/1q_kaXYPYqRK7hj3asSvHuCXZbT61BU18/view?usp=sharing",
    },
    {
      name: "सिंह",
      link: "https://drive.google.com/file/d/139-UekWLI1tI6MrDrb5WdJPIf4gb1uXn/view?usp=sharing",
    },
    {
      name: "हम नन्हें बच्चे",
      link: "https://drive.google.com/file/d/1aVDX_nrQHfhFGbyO9DAJ0lPNyUb0ZrMB/view?usp=sharing",
    },
    {
      name: "ईमानदारी का फल",
      link: "https://drive.google.com/file/d/1aLQKr1QC59viZHy4-Hlp4bTh5_3rsPWp/view?usp=sharing",
    },
    {
      name: "पत्र लेखन",
      link: "https://drive.google.com/file/d/1PDY76XlHOBc7weGHOpz4jxir9QUja2rW/view?usp=sharing",
    },
    {
      name: "कोयल",
      link: "https://drive.google.com/file/d/1CnWqCNfNb4uXPNGi_nadyX-HH4eN9gWF/view?usp=sharing",
    },
    {
      name: "आओ हिंदी सीखें",
      link: "https://drive.google.com/file/d/1c_lgpOVHkrVs_kHKOLUi_S4N-q_C6hQF/view?usp=sharing",
    },
    {
      name: "साहसी बालक",
      link: "https://drive.google.com/file/d/1m50Z1YgqtUPDiJVF-busKBmpKWHFVUup/view?usp=sharing",
    },
    {
      name: "कबीर की वाणी",
      link: "/7th-hindi-assignment-10",
    },
    {
      name: "सफलता का मंत्र",
      link: "/7th-hindi-assignment-11",
    },
    {
      name: "कोंडापल्ली की यात्रा",
      link: "/7th-hindi-assignment-12",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-100 to-rose-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              7th Class <span className="text-rose-600">Hindi Study Materials</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-4">
              Download • Learn • Revise • Prepare for Exams
            </p>
            <p className="text-lg font-semibold text-red-600 bg-red-50 border border-red-200 inline-block px-6 py-3 rounded-xl shadow-md">
              🔐 Note: To open the PDF documents, use password: <span className="text-gray-900">vcp@2025</span>
            </p>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Hindi Lessons & Notes (PDF)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {materialData.map((material, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full mb-4 text-rose-600 font-bold text-lg">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {material.name}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Click below to open or download the PDF study material.
                  </p>
                  <a
                    href={material.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                      Open PDF
                    </Button>
                  </a>
                </div>
              ))}
            </div>

            {/* Back Button */}
            <div className="text-center">
              <Link href="/">
                <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 text-lg font-medium">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
