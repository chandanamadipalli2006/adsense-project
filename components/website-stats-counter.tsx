"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export default function WebsiteStatsCounter() {
  const [totalViews, setTotalViews] = useState(533482)

  useEffect(() => {
    const storedViews = localStorage.getItem("greenera-total-views")
    console.log("[v0] Stored views on load:", storedViews)

    if (storedViews) {
      const viewCount = Number.parseInt(storedViews)
      console.log("[v0] Setting total views to:", viewCount)
      setTotalViews(viewCount)
    }

    const handlePageViewUpdate = (event: CustomEvent) => {
      console.log("[v0] Received page view update:", event.detail.totalViews)
      setTotalViews(event.detail.totalViews)
    }

    window.addEventListener("pageViewUpdated", handlePageViewUpdate as EventListener)

    return () => {
      window.removeEventListener("pageViewUpdated", handlePageViewUpdate as EventListener)
    }
  }, [])

  return (
    <section className="py-8 bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">Total Website Views</p>
              <p className="text-4xl font-bold text-gray-900">{totalViews.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-2">Across all pages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
