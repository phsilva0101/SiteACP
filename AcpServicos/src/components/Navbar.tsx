import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const sections = [
  { id: 'home', name: 'Início' },
  { id: 'about', name: 'Sobre Nós' },
  { id: 'services', name: 'Serviços' },
  { id: 'process', name: 'Processos' },
  { id: 'projects', name: 'Obras' },
  { id: 'contact', name: 'Contato' },
];

const NavbarComponent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isBlogPage = location.pathname.startsWith('/blog');

  const handleNavClick = (section: string) => {
    if (isBlogPage) {
      navigate('/'); // Volta para a página principal
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <Navbar
      style={{ backgroundColor: 'var(--primary-orange)' }}
      expand="lg"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand>
          <img
            src="/images/logo.jpeg"
            alt="ACP Serviços"
            style={{ width: '150px', height: '100px' }}
            onClick={() => handleNavClick('home')}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {sections.map(({ id, name }) => (
              <Nav.Item key={id}>
                {isBlogPage ? (
                  <span
                    onClick={() => handleNavClick(id)}
                    className="nav-link"
                    style={{ cursor: 'pointer', color: 'inherit' }}
                  >
                    {name}
                  </span>
                ) : (
                  <ScrollLink
                    to={id}
                    smooth
                    duration={500}
                    className="nav-link"
                    style={{ cursor: 'pointer', color: 'inherit' }}
                  >
                    {name}
                  </ScrollLink>
                )}
              </Nav.Item>
            ))}
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
  );
};

export default NavbarComponent;
