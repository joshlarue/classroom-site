import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full min-h-[100vh] bg-black'>
        <h1 className='flex bg-slate-600 text-slate-50 text-4xl'>Welcome to my Classroom!</h1>
      </div>
    </>
  )
}

export default App
