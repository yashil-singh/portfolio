import { GraduationCap, School, University } from "lucide-react";
import React from "react";

const Education: React.FC = () => {
  return (
    <section id="education" className="section-container">
      <div className="flex flex-col items-center gap-14">
        <h1 className="text-primary text-3xl md:text-[50px] leading-tight flex items-center gap-3">
          <GraduationCap className="size-10" /> Education
        </h1>
        <div className="space-y-14">
          <div className="flex gap-8 flex-1">
            <div className="flex flex-col items-center gap-7 pt-2">
              <div className="w-4 h-4 min-h-4 rounded-full bg-black/50"></div>
              <div className="w-1 bg-black/50 h-full"></div>
            </div>
            <div className="flex flex-col gap-3 rounded">
              <h1 className="text-3xl text-primary">2019-2021</h1>
              <h1 className="text-xl">SLC</h1>
              <span className="flex items-center gap-2">
                <School />
                <p>Global College of Management</p>
              </span>
              <p>
                Completed my high school at Global college of management in the
                management stream majoring in computer science.
              </p>
            </div>
          </div>
          <div className="flex gap-8 flex-1">
            <div className="flex flex-col items-center gap-7 pt-2">
              <div className="w-4 h-4 min-h-4 rounded-full bg-black/50"></div>
              <div className="w-1 bg-black/50 h-full"></div>
            </div>
            <div className="flex flex-col flex-1 gap-3 rounded">
              <h1 className="text-3xl text-primary">2021-2024</h1>
              <h1 className="text-xl">BsC (Hons) Computing</h1>
              <span className="flex items-center gap-2">
                <University />
                <p>London Metropolitan University</p>
              </span>
              <p>
                Completed my bachelor's in Islington college majoring in
                Computing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
