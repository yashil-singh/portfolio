import React, { useEffect, useState } from "react";
import hero from "../assets/hero-section.png";

const Home: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = hero;
    img.onload = () => setImageLoaded(true);
  }, []);
  return (
    <section id="home">
      <div className="min-h-[calc(100vh-100px)] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="space-y-4 md:space-y-6">
          <h2 className="uppercase text-primary md:text-xl">
            Hello! <span className="animate-pulse duration-75">👋</span>
          </h2>
          <h1 className="uppercase text-3xl md:text-[50px] leading-tight">
            I'm <span className="text-primary">Yashil Singh</span>
          </h1>
          <h2 className="text-xl md:text-3xl">
            I'm a <span className="text-primary">web developer</span> based in
            Nepal. I love to code and design.
          </h2>
        </div>
        {!imageLoaded ? (
          <div className="md:max-h-[535px] h-[535px] w-full max-w-[400px] bg-gray-100/5 rounded animate-pulse"></div>
        ) : (
          <img src={hero} className="md:max-h-[535px] object-contain rounded" />
        )}
      </div>
    </section>
  );
};

export default Home;
