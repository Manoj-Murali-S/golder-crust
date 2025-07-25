import HeroSection from "@/components/hero-section"
import TodaysSpecial from "@/components/todays-special"
import FeaturedProducts from "@/components/featured-products"
import BehindTheScenes from "@/components/behind-the-scenes"
import AboutSection from "@/components/about-section"
import TestimonialsPreview from "@/components/testimonials-preview"

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <TodaysSpecial />
      <FeaturedProducts />
      <BehindTheScenes />
      <AboutSection />
      <TestimonialsPreview />
    </div>
  )
}
