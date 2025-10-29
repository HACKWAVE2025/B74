"use client";

import { motion } from "framer-motion";
import { Sprout, Leaf, Recycle, Globe2 } from "lucide-react";

export default function Mission() {
  return (
    <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-green-50 via-white to-green-100 text-center">
      {/* Decorative floating leaves */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Leaf className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex justify-center mb-6">
          <Sprout className="w-12 h-12 sm:w-16 sm:h-16 text-green-700 animate-bounce" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-6">
          Our Mission
        </h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-lg sm:text-xl leading-relaxed mb-12">
          At <strong>Beeja</strong>, we are on a mission to revolutionize agriculture 
          through the power of <span className="text-green-700 font-semibold">AI </span> 
          and sustainable innovation. We help farmers make smarter fertilizer 
          decisions, preserve soil health, and achieve higher yields — ensuring 
          prosperity for farmers and harmony with nature.
        </p>

        {/* Icon highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-green-100"
          >
            <Sprout className="mx-auto text-green-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-green-800 text-xl mb-2">
              Smart Growth
            </h3>
            <p className="text-gray-600">
              Empowering farmers with AI-based recommendations to grow efficiently.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-green-100"
          >
            <Recycle className="mx-auto text-green-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-green-800 text-xl mb-2">
              Sustainability
            </h3>
            <p className="text-gray-600">
              Reducing fertilizer waste and promoting eco-friendly farming practices.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-green-100"
          >
            <Globe2 className="mx-auto text-green-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-green-800 text-xl mb-2">
              Global Impact
            </h3>
            <p className="text-gray-600">
              Supporting a sustainable planet through smarter agriculture.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 sm:h-20 text-green-100"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,64L48,85.3C96,107,192,149,288,170.7C384,192,480,192,576,181.3C672,171,768,149,864,138.7C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160V320H0Z" />
        </svg>
      </div>
    </section>
  );
}
