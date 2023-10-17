import React from 'react';
import CenterClimaHoy from './CenterClimaHoy';
import CenterHoraTemperatura from './CenterHoraTemperatura';
import estadoClimaJson from '../estadoClima.json';
import '../hojas-de-estilo/Center.css';

function Center ({ weatherdata }) {
  const estadoClimaNombre = estadoClimaJson[weatherdata.current.weathercode].nombre;
  const horaActual = String(weatherdata.current.time).slice(-5);

  // Funciones para desplazar contenido horizontalmente
  const handleScrollLeft = () => {
    const container = document.querySelector('.temperaturasDiaria');
    container.scrollLeft -= 200; // Cantidad de scroll left
  };
  const handleScrollRight = () => {
    const container = document.querySelector('.temperaturasDiaria');
    container.scrollLeft += 200; // Cantidad de scroll right
  };

  return (
    <div className='center'>

      <div className='estadoClima'>
        <CenterClimaHoy estado={estadoClimaNombre} />
      </div>

      <div className='rowTempXHora'>
        <button onClick={handleScrollLeft}>&lt;</button>

        <div className='temperaturasDiaria'>
          {weatherdata.hourly.temperature_2m.map((temp, index) => (
            <div key={index} className='temperaturaXHora'>
              <CenterHoraTemperatura
                horaActual={horaActual}
                hora={String(weatherdata.hourly.time[index]).slice(-5)}
                temp={temp}
              />
            </div>
          ))}
        </div>

        <button onClick={handleScrollRight}>&gt;</button>
      </div>

    </div>
  );
};

export default Center;