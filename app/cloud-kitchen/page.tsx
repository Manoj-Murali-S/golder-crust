import { Clock, MapPin, Truck, Phone, Star, Award, Users, Utensils, MessageCircle, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Truck,
    title: "Express Delivery",
    description: "Lightning-fast delivery within our service area",
    features: [
      "Free delivery on orders over $25",
      "30-45 minute delivery time",
      "Temperature-controlled packaging",
      "Real-time order tracking",
    ],
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    icon: MapPin,
    title: "Quick Pickup",
    description: "Order ahead and collect at your convenience",
    features: [
      "Order via WhatsApp or phone",
      "Ready in 15-30 minutes",
      "Contactless pickup available",
      "Special packaging for transport",
    ],
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Perfect for events, meetings, and celebrations",
    features: [
      "Bulk orders for 10+ people",
      "Custom menu planning",
      "Professional presentation",
      "Advance booking available",
    ],
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
]

const stats = [
  { icon: Star, number: "4.9", label: "Average Rating", color: "text-yellow-500" },
  { icon: Users, number: "500+", label: "Happy Customers", color: "text-blue-500" },
  { icon: Award, number: "12", label: "Awards Won", color: "text-purple-500" },
  { icon: Clock, number: "30min", label: "Avg Delivery", color: "text-green-500" },
]

const serviceAreas = [
  { name: "Downtown District", deliveryTime: "20-30 min", fee: "Free" },
  { name: "Riverside Area", deliveryTime: "25-35 min", fee: "Free" },
  { name: "University Campus", deliveryTime: "15-25 min", fee: "Free" },
  { name: "Suburban Heights", deliveryTime: "30-40 min", fee: "$2.99" },
  { name: "Business District", deliveryTime: "20-30 min", fee: "Free" },
  { name: "Residential Park", deliveryTime: "25-35 min", fee: "Free" },
]

export default function CloudKitchenPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 parallax opacity-20"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=1200&text=Cloud+Kitchen+Hero')`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-orange-600 text-white mb-4">Cloud Kitchen Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair gradient-text mb-6">Fresh to Your Door</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the convenience of our cloud kitchen - fresh baked goods delivered warm to your doorstep or
              ready for quick pickup. Professional catering services available for all occasions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800"
              >
                <CardContent className="p-6">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair gradient-text mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service that works best for you - we're here to make fresh baked goods accessible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800 overflow-hidden"
              >
                <CardHeader className={`${service.bgColor} pb-6`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${service.color.replace("text-", "bg-")} mt-2 flex-shrink-0`}
                        />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="https://wa.me/5551234567?text=Hi! I'd like to know more about your cloud kitchen services">
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-700 dark:text-orange-300 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Delivery Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  We currently deliver to the following areas with varying delivery times and fees:
                </p>
                <div className="space-y-4">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">{area.name}</h4>
                        <p className="text-sm text-muted-foreground">{area.deliveryTime}</p>
                      </div>
                      <Badge
                        variant={area.fee === "Free" ? "default" : "secondary"}
                        className={area.fee === "Free" ? "bg-green-500 text-white" : ""}
                      >
                        {area.fee}
                      </Badge>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Don't see your area? Contact us to check if we can deliver to you!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                  <Phone className="w-6 h-6" />
                  Contact & Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">7:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">8:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-300 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-semibold">Now Open</span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400">Closes at 8:00 PM today</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Kitchen Address</h4>
                  <p className="text-sm text-muted-foreground">
                    123 Baker Street, Culinary District
                    <br />
                    Food City, FC 12345
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Order Methods</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-orange-500" />
                      <span>Phone: (555) 123-BAKE</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-green-500" />
                      <span>WhatsApp: (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-500" />
                      <span>orders@goldencrustbakery.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
