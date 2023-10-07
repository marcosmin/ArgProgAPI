import React from 'react';
import '../hojas-de-estilo/TopTemperaturaActual.css';

function TopTemperaturaActual ({ tempActual }) {
  return (
    <div>
      <p className='temperatura'>{`${ tempActual }º C`}</p>
    </div>
  );
}

export default TopTemperaturaActual;