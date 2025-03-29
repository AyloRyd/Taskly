import { useProjects } from "../hooks/useProjects";
import clsx from "clsx";

const SidebarProjectsList = () => {
  const { projectsState, handleSelectProject } = useProjects();

  return (
    <ul className="mt-8">
      {projectsState.projects.map((project) => {
        const buttonCss = clsx(
          "cursor-pointer w-full flex flex-col text-left justify-between gap-1 p-3 my-4 rounded-xl",
          {
            "bg-stone-300 dark:bg-stone-700": project.id === projectsState.selectedProjectId,
            "bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700": project.id !== projectsState.selectedProjectId,
          }
        );

        return (
          <li key={project.id}>
            <button
              className={buttonCss}
              onClick={() => {
                handleSelectProject(project.id);
              }}
            >
              <h3 className="font-bold text-stone-800 dark:text-stone-200 truncate">
                {project.title}
              </h3>
              <span className="dark:text-stone-400 text-stone-700">{project.dueDate}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarProjectsList;
