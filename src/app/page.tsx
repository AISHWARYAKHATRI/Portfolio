"use client";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

import { loadParticles } from "./loadParticles";

export default function Home() {
  useEffect(() => {
    loadParticles();
  }, []);

  return (
    <div className="">
      <div id="particles-js" className="w-full h-screen">
        <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="flex">
            <div className="flex flex-col">
              <h2 className="lg:text-[48px] text-4xl font-extrabold leading-12">
                Hi, I am
              </h2>
              <div className="lg:text-[48px] text-4xl my-5 font-extrabold">
                <div className="bg-gradient-to-r from-pink-500 to-amber-500 text-transparent bg-clip-text py-4">
                  <Typewriter
                    options={{
                      strings: ["Aishwarya Khatri", "A Frontend Engineer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
