import React from "react";
import { HERO_CONTENT } from "../constants/constants";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="border-b border-neutral-400 pb-8 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 2 }}
            className="flex flex-col items-center h-screen lg:items-start"
          >
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">
              David Nachmias
            </h1>
            <span className="bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 bg-clip-text text-3xl font-semibold text-transparent">
              Full Stack Developer
            </span>
            <p className="pt-16 text-2xl font-thin tracking-tight">
              {HERO_CONTENT}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
