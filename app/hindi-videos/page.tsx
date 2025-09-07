import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HindiVideos() {
  const videoIds = [
    "bHOdO5zk7sU", // Video 1
    "", "", "", "", "" // Placeholder for others
  ]

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

      {/* Hindi Videos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Hindi</h2>

              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[1, 2, 3, 4, 5, 6].map((index) => {
                  const videoId = videoIds[index - 1];

                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      {/* Thumbnail or Placeholder */}
                      <div className="relative aspect-video overflow-hidden">
                        {videoId ? (
                          <img
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt={`Hindi Video ${index}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center w-full h-full">
                            <div className="text-white text-center">
                              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                              <p className="text-sm font-medium">Hindi Video {index}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Hindi Educational Content {index}</h3>
                        <p className="text-sm text-gray-600">Learn important concepts in Hindi language</p>

                        {/* Button */}
                        {videoId ? (
                          <a
                            href={`https://youtu.be/${videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <Button className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white">Watch Video</Button>
                          </a>
                        ) : (
                          <Button className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white" disabled>
                            Watch Video
                          </Button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Back Button */}
              <div className="text-center">
                <Link href="/">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
