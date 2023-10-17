import React from 'react';
import '../hojas-de-estilo/FooterMaxMin.css';
import tempMaxImg from '../imagenes/thermometer-warmer.svg'
import tempMinImg from '../imagenes/thermometer-colder.svg'

function FooterMaxMin({ max, min }) {
  return (
    <div className='fMaxMin'>

      <div className='tMax'>
        <div className='tempImgTitulo'>
          <img src={ tempMaxImg } alt={'tempMaxImg'}/>
          <p className='max'>MAX</p>
        </div>
        <p className='temperaturaMax'>{`${max}º C`}</p>
      </div>

      <div className='tMin'>
        <div className='tempImgTitulo'>
          <img src={ tempMinImg } alt={'tempMinImg'} />
          <p className='min'>MIN</p>
        </div>
        <p className='temperaturaMin'>{`${min}º C`}</p>
      </div>

    </div>
  );
}

export default FooterMaxMin;