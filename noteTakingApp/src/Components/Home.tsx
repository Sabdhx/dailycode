import React, { useContext, useEffect, useState } from "react";
import NewNote from "./Form";
import { Data } from "../types/Types";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/Context";
import ShowSingleNote from "./mappingOfData";

function Home() {

  const { data, setData } = useContext(MyContext);
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/new");
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Notes</h1>

          {data.length > 0 ? (
            <div className="space-y-6 grid grid-cols-3 gap-5">
              {data.map((item, index) => (
               <ShowSingleNote title={item.payload.title} tags={item.payload.tags} body={item.payload.body} index={index}/>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No notes available. Add a new note!
            </p>
          )}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleButton}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
          >
            Add New Note
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
