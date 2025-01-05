import React, { useContext, useEffect } from "react";
import { MyContext } from "../Context/Context";

function useHook() {
  const { data, setData } = useContext(MyContext); // Array to store notes

  const handleSubmit = (payload) => {
    setData((prev) => [...prev, payload]); // Add note to data array
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return {
    handleSubmit,
  };
}

export default useHook;
