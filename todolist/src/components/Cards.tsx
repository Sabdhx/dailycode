import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../context/DataContext';

interface DataItem {
  description: string;
  dueDate: Date;
  catagory: string;
  priority: 'low' | 'medium' | 'high';
}

function Cards() {
  const { data, setData } = useContext(MyContext);
  const navigate = useNavigate();

  const settingDescription = (index: number, description: string) => {
    const updatedData = [...data];
    updatedData[index].description = description;
    setData(updatedData);
  };

  const settingDueDate = (index: number, dueDate: string) => {
    const updatedData = [...data];
    updatedData[index].dueDate = new Date(dueDate);
    setData(updatedData);
  };

  const settingCategory = (index: number, category: string) => {
    const updatedData = [...data];
    updatedData[index].catagory = category;
    setData(updatedData);
  };

  const settingPriority = (index: number, priority: 'low' | 'medium' | 'high') => {
    const updatedData = [...data];
    updatedData[index].priority = priority;
    setData(updatedData);
  };

  return (
    <>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
        <h1 className="text-2xl font-semibold mb-6">Task Manager</h1>
        <div className="bg-white bg-gray-400 rounded-lg w-[90%] max-w-4xl">
          <div className="flex justify-between items-center bg-gray-800 text-white text-sm font-semibold p-4 rounded-t-lg">
            <div>Description</div>
            <div>Category</div>
            <div>Priority</div>
            <div>Due Date</div>
          </div>
          <div className="divide-y divide-gray-200">
            {data.length > 0 ? (
              data.map((item: DataItem, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 "
                >
                  <div className="flex flex-col">
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => settingDescription(index, e.target.value)}
                      className="border rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                   
                    <select
                      value={item.catagory}
                      onChange={(e) => settingCategory(index, e.target.value)}
                      className="border rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="work">Work</option>
                      <option value="personal">Personal</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <select
                      value={item.priority}
                      onChange={(e) =>
                        settingPriority(index, e.target.value as 'low' | 'medium' | 'high')
                      }
                      className="border rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="date"
                      value={
                        item.dueDate ? new Date(item.dueDate).toISOString().split('T')[0] : ''
                      }
                      onChange={(e) => settingDueDate(index, e.target.value)}
                      className="border rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center p-4 text-gray-500">No tasks available</div>
            )}
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back
        </button>
      </div>
    </>
  );
}

export default Cards;
