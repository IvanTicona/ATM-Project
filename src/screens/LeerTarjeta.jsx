import React from 'react'
import { useEffect } from "react";
import '../App.css'
import { useNavigate } from 'react-router';
import { Button } from '../components/common/Button';


export const LeerTarjeta = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/otroServicio");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Leyendo el chip...</h1>
    </div>
  );
};