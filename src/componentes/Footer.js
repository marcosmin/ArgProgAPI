import React from "react";
import FooterMaxMin from "./FooterMaxMin";
import FooterIndices from "./FooterIndices";
import iconoIndiceUV from "../imagenes/indice.png";
import iconoViento from "../imagenes/viento.png";
import iconoAmanecer from "../imagenes/amanecer.png";
import iconoHumedad from "../imagenes/humedad.png";
import iconoVisibilidad from "../imagenes/visibilidad.png";
import iconoPrecipitaciones from "../imagenes/precipitaciones.png";
import '../hojas-de-estilo/Footer.css';

function Footer ({ weatherdata }) {
  const tempMax = weatherdata.daily.temperature_2m_max;
  const tempMin = weatherdata.daily.temperature_2m_min;
  const indiceUV = weatherdata.daily.uv_index_max;
  const viento = weatherdata.current.windspeed_10m;
  const amanece = String(weatherdata.daily.sunrise).slice(-5);
  const anochece = String(weatherdata.daily.sunset).slice(-5);
  const humedad = weatherdata.current.relativehumidity_2m;
  const visibilidad = weatherdata.hourly.visibility[parseInt(String(weatherdata.current.time).slice(11, 13), 10)] / 1000;
  const precipitaciones = weatherdata.daily.precipitation_probability_max;

  // Obtener descripcion del Índice UV
  let comentarioIndiceUV = '';
  if (indiceUV < 3) {
    comentarioIndiceUV = 'Bajo';
  } else if (indiceUV < 6) {
    comentarioIndiceUV = 'Moderado';
  } else if (indiceUV < 8) {
    comentarioIndiceUV = 'Alto';
  } else if (indiceUV < 11) {
    comentarioIndiceUV = 'Muy alto';
  } else if (indiceUV >= 11) {
    comentarioIndiceUV = 'Extremadamente alto';
  }

  // Obtener descripcion del Viento
  let comentarioViento = '';
  if (viento >= 1 && viento <= 5) {
    comentarioViento = 'Calma';
  } else if (viento > 5 && viento <= 11) {
    comentarioViento = 'Brisa';
  } else if (viento > 11 && viento <= 19) {
    comentarioViento = 'Viento leve';
  } else if (viento > 19 && viento <= 28) {
    comentarioViento = 'Viento moderado';
  } else if (viento > 28 && viento <= 38) {
    comentarioViento = 'Viento regular';
  } else if (viento > 38 && viento <= 49) {
    comentarioViento = 'Viento Fuerte';
  } else if (viento > 49 && viento <= 61) {
    comentarioViento = 'Viento muy Fuerte';
  } else if (viento > 61 && viento <= 74) {
    comentarioViento = 'Temporal';
  } else if (viento > 74 && viento <= 88) {
    comentarioViento = 'Temporal fuerte';
  } else if (viento > 88 && viento <= 102) {
    comentarioViento = 'Temporal muy fuerte';
  } else if (viento > 102 && viento <= 117) {
    comentarioViento = 'Temporal muy duro';
  } else if (viento > 117) {
    comentarioViento = 'Temporal Huracanado';
  }

  // Obtener descripcion de la Humedad
  let comentarioHumedad = '';
  if (humedad < 30) {
    comentarioHumedad = 'Baja';
  } else if (humedad >= 30 && humedad <= 60) {
    comentarioHumedad = 'Normal';
  } else if (humedad > 60) {
    comentarioHumedad = 'Alta';
  }

  // Obtener descripcion de la Visibilidad
  let comentarioVisibilidad = '';
  if (visibilidad >= 0 && visibilidad <= 0.05) {
    comentarioVisibilidad = 'Sin visibilidad';
  } else if (visibilidad > 0.05 && visibilidad <= 0.5) {
    comentarioVisibilidad = 'Muy poca visibilidad';
  } else if (visibilidad > 0.5 && visibilidad <= 1) {
    comentarioVisibilidad = 'Poca visibilidad';
  } else if (visibilidad > 1 && visibilidad <= 4) {
    comentarioVisibilidad = 'Escasa visibilidad';
  } else if (visibilidad > 4 && visibilidad <= 10) {
    comentarioVisibilidad = 'Visibilidad moderada';
  } else if (visibilidad > 10 && visibilidad <= 20) {
    comentarioVisibilidad = 'Buena visibilidad';
  } else if (visibilidad > 20 && visibilidad <= 50) {
    comentarioVisibilidad = 'Muy buena visibilidad';
  } else if (visibilidad > 50) {
    comentarioVisibilidad = 'Excelente visibilidad';
  }

  // Obtener descripcion de las Precipitaciones
  let comentarioPrecipitaciones = '';
  if (precipitaciones <= 20) {
    comentarioPrecipitaciones = 'Muy baja';
  } else if (precipitaciones <= 40) {
    comentarioPrecipitaciones = 'Baja';
  } else if (precipitaciones <= 60) {
    comentarioPrecipitaciones = 'Moderada';
  } else if (precipitaciones <= 80) {
    comentarioPrecipitaciones = 'Alta';
  } else {
    comentarioPrecipitaciones = 'Muy alta';
  }

  const indicesData = [
    {
      icono: iconoIndiceUV,
      indice: 'INDICE UV',
      valor: indiceUV,
      unidad: '',
      comentario: comentarioIndiceUV,
    },
    {
      icono: iconoViento,
      indice: 'VIENTO',
      valor: viento,
      unidad: 'km/h',
      comentario: comentarioViento,
    },
    {
      icono: iconoAmanecer,
      indice: 'AMANECE',
      valor: amanece,
      unidad: '',
      comentario: `Anochece ${anochece}`,
    },
    {
      icono: iconoHumedad,
      indice: 'HUMEDAD',
      valor: humedad,
      unidad: '%',
      comentario: comentarioHumedad,
    },
    {
      icono: iconoVisibilidad,
      indice: 'VISIBILIDAD',
      valor: visibilidad,
      unidad: 'km',
      comentario: comentarioVisibilidad,
    },
    {
      icono: iconoPrecipitaciones,
      indice: 'PRECIPITACIONES',
      valor: precipitaciones,
      unidad: '%',
      comentario: comentarioPrecipitaciones,
    },
  ];

  return(
    <div className='footer'>

      <div className='temperaturaMaxMin'>
        <FooterMaxMin max={tempMax} min={tempMin} />
      </div>

      <div className='indices'>
        {indicesData.map((item, index) => (
          <div className='compIndices' key={index}>
            <FooterIndices
              icono={item.icono}
              indice={item.indice}
              valor={item.valor}
              unidad={item.unidad}
              comentario={item.comentario}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Footer;