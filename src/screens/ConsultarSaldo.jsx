import React from 'react'
import { useNavigate } from "react-router";
import '../styles/Button.css'
import '../styles/Saldo.css'

export const ConsultarSaldo = () => {
    // TODO se debe cargar el saldo desde la DB
    const saldo = 0.0

    let navigate = useNavigate();
  return (
    <>
        <div className='div-vertical'>
            <h3 className='title'>Su saldo disponible es:</h3>
            <h3 className='title'>{saldo} Bs</h3>

            <div className='div-horizontal'>
                <button className='boton' onClick={()=>navigate("/operaciones")}>
                    <h3 className='texto'>Volver a operaciones</h3>
                </button>
                {/* Considerar que al terminar la sesión se debería borrar todos los datos cargados desde el login, como el PIN */}
                <button className='boton'onClick={()=>navigate("/")}>
                    <h3 className='texto'>Terminar y cerrar</h3>
                </button>
            </div>
        </div>
    </>
  )
}

