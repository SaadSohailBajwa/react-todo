import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-100 text-3xl'>todo app</h1>
      <input type="text" placeholder='enter task name'></input>
    </>
  )
}

export default App
