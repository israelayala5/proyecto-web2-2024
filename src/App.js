import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Creditos from './pages/Creditos';

import Footer from './components/Footer'; 
function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top navbar-custom-color shadow'>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
               <p>PICO MAGICO</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link as={Link} to='/' className='nav-item text-uppercase'>Home</Nav.Link>
              <Nav.Link as={Link} to='/menu' className='nav-item text-uppercase'>Menu</Nav.Link>
              <Nav.Link as={Link} to='/about' className='nav-item text-uppercase'>Nosotros</Nav.Link>
              <Nav.Link as={Link} to='/contact' className='nav-item text-uppercase'>Contactos</Nav.Link>
              <Nav.Link as={Link} to='/creditos' className='nav-item text-uppercase'>Creditos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/creditos' element={<Creditos />} />
      </Routes>
        <Footer/>
    </div>

    
  );
}

export default App;