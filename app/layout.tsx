import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

// Initialize the Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
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
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={playfair.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/deni-logo.png" />
      </head>
      <body className="font-playfair">{children}</body>
    </html>
  )
}
