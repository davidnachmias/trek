import React from "react";
import { PROJECTS } from "../constants/constants";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects and Experiments</h2>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4 mr-20 ">
            {project.image ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  className="w-full cursor-pointer"
                  alt={project.title}
                />
              </a>
            ) : (
              <div className="w-full h-48 bg-neutral-800 flex items-center justify-center text-neutral-400">
                No image available
              </div>
            )}
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            {project.technologies && (
              <p className="text-sm">
                <span className="mr-2 font-semibold">Technologies:</span>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="mr-2 text-pink-300">
                    {tech}
                  </span>
                ))}
              </p>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 underline"
              >
                {project.url}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
