import { Card, CardContent } from "@/components/ui/card"
import { Clock, Heart, Truck, Award } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every item is crafted with passion and the finest ingredients",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "Baked fresh every morning, ensuring the highest quality",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick delivery to your doorstep, keeping items warm and fresh",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in artisan baking and customer service",
  },
]

export default function AboutSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 parallax opacity-10"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair gradient-text mb-6">About Golden Crust</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2015, Golden Crust Bakery has been serving the community with artisan-quality baked goods. Our
              cloud kitchen concept allows us to bring fresh, warm pastries, breads, and cakes directly to your home or
              office.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in using only the finest ingredients, traditional techniques, and a whole lot of love in
              everything we create. From our signature sourdough to decadent chocolate cakes, every bite tells a story
              of craftsmanship and care.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800"
                >
                  <CardContent className="p-4 text-center">
                    <feature.icon className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="/placeholder.svg?height=300&width=250" alt="Baker at work" className="rounded-lg shadow-lg" />
              <img
                src="/placeholder.svg?height=300&width=250"
                alt="Fresh bread display"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
