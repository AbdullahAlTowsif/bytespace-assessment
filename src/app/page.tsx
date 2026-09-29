import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import DiscoverCourses from "@/components/sections/DiscoverCourses";
import LearningPaths from "@/components/sections/LearningPaths";
import ProfessionalGrowth from "@/components/sections/ProfessionalGrowth";
import CreateCourses from "@/components/sections/CreateCourses";
import CreatorCTA from "@/components/sections/CreatorCTA";
import Testimonials from "@/components/sections/Testimonials";
import SoftGradient from "@/components/ui/SoftGradient";

export default function Home() {
  return (
    <main>
      <header className="bg-grid">
        <Navbar />
        <Hero />
      </header>
      <LogoStrip />
      <DiscoverCourses />
      <LearningPaths />
      <SoftGradient>
        <ProfessionalGrowth />
        <CreateCourses />
      </SoftGradient>
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
