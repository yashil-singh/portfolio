import { Cpu } from "lucide-react";
import React from "react";
import react from "../assets/react.svg";
import node from "../assets/node.svg";
import mongo from "../assets/mongo.svg";
import tailwind from "../assets/tailwind.svg";
import next from "../assets/next.svg";
import postgresql from "../assets/postgresql.svg";

const Tech: React.FC = () => {
  return (
    <section id="tech" className="section-container flex-col gap-12">
      <h1 className="text-primary text-3xl md:text-[50px] leading-tight flex items-center gap-3">
        <Cpu className="size-10" /> Tech Stack
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 place-items-center auto-rows-auto">
        <div className="max-w-[250px] p-5 flex flex-col items-center gap-5">
          <img
            src={react}
            className="size-14 object-contain cursor-pointer hover:scale-110 transition-all duration-300"
          />
          <h1 className="text-xl font-semibold">Reactjs</h1>
        </div>
        <div className="max-w-[250px] p-5 flex flex-col items-center gap-5">
          <img
            src={react}
            className="size-14 object-contain cursor-pointer hover:scale-110 transition-all duration-300"
          />
          <h1 className="text-xl font-semibold">React Native</h1>
        </div>
        <div className="max-w-[250px] p-5 flex flex-col items-center gap-5">
          <img
            src={node}
            className="size-14 object-contain cursor-pointer hover:scale-110 transition-all duration-300"
          />
          <h1 className="text-xl font-semibold">Nodejs</h1>
        </div>
        <div className="max-w-[250px] p-5 flex flex-col items-center gap-5">
          <img
            src={mongo}
            className="size-14 object-contain cursor-pointer hover:scale-110 transition-all duration-300"
          />
          <h1 className="text-xl font-semibold">MongoDB</h1>
        </div>
        <div className="max-w-[250px] p-5 flex flex-col items-center gap-5">
          <img
            src={tailwind}
            className="size-14 object-contain cursor-pointer hover:scale-110 transition-all duration-300"
          />
          <h1 className="text-xl font-semibold">Tailwindcss</h1>
        </div>
        <div className="max-w-[250px] p-5 flex flex-col items-center gap-5">
          <img
            src={next}
            className="size-14 object-contain cursor-pointer hover:scale-110 transition-all duration-300"
          />
          <h1 className="text-xl font-semibold">Nextjs</h1>
        </div>
        <div className="max-w-[250px] p-5 flex flex-col items-center gap-5">
          <img
            src={postgresql}
            className="size-14 object-contain cursor-pointer hover:scale-110 transition-all duration-300"
          />
          <h1 className="text-xl font-semibold">Postgresql</h1>
        </div>
      </div>
    </section>
  );
};

export default Tech;
