import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../Context/Context";
import NewNote from "../Form/Form";

function SinglePage() {
  const { id } = useParams();
  const context = useContext(MyContext);
  const { data } = context;

  const [showEditForm, setShowEditForm] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log("first");
  };
  return (
    <>
      {showEditForm ? (
        <>
          <NewNote title={data[id].title} body={data[id].body} tags={data[id].tags} handleSubmit={handleSubmit} />
        </>
      ) : (
        <>
          <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
              <h1 className="text-4xl font-bold text-blue-700 mb-4">
                {data[id].title}
              </h1>
              <p className="text-lg font-medium text-gray-600 mb-6">
                <span className="font-semibold text-blue-500">Tags:</span>{" "}
                {data[id].tags}
              </p>
              <p className="text-gray-700 leading-relaxed">{data[id].body}</p>
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
