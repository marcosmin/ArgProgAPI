import React from "react";
import '../hojas-de-estilo/FooterIndices.css';

function FooterIndices({ icono, indice, valor, unidad, comentario }) {
  return (
    <div className="footerIndice">

      <div className="tituloIndice">
        <img src={ icono } alt='icono' />
        <p>{`${ indice }`}</p>
      </div>

      <div className='valorYUnidad'>
        <div>
          <p className='valorIndice'>{`${ valor }`}</p>
        </div>
        <div>
          <p className='unidadIndice'>{`${ unidad }`}</p>
        </div>
      </div>

      <div>
        <p className='comentarioIndice'>{`${ comentario }`}</p>
      </div>

    </div>
  );
}

export default FooterIndices;