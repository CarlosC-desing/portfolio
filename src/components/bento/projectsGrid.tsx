import { PROJECTS_DATA } from "@/data/projects";
import ProjectCard from "../ui/projectCard";

export default function EventGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
      {PROJECTS_DATA.map((project) => (
        <ProjectCard
          color="bg-flame-500"
          key={project.id}
          title={project.title}
          description={project.description}
          img={project.img}
          stack={project.stack}
          links={project.links}
        />
      ))}
    </div>
  );
}