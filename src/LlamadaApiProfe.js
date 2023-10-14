import React, { useState, useEffect } from "react";

function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-33.8899&longitude=-60.5736&hourly=temperature_2m,relativehumidity_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, []);

  return (
    <div>
      {loading && <h1>Cargando...</h1>}
      {!loading && weatherData && <div>{weatherData["latitude"]}</div>}
    </div>
  );
}

export default WeatherComponent;
