import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <main className="flex-1 p-8">
        <div className=" border bg-gray-200 rounded-lg shadow-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-4 p-4 border-black rounded-md hover:bg-orange-600">
              <h3 className="text-xl font-semibold mb-2 text-black ">Total Students</h3>
              <p className="text-black">There are 2 registered students in the system.</p>
            </div>
            <div className="border border-4 p-4 border-black rounded-md hover:bg-orange-600">
              <h3 className="text-xl font-semibold mb-2 text-black">Total Course</h3>
              <p className="text-black">There are 5+ Course placed in the system.</p>
            </div>
            <div className="border border-4 p-4 border-black rounded-md hover:bg-orange-600">
              <h3 className="text-xl font-semibold mb-2 text-black">Total ko nalang pagmamahal ko sayo</h3>
              <p className="text-black">Cannot be file is to big to handle.</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-black">List of Students</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-black text-left text-xs font-semibold text-black uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 border-b border-black text-left text-xs font-semibold text-black uppercase tracking-wider">Student Name</th>
                    <th className="px-6 py-3 border-b border-black text-left text-xs font-semibold text-black uppercase tracking-wider">Age</th>
                    <th className="px-6 py-3 border-b border-black text-left text-xs font-semibold text-black uppercase tracking-wider">Adress</th>
                    <th className="px-6 py-3 border-b border-black text-left text-xs font-semibold text-black uppercase tracking-wider">Marital Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap border-b text-black border-black">1</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b text-black border-black">Kent Vicente</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b text-black border-black">20</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b text-black border-black">Lapasan</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b text-black border-black">Married</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap border-b text-black border-black">2</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b text-black border-black">Ronalyn Anne</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b text-black border-black">19</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b text-black border-black">Lapasan</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b text-black border-black">Married</td>
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
