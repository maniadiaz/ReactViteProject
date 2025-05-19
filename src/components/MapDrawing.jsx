import { useState, useRef, useEffect } from 'react';
import { GoogleMap, DrawingManager, useJsApiLoader } from '@react-google-maps/api';
import { Box, Container, Button } from "@mui/material";
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

const libraries = ['drawing'];

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
      <Box>
        <h1>Mapa con Herramientas de Dibujo</h1>
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
    <p>Cargando mapa...</p>
  );
};

export default MapDrawing;
