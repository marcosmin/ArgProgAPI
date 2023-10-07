import React from 'react';
import '../hojas-de-estilo/TopInputCiudad.css';

// Manejador de eventos para la tecla 'Enter' en el input
const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    alert('awantaaaaaaaaa amigo/a, disfrutemos del hermoso TP 0, ya habrá tiempo para quemarse la cabeza y darle funcionalidad a este input. Abrazo!')
  }
}

function TopInputCiudad () {
  return (
    <div className='ciudad'>
      <input 
        className='input-ciudad' 
        type='text' 
        placeholder='El Tiempo en...'
        // value={ciudad}
        // onChange={handleNameChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default TopInputCiudad;