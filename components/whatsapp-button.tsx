"use client"

import { useState } from "react"
import { MessageCircle, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useCart } from "@/components/cart-provider"

export default function WhatsAppButton() {
  const { state, dispatch } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const generateWhatsAppMessage = () => {
    if (state.items.length === 0) {
      return "Hi! I'd like to place an order from Golden Crust Bakery."
    }

    let message = "Hi! I'd like to place the following order from Golden Crust Bakery:\n\n"

    state.items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   Quantity: ${item.quantity}\n`
      message += `   Price: $${(item.price * item.quantity).toFixed(2)}\n`
      if (item.notes) {
        message += `   Notes: ${item.notes}\n`
      }
      message += "\n"
    })

    message += `Total: $${state.total.toFixed(2)}\n\n`
    message += "Please confirm availability and delivery time. Thank you!"

    return message
  }

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/7358878515?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsCartOpen(false)
  }

  return (
    <>
      <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
        <DialogTrigger asChild>
          <Button className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg">
            <div className="relative">
              <MessageCircle className="w-6 h-6" />
              {state.itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center p-0">
                  {state.itemCount}
                </Badge>
              )}
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Your Order ({state.itemCount} items)
            </DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto">
            {state.items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">Add some delicious items from our menu!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <Card key={item.id} className="border-orange-200 dark:border-orange-800">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">${item.price} each</p>
                          {item.notes && (
                            <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">Note: {item.notes}</p>
                          )}
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-6 w-6 p-0 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-6 w-6 p-0 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {state.items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-orange-600 dark:text-orange-400">${state.total.toFixed(2)}</span>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => dispatch({ type: "CLEAR_CART" })} className="flex-1">
                  Clear Cart
                </Button>
                <Button onClick={handleWhatsAppOrder} className="flex-1 bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order via WhatsApp
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
