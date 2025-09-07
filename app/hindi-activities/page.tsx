import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HindiActivities() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Get Free And Quality <span className="text-emerald-600">Online Education</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">Learn - Practice - Test</p>
          </div>
        </div>
      </section>

      {/* Hindi Activities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Hindi Activities</h2>

              {/* Class Buttons */}
              <div className="flex flex-col space-y-4">
                <Link href="/6th-hindi-activities" className="w-full">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg">6th class</Button>
                </Link>

                <Link href="/7th-hindi-activities" className="w-full">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg">7th class</Button>
                </Link>

                <Link href="/8th-hindi-activities" className="w-full">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg">8th class</Button>
                </Link>

                <Link href="/9th-hindi-activities" className="w-full">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg">9th class</Button>
                </Link>

                <Link href="/10th-hindi-activities" className="w-full">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg">10th class</Button>
                </Link>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center mt-8">
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
