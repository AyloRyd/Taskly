import Button from "./ui/Button";
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
          <Button variant="primary" onClick={handleStartAddProject}>
            Create new taskgroup
          </Button>
        </p>
      </div>
    </Wrapper>
  );
};

export default NoProjectSelected;
