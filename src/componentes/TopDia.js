import React from 'react';
import '../hojas-de-estilo/TopDia.css';

function TopDia({ dia, fecha, horaActual }) {
  return (
    <div className='dia'>
      <p>{`${ dia } ${ fecha }, ${ horaActual }`}</p>
    </div>
  );
}

export default TopDia;