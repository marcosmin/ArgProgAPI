import React from 'react';
import '../hojas-de-estilo/CenterClimaHoy.css';

function CenterClimaHoy({ estado }) {
  return (
    <div className='hoy'>
      <p>{`HOY: ${estado}`}</p>
    </div>
  );
}

export default CenterClimaHoy;