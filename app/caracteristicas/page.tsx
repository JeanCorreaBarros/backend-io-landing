"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Database, Code, Sparkles, BarChart3, Lock, Zap, Server, Globe, ArrowLeft } from "lucide-react"
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
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export default function CaracteristicasPage() {
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
            Características de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              backend.io
            </span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-gray-300 text-lg max-w-2xl mx-auto">
            Descubre todas las herramientas y funcionalidades que hacen de backend.io la plataforma ideal para crear
            backends de manera visual y eficiente.
          </motion.p>

          <motion.div variants={fadeIn} className="pt-4">
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" /> Volver al inicio
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Features */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeIn} className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1a1f3d] text-purple-400 text-xs font-medium">
              Modelado Visual
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Diseña tu base de datos sin escribir código</h2>
            <p className="text-gray-300">
              Nuestra interfaz de arrastrar y soltar te permite diseñar modelos de datos complejos, establecer
              relaciones y definir restricciones de manera visual e intuitiva.
            </p>
            <ul className="space-y-3">
              {[
                "Crea tablas y modelos con unos pocos clics",
                "Establece relaciones entre entidades visualmente",
                "Define tipos de datos, índices y restricciones",
                "Genera automáticamente migraciones",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={scaleUp} className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Modelado visual de datos"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg blur-xl"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Feature Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Todas las herramientas que necesitas</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            backend.io ofrece un conjunto completo de funcionalidades para crear backends robustos y escalables
          </p>
        </div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Database className="h-8 w-8 text-purple-400" />,
              title: "Modelado de Datos",
              description: "Diseña tu estructura de datos con una interfaz visual intuitiva",
            },
            {
              icon: <Code className="h-8 w-8 text-purple-400" />,
              title: "API Builder",
              description: "Genera endpoints RESTful y GraphQL automáticamente",
            },
            {
              icon: <Sparkles className="h-8 w-8 text-purple-400" />,
              title: "Asistente IA",
              description: "Recibe sugerencias inteligentes para optimizar tu backend",
            },
            {
              icon: <Lock className="h-8 w-8 text-purple-400" />,
              title: "Autenticación y Autorización",
              description: "Implementa sistemas de seguridad con unos pocos clics",
            },
            {
              icon: <Zap className="h-8 w-8 text-purple-400" />,
              title: "Rendimiento Optimizado",
              description: "Backends rápidos y eficientes con optimizaciones automáticas",
            },
            {
              icon: <Server className="h-8 w-8 text-purple-400" />,
              title: "Despliegue Automatizado",
              description: "Publica tu backend en la nube con un solo clic",
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-purple-400" />,
              title: "Análisis y Monitoreo",
              description: "Visualiza el rendimiento y uso de tu backend en tiempo real",
            },
            {
              icon: <Globe className="h-8 w-8 text-purple-400" />,
              title: "Escalabilidad Global",
              description: "Escala automáticamente según la demanda en cualquier región",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              className="bg-[#0c1131] p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="bg-[#151b3d] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
            <p className="text-gray-300 mb-8">
              Crea tu primer backend visual hoy mismo y descubre cómo backend.io puede transformar tu proceso de
              desarrollo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-6 rounded-md text-base">
                Comenzar gratis
              </Button>
              <Link href="/precios">
                <Button
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800 h-12 px-6 rounded-md text-base"
                >
                  Ver planes y precios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <FooterWithModals />
    </div>
  )
}
