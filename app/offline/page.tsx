"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WifiOff, RefreshCw, Home, Phone } from "lucide-react"

export default function OfflinePage() {
    return (
        <div className="min-h-screen pt-20 flex items-center justify-center">
            <div className="container mx-auto px-4">
                <Card className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800 text-center">
                    <CardContent className="p-12">
                        <div className="mb-8">
                            <div className="w-24 h-24 mx-auto mb-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                                <WifiOff className="w-12 h-12 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h1 className="text-4xl font-bold font-playfair gradient-text mb-4">You're Offline</h1>
                            <p className="text-lg text-muted-foreground mb-8">
                                It looks like you've lost your internet connection. Don't worry, our fresh baked goods will be waiting
                                when you're back online!
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                <span>Check your internet connection</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                <span>Try refreshing the page</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                <span>Contact us directly via phone if urgent</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={() => window.location.reload()} className="bg-orange-600 hover:bg-orange-700 text-white">
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
                                <a href="tel:5551234567">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call Us
                                </a>
                            </Button>
                        </div>

                        <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                            <p className="text-sm text-orange-800 dark:text-orange-200">
                                <strong>Emergency Orders:</strong> Call us at (555) 123-BAKE for urgent orders or questions.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
