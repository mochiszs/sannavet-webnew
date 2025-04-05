import { Phone, Mail, MapPin, Clock } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Contacto() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f3e6]">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#09465b]">Contacto</h1>

          <div className="max-w-3xl mx-auto bg-[#09465b] rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-8 text-[#f7f3e6]">Información de contacto</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <Phone className="h-8 w-8 text-[#f7f3e6] mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#f7f3e6]">Teléfono</h3>
                  <p className="text-lg text-[#f7f3e6]/90">+51 966 842 258</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-8 w-8 text-[#f7f3e6] mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#f7f3e6]">Correo electrónico</h3>
                  <p className="text-lg text-[#f7f3e6]/90">info@clinicaveterinaria.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-8 w-8 text-[#f7f3e6] mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#f7f3e6]">Dirección</h3>
                  <p className="text-lg text-[#f7f3e6]/90">Av. 13 de enero N°2201 La Huayrona SJL</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-8 w-8 text-[#f7f3e6] mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#f7f3e6]">Horario de atención</h3>
                  <p className="text-lg text-[#f7f3e6]/90">Lunes a Sábado: 9:00 am - 8:00 pm</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4 text-[#f7f3e6]">Síguenos en redes sociales</h3>
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f7f3e6] hover:text-[#f7f3e6]/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f7f3e6] hover:text-[#f7f3e6]/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f7f3e6] hover:text-[#f7f3e6]/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                    <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                    <path d="M15 8v8a4 4 0 0 1-4 4" />
                    <line x1="15" y1="4" x2="15" y2="12" />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#f7f3e6] rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#09465b]">Contáctanos por WhatsApp</h3>
              <p className="text-[#09465b]/80 mb-4">
                Para una atención más rápida, puedes contactarnos directamente por WhatsApp haciendo clic en el botón
                flotante o en el siguiente enlace:
              </p>
              <a
                href="https://wa.me/+51966842258"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors"
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
                  className="h-5 w-5 mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton phoneNumber="+51966842258" />
    </main>
  )
}

