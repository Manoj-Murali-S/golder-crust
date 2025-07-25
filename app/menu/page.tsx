import MenuContent from "@/components/menu-content"

export default function MenuPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair gradient-text mb-4">Our Delicious Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our freshly baked goods, made with love and the finest ingredients
          </p>
        </div>
        <MenuContent />
      </div>
    </div>
  )
}
