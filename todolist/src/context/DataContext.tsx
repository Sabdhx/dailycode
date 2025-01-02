import React, { createContext, useState, ReactNode, useEffect } from "react";

// Define the context's value type
interface ContextType {
  data: [];
  setData: React.Dispatch<React.SetStateAction<string | null>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  catagory: string;
  setCatagory: React.Dispatch<React.SetStateAction<string>>;
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
  dueDate: string;
  setDueDate: React.Dispatch<React.SetStateAction<string>>;
  // users: any[]; // Correctly type the users state as an array
  // setUsers: React.Dispatch<React.SetStateAction<any[]>>;
}

// Create the context with a default value of `undefined`
export const MyContext = createContext<ContextType | undefined>(undefined);

// Define a provider component
interface DataContextProps {
  children: ReactNode;
}

export const DataContext: React.FC<DataContextProps> = ({ children }) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("todos");
    return savedData ? JSON.parse(savedData) : [];
  });

  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [catagory, setCatagory] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState(
  () => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  // Type users as an array of objects
  const [currentUser, setCurrentUser] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const settingUsers = (user) => {
    const allUsers = [...users];

      const updateUser = [...allUsers, { username: user,id:allUsers.length }];
      setUsers(updateUser);
      localStorage.setItem("users", JSON.stringify(updateUser));

  };
  console.log(users)
  return (
    <MyContext.Provider
      value={{
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
           setUsers,
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        settingUsers,
        filteredData,
        setFilteredData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
