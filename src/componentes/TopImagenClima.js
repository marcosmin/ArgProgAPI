import React from "react";
import '../hojas-de-estilo/TopImagenClima.css';

function TopImagenClima({ imagenClima }) {
  return (
    <div className='imagenClima'>
      <img src={ imagenClima } alt='imagen del clima'/>
    </div>
  );
}

export default TopImagenClima;