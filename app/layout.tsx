import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display ,Lora} from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { CartProvider } from "@/components/cart-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Lora({ subsets: ["latin"], variable: "--font-playfair" })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Golden Crust Bakery - Fresh Baked Goods & Cloud Kitchen",
  description:
    "Artisan bakery specializing in fresh breads, cakes, pastries, and beverages. Cloud kitchen services with delivery and pickup options.",
  keywords: "bakery, fresh bread, cakes, pastries, cloud kitchen, delivery, pickup",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CartProvider>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
              <Navbar />
              <main>{children}</main>
              <Footer />
              <WhatsAppButton />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
