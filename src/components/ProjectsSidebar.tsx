import { useProjects } from "../store/projects-context.tsx";

const ProjectsSidebar = () => {
  const {
    projectsState,
    handleGoHomePage,
    handleStartAddProject,
    handleSelectProject,
  } = useProjects();

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2
        onClick={handleGoHomePage}
        className="cursor-pointer mb-8 font-bold uppercase md:text-xl text-stone-200"
      >
        Your projects
      </h2>
      <div>
        <button
          onClick={handleStartAddProject}
          className="cursor-pointer px-4 py-2 text-xs md:text-base rounded-xl bg-stone-700 text-stone-100 hover:bg-stone-600 hover:text-stone-100 transition-colors ease-in-out"
        >
          + Add project
        </button>
      </div>
      <ul className="mt-8">
        {projectsState.projects.map((project) => {
          let buttonCss =
            "cursor-pointer w-full flex flex-col text-left justify-between gap-1 p-3 my-4 rounded-xl";
          if (project.id === projectsState.selectedProjectId) {
            buttonCss += " bg-stone-800";
          } else {
            buttonCss += " bg-stone-900 hover:bg-stone-800";
          }
          return (
            <li key={project.id}>
              <button
                className={buttonCss}
                onClick={() => handleSelectProject(project.id)}
              >
                <h3 className="font-bold text-stone-200 truncate">{project.title}</h3>
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
