import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { MyContext } from '../context/DataContext';

type User = {
  username: string;
  date: string;
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { users } = useContext(MyContext) || { users: [] }; // Make sure users are provided, fallback to empty array

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold">
            MyApp
          </Link>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-6">
            <button
              className="text-white hover:text-gray-300"
              onClick={openModal} // Correctly invoking the function
            >
              Add User
            </button>
            <span className="text-white">Logged In User:</span>
            <select
              name="users"
              id="users-select"
              className="text-black border rounded-md px-4 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {users.map((item: User, index: number) => (
                <option key={index} value={item?.username}>
                  {item.username}
                </option>
              ))}
            </select>
          </div>

          {/* Hamburger Menu for small screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown Menu for small screens */}
        {isOpen && (
          <div className="md:hidden bg-blue-700 rounded-md p-4 space-y-2">
            <Link
              to="/"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Contact
            </Link>
          </div>
        )}
      </div>
      <Modal onClose={closeModal} isOpen={isOpenModal} />
    </nav>
  );
}

export default Navbar;
