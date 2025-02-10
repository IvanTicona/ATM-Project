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
    "Transferencia",
    "Tipo De Cambio",
    "Cambio De PIN"
  ]

  const verificarOperacion = (index) => {
    switch (index) {
      case 0: 
        console.log("Debería ir a retiro rápido");
        break;
      case 1: 
        navigate("/saldo");
        break; 
      case 2: 
        console.log("Debería ir a retiro");
        break; 
      case 3: 
        console.log("Debería ir a extracto");
        break; 
      case 4: 
        console.log("Debería ir a servicios");
        break; 
      case 5: 
        console.log("Debería ir a transferencia");
        break;
      case 6: 
        navigate("/TipoDeCambio");
        break; 
      case 7: 
        navigate("/CambioDePin")
        break;  
      default: 
        console.log('Estado desconocido.');
      
    }
  };

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
                accion={()=>verificarOperacion(index)} 
              />
            )
          })
        }
      </div>
    </>
  )
}
