/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../components/common/Button";
import { getAccountData, accountNumber } from "../services/account";
import "../styles/Button.css";
import "../styles/Saldo.css";

export const ConsultarSaldo = () => {
  const [accountBalance, setAccountBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        const { balance } = await getAccountData();
        setAccountBalance(balance);
      } catch (e) {
        toast.error("Error al consultar saldo");
      }
    };

    fetchSaldo();
  }, []);

  return (
    <>
      <h3 className="title-atm">SU SALDO DISPONIBLE ES:</h3>
      <ToastContainer />
      <h3 className="balance">Cuenta: {accountNumber}</h3>
      <h3 className="balance">Bs. {accountBalance}</h3>
      <div className="div-horizontal">
        <Button
          direccion="izquierda"
          texto="Otro servicio"
          accion={() => navigate("/operaciones")}
        />
        <Button
          direccion="derecha"
          texto="Salir"
          accion={() => navigate("/")}
        />
      </div>
    </>
  );
};
