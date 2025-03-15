import { useState } from "react";
import Input from "./ui/Input";
import Modal from "./ui/Modal";
import Wrapper from "./ui/Wrapper";
import { useProjects } from "../hooks/useProjects";
import { useTitle } from "../hooks/useTitle";

const NewProject = () => {
  useTitle("Taskly: new taskgroup");

  const { handleAddProject, handleCancelButton } = useProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [isTitleTooBig, setIsTitleTooBig] = useState(false);
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSave = () => {
    if (!title.trim() || !description.trim() || !dueDate) {
      setIsModalOpen(true);
      return;
    }

    if (title.trim().length > 15) {
      setIsTitleTooBig(true);
      setIsModalOpen(true);
      return;
    }

    handleAddProject({ title, description, dueDate });
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          isTitleTooBig && setIsTitleTooBig(false);
          setIsModalOpen(false);
        }}
        closeButton={
          <button className="cursor-pointer px-6 py-2 mt-4 w-full rounded-xl bg-stone-700 dark:bg-stone-100 text-stone-100 dark:text-stone-900 hover:bg-stone-600 dark:hover:bg-stone-300 transition-colors ease-in-out">
            Cancel
          </button>
        }
      >
        <h2 className="text-xl font-bold text-stone-600 dark:text-stone-200 my-2">Invalid input</h2>
        {isTitleTooBig ? (
          <p className="text-stone-500 dark:text-stone-300 mb-4">
            Title length must be less <br /> then 15 symbols.
          </p>
        ) : (
          <p className="text-stone-500 dark:text-stone-300 mb-4">Please fill out all fields.</p>
        )}
      </Modal>
      <Wrapper>
        <menu className="flex items-center justify-end gap-4">
          <li>
            <button
              onClick={handleCancelButton}
              className="cursor-pointer px-8 py-2 text-base rounded-xl bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors ease-in-out"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="cursor-pointer px-8 py-2 text-base rounded-xl bg-stone-700 dark:bg-stone-100 text-stone-100 dark:text-stone-900 hover:bg-stone-600 dark:hover:bg-stone-300 transition-colors ease-in-out"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            type="text"
            label="Title"
          />
          <Input
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
            label="Description"
            textarea
          />
          <Input
            value={dueDate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDueDate(e.target.value)
            }
            type="date"
            label="Due date"
          />
        </div>
      </Wrapper>
    </>
  );
};

export default NewProject;
