"use client";

import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Sprout, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Hero() {
  // Dynamic background gradient
  const [gradient, setGradient] = useState("from-green-50 via-white to-green-100");
  useEffect(() => {
    const interval = setInterval(() => {
      setGradient((prev) =>
        prev === "from-green-50 via-white to-green-100"
          ? "from-emerald-50 via-green-100 to-green-200"
          : "from-green-50 via-white to-green-100"
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Parallax tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    stiffness: 100,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window === "undefined") return;
    const { innerWidth, innerHeight } = window;
    const xVal = e.clientX - innerWidth / 2;
    const yVal = e.clientY - innerHeight / 2;
    x.set(xVal / 20);
    y.set(yVal / 20);
  };

  // Floating leaves
  const [leaves, setLeaves] = useState<
    { id: number; left: number; delay: number; size: number }[]
  >([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;
    const newLeaves = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * width,
      delay: Math.random() * 6,
      size: 14 + Math.random() * 20,
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      style={{ rotateX, rotateY }}
      className={`relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b ${gradient} transition-all duration-1000 min-h-[85vh] sm:min-h-[90vh] px-6 sm:px-10 md:px-16`}
    >
      {/* Floating leaves */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            className="absolute text-green-300 opacity-70"
            style={{
              left: leaf.left,
              top: -50,
              width: leaf.size,
              height: leaf.size,
            }}
            animate={{
              y: [-100, typeof window !== "undefined" ? window.innerHeight + 200 : 1000],
              x: [leaf.left, leaf.left + Math.sin(leaf.id) * 40],
              rotate: [0, 360],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              delay: leaf.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Leaf className="text-green-400" style={{ width: leaf.size, height: leaf.size }} />
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl sm:max-w-4xl mx-auto"
      >
        <div className="flex justify-center mb-6 sm:mb-8">
          <Sprout className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-green-700 animate-bounce" />
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-800 leading-tight mb-4 sm:mb-6">
          <span className="block">Smarter Farming</span>
          <span className="block text-green-600">with AI-Powered Insights</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto">
          Beeja empowers farmers with AI-driven fertilizer advice, crop yield predictions,
          and sustainable soil management — all at your fingertips.
        </p>

        {/* Auth Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <SignedOut>
            <motion.div whileHover={{ scale: 1.05 }}>
              <SignUpButton mode="modal">
                <Button
                  variant="gradient"
                  className="text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg"
                >
                  Get Started
                </Button>
              </SignUpButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <SignInButton mode="modal">
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl"
                >
                  Learn More
                </Button>
              </SignInButton>
            </motion.div>
          </SignedOut>

          <SignedIn>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="glass"
                className="text-green-900 font-semibold backdrop-blur-sm shadow-md px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl"
              >
                Explore Dashboard 🌾
              </Button>
            </motion.div>
          </SignedIn>
        </div>
      </motion.div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 sm:h-20 md:h-24 text-green-100"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,256L48,250.7C96,245,192,235,288,229.3C384,224,480,224,576,213.3C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192V320H0Z" />
        </svg>
      </div>
    </motion.section>
  );
}
