import Link from "next/link"
import Image from "next/image"
import WhatsAppButton from "@/components/whatsapp-button"
import ImageSlider from "@/components/image-slider"

export default function Home() {
  const slides = [
    {
      url: "/placeholder.svg?height=500&width=1900",
      alt: "Veterinary clinic slide 1",
    },
    {
      url: "/placeholder.svg?height=500&width=1900",
      alt: "Veterinary clinic slide 2",
    },
    {
      url: "/placeholder.svg?height=500&width=1900",
      alt: "Veterinary clinic slide 3",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ImageSlider slides={slides} />

      <section className="bg-[#f7f3e6] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#09465b]">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#09465b] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Link href="/nosotros">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Sobre Nosotros"
                  width={500}
                  height={300}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#f7f3e6]">Sobre Nosotros</h3>
                  <p className="text-[#f7f3e6]/90">
                    Conozca más sobre nuestra clínica veterinaria y nuestra pasión por el cuidado de sus mascotas.
                  </p>
                </div>
              </Link>
            </div>

            <div className="bg-[#09465b] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Link href="/servicios">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Nuestros Servicios"
                  width={500}
                  height={300}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#f7f3e6]">Nuestros Servicios</h3>
                  <p className="text-[#f7f3e6]/90">
                    Ofrecemos una amplia gama de servicios veterinarios para mantener a su mascota saludable y feliz.
                  </p>
                </div>
              </Link>
            </div>

            <div className="bg-[#09465b] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Link href="/equipo">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Nuestro Equipo"
                  width={500}
                  height={300}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#f7f3e6]">Nuestro Equipo</h3>
                  <p className="text-[#f7f3e6]/90">
                    Conozca a nuestro equipo de profesionales dedicados al cuidado y bienestar de sus mascotas.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#09465b]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#f7f3e6]">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#f7f3e6] rounded-lg">
              <div className="w-16 h-16 bg-[#09465b] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#09465b]">Experiencia y Profesionalismo</h3>
              <p className="text-[#09465b]/80">
                Contamos con un equipo de veterinarios altamente calificados y con años de experiencia.
              </p>
            </div>

            <div className="text-center p-6 bg-[#f7f3e6] rounded-lg">
              <div className="w-16 h-16 bg-[#09465b] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#09465b]">Atención Personalizada</h3>
              <p className="text-[#09465b]/80">
                Cada mascota recibe un trato único y personalizado según sus necesidades específicas.
              </p>
            </div>

            <div className="text-center p-6 bg-[#f7f3e6] rounded-lg">
              <div className="w-16 h-16 bg-[#09465b] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#09465b]">Instalaciones Modernas</h3>
              <p className="text-[#09465b]/80">
                Contamos con equipos de última tecnología para diagnósticos precisos y tratamientos efectivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton phoneNumber="+51966842258" />
    </main>
  )
}

