import React from 'react';
import { ProjectsProvider } from "./store/projects-context";
import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectContent from "./components/ProjectContent";

const App: React.FC = () => {
  return (
    <ProjectsProvider>
      <main className="h-screen flex">
        <ProjectsSidebar />
        <ProjectContent />
      </main>
    </ProjectsProvider>
  );
};

export default App;