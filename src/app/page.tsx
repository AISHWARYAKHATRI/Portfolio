"use client";
import dynamic from "next/dynamic";

import About from "./components/About";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
const Header = dynamic(() => import("./components/Header"));
const ParticlesWrapper = dynamic(
  () => import("./components/ParticlesWrapper"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <ParticlesWrapper>
      <main className="w-full">
        <div className="bg-main" id="portfolio"></div>
        <Header />
        <Hero />
        <div className="relative flex flex-col gap-5 ml-10 md:container px-5 md:max-w-5xl md:mx-auto">
          <About />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </main>
    </ParticlesWrapper>
  );
}
