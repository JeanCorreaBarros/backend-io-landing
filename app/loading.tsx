import { Database } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#050814] to-[#0a0f29] z-50">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 rounded-md bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mb-4">
          <Database className="h-8 w-8 text-white" />
        </div>
        <div className="text-white text-xl font-bold mb-8">backend.io</div>
        <div className="relative">
          <div className="h-2 w-48 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="mt-4 text-gray-400 text-sm">Cargando...</div>
      </div>
    </div>
  )
}
