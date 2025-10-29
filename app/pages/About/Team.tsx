"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Team() {
  const members = [
    { name: "Tejas Guntru", role: "Founder & AI Developer" },
    { name: "Aditi Sharma", role: "Agricultural Data Scientist" },
    { name: "Rohan Mehta", role: "IoT & Backend Engineer" },
  ];

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-green-50 via-white to-green-100 text-center">
      {/* Decorative blurred background circles */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-10 left-10 w-48 h-48 bg-green-200 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-emerald-300 rounded-full blur-3xl" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-10"
      >
        Meet the Team
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {members.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-green-100 rounded-2xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                {/* Placeholder Avatar */}
                <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-green-300 to-emerald-400 flex items-center justify-center text-white text-2xl font-semibold">
                  {m.name.charAt(0)}
                </div>

                <h3 className="text-xl font-semibold text-green-800">
                  {m.name}
                </h3>
                <p className="text-gray-600 mt-2">{m.role}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

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
