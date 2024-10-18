"use client";
import { useEffect } from "react";
import { loadParticles } from "../loadParticles";

const ParticlesBackground = () => {
  useEffect(() => {
    loadParticles();
  }, []);
};

export default ParticlesBackground;
