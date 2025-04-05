"use client"

import { useState } from "react"
import Image from "next/image"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  image: string
}

export default function Servicios() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const services: Service[] = [
    {
      id: 1,
      title: "Consultas",
      description:
        "Ofrecemos consultas generales y especializadas para diagnosticar y tratar diversas condiciones de salud en su mascota. Nuestros veterinarios realizan un examen completo y desarrollan un plan de tratamiento personalizado.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Cirugías",
      description:
        "Realizamos procedimientos quirúrgicos desde rutinarios hasta complejos, incluyendo esterilizaciones, castraciones, cirugías ortopédicas y de tejidos blandos. Contamos con un quirófano completamente equipado y monitoreo avanzado.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Exámenes de Laboratorio",
      description:
        "Nuestro laboratorio interno permite realizar análisis de sangre, orina, heces y citologías con resultados rápidos. Estos exámenes son fundamentales para el diagnóstico preciso de enfermedades y evaluación de la salud general.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Vacunación",
      description:
        "Ofrecemos programas de vacunación personalizados según la edad, estilo de vida y riesgos específicos de su mascota. Las vacunas son esenciales para prevenir enfermedades infecciosas potencialmente graves.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Baños y Grooming",
      description:
        "Nuestros servicios de peluquería incluyen baños terapéuticos, cortes de pelo, cepillado, limpieza de oídos y corte de uñas. Un buen aseo no solo mejora la apariencia sino también la salud de su mascota.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Pet Shop",
      description:
        "Disponemos de una tienda con alimentos premium, suplementos, accesorios y productos de cuidado seleccionados por nuestros veterinarios. Ofrecemos asesoramiento personalizado para elegir los productos más adecuados.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 7,
      title: "Desparasitación",
      description:
        "Implementamos programas de desparasitación interna y externa adaptados a las necesidades de cada mascota. Los parásitos pueden causar problemas de salud graves, por lo que la prevención regular es fundamental.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 8,
      title: "Otros Servicios",
      description:
        "Ofrecemos servicios adicionales como radiografías, ecografías, hospitalización, tratamientos dentales, fisioterapia y asesoramiento nutricional para cubrir todas las necesidades de salud de su mascota.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const handleServiceClick = (service: Service) => {
    setSelectedService(service)
  }

  const handleCloseModal = () => {
    setSelectedService(null)
  }

  const handleWhatsAppService = (serviceTitle: string) => {
    window.open(
      `https://wa.me/+51966842258?text=Hola, me gustaría obtener más información sobre el servicio de ${serviceTitle}`,
      "_blank",
    )
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#f7f3e6]">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#09465b]">Nuestros Servicios</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#09465b] rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleServiceClick(service)}
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex justify-center">
                  <h2 className="text-xl font-bold text-[#f7f3e6]">{service.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#f7f3e6] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <Image
                src={selectedService.image || "/placeholder.svg"}
                alt={selectedService.title}
                width={800}
                height={500}
                className="w-full h-60 object-cover"
              />
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 bg-[#09465b] text-white rounded-full p-1 shadow-md hover:bg-[#09465b]/80"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#09465b] mb-4">{selectedService.title}</h2>
              <p className="text-[#09465b]/80 mb-6">{selectedService.description}</p>
              <Button
                onClick={() => handleWhatsAppService(selectedService.title)}
                className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-md font-bold"
              >
                Consultar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}

      <WhatsAppButton phoneNumber="+51966842258" />
    </main>
  )
}

