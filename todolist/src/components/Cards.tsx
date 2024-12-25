import React, { useContext } from 'react'
import { MyContext } from '../context/DataContext';
import { Link, useNavigate } from 'react-router-dom';

interface DataItem {
  description: string;
  dueDate: Date;
  catagory: string;
  priority: 'low' | 'medium' | 'high';
}

function Cards() {
  const { data, setData } = useContext(MyContext);
  const navigate = useNavigate()
  const settingDescription = (index: number, description: string) => {
    const updatedData = [...data];
    updatedData[index].description = description;
    setData(updatedData); // Update the state
  };

  const settingDueDate = (index: number, dueDate: string) => {
    const updatedData = [...data];
    updatedData[index].dueDate = new Date(dueDate); // Store as Date
    setData(updatedData);
    const due = dueDate
    console.log(due)
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
    < >
    
      {data.length > 0 ? (
        data.map((item: DataItem, index) => (
          <div key={item.description , index}> {/* Ensure unique key */}
            <p>Description:
              <input 
                type="text" 
                value={item.description} 
                onChange={(e) => settingDescription(index, e.target.value)} 
              />
            </p>

            <p>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Due Date</label>
                <input
  type="date"
  value={item.dueDate ? new Date(item.dueDate).toISOString().split('T')[0] : ''} // Convert to Date and format
  onChange={(e) => settingDueDate(index, e.target.value)} // Pass index and value
/>

              </div>
            </p>

            <p>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  name="catagory"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={item.catagory}
                  onChange={(e) => settingCategory(index, e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
                </select>
              </div>
            </p>

            <p>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Priority</label>
                <select
                  name="priority"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={item.priority}
                  onChange={(e) => settingPriority(index, e.target.value as 'low' | 'medium' | 'high')}
                >
                  <option value="">Select priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </p>
            <hr />
            
          </div>
        ))
      ) : (
        <p>No tasks available</p>
      )}
      <button onClick={()=>{navigate("/")}}>back</button>
    </>
  );
}

export default Cards;
