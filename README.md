# Aplicación de Clima en REACT 🌤️

¡Bienvenido/a a la Aplicación de Clima desarrollada con React! Esta aplicación proporciona información detallada sobre el clima actual, el pronóstico diario y otros datos relevantes, como el índice UV, la velocidad del viento, la humedad, la visibilidad y la calidad del aire.

Esta aplicación se creó como parte de un proyecto práctico durante la formación en "Argentina Programa 4.0", ofrecida por FAMAF - UNC en el año 2023. | 👨‍🎓 Desarrollador: Marcos Mingo.

## Captura de Pantalla 📸
![Captura 1](./src/imagenes/screenshot1.jpg)

## Estructura del Proyecto

El proyecto está organizado en varios archivos y directorios que cumplen diferentes funciones. A continuación, se describen estos componentes y archivos clave:

### Componentes de React

1. ☀️ **TopImagenClima**: Este componente muestra una imagen que representa el estado del clima actual.

2. 🌍 **TopInputCiudad**: Se utiliza para ingresar el nombre de la ciudad cuyo clima se quiere consultar.

3. 🌡️ **TopTemperaturaActual**: Muestra la temperatura actual en grados Celsius.

4. 📅 **TopDia**: Muestra el nombre del día actual, la fecha actual y la hora actual.

5. 🏙️ **TopCiudad**: Muestra la ubicación actual.

6. 🌤️ **CenterClimaHoy**: Muestra el estado del clima para el día actual.

7. 🕒 **CenterHoraTemperatura**: Muestra la temperatura por hora para el día actual.

8. 🌡️ **FooterMaxMin**: Muestra las temperaturas máxima y mínima para el día actual.

9. 🌎 **FooterIndices**: Muestra varios índices relacionados con el clima, como el índice UV, la velocidad del viento, la hora del amanecer y otros.

### Archivos JSON

- 📄 **clima.json**: Contiene datos relacionados con el clima actual y pronósticos futuros.

- 📄 **estadoClima.json**: Proporciona información sobre el estado del clima en función de códigos de estado.

## Datos del Clima

El código obtiene datos del clima de los archivos JSON mencionados anteriormente y realiza cálculos basados en estos datos para mostrar información relevante en la aplicación.

## Scroll Horizontal

La aplicación permite desplazarse horizontalmente por las temperaturas por hora para el día actual utilizando los botones "&lt;" y "&gt;".

## Descripción de los índices extras

El código utiliza condiciones para determinar una descripcion en base al valor actual del índice. Estos comentarios se muestran en la parte inferior de la aplicación.

## Ejecutar la Aplicación ▶️

Para ejecutar la aplicación, se necesita un entorno de desarrollo de React configurado. Puede seguir estos pasos:

1. Clonar el repositorio.

2. Asegurarse de tener Node.js y npm instalados en su sistema.

3. En el directorio raíz del proyecto, ejecute `npm install` para instalar las dependencias.

4. Luego, ejecute `npm start` para iniciar la aplicación en un servidor de desarrollo.

5. Abra su navegador y vaya a `http://localhost:3000` para ver la aplicación en funcionamiento.

6. Tambien puede **Navegar a:** https://marcosmin.github.io/ArgProgAPI/ 🌐

## Conclusiones

Este proyecto proporciona una aplicación de pronóstico del clima que muestra información relevante de manera organizada y atractiva. El código se basa en React y utiliza datos de archivos JSON para mostrar datos y pronósticos en tiempo real (aun no implementado). La aplicación también incorpora una descripcion personalizada segun el valor del indice para proporcionar una experiencia de usuario completa.


---
Hecho con ❤️ por [Marcos Mingo](https://github.com/marcosmin) 😊