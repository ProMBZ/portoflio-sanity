import FeatredProjects from "../components/FeatredProjects";
import HeroSection from "../components/HeroSection";
import UpcomingWebinars from "../components/UpcomingWebinars";
import WhyChooseUs from "../components/WhyChooseUs"
import PortfolioTestimonial from "../components/ui/TestimonialCards";
import Instructor from "../components/Instructor";
import Footer from "../components/Footer";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased
    bg-grid-white/[0.02]">
    <HeroSection />
    <FeatredProjects />
    <WhyChooseUs />
    <PortfolioTestimonial />
    <UpcomingWebinars />
    <Instructor />
    <Footer />
   </main>
  )
}
