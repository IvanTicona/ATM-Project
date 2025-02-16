/* eslint-disable react/prop-types */
import React from 'react'
import "../styles/Cambio.css";

export const CambioComponent = ({divisa, compra, venta}) => {
  return (
    <div className='cambio-container'>
        <h1 className='cambio-title'>{divisa}</h1>
        <h1>Compra = Bs {compra}</h1>
        <h1>Venta = Bs {venta}</h1>
    </div>
  )
}
