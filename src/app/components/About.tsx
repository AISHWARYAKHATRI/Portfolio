import React from "react";
import Links from "./Links";
import { IoArrowForward } from "react-icons/io5";

const AboutMe = () => {
  return (
    <section className="section-wrapper" id="about">
      <div className="mx-auto text-center">
        <div className="flex justify-between items-center gap-8 mb-10">
          <h3 className="text-4xl font-extrabold md:text-6xl header-title">
            About<span className="dot"></span>
          </h3>
          <div className="h-[1px] bg-gray-500 w-full"></div>
        </div>
        <div className="font-normal text-justify">
          <p className="text-lg mb-8">
            Hi there! I am a dedicated{" "}
            <strong className="text-indigo-600">Software Developer</strong> with{" "}
            <span className="text-indigo-600">2 years</span> of experience in
            creating dynamic and user-friendly web applications. My expertise
            lies in technologies like{" "}
            <span className="text-indigo-600">React.js</span>,{" "}
            <span className="text-indigo-600">Next.js</span>,{" "}
            <span className="text-indigo-600">Tailwind CSS</span>,{" "}
            <span className="text-indigo-600">HTML</span>,{" "}
            <span className="text-indigo-600">CSS</span>,{" "}
            <span className="text-indigo-600">JavaScript</span>, and{" "}
            <span className="text-indigo-600">Redux</span>. I am passionate
            about building solutions that not only meet client needs but also
            push the boundaries of design and functionality.
          </p>
          <p className="text-lg mb-8">
            have contributed to projects in diverse domains, including{" "}
            <strong className="text-indigo-600">
              AI, Blockchain, E-commerce
            </strong>
            , and <strong className="text-indigo-600">Booking Systems</strong>.
            My work has ranged from designing responsive, pixel-perfect UIs to
            optimizing performance and implementing efficient architectures. I
            am committed to learning new technologies and practices to stay
            ahead in this fast-evolving field. .
          </p>
          <p className="text-lg">
            I am currently seeking opportunities where I can apply my skills to
            create impactful digital experiences while exploring full-stack
            development. If you&apos;re looking for a developer who is
            enthusiastic, detail-oriented, and eager to take on new challenges,
            let&apos;s connect and collaborate!
          </p>
        </div>
        <div className="flex mt-10 items-center gap-5">
          <span className="text-xl text-primary">
            My Links <IoArrowForward className="inline" />
          </span>
          <Links />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
