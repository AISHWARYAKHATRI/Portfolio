import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

const Links = () => {
  return (
    <div className="flex gap-5 text-gray-400">
      <a
        href="https://www.linkedin.com/in/aishwarya-khatri-5984b81b6/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImLinkedin className="w-8 h-8 cursor-pointer hover:text-primary" />
      </a>
      <a
        href="https://github.com/AISHWARYAKHATRI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-8 h-8 cursor-pointer hover:text-primary" />
      </a>
      <a
        href="https://leetcode.com/u/aishwarya_24/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode className="w-8 h-8 cursor-pointer hover:text-primary" />
      </a>
      <a
        href="mailto:aishwaryakhatri20@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdOutlineEmail className="w-8 h-8 cursor-pointer hover:text-primary" />
      </a>
    </div>
  );
};

export default Links;
