import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Rocket, Mail, Bell, ChefHat } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800 text-center">
          <CardContent className="p-12">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                <Rocket className="w-12 h-12 text-orange-600 dark:text-orange-400 animate-bounce" />
              </div>
              <h1 className="text-4xl font-bold font-playfair gradient-text mb-4">Something Amazing is Baking!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're preparing something special for you. Our new feature is in the oven and will be ready soon!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <ChefHat className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
                <h3 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">New Recipes</h3>
                <p className="text-sm text-muted-foreground">Exciting new items coming to our menu</p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Bell className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Enhanced Features</h3>
                <p className="text-sm text-muted-foreground">Better ordering and tracking experience</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Mail className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold text-green-700 dark:text-green-300 mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">Be the first to know when we launch</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Get notified when we launch</h3>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/80 dark:bg-gray-800/80 border-orange-200 dark:border-orange-800"
                />
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Bell className="w-4 h-4 mr-2" />
                  Notify Me
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/">
                  <ChefHat className="w-4 h-4 mr-2" />
                  Visit Our Bakery
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-orange-200 dark:border-orange-800 bg-transparent">
                <Link href="/menu">
                  <Mail className="w-4 h-4 mr-2" />
                  Browse Menu
                </Link>
              </Button>
            </div>

            <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <p className="text-sm text-orange-800 dark:text-orange-200">
                <strong>In the meantime:</strong> You can still order our delicious baked goods through our regular menu
                and WhatsApp!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
