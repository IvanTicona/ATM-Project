import '../../styles/Button.css'
import imagenSrc from '../../assets/nextIcon.svg'

// eslint-disable-next-line react/prop-types
export const Button = ({direccion, texto, accion}) => {
  return (
    <div onClick={accion} className="boton">
      {direccion === 'izquierda' && <img src={imagenSrc} alt="icono" className="icono" />}
      <div className="texto">
        <h3>{texto}</h3>
      </div>
      {direccion === 'derecha' && <img src={imagenSrc} alt="icono" className="icono" />}
    </div>
  )
}
