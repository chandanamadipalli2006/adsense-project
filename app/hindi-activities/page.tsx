import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"
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
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">
              Learn - Practice - Test
            </p>
          </div>
        </div>
      </section>

      {/* Hindi Activities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* 🔥 Horizontal Layout */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Vowels & Consonants Card */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col justify-between">

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="text-orange-500" />
                  Vowels & Consonants
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Build strong fundamentals by learning Hindi स्वर (Vowels) and व्यंजन (Consonants)
                  through structured and engaging activities.
                </p>
              </div>

              <Link href="/hindi-vowels-consonants-activities" className="block w-full mt-4">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg">
                  View Activities
                </Button>
              </Link>
            </div>
            {/* Class Activities Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Hindi Activities
              </h2>

              <div className="flex flex-col space-y-4">
                <Link href="/6th-hindi-activities">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg">
                    6th class
                  </Button>
                </Link>

                <Link href="/7th-hindi-activities">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg">
                    7th class
                  </Button>
                </Link>

                <Link href="/8th-hindi-activities">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg">
                    8th class
                  </Button>
                </Link>

                <Link href="/9th-hindi-activities">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg">
                    9th class
                  </Button>
                </Link>

                <Link href="/10th-hindi-activities">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg">
                    10th class
                  </Button>
                </Link>
              </div>
            </div>

            

          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}