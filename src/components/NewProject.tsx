import { useState } from "react";
import Input from "./ui/Input.tsx";
import Modal from "./ui/Modal.tsx";
import Wrapper from "./ui/Wrapper.tsx";
import { useProjects } from "../store/projects-context.tsx";

const NewProject = () => {
  const { handleAddProject, handleCancelButton } = useProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [isTitleTooBig, setIsTitleTooBig] = useState(false);
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSave() {
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
          <button className="cursor-pointer px-6 py-2 mt-4 w-full rounded-xl bg-stone-700 text-stone-50 hover:bg-stone-600 transition-colors ease-in-out">
            Cancel
          </button>
        }
      >
        <h2 className="text-xl font-bold text-stone-600 my-2">Invalid input</h2>
        {isTitleTooBig ? (
          <p className="text-stone-500 mb-4">
            Title length must be less <br /> then 15 symbols.
          </p>
        ) : (
          <p className="text-stone-500 mb-4">Please fill out all fields.</p>
        )}
      </Modal>
      <Wrapper>
        <menu className="flex items-center justify-end gap-4">
          <li>
            <button
              onClick={handleCancelButton}
              className="cursor-pointer px-6 py-2 rounded-xl border-stone-50 border-[1px] text-stone-900 hover:border-stone-900 hover:border-[1px] transition-colors ease-in-out"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="cursor-pointer px-6 py-2 rounded-xl border-stone-700 border-[1px] hover:border-stone-600 bg-stone-700 text-stone-50 hover:bg-stone-600 transition-colors ease-in-out"
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
