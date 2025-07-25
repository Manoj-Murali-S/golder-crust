import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ArrowRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "The best croissants in town! Fresh, buttery, and delivered warm to my door.",
    date: "2024-01-15",
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    comment: "Amazing sourdough bread and excellent customer service. Highly recommend!",
    date: "2024-01-12",
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 5,
    comment: "Their chocolate cake made our anniversary perfect. Thank you Golden Crust!",
    date: "2024-01-10",
  },
]

export default function TestimonialsPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair gradient-text mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(testimonial.date).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
            <Link href="/reviews" className="flex items-center gap-2">
              Read All Reviews
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
