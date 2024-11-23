import React from "react";
import { technologies } from "../constants/technologies";
import TechCard from "./TechCard";

const Skills = () => {
  return (
    <section
      className="h-screen flex justify-start items-start flex-col pt-28"
      id="skills"
    >
      <div className="flex justify-between items-center gap-8 mb-10 flex-row-reverse w-full">
        <h3 className="text-4xl font-extrabold md:text-6xl header-title">
          Skills<span className="dot"></span>
        </h3>
        <div className="h-[1px] bg-gray-500 w-full"></div>
      </div>
      <div className="font-normal w-full text-justify grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4">
        {technologies.map((tech) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            color={tech.color}
            logo={tech.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
