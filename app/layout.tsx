import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

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
    <html lang="pl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/deni-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Deni Danuta Smolarek",
              "image": "https://deni.com.pl/img/deni-logo.png",
              "url": "https://deni.com.pl",
              "telephone": "607442592",
              "email": "biuro@deni.com.pl",
              "vatID": "6171201286",
              "description": "Profesjonalna szwalnia tapicerki meblowej w Jarocinie. Specjalizujemy się w szyciu poduszek dekoracyjnych, materacy i narożników. Produkty szyte z niebywałą starannością.",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jarocin",
                "streetAddress": "Wojska Polskiego 47",
                "postalCode": "60-200",
                "addressRegion": "wielkopolskie",
                "addressCountry": "PL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.97266",
                "longitude": "17.50256"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "16:00"
                }
              ],
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "51.97266",
                  "longitude": "17.50256"
                },
                "geoRadius": "150000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Usługi szwalni",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Szycie poduszek dekoracyjnych"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Szycie materacy"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Szycie narożników"
                    }
                  }
                ]
              }
            })
          }}
        />
        <meta name="google-site-verification" content="lmlRm121sTSv3Z7XWm8PLJiY_rGxNiMjBGT1FDkJn4M" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
