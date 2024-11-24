import React from "react";
import Links from "./Links";

const Footer = () => {
  return (
    <div className="py-20 text-center font-3xl flex justify-between items-center  md:flex-row flex-col">
      <div className="text-2xl text-gray-400">
        &copy; {new Date().getFullYear()}
      </div>
      <div className="text-7xl sacramento-font bg-gradient-to-r from-pink-500 to-amber-500 text-transparent bg-clip-text py-5">
        Aishwarya Khatri
      </div>
      <Links />
    </div>
  );
};

export default Footer;
