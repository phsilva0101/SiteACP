import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/OurServices';
import Process from './pages/Process';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import WhatsAppIcon from './components/WhatsAppIcon';

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./images/logo.jpeg" // Caminho da logo
              alt="ACP Serviços"
              style={{ width: '80px', height: 'auto' }} // Ajuste o tamanho conforme necessário
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">Sobre Nós</Nav.Link>
              <Nav.Link href="#services">Serviços</Nav.Link>
              <Nav.Link href="#process">Processos</Nav.Link>
              <Nav.Link href="#projects">Obras</Nav.Link>
              <Nav.Link href="#contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <Home />
        <About />
        <Services />
        <Process />
        <Projects />
        <Contact />
      </main>

      <WhatsAppIcon />
    </>
  );
}

export default App;
