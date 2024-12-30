import { useEffect, useMemo, useState } from 'react'
import './App.css';
import StudentPage from './components/StudentsPage';


function App() {
  const [number, setNumber] = useState(0)
  
  return (
    <>
      <StudentPage />
    </>
  )
}

export default App;
