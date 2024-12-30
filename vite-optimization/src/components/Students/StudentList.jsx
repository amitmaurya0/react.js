// StudentList Component

import React from "react";

const sortedStudents = (students) => {
    return [...students].sort((a, b) => a.name.localeCompare(b.name));
};

const StudentList = ({ students, getStudentCount }) => {
    console.log('Rendering student list...')
    const allStudents = sortedStudents(students);
    
    return (
        <>
            <button onClick={getStudentCount}>Get Count</button>
            <ul>
                {allStudents.map((student) => (
                <li key={student.id}>
                    <p>Name: {student.name} </p>
                    <p>Score: {student.score} </p>
                    <p>Grade: {student.grade || 'N/A'}</p>
                </li>
                ))}
            </ul>
        </>
    );
  }

  export default React.memo( StudentList);