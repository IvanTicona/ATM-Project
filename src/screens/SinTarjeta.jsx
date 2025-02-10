import { useEffect } from "react";
import '../App.css'
import { useNavigate } from "react-router";
import '../styles/Tarjeta.css'; 


export const SinTarjeta = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      navigate("/login"); 
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  return (
    <div className = 'contenedor'>
    <h1>Por favor ingrese su tarjeta</h1>
    </div>
  )
}