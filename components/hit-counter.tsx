"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export default function HitCounter() {
  const [hits, setHits] = useState<number>(423429)

  useEffect(() => {
    const storedHits = localStorage.getItem("greenera-hits")
    const newHits = storedHits ? parseInt(storedHits) + 1 : 423430
    localStorage.setItem("greenera-hits", newHits.toString())
    setHits(newHits)
  }, [])

  return (
    <div className="w-full py-16 mt-16 bg-gradient-to-tr from-emerald-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto inline-flex items-center backdrop-blur-xl bg-white/30 border border-white/60 shadow-2xl hover:shadow-emerald-300/70 transition duration-300 rounded-3xl px-10 py-8 relative">
          <div className="absolute top-0 right-0 bg-gradient-to-tr from-emerald-400 to-blue-500 w-2 h-2 rounded-full shadow-lg animate-ping"></div>
          <Eye className="text-emerald-700 w-10 h-10 drop-shadow-lg mr-4" />
          <div className="text-left">
            <p className="text-sm uppercase font-semibold text-gray-700 tracking-wide">
              Total Page Views
            </p>
            <p className="text-5xl font-extrabold text-gray-900 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-transparent bg-clip-text tracking-tight">
              {hits.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
