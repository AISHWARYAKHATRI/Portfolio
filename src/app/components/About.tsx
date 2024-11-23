import React from "react";

const AboutMe = () => {
  return (
    <section className="h-screen flex justify-center items-center" id="about">
      <div className="mx-auto text-center">
        <div className="flex justify-between items-center gap-8 mb-10">
          <h3 className="text-4xl font-extrabold md:text-6xl header-title">
            About<span className="dot"></span>
          </h3>
          <div className="h-[1px] bg-gray-500 w-full"></div>
        </div>
        <div className="font-normal text-justify">
          <p className="text-lg mb-8">
            Hello! I{`'`}m a passionate{" "}
            <strong className="text-indigo-600">Frontend Developer</strong> with
            2 years of experience, specializing in building intuitive and
            performant web applications. I have a strong foundation in{" "}
            <span className="text-indigo-600">React.js</span>,{" "}
            <span className="text-indigo-600">Next.js</span>, and{" "}
            <span className="text-indigo-600">Tailwind CSS</span>, and I&apos;m
            always eager to learn and explore new technologies to create
            innovative and scalable solutions.
          </p>
          <p className="text-lg mb-8">
            My journey in software development began with a deep interest in UI
            design and user experience, and it has grown into a passion for
            crafting seamless, high-performance applications. I’m experienced in
            working with cross-functional teams, contributing to both frontend
            and full-stack projects. I have worked on diverse domains like
            E-Commerce, AI, and Blockchain, always aiming to deliver projects
            that not only meet client expectations but also provide users with
            exceptional experiences.
          </p>
          <p className="text-lg ">
            I&apos;m actively seeking opportunities to leverage my skills in
            frontend development and explore full-stack development to build
            next-level digital experiences. Let&apos;s connect and create
            something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
