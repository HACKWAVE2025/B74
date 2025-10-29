"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 text-center bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),_transparent_70%)] opacity-20" />

      {/* Floating Sparkles */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.6, 0.9, 0.6], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <Sparkles className="absolute top-16 left-10 md:top-24 md:left-24 w-6 h-6 md:w-8 md:h-8 text-white/30" />
        <Sparkles className="absolute bottom-16 right-10 md:bottom-24 md:right-32 w-8 h-8 md:w-10 md:h-10 text-white/40" />
        <Sparkles className="absolute top-1/2 left-1/2 w-5 h-5 md:w-6 md:h-6 text-white/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Ready to{" "}
          <span className="text-green-200 drop-shadow-lg">
            Revolutionize
          </span>{" "}
          Your Farming?
        </motion.h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-green-100 max-w-2xl mx-auto px-2 leading-relaxed">
          Harness the power of AI to get personalized fertilizer, yield, and crop
          recommendations — all in one intuitive platform built for modern farmers.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-green-800 font-semibold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-xl hover:shadow-2xl hover:bg-green-50 transition-all duration-300"
          >
            <Link href="/predict">🌾 Try Beeja Now</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 sm:h-20 lg:h-28 text-green-900"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,256C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224V320H0Z" />
        </svg>
      </div>
    </section>
  );
}
