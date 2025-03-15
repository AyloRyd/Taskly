import { useState } from "react";
import Tasks from "./tasks/Tasks";
import Modal from "./ui/Modal";
import Wrapper from "./ui/Wrapper";
import { useProjects } from "../hooks/useProjects";
import { useTitle } from "../hooks/useTitle";

const SelectedProject = () => {
  const { projectsState, handleDeleteProject } = useProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = projectsState.projects.find(
    (item) => item.id === projectsState.selectedProjectId
  );
  useTitle(`Taskly: ${project?.title}`);

  if (!project) {
    useTitle("Taskly: project not found");
    return <div className="text-stone-700 dark:text-stone-300">Project not found.</div>;
  }

  const date = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeButton={
          <button className="cursor-pointer px-6 py-2 mt-4 w-full rounded-xl bg-stone-700 dark:bg-stone-100 text-stone-100 dark:text-stone-900 hover:bg-stone-600 dark:hover:bg-stone-300 transition-colors ease-in-out">
            Cancel
          </button>
        }
        approveButton={
          <button
            onClick={handleDeleteProject}
            className="cursor-pointer px-6 py-2 mt-4 w-full rounded-xl bg-red-600 text-stone-50 hover:bg-red-500 transition-colors ease-in-out"
          >
            Yes
          </button>
        }
      >
        <h2 className="text-xl font-bold text-stone-600 dark:text-stone-200 my-2 w-60">
          Do you really want to delete the project?
        </h2>
        <p className="text-stone-500 dark:text-stone-300 mb-4">
          You will not be able to restore it.
        </p>
      </Modal>
      <Wrapper>
        <header className="pb-4 mb-4 border-b-2 border-gray-300 dark:border-gray-600">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-stone-700 dark:text-stone-200 mb-2">
              {project.title}
            </h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer text-stone-50 bg-red-600 hover:bg-red-500 py-2 px-6 rounded-xl transition-colors ease-in-out"
            >
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-500 dark:text-stone-200">{date}</p>
          <p className="text-stone-600 dark:text-stone-300 whitespace-pre-wrap">
            {project.description}
          </p>
        </header>
        <Tasks />
      </Wrapper>
    </>
  );
};

export default SelectedProject;