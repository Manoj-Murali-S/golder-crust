import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Package, Truck, Clock, CheckCircle, Star, Thermometer, Shield } from "lucide-react"

const processSteps = [
  {
    id: 1,
    icon: ChefHat,
    title: "Order Received",
    description: "Your order is confirmed and sent to our master bakers",
    details: ["Order verification", "Ingredient preparation", "Recipe selection", "Quality check initiation"],
    time: "Instant",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    id: 2,
    icon: Thermometer,
    title: "Fresh Baking",
    description: "Our expert bakers craft your items with premium ingredients",
    details: ["Temperature-controlled baking", "Traditional techniques", "Quality monitoring", "Freshness guarantee"],
    time: "15-30 min",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    id: 3,
    icon: Shield,
    title: "Quality Control",
    description: "Each item undergoes rigorous quality and safety checks",
    details: ["Visual inspection", "Taste testing", "Temperature check", "Packaging standards"],
    time: "5 min",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    id: 4,
    icon: Package,
    title: "Careful Packaging",
    description: "Items are packaged with care to maintain freshness",
    details: ["Temperature-controlled packaging", "Secure wrapping", "Freshness seals", "Delivery preparation"],
    time: "5 min",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    id: 5,
    icon: Truck,
    title: "Swift Delivery",
    description: "Your fresh baked goods are delivered warm to your door",
    details: ["Real-time coordination", "Temperature maintenance", "Careful handling", "Doorstep delivery"],
    time: "20-35 min",
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
]

const qualityPromises = [
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "All items baked fresh every day, never overnight",
  },
  {
    icon: Star,
    title: "Premium Ingredients",
    description: "Only the finest ingredients from trusted suppliers",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Strict hygiene and safety protocols in our kitchen",
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee on every order",
  },
]

export default function ProcessPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 parallax opacity-20"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=1200&text=Baking+Process+Hero')`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-orange-600 text-white mb-4">Our Baking Process</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair gradient-text mb-6">From Oven to Your Door</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the meticulous process behind every Golden Crust creation. From the moment you place your order
              to the fresh delivery at your doorstep, we ensure excellence at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">45-70</div>
              <div className="text-sm text-muted-foreground">Minutes Total Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">5</div>
              <div className="text-sm text-muted-foreground">Quality Checkpoints</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Fresh Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair gradient-text mb-4">Our 5-Step Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every order follows our proven process to ensure you receive the freshest, highest quality baked goods
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card
                key={step.id}
                className="group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800 overflow-hidden"
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div className={`${step.bgColor} p-8 flex flex-col items-center justify-center text-center`}>
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-xl opacity-50" />
                      <step.icon className={`w-12 h-12 ${step.color} relative z-10`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Step {step.id}</div>
                    <Badge className={`${step.color.replace("text-", "bg-")} text-white`}>{step.time}</Badge>
                  </div>

                  <div className="md:col-span-3 p-8">
                    <h3 className="text-2xl font-bold font-playfair text-gray-900 dark:text-gray-100 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">{step.description}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${step.color.replace("text-", "bg-")} flex-shrink-0`} />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promises */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair gradient-text mb-4">Our Quality Promise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We stand behind every item we create with these unwavering commitments to quality and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPromises.map((promise, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800"
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                    <promise.icon className="w-12 h-12 mx-auto text-orange-600 dark:text-orange-400 relative z-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{promise.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{promise.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair gradient-text mb-6">Crafted with Passion</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our master bakers bring decades of experience and genuine passion to every creation. Using traditional
                techniques combined with modern precision, we ensure each item meets our exacting standards.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">18 Hours of Daily Baking</h4>
                    <p className="text-muted-foreground text-sm">
                      Our ovens never rest, ensuring fresh items are always available for our customers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">6 Master Bakers</h4>
                    <p className="text-muted-foreground text-sm">
                      Each with over 10 years of experience in artisan baking and pastry creation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">12 Awards Won</h4>
                    <p className="text-muted-foreground text-sm">
                      Recognition from culinary institutions and customer satisfaction awards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/placeholder.svg?height=250&width=200&text=Master+Baker+Working"
                  alt="Master baker at work"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
                <img
                  src="/placeholder.svg?height=250&width=200&text=Fresh+Oven+Bread"
                  alt="Fresh bread from oven"
                  className="rounded-lg shadow-lg mt-8 hover:shadow-xl transition-shadow"
                />
                <img
                  src="/placeholder.svg?height=250&width=200&text=Quality+Control"
                  alt="Quality control process"
                  className="rounded-lg shadow-lg -mt-4 hover:shadow-xl transition-shadow"
                />
                <img
                  src="/placeholder.svg?height=250&width=200&text=Packaging+Process"
                  alt="Packaging process"
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
    </div>
  )
}
