import projects from "@/assets/data/projects";
import Heading from "@/components/Heading";
import ProjectFile from "@/components/ProjectFile";

const Projects = () => {
  return (
    <>
      <title>Yashil | Projects</title>

      <Heading title="Projects" />

      <div className="mt-6 grid items-stretch gap-x-3 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectFile project={project} key={project.title} />
        ))}
      </div>

      <span className="mt-8 flex flex-col items-center justify-center gap-2 md:flex-row">
        <h1 className="text-center text-xl font-bold">
          ...and that's all for now. More projects coming soon!
        </h1>
        <img
          src="images/saluting-face.png"
          alt="saluting-face"
          className="size-7"
          loading="lazy"
        />
      </span>
    </>
  );
};

export default Projects;
