import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HindiActivities() {
  const activityData = [
    {
      name: "Baraste Badal",
      externalLink: "https://drive.google.com/file/d/1Hy_nRtOT3UcPqu7aRWxmjSXT0XSv3WvL/view?usp=sharing",
    },
    // You can add more items here with either `slug` or `externalLink`
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-100 to-rose-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Get Free And Quality <span className="text-rose-600">Online Education</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">Learn • Practice • Test</p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">VC publications key</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {activityData.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full mb-4 text-rose-600 font-bold text-lg">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{activity.name}</h4>
                  <p className="text-gray-600 mb-4">
                    Lesson key of VC publications study material
                  </p>

                  {/* Button logic for internal vs external link */}
                  {activity.externalLink ? (
                    <a
                      href={activity.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                        View Activities
                      </Button>
                    </a>
                  ) : (
                    <Link href={`/10th-hindi-activities/${activity.slug}`}>
                      <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                        View Activities
                      </Button>
                    </Link>
                  )}
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
