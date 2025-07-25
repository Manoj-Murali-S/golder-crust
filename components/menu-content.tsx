"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, Filter, Plus, Minus, ShoppingCart, Leaf, Wheat, X, CheckCircle } from "lucide-react"
import { useCart } from "@/components/cart-provider"

const menuItems = [
  // Breads
  {
    id: 1,
    name: "Artisan Sourdough",
    description: "Traditional sourdough with perfect crust",
    price: 8.99,
    category: "Breads",
    image: "/placeholder.svg?height=300&width=300",
    dietary: [],
    popular: true,
  },
  {
    id: 2,
    name: "Gluten-Free Whole Wheat",
    description: "Healthy gluten-free bread, soft and nutritious",
    price: 9.99,
    category: "Breads",
    image: "/placeholder.svg?height=300&width=300",
    dietary: ["gluten-free"],
  },
  {
    id: 3,
    name: "Vegan French Baguette",
    description: "Classic French baguette with crispy crust, completely vegan",
    price: 5.99,
    category: "Breads",
    image: "/placeholder.svg?height=300&width=300",
    dietary: ["vegan"],
  },
  {
    id: 4,
    name: "Multigrain Bread",
    description: "Hearty bread packed with seeds and grains",
    price: 7.99,
    category: "Breads",
    image: "/placeholder.svg?height=300&width=300",
    dietary: ["vegan"],
  },

  // Cakes
  {
    id: 5,
    name: "Red Velvet Cake",
    description: "Moist red velvet with cream cheese frosting",
    price: 24.99,
    category: "Cakes",
    image: "/placeholder.svg?height=300&width=300",
    dietary: [],
    popular: true,
  },
  {
    id: 6,
    name: "Vegan Chocolate Cake",
    description: "Rich chocolate cake made with plant-based ingredients",
    price: 26.99,
    category: "Cakes",
    image: "/placeholder.svg?height=300&width=300",
    dietary: ["vegan"],
  },
  {
    id: 7,
    name: "Gluten-Free Vanilla Cake",
    description: "Classic vanilla cake perfect for celebrations, gluten-free",
    price: 25.99,
    category: "Cakes",
    image: "/placeholder.svg?height=300&width=300",
    dietary: ["gluten-free"],
  },
  {
    id: 8,
    name: "Carrot Cake",
    description: "Spiced carrot cake with cream cheese frosting",
    price: 23.99,
    category: "Cakes",
    image: "/placeholder.svg?height=300&width=300",
    dietary: [],
  },

  // Pastries
  {
    id: 9,
    name: "Chocolate Croissant",
    description: "Buttery croissant filled with dark chocolate",
    price: 4.5,
    category: "Pastries",
    image: "/placeholder.svg?height=300&width=300",
    dietary: [],
    popular: true,
  },
  {
    id: 10,
    name: "Vegan Almond Danish",
    description: "Flaky pastry topped with sliced almonds, completely vegan",
    price: 4.99,
    category: "Pastries",
    image: "/placeholder.svg?height=300&width=300",
    dietary: ["vegan"],
  },
  {
    id: 11,
    name: "Gluten-Free Apple Turnover",
    description: "Crispy pastry filled with spiced apples, gluten-free",
    price: 4.75,
    category: "Pastries",
    image: "/placeholder.svg?height=300&width=300",
    dietary: ["gluten-free"],
  },
  {
    id: 12,
    name: "Cinnamon Roll",
    description: "Soft roll swirled with cinnamon and sugar",
    price: 4.25,
    category: "Pastries",
    image: "/placeholder.svg?height=300&width=300",
    dietary: [],
  },

  // Beverages
  {
    id: 13,
    name: "Cappuccino",
    description: "Rich espresso with steamed milk and foam",
    price: 4.25,
    category: "Beverages",
    image: "/placeholder.svg?height=300&width=300",
    dietary: [],
  },
  {
    id: 14,
    name: "Oat Milk Latte",
    description: "Smooth espresso with steamed oat milk",
    price: 4.75,
    category: "Beverages",
    image: "/placeholder.svg?height=300&width=300",
    dietary: ["vegan"],
  },
  {
    id: 15,
    name: "Hot Chocolate",
    description: "Rich hot chocolate topped with whipped cream",
    price: 3.99,
    category: "Beverages",
    image: "/placeholder.svg?height=300&width=300",
    dietary: [],
  },
  {
    id: 16,
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice",
    price: 3.5,
    category: "Beverages",
    image: "/placeholder.svg?height=300&width=300",
    dietary: ["vegan", "gluten-free"],
  },
]

const categories = ["All", "Breads", "Cakes", "Pastries", "Beverages"]
const dietaryFilters = ["All", "vegan", "gluten-free"]

export default function MenuContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDietary, setSelectedDietary] = useState("All")
  const [displayedItems, setDisplayedItems] = useState(8)
  const [filteredItems, setFilteredItems] = useState(menuItems)
  const [selectedItem, setSelectedItem] = useState<(typeof menuItems)[0] | null>(null)
  const [orderNotes, setOrderNotes] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const [addingToCart, setAddingToCart] = useState<number | null>(null)

  const { state, dispatch } = useCart()

  useEffect(() => {
    let filtered = menuItems

    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    if (selectedDietary !== "All") {
      filtered = filtered.filter((item) => item.dietary.includes(selectedDietary))
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredItems(filtered)
    setDisplayedItems(8)
  }, [searchTerm, selectedCategory, selectedDietary])

  const loadMore = () => {
    setDisplayedItems((prev) => prev + 8)
  }

  const addToCart = (item: (typeof menuItems)[0], customQuantity?: number, notes?: string) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        category: item.category,
        image: item.image,
        quantity: customQuantity || 1,
        notes: notes || "",
      },
    })
  }

  const handleQuickAdd = (item: (typeof menuItems)[0]) => {
    setAddingToCart(item.id)
    addToCart(item)

    // Reset animation after 1 second
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

  const handleCustomOrder = () => {
    if (selectedItem) {
      addToCart(selectedItem, quantity, orderNotes)
      setSelectedItem(null)
      setOrderNotes("")
      setQuantity(1)
    }
  }

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
            {showFilters && <X className="w-4 h-4 ml-2" />}
          </Button>
        </div>

        {/* Desktop Filters - Always Visible */}
        <div className="hidden lg:flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Category:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-orange-600 hover:bg-orange-700 text-white"
                      : "border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Dietary:</span>
            <div className="flex flex-wrap gap-2">
              {dietaryFilters.map((dietary) => (
                <Button
                  key={dietary}
                  variant={selectedDietary === dietary ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDietary(dietary)}
                  className={
                    selectedDietary === dietary
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20"
                  }
                >
                  {dietary === "vegan" && <Leaf className="w-3 h-3 mr-1" />}
                  {dietary === "gluten-free" && <Wheat className="w-3 h-3 mr-1" />}
                  {dietary.charAt(0).toUpperCase() + dietary.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filters - Collapsible */}
        {showFilters && (
          <div className="lg:hidden space-y-4 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-orange-200 dark:border-orange-800">
            <div>
              <span className="text-sm font-medium mb-2 block">Category:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-orange-600 hover:bg-orange-700 text-white"
                        : "border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-sm font-medium mb-2 block">Dietary:</span>
              <div className="flex flex-wrap gap-2">
                {dietaryFilters.map((dietary) => (
                  <Button
                    key={dietary}
                    variant={selectedDietary === dietary ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDietary(dietary)}
                    className={
                      selectedDietary === dietary
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20"
                    }
                  >
                    {dietary === "vegan" && <Leaf className="w-3 h-3 mr-1" />}
                    {dietary === "gluten-free" && <Wheat className="w-3 h-3 mr-1" />}
                    {dietary.charAt(0).toUpperCase() + dietary.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.slice(0, displayedItems).map((item) => (
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
              <div className="absolute top-2 right-2 flex flex-col gap-1">
                <Badge className="bg-orange-600 text-white text-xs">{item.category}</Badge>
                {item.popular && <Badge className="bg-red-500 text-white text-xs">Popular</Badge>}
              </div>
              <div className="absolute top-2 left-2 flex gap-1">
                {item.dietary.includes("vegan") && (
                  <Badge className="bg-green-500 text-white text-xs flex items-center gap-1">
                    <Leaf className="w-3 h-3" />
                    Vegan
                  </Badge>
                )}
                {item.dietary.includes("gluten-free") && (
                  <Badge className="bg-blue-500 text-white text-xs flex items-center gap-1">
                    <Wheat className="w-3 h-3" />
                    GF
                  </Badge>
                )}
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{item.name}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">${item.price}</span>
              </div>
              <div className="flex gap-2">
                {getItemQuantityInCart(item.id) === 0 ? (
                  <Button
                    size="sm"
                    onClick={() => handleQuickAdd(item)}
                    disabled={addingToCart === item.id}
                    className={`flex-1 bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300 ${
                      addingToCart === item.id ? "scale-95 bg-green-600 hover:bg-green-600" : ""
                    }`}
                  >
                    {addingToCart === item.id ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-1 animate-bounce" />
                        Added!
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Quick Add
                      </>
                    )}
                  </Button>
                ) : (
                  <div className="flex-1 flex items-center justify-between bg-orange-50 dark:bg-orange-900/20 rounded-md p-2 border border-orange-200 dark:border-orange-800">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => updateCartItemQuantity(item.id, getItemQuantityInCart(item.id) - 1)}
                      className="h-8 w-8 p-0 hover:bg-orange-100 dark:hover:bg-orange-800/50"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-semibold text-orange-700 dark:text-orange-300 min-w-[2rem] text-center">
                      {getItemQuantityInCart(item.id)}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => updateCartItemQuantity(item.id, getItemQuantityInCart(item.id) + 1)}
                      className="h-8 w-8 p-0 hover:bg-orange-100 dark:hover:bg-orange-800/50"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                )}

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setSelectedItem(item)
                        setQuantity(getItemQuantityInCart(item.id) || 1)
                        setOrderNotes("")
                      }}
                      className="border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                    >
                      Customize
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Customize Your Order</DialogTitle>
                    </DialogHeader>
                    {selectedItem && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={selectedItem.image || "/placeholder.svg"}
                            alt={selectedItem.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-semibold">{selectedItem.name}</h4>
                            <p className="text-sm text-muted-foreground">${selectedItem.price}</p>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Quantity</label>
                          <div className="flex items-center gap-3">
                            <Button size="sm" variant="outline" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                            <Button size="sm" variant="outline" onClick={() => setQuantity(quantity + 1)}>
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Special Instructions</label>
                          <Textarea
                            placeholder="e.g., No nuts, extra chocolate, less sugar..."
                            value={orderNotes}
                            onChange={(e) => setOrderNotes(e.target.value)}
                            className="min-h-[80px]"
                          />
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-lg font-semibold">
                            Total: ${(selectedItem.price * quantity).toFixed(2)}
                          </span>
                          <Button onClick={handleCustomOrder} className="bg-orange-600 hover:bg-orange-700 text-white">
                            {getItemQuantityInCart(selectedItem.id) > 0 ? "Update Cart" : "Add to Cart"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      {displayedItems < filteredItems.length && (
        <div className="text-center">
          <Button onClick={loadMore} size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
            Load More Items
          </Button>
        </div>
      )}

      {/* No Results */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No items found matching your search criteria.</p>
        </div>
      )}
    </div>
  )
}
