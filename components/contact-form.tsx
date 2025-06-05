"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setStatus({ type: "loading", message: "Wysyłanie..." })

    try {
      const submitData = {
        access_key: "de8bab74-8946-4c45-9602-df19feff51b4",
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        subject: `Wiadomość z formularza: deni.com.pl ${formData.email}`,
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submitData),
      })

      const result = await response.json()

      if (response.status === 200) {
        setStatus({
          type: "success",
          message: "Dziękujemy! Wiadomość została wysłana. Skontaktujemy się z Tobą w ciągu 24 godzin.",
        })

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      } else {
        setStatus({
          type: "error",
          message: `Wystąpił błąd: ${result.message || "Nieznany błąd"}`,
        })
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z nami telefonicznie.",
      })
    }

    setTimeout(() => {
      setStatus({ type: "idle", message: "" })
    }, 5000)
  }

  const isLoading = status.type === "loading"

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Wyślij zapytanie</CardTitle>
        <CardDescription>Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Imię *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Twoje imię"
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nazwisko *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Twoje nazwisko"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="twoj@email.pl"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefon</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+48 XXX XXX XXX"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Firma (opcjonalnie)</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Nazwa firmy"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Wiadomość *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Opisz swój projekt lub zadaj pytanie..."
              className="min-h-[120px]"
              required
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary/90 text-lg"
            disabled={isLoading}
          >
            {isLoading ? "Wysyłanie..." : "Wyślij zapytanie"}
          </Button>

          {status.message && (
            <div
              className={`text-center mt-4 p-3 rounded-md ${
                status.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : status.type === "error"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-blue-50 text-blue-700 border border-blue-200"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
