import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Experience />
      <OpenSource />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;