import { createContext, useState, ReactNode, useContext } from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
}

interface AppContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  return (
    <AppContext.Provider value={{ tasks, addTask }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
