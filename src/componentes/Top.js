import React from 'react';
import TopInputCiudad from './TopInputCiudad';
import TopImagenClima from './TopImagenClima';
import TopTemperaturaActual from './TopTemperaturaActual';
import TopDia from './TopDia';
import TopCiudad from './TopCiudad';
import estadoClimaJson from "../estadoClima.json";
import '../hojas-de-estilo/Top.css';

function Top ({ weatherdata }) {
  // Obtener fecha
  const fecha = new Date(weatherdata.current.time);
  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const nombreDia = diasSemana[fecha.getDay()];
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();
  const diaFormateado = dia < 10 ? `0${dia}` : dia;
  const mesFormateado = mes < 10 ? `0${mes}` : mes;
  const fechaActual = `${diaFormateado}/${mesFormateado}/${año}`;

  const estadoClimaImagen = estadoClimaJson[weatherdata.current.weathercode].imagen;
  const tempActual = weatherdata.current.temperature_2m;
  const horaActual = String(weatherdata.current.time).slice(-5);
  const ubicacion = 'Pergamino';

  return (
    <div className='top'>
      <TopInputCiudad />
      <div className='top2'>
        <div className='imagenClima'>
          <TopImagenClima imagenClima={estadoClimaImagen} />
        </div>
        <div className='datosActuales'>
          <TopTemperaturaActual tempActual={tempActual} />
          <TopDia dia={nombreDia} fecha={fechaActual} horaActual={horaActual} />
          <TopCiudad ubicacion={ubicacion} />
        </div>
      </div>
    </div>
  );
};

export default Top;