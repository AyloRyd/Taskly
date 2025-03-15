import React from "react";
import { ProjectsProvider } from "./store/ProjectsContext";
import { ThemeProvider } from "./store/ThemeContext";
import ProjectsSidebar from "./components/Sidebar";
import ProjectContent from "./components/PageContent";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ProjectsProvider>
        <main className="h-screen flex">
          <ProjectsSidebar />
          <ProjectContent />
        </main>
      </ProjectsProvider>
    </ThemeProvider>
  );
};

export default App;