import SidebarHeader from "./SidebarHeader";
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
        <button
          onClick={handleStartAddProject}
          className="cursor-pointer w-full px-4 py-2 text-base rounded-xl text-stone-100 bg-gradient-to-br from-purple-700 to-teal-700 hover:from-purple-600 hover:to-teal-600 transition-colors ease-in-out duration-300"
        >
          New taskgroup
        </button>
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
