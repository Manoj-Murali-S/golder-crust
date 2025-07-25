import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Award, Heart } from "lucide-react"

const stats = [
  {
    icon: Clock,
    number: "18",
    label: "Hours Daily",
    description: "Fresh baking around the clock",
    color: "text-orange-500",
  },
  {
    icon: Users,
    number: "6",
    label: "Master Bakers",
    description: "Expert craftsmen with years of experience",
    color: "text-blue-500",
  },
  {
    icon: Award,
    number: "12",
    label: "Awards Won",
    description: "Recognition for excellence in baking",
    color: "text-yellow-500",
  },
  {
    icon: Heart,
    number: "∞",
    label: "Love & Passion",
    description: "The secret ingredient in everything we make",
    color: "text-red-500",
  },
]

export default function BehindTheScenes() {
  return (
    <section className="py-20 bg-white/50 dark:bg-gray-800/50 relative overflow-hidden">
      <div
        className="absolute inset-0 parallax opacity-5"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1200&text=Kitchen+Background')`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair gradient-text mb-4">Behind the Scenes</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the passion, craftsmanship, and dedication that goes into every single item we create. Our
            commitment to excellence drives us to perfect every recipe, every technique, and every moment of your
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800 text-center overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <stat.icon className={`w-12 h-12 mx-auto ${stat.color} relative z-10`} />
                </div>
                <div className={`text-4xl md:text-5xl font-bold font-playfair mb-2 ${stat.color}`}>{stat.number}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{stat.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-playfair text-gray-900 dark:text-gray-100">
              Our Commitment to Excellence
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Premium Ingredients</h4>
                  <p className="text-muted-foreground text-sm">
                    We source only the finest ingredients from trusted suppliers, ensuring every bite is exceptional.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Traditional Techniques</h4>
                  <p className="text-muted-foreground text-sm">
                    Our master bakers combine time-honored methods with modern innovation for perfect results.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Quality Control</h4>
                  <p className="text-muted-foreground text-sm">
                    Every item undergoes rigorous quality checks to maintain our high standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/placeholder.svg?height=250&width=200&text=Master+Baker"
                alt="Master baker at work"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
              <img
                src="/placeholder.svg?height=250&width=200&text=Fresh+Bread"
                alt="Fresh bread display"
                className="rounded-lg shadow-lg mt-8 hover:shadow-xl transition-shadow"
              />
              <img
                src="/placeholder.svg?height=250&width=200&text=Kitchen+Work"
                alt="Kitchen workspace"
                className="rounded-lg shadow-lg -mt-4 hover:shadow-xl transition-shadow"
              />
              <img
                src="/placeholder.svg?height=250&width=200&text=Award+Display"
                alt="Awards display"
                className="rounded-lg shadow-lg mt-4 hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-pulse" />
            <div
              className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
