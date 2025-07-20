import React from "react";
import { PROJECTS } from "../constants/constants";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="border-b border-neutral-400 pb-4">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects and Experiments
      </motion.h2>
      {PROJECTS.map((project, index) => (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          key={index}
          className="mb-8 flex flex-wrap lg:justify-center mx-4 lg:mx-20"
        >
          <div className="w-full lg:w-1/4">
            {project.image ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  className="w-full cursor-pointer rounded-xl border-2 border-neutral-950 mb-4 "
                  alt={project.title}
                />
              </a>
            ) : (
              <div className="w-full h-48 bg-neutral-800 flex items-center justify-center text-neutral-400">
                No image available
              </div>
            )}
          </div>
          <div className="w-full max-w-xl lg:w-3/4 px-6 sm:px-8 lg:px-0 lg:ml-8">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            {project.technologies && (
              <p className="text-sm flex flex-wrap">
                <span className="mr-2 font-semibold">Technologies:</span>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="mr-2 text-pink-300">
                    {tech}
                  </span>
                ))}
              </p>
            )}
            {project.url && (
              <a href={project.url} className="text-pink-300 underline">
                {project.url}
              </a>
            )}
            <p className="mb-4">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
