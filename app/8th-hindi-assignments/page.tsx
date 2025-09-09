import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hindi8thMaterials() {
  const materialData = [
    {
      name: "सुबह",
      link: "https://drive.google.com/file/d/1kTxKUo4C1ZXOLs0HDgKn6ckW3Yu8q-HX/view?usp=sharing",
    },
    {
      name: "तेनालीराम की चतुराई",
      link: "https://drive.google.com/file/d/1yg4vHMJaSLGeGIVd1cCENN1rPOj2P9Cy/view?usp=sharing",
    },
    {
      name: "श्रीहरिकोटा",
      link: "https://drive.google.com/file/d/1zO_BN9uBmp1u9FhYtLNcyUfgmzOQdilR/view?usp=sharing",
    },
    {
      name: "गीत",
      link: "https://drive.google.com/file/d/1MdyLY9mcndmT1MJwBC9w_YogvevGDn28/view?usp=sharing",
    },
    {
      name: "मित्र को पत्र",
      link: "https://drive.google.com/file/d/1TsMMMQpGW2TaWOQk1Mryk5vYLXbqqXjZ/view?usp=sharing",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-100 to-blue-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              8th Class <span className="text-blue-600">Hindi Study Materials</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-4">
              Download • Learn • Revise • Prepare for Exams
            </p>
            <p className="text-lg font-semibold text-blue-600 bg-blue-50 border border-blue-200 inline-block px-6 py-3 rounded-xl shadow-md">
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
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 text-blue-600 font-bold text-lg">
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
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
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
