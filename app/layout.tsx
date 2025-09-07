import "./globals.css"
import type { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import PageViewTracker from "@/components/page-view-tracker"

export const metadata = {
  title: "Greenera",
  description: "Providing free, quality online education in Hindi and Telugu for classes 6 to 10.",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ This loads your exact AdSense script with client ID */}
        <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7848126804697958"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col min-h-screen">
            <PageViewTracker />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
