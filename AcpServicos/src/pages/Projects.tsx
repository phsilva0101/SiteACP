import { Container, Row, Col, Button } from 'react-bootstrap';

const projectImages = [
  {
    src: './images/bancada-concreto-armado.jpeg',
    alt: 'Construção de bancada em concreto armado com acabamento de alto padrão para áreas residenciais.',
  },
  {
    src: './images/reforma-banheiro-e-revestimento.jpeg',
    alt: 'Reforma completa de banheiro com troca de revestimentos e design moderno.',
  },
  {
    src: './images/reforma-sala-conceito-aberto.jpeg',
    alt: 'Reforma de sala com conceito aberto, integrando espaços de forma funcional e elegante.',
  },
  {
    src: './images/projeto-arquitetonico-cozinha.jpeg',
    alt: 'Projeto arquitetônico de cozinha planejada com soluções práticas e estéticas.',
  },
  {
    src: './images/armario-feito-em-concreto-armado.jpeg',
    alt: 'Construção de armário em concreto armado, ideal para espaços industriais e modernos.',
  },
  {
    src: './images/projeto-e-implementacao-banheiro.jpeg',
    alt: 'Projeto e execução de banheiro com design contemporâneo e materiais de alta qualidade.',
  },
  {
    src: './images/banca-marmorizada-concreto.jpeg',
    alt: 'Bancada marmorizada em concreto com acabamento sofisticado para ambientes internos.',
  },
  {
    src: './images/mesinha-concreto-armado.jpeg',
    alt: 'Construção de mesinha em concreto armado, unindo funcionalidade e estilo rústico.',
  },
  {
    src: './images/balcao-concreto.jpeg',
    alt: 'Balcão em concreto armado com design moderno e acabamento resistente.',
  },
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
        <h1
          className="text-center mb-4"
          style={{ color: 'var(--primary-orange)' }}
        >
          Nossas Obras e Projetos
        </h1>
        <p
          className="text-center mb-5"
          style={{ color: 'var(--text-white)', fontSize: '1.2rem' }}
        >
          Conheça nossos projetos concluídos e veja como transformamos ideias em
          realidade. Somos especialistas em <strong>construção civil</strong>,
          <strong> reformas residenciais</strong> e <strong>comerciais</strong>.
        </p>
        <Row>
          {projectImages.map((image, index) => (
            <Col key={index} md={4} className="mb-4">
              <div
                style={{
                  border: `2px solid var(--accent-yellow)`,
                  padding: '5px',
                  borderRadius: '10px',
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="img-fluid rounded"
                  style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                />
              </div>
              <p
                className="mt-2 text-center"
                style={{ color: 'var(--primary-orange)', fontSize: '1rem' }}
              >
                {image.alt}
              </p>
            </Col>
          ))}
        </Row>

        {/* SEO Textual Adicionado Aqui */}
        <div className="mt-5 text-center">
          <h3 style={{ color: 'var(--primary-orange)' }}>
            Por que escolher a ACP Serviços?
          </h3>
          <ul
            style={{
              color: 'var(--text-white)',
              textAlign: 'left',
              margin: '0 auto',
              maxWidth: '800px',
              listStyle: 'disc inside',
            }}
          >
            <li>
              Mais de 10 anos de experiência no mercado de{' '}
              <strong>construção</strong> e <strong>reformas</strong>.
            </li>
            <li>
              Equipe de profissionais altamente qualificados e comprometidos.
            </li>
            <li>
              Atendimento personalizado para cada cliente, desde pequenos
              reparos até grandes projetos.
            </li>
            <li>
              Garantia de qualidade em todas as etapas, do planejamento ao
              acabamento final.
            </li>
            <li>
              Suporte técnico e consultoria especializada em construção civil.
            </li>
          </ul>
        </div>

        {/* Botão para Ver Mais Obras */}
        <div className="text-center mt-4">
          <Button
            href="/projects"
            style={{
              backgroundColor: 'var(--primary-orange)',
              border: 'none',
              color: 'var(--text-white)',
              fontSize: '1rem',
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
