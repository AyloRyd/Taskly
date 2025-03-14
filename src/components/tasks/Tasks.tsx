import { HiTrash } from "react-icons/hi";
import NewTask from "./NewTask.tsx";
import { useProjects } from "../../store/projects-context.tsx";

const Tasks = () => {
  const { projectsState, handleDeleteTask } = useProjects();

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  if (!selectedProject) {
    return (
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <p className="text-stone-800 mt-6">Please select a project to view tasks.</p>
      </section>
    );
  }

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      {selectedProject.tasks.length === 0 ? (
        <p className="text-stone-800 mt-6">This project does not have any tasks yet.</p>
      ) : (
        <ul className="py-4 mt-4">
          {selectedProject.tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center my-4 p-4 rounded-xl bg-stone-100"
            >
              <span>{task.text}</span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="cursor-pointer text-stone-50 bg-stone-500 hover:bg-red-500 h-10 py-1 px-3 rounded-xl transition-colors ease-in-out"
              >
                <HiTrash size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;