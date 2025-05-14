import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";


function Actividad05() {
    const navigate = useNavigate();
    return (
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 5, mb: 5 }}>
            <Typography variant="h6">
                Actividad 05
            </Typography>
            <Typography variant="body2" color="white" mt={1}>
                Esta es una actividad que esta en GitHub : https://github.com/maniadiaz/reactActivity
            </Typography>
            <Typography variant="h6">
                Proyecto en React con Vite
            </Typography>
            <Typography variant="body2" color="white" mt={1}>
                Creado con React y Vite
            </Typography>
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
    )
}

export default Actividad05;