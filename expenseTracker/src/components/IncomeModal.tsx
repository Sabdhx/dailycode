import React, { useContext, useState } from "react";
import { MyContext } from "../context/userContext";

const AddIncomeModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
 const [method , setMethod] = useState<string>("cash")

  const {setIncomeMoney, income, setIncome, totalAmount, setTotalAmount} = useContext(MyContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newIncome = {
      amount: parseFloat(amount),
      description,
      method,
    };

    // Update the context state
    setIncomeMoney({description,amount,method });
    
    // Reset form fields
    setAmount("");
    setDescription("");
    setMethod("cash");
   
    // Close the modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add Income</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Wallet Type
            </label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value as "cash" | "bank")}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="cash">Cash</option>
              <option value="bank">Bank</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Income
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddIncomeModal;
