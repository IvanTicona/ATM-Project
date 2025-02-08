import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './screens/Login'
import { Keyboard } from './components/Keyboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Login/>
        <Keyboard/>
    </>
  )
}

export default App
