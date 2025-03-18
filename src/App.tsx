import { ProjectsProvider } from "./store/ProjectsContext";
import { ThemeProvider } from "./store/ThemeContext";
import { SidebarProvider } from "./store/SidebarContext";
import Sidebar from "./components/Sidebar";
import PageContent from "./components/PageContent";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ProjectsProvider>
        <SidebarProvider>
          <main className="h-screen flex bg-stone-50 dark:bg-stone-800">
            <Sidebar />
            <PageContent />
          </main>
        </SidebarProvider>
      </ProjectsProvider>
    </ThemeProvider>
  );
};

export default App;