import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <header className="bg-grid">
        <Navbar />
        <Hero />
      </header>
    </main>
  );
}
