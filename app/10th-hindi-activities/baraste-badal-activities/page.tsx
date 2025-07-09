'use client';

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoogleAd from "@/components/GoogleAd"; // ✅ Import Ad Component

export default function TeluguActivities() {
  const activityLinks = [
    "https://wordwall.net/resource/84521426", // Activity 1
    "https://wordwall.net/resource/76188521", // Activity 2
    "https://wordwall.net/resource/94497098",
    "https://wordwall.net/resource/94496716",
    "", "", "", "", // Placeholder for 5-8
  ];

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

      {/* ✅ AdSense Ad Below Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 flex justify-center">
        <GoogleAd />
      </div>

      {/* Telugu Activities Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Baraste Badal Activities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Activity {index}</h4>
                  <p className="text-gray-600 mb-4">
                    Interactive Telugu learning activity for better understanding
                  </p>

                  {activityLinks[index - 1] ? (
                    <a
                      href={activityLinks[index - 1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        Start Activity
                      </Button>
                    </a>
                  ) : (
                    <Button className="w-full bg-purple-600 text-white" disabled>
                      Start Activity
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Back Button */}
            <div className="text-center">
              <Link href="/10th-hindi-activities">
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
  );
}
