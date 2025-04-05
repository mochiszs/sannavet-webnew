import Image from "next/image"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Sede() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f3e6]">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#09465b]">Nuestra Sede</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <div className="lg:col-span-2">
              <Image
                src="/placeholder.svg?height=256&width=1328"
                alt="Exterior de la clínica"
                width={1328}
                height={256}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="lg:row-span-2">
              <div className="h-full bg-[#09465b] rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4 text-[#f7f3e6]">Ubicación</h2>
                <p className="text-[#f7f3e6]/90 mb-4">Estamos ubicados en una zona céntrica y de fácil acceso:</p>
                <p className="text-[#f7f3e6]/90 mb-6">
                  <strong>Dirección:</strong>
                  <br />
                  Av. 13 de enero N°2201 La Huayrona SJL
                </p>
                <p className="text-[#f7f3e6]/90 mb-6">
                  <strong>Horario de atención:</strong>
                  <br />
                  Lunes a Sábado: 9:00 am - 8:00 pm
                </p>
                <p className="text-[#f7f3e6]/90">
                  <strong>Contacto:</strong>
                  <br />
                  Teléfono: +51 966 842 258
                  <br />
                  Email: info@clinicaveterinaria.com
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <Image
                src="/placeholder.svg?height=328&width=682"
                alt="Interior de la clínica"
                width={682}
                height={328}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="bg-[#09465b] rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#f7f3e6]">Cómo Llegar</h2>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249744.0323955765!2d-77.1231594!3d-12.0463731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses!2spe!4v1649457755201!5m2!1ses!2spe"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la clínica veterinaria"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton phoneNumber="+51966842258" />
    </main>
  )
}

