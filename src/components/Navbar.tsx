import { Contact, GraduationCap, Info, Lightbulb, Menu } from "lucide-react";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 w-full background z-30">
      <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between pt-10 pb-3 md:pb-6 m-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold uppercase text-primary button-animation cursor-pointer">
            <a href="#top">YASHIL</a>
          </h1>
          <button
            className="md:hidden button-animation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="size-8" />
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "max-h-screen" : "max-h-0 md:max-h-screen"
          } overflow-hidden flex flex-col md:flex-row gap-10 text-lg font-semibold transition-all duration-500`}
        >
          <li className="flex items-center gap-2 hover:text-primary transition-all duration-300 cursor-pointer decoration-primary button-animation">
            <Info />
            <a href="#about" className="font-normal">
              About
            </a>
          </li>
          <li className="flex items-center gap-2 hover:text-primary transition-all duration-300 cursor-pointer decoration-primary button-animation">
            <GraduationCap />
            <a href="#education" className="font-normal">
              Education
            </a>
          </li>
          <li className="flex items-center gap-2 hover:text-primary transition-all duration-300 cursor-pointer decoration-primary button-animation">
            <Lightbulb />
            <a href="#skills" className="font-normal">
              Skills
            </a>
          </li>
          <li className="flex items-center gap-2 hover:text-primary transition-all duration-300 cursor-pointer decoration-primary button-animation">
            <Contact />
            <a href="#contact" className="font-normal">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
