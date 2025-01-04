import React from 'react'

type Props = {
    min:number
    max:number
    property:string
    value:number
    unit:string
}

function Slider({handleChangevalue,min, max,property,value,unit}: Props) {
  return (
    <>
    <div className="absolute bottom-5 left-5 bg-white p-4 rounded-lg shadow-md w-[61%]">
    <label htmlFor="amount" className="text-sm font-medium text-gray-700">
      Brightness:{value} %
    </label>
    <input 
      id="amount" 
      type="range" 
      min={min} 
      max={max} 
      value={value}
      onChange={(e)=>handleChangevalue(e)}
      className="w-full mt-2 w-[100%]"
    />
  </div> 
  </>
   )
}

export default Slider