"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Cloud Kitchen", href: "/cloud-kitchen" },
  { name: "Reviews", href: "/reviews" },
  { name: "Our Process", href: "/process" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleMobileNavClick = (href: string) => {
    setMobileMenuOpen(false)
    // Small delay to allow animation to start before navigation
    setTimeout(() => {
      window.location.href = href
    }, 150)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-orange-200 dark:border-orange-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold font-playfair gradient-text">Golden Crust</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors hover:text-orange-600 dark:hover:text-orange-400 ${pathname === item.href ? "text-orange-600 dark:text-orange-400" : "text-gray-900 dark:text-gray-100"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <ThemeToggle />
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="https://wa.me/5551234567?text=Hi! I'd like to place an order">Order Now</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed inset-0 bg-white dark:bg-gray-900 animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-orange-200 dark:border-orange-800">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-2xl font-bold font-playfair gradient-text">Golden Crust</span>
                </Link>
                <Button
                  variant="ghost"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-2">
                  {navigation.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => handleMobileNavClick(item.href)}
                      className={`w-full text-left block rounded-xl px-4 py-4 text-lg font-semibold leading-7 transition-all duration-200 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:scale-105 ${pathname === item.href
                          ? "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20"
                          : "text-gray-900 dark:text-gray-100"
                        }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <div className="w-2 h-2 bg-orange-400 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-orange-200 dark:border-orange-800 space-y-4">
                <Button
                  asChild
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <a href="https://wa.me/5551234567?text=Hi! I'd like to place an order">Order Now via WhatsApp</a>
                </Button>

                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <a href="tel:5551234567" className="hover:text-orange-600 transition-colors">
                    Call: (555) 123-BAKE
                  </a>
                  <span>•</span>
                  <span>Open Daily 7AM-8PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
