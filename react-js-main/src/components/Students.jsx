import React, { Component } from 'react';

class Students extends Component {
  render() {
    return (
      <main className="flex-1 p-4">
        <div className="border bg-gray-200 rounded-lg shadow-2xl p-6 ">
          <h2 className="text-2xl font-semibold mb-4 text-black ">Student Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-4 p-4 border-black rounded-md hover:bg-orange-600">
              <h3 className="text-xl font-semibold mb-2 text-black">Kent Vicente</h3>
              <p className="text-black">Age: 20</p>
              <p className="text-black">Grade: Bagsakonon</p>
              <p className="text-black">Email: vicente.kent123@gmail.com</p>
            </div>
            <div className="border border-4 p-4 border-black rounded-md hover:bg-orange-600">
              <h3 className="text-xl font-semibold mb-2 text-black">Ronalyn Anne</h3>
              <p className="text-black">Age: 19</p>
              <p className="text-black">Grade: Pasar nlng</p>
              <p className="text-black">Email: anne.maganda@gmail.com</p>
            </div>
            

          </div>
        </div>
      </main>
    );
  }
}

export default Students;
