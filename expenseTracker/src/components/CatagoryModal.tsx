import React, { useContext, useState } from "react";
import { catagoryChanges, MyContext } from "../context/userContext";

// Modal Component
const AddCategoryModal = ({ isOpen, onClose, onAddCategory }: any) => {

  const {catagoryChanges, catagories,} = useContext(MyContext)


  const [categoryName, setCategoryName] = useState<string>("")
  const [amount, setAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "bank">("cash")
 
 
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    catagoryChanges({categoryName, amount, paymentMethod})
    setCategoryName('');
    setAmount('');
    setPaymentMethod('cash');
    const daaa = catagories
    console.log(daaa)
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-center text-2xl font-semibold mb-6">Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="Describe the category"
              className="w-full px-4 py-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Payment Method</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                  className="h-4 w-4 text-blue-600 focus:ring-0"
                />
                <span className="text-sm">Cash</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={() => setPaymentMethod('bank')}
                  className="h-4 w-4 text-blue-600 focus:ring-0"
                />
                <span className="text-sm">Bank</span>
              </label>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
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
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;
