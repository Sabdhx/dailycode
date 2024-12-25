import React, { createContext, useState, ReactNode, useEffect } from 'react';

// Define the context's value type
interface ContextType {
  data: string | null;
  setData: React.Dispatch<React.SetStateAction<string | null>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  catagory: string;
  setCatagory: React.Dispatch<React.SetStateAction<string>>;
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
  dueDate: string;
  setDueDate: React.Dispatch<React.SetStateAction<string>>;
  users: any[];  // Correctly type the users state as an array
  setUsers: React.Dispatch<React.SetStateAction<any[]>>;
}

// Create the context with a default value of `undefined`
export const MyContext = createContext<ContextType | undefined>(undefined);

// Define a provider component
interface DataContextProps {
  children: ReactNode;
}

export const DataContext: React.FC<DataContextProps> = ({ children }) => {
  const [data, setData] = useState<[]>([]);
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [catagory, setCatagory] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [users, setUsers] = useState<any[]>([]); // Type users as an array of objects

  return (
    <MyContext.Provider value={{
      data,
      setData,
      description,
      setDescription,
      catagory,
      setCatagory,
      priority,
      setPriority,
      dueDate,
      setDueDate,
      users,
      setUsers
    }}>
      {children}
    </MyContext.Provider>
  );
};
