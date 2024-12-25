import React, { useContext } from "react";
import { MyContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

function Expenses() {
  const { expense } = useContext(MyContext);
const navigate = useNavigate()
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Expenses</h1>
      {expense.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expense.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-gray-800">
               description:  {item.category}
              </h2>
              <p className="text-gray-600">
                Amount:{" "}
                <span className="text-gray-800 font-medium">
                  ${item.amount}
                </span>
              </p>
              <p className="text-gray-600">
                Wallet:{" "}
                <span
                  className={`font-medium ${
                    item.wallet === "cash"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                >
                  {item.wallet}
                </span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-6">No expenses added yet.</p>
      )}
      <button className="bg-blue-300 px-4 py-2 rounded-2xl mt-5" onClick={()=>navigate("/")}>back</button>
    </div>
  );
}

export default Expenses;
