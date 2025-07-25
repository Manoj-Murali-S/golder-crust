import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Clock, Phone, MessageCircle } from "lucide-react"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800 text-center">
          <CardContent className="p-12">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                <Wrench className="w-12 h-12 text-orange-600 dark:text-orange-400 animate-pulse" />
              </div>
              <h1 className="text-4xl font-bold font-playfair gradient-text mb-4">Under Maintenance</h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're currently updating our kitchen to serve you better! Our website is temporarily down for
                maintenance, but our ovens are still hot and ready for your orders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
                <h3 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Expected Downtime</h3>
                <p className="text-sm text-muted-foreground">We'll be back online within 2-4 hours</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold text-green-700 dark:text-green-300 mb-2">Still Taking Orders</h3>
                <p className="text-sm text-muted-foreground">Contact us directly to place orders</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">What we're improving:</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span>Faster loading times</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span>Enhanced menu features</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span>Better mobile experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span>New ordering features</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <a href="https://wa.me/5551234567?text=Hi! I'd like to place an order during maintenance">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order via WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="border-orange-200 dark:border-orange-800 bg-transparent">
                <a href="tel:5551234567">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Emergency Orders:</strong> Call (555) 123-BAKE for urgent orders. We're still baking fresh items
                during maintenance!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
