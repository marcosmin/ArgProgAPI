import React from 'react';
import Top from './Top';
import Center from './Center';
import Footer from './Footer';
import '../hojas-de-estilo/Clima.css';

function Clima({ weatherdata }) {
  return (
    <div className='container'>
      <Top weatherdata={weatherdata} />
      <Center weatherdata={weatherdata} />
      <Footer weatherdata={weatherdata} />
    </div>
  );
}

export default Clima;