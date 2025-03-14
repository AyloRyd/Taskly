import { useState } from "react";
import { useProjects } from "../../store/projects-context.tsx";

const NewTask = () => {
  const { handleAddTask } = useProjects();
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (!enteredTask.trim()) {
      return; 
    }

    handleAddTask(enteredTask);
    setEnteredTask(""); 
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 h-[2.5rem] px-2 py-1 rounded-xl bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
        placeholder="Enter a new task"
      />
      <button
        onClick={handleClick}
        className={`text-stone-700 hover:text-stone-900 ${!enteredTask.trim() ? 'opacity-50' : 'cursor-pointer'}`}
        disabled={!enteredTask.trim()}
      >
        Add task
      </button>
    </div>
  );
};

export default NewTask;
