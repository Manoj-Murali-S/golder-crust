"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChefHat, ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const todaysSpecials = [
  {
    title: "Monday Special",
    item: "Artisan Sourdough Combo",
    description: "Fresh sourdough bread + butter croissant",
    price: "$12.99",
    originalPrice: "$15.99",
    image: "/placeholder.svg?height=400&width=600&text=Sourdough+Combo",
  },
  {
    title: "Tuesday Delight",
    item: "Chocolate Lover's Pack",
    description: "Chocolate croissant + hot chocolate + brownie",
    price: "$14.99",
    originalPrice: "$18.99",
    image: "/placeholder.svg?height=400&width=600&text=Chocolate+Pack",
  },
  {
    title: "Wednesday Wonder",
    item: "Fresh Pastry Trio",
    description: "Almond danish + apple turnover + cinnamon roll",
    price: "$11.99",
    originalPrice: "$14.99",
    image: "/placeholder.svg?height=400&width=600&text=Pastry+Trio",
  },
  {
    title: "Thursday Treat",
    item: "Baker's Choice Bundle",
    description: "Chef's selection of 3 premium items",
    price: "$16.99",
    originalPrice: "$21.99",
    image: "/placeholder.svg?height=400&width=600&text=Bakers+Choice",
  },
  {
    title: "Friday Feast",
    item: "Weekend Starter Pack",
    description: "2 croissants + coffee + fresh fruit tart",
    price: "$13.99",
    originalPrice: "$17.99",
    image: "/placeholder.svg?height=400&width=600&text=Weekend+Pack",
  },
  {
    title: "Weekend Special",
    item: "Family Breakfast Box",
    description: "4 croissants + 2 muffins + fresh orange juice",
    price: "$19.99",
    originalPrice: "$24.99",
    image: "/placeholder.svg?height=400&width=600&text=Breakfast+Box",
  },
]

export default function TodaysSpecial() {
  const [currentSpecial, setCurrentSpecial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSpecial((prev) => (prev + 1) % todaysSpecials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setCurrentSpecial((prev) => (prev + 1) % todaysSpecials.length)
  }

  const goToPrevious = () => {
    setCurrentSpecial((prev) => (prev - 1 + todaysSpecials.length) % todaysSpecials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSpecial(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const special = todaysSpecials[currentSpecial]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div
        className="absolute inset-0 parallax opacity-10 transition-all duration-1000"
        style={{
          backgroundImage: `url('${special.image}')`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-600/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <ChefHat className="w-5 h-5 text-white" />
            <span className="font-semibold text-white">Today's Special</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair gradient-text mb-4">Daily Fresh Deals</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <Button
              onClick={goToPrevious}
              size="icon"
              className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <Button
              onClick={goToNext}
              size="icon"
              className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </Button>
          </div>

          {/* Auto-play Control */}
          <div className="absolute top-4 right-4 z-20">
            <Button
              onClick={toggleAutoPlay}
              size="sm"
              variant="outline"
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-4 h-4 mr-1" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-1" />
                  Play
                </>
              )}
            </Button>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-orange-200 dark:border-orange-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4 text-gray-900 dark:text-gray-100">
                  {special.item}
                </h3>
                <p className="text-lg mb-6 text-muted-foreground">{special.description}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-bold text-orange-600 dark:text-orange-400">{special.price}</span>
                  <span className="text-xl text-gray-400 line-through">{special.originalPrice}</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save{" "}
                    {(
                      ((Number.parseFloat(special.originalPrice.slice(1)) - Number.parseFloat(special.price.slice(1))) /
                        Number.parseFloat(special.originalPrice.slice(1))) *
                      100
                    ).toFixed(0)}
                    %
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                    <Link href="/menu" className="flex items-center gap-2">
                      Order Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20 bg-transparent"
                  >
                    <Link href={`https://wa.me/5551234567?text=Hi! I'd like to order today's special: ${special.item}`}>
                      WhatsApp Order
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={special.image || "/placeholder.svg"}
                  alt={special.item}
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {todaysSpecials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSpecial ? "bg-orange-600 w-8" : "bg-gray-300 dark:bg-gray-600 hover:bg-orange-400"
                  }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          {isAutoPlaying && (
            <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
              <div
                className="h-full bg-orange-600 rounded-full transition-all duration-100 ease-linear"
                style={{
                  width: "100%",
                  animation: "progress 4s linear infinite",
                }}
              />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  )
}
