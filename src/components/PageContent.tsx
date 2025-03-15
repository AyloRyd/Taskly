import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import SelectedProject from "./SelectedProjects";
import { useProjects } from "../hooks/useProjects";

const ProjectContent = () => {
  const { projectsState } = useProjects();
  
  return projectsState.selectedProjectId === null ? (
    <NewProject />
  ) : projectsState.selectedProjectId === undefined ? (
    <NoProjectSelected />
  ) : (
    <SelectedProject />
  );
};

export default ProjectContent;