// app/layout.tsx

import "./globals.css"
import { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Greenera",
  description: "Providing free, quality online education in Hindi and Telugu for classes 6 to 10.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
