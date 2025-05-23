"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowLeft } from "lucide-react"
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

export default function PreciosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#050814] to-[#0a0f29]">
      {/* Navigation */}
      <NavigationBar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#050814] via-[#0a0f29] to-[#1a103a] py-20 md:py-32">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/5"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-600/15"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-purple-600/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Planes y Precios
            </motion.h1>

            <motion.p variants={fadeIn} className="text-gray-300 text-lg max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades. Todos los planes incluyen acceso a nuestras
              características principales.
            </motion.p>

            <motion.div variants={fadeIn} className="pt-4">
              <Link href="/">
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Volver al inicio
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="container mx-auto px-4 py-8 md:py-16"
      >
        <div className="grid  md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <motion.div
            variants={scaleUp}
            className="bg-gradient-to-b from-[#1a103a] to-[#0c1131] rounded-xl border border-gray-800 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Activo
            </div>
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Plan Free</h3>
              <p className="text-gray-300 mb-4">Acceso básico a todas las funcionalidades</p>
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3">
                {["Hasta 3 proyectos", "Generación de código básica", "Exportación de proyectos"].map(
                  (feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-6">Actualizar a Premium</Button>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            variants={scaleUp}
            className="bg-gradient-to-b from-[#1a103a] to-[#0c1131] rounded-xl border border-purple-500/30 overflow-hidden relative opacity-50 pointer-events-none select-none"
          >
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2">Plan Pro</h3>
              <p className="text-gray-400 mb-4">Para desarrolladores individuales</p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-white">$9.99</span>
                <span className="text-gray-400 mb-1">/mes</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3">
                {[
                  "Proyectos ilimitados",
                  "Generación de código avanzada",
                  "Soporte prioritario",
                  "Acceso a todas las integraciones",
                  "Exportación en múltiples formatos",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6"
              >
                <a href="https://backend-io-git-master-jeancorreabarros-projects.vercel.app/login" target="_blank" rel="noopener noreferrer">
                  Comenzar prueba gratuita
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            variants={scaleUp}
            className="bg-gradient-to-b from-[#1a103a] to-[#0c1131] rounded-xl border border-gray-800 overflow-hidden relative opacity-50 pointer-events-none select-none"
          >
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2">Plan Enterprise</h3>
              <p className="text-gray-400 mb-4">Para equipos y empresas</p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-white">$49.99</span>
                <span className="text-gray-400 mb-1">/mes</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3">
                {[
                  "Todo lo del Plan Pro",
                  "Colaboración en equipo",
                  "Integraciones avanzadas",
                  "Soporte 24/7",
                  "Despliegue automatizado",
                  "Personalización avanzada",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6">Contactar ventas</Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Preguntas frecuentes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Respuestas a las preguntas más comunes sobre nuestros planes y servicios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              question: "¿Puedo cambiar de plan en cualquier momento?",
              answer:
                "Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplicarán al inicio del siguiente ciclo de facturación.",
            },
            {
              question: "¿Qué métodos de pago aceptan?",
              answer:
                "Aceptamos todas las tarjetas de crédito principales (Visa, Mastercard, American Express) y PayPal.",
            },
            {
              question: "¿Ofrecen descuentos para startups o proyectos educativos?",
              answer:
                "Sí, ofrecemos descuentos especiales para startups, instituciones educativas y proyectos sin fines de lucro. Contáctanos para más información.",
            },
            {
              question: "¿Puedo cancelar mi suscripción en cualquier momento?",
              answer:
                "Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de control. No hay contratos a largo plazo ni penalizaciones por cancelación.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-[#0c1131] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Tienes más preguntas?</h2>
            <p className="text-gray-300 mb-8">
              Nuestro equipo está listo para ayudarte a elegir el plan perfecto para tus necesidades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-6 rounded-md text-base">
                Contactar con ventas
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800 h-12 px-6 rounded-md text-base"
              >
                Ver documentación
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
