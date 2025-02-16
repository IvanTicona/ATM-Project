import React from 'react'
import '../../styles/Button.css'
import { Button } from './Button'
import { useNavigate } from 'react-router';

export const OpcionesDeSalida = () => {
    let navigate = useNavigate();
    return (
        <>
            <div className="buttons-container">
                <Button texto='Otro servicio' direccion='derecha' accion={() => navigate('/otro-servicio')} />
                <Button texto='Salir' direccion='derecha' accion={() => navigate('/leer-tarjeta')} />
            </div>
        </>
    )
}






