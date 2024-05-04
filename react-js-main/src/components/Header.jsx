import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold hover:text-orange-600">Student Portal</h1>
        <nav className="flex space-x-4">
          <a href="#" className="text-white hover:text-orange-600">Home</a>
          <a href="#" className="text-white hover:text-orange-600">About</a>
          <a href="#" className="text-white hover:text-orange-600">Services</a>
          <a href="#" className="text-white hover:text-orange-600">Contact</a>
        </nav>
        <div className="flex items-center">
          <button className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">Sign In</button>
          <button className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
