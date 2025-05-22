"use client"

import { useState } from "react"
import Link from "next/link"
import { Database } from "lucide-react"
import { TermsModal } from "@/components/modals/terms-modal"
import { PrivacyModal } from "@/components/modals/privacy-modal"

export function FooterWithModals() {
  const [termsOpen, setTermsOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <>
      <footer className="border-t border-gray-800 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <Database className="h-4 w-4 text-white" />
              </div>
              <span className="text-white font-bold">backend.io</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} backend.io. Todos los derechos reservados.
            </div>
            <div className="flex gap-6">
              <button onClick={() => setTermsOpen(true)} className="text-gray-400 hover:text-white text-sm">
                Términos
              </button>
              <button onClick={() => setPrivacyOpen(true)} className="text-gray-400 hover:text-white text-sm">
                Privacidad
              </button>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <TermsModal open={termsOpen} onOpenChange={setTermsOpen} />
      <PrivacyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </>
  )
}
