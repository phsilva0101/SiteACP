import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-5">
      <Container fluid>
        <h2 className="text-center mb-4">Quem Somos</h2>
        <Row>
          <Col md={6}>
            <p>
              Somos uma empresa comprometida com a qualidade e inovação,
              transformando ideias em obras de excelência.
            </p>
          </Col>
          <Col md={6}>
            <p>
              Nossa missão é garantir a satisfação dos nossos clientes por meio
              de projetos bem executados e dentro do prazo.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
