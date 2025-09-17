"use client";
import About from "@/components/About";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import VideoTestimonials from "@/components/VideoTestimonials";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <Services />
      <About />
      <Testimonials />
      <VideoTestimonials />
      <CTASection />
    </div>
  );
}
