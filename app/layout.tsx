import type React from "react"
import type { Metadata } from "next"
import { Merriweather } from "next/font/google"
import "./globals.css"

// Initialize the merriweather font
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Szwalnia tapicerki meblowej - szycie materacy i poduszek dekoracyjnych Jarocin - DENI",
  description:
    "Szwalnia tapicerki meblowej w Jarocinie oferuje profesjonalne szycie poduszek dekoracyjnych, materacy, narożników. Produkty szyte ze niebywałą staronnością. Zapraszamy do współpracy.",
  authors: [{ name: "wojciechsmolarek.pl" }],
  creator: "wojciechsmolarek.pl",
  publisher: "DENI Danuta Smolarek",
  robots: "index, follow",
  alternates: {
    canonical: "https://deni.com.pl/",
  },
  openGraph: {
    title: "Szwalnia tapicerki meblowej - szycie materacy i poduszek dekoracyjnych Jarocin - DENI",
    description:
      "Szwalnia tapicerki meblowej w Jarocinie oferuje profesjonalne szycie poduszek dekoracyjnych, materacy, narożników. Produkty szyte ze niebywałą staronnością. Zapraszamy do współpracy.",
    url: "https://deni.com.pl/",
    siteName: "DENI Danuta Smolarek",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Szwalnia tapicerki meblowej - szycie materacy i poduszek dekoracyjnych Jarocin - DENI",
    description:
      "Szwalnia tapicerki meblowej w Jarocinie oferuje profesjonalne szycie poduszek dekoracyjnych, materacy, narożników. Produkty szyte ze niebywałą staronnością. Zapraszamy do współpracy.",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={merriweather.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/deni-logo.png" />
      </head>
      <body className="font-merriweather">{children}</body>
    </html>
  )
}
