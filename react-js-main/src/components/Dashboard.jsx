import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Total Students</h3>
              <p className="text-gray-700">There are 2 registered students in the system.</p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Total Course</h3>
              <p className="text-gray-700">There are 5+ Course placed in the system.</p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Total ko nalang pagmamahal ko sayo</h3>
              <p className="text-gray-700">Cannot be file is to big to handle.</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">List of Students</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student Name</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">1</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Kent Vicente</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">20</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">2</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Ronalyn Anne</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">19</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
