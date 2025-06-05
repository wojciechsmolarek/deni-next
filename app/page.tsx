import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import { 
  Sofa, 
  Square, 
  Bed, 
  Home, 
  Armchair, 
  Circle, 
  Factory, 
  Users, 
  Package, 
  CircleCheckBig, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Kanapy modułowe",
      description: "Profesjonalne wykonanie kanap modułowych dla producentów mebli",
      icon: <Sofa className="h-8 w-8" />,
    },
    {
      title: "Poduszki",
      description: "Wysokiej jakości poduszki tapicerskie i dekoracyjne",
      icon: <Square className="h-8 w-8" />,
    },
    {
      title: "Łóżka",
      description: "Tapicerowane łóżka i elementy sypialniane",
      icon: <Bed className="h-8 w-8" />,
    },
    {
      title: "Komplety tapicerowane",
      description: "Kompletne zestawy mebli tapicerowanych",
      icon: <Home className="h-8 w-8" />,
    },
    {
      title: "Sofy i fotele",
      description: "Profesjonalne wykonanie sof i foteli dla biznesu",
      icon: <Armchair className="h-8 w-8" />,
    },
    {
      title: "Pufy",
      description: "Stylowe pufy i dodatki tapicerskie",
      icon: <Circle className="h-8 w-8" />,
    },
  ]

  const features = [
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Nowoczesny park maszynowy",
      description: "Dysponujemy najnowocześniejszym sprzętem do szycia przemysłowego",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Doświadczony zespół",
      description: "Nasi specjaliści mają wieloletnie doświadczenie w branży",
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Duże wolumeny",
      description: "Realizujemy zamówienia seryjne i projekty w dużych ilościach",
    },
    {
      icon: <CircleCheckBig className="h-6 w-6" />,
      title: "Najwyższa jakość",
      description: "Gwarantujemy wysoką jakość wykonania i terminowość",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50" role="banner">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" aria-label="Strona główna DENI">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="162" height="60" viewBox="0 0 162 60" preserveAspectRatio="xMidYMid meet" className="h-8 w-auto">
                <g transform="translate(0,60) scale(0.1,-0.1)" fill="currentColor" stroke="none">
                  <path d="M1277 470 c-26 -21 -56 -98 -72 -184 -4 -20 -11 -39 -16 -41 -4 -3 -25 47 -45 112 -21 65 -38 119 -39 120 -5 9 -121 -29 -139 -47 -28 -25 -40 -74 -26 -101 18 -33 30 -21 24 24 -5 36 -2 45 18 63 12 12 38 25 56 29 27 6 32 4 32 -13 0 -30 -48 -210 -65 -242 -19 -37 -51 -47 -76 -24 -15 14 -22 15 -32 5 -9 -10 -8 -15 7 -27 39 -28 93 -9 120 44 7 15 23 69 36 120 12 51 25 91 27 88 3 -3 18 -44 34 -91 16 -47 37 -102 48 -122 l18 -36 13 54 c27 116 62 225 78 242 10 11 27 17 46 15 22 -2 31 1 31 12 0 24 -48 24 -78 0z"/>
                  <path d="M322 457 c-53 -20 -99 -63 -118 -112 -16 -43 -16 -48 -1 -81 9 -19 23 -34 32 -34 21 0 19 26 -5 50 -26 26 -25 49 3 91 44 66 151 98 217 64 42 -22 60 -53 60 -106 0 -83 -67 -149 -152 -149 l-38 0 15 38 c16 43 58 203 53 207 -2 2 -15 1 -29 -2 -20 -4 -25 -10 -22 -23 5 -18 -32 -170 -49 -203 -5 -10 -19 -22 -31 -26 -15 -6 3 -10 65 -15 109 -10 162 10 205 75 39 59 40 144 3 184 -48 52 -132 69 -208 42z"/>
                  <path d="M666 460 c-68 -21 -113 -103 -90 -164 7 -17 34 -22 34 -6 0 5 -5 20 -11 34 -22 47 19 105 85 122 31 7 32 0 11 -77 -53 -185 -55 -189 -80 -195 -52 -13 -20 -19 103 -19 138 0 166 9 160 48 -5 32 -26 32 -30 0 -3 -25 -7 -28 -38 -26 -103 5 -130 7 -130 9 0 2 10 33 21 69 l22 65 39 0 c28 0 41 -5 45 -17 6 -15 8 -14 14 7 4 14 7 34 8 45 0 18 0 19 -10 3 -7 -12 -22 -18 -49 -18 -44 0 -45 1 -28 65 l12 45 54 0 c47 0 55 -3 60 -22 5 -21 6 -21 13 -2 17 42 13 44 -88 43 -54 0 -111 -5 -127 -9z"/>
                  <path d="M1369 454 c-11 -13 -9 -14 14 -9 l26 7 -30 -114 c-16 -62 -32 -121 -35 -130 -3 -9 -18 -20 -34 -23 -53 -12 -32 -25 40 -25 40 0 70 4 70 10 0 6 -9 10 -20 10 -11 0 -20 3 -20 6 0 3 14 62 32 131 30 118 33 125 60 130 48 10 30 23 -31 23 -41 0 -62 -5 -72 -16z"/>
                </g>
              </svg>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Menu główne">
            <a
              href="#uslugi"
              className="text-foreground/80 hover:text-secondary transition-colors font-playfair text-xl"
              aria-label="Przejdź do sekcji usługi"
            >
              Usługi
            </a>
            <a 
              href="#o-nas" 
              className="text-foreground/80 hover:text-secondary transition-colors font-playfair text-xl"
              aria-label="Przejdź do sekcji o nas"
            >
              O nas
            </a>
            <a
              href="#kontakt"
              className="text-foreground/80 hover:text-secondary transition-colors font-playfair text-xl"
              aria-label="Przejdź do sekcji kontakt"
            >
              Kontakt
            </a>
            <a
              href="#lokalizacja"
              className="text-foreground/80 hover:text-secondary transition-colors font-playfair text-xl"
              aria-label="Przejdź do sekcji lokalizacja"
            >
              Lokalizacja
            </a>
          </nav>
          <Button asChild className="bg-secondary hover:bg-secondary/90 font-playfair text-lg">
            <a href="#kontakt" aria-label="Przejdź do formularza kontaktowego">Skontaktuj się</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-[6rem] bg-gradient-to-br from-background to-muted" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-muted text-foreground hover:bg-muted border">📍 Jarocin, Polska</Badge>
              <h1 id="hero-heading" className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Profesjonalna <span className="text-secondary">szwalnia tapicerki meblowej</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Doświadczona szwalnia realizująca zamówienia dla producentów mebli, łóżek, sof i narożników.
                Specjalizujemy się w projektach seryjnych i nietypowych zleceniach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 font-playfair text-xl">
                  <a href="#uslugi" aria-label="Przejdź do sekcji usługi">Zobacz nasze usługi →</a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 font-playfair text-xl"
                >
                  <a href="#kontakt" aria-label="Przejdź do formularza kontaktowego">Skontaktuj się z nami</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-2xl shadow-lg border p-8">
                <Image
                  src="/img/regal-z-nicmi-do-szycia.webp"
                  alt="Kolorowe nici do szycia - przykładowe materiały używane w naszej szwalni"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-[400px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-[6rem] bg-background" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Nasza oferta</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Oferujemy kompleksowe usługi szycia przemysłowego dla firm z całej Polski. Realizujemy zamówienia seryjne,
              prototypy oraz nietypowe projekty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Lista usług">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border shadow-sm" role="listitem">
                <CardHeader>
                  <div className="text-4xl mb-4" aria-hidden="true">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/80">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-[6rem] bg-muted" aria-labelledby="features-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Dlaczego wybierają nas firmy z całej Polski?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Jesteśmy sprawdzonym partnerem biznesowym dla producentów mebli, firm akustycznych i innych
              przedsiębiorstw wymagających wysokiej jakości usług szwalniczych.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Lista zalet">
            {features.map((feature, index) => (
              <div key={index} className="text-center" role="listitem">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-playfair text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-[6rem] bg-background" aria-labelledby="about-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="about-heading" className="text-3xl lg:text-5xl font-bold text-foreground mb-6">O firmie Deni</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Deni to doświadczona szwalnia usługowa z Jarocina, która od lat realizuje zamówienia dla firm z całej
                Polski. Naszymi głównymi klientami są producenci mebli, łóżek, sof, a także firmy z branży akustycznej.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Wykonujemy pokrowce na głośniki oraz elementy tapicerskie. Nasza firma dysponuje nowoczesnym parkiem
                maszynowym i doświadczonym zespołem specjalistów, co pozwala nam realizować nawet najbardziej wymagające
                projekty w dużych wolumenach.
              </p>
              <div className="grid grid-cols-2 gap-6" role="list" aria-label="Statystyki firmy">
                <div role="listitem">
                  <div className="text-3xl font-bold text-secondary mb-2 font-playfair">8+</div>
                  <div className="text-foreground/80">Lat doświadczenia</div>
                </div>
                <div role="listitem">
                  <div className="text-3xl font-bold text-secondary mb-2 font-playfair">100+</div>
                  <div className="text-foreground/80">Zrealizowanych projektów</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card p-4 rounded-2xl shadow-lg border">
                <div className="relative w-full h-96 overflow-hidden rounded-lg">
                  <Image
                    src="/img/stanowisko-do-szycia-tapicerki-meblowej.webp"
                    alt="Stanowisko do szycia tapicerki meblowej"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-[6rem] bg-muted" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="contact-heading" className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Skontaktuj się z nami</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Jesteś zainteresowany naszymi usługami? Skontaktuj się z nami już dziś i omówmy Twój projekt.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid md:grid-cols-1 gap-8" role="list" aria-label="Informacje kontaktowe">
                <div className="flex items-center space-x-4" role="listitem">
                  <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" aria-hidden="true">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xl mb-1">Adres</span>
                    <p className="text-foreground/80">Jarocin ul. Wojska polskiego 47, Polska</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4" role="listitem">
                  <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" aria-hidden="true">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xl mb-1">Telefon</span>
                    <p className="text-foreground/80">
                      <a href="tel:+48607442592" aria-label="Zadzwoń do nas">+48 607 442 592</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4" role="listitem">
                  <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" aria-hidden="true">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xl mb-1">Email</span>
                    <p className="text-foreground/80">
                      <a href="mailto:biuro@deni.com.pl" aria-label="Napisz do nas">biuro@deni.com.pl</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="lokalizacja" className="py-[6rem] bg-background" aria-labelledby="location-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="location-heading" className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Nasza lokalizacja</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Znajdziesz nas w Jarocinie. Zapraszamy do odwiedzenia naszej szwalni.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.253565037896!2d17.507154!3d51.965801899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470523bde81441c3%3A0xb082fb990b8d6cf8!2sDENI%20-%20Danuta%20Smolarek!5e0!3m2!1spl!2spl!4v1749113469199!5m2!1spl!2spl"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja DENI w Jarocinie"
                  aria-label="Mapa z lokalizacją DENI w Jarocinie"
                ></iframe>
              </CardContent>
            </Card>
            <div className="text-center mt-6">
              <Button asChild variant="outline" className="font-playfair text-lg">
                <a 
                  href="https://maps.app.goo.gl/EYheRyx9HGrt2aJeA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Otwórz lokalizację w Google Maps"
                >
                  <MapPin className="lucide lucide-map-pin mr-2 h-4 w-4" aria-hidden="true" /> Otwórz w Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-foreground py-12 border-t" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="162" height="60" viewBox="0 0 162 60" preserveAspectRatio="xMidYMid meet" className="h-8 w-auto">
                <g transform="translate(0,60) scale(0.1,-0.1)" fill="currentColor" stroke="none">
                  <path d="M1277 470 c-26 -21 -56 -98 -72 -184 -4 -20 -11 -39 -16 -41 -4 -3 -25 47 -45 112 -21 65 -38 119 -39 120 -5 9 -121 -29 -139 -47 -28 -25 -40 -74 -26 -101 18 -33 30 -21 24 24 -5 36 -2 45 18 63 12 12 38 25 56 29 27 6 32 4 32 -13 0 -30 -48 -210 -65 -242 -19 -37 -51 -47 -76 -24 -15 14 -22 15 -32 5 -9 -10 -8 -15 7 -27 39 -28 93 -9 120 44 7 15 23 69 36 120 12 51 25 91 27 88 3 -3 18 -44 34 -91 16 -47 37 -102 48 -122 l18 -36 13 54 c27 116 62 225 78 242 10 11 27 17 46 15 22 -2 31 1 31 12 0 24 -48 24 -78 0z"/>
                  <path d="M322 457 c-53 -20 -99 -63 -118 -112 -16 -43 -16 -48 -1 -81 9 -19 23 -34 32 -34 21 0 19 26 -5 50 -26 26 -25 49 3 91 44 66 151 98 217 64 42 -22 60 -53 60 -106 0 -83 -67 -149 -152 -149 l-38 0 15 38 c16 43 58 203 53 207 -2 2 -15 1 -29 -2 -20 -4 -25 -10 -22 -23 5 -18 -32 -170 -49 -203 -5 -10 -19 -22 -31 -26 -15 -6 3 -10 65 -15 109 -10 162 10 205 75 39 59 40 144 3 184 -48 52 -132 69 -208 42z"/>
                  <path d="M666 460 c-68 -21 -113 -103 -90 -164 7 -17 34 -22 34 -6 0 5 -5 20 -11 34 -22 47 19 105 85 122 31 7 32 0 11 -77 -53 -185 -55 -189 -80 -195 -52 -13 -20 -19 103 -19 138 0 166 9 160 48 -5 32 -26 32 -30 0 -3 -25 -7 -28 -38 -26 -103 5 -130 7 -130 9 0 2 10 33 21 69 l22 65 39 0 c28 0 41 -5 45 -17 6 -15 8 -14 14 7 4 14 7 34 8 45 0 18 0 19 -10 3 -7 -12 -22 -18 -49 -18 -44 0 -45 1 -28 65 l12 45 54 0 c47 0 55 -3 60 -22 5 -21 6 -21 13 -2 17 42 13 44 -88 43 -54 0 -111 -5 -127 -9z"/>
                  <path d="M1369 454 c-11 -13 -9 -14 14 -9 l26 7 -30 -114 c-16 -62 -32 -121 -35 -130 -3 -9 -18 -20 -34 -23 -53 -12 -32 -25 40 -25 40 0 70 4 70 10 0 6 -9 10 -20 10 -11 0 -20 3 -20 6 0 3 14 62 32 131 30 118 33 125 60 130 48 10 30 23 -31 23 -41 0 -62 -5 -72 -16z"/>
                </g>
              </svg>
              </div>
              <p className="text-foreground/70">
                Profesjonalna szwalnia usługowa z Jarocina. Sprawdzony partner dla biznesu.
              </p>
            </div>

            <div>
              <span className="block text-xl font-playfair mb-4">Usługi</span>
              <ul className="space-y-2 text-foreground/70" role="list" aria-label="Lista usług">
                <li>Kanapy modułowe</li>
                <li>Poduszki tapicerskie</li>
                <li>Łóżka tapicerowane</li>
                <li>Komplety mebli</li>
              </ul>
            </div>

            <div>
              <span className="block text-xl font-playfair mb-4">Kontakt</span>
              <ul className="space-y-2 text-foreground/70" role="list" aria-label="Dane kontaktowe">
                <li>ul. Wojska polskiego 47</li>
                <li>63-200 Jarocin, Polska</li>
                <li>NIP: 6171201286</li>
                <li>REGON: 366009374</li>
                <li>
                  email: <a href="mailto:biuro@deni.com.pl" aria-label="Napisz do nas">biuro@deni.com.pl</a>
                </li>
                <li>
                  tel: <a href="tel:+48607442592" aria-label="Zadzwoń do nas">607 442 592</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-foreground/70">
            <p>
              &copy; 2025 Deni. Wszystkie prawa zastrzeżone. Projekt i wykonanie:{" "}
              <a href="https://www.wojciechsmolarek.pl/" className="underline" aria-label="Strona autora projektu">wojciechsmolarek.pl</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
