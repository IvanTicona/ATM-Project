import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Extracto } from './screens/Extracto'
import { CuentasTerceros } from './screens/CuentasTerceros'
import { TransferenciaCuenta } from './screens/TransferenciaCuenta'
import { Route, Routes } from 'react-router'
import { VerEnPantalla } from './screens/VerEnPantalla'
import { OtroServicio } from './screens/OtroServicio'
import { CuentasOtrosBancos } from './screens/CuentasOtrosBancos'
import { CuentasPropias } from './screens/CuentasPropias'
import { LeerTarjeta } from './screens/LeerTarjeta'
import { SinTarjeta } from './screens/SinTarjeta'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path="/extracto" element={<Extracto />} />
        <Route path="/cuentasTerceros" element={<CuentasTerceros />} />
        <Route path="/cuentasOtrosBancos" element={<CuentasOtrosBancos />} />
        <Route path="/cuentasPropias" element={<CuentasPropias />} />
        <Route path="/verEnPantalla" element={<VerEnPantalla />} />
        <Route path="/otroServicio" element={<OtroServicio />} />
        <Route path="/transferenciaCuenta" element={<TransferenciaCuenta />} />
        <Route path="/leerTarjeta" element={<LeerTarjeta />} />
        <Route path="/sinTarjeta" element={<SinTarjeta />} />
      </Routes>
    </>
  )
}

export default App
