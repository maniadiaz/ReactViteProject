import { Box, Typography, Container, Button } from "@mui/material";
import {GoogleMap,Marker,InfoWindow,DirectionsService,DirectionsRenderer,useJsApiLoader} from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { googleMapsLibraries } from "./googleMapsConfig";

const origen = { lat: 23.2314459, lng: -106.4265313 };
const destino = { lat: 23.1982787, lng: -106.4236722 };
const libraries = ["places", "geometry", "drawing"];

const MapaConRuta = () => {
  const navigate = useNavigate();
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (window.google && window.google.maps) {
      setShouldLoad(true);
    }
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: googleMapsLibraries,
  });

  useEffect(() => {
    if (isLoaded) {
      setShouldLoad(true);
    }
  }, [isLoaded]);

  const containerStyle = {
    width: "50vw",
    height: "400px",
  };

  const directionsCallback = (response) => {
    if (response !== null && response.status === "OK") {
      setDirections(response);
    } else {
      console.error("Error al obtener la ruta", response);
    }
  };

  return shouldLoad ? (
    <Container maxWidth={false}>
      <Box
        sx={{
          width: "100%",
          p: 6,
          mb: 4,
          boxShadow: 3,
          borderRadius: 4,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography color="black" variant="h4" gutterBottom>
          Actividad 2
        </Typography>
        <Typography color="black" variant="h6" gutterBottom>
          Trazado de ruta entre dos puntos con la API de Google Maps
        </Typography>
        <Typography color="black" paragraph>
          En esta actividad se aprenderá a calcular y visualizar una ruta entre dos ubicaciones usando la API de Google Maps con React. Se utilizará el componente <code>DirectionsService</code> para generar la ruta y <code>DirectionsRenderer</code> para mostrarla gráficamente en el mapa.
        </Typography>
        <Typography color="black" variant="subtitle1" gutterBottom>
          Pasos para implementar la ruta:
        </Typography>
        <Typography color="black" component="div">
          <ul>
            <li>Definir los puntos de origen y destino con coordenadas geográficas.</li>
            <li>Configurar y cargar la API con las bibliotecas necesarias.</li>
            <li>Usar <code>DirectionsService</code> para solicitar la ruta entre los dos puntos.</li>
            <li>Visualizar la ruta usando <code>DirectionsRenderer</code>.</li>
            <li>Colocar marcadores en los puntos A (origen) y B (destino).</li>
          </ul>
        </Typography>
        <Typography color="black" variant="subtitle1" gutterBottom>
          Resultado:
        </Typography>
      </Box>

      <Box
        mt={5}
        sx={{
          width: "100%",
          p: 6,
          boxShadow: 3,
          borderRadius: 4,
          backgroundColor: "white",
        }}
      >
        <Typography color="black" variant="h4" align="center" gutterBottom>
          Ruta desde la Facultad a otro punto
        </Typography>

        <GoogleMap
          onLoad={(mapInstance) => setMap(mapInstance)}
          mapContainerStyle={containerStyle}
          center={origen}
          zoom={13}
        >
          <DirectionsService
            options={{
              destination: destino,
              origin: origen,
              travelMode: "DRIVING",
            }}
            callback={directionsCallback}
          />

          {directions && (
            <DirectionsRenderer options={{ directions }} />
          )}

          <Marker position={origen} label="A" />
          <Marker position={destino} label="B" />
        </GoogleMap>
      </Box>

      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/work")}
        >
          Regresar a los proyectos
        </Button>
      </Box>
    </Container>
  ) : (
    <div>Cargando mapa...</div>
  );
};

export default MapaConRuta;
