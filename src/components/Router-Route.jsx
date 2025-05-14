import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


function RouterRoute(){
const navigate = useNavigate(); 
    return (
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
            <Box>
                <Typography variant="h3" gutterBottom>
                    Prueba de Router - Route
                </Typography>
                <Button mt={2}
                    variant="contained" 
                    color="primary"
                    onClick={() => navigate("/work")}
                >
                    Regresar a los proyectos
                </Button>
            </Box>

        </Container>
    )
}

export default RouterRoute;