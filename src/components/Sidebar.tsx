import Button from "./ui/Button";
import SidebarHeader from "./SidebarHeader";
import SidebarProjectsList from "./SidebarProjectsList";
import { useProjects } from "../hooks/useProjects";
import { useSidebar } from "../hooks/useSidebar";
import clsx from "clsx";

const Sidebar = () => {
  const { handleStartAddProject } = useProjects();
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <>
      <aside
        className={clsx(
          "fixed top-0 left-0 z-40 transition-transform duration-300 md:relative md:translate-x-0 md:w-72 lg:w-96 md:h-auto px-8 py-16 bg-stone-100 dark:bg-stone-900 text-stone-50 rounded-r-xl",
          {
            "translate-x-0 w-2/3 h-full": isSidebarOpen,
            "-translate-x-full w-2/3 h-full": !isSidebarOpen,
          }
        )}
      >
        <SidebarHeader />
        <h2 className="flex flex-col mb-8 font-bold uppercase text-xl text-stone-700 dark:text-stone-200">
          Your taskgroups
        </h2>
        <Button
          variant="gradient"
          className="w-full"
          onClick={handleStartAddProject}
        >
          New taskgroup
        </Button>
        <SidebarProjectsList />
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
