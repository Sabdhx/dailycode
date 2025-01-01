import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/DataContext";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import Item from "../singleItem/Item";

interface DataItem {
  id: number;
  description: string;
  dueDate: Date;
  catagory: string;
  priority: "low" | "medium" | "high";
  currentUsers: string;
}

type User = {
  username: string;
  date: string;
};

function Cards() {
  const { data, setData, filteredData, setFilteredData } =
    useContext(MyContext);
  const [index, setIndex] = useState<number>(0);
  const navigate = useNavigate();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: index });

  useEffect(() => {
    console.log("Current Todos:", data);
  }, [data]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    console.log({ active, over });
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
            <div>Assigning user</div>
          </div>
          <div className="divide-y">
            <DndContext onDragEnd={handleDragEnd}>
              <SortableContext items={data}>
                {data.length > 0 ? (
                  data.map((item: DataItem, index: number) => (
                    <>
                      <Item
                        id={item.id}
                        descripiton={item.description}
                        catagory={item.catagory}
                        priority={item.priority}
                        dueDate={item.dueDate}
                        user={item.currentUsers}
                      />
                    </>
                  ))
                ) : (
                  <div className="text-center p-4 text-gray-500">
                    No tasks available
                  </div>
                )}
              </SortableContext>
            </DndContext>
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back
        </button>
      </div>
    </>
  );
}

export default Cards;
