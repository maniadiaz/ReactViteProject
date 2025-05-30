import { Box, Typography, Button, Container } from "@mui/material";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { googleMapsLibraries } from "./googleMapsConfig";

const center = {
  lat: 23.2314459,
  lng: -106.4265313,
};

const libraries = ["places", "geometry", "drawing"];

function Mapa() {
  const navigate = useNavigate();
  const [infoOpen, setInfoOpen] = useState(false);
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
    width: "100%",
    height: "400px",
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
          Actividad 1
        </Typography>
        <Typography color="black" variant="h6" gutterBottom>
          Generación de mapa con la API de Google
        </Typography>
        <Typography color="black" paragraph>
          En esta actividad se aprenderá a integrar un mapa interactivo utilizando la API de Google Maps dentro de una aplicación React. El objetivo es mostrar una ubicación específica (Facultad de Informática Mazatlán) con un marcador y una ventana de información.
        </Typography>
        <Typography color="black" variant="subtitle1" gutterBottom>
          Pasos para implementar el mapa:
        </Typography>
        <Typography color="black" component="div">
          <ul>
            <li>Obtener una clave de API de Google Maps y habilitar las bibliotecas necesarias.</li>
            <li>Instalar el paquete <code>@react-google-maps/api</code>.</li>
            <li>Configurar el cargador de scripts usando <code>useJsApiLoader</code>.</li>
            <li>Crear el componente con <code>GoogleMap</code>, <code>Marker</code> e <code>InfoWindow</code>.</li>
            <li>Mostrar la ubicación deseada y agregar interactividad al marcador.</li>
          </ul>
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Resultado:
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          p: 6,
          boxShadow: 3,
          borderRadius: 4,
          backgroundColor: "white",
        }}
      >
        <Typography color="black" variant="h4" align="center" gutterBottom>
          Mapa interactivo
        </Typography>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          <Marker position={center} onClick={() => setInfoOpen(true)} />
          {infoOpen && (
            <InfoWindow position={center} onCloseClick={() => setInfoOpen(false)}>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold" color="black" gutterBottom>
                  Ubicación de la Universidad Autónoma de Sinaloa
                </Typography>
                <Typography variant="body2" color="black" gutterBottom>
                  Marcador de la Facultad de Informática Mazatlán
                </Typography>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={() => alert("Aquí está la Facultad de Informática Mazatlán")}
                >
                  Más info
                </Button>
              </Box>
            </InfoWindow>
          )}
        </GoogleMap>
      </Box>

      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/ReactViteProject/work")}
        >
          Regresar a los proyectos
        </Button>
      </Box>
    </Container>
  ) : (
    <div>Cargando mapa...</div>
  );
}

export default Mapa;
