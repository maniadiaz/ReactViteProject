import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <AppBar >
      <Toolbar>
        <Typography variant="h6" >
          Pagina de Geografia
        </Typography>
        <Button color="inherit" component={Link} to="/ReactViteProject/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/ReactViteProject/about">
          Sobre Nosotros
        </Button>
        <Button color="inherit" component={Link} to="/ReactViteProject/contact">
          Contacto
        </Button>
        <Button color="inherit" component={Link} to="/ReactViteProject/work">
          Trabajo
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
