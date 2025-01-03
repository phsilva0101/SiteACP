import { Container, Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Home from './pages/Home';
import About from './pages/About';
import OurServices from './pages/OurServices';
import Process from './pages/Process';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import DicasReforma from './pages/Posts/DicasReforma';
import WhatsAppIcon from './components/WhatsAppIcon';

function App() {
  return (
    <Router>
      {/* Navbar fora do Routes */}
      <Navbar
        style={{ backgroundColor: 'var(--primary-orange)' }}
        expand="lg"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand>
            {/* Link para a seção inicial */}
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              <img
                src="/images/logo.jpeg"
                alt="ACP Serviços"
                style={{ width: '150px', height: '100px' }}
              />
            </ScrollLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Links para as seções (Home Page) */}
              <Nav.Item>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  Home
                </ScrollLink>
              </Nav.Item>
              <Nav.Item>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  Sobre Nós
                </ScrollLink>
              </Nav.Item>
              <Nav.Item>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  Serviços
                </ScrollLink>
              </Nav.Item>
              <Nav.Item>
                <ScrollLink
                  to="process"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  Processos
                </ScrollLink>
              </Nav.Item>
              <Nav.Item>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  Obras
                </ScrollLink>
              </Nav.Item>
              <Nav.Item>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  Contato
                </ScrollLink>
              </Nav.Item>

              {/* Link para o Blog (navegação para outra página) */}
              <Nav.Item>
                <NavLink
                  to="/blog"
                  className="nav-link"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Blog
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Rotas */}
      <Routes>
        {/* Página principal com rolagem suave */}
        <Route
          path="/"
          element={
            <main>
              <Home />
              <About />
              <OurServices />
              <Process />
              <Projects />
              <Contact />
            </main>
          }
        />
        {/* Blog e suas páginas */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/dicas-reformas" element={<DicasReforma />} />
      </Routes>

      {/* Ícone do WhatsApp */}
      <WhatsAppIcon />
    </Router>
  );
}

export default App;
