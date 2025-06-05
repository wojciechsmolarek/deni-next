import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Szwalnia tapicerki meblowej - szycie materacy i poduszek dekoracyjnych Jarocin - DENI",
  description:
    "Szwalnia tapicerki meblowej w Jarocinie oferuje profesjonalne szycie poduszek dekoracyjnych, materacy, narożników. Produkty szyte ze niebywałą staronnością. Zapraszamy do współpracy.",
  keywords:
    "szwalnia, tapicerka meblowa, poduszki dekoracyjne, materace, narożniki, Jarocin, szycie, meble tapicerowane",
  authors: [{ name: "DENI Szwalnia" }],
  creator: "DENI Szwalnia",
  publisher: "DENI Szwalnia",
  robots: "index, follow",
  alternates: {
    canonical: "https://deni.com.pl/",
  },
  openGraph: {
    title: "Szwalnia tapicerki meblowej - szycie materacy i poduszek dekoracyjnych Jarocin - DENI",
    description:
      "Szwalnia tapicerki meblowej w Jarocinie oferuje profesjonalne szycie poduszek dekoracyjnych, materacy, narożników. Produkty szyte ze niebywałą staronnością. Zapraszamy do współpracy.",
    url: "https://deni.com.pl/",
    siteName: "DENI Szwalnia",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Szwalnia tapicerki meblowej - szycie materacy i poduszek dekoracyjnych Jarocin - DENI",
    description:
      "Szwalnia tapicerki meblowej w Jarocinie oferuje profesjonalne szycie poduszek dekoracyjnych, materacy, narożników. Produkty szyte ze niebywałą staronnością. Zapraszamy do współpracy.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://deni.com.pl/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
