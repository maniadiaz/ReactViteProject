import React, { useState, useRef, useEffect } from "react";
import {GoogleMap,useLoadScript,DirectionsRenderer,Autocomplete} from "@react-google-maps/api";
import {Box,Typography,Container,Button,ButtonGroup,TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "600px"
};

const center = {
  lat: 23.218,
  lng: -106.423
};

const libraries = ["places"];

const MapRuta = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries
  });
  const navigate = useNavigate();

  const [directions, setDirections] = useState(null);
  const [travelMode, setTravelMode] = useState("DRIVING");

  const originRef = useRef(null);
  const destinationRef = useRef(null);

  const [originInput, setOriginInput] = useState("Facultad de Informática, UAS");
  const [destinationInput, setDestinationInput] = useState("Centro de Mazatlán");

  useEffect(() => {
    if (isLoaded) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: { lat: 23.2314459, lng: -106.4265313 },
          destination: { lat: 23.2051184, lng: -106.4199755 },
          travelMode: window.google.maps.TravelMode[travelMode]
        },
        (result, status) => {
          if (status === "OK") {
            setDirections(result);
          } else {
            console.error("Error al calcular ruta por defecto:", result);
          }
        }
      );
    }
  }, [isLoaded, travelMode]);

  const calcularRuta = () => {
    if (!originRef.current || !destinationRef.current) return;

    const origen = originRef.current.getPlace();
    const destino = destinationRef.current.getPlace();

    if (!origen || !destino) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origen.formatted_address,
        destination: destino.formatted_address,
        travelMode: window.google.maps.TravelMode[travelMode]
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Error al calcular la ruta:", result);
        }
      }
    );
  };

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          width: "100%",
          p: 6,
          mb: 4,
          boxShadow: 3,
          borderRadius: 4,
          backgroundColor: "#f5f5f5"
        }}
      >
        <Typography color="black" variant="h4" gutterBottom>
          Actividad 3
        </Typography>
        <Typography color="black" variant="h6" gutterBottom>
          Cálculo de Ruta desde la Facultad de Informática al Centro de Mazatlán
        </Typography>
        <Typography color="black" paragraph>
          En esta actividad se implementa la funcionalidad de direcciones utilizando la API de Google Maps. Permite al usuario:
        </Typography>
        <Typography color="black" component="div">
          <ul>
            <li>Seleccionar un punto de origen y destino mediante autocompletado.</li>
            <li>Calcular rutas utilizando diferentes modos de transporte: automóvil, caminata y bicicleta.</li>
            <li>Visualizar el recorrido en el mapa mediante el componente <code>DirectionsRenderer</code>.</li>
          </ul>
        </Typography>
        <Typography color="black" variant="subtitle1" gutterBottom>
          Resultado:
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          p: 4,
          mb: 4,
          boxShadow: 3,
          borderRadius: 4,
          backgroundColor: "white"
        }}
      >
        <Typography color="black" variant="h4" align="center" gutterBottom>
          Ruta desde la Facultad de Informática al Centro
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
          <Autocomplete onLoad={(ref) => (originRef.current = ref)}>
            <TextField
              label="Origen"
              fullWidth
              value={originInput}
              onChange={(e) => setOriginInput(e.target.value)}
            />
          </Autocomplete>
          <Autocomplete onLoad={(ref) => (destinationRef.current = ref)}>
            <TextField
              label="Destino"
              fullWidth
              value={destinationInput}
              onChange={(e) => setDestinationInput(e.target.value)}
            />
          </Autocomplete>
          <Button variant="contained" onClick={calcularRuta}>
            Calcular Ruta
          </Button>
        </Box>

        <ButtonGroup variant="outlined" sx={{ mb: 2 }}>
          <Button
            onClick={() => setTravelMode("DRIVING")}
            variant={travelMode === "DRIVING" ? "contained" : "outlined"}
          >
            Coche
          </Button>
          <Button
            onClick={() => setTravelMode("WALKING")}
            variant={travelMode === "WALKING" ? "contained" : "outlined"}
          >
            Caminando
          </Button>
          <Button
            onClick={() => setTravelMode("BICYCLING")}
            variant={travelMode === "BICYCLING" ? "contained" : "outlined"}
          >
            Bicicleta
          </Button>
        </ButtonGroup>

        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          {directions && <DirectionsRenderer directions={directions} />}
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
  );
};

export default MapRuta;
