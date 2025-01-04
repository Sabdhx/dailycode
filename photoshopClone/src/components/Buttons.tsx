import React from "react";

type Props = {
    name: string,
    property: string,
    value: number,
    range: minAndMax
    unit: string
    setSelectedData: number
    index:number
};



type minAndMax={
    
        min: number,
        max: number
   
}
function Buttons({handleSelection,name,property,value,range,unit,setSelectedData,index}: Props) {
    
  return (
    <>
      <button className="bg-red-400 text-white w-full py-3 rounded-lg shadow-md hover:bg-red-500" 
      onClick={handleSelection}
      >
        {name}
      </button>
    </>
  );
}

export default Buttons;
