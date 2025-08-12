import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-slate-900 text-gray-100 font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
