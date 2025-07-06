"use client"

import { useEffect, useRef } from "react"

// This component is just for demonstration purposes
// In a real app, you would create actual icon files
export default function GenerateIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const sizes = [72, 96, 128, 144, 152, 192, 384, 512]

    sizes.forEach((size) => {
      if (!canvasRef.current) return

      const canvas = canvasRef.current
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext("2d")

      if (!ctx) return

      // Draw background
      ctx.fillStyle = "#10b981" // Emerald color
      ctx.fillRect(0, 0, size, size)

      // Draw letter G
      ctx.fillStyle = "white"
      ctx.font = `bold ${size * 0.6}px sans-serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("G", size / 2, size / 2)

      // In a real app, you would save this as a file
      // For demo purposes, we're just showing how the icons would be generated
    })
  }, [])

  return (
    <div className="hidden">
      <canvas ref={canvasRef} />
    </div>
  )
}
