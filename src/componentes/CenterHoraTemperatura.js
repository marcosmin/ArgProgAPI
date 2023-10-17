import React from 'react';
import '../hojas-de-estilo/CenterHoraTemperatura.css';

function CenterHoraTemperatura({ horaActual, hora, temp }) {
  return (
    <div className='centerHoraTemp'>
      <p className='centerHora'>{`${hora}`}</p>
      <p className={hora.slice(0,2) === horaActual.slice(0,2)?'centerTemperaturaActual':'centerTemperatura'}>{`${temp}º`}</p>
      <div className={hora.slice(0,2) === horaActual.slice(0,2)?'lineaHoraTempActual':'lineaHoraTemp'}></div>
    </div>
  );
}

export default CenterHoraTemperatura;