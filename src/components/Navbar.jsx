import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="bg-[#0c0c0c] shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-2xl font-bold">
          Adtask
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/todo" className="text-white hover:text-gray-300 transition duration-300">Todo</Link>
          </li>
          <li>
            <Link to="/blog" className="text-white hover:text-gray-300 transition duration-300">Blog</Link>
          </li>
          <li>
            <a href="https://github.com/xcommand78" className="text-white hover:text-gray-300 transition duration-300">Code</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}    