import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Strona nie została znaleziona</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-playfair text-xl">
          <Link href="/" aria-label="Wróć na stronę główną">
            Wróć na stronę główną
          </Link>
        </Button>
      </div>
    </div>
  )
} 