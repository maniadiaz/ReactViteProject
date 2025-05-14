import {Routes, Route} from 'react-router-dom'
import { Box, Container} from "@mui/material";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'
import Mapa from './components/Mapa-google'
import MapaRuta from './components/Mapa-ruta'
import MapaConClustering from './components/MarkerConClustering'
import MapDrawing from './components/MapDrawing'
import RouterRoute from './components/Router-Route'
import ApiFechRequest from './components/ApiFetchRequest'
import UsoContext from './components/UsoContext'
import TableReact from './components/TableReact'
import EventoBoton from './components/eventoBoton'
import Actividad05 from './components/actividad05';
import Actividad04 from './components/Actividad04';
import './App.css'

function App() {

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: 5 }}>
        <Box>
          <Navbar/>
        </Box>
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/mapa" element={<Mapa />} />
            <Route path="/mapaRuta" element={<MapaRuta />} />
            <Route path="/mapaConClustering" element={<MapaConClustering />} />
            <Route path="/MapDrawing" element={<MapDrawing />} />
            <Route path="/routerRoute" element={<RouterRoute />} />
            <Route path="/apiFetch" element={<ApiFechRequest />} />
            <Route path="/usoContext" element={<UsoContext />} />
            <Route path="/tableReact" element={<TableReact />} />
            <Route path="/eventoBoton" element={<EventoBoton />} />
            <Route path="/actividad05" element={<Actividad05 />} />
            <Route path="/actividad04" element={<Actividad04 />} />
          </Routes>
        </Box>
    </Container>
  )
}

export default App
