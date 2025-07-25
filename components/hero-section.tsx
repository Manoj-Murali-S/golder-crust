"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/placeholder.svg?height=1080&width=1920&text=Fresh+Bakery+Hero')`,
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-orange-400/20 rounded-full blur-xl" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-24 h-24 bg-amber-400/20 rounded-full blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-sm font-medium">Rated 4.9/5 by 500+ customers</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 leading-tight animate-fade-in">
          Fresh Baked
          <span className="block gradient-text">Goodness</span>
          <span className="block">Daily</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Artisan bakery crafting the finest breads, cakes, and pastries with love. Now delivering fresh to your
          doorstep through our cloud kitchen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
            <Link href="/menu" className="flex items-center gap-2">
              View Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
          >
            <Link href="https://wa.me/7358878515?text=Hi! I'd like to place an order">Order Now</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in">
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
            <div className="text-sm text-gray-300">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
            <div className="text-sm text-gray-300">Fresh Items Daily</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">30min</div>
            <div className="text-sm text-gray-300">Average Delivery</div>
          </div>
        </div>
      </div>
    </section>
  )
}
