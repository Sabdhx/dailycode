import React, { createContext, useState, ReactNode } from "react";

// Define the type for the context state
interface UserContextType {
  addExpense: number | null;
  setAddExpense: React.Dispatch<React.SetStateAction<number | null>>;
}

interface catagoryData {
  categoryName: string;
  amount: number;
  paymentMethod: string;
}

// Create the context with a default value
export const MyContext = createContext<UserContextType | undefined>(undefined);

// Create the Context Provider component
interface UserContextProviderProps {
  children: ReactNode;
}




type newIncome ={
  description: string,
  amount:number,
  method:"cash" | "bank"
}
type never ={
  name:string
}


export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [expense, setExpense] = useState([]);
  const [income, setIncome] = useState<number>(0);
  const [catagories, setCatagories] = useState<[]>([]);
  const [cashAmount, setCashAmount] = useState<number>(0);
  const [bankAmount, setBankAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(cashAmount+bankAmount);
  const[category, setCatagory]=useState<never>([])

  const catagoryChanges = (data: catagoryData) => {
    setCatagories((prev) => [...prev, { data }]);

    if (data.paymentMethod === "cash") {
      setTotalAmount(data.amount - totalAmount);
       setCashAmount(data.amount - cashAmount);
    }
      setTotalAmount(data.amount - totalAmount)
      setBankAmount(data.amount - bankAmount) ;
    
   
  };


 
const setIncomeMoney = (data: newIncome) => {
  setTotalAmount(totalAmount +Number(data.amount));
   if(data.method === "cash"){
    setCashAmount((prev)=>Number(prev )+ Number(data.amount))
   }else{
    setBankAmount((prev)=>Number(prev) + Number(data.amount))

   }

};                                                                                      

console.log("cash amount"+cashAmount)
console.log("bank amount"+bankAmount)  

return (
    <MyContext.Provider
      value={{
        expense,
        setExpense,
        income,
        setIncome,
        totalAmount,
        setTotalAmount,
        catagories,
        setCatagories,
        catagoryChanges,
        cashAmount,
        setCashAmount,
        bankAmount,
        setBankAmount,
        setIncomeMoney,setCatagory, category
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
