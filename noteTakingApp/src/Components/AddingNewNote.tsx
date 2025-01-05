import React, { useContext } from "react";
import NewNote from "../Form/Form";
import {  handleSubmit } from "../Form/Form";
import useHook from "../Hooks/useHook";
import { MyContext } from "../Context/Context";

function AddingNewNote() {
  const { handleSubmit } = useHook();
  const { data } = useContext(MyContext);
  return (
    <>
      {data ? (
        <>
          <NewNote handleSubmit={handleSubmit}  />
        </>
      ) : (
        <>
          <div>.... loading</div>
        </>
      )}
    </>
  );
}

export default AddingNewNote;
