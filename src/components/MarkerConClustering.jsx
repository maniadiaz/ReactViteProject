import React, { useEffect, useState } from 'react';
import { GoogleMap, MarkerF, MarkerClustererF, useJsApiLoader } from '@react-google-maps/api';
import { Box, Typography, Container, Button } from '@mui/material';
import { googleMapsLibraries } from './googleMapsConfig';
import { useNavigate } from "react-router-dom";

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 23.2494,
  lng: -106.4111
};

const libraries = ['places', 'geometry', 'drawing'];

const generateMarkers = () => {
  const markers = [];
  for (let i = 0; i < 100; i++) {
    markers.push({
      lat: center.lat + (Math.random() - 0.5) * 0.1,
      lng: center.lng + (Math.random() - 0.5) * 0.1,
    });
  }
  return markers;
};

const MapaConClustering = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const navigate = useNavigate();

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

  const markers = generateMarkers();

  return shouldLoad ? (
    <Container maxWidth={false}>
      <Box sx={{ width: '100%', p: 6, mb: 4, boxShadow: 3, borderRadius: 4, backgroundColor: '#f5f5f5' }}>
        <Typography color='black' variant="h4" gutterBottom>
          Actividad 3
        </Typography>
        <Typography color='black' variant="h6" gutterBottom>
          Agrupación de marcadores (Marker Clustering) con la API de Google Maps
        </Typography>
        <Typography color='black' paragraph>
          En esta actividad se implementa un sistema de agrupación de marcadores utilizando la funcionalidad de <code>MarkerClustererF</code> proporcionada por <code>@react-google-maps/api</code>. Esto permite mostrar múltiples puntos en el mapa sin saturarlo visualmente, agrupándolos dinámicamente según el nivel de zoom.
        </Typography>
        <Typography color='black' variant="subtitle1" gutterBottom>
          Pasos para implementar el clustering:
        </Typography>
        <Typography color='black' component="div">
          <ul>
            <li>Generar múltiples coordenadas aleatorias para simular ubicaciones.</li>
            <li>Cargar la API de Google Maps con las bibliotecas necesarias.</li>
            <li>Renderizar los marcadores dentro de <code>MarkerClustererF</code>.</li>
            <li>Visualizar cómo los puntos se agrupan automáticamente al alejar el mapa.</li>
          </ul>
        </Typography>
        <Typography color='black' variant="subtitle1" gutterBottom>
          Resultado:
        </Typography>
      </Box>

      <Box sx={{ width: '100%', p: 6, boxShadow: 3, borderRadius: 4, backgroundColor: 'white' }}>
        <Typography color='black' variant="h4" align="center" gutterBottom>
          Mapa con agrupación de marcadores
        </Typography>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          <MarkerClustererF>
            {(clusterer) =>
              markers.map((marker, index) => (
                <MarkerF key={index} position={marker} clusterer={clusterer} />
              ))
            }
          </MarkerClustererF>
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
    <p>Cargando mapa...</p>
  );
};

export default MapaConClustering;
