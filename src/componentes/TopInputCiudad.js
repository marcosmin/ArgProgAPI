import React, { useState, useEffect} from 'react';
import '../hojas-de-estilo/TopInputCiudad.css';

function TopInputCiudad () {
  const [nombreCiudad, setNombreCiudad] = useState('');
  const [coordenadas, setCoordenadas] = useState(null);

  useEffect(() => {
    if (nombreCiudad.trim() === '') {
      // Si el campo de entrada está vacío, reiniciar coordenadas
      setCoordenadas(null);
      return;
    }

    // Llamar a la API de OpenStreetMap Nominatim para obtener las coordenadas
    const baseUrl = 'https://nominatim.openstreetmap.org/search';
    const format = 'json';
    const limit = 1;

    const url = `${baseUrl}?format=${format}&q=${nombreCiudad}&limit=${limit}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const resultado = data[0];
          let latitud = resultado.lat;
          let longitud = resultado.lon;
          console.log(`latitud: ${latitud} longitud: ${longitud}`);
          setCoordenadas({ latitud, longitud });
        } else {
          console.error('Ciudad no encontrada.');
        }
      })
      .catch(error => {
        console.error('Error al llamar a la API de OpenStreetMap Nominatim:', error);
      });
    }, [nombreCiudad]
  );
    
  // Manejador de eventos para la tecla 'Enter' en el input
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      // Actualiza el estado nombreCiudad cuando se presiona Enter
      setNombreCiudad(event.target.value);
    }
  };

  const handleInputChange = event => {
    setNombreCiudad(event.target.value);
  };
  
  return (
    <div className='ciudad'>
      <input
        className='input-ciudad'
        type='text'
        placeholder='El Tiempo en...'
        value={nombreCiudad}
        onKeyPress={handleKeyPress}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default TopInputCiudad;