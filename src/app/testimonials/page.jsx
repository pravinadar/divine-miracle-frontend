"use client";

import { useEffect, useState } from "react";
import { Star, Quote, Play, X } from "lucide-react";

// ----------------------
// Simple Card Component
// ----------------------
const Card = ({ children, className }) => (
  <div
    className={`rounded-xl border border-[#FEF2CD]/20 bg-white/5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-yellow-400/20 ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// ----------------------
// Animated Counter
// ----------------------
const AnimatedCounter = ({ target, suffix, duration = 1500, delayFinal = 400 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / 16); // ~60fps
    let delayed = false;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = progress < 1 ? 1 - Math.pow(1 - progress, 2) : 1;
      let newValue = Math.floor(target * eased);

      if (!delayed && target > 100 && newValue >= target - 1 && newValue < target) {
        newValue = target - 1;
        delayed = true;
        setTimeout(() => setCount(target), delayFinal);
        clearInterval(counter);
      } else {
        setCount(newValue);
      }

      if (frame === totalFrames) {
        setCount(target);
        clearInterval(counter);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target, duration, delayFinal]);

  return (
    <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
      {count}
      {suffix}
    </h3>
  );
};

// ----------------------
// Page Transition (fade-in)
// ----------------------
const PageTransition = ({ children }) => (
  <div className="animate-fadeIn">{children}</div>
);

// ----------------------
// Particle Background
// ----------------------
const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${8 + Math.random() * 12}s`,
      animationDelay: `${Math.random() * 10}s`,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-70 animate-particle"
          style={{
            top: p.top,
            left: p.left,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        ></span>
      ))}
    </div>
  );
};

// ----------------------
// Testimonials Page
// ----------------------
export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      service: "Complete Life Reading",
      rating: 5,
      text: "Dr. Jinel's reading was incredibly accurate and insightful. Her tarot and astrology combination gave me clarity about my career path that I had been seeking for years. Highly recommended!",
      date: "December 2024",
    },
    {
      id: 2,
      name: "Rajesh Patel",
      location: "Kandivali",
      service: "Vastu Consultation",
      rating: 4,
      text: "After implementing Dr. Jinel's Vastu recommendations, our home feels so much more peaceful and harmonious. My business has also seen significant improvement. Amazing transformation!",
      date: "November 2024",
    },
    {
      id: 3,
      name: "Anita Desai",
      location: "Borivali",
      service: "Angel Healing",
      rating: 5,
      text: "The angel healing session was profound. I felt a deep sense of peace and healing that lasted for weeks. Dr. Jinel has a genuine gift for connecting with divine energies.",
      date: "November 2024",
    },
    {
      id: 4,
      name: "Anita Desai",
      location: "Borivali",
      service: "Angel Healing",
      rating: 5,
      text: "The angel healing session was profound. I felt a deep sense of peace and healing that lasted for weeks. Dr. Jinel has a genuine gift for connecting with divine energies.",
      date: "November 2024",
    },
    {
      id: 5,
      name: "Anita Desai",
      location: "Borivali",
      service: "Angel Healing",
      rating: 5,
      text: "The angel healing session was profound. I felt a deep sense of peace and healing that lasted for weeks. Dr. Jinel has a genuine gift for connecting with divine energies.",
      date: "November 2024",
    },
    {
      id: 6,
      name: "Anita Desai",
      location: "Borivali",
      service: "Angel Healing",
      rating: 3,
      text: "The angel healing session was profound. I felt a deep sense of peace and healing that lasted for weeks. Dr. Jinel has a genuine gift for connecting with divine energies.",
      date: "November 2024",
    },
  ];

  const stats = [
    { number: 1000, label: "Happy Clients", suffix: "+" },
    { number: 5, label: "Average Rating", suffix: "" },
    { number: 20, label: "Years Experience", suffix: "+" },
    { number: 95, label: "Client Satisfaction", suffix: "%" },
  ];

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
        }`}
      />
    ));
  


  const videoSources = ["/videos/video1.mp4", "/videos/video1.mp4", "/videos/video1.mp4"];

  return (
    <PageTransition>
      <div className="min-h-screen py-20 bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] text-[#FEF2CD] relative overflow-hidden">
        {/* Decorative glowing orbs */}
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-pink-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-800/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] bg-yellow-400/10 rounded-full blur-3xl"></div>

        {/* Floating particles */}
        <ParticleBackground />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <section className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
              Client Testimonials
            </h1>
            <p className="text-xl text-[#f8e9c9]/80 max-w-3xl mx-auto">
              Hear from those who have experienced the transformative power of
              spiritual guidance and healing through our sacred services.
            </p>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} duration={2500} />
                <div className="text-[#f8e9c9]/70 mt-2">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Testimonials Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {testimonials.map((t) => (
              <Card key={t.id}>
                <CardContent>
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="h-8 w-8 text-yellow-400/70" />
                    <div className="flex space-x-1">{renderStars(t.rating)}</div>
                  </div>
                  <p className="text-[#FEF2CD]/90 mb-6 italic">"{t.text}"</p>
                  <div className="border-t border-[#FEF2CD]/20 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{t.name}</h4>
                        <p className="text-sm text-[#FEF2CD]/70">{t.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-yellow-300">{t.service}</p>
                        <p className="text-xs text-[#FEF2CD]/60">{t.date}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Featured Testimonial */}
          <section className="bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] rounded-2xl p-12 text-center mb-20 shadow-xl border border-[#FEF2CD]/20">
            <Quote className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <blockquote className="text-2xl font-medium mb-6 italic text-[#FEF2CD]">
              "Dr. Jinel doesn’t just read the cards or charts – she connects
              with your soul. Her guidance has been instrumental in helping me
              understand my life’s purpose and navigate challenging times with
              wisdom and grace."
            </blockquote>
            <div className="flex justify-center space-x-1 mb-4">{renderStars(5)}</div>
            <cite className="text-lg text-yellow-200">
              – Meera Krishnan, Spiritual Seeker from Andheri
            </cite>
          </section>

          {/* Video Reviews Carousel */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              Video Reviews
            </h2>
            <div className="overflow-hidden relative group">
              <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]">
                {[...videoSources, ...videoSources].map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    onClick={() => setSelectedVideo(src)}
                    className="relative cursor-pointer group overflow-hidden rounded-xl border border-[#FEF2CD]/20 shadow-lg backdrop-blur-md min-w-[300px] max-w-[320px]"
                  >
                    <video
                      src={src}
                      className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-yellow-300 drop-shadow-lg" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Modal Popup */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative w-[90%] md:w-[70%] lg:w-[50%]">
              <button
                className="absolute -top-10 right-0 text-yellow-300 hover:text-white transition"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={32} />
              </button>
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        )}
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes particleMove {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-40px) translateX(20px);
            opacity: 1;
          }
          100% {
            transform: translateY(-80px) translateX(-20px);
            opacity: 0.4;
          }
        }
        .animate-particle {
          animation-name: particleMove;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </PageTransition>
  );
}
