/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { db } from "../services/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Button } from "../components/common/Button";
import "../styles/Button.css";
import "../styles/Saldo.css";

export const ConsultarSaldo = () => {
  const accountNumber = localStorage.getItem("account");
  const [saldo, setSaldo] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        const q = query(
          collection(db, "accounts"),
          where("accountNumber", "==", Number(accountNumber))
        );
        const querySnapshot = await getDocs(q);
        const txs = [];
        querySnapshot.forEach((doc) => {
          txs.push({ id: doc.id, ...doc.data() });
        });
        const accountRef = doc(db, "accounts", txs[0].id);
        const docSnap = await getDoc(accountRef);
        setSaldo(docSnap.data().balance);
      } catch (e) {
        toast.error("Error al consultar saldo");
      }
    };

    fetchSaldo();
  }, [accountNumber]);

  return (
    <>
      <h3 className="title-atm">Su saldo disponible es:</h3>
      <h3 className="balance">Bs. {saldo}</h3>
      <ToastContainer />
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
