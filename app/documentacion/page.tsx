"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Database, Search, Book, Code, FileText, ArrowLeft, ExternalLink, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { NavigationBar } from "@/components/navigation-bar"
import { FooterWithModals } from "@/components/footer-with-modals"

// Variantes de animación
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export default function DocumentacionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#050814] to-[#0a0f29]">
      {/* Navigation */}
      <NavigationBar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-6"
        >
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Documentación
          </motion.h1>

          <motion.p variants={fadeIn} className="text-gray-300 text-lg max-w-2xl mx-auto">
            Aprende a utilizar backend.io con nuestra documentación completa, tutoriales y ejemplos.
          </motion.p>

          <motion.div variants={fadeIn} className="max-w-xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar en la documentación..."
                className="w-full bg-[#0c1131] border border-gray-800 rounded-md py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="pt-4">
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" /> Volver al inicio
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Documentation Categories */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="container mx-auto px-4 py-8 md:py-16"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Book className="h-8 w-8 text-purple-400" />,
              title: "Guías de inicio",
              description: "Aprende los conceptos básicos y cómo comenzar con backend.io",
              links: [
                "Introducción a backend.io",
                "Instalación y configuración",
                "Tu primer proyecto",
                "Conceptos fundamentales",
              ],
            },
            {
              icon: <Code className="h-8 w-8 text-purple-400" />,
              title: "Tutoriales",
              description: "Guías paso a paso para crear diferentes tipos de backends",
              links: [
                "Crear una API REST",
                "Modelado de datos avanzado",
                "Implementar autenticación",
                "Integración con bases de datos",
              ],
            },
            {
              icon: <FileText className="h-8 w-8 text-purple-400" />,
              title: "Referencia de API",
              description: "Documentación detallada de todas las APIs y componentes",
              links: ["API REST", "API GraphQL", "Modelos de datos", "Autenticación y autorización"],
            },
            {
              icon: <Database className="h-8 w-8 text-purple-400" />,
              title: "Bases de datos",
              description: "Integración con diferentes bases de datos y optimización",
              links: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
            },
            {
              icon: <Sparkles className="h-8 w-8 text-purple-400" />,
              title: "Asistente IA",
              description: "Cómo utilizar el asistente de IA para optimizar tu backend",
              links: [
                "Introducción al asistente IA",
                "Generación de código",
                "Optimización de consultas",
                "Depuración automática",
              ],
            },
            {
              icon: <ExternalLink className="h-8 w-8 text-purple-400" />,
              title: "Despliegue",
              description: "Guías para desplegar tu backend en diferentes plataformas",
              links: ["Vercel", "AWS", "Google Cloud", "Azure"],
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              className="bg-[#0c1131] p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="bg-[#151b3d] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className="text-purple-400 hover:text-purple-300 flex items-center gap-1">
                      <span>{link}</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Latest Updates */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Últimas actualizaciones</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mantente al día con las últimas mejoras y cambios en la documentación
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              date: "15 de mayo, 2025",
              title: "Nueva documentación para el Asistente IA",
              description:
                "Hemos añadido guías completas sobre cómo utilizar el asistente de IA para optimizar tus consultas y generar código automáticamente.",
            },
            {
              date: "10 de mayo, 2025",
              title: "Tutoriales actualizados para GraphQL",
              description:
                "Los tutoriales de GraphQL han sido actualizados con las últimas características y mejores prácticas.",
            },
            {
              date: "5 de mayo, 2025",
              title: "Nueva sección de despliegue en Vercel",
              description: "Aprende a desplegar tu backend en Vercel con nuestra nueva guía paso a paso.",
            },
          ].map((update, index) => (
            <div key={index} className="bg-[#0c1131] p-6 rounded-xl border border-gray-800">
              <div className="text-sm text-purple-400 mb-2">{update.date}</div>
              <h3 className="text-xl font-bold text-white mb-2">{update.title}</h3>
              <p className="text-gray-400">{update.description}</p>
              <Link href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 mt-4">
                <span>Leer más</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12 border border-purple-900/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h2>
            <p className="text-gray-300 mb-8">
              Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta que tengas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-6 rounded-md text-base">
                Contactar soporte
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800 h-12 px-6 rounded-md text-base"
              >
                Unirse a la comunidad
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <FooterWithModals />
    </div>
  )
}
