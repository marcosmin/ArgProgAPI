import React, { useState, useEffect } from "react";
import "../hojas-de-estilo/Mapa.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";

// luego reemplazar Json por transporteData en todo el codigo
import transporteJson from "../transporte.json";

function Mapa() {
  const [loading, setLoading] = useState(true);
  const [mapaError, setMapaError] = useState(null);
  const [transporteData, setTransporteData] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState("");
  const [routeID, setRouteID] = useState(22);

  useEffect(() => {
    setLoading(true);
    setMapaError(null);

    const fetchData = () => {

      const urlAPI = `https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?route_id=${routeID}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;

      fetch(
        urlAPI
      )
        .then((resp) => resp.json())
        .then((data) => {
          setTransporteData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setMapaError("Error al cargar los datos. Por favor, inténtalo de nuevo.");
          setLoading(false);
        });
    };

    fetchData(); // Llama a la función para cargar los datos inmediatamente

    const interval = setInterval(fetchData, 31000); // Llama a fetchData cada 31 segundos
    return () => clearInterval(interval);
  }, []);

  // Filtrar Lineas de colectivo duplicadas
  const uniqueRoutes = [
    ...new Set(
      transporteJson
        ? transporteJson.map((location) => location.route_short_name)
        : []
    ),
  ];

  // Icono personalizado
  const colectivoIcon = new L.Icon({
    iconUrl: selectedRoute
      ? `https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea${selectedRoute.match(/\d+/)}.jpg`
      : "",
    iconSize: [30, 30],
    iconAnchor: [12, 41],
    popupAnchor: [-3, -76],
    className: "sombraIcono",
  });

  return (
    <>
      {loading ? (
        <span className='loader'></span>
        ) : (
      <div className="selectorFlotante">
        <h2 className="tituloTransporte">COLECTIVOS DE BUENOS AIRES</h2>
        <select
          value={selectedRoute}
          onChange={(e) => setSelectedRoute(e.target.value)}
        >
          <option value="">Seleccionar línea</option>
          {uniqueRoutes.map((route) => (
            <option key={route} value={route}>
              {route}
            </option>
          ))}
        </select>

        {selectedRoute && (
          <img
            src={`https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea${selectedRoute.match(/\d+/)}.jpg`}
            alt={selectedRoute}
            style={{ width: "2vw", marginLeft: "15px" }}
          />
        )}
      </div>
      )}

      {mapaError && (
        <div className="error-message">{mapaError}</div>
      )}
      
      {!loading && !mapaError && (
      <MapContainer
        center={[-34.7131, -58.4772]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {selectedRoute &&
          transporteJson &&
          transporteJson.map((location, index) => {
            if (location.route_short_name === selectedRoute) {
              return (
                <Marker
                  key={index}
                  position={[location.latitude, location.longitude]}
                  icon={colectivoIcon}
                >
                  <Popup>
                    <div className="containerPopup">
                      <div className="lineaColectivo">
                        <strong>LÍNEA: {location.route_short_name}</strong><br />
                      </div>
                      <strong>Agencia:</strong> {location.agency_name}<br />
                      <strong>Velocidad:</strong> {location.speed}<br />
                      <strong>ID de Ruta:</strong> {location.route_id}<br />
                      <div className="direccionColectivo">
                        <strong>Con Dirección:</strong> {location.trip_headsign}<br />
                      </div>
                      <div>
                        {selectedRoute && (
                          <img
                            src={`https://www.xcolectivo.com.ar/imagenes/colectivos/fotos/linea${selectedRoute.match(/\d+/)}.jpg`}
                            alt={selectedRoute}
                            className="imagenColectivo"
                            onError={(e) => {
                              e.target.style.display = 'none'; // Oculta la imagen si ocurre un error al cargarla
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            } else {
              return null;
            }
          })}
      </MapContainer>
      )}
    </>
  );
}

export default Mapa;

/*
client_id: cb6b18c84b3b484d98018a791577af52
client_secret: 3e3DB105Fbf642Bf88d5eeB8783EE1E6
https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=SU_CLIENT_ID&client_secret=SU_CLIENT_SECRET
https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6

https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?route_id=22&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6
*/