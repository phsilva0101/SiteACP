import { Container, Row, Col } from 'react-bootstrap';

const processes = [
  {
    step: 'Arquitetura',
    description:
      'Criamos projetos personalizados com foco em funcionalidade e estética.',
    icon: '📐',
  },
  {
    step: 'Engenharia',
    description:
      'Planejamos tecnicamente cada detalhe para garantir segurança e eficiência.',
    icon: '⚙️',
  },
  {
    step: 'Construção',
    description: 'Executamos obras com qualidade e dentro do prazo combinado.',
    icon: '🏗️',
  },
];

function Process() {
  return (
    <section
      id="process"
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
          Como Trabalhamos
        </h2>
        <Row className="timeline">
          {processes.map((process, index) => (
            <Col key={index} md={4} className="text-center mb-4">
              <div
                className="process-step"
                style={{
                  border: `2px solid var(--accent-yellow)`,
                  padding: '20px',
                  borderRadius: '10px',
                }}
              >
                <span
                  className="process-icon"
                  style={{ fontSize: '40px', color: 'var(--primary-blue)' }}
                >
                  {process.icon}
                </span>
                <h4 style={{ color: 'var(--primary-orange)' }}>
                  {process.step}
                </h4>
                <p>{process.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Process;
