"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Database } from "lucide-react"
import { motion } from "framer-motion"

export function NavigationBar() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-4 flex items-center justify-between"
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
          <Database className="h-4 w-4 text-white" />
        </div>
        <span className="text-white font-bold text-xl">backend.io</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "text-white border-b-2 border-purple-500 pb-1 text-sm"
              : "text-gray-300 hover:text-white text-sm"
          }
        >
          Inicio
        </Link>
        <Link
          href="/caracteristicas"
          className={
            pathname === "/caracteristicas"
              ? "text-white border-b-2 border-purple-500 pb-1 text-sm"
              : "text-gray-300 hover:text-white text-sm"
          }
        >
          Características
        </Link>
        <Link
          href="/precios"
          className={
            pathname === "/precios"
              ? "text-white border-b-2 border-purple-500 pb-1 text-sm"
              : "text-gray-300 hover:text-white text-sm"
          }
        >
          Precios
        </Link>
        <Link
          href="/documentacion"
          className={
            pathname === "/documentacion"
              ? "text-white border-b-2 border-purple-500 pb-1 text-sm"
              : "text-gray-300 hover:text-white text-sm"
          }
        >
          Documentación
        </Link>
        <Link
          href="/equipo"
          className={
            pathname === "/equipo"
              ? "text-white border-b-2 border-purple-500 pb-1 text-sm"
              : "text-gray-300 hover:text-white text-sm"
          }
        >
          Equipo de desarrollo
        </Link>
      </nav>
      <div className="md:hidden">
        <Button variant="ghost" size="icon" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>
      <div className="hidden md:block">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md">Prueba gratis</Button>
      </div>
    </motion.header>
  )
}
