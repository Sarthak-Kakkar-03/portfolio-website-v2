import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import Hero from './components/Hero/Hero'
import Section from './components/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-white'>
      <main
      className="flex-1 overscroll-contain focus:outline-none
    md:snap-y md:snap-proximity md:scroll-pt-16"
      tabIndex={-1}
      role="region"
      aria-label="Main content"
      >
        <Header/>
        <Section id='hero'><Hero/></Section>
      </main>
    </div>
  )
}

export default App
