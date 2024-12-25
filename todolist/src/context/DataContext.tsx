import React, { createContext, useState, ReactNode, useEffect } from 'react';

// Define the context's value type
interface ContextType {
  data: string | null;
  setData: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create the context with a default value of `null`
export const MyContext = createContext<ContextType | undefined>(undefined);

// Define a provider component
interface DataContextProps {
  children: ReactNode;
}

export const DataContext: React.FC<DataContextProps> = ({ children }) => {
  const [data, setData] = useState([]);
    const [description, setDescription] = useState<string>("");
    const [dueDate, setDueDate] = useState<string>("");
    const [catagory, setCatagory] = useState<string>("");
    const [priority, setPriority] = useState<string>("");


   
  return (
    <MyContext.Provider value={{ data, setData,description,setDescription,catagory,setCatagory,priority,setPriority,dueDate,setDueDate }}>
      {children}
    </MyContext.Provider>
  );
};

