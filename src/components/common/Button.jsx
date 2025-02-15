import '../../styles/Button.css'
<<<<<<< HEAD
//import imagenSrc from '../../assets/nextIcon.svg'

export const Button = ({direccion, texto, accion}) => {
    const imagenSrc = ""
=======
import imagenSrc from '../../assets/nextIcon.svg'

// eslint-disable-next-line react/prop-types
export const Button = ({direccion, texto, accion}) => {
>>>>>>> 80591aefaf243371a9f0880c9d75ad6f3bf4b335
  return (
    <div onClick={accion} className="boton">
      {direccion === 'izquierda' && <img src={imagenSrc} alt="icono" className="icono" />}
      <div className="texto">
        <h3>{texto}</h3>
      </div>
      {direccion === 'derecha' && <img src={imagenSrc} alt="icono" className="icono" />}
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 80591aefaf243371a9f0880c9d75ad6f3bf4b335
