import ReviewsContent from "@/components/reviews-content"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair gradient-text mb-4">Customer Reviews</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about our delicious baked goods
          </p>
        </div>
        <ReviewsContent />
      </div>
    </div>
  )
}
