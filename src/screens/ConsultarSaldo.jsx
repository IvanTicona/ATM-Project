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
        toast.info("Por favor espere un momento")
        const { balance } = await getAccountData();
        setAccountBalance(balance);
        toast.dismiss();
      } catch (e) {
        toast.error("Error al consultar saldo");
      }
    };

    fetchSaldo();
  }, []);

  return (
    <>
      <h3 className="title-atm">SU SALDO DISPONIBLE ES:</h3>
      <h3 className="balance">Cuenta: {accountNumber}</h3>
      <h3 className="balance">Bs. {accountBalance}</h3>
      <div className="div-horizontal">
        <Button
          direccion="derecha"
          texto="Otro servicio"
          accion={() => navigate("/operaciones")}
        />
      </div>
      <ToastContainer />
    </>
  );
};
