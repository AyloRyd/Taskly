import NewProject from "./NewProject.tsx";
import NoProjectSelected from "./NoProjectSelected.tsx";
import SelectedProject from "./SelectedProject.tsx";
import { useProjects } from "../store/projects-context.tsx";

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