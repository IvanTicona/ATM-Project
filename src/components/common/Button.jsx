import '../../styles/Button.css'
//import imagenSrc from '../../assets/nextIcon.svg'

export const Button = ({direccion, texto, accion}) => {
  const imagenSrc = ''
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