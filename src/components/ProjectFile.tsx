import { Project } from "@/lib/types";
import { Link } from "react-router-dom";

const ProjectFile = ({ project }: { project: Project }) => {
  const { title, description, links, tools } = project;
  return (
    <div className="group relative transition-all duration-150 hover:-translate-y-2">
      {/* Page */}
      <div className="absolute -top-1 left-0.5 h-10 w-[98%] rounded-t-sm bg-white transition-all duration-300 group-hover:-top-3"></div>

      <div className="bg-background relative flex h-full cursor-pointer flex-col justify-between space-y-4 rounded-xl rounded-tl-none p-4">
        {/* Folder Tab */}
        <div className="bg-background absolute -top-5 left-0 h-8 w-full max-w-32 rounded-t-xl"></div>

        <h2 className="text-primary font-bold">{title}</h2>

        <p className="line-clamp-3 min-h-[60px] text-sm">{description}</p>

        <p className="text-muted-foreground min-h-[40px] text-sm">
          {tools.join(", ")}
        </p>

        <div className="flex gap-2">
          {links.map((link) => (
            <Link
              target="_blank"
              key={link.link}
              to={link.link}
              className="flex items-center gap-1 text-sm"
            >
              <span className="hover:underline">{link.type}</span>
              <img src="images/external-link.svg" className="size-4" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFile;
