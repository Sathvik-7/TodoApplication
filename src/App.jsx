import { useState } from 'react'
import Todo from './Components/todo'
import Header from './Components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Todo/>
    </>
  )
}

export default App
