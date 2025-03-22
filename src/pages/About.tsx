import techStack from "@/assets/data/techStack.ts";
import { motion } from "motion/react";
import Heading from "@/components/Heading";
import experiences from "@/assets/data/experience";
import education from "@/assets/data/education";
import List from "@/components/List";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <>
      <Heading title="About Me" />

      {/* About */}
      <p className="text-muted-foreground mt-4 font-sans italic">
        Hello there! I am Yashil Singh from Nepal. You can call me Yashil. Fresh
        out of my bachelor's in Computing, I'm a web development enthusiast with
        a keen eye for frontend design. I love crafting visually stunning UIs
        and enhancing user experience, ensuring every interaction is delightful.
        But I don’t stop there—I also dive into backend development, blending
        creativity with technical prowess to create seamless, full-stack web
        solutions.
      </p>

      <h2 className="text-xl font-bold">What I Use</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            className="bg-secondary flex cursor-pointer items-center gap-4 rounded-xl p-4"
            whileHover={{ y: -5, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <img
              src={tech.src}
              alt={tech.name}
              loading="lazy"
              className="size-8 object-contain"
            />
            <span className="font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Experience */}
      <List
        title="Experience"
        Icon={BriefcaseBusiness}
        listData={experiences}
      />

      <span></span>

      {/* Education */}
      <List title="Education" Icon={GraduationCap} listData={education} />
    </>
  );
};

export default About;
