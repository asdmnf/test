import ProjectCard from "./ProjectCard";

type Project = {
  id: number;
  logo: string;
  images: string[];
  title: string;
  isFavorite: boolean;
};

const ProjectsWrapper = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectsWrapper;
