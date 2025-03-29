import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import Button from "./ui/Button";
import TasklyLogo from "../assets/todo-icon.png";
import { useProjects } from "../hooks/useProjects";
import { useTheme } from "../hooks/useTheme";
import { useSidebar } from "../hooks/useSidebar";

const SidebarHeader = () => {
  const { handleGoHomePage } = useProjects();
  const { theme, toggleTheme } = useTheme();
  const { closeSidebar } = useSidebar();

  return (
    <div className="flex justify-between items-center mb-12">
      <div
        onClick={() => {
          handleGoHomePage();
          closeSidebar();
        }}
        className="cursor-pointer flex items-center"
      >
        <img src={TasklyLogo} alt="Taskly logo" className="h-6 mr-2" />
        <p className="font-bold text-xl text-stone-700 dark:text-stone-200">
          Taskly
        </p>
      </div>
      <Button
        onClick={toggleTheme}
        variant="secondary"
        className="p-2 w-fit h-fit"
      >
        {theme === "light" ? (
          <HiSun size={27} className="text-amber-400" />
        ) : (
          <HiMoon size={25} />
        )}
      </Button>
    </div>
  );
};

export default SidebarHeader;
