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
import MapRuta from './components/MapRuta'
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
            <Route path="/MapRuta" element={<MapRuta />} />
          </Routes>
        </Box>
    </Container>
  )
}

export default App
