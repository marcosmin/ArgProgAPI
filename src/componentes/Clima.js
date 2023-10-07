import React from 'react';
import '../hojas-de-estilo/Clima.css';

// Importar componentes
import TopImagenClima from './TopImagenClima';
import TopInputCiudad from './TopInputCiudad';
import TopTemperaturaActual from './TopTemperaturaActual';
import TopDia from './TopDia';
import TopCiudad from './TopCiudad';

import CenterClimaHoy from './CenterClimaHoy';
import CenterHoraTemperatura from './CenterHoraTemperatura';

import FooterMaxMin from './FooterMaxMin';
import FooterIndices from './FooterIndices';

// Importar iconos
import iconoIndiceUV from '../imagenes/indice.png';
import iconoViento from '../imagenes/viento.png';
import iconoAmanecer from '../imagenes/amanecer.png';
import iconoHumedad from '../imagenes/humedad.png';
import iconoVisibilidad from '../imagenes/visibilidad.png';
import iconoAire from '../imagenes/aire.png';

// Importar datos JSON
import climaJson from '../clima.json'
import estadoClimaJson from '../estadoClima.json'



/* DATOS DE LA API >>> TOP:
Imagen del Clima, Temperatura actual, Fecha y hora, Ubicacion */
const estadoClimaImagen = estadoClimaJson[climaJson.current_weather.weathercode].imagen
const tempActual = climaJson.current_weather.temperature
const horaActual = String(climaJson.current_weather.time).slice(-5)
const ubicacion = 'Pergamino'

// Obtener la fecha actual
const fecha = new Date(climaJson.current_weather.time);

// Obtener el nombre del día
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const nombreDia = diasSemana[fecha.getDay()];

// Obtener el formato dd-mm-aaaa
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1; // Los meses en js comienzan desde 0 (enero es 0)
const año = fecha.getFullYear();

// Formatear el día y el mes con ceros iniciales si es necesario
const diaFormateado = dia < 10 ? `0${dia}` : dia;
const mesFormateado = mes < 10 ? `0${mes}` : mes;

// Fecha formateada
const fechaActual = `${diaFormateado}/${mesFormateado}/${año}`;



/* DATOS DE LA API >>> CENTER:
Estado del Clima HOY, temperatura x hora */
const estadoClimaNombre = estadoClimaJson[climaJson.current_weather.weathercode].nombre



/* DATOS DE LA API >>> FOOTER:
Temp max, Temp min, Indice UV, Viento,
Amanecer, Atardecer, Humedad, Visibilidad, Aire */
const tempMax = climaJson.daily.temperature_2m_max
const tempMin = climaJson.daily.temperature_2m_min
const indiceUV = climaJson.daily.uv_index_max
const viento = climaJson.daily.windspeed_10m_max
const amanece = String(climaJson.daily.sunrise).slice(-5)
const anochece = String(climaJson.daily.sunset).slice(-5)
const humedad = climaJson.hourly.relativehumidity_2m[parseInt(String(climaJson.current_weather.time).slice(11, 13), 10)]
const visibilidad = (climaJson.hourly.visibility[parseInt(String(climaJson.current_weather.time).slice(11, 13), 10)]) / 1000
const calidadAire = climaJson.hourly.european_aqi[parseInt(String(climaJson.current_weather.time).slice(11, 13), 10)]



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

// Obtener descripcion de la Calidad del aire
let comentarioAire = '';
if (calidadAire <= 20) {
  comentarioAire = 'Buena';
} else if (calidadAire <= 40) {
  comentarioAire = 'Aceptable';
} else if (calidadAire <= 60) {
  comentarioAire = 'Moderada';
} else if (calidadAire <= 80) {
  comentarioAire = 'Mala';
} else if (calidadAire <= 100) {
  comentarioAire = 'Muy mala';
} else {
  comentarioAire = 'Peligrosa';
}



// Componente Clima
function Clima() {

  // Funciones para desplazar contenido horizontalmente
  const handleScrollLeft = () => {
    const container = document.querySelector('.temperaturasDiaria');
    container.scrollLeft -= 200; // Cantidad de scroll left
  };
  const handleScrollRight = () => {
    const container = document.querySelector('.temperaturasDiaria');
    container.scrollLeft += 200; // Cantidad de scroll right
  };

  return (
    <div className='container'>

      <div className='top'>

        <div className='imagenClima'>
          <TopImagenClima imagenClima={ estadoClimaImagen } />
        </div>
        
        <div className='datosActuales'>

          <div>
            <TopInputCiudad />
          </div>

          <div className='temperaturaActual'>
            <TopTemperaturaActual tempActual={ tempActual } />
          </div>

          <div className='datosDia'>
            <TopDia dia={ nombreDia } fecha={ fechaActual } horaActual={ horaActual }/>
          </div>

          <div className='datosCiudad'>
            <TopCiudad ubicacion={ ubicacion } />
          </div>

        </div>

      </div>

      <div className='center'>

        <div className='estadoClima'>
          <CenterClimaHoy estado={ estadoClimaNombre } />
        </div>

        <div className='rowTempXHora'>
          <button onClick={handleScrollLeft}>&lt;</button>
          <div className='temperaturasDiaria'>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[0]).slice(-5)} temp={climaJson.hourly.temperature_2m[0]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[1]).slice(-5)} temp={climaJson.hourly.temperature_2m[1]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[2]).slice(-5)} temp={climaJson.hourly.temperature_2m[2]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[3]).slice(-5)} temp={climaJson.hourly.temperature_2m[3]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[4]).slice(-5)} temp={climaJson.hourly.temperature_2m[4]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[5]).slice(-5)} temp={climaJson.hourly.temperature_2m[5]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[6]).slice(-5)} temp={climaJson.hourly.temperature_2m[6]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[7]).slice(-5)} temp={climaJson.hourly.temperature_2m[7]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[8]).slice(-5)} temp={climaJson.hourly.temperature_2m[8]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[9]).slice(-5)} temp={climaJson.hourly.temperature_2m[9]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[10]).slice(-5)} temp={climaJson.hourly.temperature_2m[10]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[11]).slice(-5)} temp={climaJson.hourly.temperature_2m[11]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[12]).slice(-5)} temp={climaJson.hourly.temperature_2m[12]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[13]).slice(-5)} temp={climaJson.hourly.temperature_2m[13]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[14]).slice(-5)} temp={climaJson.hourly.temperature_2m[14]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[15]).slice(-5)} temp={climaJson.hourly.temperature_2m[15]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[16]).slice(-5)} temp={climaJson.hourly.temperature_2m[16]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[17]).slice(-5)} temp={climaJson.hourly.temperature_2m[17]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[18]).slice(-5)} temp={climaJson.hourly.temperature_2m[18]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[19]).slice(-5)} temp={climaJson.hourly.temperature_2m[19]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[20]).slice(-5)} temp={climaJson.hourly.temperature_2m[20]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[21]).slice(-5)} temp={climaJson.hourly.temperature_2m[21]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[22]).slice(-5)} temp={climaJson.hourly.temperature_2m[22]} /></div>
            <div className='temperaturaXHora'><CenterHoraTemperatura horaActual={horaActual} hora={String(climaJson.hourly.time[23]).slice(-5)} temp={climaJson.hourly.temperature_2m[23]} /></div>
            <div></div>
          </div>
          <button onClick={handleScrollRight}>&gt;</button>
        </div>
      </div>


      <div className='footer'>

        <div className='temperaturaMaxMin'><FooterMaxMin 
          max={ tempMax } 
          min={ tempMin } />
        </div>

        <div className='indices'>
          <div className='compIndices'><FooterIndices icono={iconoIndiceUV} indice={'INDICE UV'} valor={ indiceUV } unidad={''} comentario={ comentarioIndiceUV } /></div>
          <div className='compIndices'><FooterIndices icono={iconoViento} indice={'VIENTO'} valor={ viento } unidad={'km/h'} comentario={ comentarioViento } /></div>
          <div className='compIndices'><FooterIndices icono={iconoAmanecer} indice={'AMANECE'} valor={ amanece } unidad={''} comentario={`Anochece ${ anochece }`} /></div>
          <div className='compIndices'><FooterIndices icono={iconoHumedad} indice={'HUMEDAD'} valor={ humedad } unidad={'%'} comentario={ comentarioHumedad } /></div>
          <div className='compIndices'><FooterIndices icono={iconoVisibilidad} indice={'VISIBILIDAD'} valor={ visibilidad } unidad={'km'} comentario={ comentarioVisibilidad } /></div>
          <div className='compIndices'><FooterIndices icono={iconoAire} indice={'CALIDAD DEL AIRE'} valor={ calidadAire } unidad={''} comentario={ comentarioAire } /></div>
        </div>
        
      </div>

    </div>
  );
}

export default Clima;