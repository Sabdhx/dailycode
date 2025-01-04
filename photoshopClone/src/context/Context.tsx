import React, {  createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface ContextType {
    data : string
    setData : Dispatch<SetStateAction<string>>
}

interface ChildProps {
    children: ReactNode
}

export const MyContext = createContext<ContextType | undefined>(undefined)

function Context({children}:ChildProps) {
    const [data,setData] = useState<string>("")
  return (
   <MyContext.Provider value={{data,setData}}>
    {children}
   </MyContext.Provider>
  )
}

export default Context