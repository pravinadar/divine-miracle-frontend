import React, { useState, useEffect } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector("#cta-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="cta-section"
      className="relative py-20 md:py-28 bg-gradient-to-br from-[#1a000f] via-[#38001d] to-[#1a000f] text-[#FEF2CD] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle floating elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFD700] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float 15s ease-in-out ${i * 0.7}s infinite`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Glowing Blobs - More subtle */}
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Text Content */}
          <div
            className={`md:w-1/2 text-center md:text-left transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#FFD700] via-[#FBD051] to-[#FFD700] text-transparent bg-clip-text">
              Find Your True Path
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-10 text-[#f5e7c6]">
              With over a decade of experience,{" "}
              <strong className="text-[#FFD700]">Dr. Jinel K</strong> has guided
              thousands of souls through the ancient arts of divination. Based
              in Kandivali West, her practice combines timeless wisdom with
              modern understanding for profound, transformative healing.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FBD051] text-[#111117] font-bold text-lg rounded-full shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-105 transform transition-all duration-300 ease-in-out hover:gap-4"
            >
              Book a Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </a>
          </div>

          {/* Right Side: Minimalistic Logo Container */}
          <div
            className={`md:w-1/2 flex justify-center md:justify-end transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#fff2a900] to-[#f0c956] rounded-full blur-md opacity-10 animate-pulse"></div>

              {/* Decorative frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-[#FFD700]/20 absolute"></div>
                <div className="w-[90%] h-[90%] rounded-full border border-[#FBD051]/10 absolute"></div>
              </div>

              {/* Main Logo with minimal glow */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-[#FFD700]/5 rounded-full blur-sm"></div>
                </div>
                <img
                  src="/logo.png"
                  alt="Divine Miracle Logo"
                  className="w-4/5 h-4/5 object-contain drop-shadow-lg z-10 relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;
