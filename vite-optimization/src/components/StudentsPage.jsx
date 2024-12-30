import React, { useState, useMemo, useCallback } from 'react';
import StudentForm from './Students/StudentForm';
import StudentList from './Students/StudentList';

// Parent Component
const StudentPage = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Abhishek', score: 85 },
    { id: 2, name: 'Vipin', score: 92 },
    { id: 3, name: 'Atul', score: 78 },
  ]);
  const [newStudent, setNewStudent] = useState({ name: '', score: '' });

  const addStudent = useCallback(() => {
    if (newStudent.name && newStudent.score) {
      setStudents((prevStudents) => [
        ...prevStudents,
        { id: Date.now(), name: newStudent.name, score: parseInt(newStudent.score, 10) },
      ]);
      setNewStudent({ name: '', score: '' });
    }
  }, [newStudent])

  const withGrade = useMemo (() => {
    return calculateGrade(students);
  }, [students]) 

  const getStudentCount = useCallback(() => {d
    alert(students.length);
  }, [students])

  return (
    <div>
      <h1>Student List</h1>
      <StudentForm newStudent={newStudent} setNewStudent={setNewStudent} onAddStudent={addStudent} />
      <StudentList students={withGrade} getStudentCount={getStudentCount} />
    </div>
  );
}

function calculateGrade(students) {
   console.log('calculateGrade---')
    return students.map((student) => {
        let grade = 'F';
        if (student.score >= 90) grade = 'A';
        if (student.score >= 80) grade = 'B';
        if (student.score >= 70) grade = 'C';
        if (student.score >= 60) grade = 'D';
       
        return ({
            ...student,
            grade: grade,
        })
    })
  
}

export default StudentPage;
