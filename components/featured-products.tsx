"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { CheckCircle, Plus, Minus } from "lucide-react"

const featuredItems = [
  {
    id: 1,
    name: "Artisan Sourdough",
    description: "Traditional sourdough with a perfect crust and tangy flavor",
    price: 8.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Breads",
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    description: "Buttery, flaky pastry filled with rich dark chocolate",
    price: 4.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "Pastries",
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    description: "Moist red velvet cake with cream cheese frosting",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Cakes",
  },
  {
    id: 4,
    name: "Cappuccino",
    description: "Rich espresso with steamed milk and foam art",
    price: 4.25,
    image: "/placeholder.svg?height=300&width=300",
    category: "Beverages",
  },
]

export default function FeaturedProducts() {
  const { state, dispatch } = useCart()
  const [addingToCart, setAddingToCart] = useState<number | null>(null)

  const addToCart = (item: (typeof featuredItems)[0]) => {
    setAddingToCart(item.id)
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        category: item.category,
        image: item.image,
        quantity: 1,
        notes: "",
      },
    })

    setTimeout(() => {
      setAddingToCart(null)
    }, 1000)
  }

  const getItemQuantityInCart = (itemId: number) => {
    const cartItem = state.items.find((item) => item.id === itemId)
    return cartItem ? cartItem.quantity : 0
  }

  const updateCartItemQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch({ type: "REMOVE_ITEM", payload: itemId })
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id: itemId, quantity: newQuantity } })
    }
  }

  return (
    <section className="py-20 bg-white/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair gradient-text mb-4">Featured Favorites</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular items, freshly baked and loved by customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredItems.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {item.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{item.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">${item.price}</span>
                  {getItemQuantityInCart(item.id) === 0 ? (
                    <Button
                      size="sm"
                      onClick={() => addToCart(item)}
                      disabled={addingToCart === item.id}
                      className={`bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300 ${
                        addingToCart === item.id ? "scale-95 bg-green-600 hover:bg-green-600" : ""
                      }`}
                    >
                      {addingToCart === item.id ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-1 animate-bounce" />
                          Added!
                        </>
                      ) : (
                        "Add to Order"
                      )}
                    </Button>
                  ) : (
                    <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 rounded-md p-1 border border-orange-200 dark:border-orange-800">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => updateCartItemQuantity(item.id, getItemQuantityInCart(item.id) - 1)}
                        className="h-7 w-7 p-0 hover:bg-orange-100 dark:hover:bg-orange-800/50"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="font-semibold text-orange-700 dark:text-orange-300 min-w-[1.5rem] text-center text-sm">
                        {getItemQuantityInCart(item.id)}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => updateCartItemQuantity(item.id, getItemQuantityInCart(item.id) + 1)}
                        className="h-7 w-7 p-0 hover:bg-orange-100 dark:hover:bg-orange-800/50"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
            <Link href="/menu" className="flex items-center gap-2">
              View Full Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
