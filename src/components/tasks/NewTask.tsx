import { useState } from "react";
import { useProjects } from "../../hooks/useProjects";

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
        className="w-64 h-[2.5rem] px-2 py-1 rounded-xl bg-stone-200 dark:bg-stone-700 dark:text-stone-50"
        onChange={handleChange}
        value={enteredTask}
        placeholder="Enter a new task"
      />
      <button
        onClick={handleClick}
        className={`cursor-pointer px-4 py-2 text-base rounded-xl bg-stone-700 dark:bg-stone-100 text-stone-100 dark:text-stone-900 hover:bg-stone-600 dark:hover:bg-stone-300 transition-colors ease-in-out`}
        disabled={!enteredTask.trim()}
      >
        Add task
      </button>
    </div>
  );
};

export default NewTask;
