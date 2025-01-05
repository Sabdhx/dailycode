import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  title:string;
  body:string;
  tags:string;
   data:string[]
  handleSubmit: () => void;
};
const NewNote = ({handleSubmit,title,body,tags}: Props) => {
  const [title,setTitle] = useState<string>("");
  const [body,setBody] = useState<string>("");
  const [tags,setTags]  = useState<string>("")
  
   const submit=()=>{
    const payload:string[] = {
      title,
      body,
      tags
    }
    handleSubmit(payload)
   }
  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="flex space-x-4">
        <div className="flex-1">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle( e.target.value)}
            placeholder="Enter title"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="tags"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Tags:
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            onChange={(e) => setTags( e.target.value)}
            placeholder="Enter tags (comma separated)"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="body"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Body:
        </label>
        <textarea
          id="body"
          name="body"
          
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter the body text here..."
          required
          className="w-full h-60 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>
      <div className="flex justify-between gap-4">
        <Link
          to={-1}
          className="mt-6 w-[60%] p-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 inline-block text-center"
        >
          back
        </Link>
        <Link
          to={`/`}
          onClick={submit}
          className="mt-6 w-[60%] p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 inline-block text-center"
        >
          Submit
        </Link>
      </div>
    </div>
  );
};

export default NewNote;
