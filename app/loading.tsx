import { Card, CardContent } from "@/components/ui/card"
import { ChefHat } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800 text-center">
          <CardContent className="p-12">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                <ChefHat className="w-8 h-8 text-orange-600 dark:text-orange-400 animate-bounce" />
              </div>
              <h2 className="text-2xl font-bold font-playfair gradient-text mb-2">Preparing Your Order</h2>
              <p className="text-muted-foreground">Our bakers are getting everything ready...</p>
            </div>

            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
