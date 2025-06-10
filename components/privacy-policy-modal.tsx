"use client";
import { useEffect } from "react";

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-xl"
          onClick={onClose}
          aria-label="Zamknij"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Polityka prywatności</h2>
        <div className="max-h-96 overflow-y-auto">
          <section className="max-w-3xl mx-auto py-12 px-4">
            <p className="text-xl text-foreground mb-8 leading-relaxed">
              Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych użytkowników strony <strong>deni.com.pl</strong>. Administratorem danych jest Deni Danuta Smolarek, ul. Wojska Polskiego 47, 63-200 Jarocin, NIP: 6171201286, REGON: 366009374.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">1. Zakres zbieranych danych osobowych</h2>
            <p className="mb-6 text-foreground leading-relaxed">
              W formularzu kontaktowym prosimy o podanie następujących danych:
            </p>
            <ul className="list-disc ml-8 mt-2 mb-6 text-foreground leading-relaxed">
              <li>Imię (wymagane)</li>
              <li>Nazwisko (wymagane)</li>
              <li>Adres e-mail (wymagane)</li>
              <li>Telefon (opcjonalnie)</li>
              <li>Firma (opcjonalnie)</li>
              <li>Treść wiadomości (wymagane)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">2. Cele przetwarzania danych</h2>
            <p className="mb-6 text-foreground leading-relaxed">
              Dane osobowe przetwarzane są w celu odpowiedzi na zapytania, realizacji usług, prowadzenia komunikacji oraz wypełnienia obowiązków prawnych.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">3. Podstawa prawna przetwarzania danych</h2>
            <p className="mb-6 text-foreground leading-relaxed">
              Przetwarzanie odbywa się na podstawie zgody użytkownika, wykonania umowy lub działań przed jej zawarciem oraz wypełnienia obowiązków prawnych (art. 6 ust. 1 lit. a, b, c RODO).
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">4. Odbiorcy danych</h2>
            <p className="mb-6 text-foreground leading-relaxed">
              Dane mogą być przekazywane podmiotom świadczącym usługi IT, obsługę płatności, wystawianie faktur oraz organom uprawnionym na mocy przepisów prawa.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">5. Przechowywanie danych</h2>
            <p className="mb-6 text-foreground leading-relaxed">
              Dane przechowywane są przez okres niezbędny do realizacji celów, a następnie przez czas określony przepisami prawa.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">6. Prawa użytkownika</h2>
            <ul className="list-disc ml-8 mb-6 text-foreground leading-relaxed">
              <li>Dostęp do swoich danych</li>
              <li>Sprostowanie danych</li>
              <li>Usunięcie danych („prawo do bycia zapomnianym”)</li>
              <li>Ograniczenie przetwarzania</li>
              <li>Przenoszenie danych</li>
              <li>Sprzeciw wobec przetwarzania</li>
            </ul>
            <p className="mb-6 text-foreground leading-relaxed">
              W celu realizacji praw skontaktuj się: <a href="mailto:biuro@deni.com.pl" className="text-secondary underline">biuro@deni.com.pl</a>
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">7. Bezpieczeństwo danych</h2>
            <p className="mb-6 text-foreground leading-relaxed">
              Administrator stosuje odpowiednie środki techniczne i organizacyjne chroniące dane przed nieuprawnionym dostępem, utratą lub zniszczeniem.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">8. Pliki cookies</h2>
            <p className="mb-6 text-foreground leading-relaxed">
              Strona <strong>nie zbiera plików cookies</strong> ani nie wykorzystuje mechanizmów śledzących użytkowników.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">9. Zmiany w Polityce Prywatności</h2>
            <p className="mb-6 text-foreground leading-relaxed">
              Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. Data ostatniej aktualizacji: 09.06.2025.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">10. Kontakt</h2>
            <p className="text-foreground leading-relaxed">
              W przypadku pytań dotyczących Polityki Prywatności lub przetwarzania danych osobowych prosimy o kontakt:<br />
              <strong>e-mail:</strong> <a href="mailto:biuro@deni.com.pl" className="text-secondary underline">biuro@deni.com.pl</a><br />
              <strong>telefon:</strong> <a href="tel:607442592" className="text-secondary underline">607 442 592</a><br />
              <strong>adres:</strong> Deni Danuta Smolarek, ul. Wojska Polskiego 47, 63-200 Jarocin, Polska
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}