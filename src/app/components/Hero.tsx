"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="w-full h-screen font-poppins-black">
      <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="text-5xl md:text-6xl xl:text-8xl my-5  font-extrabold xl:text-nowrap">
          <span className="text-nowrap">Hi, I&apos;m&nbsp;</span>
          <div className="text-8xl md:text-9xl sacramento-font bg-gradient-to-r from-pink-500 to-amber-500 text-transparent bg-clip-text py-5">
            Aishwarya Khatri
          </div>
        </div>
        <div className="text-3xl xl:text-4xl my-5 font-extrabold xl:text-nowrap text-primary flex xl:flex-row flex-col">
          <span className="text-nowrap">Frontend Developer 💻&nbsp;</span>
          <span className="text-white xl:block hidden ">|</span>
          <span> &nbsp;Full Stack Explorer 🚀</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
