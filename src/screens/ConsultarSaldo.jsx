import React from 'react'
import { useNavigate } from "react-router";
import '../styles/Button.css'
import '../styles/Saldo.css'

export const ConsultarSaldo = () => {
    const saldo = localStorage.getItem('balance')

    let navigate = useNavigate();

    const closeSession = () => {
        localStorage.removeItem("account")
        localStorage.removeItem("balance")
        localStorage.removeItem("owner")
    }

    return (
        <>
            <div className='div-vertical'>
                <h3 className='title'>Su saldo disponible es:</h3>
                <h3 className='title'>{saldo} Bs</h3>

                <div className='div-horizontal'>
                    <button className='boton' onClick={() => navigate("/operaciones")}>
                        <h3 className='texto'>Volver a operaciones</h3>
                    </button>
                    
                    <button className='boton' onClick={() => {closeSession(); navigate("/login")}}>
                        <h3 className='texto'>Terminar y cerrar</h3>
                    </button>
                </div>
            </div>
        </>
    )
}

