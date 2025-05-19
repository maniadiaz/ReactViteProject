import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container, Button, Box} from "@mui/material";

function ApiFetchRequest() {
    const navigate = useNavigate(); 
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(data => setUsuarios(data))
        .catch((error) => console.error('Error fetching data:', error));
    },[]);

    return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Box>
        <Typography variant="h3" gutterBottom>
          Prueba de API Fetch
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Usuario</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>Teléfono</TableCell>
                <TableCell>Ciudad</TableCell>
                <TableCell>Compañía</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuarios.map((usuario) => (
                <TableRow key={usuario.id}>
                  <TableCell>{usuario.name}</TableCell>
                  <TableCell>{usuario.username}</TableCell>
                  <TableCell>{usuario.email}</TableCell>
                  <TableCell>{usuario.phone}</TableCell>
                  <TableCell>{usuario.address?.city}</TableCell>
                  <TableCell>{usuario.company?.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box mt={2} textAlign="center">
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

export default ApiFetchRequest;