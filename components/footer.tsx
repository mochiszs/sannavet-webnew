import Link from "next/link"
import { Facebook, Instagram, Clock, MapPin, BookOpen } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#09465b] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ubicación</h3>
            <div className="flex items-start mb-3">
              <MapPin className="mr-2 h-5 w-5 flex-shrink-0 mt-1" />
              <p>Av. 13 de enero N°2201 La Huayrona SJL</p>
            </div>
            <div className="mt-6">
              <Link href="/libro-reclamaciones" className="flex items-center hover:text-[#f7f3e6] transition-colors">
                <BookOpen className="mr-2 h-5 w-5" />
                <span>Libro de Reclamaciones</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
            <div className="flex items-start mb-3">
              <Clock className="mr-2 h-5 w-5 flex-shrink-0 mt-1" />
              <div>
                <p>Lunes a Sábado: 9:00 am - 8:00 pm</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f7f3e6] transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f7f3e6] transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f7f3e6] transition-colors"
              >
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
                  className="h-6 w-6"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M15 8v8a4 4 0 0 1-4 4" />
                  <line x1="15" y1="4" x2="15" y2="12" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Clínica Veterinaria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

