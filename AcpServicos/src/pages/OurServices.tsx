import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  {
    icon: '🏠',
    title: 'Projeto Arquitetônico',
    description: 'Criamos projetos personalizados para sua casa.',
  },
  {
    icon: '🔨',
    title: 'Reformas',
    description: 'Transformamos seu espaço com qualidade e eficiência.',
  },
  {
    icon: '🏗️',
    title: 'Construção',
    description: 'Realizamos obras completas do início ao fim.',
  },
  {
    icon: '📐',
    title: 'Consultoria',
    description: 'Orientação técnica para seus projetos.',
  },
];

function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <Container fluid>
        <h2
          className="text-center mb-4"
          style={{ color: 'var(--primary-orange)' }}
        >
          O que fazemos
        </h2>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={3} className="mb-4">
              <Card
                className="h-100 text-center"
                style={{
                  backgroundColor: 'var(--background-black)',
                  color: 'var(--text-white)',
                  border: `1px solid var(--accent-yellow)`,
                }}
              >
                <Card.Body>
                  <div
                    className="service-icon"
                    style={{ color: 'var(--primary-blue)', fontSize: '40px' }}
                  >
                    {service.icon}
                  </div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
