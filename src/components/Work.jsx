import { Box, Container, Card, CardContent, CardActions, Typography, Button } from "@mui/material";

function Work() {
    return (
        <Container maxWidth="lg">
            <Box mt={5} display="flex" justifyContent="flex-end" gap={2} flexWrap="wrap">
                <Card sx={{ width: 300, m: 1 }} elevation={3}>
                    <CardContent>
                        <Typography variant="h6">
                            Actividad 01 - Introduccion a Github
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Actividad de instalar Gitbash y configurar GitHub, para poder crear un repositorio y subir archivos.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/actividad01"} disabled>
                            Ir a la actividad 
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: 300, m: 1 }} elevation={3}>
                    <CardContent>
                        <Typography variant="h6">
                            Actividad 02 - Conectar el Repositorio Local con GitHub
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Actividad de como conectar el repositorio local con el repositorio remoto, para poder subir archivos.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/actividad2"} disabled>
                            Ir a la actividad
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: 300, m: 1 }} elevation={3}>
                    <CardContent>
                        <Typography variant="h6">
                            Actividad 03 - Crear una Rama y Hacer un Pull Request en GitHub
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Actividad de como crear una rama en GitHub y hacer un pull request, para poder hacer cambios en el repositorio.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/actividad3"} disabled>
                            Ir a la actividad
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: 300, m: 1 }} elevation={3}>
                    <CardContent>
                        <Typography variant="h6">
                            Actividad 04 - Introduccion a React
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Actividad de como instalar React y crear una aplicacion basica, para poder entender como funciona React.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/actividad04"}>
                            Ir a la actividad
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: 300, m: 1 }} elevation={3}>
                    <CardContent>
                        <Typography variant="h6">
                            Actividad 05 - Crear un Repositorio y Desarrollo con Vite
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Actividad de como crear un repositorio en GitHub y como utilizar Vite para crear una aplicación de React.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/actividad05"}>
                            Ir a la actividad
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: 300, m: 1 }} elevation={3}>
                    <CardContent>
                        <Typography variant="h6">
                            Actividad 06 - useEffect en React
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Actividad de como utilizar el useEffect de react, para mostrar una alerta cuando llegue a 10 click
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/eventoBoton"}>
                            Ir a la actividad
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: 300, m: 1 }} elevation={3}>
                    <CardContent>
                        <Typography variant="h6">
                            Actividad 07 - Tabla React con Material UI
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Actividad de como utilizar el componente Table de Material UI, para poder mostrar una tabla con datos.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/tableReact"}>
                            Ir a la actividad
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: 300, m: 1 }} elevation={3}>
                    <CardContent>
                        <Typography variant="h6">
                            Actividad 08 - Uso de Context
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Actividad de como utilizar el contexto de react, para poder compartir datos entre componentes sin necesidad de pasar props.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/usoContext"}>
                            Ir a la actividad
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: 300, m: 1 }} elevation={3}>
                    <CardContent>
                        <Typography variant="h6">
                            Actividad 09 - API Fetch
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Actividad de como utilizar el fetch de react, para poder obtener datos de una API e imprimirlos en una tabla.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/apiFetch"}>
                            Ir a la actividad
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: 300, m: 1 }} elevation={3}>
                    <CardContent>
                        <Typography variant="h6">
                            Actividad 10 - Router y Route
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Actividad de como utilizar el router y route de react-router-dom, para poder navegar entre diferentes componentes.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = "/routerRoute"}>
                            Ir a la actividad
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: 300, m: 1 }} elevation={3}>
                    <CardContent>
                        <Typography variant="h6">
                            Actividad 11 - Mapa con Marcadores
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
                            Actividad 12 - Mapa con Ruta
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
                            Actividad 13 - Mapa Marker Con Clustering
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
                            Actividad 14 - Mapa Drawing
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
                
            </Box>
        </Container>
    );
}

export default Work;
