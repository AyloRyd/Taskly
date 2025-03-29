import Button from "./ui/Button";
import { useState } from "react";
import { useProjects } from "../hooks/useProjects";

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
    <div className="flex justify-between md:justify-start gap-4">
      <input
        type="text"
        className="w-full h-[2.5rem] px-4 py-1 rounded-xl bg-stone-200 dark:bg-stone-700 dark:text-stone-50"
        onChange={handleChange}
        value={enteredTask}
        placeholder="Enter a new task"
      />
      <Button
        variant="primary"
        className="w-28"
        disabled={!enteredTask.trim()}
        onClick={handleClick}
      >
        Add task
      </Button>
    </div>
  );
};

export default NewTask;
