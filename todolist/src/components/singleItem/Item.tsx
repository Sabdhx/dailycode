import React, { useContext } from "react";
import { MyContext } from "../../context/DataContext";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  description: string;
  catagory: string;
  priority: string;
  dueDate: string;
  currentUser: string;
};

function Item({ id, index, description, catagory, priority, dueDate }: Props) {
  const { data, setData, setUsers, users } = useContext(MyContext);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const settingDescription = (index: number, description: string) => {
    const updatedData = [...data];
    updatedData[index].description = description;
    setData(updatedData);
    localStorage.setItem("todos", JSON.stringify(updatedData));
  };

  const settingDueDate = (index: number, dueDate: string) => {
    const updatedData = [...data];
    updatedData[index].dueDate = new Date(dueDate);
    setData(updatedData);
    localStorage.setItem("todos", JSON.stringify(updatedData));
  };

  const settingCategory = (index: number, category: string) => {
    const updatedData = [...data];
    updatedData[index].catagory = category;
    setData(updatedData);
    localStorage.setItem("todos", JSON.stringify(updatedData));
  };

  const settingPriority = (
    index: number,
    priority: "low" | "medium" | "high"
  ) => {
    const updatedData = [...data];
    updatedData[index].priority = priority;
    setData(updatedData);
    localStorage.setItem("todos", JSON.stringify(updatedData));
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = data.filter((todo) => todo.id !== id);
    const updateUsers = users.filter((todo) => todo.id !== id);
    setUsers(updateUsers);
    setData(updatedTodos);
    console.log(updateUsers)
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    localStorage.setItem("users", JSON.stringify(updateUsers));
  };
  return (
    <div>
      <div
        {...attributes}
        {...listeners}
        ref={setNodeRef}
        style={style}
        className="flex justify-between items-center p-4"
        key={id}
      >
        <div className="flex flex-col">
          <input
            type="text"
            value={description}
            onChange={(e) => settingDescription(index, e.target.value)}
            className="border rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <select
            value={catagory}
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
            value={priority}
            onChange={(e) =>
              settingPriority(
                index,
                e.target.value as "low" | "medium" | "high"
              )
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
            value={dueDate ? new Date(dueDate).toISOString().split("T")[0] : ""}
            onChange={(e) => settingDueDate(index, e.target.value)}
            className="border rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          onClick={() => deleteTodo(id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
