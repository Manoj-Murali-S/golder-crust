"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Menu, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800 text-center">
          <CardContent className="p-12">
            <div className="mb-8">
              <div className="text-8xl font-bold font-playfair gradient-text mb-4">404</div>
              <h1 className="text-4xl font-bold font-playfair text-gray-900 dark:text-gray-100 mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Looks like this page got eaten! The page you're looking for doesn't exist or has been moved to our
                kitchen for improvements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h3 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Popular Pages</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/menu" className="text-orange-600 hover:text-orange-700 dark:text-orange-400">
                      • Our Menu
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloud-kitchen" className="text-orange-600 hover:text-orange-700 dark:text-orange-400">
                      • Cloud Kitchen
                    </Link>
                  </li>
                  <li>
                    <Link href="/reviews" className="text-orange-600 hover:text-orange-700 dark:text-orange-400">
                      • Customer Reviews
                    </Link>
                  </li>
                  <li>
                    <Link href="/process" className="text-orange-600 hover:text-orange-700 dark:text-orange-400">
                      • Our Process
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold text-green-700 dark:text-green-300 mb-2">Quick Actions</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a
                      href="https://wa.me/5551234567?text=Hi! I need help finding something"
                      className="text-green-600 hover:text-green-700 dark:text-green-400"
                    >
                      • Contact Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/5551234567?text=Hi! I'd like to place an order"
                      className="text-green-600 hover:text-green-700 dark:text-green-400"
                    >
                      • Place Order
                    </a>
                  </li>
                  <li>
                    <a href="tel:5551234567" className="text-green-600 hover:text-green-700 dark:text-green-400">
                      • Call Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-orange-200 dark:border-orange-800 bg-transparent">
                <Link href="/menu">
                  <Menu className="w-4 h-4 mr-2" />
                  Browse Menu
                </Link>
              </Button>
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="border-orange-200 dark:border-orange-800"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Still can't find what you're looking for?</strong> Use the search feature in our menu or contact
                us directly for assistance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
