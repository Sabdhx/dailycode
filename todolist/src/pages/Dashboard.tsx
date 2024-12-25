import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/DataContext";

function Dashboard() {
  const { data, setData , description,setDescription,dueDate,setDueDate, catagory,setCatagory,priority,setPriority } = useContext(MyContext);
  const navigate = useNavigate();
 console.log(data)
  const dateSelection = (date: string) => {
    const today = new Date().toISOString().split("T")[0];

  
    setDueDate(date);
  };

  const handleAdding = () => {
    if (!description || !dueDate || !catagory || !priority) {
      alert("Please fill in all fields.");
      return;
    }
    setData((prev) => [
      ...prev,
      { description, dueDate, catagory, priority },
    ]);
    setDescription("")
    setCatagory("")
    setDueDate("")
    setDueDate("")
    navigate("/data"); 
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-[3%]">
      <h1 className="text-2xl font-bold text-center mb-6">Task Dashboard</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <input
          type="text"
          placeholder="Enter task description"
          className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          name="catagory"
          className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={catagory}
          onChange={(e) => setCatagory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Priority
        </label>
        <select
          name="priority"
          className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Select priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Due Date
        </label>

 

        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={dueDate}
          onChange={(e) => dateSelection(e.target.value)}
        />
      </div>
      <button
        onClick={handleAdding}
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
      >
        Add Task
      </button>
    </div>
  );
}

export default Dashboard;
