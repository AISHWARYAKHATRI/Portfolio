import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants/data";

const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <div className="mx-auto  text-center w-full">
        <div className="flex justify-between items-center gap-8 mb-10">
          <h3 className="text-4xl font-extrabold md:text-6xl header-title">
            Projects<span className="dot"></span>
          </h3>
          <div className="h-[1px] bg-gray-500 w-full"></div>
        </div>
        <div className="font-normal grid md:grid-cols-2 grid-cols-1 text-justify gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
