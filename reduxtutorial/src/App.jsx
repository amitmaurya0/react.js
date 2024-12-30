import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTodos from './components/MyTodos'
import TodoForm from './components/TodoForm'

function App() {
  const [count, setCount] = useState('asdfsadfsdaf')
  return (
    <>
     <h2>My Redux Todo Application</h2>
     <TodoForm />
     <MyTodos /> 
    </>
  )
}

export default App
