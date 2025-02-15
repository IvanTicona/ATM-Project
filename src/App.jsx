import { Route, Routes } from "react-router";
import "./App.css";
import {
  CambioDePin,
  ConsultarSaldo,
  CuentasOtrosBancos,
  CuentasPropias,
  CuentasTerceros,
  Deposito,
  Extracto,
  LeerTarjeta,
  Login,
  Operaciones,
  OtroServicio,
  RetiroRapido,
  Retiro,
  SinTarjeta,
  TipoDeCambio,
  TransferenciaCuenta,
  VerEnPantalla,
} from "./screens";

import { Keyboard } from "./components/common/Keyboard";
import { VerMovimientos } from "./screens/VerMovimientos";
function App() {
  return (
    <Routes>
      <Route path="/prueba" element={<Keyboard limit={4} />} />

      <Route path="/" element={<Operaciones />} />
      <Route path="/login" element={<Login />} />
      <Route path="/operaciones" element={<Operaciones />} />

      <Route path="/rapido" element={<RetiroRapido />} /> 
      <Route path="/saldo" element={<ConsultarSaldo />} />
      <Route path="/retiro" element={<Retiro />} /> 
      <Route path="/deposito" element={<Deposito />} />
      <Route path="/extracto" element={<Extracto />} />
      <Route path="/transferencia" element={<TransferenciaCuenta />} />
      <Route path="/tipocambio" element={<TipoDeCambio />} />
      <Route path="/pin" element={<CambioDePin />} />
      <Route path="/movimientos" element={<VerMovimientos />} />

      <Route path="/ver-en-pantalla" element={<VerEnPantalla />} />
      <Route path="/cuentas-terceros" element={<CuentasTerceros />} />
      <Route path="/cuentas-otros-bancos" element={<CuentasOtrosBancos />} />
      <Route path="/cuentas-propias" element={<CuentasPropias />} />

      {/* Pantalla para de confirmacion SALIR */}
      <Route path="/otro-servicio" element={<OtroServicio />} />

      {/* Pantallas de Transicion */}
      <Route path="/leer-tarjeta" element={<LeerTarjeta />} />
      <Route path="/sin-tarjeta" element={<SinTarjeta />} />
    </Routes>
  );
}

export default App;
