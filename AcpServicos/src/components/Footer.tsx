import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--background-black)',
        color: 'var(--text-white)',
        padding: '20px 0',
        marginTop: 'auto',
        textAlign: 'center',
      }}
    >
      <Container>
        <Row className="justify-content-center mb-3">
          <Col xs="auto">
            <a
              href="https://www.facebook.com/share/15j1ZMcbDo/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--primary-blue)',
                margin: '0 10px',
                fontSize: '1.5rem',
              }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/acp_servicos?igsh=MXZjYzIxN201Z3JnZw=="
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--primary-orange)',
                margin: '0 10px',
                fontSize: '1.5rem',
              }}
            >
              <FaInstagram />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ margin: 0 }}>
              &copy; {new Date().getFullYear()} - Todos os direitos reservados.
            </p>
            <p style={{ margin: 0 }}>Site desenvolvido por PhDev</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
