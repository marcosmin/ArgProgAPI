import React, { useState, useContext } from 'react';
import { ClimaContext } from '../App';
import iconBuscar from '../imagenes/buscar.svg';
import '../hojas-de-estilo/TopInputCiudad.css';

function TopInputCiudad() {
  const [inputValue, setInputValue] = useState('');
  const [sugerencias, setSugerencias] = useState([]);
  const [error, setError] = useState(null);

  const { setLatitud, setLongitud, setUbicacion } = useContext(ClimaContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getSugerencias = (ciudad) => {
    setError(null);

    const apiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad}&count=10&language=es&format=json`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setSugerencias(data.results);
          setLatitud(data.results[0].latitude);
          setLongitud(data.results[0].longitude);
          setUbicacion(ciudad); // Agrega el valor del input al contexto
        } else {
          setError('No se encontraron sugerencias.');
        }
      })
      .catch((error) => {
        setError('Error al buscar sugerencias de geocodificación.');
        console.error('Error al buscar sugerencias de geocodificación:', error);
      });
  };

  const handleBuscarClick = () => {
    setSugerencias([]);
    getSugerencias(inputValue);
  };

  return (
    <div className='ciudad'>
      <input
        className='input-ciudad'
        type='text'
        placeholder='El Tiempo en...'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className='botonBuscar'
        onClick={handleBuscarClick}>
        <img src={ iconBuscar } alt={'icono buscar'} />
      </button>
    </div>
  );
}

export default TopInputCiudad;