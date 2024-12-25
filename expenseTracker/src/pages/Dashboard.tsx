import React, { useContext, useState } from "react";
import TrackerButtons from "../components/TrackerButtons";
import CategoryModal from "../components/Modal";
import { MyContext } from "../context/userContext";

function Dashboard() {
  const [handleOpenModal, setHandleOpenModal] = useState<boolean>(false);
const {totalAmount} = useContext(MyContext)
  const OpenModal = () => {
    setHandleOpenModal(true);
  };

  const CloseModal = () => {
    setHandleOpenModal(false); // Close the modal
  };

  return (
    <>
      <div className="text-2xl">total amount : {totalAmount}</div>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md">
          <TrackerButtons
            className="bg-blue-500 text-white py-4 rounded shadow hover:bg-blue-600"
            onclick={OpenModal}
            typeOfData="Add Expense"
          />

          <TrackerButtons
            className="bg-blue-500 text-white py-4 rounded shadow hover:bg-blue-600"
            typeOfData="Add income"

          />

          <TrackerButtons
            className="bg-blue-500 text-white py-4 rounded shadow hover:bg-blue-600"
            typeOfData="catagories"
          />

          <TrackerButtons
            className="bg-blue-500 text-white py-4 rounded shadow hover:bg-blue-600"
            typeOfData="expenses"
          />
        </div>
      </div>

      {<CategoryModal onClose={CloseModal} isOpen={handleOpenModal} />}
    </>
  );
}

export default Dashboard;
