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
          boxShadow: 3,
          borderRadius: 4,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
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
      <Box>
        <Button mt={2}
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
}

export default Mapa;
