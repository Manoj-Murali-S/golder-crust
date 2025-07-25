"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home, MessageCircle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800 text-center">
          <CardContent className="p-12">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
              </div>
              <h1 className="text-4xl font-bold font-playfair text-gray-900 dark:text-gray-100 mb-4">
                Something Went Wrong
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Our kitchen encountered an unexpected error. Don't worry, our team has been notified and we're working
                to fix it!
              </p>
            </div>

            {process.env.NODE_ENV === "development" && (
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-left">
                <h3 className="font-semibold text-red-700 dark:text-red-300 mb-2">Error Details (Development)</h3>
                <code className="text-sm text-red-600 dark:text-red-400 break-all">{error.message}</code>
              </div>
            )}

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span>Try refreshing the page</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span>Check your internet connection</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span>Contact us if the problem persists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={reset} className="bg-orange-600 hover:bg-orange-700 text-white">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Button asChild variant="outline" className="border-orange-200 dark:border-orange-800 bg-transparent">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-orange-200 dark:border-orange-800 bg-transparent">
                <a href="https://wa.me/5551234567?text=Hi! I encountered an error on your website">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Report Issue
                </a>
              </Button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Need immediate assistance?</strong> Call us at (555) 123-BAKE or message us on WhatsApp.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
