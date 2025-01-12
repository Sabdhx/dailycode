import {  useState } from "react";

function useFormHook(steps) {
  const [index, setIndex] = useState(0);

  const backWard = () => {
    if (index <= 0) return alert("Can't go backward");
    setIndex((prev) => prev - 1);
  };
  
  const next = () => {
    if (index >= steps.length - 1) return alert("Can't go forward");
    setIndex((prev) => prev + 1);
  };
  
  


  return {
    next,
    steps,
    step: steps[index],
    index,
    backWard,
    lastStep: index ===  steps.length-1,
    firststep : index === 0
  };
}

export default useFormHook;
