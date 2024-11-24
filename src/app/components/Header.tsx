import Link from "next/link";
import React, { useEffect, useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

const Header = () => {
  const [headerBorder, setHeaderBorder] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window !== undefined && window.scrollY > 0) {
        setHeaderBorder(true);
      } else {
        setHeaderBorder(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="header"
        className={`md:block hidden container m-auto bg-transparent top-0 z-50 fixed backdrop-filter backdrop-blur-sm bg-opacity-30 shadow-lg md:p-5 xl:py-8 xl:px-28 ${
          headerBorder && "border-b border-secondary"
        }`}
      >
        <div className="flex justify-between text-lg max-w-5xl m-auto">
          <div className="flex items-center text-primary">
            <Link
              href="/"
              className="text-xl font-extrabold md:text-3xl header-title-sm"
            >
              {"</>"}
            </Link>
          </div>

          <nav className="hidden justify-end md:flex">
            <ul className="flex gap-10">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className="hover:text-primary cursor-pointer"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <header className="fixed left-0 top-0 bottom-0 bg-background h-screen w-10 z-50 md:hidden flex justify-start flex-col border-box">
        <Link
          href="/"
          className="text-xl text-center font-extrabold header-title-sm h-30 py-5 text-primary"
        >
          {"</>"}
        </Link>
        <nav className="flex justify-end flex-col text-gray-400 border-box">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <span className="hover:text-primary cursor-pointer header-tab-mobile w-full hover:bg-gray-900">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
