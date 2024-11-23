"use client";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const ParticlesWrapper = dynamic(
  () => import("./components/ParticlesWrapper"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div className="bg-main"></div>
      <ParticlesWrapper>
        <Header />
        <Hero />
        <div className="relative flex flex-col gap-5 container mx-auto px-5 max-w-5xl">
          <About />
          <Skills />
          <Footer />
        </div>
      </ParticlesWrapper>
    </main>
  );
}
