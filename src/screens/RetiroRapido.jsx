import React from 'react'
import { Button } from '../components/common/Button'
import { useNavigate } from "react-router"



export const RetiroRapido = () => {
    let navigate = useNavigate();
  return (
    <>
 
        <h1 className='title-atm'>Retiro</h1>
        <p className="texto">Saldo disponible: <strong>Bs. <span id="balance">1000</span> </strong></p>
        <div className="buttons">
            <Button texto = "50 Bs." direccion = "derecha" accion = {()=> navigate("/retiro-rapido")}/>
            <Button texto = "100 Bs." direccion = "derecha" accion = {()=> navigate("/retiro-rapido")}/>
            <Button texto = "200 Bs." direccion = "derecha" accion = {()=> navigate("/retiro-rapido")}/>
            <Button texto = "500 Bs." direccion = "derecha" accion = {()=> navigate("/retiro-rapido")}/>
    </div>
    <input type="number" id="customAmount" placeholder="Otro monto" />
    <Button texto = "Retiro" direccion = "derecha" accion = {()=> navigate("/retiro-rapido")}/>
 

    </>
  )
}