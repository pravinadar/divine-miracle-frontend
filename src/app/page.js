"use client";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <main className="min-h-screen flex items-center justify-center bg-base-200">
        <h1 className="text-3xl font-bold">Welcome to Divine Miracle ✨</h1>
      </main>
    </div>
  );
}
