import React from "react";
import { EXPERIENCES } from "../constants/constants";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="border-b border-neutral-400 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="my-30 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-30 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="mb-2 text-sm"
              >
                {experience.year}
              </motion.p>
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
                <span />
              </h6>
              <p className="mb-4 ">{experience.description}</p>
              {experience.technologies && (
                <p className="text-sm">
                  <span className="mr-2 font-semibold">Technologies:</span>
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className="mr-2">
                      {tech}
                    </span>
                  ))}
                </p>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
