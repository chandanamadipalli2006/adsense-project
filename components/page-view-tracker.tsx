"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const incrementPageView = () => {
      console.log("[v0] Page view tracker triggered for:", pathname)

      const INITIAL_COUNT = 533482
      const currentViews = localStorage.getItem("greenera-total-views")

      // If no stored value or stored value is less than our initial count, reset to initial
      let baseCount = INITIAL_COUNT
      if (currentViews && Number.parseInt(currentViews) >= INITIAL_COUNT) {
        baseCount = Number.parseInt(currentViews)
      }

      const newViewCount = baseCount + 1

      console.log("[v0] Current views:", currentViews, "New count:", newViewCount)

      localStorage.setItem("greenera-total-views", newViewCount.toString())

      // Dispatch custom event to update counter display
      window.dispatchEvent(
        new CustomEvent("pageViewUpdated", {
          detail: { totalViews: newViewCount },
        }),
      )

      console.log("[v0] Event dispatched with count:", newViewCount)
    }

    incrementPageView()
  }, [pathname]) // Increment on every route change

  return null // This component doesn't render anything
}
