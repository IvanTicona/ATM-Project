import { Route, Routes } from 'react-router'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RetiroRapido } from './screens/RetiroRapido'
import { RetiroVeloz } from './screens/RetiroVeloz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>

      <Route path = "/retiroRapido" element={<RetiroRapido/>}/>

      <Route path = "/retiroVeloz" element={<RetiroVeloz/>}/>

    </Routes>
    </>
  )
}

export default App
