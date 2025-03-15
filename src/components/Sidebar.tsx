import SidebarHeader from "./SidebarHeader";
import Button from "./ui/Button";
import { useProjects } from "../hooks/useProjects";

const ProjectsSidebar = () => {
  const { projectsState, handleStartAddProject, handleSelectProject } =
    useProjects();

  return (
    <aside className="w-72 lg:w-96 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
      <SidebarHeader />
      <h2 className="flex flex-col lg:flex-row mb-8 font-bold uppercase text-xl text-stone-200">
        Your taskgroups
      </h2>
      <div>
        <Button
          variant="gradient"
          className="w-full"
          onClick={handleStartAddProject}
        >
          New taskgroup
        </Button>
      </div>
      <ul className="mt-8">
        {projectsState.projects.map((project) => {
          let buttonCss =
            "cursor-pointer w-full flex flex-col text-left justify-between gap-1 p-3 my-4 rounded-xl";
          if (project.id === projectsState.selectedProjectId) {
            buttonCss += " bg-stone-700";
          } else {
            buttonCss += " bg-stone-800 hover:bg-stone-700";
          }
          return (
            <li key={project.id}>
              <button
                className={buttonCss}
                onClick={() => handleSelectProject(project.id)}
              >
                <h3 className="font-bold text-stone-200 truncate">
                  {project.title}
                </h3>
                <span className="text-stone-400">{project.dueDate}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
