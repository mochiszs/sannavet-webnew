import Image from "next/image"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Nosotros() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f3e6]">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#09465b]">Nosotros</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#09465b]">Nuestra Historia</h2>
              <p className="text-[#09465b]/80 mb-4">
                Fundada en 2010, nuestra clínica veterinaria nació con la misión de proporcionar atención médica de
                calidad a las mascotas de nuestra comunidad. Lo que comenzó como un pequeño consultorio ha crecido hasta
                convertirse en un centro veterinario completo con servicios integrales.
              </p>
              <p className="text-[#09465b]/80">
                A lo largo de los años, hemos atendido a miles de mascotas, construyendo relaciones duraderas con sus
                dueños y ganándonos la confianza de la comunidad gracias a nuestro compromiso con la excelencia y el
                cuidado compasivo.
              </p>
            </div>
            <div className="order-first md:order-last">
              <Image
                src="/nuevasfotos/NUESTRA HISTORIA_Mesa de trabajo 1.jpg"
                alt="Nuestra Historia"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-last md:order-first">
              <Image
                src="/nuevasfotos/MISIÓN_Mesa de trabajo 1.jpg"
                alt="Nuestra Misión"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#09465b]">Nuestra Misión</h2>
              <p className="text-[#09465b]/80 mb-4">
                Nuestra misión es proporcionar atención veterinaria excepcional y compasiva a cada mascota que
                atendemos. Nos esforzamos por mejorar la calidad de vida de los animales a través de servicios médicos
                avanzados, educación preventiva y un enfoque centrado en el cliente.
              </p>
              <p className="text-[#09465b]/80">
                Creemos que cada mascota merece ser tratada con respeto y dignidad, y trabajamos incansablemente para
                asegurar su bienestar y salud óptima en todas las etapas de su vida.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#09465b]">Nuestra Visión</h2>
              <p className="text-[#09465b]/80 mb-4">
                Aspiramos a ser reconocidos como líderes en atención veterinaria, estableciendo nuevos estándares de
                excelencia en el cuidado de animales. Nuestra visión es crear un entorno donde la innovación médica, la
                compasión y el servicio excepcional se combinen para ofrecer la mejor experiencia posible a nuestros
                pacientes y sus familias.
              </p>
              <p className="text-[#09465b]/80">
                Buscamos continuamente expandir nuestros servicios y adoptar las últimas tecnologías y tratamientos para
                mantenernos a la vanguardia de la medicina veterinaria.
              </p>
            </div>
            <div className="order-first md:order-last">
              <Image
                src="/nuevasfotos/VISIÓN_Mesa de trabajo 1.jpg"
                alt="Nuestra Visión"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton phoneNumber="+51966842258" />
    </main>
  )
}

