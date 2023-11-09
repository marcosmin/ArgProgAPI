import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import "../hojas-de-estilo/Mapa.css";

function Mapa() {
  const [loading, setLoading] = useState(true);
  const [mapaError, setMapaError] = useState(null);
  const [transporteData, setTransporteData] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState();
  const [linea, setLinea] = useState("");

  const fetchData = () => {
    const urlAPI = `https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?route_id=${selectedRoute}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;

    fetch(urlAPI)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setTransporteData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setMapaError("Error al cargar los datos. Por favor, inténtalo de nuevo.");
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    setMapaError(null);
    fetchData();
  }, [selectedRoute]);

  useEffect(() => {
    setLoading(true);
    setMapaError(null);
    const interval = setInterval(() => {
      fetchData();
    }, 31000);
    return () => clearInterval(interval);
  }, [selectedRoute]);

  // Icono personalizado
  const colectivoIcon = new L.Icon({
    iconUrl: linea
      ? `https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea${linea}.jpg`
      : "",
    iconSize: [30, 30],
    iconAnchor: [12, 41],
    popupAnchor: [-3, -76],
    className: "sombraIcono",
  });

  return (
    <>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div className="selectorFlotante">
          <h2 className="tituloTransporte">COLECTIVOS DE BUENOS AIRES</h2>

          <select
            value={selectedRoute}
            onChange={(e) => {
              const selectedOption = e.target.selectedOptions[0];
              const selectedText = selectedOption.textContent;
              setLinea(selectedText)
              setSelectedRoute(e.target.value)
              }}>
            <option value="">Seleccionar línea</option>
            <option value="306">24</option>
            <option value="384">57</option>
            <option value="581">85</option>
            <option value="624">98</option>
            <option value="69">106</option>
            <option value="22">108</option>
            <option value="198">130</option>
            <option value="100">152</option>
            <option value="481">176</option>
            <option value="137">195</option>
          </select>

          {selectedRoute && (
            <img
              src={`https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea${linea}.jpg`}
              alt={linea}
              className='iconoLinea'
            />
          )}
        </div>
      )}

      {mapaError && (
        <div className="error-message">{mapaError}</div>
      )}

      {!loading && !mapaError && Array.isArray(transporteData) && (
        <MapContainer
          center={[-34.5131, -58.4772]}
          zoom={11}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {selectedRoute &&
            transporteData.map((location, index) => {
              if (new RegExp(linea).test(location.route_short_name)) {
                return (
                  <Marker
                    key={index}
                    position={[location.latitude, location.longitude]}
                    icon={colectivoIcon}
                  >
                    <Popup>
                      <div className="containerPopup">
                        <div className="lineaColectivo">
                          <strong>LÍNEA: {location.route_short_name}</strong>
                          <br />
                        </div>
                        <strong>Agencia:</strong> {location.agency_name}
                        <br />
                        <strong>Velocidad:</strong> {location.speed}
                        <br />
                        <strong>ID de Ruta:</strong> {location.route_id}
                        <br />
                        <div className="direccionColectivo">
                          <strong>Con Dirección:</strong> {location.trip_headsign}
                          <br />
                        </div>
                        <div>
                          {selectedRoute && (
                            <img
                              src={`https://www.xcolectivo.com.ar/imagenes/colectivos/fotos/linea${linea}.jpg`}
                              alt={linea}
                              className="imagenColectivo"
                              onError={(e) => {
                                e.target.style.display = "none"; // Oculta la imagen si ocurre un error al cargarla
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
.match(/\d+/
client_id: cb6b18c84b3b484d98018a791577af52
client_secret: 3e3DB105Fbf642Bf88d5eeB8783EE1E6
https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=SU_CLIENT_ID&client_secret=SU_CLIENT_SECRET
https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6

https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?route_id=22&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6
*/