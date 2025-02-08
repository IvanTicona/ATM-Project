import { Route, Routes } from 'react-router'
import './App.css'
import { IngresarMonto } from './screens/IngresarMonto'
import { Operaciones } from './screens/Operaciones'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Operaciones />} />
      <Route path="/login" element={<IngresarMonto />} />
      {/* <Route path="/extractos" element={<Operaciones />} /> */}
      {/* <Route path="/transferencias" element={<Operaciones />} /> */}
      {/* <Route path="/" element={<Operaciones />} /> */}
    </Routes>
  )
}

export default App
