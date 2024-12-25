import React, { useContext, useState } from 'react';
import { MyContext } from '../context/DataContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Dat = {
  username: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [date, setDate] = useState('');
  const {users, setUsers }= useContext(MyContext)// Correctly type users as an array of Dat objects

  if (!isOpen) return null;

  const handleModal = () => {
    // Ensure you are adding the new user object to the array
    setUsers((prev) => [
      ...prev,
      { username }, // Add the new user to the state array
    ]);
    const datt = users;
    console.log(datt)
    onClose(); // Close the modal aftersubmitting
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[40%] rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">User Details</h2>
        <form>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          {/* Date Input */}
           

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={handleModal} // Call handleModal when the button is clicked
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
