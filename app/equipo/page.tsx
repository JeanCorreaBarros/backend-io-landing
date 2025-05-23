"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Linkedin, Twitter } from "lucide-react"
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

// Datos del equipo
const teamMembers = [
  {
    name: "Ana Martínez",
    role: "CEO & Co-fundadora",
    location: "Madrid, España",
    bio: "Experta en desarrollo backend con más de 10 años de experiencia en empresas como Google y Amazon.",
    image: "1",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Carlos Rodríguez",
    role: "CTO & Co-fundador",
    location: "Barcelona, España",
    bio: "Arquitecto de software especializado en sistemas distribuidos y bases de datos a gran escala.",
    image: "2",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Elena Gómez",
    role: "Jefa de Producto",
    location: "Valencia, España",
    bio: "Especialista en UX/UI con enfoque en herramientas de desarrollo y experiencias de usuario técnicas.",
    image: "3",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Miguel Fernández",
    role: "Ingeniero de IA",
    location: "Sevilla, España",
    bio: "Investigador en aprendizaje automático y procesamiento de lenguaje natural aplicado a la generación de código.",
    image: "4",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Laura Sánchez",
    role: "Ingeniera Frontend",
    location: "Bilbao, España",
    bio: "Desarrolladora frontend especializada en React y visualización de datos para interfaces técnicas.",
    image: "5",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Javier López",
    role: "Ingeniero Backend",
    location: "Málaga, España",
    bio: "Experto en arquitecturas serverless y microservicios con enfoque en rendimiento y escalabilidad.",
    image: "6",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sofía Navarro",
    role: "Diseñadora UX",
    location: "Zaragoza, España",
    bio: "Diseñadora de experiencia de usuario especializada en interfaces para herramientas de desarrollo.",
    image: "7",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Pablo Moreno",
    role: "DevOps Engineer",
    location: "A Coruña, España",
    bio: "Especialista en infraestructura como código, CI/CD y automatización de despliegues.",
    image: "8",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Lucía Díaz",
    role: "Ingeniera de Datos",
    location: "Alicante, España",
    bio: "Experta en modelado de datos, ETL y optimización de bases de datos para aplicaciones de alto rendimiento.",
    image: "9",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Daniel Torres",
    role: "Ingeniero de QA",
    location: "Murcia, España",
    bio: "Especialista en pruebas automatizadas y aseguramiento de calidad para aplicaciones complejas.",
    image: "10",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
]

export default function EquipoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#050814] to-[#0a0f29]">
      {/* Navigation */}
      <NavigationBar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center relative">
        <motion.div className="absolute left-0 top-0 pt-2 pl-2">
          <Link href="/">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" /> Volver al inicio
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-6"
        >
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Conoce al{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Equipo</span>{" "}
            detrás de backend.io
          </motion.h1>

         

          <motion.p variants={fadeIn} className="text-gray-300 text-lg max-w-2xl mx-auto">
            Un grupo de apasionados desarrolladores, diseñadores y expertos en IA trabajando juntos para revolucionar la
            forma en que se crean backends.
          </motion.p>

           <motion.div variants={fadeIn} className="flex justify-center mt-4 gap-4">
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md text-base"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Donar al proyecto
              </a>
            </Button>
            <Button
              asChild
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md text-base"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Haz parte del equipo
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="container mx-auto px-4 py-8 md:py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Card CEO Jean Carlos Correa */}
          <motion.div
            variants={scaleUp}
            className="bg-[#0c1131] rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="h-48 bg-gradient-to-br from-purple-900/40 to-blue-900/40 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-[#0c1131] flex items-center justify-center text-white text-2xl font-bold">
                    JC
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-1">Jean Carlos Correa</h3>
              <p className="text-purple-400 text-sm mb-2">CEO y Fundador</p>
              <p className="text-gray-400 text-xs mb-4">Barranquilla, Colombia</p>
              <p className="text-gray-300 text-sm mb-4">Más de 6 años de experiencia en Frontend y Backend</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
          {/* Skeleton cards for futuros miembros */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              variants={scaleUp}
              className="bg-[#0c1131] rounded-xl border border-gray-800 overflow-hidden animate-pulse"
            >
              <div className="h-48 bg-gradient-to-br from-purple-900/40 to-blue-900/40 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gray-700" />
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="h-6 w-24 bg-gray-700 rounded mb-2 mx-auto" />
                <div className="h-4 w-16 bg-gray-800 rounded mb-2 mx-auto" />
                <div className="h-3 w-20 bg-gray-800 rounded mb-2 mx-auto" />
                <div className="h-3 w-28 bg-gray-900 rounded mx-auto" />
                <div className="flex justify-center gap-4 mt-4">
                  <div className="h-5 w-5 bg-gray-800 rounded-full" />
                  <div className="h-5 w-5 bg-gray-800 rounded-full" />
                  <div className="h-5 w-5 bg-gray-800 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Join the Team CTA */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Quieres unirte a nuestro equipo?</h2>
            <p className="text-gray-300 mb-8">
              Estamos siempre buscando personas talentosas y apasionadas para unirse a nuestra misión de transformar el
              desarrollo backend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-6 rounded-md text-base">
                Realizar una donación
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 text-purple-500 hover:bg-gray-800 hover:text-white h-12 px-6 rounded-md text-base"
              >
                Haz parte del equipo
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
