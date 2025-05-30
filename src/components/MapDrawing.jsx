import { useState, useRef, useEffect } from 'react';
import { GoogleMap, DrawingManager, useJsApiLoader } from '@react-google-maps/api';
import { Box, Container, Button, Typography } from "@mui/material";
import { googleMapsLibraries } from "./googleMapsConfig";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 23.2314459,
  lng: -106.4265313
};

const MapDrawing = () => {
  const [controlPosition, setControlPosition] = useState(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const shapesRef = useRef([]);
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

  const handleMapLoad = () => {
    if (window.google) {
      setControlPosition(window.google.maps.ControlPosition.TOP_CENTER);
    }
  };

  const handlePolygonComplete = (polygon) => {
    const path = polygon.getPath().getArray().map(coord => ({
      lat: coord.lat(),
      lng: coord.lng()
    }));
    console.log('Polígono:', path);
    shapesRef.current.push(polygon);
  };

  const handleShapeComplete = (shape) => {
    shapesRef.current.push(shape);
  };

  const handleClearShapes = () => {
    shapesRef.current.forEach(shape => shape.setMap(null));
    shapesRef.current = [];
  };

  return shouldLoad ? (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Box sx={{ width: '100%', p: 6, mb: 4, boxShadow: 3, borderRadius: 4, backgroundColor: '#f5f5f5' }}>
        <Typography color='black' variant="h4" gutterBottom>
          Actividad 4
        </Typography>
        <Typography color='black' variant="h6" gutterBottom>
          Dibujo de polígonos y formas con Google Maps
        </Typography>
        <Typography color='black' paragraph>
          En esta actividad se implementa la herramienta de dibujo provista por la API de Google Maps mediante el componente <code>DrawingManager</code>. Esto permite a los usuarios crear formas como polígonos, rectángulos y líneas sobre el mapa de forma interactiva.
        </Typography>
        <Typography color='black' variant="subtitle1" gutterBottom>
          Pasos para implementar el dibujo:
        </Typography>
        <Typography color='black' component="div">
          <ul>
            <li>Cargar la API con la biblioteca <code>drawing</code>.</li>
            <li>Configurar la posición del control de dibujo.</li>
            <li>Activar las herramientas de polígonos, rectángulos y líneas.</li>
            <li>Manejar los eventos <code>onPolygonComplete</code>, <code>onRectangleComplete</code> y <code>onPolylineComplete</code>.</li>
            <li>Ofrecer la opción de eliminar todas las formas dibujadas.</li>
          </ul>
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Resultado:
        </Typography>
      </Box>

      <Box>
        <Typography variant="h4" gutterBottom>
          Mapa con Herramientas de Dibujo
        </Typography>
        <Button variant="contained" color="error" onClick={handleClearShapes} sx={{ mb: 2 }}>
          Eliminar todas las formas
        </Button>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onLoad={handleMapLoad}
        >
          {controlPosition && (
            <DrawingManager
              options={{
                drawingControl: true,
                drawingControlOptions: {
                  position: controlPosition,
                  drawingModes: ['polygon', 'rectangle', 'polyline']
                }
              }}
              onPolygonComplete={handlePolygonComplete}
              onRectangleComplete={handleShapeComplete}
              onPolylineComplete={handleShapeComplete}
            />
          )}
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

export default MapDrawing;
