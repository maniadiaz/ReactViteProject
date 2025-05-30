import { Box, Container, Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Home(){
  const navigate = useNavigate(); 

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: 5 }}>
      {}
      <Typography variant="h3" gutterBottom>
        Utilización de Apis de Google Maps
      </Typography>

      {}
      <Typography variant="body1" sx={{ mb: 3 }}>
        Creado por Diaz Diaz Miguel Alexis.
      </Typography>

      {}
      <Box component="img" 
        src="https://i.pinimg.com/736x/39/97/eb/3997eb06057902de14a542b15ffc37e4.jpg" 
        alt="Bienvenida"
        sx={{ width: "100%", maxHeight: "200px", mb: 3, borderRadius: 2 }}
      />

      {}

      <Box mt={5} display="flex" justifyContent="flex-start" gap={2} flexWrap="wrap">

            <Card sx={{ width: 300, m: 1 }} elevation={3}>
                <CardContent>
                    <Typography variant="h6">
                        Actividad 1 - Mapa con Marcadores
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                        Actividad de generar un mapa con el uso de la API de Google Maps, en la cual se puede ver la ubicación de los marcadores.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/ReactViteProject/mapa"}>
                        Ir a la actividad
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{ width: 300, m: 1 }} elevation={3}>
                <CardContent>
                    <Typography variant="h6">
                        Actividad 2 - Mapa con Ruta
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                        Actividad de generar un mapa con el uso de la API de Google Maps, en la cual se puede ver la ruta entre dos puntos.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/ReactViteProject/mapaRuta"}>
                        Ir a la actividad
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{ width: 300, m: 1 }} elevation={3}>
                <CardContent>
                    <Typography variant="h6">
                        Actividad 3 - Mapa Marker Con Clustering
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                        Actividad de generar un mapa con el uso de la API de Google Maps, en la cual se puede ver la ubicación de los markers.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/ReactViteProject/mapaConClustering"}>
                        Ir a la actividad
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{ width: 300, m: 1 }} elevation={3}>
                <CardContent>
                    <Typography variant="h6">
                        Actividad 4 - Mapa Drawing
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                        Actividad de generar un mapa con el uso de la API de Google Maps, en la cual se puede dibujar sobre el mapa.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/ReactViteProject/MapDrawing"}>
                        Ir a la actividad
                    </Button>
                </CardActions>
            </Card>
            
            <Card sx={{ width: 300, m: 1 }} elevation={3}>
                <CardContent>
                    <Typography variant="h6">
                        Actividad 5 - Mapa Ruta
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                        Actividad de generar un mapa con el uso de la API de Google Maps, en la cual se puede ver la ruta entre dos puntos y volver a recalcular.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/ReactViteProject/MapRuta"}>
                        Ir a la actividad
                    </Button>
                </CardActions>
            </Card>
        </Box>
    </Container>
  );
}

export default Home;