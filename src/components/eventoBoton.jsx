import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";

function EventoBoton() {
    const navigate = useNavigate();
    const [count, setCount] = useState(0)

    useEffect(() =>{
        if(count > 10){
            alert("El contador es mayor a 10");
            setCount(10);
        }
        
    },[count])

    return(
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 5, mb: 5 }}>
            <Box>
                <Typography variant="h4">Contador</Typography>
                <Typography variant="h6">{count}</Typography>
                <Button mt={2} variant="contained" onClick={() => setCount(count + 1)}>Incrementar</Button>
                <Button mt={2} variant="contained" onClick={() => setCount(count - 1)}>Decrementar</Button>
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
    )
        
}

export default EventoBoton;