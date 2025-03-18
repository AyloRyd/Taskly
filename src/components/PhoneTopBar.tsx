import { HiViewGrid } from "react-icons/hi";
import TasklyLogo from "../assets/todo-icon.png"; 
import { useProjects } from "../hooks/useProjects";
import { useSidebar } from "../hooks/useSidebar";

const PhoneTopBar = () => {
  const { toggleSidebar } = useSidebar();
  const { handleGoHomePage } = useProjects();

  return (
    <div className="flex items-center justify-between md:hidden">
      <div
        onClick={handleGoHomePage}
        className="cursor-pointer flex items-center"
      >
        <img src={TasklyLogo} alt="Taskly logo" className="h-6 mr-2" />
        <p className="font-bold text-xl text-stone-900 dark:text-stone-100">Taskly</p>
      </div>

      <button
        onClick={toggleSidebar}
        className="cursor-pointer text-stone-900 dark:text-stone-100 p-2"
        aria-label="Open sidebar"
      >
        <HiViewGrid className="w-8 h-8" />
      </button>
    </div>
  );
};

export default PhoneTopBar;
