import {
  createContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { Project, ProjectData, getNextId, reindexIds } from "../models/index.ts";

interface ProjectsState {
  selectedProjectId: number | null | undefined;
  projects: Project[];
}

type ProjectsAction =
  | { type: "GO_HOME" }
  | { type: "SELECT_PROJECT"; payload: number }
  | { type: "START_ADD_PROJECT" }
  | { type: "ADD_PROJECT"; payload: ProjectData }
  | { type: "DELETE_PROJECT" }
  | { type: "ADD_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "CANCEL" };

const initialProjectsState: ProjectsState = {
  selectedProjectId: undefined,
  projects: [],
};

const projectsReducer = (
  state: ProjectsState,
  action: ProjectsAction
): ProjectsState => {
  switch (action.type) {
    case "GO_HOME":
      return state.selectedProjectId !== undefined
        ? { ...state, selectedProjectId: undefined }
        : state;
    case "SELECT_PROJECT":
      return { ...state, selectedProjectId: action.payload };
    case "START_ADD_PROJECT":
      return { ...state, selectedProjectId: null };
    case "ADD_PROJECT": {
      const newProject = new Project({
        id: getNextId(state.projects),
        title: action.payload.title,
        description: action.payload.description,
        dueDate: action.payload.dueDate,
      });
      return {
        ...state,
        selectedProjectId: undefined,
        projects: [...state.projects, newProject],
      };
    }
    case "DELETE_PROJECT": {
      const updatedProjects = state.projects.filter(
        (p) => p.id !== state.selectedProjectId
      );
      return {
        ...state,
        selectedProjectId: undefined,
        projects: reindexIds(updatedProjects),
      };
    }
    case "ADD_TASK": {
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === state.selectedProjectId
            ? new Project({
                id: project.id,
                title: project.title,
                description: project.description,
                dueDate: project.dueDate,
                tasks: [...project.tasks, { id: getNextId(project.tasks), text: action.payload }]
              })
            : project
        ),
      };
    }
    case "DELETE_TASK": {
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === state.selectedProjectId
            ? new Project({
                id: project.id,
                title: project.title,
                description: project.description,
                dueDate: project.dueDate,
                tasks: reindexIds(project.tasks.filter((task) => task.id !== action.payload)),
              })
            : project
        ),
      };
    }    
    case "CANCEL":
      return { ...state, selectedProjectId: undefined };
    default:
      return state;
  }
};

interface ProjectsContextType {
  projectsState: ProjectsState;
  handleGoHomePage: () => void;
  handleAddTask: (text: string) => void;
  handleDeleteTask: (id: number) => void;
  handleSelectProject: (id: number) => void;
  handleStartAddProject: () => void;
  handleAddProject: (data: ProjectData) => void;
  handleCancelButton: () => void;
  handleDeleteProject: () => void;
}

export const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projectsState, projectsStateDispatch] = useReducer(
    projectsReducer,
    initialProjectsState,
    (initial) => {
      const persisted = localStorage.getItem("projectsState");
      if (persisted) {
        const parsed = JSON.parse(persisted) as ProjectsState;
        parsed.projects = parsed.projects.map((p: any) =>
          new Project({
            id: p.id,
            title: p.title,
            description: p.description,
            dueDate: p.dueDate,
            tasks: p.tasks,
          })
        );
        return parsed;
      }
      return initial;
    }
  );

  useEffect(() => {
    localStorage.setItem("projectsState", JSON.stringify(projectsState));
  }, [projectsState]);

  const contextValue: ProjectsContextType = {
    projectsState,
    handleGoHomePage: () => projectsStateDispatch({ type: "GO_HOME" }),
    handleSelectProject: (id: number) => projectsStateDispatch({ type: "SELECT_PROJECT", payload: id }),
    handleStartAddProject: () => projectsStateDispatch({ type: "START_ADD_PROJECT" }),
    handleAddProject: (data: ProjectData) => projectsStateDispatch({ type: "ADD_PROJECT", payload: data }),
    handleDeleteProject: () => projectsStateDispatch({ type: "DELETE_PROJECT" }),
    handleAddTask: (text: string) => projectsStateDispatch({ type: "ADD_TASK", payload: text }),
    handleDeleteTask: (id: number) => projectsStateDispatch({ type: "DELETE_TASK", payload: id }),
    handleCancelButton: () => projectsStateDispatch({ type: "CANCEL" }),
  };

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
};