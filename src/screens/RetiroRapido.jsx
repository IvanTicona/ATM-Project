import React from 'react'
import { Button } from '../components/common/Button'
import { useNavigate } from "react-router"



export const RetiroRapido = () => {
    let navigate = useNavigate();
  return (
    <>
 
        <h1 className='title-atm'>Retiro</h1>
    <div className="buttons">
            <Button texto = "10 Bs." direccion = "derecha" accion = {()=> navigate("/retiroRapido")}/>
            <Button texto = "20 Bs." direccion = "derecha" accion = {()=> navigate("/retiroRapido")}/>
            <Button texto = "50 Bs." direccion = "derecha" accion = {()=> navigate("/retiroRapido")}/>
            <Button texto = "100 Bs." direccion = "derecha" accion = {()=> navigate("/retiroRapido")}/>
            <Button texto = "200 Bs." direccion = "derecha" accion = {()=> navigate("/retiroRapido")}/>
            <Button texto = "500 Bs." direccion = "derecha" accion = {()=> navigate("/retiroRapido")}/>
            <Button texto = "Otro monto" direccion = "derecha" accion = {()=> navigate("/retiro")}/>
    </div>
    </>
  )
}