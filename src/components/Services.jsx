import React from "react";
import {
  Swords,
  Calculator,
  Feather,
  Compass,
  Sparkles,
  Leaf,
  ArrowRight,
} from "lucide-react";

// A placeholder for Next.js's Link component to make this self-contained.
// In a real Next.js app, you would use `import Link from "next/link";`
const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

const services = [
  {
    title: "Herbal Spells",
    desc: "Nature's magic for healing and protection.",
    icon: <Leaf className="h-10 w-10 text-[#FBD051]" />,
  },
  {
    title: "Numerology",
    desc: "Discover the power of numbers in your life.",
    icon: <Calculator className="h-10 w-10 text-[#FBD051]" />,
  },
  {
    title: "Angel Healing",
    desc: "Divine healing through angelic guidance.",
    icon: <Feather className="h-10 w-10 text-[#FBD051]" />,
  },
  {
    title: "Vastu Consultation",
    desc: "Harmonize your space with cosmic energy.",
    icon: <Compass className="h-10 w-10 text-[#FBD051]" />,
  },
  {
    title: "Astrology",
    desc: "Chart your course through stellar wisdom.",
    icon: <Sparkles className="h-10 w-10 text-[#FBD051]" />,
  },
  {
    title: "Tarot Reading",
    desc: "Unveil your destiny through ancient wisdom.",
    icon: <Swords className="h-10 w-10 text-[#FBD051]" />,
  },
];

const Services = () => {
  return (
    <>
      {/* This style block is added for the custom animation.
        In a real-world project, this would likely be in your global CSS file.
      */}
      <style>{`
        @keyframes fadeInSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .card-animate {
          opacity: 0; /* Start hidden */
          animation: fadeInSlideUp 0.6s ease-out forwards;
        }
      `}</style>

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] text-center text-[#FEF2CD] overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FBD051] tracking-wide">
              Sacred Services
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-[#FEF2CD]/80">
              Discover the divine path through our comprehensive spiritual
              offerings.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="card-animate group relative flex flex-col items-center p-6 bg-black/20 rounded-xl border border-yellow-500/20 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-black/40 hover:border-yellow-500/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Icon */}
                <div className="mb-4 p-4 bg-yellow-500/10 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-500/20">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-[#FBD051]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[#FEF2CD]/70">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-16">
            <Link href="/services">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#FBD051] text-gray-900 font-bold rounded-lg shadow-lg shadow-yellow-500/20 transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/30 focus:outline-none focus:ring-4 focus:ring-yellow-400/50">
                View All Services
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
