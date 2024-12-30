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
    <section
      id="projects"
      className="py-5"
      style={{
        backgroundColor: 'var(--background-black)',
        color: 'var(--text-white)',
      }}
    >
      <Container fluid>
        <h2
          className="text-center mb-4"
          style={{ color: 'var(--primary-orange)' }}
        >
          Nossas Obras
        </h2>
        <Row>
          {projectImages.slice(0, 6).map((image, index) => (
            <Col key={index} md={4} className="mb-4">
              <div
                style={{
                  border: `2px solid var(--accent-yellow)`,
                  padding: '5px',
                  borderRadius: '10px',
                }}
              >
                <img
                  src={image}
                  alt={`Projeto ${index + 1}`}
                  className="img-fluid rounded"
                  style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                />
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <Button
            href="/projects"
            style={{
              backgroundColor: 'var(--primary-orange)',
              border: 'none',
              color: 'var(--text-white)',
            }}
          >
            Ver mais obras
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
