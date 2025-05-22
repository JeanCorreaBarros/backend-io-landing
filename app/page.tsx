"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, Database, Sparkles } from "lucide-react"
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
      staggerChildren: 0.2,
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

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#050814] to-[#0a0f29]">
      {/* Announcement bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#111530]/80 backdrop-blur-sm py-2 px-4 text-center text-sm text-gray-300"
      >
        <p>
          Estamos en beta cerrada 🚀{" "}
          <Link href="#" className="text-white hover:text-purple-300 font-medium underline underline-offset-2">
            Solicita una invitación
          </Link>
        </p>
      </motion.div>

      {/* Navigation */}
      <NavigationBar />

      {/* Hero Section - Inspired by reference image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#050814] via-[#0a0f29] to-[#1a103a] py-20 md:py-32">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/5"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-600/15"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-purple-600/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl space-y-6">
            <motion.div
              variants={fadeIn}
              className="inline-block px-4 py-2 rounded-full bg-[#1a1f3d] text-purple-400 text-sm font-medium"
            >
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Nuevo - Creación de backends integrada con IA
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              El nuevo
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Backend Visual
              </span>
              <br />
              para tus apps
            </motion.h1>

            <motion.p variants={fadeIn} className="text-gray-300 text-base sm:text-lg max-w-xl">
              Donde los mejores desarrolladores convergen para innovar, colaborar y dar forma al panorama digital del
              mañana con interfaces visuales y asistencia de IA.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-8 rounded-md text-base">
                EXPLORAR BACKEND.IO
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
          Potencia tu desarrollo con <span className="text-purple-400">backend.io</span>
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-4 sm:gap-8 mt-12"
        >
          {[
            {
              icon: <Database className="h-8 w-8 text-purple-400" />,
              title: "Modelado Visual",
              description: "Diseña tu base de datos con una interfaz intuitiva de arrastrar y soltar",
            },
            {
              icon: <Code className="h-8 w-8 text-purple-400" />,
              title: "API Automática",
              description: "Genera endpoints RESTful y GraphQL con un solo clic",
            },
            {
              icon: <Sparkles className="h-8 w-8 text-purple-400" />,
              title: "Asistente IA",
              description: "Recibe sugerencias inteligentes para optimizar tu backend",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              className="bg-[#0c1131]/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-800 hover:border-purple-900/50 transition-all hover:shadow-lg hover:shadow-purple-900/10"
            >
              <div className="bg-[#151b3d] rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn} className="mt-12">
          <Link href="/caracteristicas">
            <Button 
              variant="outline" 
              className="border-2 border-purple-500 text-purple-200 hover:bg-purple-900/30 hover:text-white hover:border-purple-400 transition-colors shadow-md rounded-lg font-semibold px-6 py-3 text-base"
            >
              Ver todas las características <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Dashboard Preview */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="container mx-auto px-4 py-16 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-3/4 h-3/4 bg-purple-600/10 rounded-full blur-3xl"></div>
      </motion.section>

      {/* Connections Section - Inspired by second reference image */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="container mx-auto px-4 py-16 md:py-24 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 to-blue-900/10 rounded-3xl"></div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Conecta con{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Expertos
              </span>{" "}
              en Desarrollo Backend
              <span className="text-purple-400">.</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Accede a una comunidad de desarrolladores especializados y crea backends más rápidos y eficientes con
              asistencia en tiempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-6 rounded-md text-base">
                Iniciar Proyecto
              </Button>
              <Button
                variant="outline"
                className="border-purple-500/30 text-purple-400 hover:bg-purple-900/20 h-12 px-6 rounded-md text-base"
              >
                Demo
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[300px] sm:h-[400px] w-[300px] sm:w-[400px] mx-auto">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] rounded-full border border-purple-500/20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full border border-purple-500/30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[25%] rounded-full border border-purple-500/40"></div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">50k+</div>
                <div className="text-xs sm:text-sm text-purple-400">Desarrolladores</div>
              </div>

              {/* Avatar positions */}
              {[
                { top: "10%", left: "50%", delay: 0.1 },
                { top: "30%", left: "85%", delay: 0.2 },
                { top: "70%", left: "85%", delay: 0.3 },
                { top: "90%", left: "50%", delay: 0.4 },
                { top: "70%", left: "15%", delay: 0.5 },
                { top: "30%", left: "15%", delay: 0.6 },
              ].map((pos, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: pos.delay }}
                  className="absolute w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 p-0.5"
                  style={{ top: pos.top, left: pos.left, transform: "translate(-50%, -50%)" }}
                >
                  <div className="w-full h-full rounded-full bg-[#0c1131] flex items-center justify-center">
                    <div className="text-sm sm:text-lg font-bold text-purple-400">{index + 1}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center gap-4 sm:gap-8 mt-16 overflow-x-auto pb-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-8 w-24 sm:w-32 bg-gray-800 rounded-md flex-shrink-0"
            ></motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section - With horizontal scroll */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 border border-purple-900/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0c1131]/80 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30">
                <h3 className="text-purple-400 font-medium mb-2">Herramientas de Desarrollo</h3>
                <p className="text-white text-lg sm:text-xl font-semibold mb-4">
                  Crea backends completos con herramientas visuales e intuitivas
                </p>

                {/* Horizontal Scroll Animation */}
                <div className="relative h-auto overflow-hidden mt-6">
                  <div className="overflow-x-auto pb-4 hide-scrollbar">
                    <motion.div
                      initial={{ x: 0 }}
                      animate={{ x: "-100%" }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                      }}
                      className="inline-flex whitespace-nowrap"
                    >
                      {[
                        "REST API",
                        "GraphQL",
                        "SQL",
                        "NoSQL",
                        "Autenticación",
                        "Websockets",
                        "Serverless",
                        "Microservicios",
                        "JWT",
                        "OAuth",
                        "Webhooks",
                        "Tiempo real",
                        "Caché",
                        "Validación",
                        "Migraciones",
                        "Logging",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-purple-900/20 rounded-lg px-3 py-2 text-sm text-purple-300 mr-2 inline-block"
                        >
                          {item}
                        </div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "0%" }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                      }}
                      className="inline-flex whitespace-nowrap"
                    >
                      {[
                        "REST API",
                        "GraphQL",
                        "SQL",
                        "NoSQL",
                        "Autenticación",
                        "Websockets",
                        "Serverless",
                        "Microservicios",
                        "JWT",
                        "OAuth",
                        "Webhooks",
                        "Tiempo real",
                        "Caché",
                        "Validación",
                        "Migraciones",
                        "Logging",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-purple-900/20 rounded-lg px-3 py-2 text-sm text-purple-300 mr-2 inline-block"
                        >
                          {item}
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Gradient overlays for smooth fade effect */}
                  <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-[#0c1131] to-transparent z-10"></div>
                  <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-[#0c1131] to-transparent z-10"></div>
                </div>
              </div>

              <div className="bg-[#0c1131]/80 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30">
                <h3 className="text-purple-400 font-medium mb-2">Expertos y Comunidad</h3>
                <p className="text-white text-lg sm:text-xl font-semibold mb-4">
                  Accede a una comunidad de desarrolladores backend y expertos en IA
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 p-0.5"
                    >
                      <div className="w-full h-full rounded-full bg-[#0c1131]"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0c1131]/80 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30">
                <h3 className="text-purple-400 font-medium mb-2">Trabajo en Equipo</h3>
                <p className="text-white text-lg font-medium">
                  Colabora en tiempo real con tu equipo para diseñar y desarrollar backends
                </p>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3 bg-purple-900/10 p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">👋</span>
                    </div>
                    <div>
                      <div className="text-sm text-purple-300 font-medium">Ana P.</div>
                      <div className="text-sm text-gray-300">
                        ¡Hola! Acabo de optimizar el modelo de datos que diseñaste
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-purple-900/10 p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">💡</span>
                    </div>
                    <div>
                      <div className="text-sm text-purple-300 font-medium">Carlos M.</div>
                      <div className="text-sm text-gray-300">
                        La IA sugiere añadir índices para mejorar el rendimiento
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#0c1131]/80 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30 flex flex-col items-center justify-center">
                  <div className="text-4xl sm:text-5xl font-bold text-white">100%</div>
                  <div className="text-purple-400 text-sm">Visual</div>
                </div>

                <div className="bg-purple-600 p-6 rounded-xl border border-purple-500/30 flex flex-col items-center justify-center">
                  <div className="text-white text-base sm:text-lg font-medium mb-2">Asistido por IA</div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
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
                      className="text-white"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section - Updated based on image */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Planes Disponibles</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades y comienza a crear backends visuales hoy mismo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500 mt-0.5 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
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
            className="bg-gradient-to-b from-[#1a103a] to-[#0c1131] rounded-xl border border-gray-800 overflow-hidden"
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
                {["Proyectos ilimitados", "Generación de código avanzada", "Soporte prioritario"].map(
                  (feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500 mt-0.5 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6">
                Comenzar prueba gratuita
              </Button>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            variants={scaleUp}
            className="bg-gradient-to-b from-[#1a103a] to-[#0c1131] rounded-xl border border-gray-800 overflow-hidden"
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
                {["Todo lo del Plan Pro", "Colaboración en equipo", "Integraciones avanzadas"].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500 mt-0.5 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6">Contactar ventas</Button>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Precisión en la Era Digital
              <br />
              <span className="text-purple-400">Tu Backend Comienza Aquí</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Únete a los miles de desarrolladores que están construyendo backends más rápidos, seguros y escalables con
              backend.io
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-6 rounded-md text-base">
                Comenzar gratis
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

      {/* Footer with Modals */}
      <FooterWithModals />
    </div>
  )
}
