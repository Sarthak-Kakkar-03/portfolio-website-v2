import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import About from './components/About/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-white'>
      <Header/>
      <About/>
    </div>
  )
}

export default App
