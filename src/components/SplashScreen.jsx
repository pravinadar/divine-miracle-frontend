"use client";

import { motion } from "framer-motion";

// You can use any icon library or an SVG for your logo
// Here's a placeholder logo inspired by your website's design
const Logo = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 0L61.2257 23.4356L85.3553 29.2893L70.7107 49.9999L85.3553 70.7107L61.2257 76.5644L50 100L38.7743 76.5644L14.6447 70.7107L29.2893 49.9999L14.6447 29.2893L38.7743 23.4356L50 0Z"
      className="fill-amber-400"
    />
    <path
      d="M50 15L57.5 35L77.5 42.5L57.5 50L50 70L42.5 50L22.5 42.5L42.5 35L50 15Z"
      className="fill-purple-400/80"
    />
  </svg>
);

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1a102b] via-[#110d1f] to-[#0c0914]"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.4,
              delayChildren: 0.2,
            },
          },
        }}
        className="flex flex-col items-center gap-4 text-center"
      >
        {/* Logo Animation */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              },
            },
          }}
          className="mb-4 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]"
        >
          <Logo />
        </motion.div>

        {/* Heading Animation */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { ease: "easeOut", duration: 0.5 },
            },
          }}
          className="text-4xl font-bold tracking-wider text-amber-400 md:text-5xl"
        >
          Divine Miracle
        </motion.h1>

        {/* Subheading Animation */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { ease: "easeOut", duration: 0.5 },
            },
          }}
          className="text-lg font-light text-purple-200"
        >
          Guided by the Stars, Revealed by Tarot
        </motion.p>

        {/* Description Animation */}
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { ease: "easeOut", duration: 0.8, delay: 0.5 },
            },
          }}
          className="mt-6 max-w-xs text-sm italic text-gray-400"
        >
          "The universe conspires to reveal your destiny..."
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
