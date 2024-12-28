import { Container, Row, Col, Button } from 'react-bootstrap';

const projectImages = [
  './images/imagem1.jpeg',
  './images/imagem2.jpeg',
  './images/imagem3.jpeg',
  './images/imagem4.jpeg',
  './images/imagem5.jpeg',
  './images/imagem6.jpeg',
];

function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container fluid>
        <h2 className="text-center mb-4">Nossas Obras</h2>
        <Row>
          {projectImages.slice(0, 6).map((image, index) => (
            <Col key={index} md={4} className="mb-4">
              <img
                src={image}
                alt={`Projeto ${index + 1}`}
                className="img-fluid rounded"
                style={{ height: '500px', objectFit: 'cover', width: '100%' }}
              />
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <Button href="/projects" variant="primary">
            Ver mais obras
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
