import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AOSProvider } from "@/components/aos-provider"
import { Suspense } from "react"
import "./globals.css"
import "aos/dist/aos.css"

export const metadata: Metadata = {
  title: "Firoz Bari | Full-Stack Developer & AI/ML Specialist",
  description: "Full-stack developer and AI/ML specialist with 12+ years of experience delivering cutting-edge digital solutions across web, mobile, and AI-driven platforms.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            <AOSProvider>
              {children}
              <Toaster />
            </AOSProvider>
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
