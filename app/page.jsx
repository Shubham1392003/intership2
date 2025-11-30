import Header from "@/components/header"
import Hero from "@/components/hero"
import NutritionSolutions from "@/components/nutrition-solutions"
import BestSellers from "@/components/best-sellers"
import BrandTrust from "@/components/brand-trust"
import Features from "@/components/features"
import CharitableInitiatives from "@/components/charitable-initiatives"
import Testimonials from "@/components/testimonials"
import FollowUs from "@/components/FollowUs"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <NutritionSolutions />
      <BestSellers />
      <BrandTrust />
      <Features />
      <CharitableInitiatives />
      <Testimonials />
      {/* <FollowUs /> */}
      <NewsletterSignup />
      <Footer />
    </main>
  )
}
