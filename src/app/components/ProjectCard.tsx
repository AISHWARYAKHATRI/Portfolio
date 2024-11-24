import React from "react";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  projectImage: string;
  githubLink: string;
  liveDemoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  projectImage,
  githubLink,
  liveDemoLink,
}) => {
  return (
    <div className="flex items-start justify-center flex-col">
      <div className="bg-secondary relative rounded-lg p-4 pt-8 md:px-8 md:pt-16 w-full h-full aspect-video overflow-hidden">
        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-0"
        >
          <Image
            src={projectImage}
            alt={`${title} project image`}
            className="rounded-t-lg"
            width={500}
            height={300}
          />
        </a>
      </div>
      <div className="my-3 w-full flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3 text-nowrap">
          <h4 className="header-title text-2xl">{title}</h4>
          <div className="h-[0.5px] bg-gray-500 w-full"></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-7 h-7 cursor-pointer hover:text-primary" />
          </a>
          {liveDemoLink && (
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
              <TbExternalLink className="w-7 h-7 cursor-pointer hover:text-primary" />
            </a>
          )}
        </div>
        <div className="flex text-primary font-bold text-base">
          {technologies.map((tech, index) => (
            <span key={tech}>
              {tech}
              {index < technologies.length - 1 ? " - " : ""}
            </span>
          ))}
        </div>
        <div className="text-gray-400 text-lg">{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
