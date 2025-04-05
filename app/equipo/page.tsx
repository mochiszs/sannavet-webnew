import Image from "next/image"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Equipo() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f3e6]">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#09465b]">Nuestro Equipo</h1>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#09465b] rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Dr. Carlos Rodríguez"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h2 className="text-3xl font-bold text-[#f7f3e6] mb-2">Dr. Carlos Rodríguez</h2>
                  <p className="text-xl text-[#f7f3e6]/80 font-semibold mb-6">Director Médico y Fundador</p>

                  <div className="space-y-4 text-[#f7f3e6]/90">
                    <p>
                      Con más de 20 años de experiencia en medicina veterinaria, el Dr. Rodríguez ha dedicado su vida al
                      cuidado y bienestar de los animales.
                    </p>
                    <p>
                      Graduado con honores de la Universidad Nacional Mayor de San Marcos, continuó su formación con
                      especializaciones en cirugía avanzada y medicina interna en Estados Unidos y Europa.
                    </p>
                    <p>
                      Su pasión por la medicina veterinaria lo ha llevado a participar en numerosos proyectos de
                      investigación y a publicar artículos en revistas especializadas.
                    </p>
                    <p>
                      "Mi misión es proporcionar el más alto nivel de atención médica a cada mascota, tratándolas con el
                      mismo cuidado y dedicación que daría a mis propios animales."
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="bg-[#f7f3e6] px-4 py-2 rounded-full text-[#09465b] font-semibold">
                      Cirugía Avanzada
                    </div>
                    <div className="bg-[#f7f3e6] px-4 py-2 rounded-full text-[#09465b] font-semibold">
                      Medicina Interna
                    </div>
                    <div className="bg-[#f7f3e6] px-4 py-2 rounded-full text-[#09465b] font-semibold">Cardiología</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#09465b] rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-[#f7f3e6]">Nuestro Compromiso</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-[#f7f3e6]/90 mb-4">
                  En nuestra clínica veterinaria, nos comprometemos a proporcionar el más alto nivel de atención médica
                  a cada mascota que atendemos. Entendemos que las mascotas son miembros importantes de la familia, y
                  merecen ser tratadas con el mismo cuidado, respeto y dignidad.
                </p>
                <p className="text-[#f7f3e6]/90 mb-4">
                  Nuestro equipo se mantiene actualizado con las últimas investigaciones y avances en medicina
                  veterinaria para ofrecer los tratamientos más efectivos y menos invasivos posibles. Nos esforzamos por
                  crear un ambiente acogedor y tranquilo para reducir el estrés de nuestros pacientes durante sus
                  visitas.
                </p>
                <p className="text-[#f7f3e6]/90">
                  Además de proporcionar atención médica excepcional, nos comprometemos a educar a los dueños de
                  mascotas sobre la prevención de enfermedades, nutrición adecuada y cuidados generales para ayudarles a
                  mantener a sus compañeros felices y saludables durante toda su vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton phoneNumber="+51966842258" />
    </main>
  )
}

