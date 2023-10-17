import React, { useEffect, useState } from 'react';
import './App.css';
import Clima from './componentes/Clima';
import Transporte from './componentes/Transporte';

function App() {
  const [weatherdata, setWeatherdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latitud, setLatitud] = useState(-33.8899);
  const [longitud, setLongitud] = useState(-60.5736);

  useEffect(() => {
    setLoading(true);
    setError(null); // Restablecer el estado de error

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m&hourly=temperature_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=America%2FSao_Paulo&forecast_days=1`
    )
    .then((resp) => resp.json())
    .then((data) => {
      setWeatherdata(data);
      setLoading(false);
    })
    .catch((ex) => {
      console.error(ex);
      setError('Error al cargar los datos. Por favor, inténtalo de nuevo.');
      setLoading(false);
    });
  }, [latitud, longitud]);

  return (
    <>
      {loading && <span className='loaderNube'></span>}

      {/* Mostrar mensaje de error */}
      {error && <div className='error-message'>{error}</div>}

      {!loading && weatherdata && (
        <div className='app'>
          <div className='clima'>
            <Clima weatherdata={weatherdata} />
          </div>
          <div className='transporte'>
            <Transporte />
          </div>
        </div>
      )}
    </>
  );
}

export default App;