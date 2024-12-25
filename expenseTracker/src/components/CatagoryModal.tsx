import React, { useContext, useState } from "react";
import { MyContext } from "../context/userContext";

// Modal Component
const AddCategoryModal = ({ isOpen, onClose, onAddCategory }: any) => {
  const {category, setCatagory} = useContext(MyContext)
   const [input , setInput] = useState("")

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add the category with description and payment method
    setCatagory((prev)=>[...prev,{input}]);
    // Reset fields and close the modal
    console.log(category)
   setInput("")
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-center text-2xl font-semibold mb-6">Add Category</h2>
         

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              category name
            </label>
            <input
              id="description"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe the category"
              className="w-full px-4 py-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         
          <div className="flex justify-between">
            <button
             onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Add Category
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none"
            >
              Close
            </button>
          </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
