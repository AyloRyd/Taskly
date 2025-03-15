import Wrapper from "./ui/Wrapper";
import nothingSelectedIcon from "../assets/text-x-generic.svg";
import { useProjects } from "../hooks/useProjects";

const NoProjectSelected = () => {
  const { handleStartAddProject } = useProjects();

  return (
    <Wrapper>
      <div className="mt-24 text-center w-full px-4">
        <img
          src={nothingSelectedIcon}
          alt="An empty task list"
          className="w-20 h-20 mx-auto"
        />
        <h2 className="text-xl font-bold text-stone-500 dark:text-stone-200 my-4">
          No taskgroup selected
        </h2>
        <p className="text-stone-400 dark:text-stone-300 mb-4">
          Select a taskgroup or get started with a new one
        </p>
        <p className="mt-8">
          <button
            onClick={handleStartAddProject}
            className="cursor-pointer px-4 py-2 text-base rounded-xl bg-stone-700 dark:bg-stone-100 text-stone-100 dark:text-stone-900 hover:bg-stone-600 dark:hover:bg-stone-300 transition-colors ease-in-out"
          >
            Create new taskgroup
          </button>
        </p>
      </div>
    </Wrapper>
  );
};

export default NoProjectSelected;
