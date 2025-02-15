import { useEffect } from "react";
import '../App.css'
import { useNavigate } from 'react-router';
import '../styles/Tarjeta.css'; 


export const LeerTarjeta = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/otroServicio");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className = 'contenedor'>
      <h1>Leyendo el chip...</h1>
    </div>
  );
};