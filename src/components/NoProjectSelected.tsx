import Wrapper from "./ui/Wrapper.tsx";
import noProjectImage from "../assets/no-projects.png";
import { useProjects } from "../store/projects-context.tsx";

const NoProjectSelected = () => {
  const { handleStartAddProject } = useProjects();

  return (
    <Wrapper>
      <div className="mt-24 text-center w-full px-4">
        <img
          src={noProjectImage}
          alt="An empty task list"
          className="w-16 h-16 mx-auto"
        />
        <h2 className="text-xl font-bold text-stone-500 my-4">
          No project selected
        </h2>
        <p className="text-stone-400 mb-4">
          Select a project or get started with a new one
        </p>
        <p className="mt-8">
          <button
            onClick={handleStartAddProject}
            className="cursor-pointer px-4 py-2 text-xs md:text-base rounded-xl bg-stone-700 text-stone-100 hover:bg-stone-600 hover:text-stone-100 transition-colors ease-in-out"
          >
            Create new project
          </button>
        </p>
      </div>
    </Wrapper>
  );
};

export default NoProjectSelected;
