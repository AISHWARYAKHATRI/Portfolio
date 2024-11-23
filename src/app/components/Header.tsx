import Link from "next/link";
import React from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  // { href: "#projects", label: "Projects" },
];

const Header = () => {
  return (
    <header
      id="header"
      className="container m-auto w-full bg-transparent top-0 z-50 sticky backdrop-filter backdrop-blur-sm bg-opacity-30 shadow-lg p-5 md:p-10"
    >
      <div className="flex justify-between px-5 md:px-10 text-lg">
        <div className="flex items-center text-primary">
          <span className="text-white text-xl font-extrabold md:text-[23px] header-title-sm">
            Aishwarya<span className="dot-sm"></span>
          </span>
        </div>

        <nav className="hidden justify-end md:flex">
          <ul className="flex gap-10">
            {navItems.map((item) => (
              <li key={item.href} className="hover:text-primary cursor-pointer">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
