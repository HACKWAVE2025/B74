"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Sprout,
  BarChart3,
  FlaskConical,
  Leaf,
  CloudSun,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Content() {
  const features = [
    {
      title: "Crop Yield Prediction",
      description:
        "Use AI and weather insights to accurately predict crop yields and optimize farming decisions.",
      icon: <BarChart3 className="w-10 h-10 text-green-700 mb-4" />,
    },
    {
      title: "Fertilizer Recommendation",
      description:
        "Get personalized fertilizer plans based on soil health, weather, and nutrient data for maximum productivity.",
      icon: <FlaskConical className="w-10 h-10 text-green-700 mb-4" />,
    },
    {
      title: "Crop Suggestor",
      description:
        "Discover the best crops to grow for your soil, season, and region using AI-powered insights.",
      icon: <Sprout className="w-10 h-10 text-green-700 mb-4" />,
    },
    {
      title: "Soil Health Analysis",
      description:
        "Analyze pH, moisture, and organic content to monitor soil quality and sustainability.",
      icon: <Leaf className="w-10 h-10 text-green-700 mb-4" />,
    },
    {
      title: "Weather-Aware Planning",
      description:
        "Leverage real-time weather and climate predictions for smarter agricultural scheduling.",
      icon: <CloudSun className="w-10 h-10 text-green-700 mb-4" />,
    },
  ];

  return (
    <section className="relative py-20 px-6 sm:px-10 md:px-16 bg-gradient-to-b from-white via-green-50 to-white overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.07),_transparent_70%)]"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-12"
      >
        🌱 AI-Powered Agricultural Features
      </motion.h2>

      {/* Feature Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card
              className="shadow-md hover:shadow-2xl hover:-translate-y-2 bg-white border border-green-100 rounded-2xl transition-all duration-300"
            >
              <CardContent className="p-8 text-center flex flex-col items-center">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 8 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-green-800 mb-3 mt-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
