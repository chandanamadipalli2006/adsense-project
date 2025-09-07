import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Play, FileText, Languages } from "lucide-react"
import Script from "next/script"
import Link from "next/link"
import PWAInstallPrompt from "./components/pwa-prompt"
import FollowUsSection from "./components/follow-us-section"
import WebsiteStatsCounter from "@/components/website-stats-counter"
import GreeneraHeroBanner from "@/components/greenera-hero-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* PWA Registration Script */}
      <Script id="register-sw" strategy="afterInteractive">
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js').then(
                function(registration) {
                  console.log('Service Worker registration successful with scope: ', registration.scope);
                },
                function(err) {
                  console.log('Service Worker registration failed: ', err);
                }
              );
            });
          }
        `}
      </Script>

      {/* PWA Install Prompt */}
      <PWAInstallPrompt />

      {/* Greenera06 Hero Banner */}
      <GreeneraHeroBanner />

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Get Free And Quality <span className="text-emerald-600">Online Education</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8">Learn - Practice - Test</p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12">
              Access comprehensive educational content in Hindi and Telugu for classes 6-10. Watch videos, practice
              activities, and excel in your studies with our free online platform.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section id="contents" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Educational Contents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive educational resources designed for students from classes 6 to 10.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hindi Videos Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-emerald-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Hindi Videos</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-8">
                  Watch comprehensive educational videos in Hindi language covering various subjects and topics for
                  better understanding.
                </CardDescription>
                <div className="px-4">
                  <Link href="/hindi-videos" className="block w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 py-6 text-base">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Videos
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Activities Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-emerald-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Activities</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-8">
                  Interactive activities and practice exercises available in both Telugu and Hindi to enhance your
                  learning experience.
                </CardDescription>
                <div className="px-4 space-y-4">
                  <Link href="/telugu-activities" className="block w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 py-6 text-base">
                      <Languages className="h-4 w-4 mr-2" />
                      Telugu Activities
                    </Button>
                  </Link>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-200 py-6 text-base">
                    <Languages className="h-4 w-4 mr-2" />
                    Hindi Activities
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 10th Class */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-emerald-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">10</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">10th Class</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-8">
                  Complete curriculum for Class 10 students with comprehensive study materials in Telugu and Hindi
                  languages.
                </CardDescription>
                <div className="px-4 space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 py-6 text-base">
                    <Languages className="h-4 w-4 mr-2" />
                    Telugu Content
                  </Button>
                  <Link href="/10th-hindi" className="block w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-200 py-6 text-base">
                      <Languages className="h-4 w-4 mr-2" />
                      Hindi Content
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 9th Class */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-emerald-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">9</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">9th Class</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-8">
                  Comprehensive study materials and resources for Class 9 students available in both Telugu and Hindi
                  languages.
                </CardDescription>
                <div className="px-4 space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 py-6 text-base">
                    <Languages className="h-4 w-4 mr-2" />
                    Telugu Content
                  </Button>
                  <Link href="/9th-hindi" className="block w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-200 py-6 text-base">
                      <Languages className="h-4 w-4 mr-2" />
                      Hindi Content
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 8th Class */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-emerald-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">8</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">8th Class</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-8">
                  Quality educational content for Class 8 students with interactive lessons in Telugu and Hindi
                  languages.
                </CardDescription>
                <div className="px-4 space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 py-6 text-base">
                    <Languages className="h-4 w-4 mr-2" />
                    Telugu Content
                  </Button>
                  <Link href="/8th-hindi" className="block w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-200 py-6 text-base">
                      <Languages className="h-4 w-4 mr-2" />
                      Hindi Content
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 7th Class */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-emerald-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">7</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">7th Class</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-8">
                  Engaging study materials and practice exercises designed specifically for Class 7 students in Hindi
                  language.
                </CardDescription>
                <div className="px-4">
                  <Link href="/7th-hindi" className="block w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-200 py-6 text-base">
                      <Languages className="h-4 w-4 mr-2" />
                      Hindi Content
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 6th Class */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-emerald-200 md:col-start-2 lg:col-start-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">6</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">6th Class</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-8">
                  Foundation building content for Class 6 students with comprehensive study materials in Hindi language.
                </CardDescription>
                <div className="px-4">
                  <Link href="/6th-hindi" className="block w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-200 py-6 text-base">
                      <Languages className="h-4 w-4 mr-2" />
                      Hindi Content
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Greenera?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide quality education that's accessible, comprehensive, and designed for student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Education</h3>
              <p className="text-gray-600">Access quality educational content without any cost barriers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Languages className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Language</h3>
              <p className="text-gray-600">Content available in Hindi and Telugu for better understanding</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Learning</h3>
              <p className="text-gray-600">Interactive video content for visual and auditory learners</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Activities</h3>
              <p className="text-gray-600">Hands-on activities and exercises to reinforce learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Statistics Counter */}
      <WebsiteStatsCounter />

      {/* Follow Us Section */}
      <FollowUsSection />
    </div>
  )
}
