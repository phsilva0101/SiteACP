import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section
      id="about"
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
          Quem Somos
        </h2>
        <Row>
          <Col md={6}>
            <p>
              A <strong>ACP Serviços</strong> é uma empreiteira especializada em
              construção, reformas, e serviços de manutenção residencial e
              comercial. Oferecemos soluções completas e personalizadas para
              tornar seu projeto uma realidade. Nossa equipe é composta por
              profissionais experientes e comprometidos com a qualidade e os
              prazos.
            </p>
          </Col>
          <Col md={6}>
            <p>
              Desde o planejamento arquitetônico até o acabamento final,
              garantimos excelência em cada etapa do projeto. Também atendemos
              pequenas necessidades do dia a dia com nosso serviço de{' '}
              <strong>Marido de Aluguel</strong>, ideal para reparos rápidos e
              manutenção preventiva. Trabalhamos com ética, transparência e
              preços justos.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mt-4">
            <ul
              style={{ color: 'var(--primary-blue)', listStyle: 'disc inside' }}
            >
              <li>Construção de casas e prédios comerciais</li>
              <li>Reformas residenciais e corporativas</li>
              <li>Marido de aluguel: elétrica, hidráulica e reparos gerais</li>
              <li>Consultoria e gerenciamento de obras</li>
              <li>Projetos arquitetônicos e acompanhamento técnico</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
