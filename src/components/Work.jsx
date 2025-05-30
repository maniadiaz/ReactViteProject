import { Box, Container, Card, CardContent, CardActions, Typography, Button } from "@mui/material";

function Work() {
    return (
        <Container maxWidth="lg">
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
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/mapa"}>
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
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/mapaRuta"}>
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
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/mapaConClustering"}>
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
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/MapDrawing"}>
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
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/MapRuta"}>
                            Ir a la actividad
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    );
}

export default Work;
