"use client"

import type React from "react"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatePresence } from "framer-motion"

import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  )
}
