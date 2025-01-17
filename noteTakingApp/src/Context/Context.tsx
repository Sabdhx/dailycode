import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

// Correct type for Context
interface ContextType {
  data: string[]; // Changed from string to string[]
  setData: Dispatch<SetStateAction<string[]>>;
  note: string[];
  setNote: Dispatch<SetStateAction<string[]>>;
}

interface ChildProps {
  children: ReactNode;
}

export const MyContext = createContext<ContextType | undefined>(undefined);

function Context({ children }: ChildProps) {
  const [data, setData] = useState<string[]>(() => {
    const value = localStorage.getItem("data");
    return value ? JSON.parse(value) : []; // Ensure the default is an array
  });
  const [note, setNote] = useState<[] | null>(null);

  return (
    <MyContext.Provider value={{ data, setData, note, setNote }}>
      {children}
    </MyContext.Provider>
  );
}

export default Context;
