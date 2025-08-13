import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100'>
      <Header/>
    </div>
  )
}

export default App
