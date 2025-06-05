import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  const services = [
    {
      title: "Kanapy modułowe",
      description: "Profesjonalne wykonanie kanap modułowych dla producentów mebli",
      icon: "🛋️",
    },
    {
      title: "Poduszki",
      description: "Wysokiej jakości poduszki tapicerskie i dekoracyjne",
      icon: "🪑",
    },
    {
      title: "Łóżka",
      description: "Tapicerowane łóżka i elementy sypialniane",
      icon: "🛏️",
    },
    {
      title: "Komplety tapicerowane",
      description: "Kompletne zestawy mebli tapicerowanych",
      icon: "🏠",
    },
    {
      title: "Sofy i fotele",
      description: "Profesjonalne wykonanie sof i foteli dla biznesu",
      icon: "🪑",
    },
    {
      title: "Pufy",
      description: "Stylowe pufy i dodatki tapicerskie",
      icon: "⭕",
    },
  ]

  const features = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-factory h-6 w-6"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>',
      title: "Nowoczesny park maszynowy",
      description: "Dysponujemy najnowocześniejszym sprzętem do szycia przemysłowego",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-6 w-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
      title: "Doświadczony zespół",
      description: "Nasi specjaliści mają wieloletnie doświadczenie w branży",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench h-6 w-6"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
      title: "Duże wolumeny",
      description: "Realizujemy zamówienia seryjne i projekty w dużych ilościach",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-6 w-6"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>',
      title: "Najwyższa jakość",
      description: "Gwarantujemy wysoką jakość wykonania i terminowość",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/">
              <span className="logo text-secondary">DENI</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#uslugi"
              className="text-foreground/80 hover:text-secondary transition-colors font-corsiva text-xl"
            >
              Usługi
            </a>
            <a href="#o-nas" className="text-foreground/80 hover:text-secondary transition-colors font-corsiva text-xl">
              O nas
            </a>
            <a
              href="#kontakt"
              className="text-foreground/80 hover:text-secondary transition-colors font-corsiva text-xl"
            >
              Kontakt
            </a>
            <a
              href="#lokalizacja"
              className="text-foreground/80 hover:text-secondary transition-colors font-corsiva text-xl"
            >
              Lokalizacja
            </a>
          </nav>
          <Button asChild className="bg-secondary hover:bg-secondary/90 font-corsiva text-lg">
            <a href="#kontakt">Skontaktuj się</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-[6rem] bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-muted text-foreground hover:bg-muted border">📍 Jarocin, Polska</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Profesjonalna <span className="text-secondary">szwalnia tapicerki meblowej</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Doświadczona szwalnia realizująca zamówienia dla producentów mebli, łóżek, sof i narożników.
                Specjalizujemy się w projektach seryjnych i nietypowych zleceniach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 font-corsiva text-xl">
                  <a href="#uslugi">Zobacz nasze usługi →</a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 font-corsiva text-xl"
                >
                  <a href="#kontakt">Skontaktuj się z nami</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-2xl shadow-lg border p-8">
                <Image
                  src="/hero.webp"
                  alt="Kolorowe nici do szycia"
                  width={500}
                  height={400}
                  className="rounded-lg w-full"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-[6rem] bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Nasza oferta</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Oferujemy kompleksowe usługi szycia przemysłowego dla firm z całej Polski. Realizujemy zamówienia seryjne,
              prototypy oraz nietypowe projekty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border shadow-sm">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
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
      <section className="py-[6rem] bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Dlaczego wybierają nas firmy z całej Polski?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Jesteśmy sprawdzonym partnerem biznesowym dla producentów mebli, firm akustycznych i innych
              przedsiębiorstw wymagających wysokiej jakości usług szwalniczych.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl" dangerouslySetInnerHTML={{ __html: feature.icon }}>
                </div>
                <h3 className="text-2xl font-corsiva text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-[6rem] bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">O firmie Deni</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Deni to doświadczona szwalnia usługowa z Jarocina, która od lat realizuje zamówienia dla firm z całej
                Polski. Naszymi głównymi klientami są producenci mebli, łóżek, sof, a także firmy z branży akustycznej.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Wykonujemy pokrowce na głośniki oraz elementy tapicerskie. Nasza firma dysponuje nowoczesnym parkiem
                maszynowym i doświadczonym zespołem specjalistów, co pozwala nam realizować nawet najbardziej wymagające
                projekty w dużych wolumenach.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2 font-corsiva">8+</div>
                  <div className="text-foreground/80">Lat doświadczenia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2 font-corsiva">100+</div>
                  <div className="text-foreground/80">Zrealizowanych projektów</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card p-4 rounded-2xl shadow-lg border">
                <div className="flex justify-center items-center p-8">
                  <div className="logo text-7xl text-secondary">DENI</div>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <div className="w-4 h-4 rounded-full bg-secondary"></div>
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-4 h-4 rounded-full bg-accent"></div>
                  <div className="w-4 h-4 rounded-full bg-[#ff9f1c]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#ff69b4]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-[6rem] bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Skontaktuj się z nami</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Jesteś zainteresowany naszymi usługami? Skontaktuj się z nami już dziś i omówmy Twój projekt.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid md:grid-cols-1 gap-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-6 w-6 text-white"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <span className="text-xl mb-1">Adres</span>
                    <p className="text-foreground/80">Jarocin ul. Wojska polskiego 47, Polska</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-6 w-6 text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <span className="text-xl mb-1">Telefon</span>
                    <p className="text-foreground/80">
                      <a href="tel:+48607442592">+48 607 442 592</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-6 w-6 text-white"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <div>
                    <span className="text-xl mb-1">Email</span>
                    <p className="text-foreground/80">
                      <a href="mailto:biuro@deni.com.pl">biuro@deni.com.pl</a>
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
      <section id="lokalizacja" className="py-[6rem] bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Nasza lokalizacja</h2>
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
                ></iframe>
              </CardContent>
            </Card>
            <div className="text-center mt-6">
              <Button asChild variant="outline" className="font-corsiva text-lg">
                <a href="https://maps.app.goo.gl/EYheRyx9HGrt2aJeA" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin mr-2 h-4 w-4"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Otwórz w Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-foreground py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="logo text-secondary">DENI</span>
              </div>
              <p className="text-foreground/70">
                Profesjonalna szwalnia usługowa z Jarocina. Sprawdzony partner dla biznesu.
              </p>
            </div>

            <div>
              <span className="block text-xl font-corsiva mb-4">Usługi</span>
              <ul className="space-y-2 text-foreground/70">
                <li>Kanapy modułowe</li>
                <li>Poduszki tapicerskie</li>
                <li>Łóżka tapicerowane</li>
                <li>Komplety mebli</li>
              </ul>
            </div>

            <div>
              <span className="block text-xl font-corsiva mb-4">Kontakt</span>
              <ul className="space-y-2 text-foreground/70">
                <li>ul. Wojska polskiego 47</li>
                <li>63-200 Jarocin, Polska</li>
                <li>
                  email: <a href="mailto:biuro@deni.com.pl">biuro@deni.com.pl</a>
                </li>
                <li>
                  tel: <a href="tel:+48607442592">607 442 592</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-foreground/70">
            <p>
              &copy; 2025 Deni. Wszystkie prawa zastrzeżone. Projekt i wykonanie:{" "}
              <a href="https://www.wojciechsmolarek.pl/" className="underline">wojciechsmolarek.pl</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
