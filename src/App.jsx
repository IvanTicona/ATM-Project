import './App.css'
import { Login } from './screens/Login'
import { Operaciones } from './screens/Operaciones'
import { ConsultarSaldo } from './screens/ConsultarSaldo'
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

  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path="/operaciones" element={<Operaciones />} />
      <Route path="/saldo" element={<ConsultarSaldo />} />
      {/* <Route path="/extractos" element={<Operaciones />} /> */}
      {/* <Route path="/transferencias" element={<Operaciones />} /> */}
      {/* <Route path="/" element={<Operaciones />} /> */}
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
  )
}

export default App
