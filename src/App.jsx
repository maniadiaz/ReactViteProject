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
            <Route path="/ReactViteProject/" element={<Home />} />
            <Route path="/ReactViteProject/bout" element={<About />} />
            <Route path="/ReactViteProject/contact" element={<Contact />} />
            <Route path="/ReactViteProject/work" element={<Work />} />
            <Route path="/ReactViteProject/mapa" element={<Mapa />} />
            <Route path="/ReactViteProject/mapaRuta" element={<MapaRuta />} />
            <Route path="/ReactViteProject/mapaConClustering" element={<MapaConClustering />} />
            <Route path="/ReactViteProject/MapDrawing" element={<MapDrawing />} />
            <Route path="/ReactViteProject/MapRuta" element={<MapRuta />} />
          </Routes>
        </Box>
    </Container>
  )
}

export default App
