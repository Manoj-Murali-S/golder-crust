"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Send, ThumbsUp, MessageSquare, Filter, TrendingUp } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "The best croissants in town! Fresh, buttery, and delivered warm to my door. The chocolate croissants are absolutely divine. Will definitely order again!",
    date: "2024-01-15",
    verified: true,
    helpful: 12,
    category: "Pastries",
    orderItems: ["Chocolate Croissant", "Butter Croissant"],
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    comment:
      "Amazing sourdough bread and excellent customer service. The delivery was quick and the bread was still warm. Highly recommend the artisan sourdough!",
    date: "2024-01-12",
    verified: true,
    helpful: 8,
    category: "Breads",
    orderItems: ["Artisan Sourdough"],
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 5,
    comment:
      "Their chocolate cake made our anniversary perfect. The presentation was beautiful and the taste was even better. Thank you Golden Crust!",
    date: "2024-01-10",
    verified: true,
    helpful: 15,
    category: "Cakes",
    orderItems: ["Chocolate Fudge Cake"],
  },
  {
    id: 4,
    name: "David Wilson",
    rating: 4,
    comment:
      "Great variety of pastries and breads. The almond danish is my favorite. Only wish they had more gluten-free options.",
    date: "2024-01-08",
    verified: true,
    helpful: 6,
    category: "Pastries",
    orderItems: ["Almond Danish", "Cinnamon Roll"],
  },
  {
    id: 5,
    name: "Lisa Martinez",
    rating: 5,
    comment:
      "Outstanding quality and service! The red velvet cake was a hit at our office party. Everyone was asking where we got it from.",
    date: "2024-01-05",
    verified: true,
    helpful: 20,
    category: "Cakes",
    orderItems: ["Red Velvet Cake"],
  },
  {
    id: 6,
    name: "James Brown",
    rating: 5,
    comment:
      "Fast delivery and fresh products. The cappuccino is perfect and the cinnamon rolls are to die for. Great cloud kitchen concept!",
    date: "2024-01-03",
    verified: true,
    helpful: 9,
    category: "Beverages",
    orderItems: ["Cappuccino", "Cinnamon Roll"],
  },
]

const ratingBreakdown = [
  { stars: 5, count: 420, percentage: 84 },
  { stars: 4, count: 65, percentage: 13 },
  { stars: 3, count: 10, percentage: 2 },
  { stars: 2, count: 3, percentage: 0.6 },
  { stars: 1, count: 2, percentage: 0.4 },
]

const categories = ["All", "Breads", "Cakes", "Pastries", "Beverages"]

export default function ReviewsContent() {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  })
  const [displayedReviews, setDisplayedReviews] = useState(6)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("New review:", newReview)
    alert("Thank you for your review! It will be published after moderation.")
    setNewReview({ name: "", rating: 5, comment: "" })
  }

  const loadMoreReviews = () => {
    setDisplayedReviews((prev) => prev + 6)
  }

  const filteredReviews = reviews.filter((review) => selectedCategory === "All" || review.category === selectedCategory)

  return (
    <div className="space-y-12">
      {/* Reviews Overview */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Overall Rating */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800 text-center">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">4.9</div>
            <div className="text-muted-foreground mb-2">Based on 500+ reviews</div>
            <Badge className="bg-green-500 text-white">Excellent</Badge>
          </CardContent>
        </Card>

        {/* Rating Breakdown */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="text-lg">Rating Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {ratingBreakdown.map((rating) => (
              <div key={rating.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-12">
                  <span className="text-sm">{rating.stars}</span>
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground w-12">{rating.count}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Review Highlights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Most Helpful</span>
              <Badge variant="secondary">Lisa Martinez</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Popular Category</span>
              <Badge className="bg-orange-500 text-white">Cakes</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Response Rate</span>
              <Badge className="bg-green-500 text-white">98%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Avg Response Time</span>
              <Badge variant="secondary">2 hours</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filter by category:</span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-orange-600 hover:bg-orange-700 text-white"
                    : "border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1 rounded-md border border-orange-200 dark:border-orange-800 bg-white dark:bg-gray-800 text-sm"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest">Highest Rating</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredReviews.slice(0, displayedReviews).map((review) => (
          <Card
            key={review.id}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800 hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{review.name}</h4>
                      <div className="flex items-center gap-2">
                        {review.verified && (
                          <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs">
                            Verified Purchase
                          </Badge>
                        )}
                        <Badge variant="secondary" className="text-xs">
                          {review.category}
                        </Badge>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 italic">"{review.comment}"</p>

              {review.orderItems && (
                <div className="mb-4">
                  <span className="text-xs text-muted-foreground">Ordered: </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {review.orderItems.map((item, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-orange-600">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Helpful ({review.helpful})
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-orange-600">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Reply
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      {displayedReviews < filteredReviews.length && (
        <div className="text-center">
          <Button onClick={loadMoreReviews} size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
            Load More Reviews
          </Button>
        </div>
      )}

      {/* Submit Review Form */}
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-orange-700 dark:text-orange-300">
            Share Your Experience
          </CardTitle>
          <p className="text-muted-foreground">Help others discover great baked goods by sharing your honest review</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitReview} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <Input
                  value={newReview.name}
                  onChange={(e) => setNewReview((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your name"
                  required
                  className="bg-white/80 dark:bg-gray-800/80 border-orange-200 dark:border-orange-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setNewReview((prev) => ({ ...prev, rating }))}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          rating <= newReview.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {newReview.rating === 5
                      ? "Excellent"
                      : newReview.rating === 4
                        ? "Good"
                        : newReview.rating === 3
                          ? "Average"
                          : newReview.rating === 2
                            ? "Poor"
                            : "Terrible"}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Your Review</label>
              <Textarea
                value={newReview.comment}
                onChange={(e) => setNewReview((prev) => ({ ...prev, comment: e.target.value }))}
                placeholder="Tell us about your experience with our baked goods..."
                rows={4}
                required
                className="bg-white/80 dark:bg-gray-800/80 border-orange-200 dark:border-orange-800"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Please be honest and constructive. Reviews are moderated before publication.
              </p>
            </div>
            <Button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white">
              <Send className="w-4 h-4 mr-2" />
              Submit Review
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
