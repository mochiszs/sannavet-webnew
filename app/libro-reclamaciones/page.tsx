"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import WhatsAppButton from "@/components/whatsapp-button"

export default function LibroReclamaciones() {
  const [formData, setFormData] = useState({
    name: "",
    documentType: "dni",
    documentNumber: "",
    email: "",
    phone: "",
    address: "",
    complaintType: "reclamo",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert("Reclamo registrado correctamente. Nos pondremos en contacto pronto.")
    setFormData({
      name: "",
      documentType: "dni",
      documentNumber: "",
      email: "",
      phone: "",
      address: "",
      complaintType: "reclamo",
      description: "",
    })
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#f7f3e6]">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#09465b]">Libro de Reclamaciones</h1>

          <div className="max-w-3xl mx-auto bg-[#09465b] rounded-lg shadow-md p-8">
            <p className="text-[#f7f3e6]/90 mb-6">
              Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, este establecimiento cuenta
              con un Libro de Reclamaciones a tu disposición. Completa el siguiente formulario para registrar tu queja o
              reclamo.
            </p>

            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-bold mb-4 text-[#f7f3e6]">Datos del consumidor</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#f7f3e6] mb-1">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#f7f3e6] text-[#09465b]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="documentType" className="block text-sm font-semibold text-[#f7f3e6] mb-1">
                      Tipo de documento *
                    </label>
                    <select
                      id="documentType"
                      name="documentType"
                      value={formData.documentType}
                      onChange={(e) => handleChange(e as any)}
                      required
                      className="w-full rounded-md border border-input bg-[#f7f3e6] px-3 py-2 text-sm text-[#09465b] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="dni">DNI</option>
                      <option value="ce">CE</option>
                      <option value="passport">Pasaporte</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="documentNumber" className="block text-sm font-semibold text-[#f7f3e6] mb-1">
                      Número *
                    </label>
                    <Input
                      id="documentNumber"
                      name="documentNumber"
                      value={formData.documentNumber}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#f7f3e6] text-[#09465b]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#f7f3e6] mb-1">
                    Correo electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#f7f3e6] text-[#09465b]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#f7f3e6] mb-1">
                    Teléfono *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#f7f3e6] text-[#09465b]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-semibold text-[#f7f3e6] mb-1">
                  Dirección *
                </label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f7f3e6] text-[#09465b]"
                />
              </div>

              <h2 className="text-xl font-bold mb-4 text-[#f7f3e6]">Detalle de la reclamación</h2>

              <div className="mb-6">
                <p className="block text-sm font-semibold text-[#f7f3e6] mb-2">Tipo de reclamación *</p>
                <RadioGroup
                  value={formData.complaintType}
                  onValueChange={(value) => handleRadioChange("complaintType", value)}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="queja" id="queja" className="border-[#f7f3e6]" />
                    <Label htmlFor="queja" className="text-[#f7f3e6]">
                      Queja (disconformidad no relacionada a los productos o servicios)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="reclamo" id="reclamo" className="border-[#f7f3e6]" />
                    <Label htmlFor="reclamo" className="text-[#f7f3e6]">
                      Reclamo (disconformidad relacionada a los productos o servicios)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-semibold text-[#f7f3e6] mb-1">
                  Descripción *
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#f7f3e6] text-[#09465b]"
                  placeholder="Detalle su queja o reclamo aquí..."
                />
              </div>

              <Button type="submit" className="w-full bg-[#f7f3e6] hover:bg-[#f7f3e6]/90 text-[#09465b] font-bold">
                Enviar reclamación
              </Button>
            </form>
          </div>
        </div>
      </section>

      <WhatsAppButton phoneNumber="+51966842258" />
    </main>
  )
}

