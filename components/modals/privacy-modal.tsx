"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/modal"

interface PrivacyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PrivacyModal({ open, onOpenChange }: PrivacyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Política de Privacidad</DialogTitle>
          <DialogDescription>Última actualización: 20 de mayo, 2025</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-gray-300 text-sm">
          <p>
            En backend.io, accesible desde backend.io, una de nuestras principales prioridades es la privacidad de
            nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que es
            recopilada y registrada por backend.io y cómo la utilizamos.
          </p>

          <h3 className="text-white text-base font-medium mt-4">1. Información que Recopilamos</h3>
          <p>
            Cuando te registras en nuestro sitio, se te puede pedir que proporciones cierta información de
            identificación personal que puede ser usada para contactarte o identificarte. La información de
            identificación personal puede incluir, pero no está limitada a:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Dirección de correo electrónico</li>
            <li>Nombre y apellido</li>
            <li>Número de teléfono</li>
            <li>Dirección, Estado, Provincia, Código Postal, Ciudad</li>
            <li>Cookies y datos de uso</li>
          </ul>

          <h3 className="text-white text-base font-medium mt-4">2. Cómo Usamos Tu Información</h3>
          <p>Utilizamos la información recopilada de varias formas, incluyendo para:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Proporcionar, operar y mantener nuestro sitio web</li>
            <li>Mejorar, personalizar y expandir nuestro sitio web</li>
            <li>Entender y analizar cómo utilizas nuestro sitio web</li>
            <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
            <li>
              Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios, para proporcionarte
              actualizaciones y otra información relacionada con el sitio web y para propósitos de marketing y
              promocionales
            </li>
            <li>Enviarte correos electrónicos</li>
            <li>Encontrar y prevenir fraudes</li>
          </ul>

          <h3 className="text-white text-base font-medium mt-4">3. Cookies</h3>
          <p>
            backend.io utiliza "cookies". Estas cookies se utilizan para almacenar información incluyendo las
            preferencias de los visitantes y las páginas del sitio web que el visitante accedió o visitó. La información
            es utilizada para optimizar la experiencia de los usuarios personalizando el contenido de nuestra página web
            basado en el tipo de navegador de los visitantes y/u otra información.
          </p>

          <h3 className="text-white text-base font-medium mt-4">4. Políticas de Privacidad de Terceros</h3>
          <p>
            La Política de Privacidad de backend.io no se aplica a otros anunciantes o sitios web. Por lo tanto, te
            aconsejamos consultar las respectivas Políticas de Privacidad de estos servidores de anuncios de terceros
            para obtener información más detallada.
          </p>

          <h3 className="text-white text-base font-medium mt-4">5. Derechos de Protección de Datos</h3>
          <p>
            Nos gustaría asegurarnos de que estás completamente consciente de todos tus derechos de protección de datos.
            Todo usuario tiene derecho a lo siguiente:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Derecho de acceso – Tienes derecho a solicitar copias de tus datos personales.</li>
            <li>
              Derecho de rectificación – Tienes derecho a solicitar que corrijamos cualquier información que creas que
              es inexacta. También tienes derecho a solicitar que completemos la información que creas que está
              incompleta.
            </li>
            <li>
              Derecho al olvido – Tienes derecho a solicitar que borremos tus datos personales, bajo ciertas
              condiciones.
            </li>
            <li>
              Derecho a restringir el procesamiento – Tienes derecho a solicitar que restrinjamos el procesamiento de
              tus datos personales, bajo ciertas condiciones.
            </li>
            <li>
              Derecho a oponerte al procesamiento – Tienes derecho a oponerte a nuestro procesamiento de tus datos
              personales, bajo ciertas condiciones.
            </li>
            <li>
              Derecho a la portabilidad de datos – Tienes derecho a solicitar que transfiramos los datos que hemos
              recopilado a otra organización, o directamente a ti, bajo ciertas condiciones.
            </li>
          </ul>

          <h3 className="text-white text-base font-medium mt-4">6. Información para Niños</h3>
          <p>
            Otra parte de nuestra prioridad es añadir protección para niños mientras usan internet. Animamos a los
            padres y tutores a observar, participar y/o monitorear y guiar su actividad en línea. backend.io no recopila
            a sabiendas ninguna Información Personal Identificable de niños menores de 13 años.
          </p>

          <h3 className="text-white text-base font-medium mt-4">7. Cambios a Esta Política de Privacidad</h3>
          <p>
            Podemos actualizar nuestra Política de Privacidad de vez en cuando. Por lo tanto, te aconsejamos revisar
            esta página periódicamente para cualquier cambio. Te notificaremos de cualquier cambio publicando la nueva
            Política de Privacidad en esta página. Estos cambios son efectivos inmediatamente después de ser publicados
            en esta página.
          </p>

          <h3 className="text-white text-base font-medium mt-4">8. Contáctanos</h3>
          <p>Si tienes alguna pregunta o sugerencia sobre nuestra Política de Privacidad, no dudes en contactarnos.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
