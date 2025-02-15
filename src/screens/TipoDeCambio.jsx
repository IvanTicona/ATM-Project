import React from 'react'
import { Button } from "../components/common/Button";
import "../styles/Operaciones.css";

export const TipoDeCambio = () => {
  return (
    <>
      <h1 className="title">Tipo de Cambio</h1>
      <Button accion={() => {}} texto={"Compra = 6.95"} direccion={"derecha"} />
      <Button accion={() => {}} texto={"Venta = 6.95"} direccion={"derecha"} />
    </>
  );
};
