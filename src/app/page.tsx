"use client";
import Hero from "./compoents/Hero";
import Projects from "./compoents/projects"; // Adjusted to match the actual file name
import Skills from "./compoents/Skills";
import Contact from "./compoents/Contact";
import About from "./compoents/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-back",
      duration: 1500,
      delay: 20,
      anchorPlacement: "bottom-bottom",
      offset: 240,
    });
  }, []);

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}
