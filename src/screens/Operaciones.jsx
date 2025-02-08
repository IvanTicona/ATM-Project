import { useNavigate } from 'react-router'
import { Button } from '../components/common/Button'
import '../styles/Operaciones.css'


export const Operaciones = () => {

  let navigate = useNavigate();

  const opciones = [
    "Retiro Rapido Bs 300",
    "Consulta de Saldo",
    "Retiro",
    "Extracto",
    "Servicios",
    "Transferencia"
  ]

  return (
    <>
      <h3 className='title'>SELECCIONE</h3>
      <h3 className='title'>EL SERVICIO DESEADO</h3>
      <div className="opciones">
        {
          opciones.map((name, index)=>{
            return(
              <Button
                key={index} 
                texto={name} 
                direccion={index%2==0? "izquierda":"derecha"} 
                accion={()=>navigate("/login")} 
              />
            )
          })
        }
      </div>
    </>
  )
}
