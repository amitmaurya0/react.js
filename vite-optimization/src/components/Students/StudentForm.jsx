import React from "react";

// StudentForm Component
const StudentForm = ({ newStudent, setNewStudent, onAddStudent }) => {

    return (
      <div>
        <h2>Add a Student</h2>
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Score"
          value={newStudent.score}
          onChange={(e) => setNewStudent({ ...newStudent, score: e.target.value })}
        />
        <button onClick={onAddStudent}>Add Student</button>
      </div>
    );
  }

  export default StudentForm;


  