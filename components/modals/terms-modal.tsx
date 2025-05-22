"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/modal"

interface TermsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TermsModal({ open, onOpenChange }: TermsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Términos y Condiciones</DialogTitle>
          <DialogDescription>Última actualización: 20 de mayo, 2025</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-gray-300 text-sm">
          <p>
            Bienvenido a backend.io. Estos términos y condiciones describen las reglas y regulaciones para el uso del
            sitio web y servicios de backend.io.
          </p>

          <h3 className="text-white text-base font-medium mt-4">1. Aceptación de los Términos</h3>
          <p>
            Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes
            usando el sitio web de backend.io si no aceptas todos los términos y condiciones establecidos en esta
            página.
          </p>

          <h3 className="text-white text-base font-medium mt-4">2. Licencia de Uso</h3>
          <p>
            A menos que se indique lo contrario, backend.io y/o sus licenciantes poseen los derechos de propiedad
            intelectual de todo el material en backend.io. Todos los derechos de propiedad intelectual están reservados.
          </p>

          <h3 className="text-white text-base font-medium mt-4">3. Restricciones</h3>
          <p>Específicamente, está prohibido:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Publicar cualquier material del sitio web en otros medios</li>
            <li>Vender, alquilar o sublicenciar material del sitio web</li>
            <li>Reproducir, duplicar o copiar material del sitio web</li>
            <li>Redistribuir contenido de backend.io</li>
          </ul>

          <h3 className="text-white text-base font-medium mt-4">4. Limitación de Responsabilidad</h3>
          <p>
            En ningún caso backend.io, ni sus directores, empleados, socios, agentes, proveedores o afiliados serán
            responsables por cualquier daño indirecto, incidental, especial, consecuente o punitivo, incluyendo sin
            limitación, pérdida de beneficios, datos, uso, buena voluntad, u otras pérdidas intangibles, resultantes de:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>El uso o la imposibilidad de usar el servicio</li>
            <li>Cualquier acceso no autorizado a sus datos transmitidos</li>
            <li>Declaraciones o conducta de cualquier tercero en el servicio</li>
            <li>Cualquier otro asunto relacionado con el servicio</li>
          </ul>

          <h3 className="text-white text-base font-medium mt-4">5. Precisión de Materiales</h3>
          <p>
            Los materiales que aparecen en el sitio web de backend.io podrían incluir errores técnicos, tipográficos o
            fotográficos. backend.io no garantiza que cualquiera de los materiales en su sitio web sean precisos,
            completos o actuales. backend.io puede realizar cambios en los materiales contenidos en su sitio web en
            cualquier momento sin previo aviso.
          </p>

          <h3 className="text-white text-base font-medium mt-4">6. Enlaces</h3>
          <p>
            backend.io no ha revisado todos los sitios enlazados a su sitio web y no es responsable por los contenidos
            de cualquier sitio enlazado. La inclusión de cualquier enlace no implica aprobación por parte de backend.io
            del sitio. El uso de cualquier sitio web enlazado es bajo el propio riesgo del usuario.
          </p>

          <h3 className="text-white text-base font-medium mt-4">7. Modificaciones</h3>
          <p>
            backend.io puede revisar estos términos de servicio del sitio web en cualquier momento sin previo aviso. Al
            usar este sitio web, aceptas estar sujeto a la versión actual de estos términos de servicio.
          </p>

          <h3 className="text-white text-base font-medium mt-4">8. Ley Aplicable</h3>
          <p>
            Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de España y te sometes
            irrevocablemente a la jurisdicción exclusiva de los tribunales en esa ubicación.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
