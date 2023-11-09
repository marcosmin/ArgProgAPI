import React, { createContext, useEffect, useState } from 'react';
import Clima from './componentes/Clima';
import Transporte from './componentes/Transporte';
import './App.css';

export const ClimaContext = createContext();

function App() {
  const [weatherdata, setWeatherdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latitud, setLatitud] = useState(-34.7131);
  const [longitud, setLongitud] = useState(-58.4772);
  const [ubicacion, setUbicacion] = useState('Pergamino');
  const value = { latitud, setLatitud, longitud, setLongitud, ubicacion, setUbicacion };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m&hourly=temperature_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=America%2FSao_Paulo&forecast_days=1`
    )
      .then((response) => response.json())
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
    <ClimaContext.Provider value={value}>
      {loading && <span className='loaderNube'></span>}
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
    </ClimaContext.Provider>
  );
}

export default App;