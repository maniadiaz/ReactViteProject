import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";


const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState("Alexis Diaz");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

function UserProfile() {
    const navigate = useNavigate();
    const user = "Alexis Diaz"; 

    return (
        <Container maxWidth={false}>
            <Box
                sx={{
                    width: "100%",
                    p: 6,
                    boxShadow: 3,
                    borderRadius: 4,
                    backgroundColor: "white",
                }}
            >
                <Typography variant="h4" align="center" color="black" gutterBottom>
                    Perfil de Usuario
                </Typography>
                <Typography variant="h6" align="center" color="black">
                    Nombre de usuario: {user}
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
    );
}

function UsoContext() {
    return (
        <UserProvider>
            <UserProfile />
        </UserProvider>
    );
}

export default UsoContext;
