import { useEffect } from "react";
import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import SelectedProject from "./SelectedProjects";
import PhoneTopBar from "./PhoneTopBar";
import { useProjects } from "../hooks/useProjects";
import { useSidebar } from "../hooks/useSidebar";

const PageContent = () => {
  const { projectsState } = useProjects();
  const { closeSidebar } = useSidebar();

  useEffect(() => {
    closeSidebar();
  }, [projectsState.selectedProjectId]);

  return (
    <div className="flex flex-col w-full p-7">
      <PhoneTopBar />
      {projectsState.selectedProjectId === null ? (
        <NewProject />
      ) : projectsState.selectedProjectId === undefined ? (
        <NoProjectSelected />
      ) : (
        <SelectedProject />
      )}
    </div>
  );
};

export default PageContent;