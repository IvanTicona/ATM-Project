import React from 'react'
import { Button } from '../components/common/Button'
import { useNavigate } from "react-router"

export const RetiroVeloz = () => {
     let navigate = useNavigate();
  return (
    <>
  <div class="container">
        <h2>Retiro Rápido</h2>
        <div class="buttons">
            <Button texto = "Confirmar retiro rapido" direccion = "derecha" accion = {()=> navigate("/retiro-veloz")}/>
            <Button texto = "Cancelar retiro rapido" direccion = "derecha" accion = {()=> navigate("/retiro-veloz")}/>
        </div>
    </div>

    </>
  )
}
