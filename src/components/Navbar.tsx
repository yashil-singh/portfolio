import {
  Contact,
  Cpu,
  FolderKanban,
  GraduationCap,
  Info,
  Menu,
} from "lucide-react";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 w-full bg-background/60 backdrop-blur-sm z-30">
      <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between pt-10 pb-3 md:pb-6 px-2 lg:px-2 max-w-[1000px] m-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold uppercase text-primary button-animation cursor-pointer">
            <a href="#top">YASHIL</a>
          </h1>
          <button
            className="md:hidden button-animation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="size-7" />
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "max-h-screen" : "max-h-0 md:max-h-screen"
          } overflow-hidden flex flex-col md:flex-row gap-10 font-semibold transition-all duration-500`}
        >
          <li className="hover:text-primary transition-all duration-300 cursor-pointer decoration-primary button-animation">
            <a href="#about" className="flex items-center gap-2 font-normal">
              <Info />
              About
            </a>
          </li>
          <li className=" hover:text-primary transition-all duration-300 cursor-pointer decoration-primary button-animation">
            <a
              href="#education"
              className="flex items-center gap-2 font-normal"
            >
              <GraduationCap />
              Education
            </a>
          </li>
          <li className=" hover:text-primary transition-all duration-300 cursor-pointer decoration-primary button-animation">
            <a href="#tech" className="flex items-center gap-2 font-normal">
              <Cpu />
              Tech Stack
            </a>
          </li>

          <li className=" hover:text-primary transition-all duration-300 cursor-pointer decoration-primary button-animation">
            <a href="#projects" className="flex items-center gap-2 font-normal">
              <FolderKanban />
              Projects
            </a>
          </li>
          <li className=" hover:text-primary transition-all duration-300 cursor-pointer decoration-primary button-animation">
            <a href="#contact" className="flex items-center gap-2 font-normal">
              <Contact />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
