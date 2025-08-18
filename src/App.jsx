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
      <main
      className="flex-1 overscroll-contain focus:outline-none"
      tabIndex={-1}
      role="region"
      aria-label="Main content"
      >
        <Header/>
        <Hero/>
      </main>
    </div>
  )
}

export default App
