import React, { useContext, useEffect } from "react";
import { MyContext } from "../Context/Context";

function useHook() {
  const { data, setData } = useContext(MyContext); // Array to store notes

  const handleSubmit = (payload) => {
    setData((prev) => [...prev, { payload, id: data.length }]); // Add note to data array
  };

  const handleEditing = (text, id) => {
    const simpleData = [...data];
    simpleData[id].payload = text;
    // text = updatingData;
    setData(simpleData);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return {
    handleSubmit,
    handleEditing,
  };
}

export default useHook;
