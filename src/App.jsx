import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-white'>
      <Header/>
      <main
      className="flex-1 overflow-y-auto overscroll-contain focus:outline-none"
      tabIndex={-1}
      role="region"
      aria-label="Main content"
      >
        <Hero/>
      </main>
    </div>
  )
}

export default App
