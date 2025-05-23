import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <AppBar >
      <Toolbar>
        <Typography variant="h6" >
          Pagina de Geografia
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Sobre Nosotros
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contacto
        </Button>
        <Button color="inherit" component={Link} to="/work">
          Trabajo
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
