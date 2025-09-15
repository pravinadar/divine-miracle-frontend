import React, { useEffect, useRef } from "react";

const VideoTestimonials = () => {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/ysz5S6PUM-U",
      title: "Insightful Session with Dr. Jinel",
      description: "A profound experience that brought immense clarity.",
      location: "Kandivali West, Mumbai",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/ScMzIvxBSi4",
      title: "Journey to Self-Discovery",
      description: "Dr. Jinel's guidance transformed my spiritual path.",
      location: "Bandra, Mumbai",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/jNQXAC9IVRw",
      title: "Healing and Inner Peace",
      description: "Found true healing and tranquility through her methods.",
      location: "Andheri East, Mumbai",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/ScMzIvxBSi4", // Example additional video
      title: "A Renewed Perspective",
      description: "Gained invaluable perspective on life's challenges.",
      location: "Worli, Mumbai",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/ysz5S6PUM-U", // Example additional video
      title: "Spiritual Awakening",
      description: "A truly awakening session that changed everything.",
      location: "Juhu, Mumbai",
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up"); // Updated animation class
          } else {
            entry.target.classList.remove("animate-fade-in-up"); // Optional: remove animation on exit
          }
        });
      },
      { threshold: 0.2 } // Increased threshold for better visibility
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(
        ".video-testimonial-card"
      );
      cards.forEach((card) => {
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] text-[#FEF2CD] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#FBD051] to-[#FF9E80] drop-shadow-lg leading-tight">
            Voices of Transformation
          </h2>
          <p className="mt-6 text-xl max-w-4xl mx-auto text-[#FEF2CD] opacity-90 font-light">
            Discover the profound impact of spiritual healing through authentic
            stories and heartfelt testimonials from our cherished clients.
          </p>
        </div>

        {/* Dynamic Grid or Carousel based on number of videos */}
        {videos.length > 3 ? (
          // Use DaisyUI Carousel for more than 3 videos
          <div className="carousel carousel-center w-full p-4 space-x-6 bg-base-200 rounded-box shadow-xl">
            {videos.map((video, index) => (
              <div
                key={video.id}
                id={`slide${index}`}
                className="carousel-item w-full md:w-1/2 lg:w-1/3 flex-shrink-0 video-testimonial-card opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <VideoCard video={video} index={index} />
              </div>
            ))}
          </div>
        ) : (
          // Use a simple grid for 3 or fewer videos
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="video-testimonial-card opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <VideoCard video={video} index={index} />
              </div>
            ))}
          </div>
        )}

        {/* Carousel Navigation for more than 3 videos */}
        {videos.length > 3 && (
          <div className="flex justify-center w-full py-2 gap-2 mt-8">
            {videos.map((_, index) => (
              <a
                key={`nav-${index}`}
                href={`#slide${index}`}
                className="btn btn-xs bg-[#FBD051] border-[#FBD051] text-[#2a0015] hover:bg-[#FF9E80] hover:border-[#FF9E80] opacity-70 hover:opacity-100 transition-opacity"
              >
                {index + 1}
              </a>
            ))}
          </div>
        )}

        <div className="mt-20 text-center">
          <button className="btn btn-lg bg-gradient-to-r from-[#FBD051] to-[#FF9E80] text-[#2a0015] border-none font-bold shadow-xl hover:scale-105 transition-transform duration-300 transform-gpu relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#FF9E80] to-[#FBD051] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              View All Transformative Journeys
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .carousel-item {
          scroll-snap-align: center;
        }
      `}</style>
    </section>
  );
};

// Extracted VideoCard component for reusability and cleaner main component
const VideoCard = ({ video }) => (
  <div className="card w-full bg-base-100 shadow-xl rounded-3xl overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-103 transform-gpu">
    <figure className="relative h-60 w-full overflow-hidden">
      <iframe
        className="w-full h-full object-cover"
        src={video.src}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-t from-[#2a0015] to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
    </figure>
    <div className="card-body p-6 text-center bg-gradient-to-br from-[#1c0010] to-[#33001c]">
      <div className="flex justify-center items-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-[#FBD051]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="ml-2 text-xs text-[#FEF2CD] opacity-80">
          {video.location}
        </span>
      </div>
      <h3 className="card-title justify-center text-2xl font-bold text-[#FBD051] mb-2 leading-snug">
        {video.title}
      </h3>
      <p className="text-[#FEF2CD] opacity-80 text-sm italic">
        "{video.description}"
      </p>
      <div className="card-actions justify-center mt-4">
        <button className="btn btn-sm btn-ghost text-[#FBD051] hover:text-[#FF9E80] hover:bg-transparent transition-colors duration-300">
          Watch Full Story
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.182l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default VideoTestimonials;
