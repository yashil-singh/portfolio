import { Folder, FolderKanban, Github, Link } from "lucide-react";
import React from "react";

const Projects: React.FC = () => {
  const currentProjects = [
    {
      title: "Threads Clone",
      desc: `Built a clone of the popular social media platform called Threads consising all the functionalities using MERN.`,
      tech: ["React.js", "Node.js", "MongoDB", "TailwindCSS", "Typescript"],
      githubUrl: "https://github.com/yashil-singh/threads",
      url: null,
    },
    {
      title: "Portfolio Website",
      desc: `Built my portfolio website which you are currently viewing.`,
      tech: ["React.js", "TailwindCSS", "Typescript"],
      githubUrl: "https://github.com/yashil-singh/portfolio",
      url: null,
    },
    {
      title: "Uthau (Final Year Project)",
      desc: `Developed a fitness and gym application as my final year project. The mobile application helps users in their fitness journey with fully fuctional admin panel.`,
      tech: ["React.js", "React Native", "Node.js", "Express.js", "PostgreSQL"],
      githubUrl: "https://github.com/yashil-singh/uthau_app",
      url: null,
    },
    {
      title: "Workout Traker",
      desc: `Built a simple website to track exercises. Users can make accounts and sign in. Users can also add and delete exercises. Every user have their own unique list of exercises.`,
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/yashil-singh/workout-react-app",
      url: null,
    },
    {
      title: "AI-Prompt Sharing",
      desc: `Built a website where users can discover and share prompts that can be used with AI-platforms. These are prompts that can be give to AI to use it the right way.`,
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/yashil-singh/workout-react-app",
      url: null,
    },
  ];

  return (
    <section id="projects" className="section-container flex-col gap-10">
      <h1 className="text-primary text-3xl md:text-[50px] leading-tight flex items-center gap-3">
        <FolderKanban className="size-10" /> Projects
      </h1>

      <div className="w-full grid gap-3 grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="max-w-[350px] w-full cursor-pointer hover:-translate-y-2 transition-all rounded overflow-hidden flex flex-col bg-black/50 p-6 gap-5 peer"
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            <div className="flex items-center justify-between">
              <Folder className="size-10 text-primary" />
              <div className="space-x-2">
                {project.githubUrl && (
                  <button
                    className="hover:text-primary transition-all"
                    onClick={() => window.open(project?.githubUrl, "_blank")}
                  >
                    <Github />
                  </button>
                )}
                {project.url && (
                  <button
                    onClick={() => window.open(project.url!, "_blank")}
                    className="hover:text-primary transition-all"
                  >
                    <Link />
                  </button>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-xl peer-hover:text-primary line-clamp-2 text-ellipsis h-[56px]">
                {project.title}
              </h1>
              <p className="text-sm line-clamp-3 text-ellipsis h-[60px]">
                {project.desc}
              </p>
            </div>

            <div className="flex text-sm gap-2 flex-wrap text-gray-400 mt-3">
              {project.tech.map((t, techIndex) => (
                <p key={techIndex}>{t}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
