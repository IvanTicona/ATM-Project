import { useNavigate } from 'react-router'
import { Button } from '../components/common/Button'
import { opciones } from '../utils/opciones';
import '../styles/Operaciones.css'
import { useEffect } from 'react';
import { getTransactions } from '../services/account';


export const Operaciones = () => {

  let navigate = useNavigate();

  useEffect(()=>{
    const fetchAccountData = async () => {
      try {
        const transfers = await getTransactions();
        console.log(transfers);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAccountData();
  },[])

  return (
    <>
      <h3 className='title-atm'>SELECCIONE</h3>
      <h3 className='title-atm'>EL SERVICIO DESEADO</h3>
      <div className="opciones">
        {
          opciones.map(({name, path}, index)=>{
            return(
              <Button
                key={index}
                texto={name} 
                direccion={index%2==0? "izquierda":"derecha"} 
                accion={()=> navigate(`/${path}`)}
              />
            )
          })
        }
      </div>
    </>
  )
}
