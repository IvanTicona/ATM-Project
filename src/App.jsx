import { Route, Routes } from 'react-router'
import './App.css'
import { Operaciones } from './screens/Operaciones'
import { IngresarPin } from './screens/IngresarPin'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Operaciones />} />
      <Route path="/login" element={<IngresarPin />} />
      {/* <Route path="/extractos" element={<Operaciones />} /> */}
      {/* <Route path="/transferencias" element={<Operaciones />} /> */}
      {/* <Route path="/" element={<Operaciones />} /> */}
    </Routes>
  )
}

export default App
