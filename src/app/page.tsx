import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import DiscoverCourses from "@/components/sections/DiscoverCourses";

export default function Home() {
  return (
    <main>
      <header className="bg-grid">
        <Navbar />
        <Hero />
      </header>
      <LogoStrip />
      <DiscoverCourses />
    </main>
  );
}
