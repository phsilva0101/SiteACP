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
    <section id="process" className="py-5 bg-light">
      <Container fluid>
        <h2 className="text-center mb-4">Como Trabalhamos</h2>
        <Row className="timeline">
          {processes.map((process, index) => (
            <Col key={index} md={4} className="text-center mb-4">
              <div className="process-step">
                <span className="process-icon">{process.icon}</span>
                <h4>{process.step}</h4>
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
