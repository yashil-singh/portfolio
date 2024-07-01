import React, { useEffect, useState } from "react";
import about from "../assets/about-section.jpg";
import resume from "../assets/Yashil Lal Singh - CV.pdf";
import { Info } from "lucide-react";

const About: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = about;
    img.onload = () => setImageLoaded(true);
  }, []);
  return (
    <section
      id="about"
      className="section-container flex flex-col md:flex-row md:items-center md:justify-between gap-10"
    >
      {!imageLoaded ? (
        <div className="md:max-h-[535px] h-[535px] w-full max-w-[400px] bg-gray-100/5 rounded animate-pulse"></div>
      ) : (
        <img src={about} className="md:max-h-[535px] object-contain rounded" />
      )}
      <div className="space-y-8">
        <h1 className="text-primary text-3xl md:text-[50px] leading-tight flex items-center gap-3">
          <Info className="size-10" /> About Me
        </h1>
        <p>
          Crafting captivating digital experiences through elegant code and
          innovative design in the realm of web development.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <strong>Name:</strong>
          <p className="col-span-2">Yashil Lal Singh</p>
          <strong>Date of birth:</strong>
          <p className="col-span-2">August 02, 2003</p>
          <strong>Address:</strong>
          <p className="col-span-2">Lalitpur, Nepal</p>
          <strong>Email:</strong>
          <p className="col-span-2 break-words">yashilsingh0208@gmail.com</p>
          <strong>Phone:</strong>
          <p className="col-span-2">+977-9864166916</p>
        </div>

        <a href={resume} download="Yashil Lal Singh - CV" className="flex">
          <p className="font-semibold bg-primary rounded py-3 px-5 hover:bg-primary/90 transition-all button-animation self-start">
            Download Resume
          </p>
        </a>
      </div>
    </section>
  );
};

export default About;
