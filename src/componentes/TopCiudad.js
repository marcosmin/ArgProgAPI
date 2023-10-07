import React from 'react';
import imgUbicacion from '../imagenes/ubicacion.png';
import '../hojas-de-estilo/TopCiudad.css';

function TopCiudad({ ubicacion }) {
  return (
    <div className='ciudad'>
      <img src={ imgUbicacion } alt='ubicacion' />
      <p>{ ubicacion }</p>
    </div>
  );
}

export default TopCiudad;
