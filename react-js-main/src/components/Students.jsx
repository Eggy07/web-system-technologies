import React, { Component } from 'react';

class Students extends Component {
  render() {
    return (
      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Student Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Kent Vicente</h3>
              <p className="text-gray-700">Age: 20</p>
              <p className="text-gray-700">Grade: Bagsakonon</p>
              <p className="text-gray-700">Email: vicente.kent123@gmail.com</p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Ronalyn Anne</h3>
              <p className="text-gray-700">Age: 19</p>
              <p className="text-gray-700">Grade: Pasar nlng</p>
              <p className="text-gray-700">Email: anne.maganda@gmail.com</p>
            </div>

          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Add New Student</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                  <input type="text" name="age" id="age" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

              </div>
              <div className="mt-4">
                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Students;
