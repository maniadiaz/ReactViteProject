import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container, Button, Box} from "@mui/material";

const listaNombre = [{
    nombre : "Erick",
    apellido : "Sanchez",
    edad: 28
},{
    nombre : "Alexis",
    apellido : "Diaz",
    edad: 21
},{
    nombre : "Katherine",
    apellido : "Guardado",
    edad: 21
},{
    nombre : "Jesus",
    apellido : "Rocha",
    edad: 21
},{
    nombre : "Jorge",
    apellido : "Medina",
    edad: 21
},{
    nombre : "Jaime",
    apellido : "Benitez",
    edad: 21
}]

function TablaReact(){
    const navigate = useNavigate();
    return(
       <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
        <Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Edad</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listaNombre.map((usuario, index) => (
                            <TableRow key={index}>
                                <TableCell>{index}</TableCell>
                                <TableCell>{usuario.nombre}</TableCell>
                                <TableCell>{usuario.apellido}</TableCell>
                                <TableCell>{usuario.edad}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
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
    )
}

export default TablaReact;