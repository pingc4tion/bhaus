import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-background rounded-full px-6 py-3 flex items-center justify-between shadow-sm border border-border">
          <Link href="/" className="text-xl font-bold text-foreground">
            Bhaus
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              Home
            </Link>
            <Link href="/property" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              Property
            </Link>
            <Link href="/about" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              About Us
            </Link>
            <Link href="/faqs" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              {"FAQ's"}
            </Link>
          </nav>

          <Button className="rounded-full px-6">Contact Us</Button>
        </div>
      </div>
    </header>
  )
}
