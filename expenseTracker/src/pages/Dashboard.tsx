import React, { useContext, useState } from "react";
import TrackerButtons from "../components/TrackerButtons";
import CategoryModal from "../components/Modal";
import { MyContext } from "../context/userContext";
import ExpenseModal from "../components/Modal";
import AddCategoryModal from "../components/CatagoryModal";
import AddIncomeModal from "../components/IncomeModal";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [handleOpenModal, setHandleOpenModal] = useState<boolean>(false);
  const [category, setCategory] = useState<boolean>(false); // Change variable name to category to avoid confusion
  const { totalAmount,cashAmount,bankAmount } = useContext(MyContext);
  const [incomeModal, setIncomeModal] = useState<boolean>(false);
  const navigate = useNavigate()

  const OpenExpenseModal = () => {
    setHandleOpenModal(true);
  };

  const CloseModal = () => {
    setHandleOpenModal(false); // Close the modal
  };

  const openCategoryModal = () => {
    setCategory(true); // Open the category modal
  };

  const CloseCategoryModal = () => {
    setCategory(false); // Close the category modal
  };
  const closeIncomeModal = () => {
    setIncomeModal(false);
  };

  const handleIncomeModal = () => {
    setIncomeModal(true);
  };
  return (
    <>
      <div className="text-2xl">total amount : {totalAmount}</div>
      <div className="text-2xl">cash amount : {cashAmount}</div>
      <div className="text-2xl">bank amount : {bankAmount}</div>

      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md">
          <TrackerButtons
            className="bg-blue-500 text-white py-4 rounded shadow hover:bg-blue-600"
            onclick={OpenExpenseModal}
            typeOfData="Add Expense"
          />

          <TrackerButtons
            className="bg-green-500 text-white py-4 rounded shadow hover:bg-blue-600"
            typeOfData="Add income"
            onclick={handleIncomeModal}
          />

          <TrackerButtons
            className="bg-blue-500 text-white py-4 rounded shadow hover:bg-blue-600"
            onclick={openCategoryModal} // Use the correct function to open the category modal
            typeOfData="add Category"
          />

        

          <button 
          className="bg-blue-500 text-white py-4 rounded shadow hover:bg-blue-600"
          onClick={()=>{navigate("/Expenses")}}>
            check Expenses
          </button>
        </div>
      </div>
      {/* Expense Modal */}
      <ExpenseModal onClose={CloseModal} isOpen={handleOpenModal} />
      {/* Category Modal */}
      <AddCategoryModal onClose={CloseCategoryModal} isOpen={category} />{" "}
      {/* Pass the state variable as isOpen */}
      <AddIncomeModal onClose={closeIncomeModal} isOpen={incomeModal} />{" "}
      {/* Pass the state variable as isOpen */}

    </>
  );
}

export default Dashboard;
