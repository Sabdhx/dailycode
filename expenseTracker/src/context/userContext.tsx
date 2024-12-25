import React, { createContext, useState, ReactNode } from 'react';

// Define the type for the context state
interface UserContextType {
  addExpense: number | null;
  setAddExpense: React.Dispatch<React.SetStateAction<number | null>>;
}

// Create the context with a default value
const MyContext = createContext<UserContextType | undefined>(undefined);

// Create the Context Provider component
interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
const [expense , setExpense] = useState([])
const [income , setIncome] = useState<null  | number>(null)
  const [totalAmount, setTotalAmount] = useState<number>(3000);

  return (
    <MyContext.Provider value={{expense,setExpense, income, setIncome, totalAmount , setTotalAmount}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, UserContextProvider };
