import { Route, Routes } from 'react-router'
import './App.css'
import { Login } from './screens/Login'
import { Operaciones } from './screens/Operaciones'
import { IngresarPin } from './screens/IngresarPin'
import { ConsultarSaldo } from './screens/ConsultarSaldo'
import { TipoDeCambio } from './screens/TipoDeCambio'
import { CambioDePin } from './screens/CambioDePin'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path="/operaciones" element={<Operaciones />} />
      <Route path="/saldo" element={<TipoDeCambio/>} />
      <Route path="/login" element={<IngresarPin />} />
      <Route path="/CambioDePin" element={<CambioDePin />}/>
      <Route path="/TipoDeCambio" element={<TipoDeCambio />} /> 
      {/* <Route path="/" element={<Operaciones />} /> */}
    </Routes>
  )
}

export default App
