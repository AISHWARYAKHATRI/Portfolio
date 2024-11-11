"use client";
import dynamic from "next/dynamic";

const ParticlesComponent = dynamic(
  () => import("./components/ParticlesComponent"),
  { ssr: false }
);

export default function Home() {
  return <ParticlesComponent />;
}
