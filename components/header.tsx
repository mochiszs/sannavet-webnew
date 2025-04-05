"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#09465b] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
        <Link href="/" className="flex items-center">
           
          </Link>

          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <Menu size={24} />
          </button>

          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:underline underline-offset-4 decoration-2 transition-colors font-bold">
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="hover:underline underline-offset-4 decoration-2 transition-colors font-bold"
            >
              Nosotros
            </Link>
            <Link
              href="/servicios"
              className="hover:underline underline-offset-4 decoration-2 transition-colors font-bold"
            >
              Servicios
            </Link>
            <Link
              href="/equipo"
              className="hover:underline underline-offset-4 decoration-2 transition-colors font-bold"
            >
              Equipo
            </Link>
            <Link href="/sede" className="hover:underline underline-offset-4 decoration-2 transition-colors font-bold">
              Sede
            </Link>
            <Link
              href="/contacto"
              className="hover:underline underline-offset-4 decoration-2 transition-colors font-bold"
            >
              Contacto
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:underline underline-offset-4 decoration-2 transition-colors font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/nosotros"
                className="hover:underline underline-offset-4 decoration-2 transition-colors font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/servicios"
                className="hover:underline underline-offset-4 decoration-2 transition-colors font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/equipo"
                className="hover:underline underline-offset-4 decoration-2 transition-colors font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipo
              </Link>
              <Link
                href="/sede"
                className="hover:underline underline-offset-4 decoration-2 transition-colors font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Sede
              </Link>
              <Link
                href="/contacto"
                className="hover:underline underline-offset-4 decoration-2 transition-colors font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

