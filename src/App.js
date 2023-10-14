import React, { useEffect, useState } from 'react';
import './App.css';
import Clima from './componentes/Clima';
import Transporte from './componentes/Transporte';


function App() {

  const [weatherdata, setWeatherdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latitud, setLatitud] = useState(null);
  const [longitud, setLongitud] = useState(null);

  // Función para manejar las coordenadas
  // const handleCoordenadasChange = (coordenadas) => {
  // setLatitud(6);
  // setLongitud(5);
  // };


  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=-33.8899&longitude=-60.5736&current=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m&hourly=temperature_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=America%2FSao_Paulo&forecast_days=1`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherdata(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, [latitud, longitud]);


  return (
    <>

      {loading && <span class="loaderNube"></span>}
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
