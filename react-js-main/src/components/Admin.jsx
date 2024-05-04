import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: 'Kent Vicente', course: 'BSIT' },
        { id: 2, name: 'Ronalyn Anne', course: 'BSIT' },
      ],
      selectedStudent: null,
      editModalOpen: false,
    };
  }

  handleAddStudent = () => {
    const newStudent = { id: this.state.students.length, name: 'New Student', course: 'BSIT' };
    this.setState({ students: [...this.state.students, newStudent] });
  };

  handleEditStudent = (student) => {
    this.setState({ selectedStudent: student, editModalOpen: true });
  };

  handleUpdateStudent = (updatedStudent) => {
    const updatedStudents = this.state.students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    this.setState({ students: updatedStudents, editModalOpen: false });
  };

  handleDeleteStudent = (id) => {
    this.setState({
      students: this.state.students.filter((student) => student.id !== id),
    });
  };

  render() {
    return (
      <main className="flex-1 p-8">
        {this.state.students.map((student) => (
          <div key={student.id} className="border bg-gray-200 rounded-lg shadow-2xl p-6 mb-4">
            <h2 className="text-2xl font-semibold text-black mb-4">{student.name}</h2>
            <p className="text-black mb-4">Course: {student.course}</p>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => this.handleEditStudent(student)}
                className="rounded-lg bg-orange-600 text-white px-8 py-2 hover:bg-blue-700"
              >
                EDIT
              </button>
              <button
                onClick={() => this.handleDeleteStudent(student.id)}
                className="rounded-lg bg-red-700 text-white px-8 py-2 hover:bg-blue-700"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
        <div className="border bg-gray-200 rounded-lg shadow-2xl p-6">
          <h2 className="text-2xl font-semibold text-black mb-4">New Student</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={this.handleAddStudent}
              className="rounded-lg bg-orange-600 text-white px-8 py-2 hover:bg-blue-700"
            >
              ADD
            </button>
          </div>
        </div>
        {/* Edit modal */}
        {this.state.editModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Edit</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 rounded-md w-full py-2 px-3"
                    value={this.state.selectedStudent.name}
                    onChange={(e) =>
                      this.setState({
                        selectedStudent: { ...this.state.selectedStudent, name: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="course" className="block text-gray-700 font-bold mb-2">
                  Course
                  </label>
                  <input
                    
                    id="course"
                    className="border border-gray-300 rounded-md w-full py-2 px-3"
                    value={this.state.selectedStudent.course}
                    onChange={(e) =>
                      this.setState({
                        selectedStudent: { ...this.state.selectedStudent, course: (e.target.value) },
                      })
                    }
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => this.handleUpdateStudent(this.state.selectedStudent)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => this.setState({ editModalOpen: false })}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default Content;
