import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../Context/Context";
import NewNote from "../Form/Form";
import useHook from "../Hooks/useHook";
import Markdown from "react-markdown";

function SinglePage() {
  const { id } = useParams();
  const context = useContext(MyContext);
  const { data } = context;
  const {handleEditing} = useHook()
  const [showEditForm, setShowEditForm] = useState<boolean>(false);


  return (
    <>
      {showEditForm ? (
        <>
          <NewNote
            data={data[id].payload}
            id={data[id].id}
            handleSubmit={handleEditing}
          />
        </>
      ) : (
        <>
          <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
              <h1 className="text-4xl font-bold text-blue-700 mb-4">
                {data[id].payload.title}
              </h1>
              <p className="text-lg font-medium text-gray-600 mb-6">
                <span className="font-semibold text-blue-500">Tags:</span>{" "}
                {data[id].payload.tags}
              </p>
              <Markdown className="text-gray-700 leading-relaxed">
                {data[id].payload.body}
              </Markdown>
            </div>
          </div>
          <button
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
            onClick={() => {
              setShowEditForm(true);
            }}
          >
            {" "}
            Edit
          </button>
        </>
      )}
    </>
  );
}

export default SinglePage;
