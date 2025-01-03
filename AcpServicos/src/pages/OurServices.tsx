import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  {
    icon: '🏠',
    title: 'Projeto Arquitetônico',
    description: 'Criamos projetos personalizados para sua casa.',
  },
  {
    icon: '🏠',
    title: 'Construção Civil',
    description:
      'Realizamos construções completas, desde o planejamento até a entrega das chaves, com foco em qualidade e segurança.',
  },
  {
    icon: '🔨',
    title: 'Reformas',
    description:
      'Transformamos ambientes residenciais e comerciais, seja para modernização ou reparos essenciais.',
  },
  {
    icon: '🔧',
    title: 'Marido de Aluguel',
    description:
      'Serviços rápidos de manutenção, como elétrica, hidráulica, pintura e pequenos reparos, com preços acessíveis.',
  },
  {
    icon: '🪚',
    title: 'Bancadas em concreto armado',
    description:
      'Fabricamos e instalamos bancadas em concreto armado para cozinhas, banheiros e áreas de serviço.',
  },
  {
    icon: '📐',
    title: 'Consultoria Técnica',
    description:
      'Orientamos e acompanhamos projetos de construção e reformas para garantir eficiência e economia.',
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
            <Col key={index} md={4} className="mb-4">
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
                  <Card.Title style={{
                    color: 'var(--primary-orange)',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}>{service.title}</Card.Title>
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
