import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <section
      id="home"
      className="home-section text-center d-flex align-items-center justify-content-center"
      style={{
        background:
          'url(/images/reforma-sala-conceito-aberto.jpeg) center/cover no-repeat',
        color: 'var(--text-white)',
        height: '100vh',
        position: 'relative',
      }}
    >
      {/* Overlay para melhorar contraste */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      ></div>
      <Container style={{ zIndex: 2 }}>
        <h1 style={{ color: 'var(--primary-orange)', fontSize: '2.5rem' }}>
          Transformamos sonhos em realidade
        </h1>
        <p
          style={{
            color: 'var(--primary-blue)',
            fontSize: '1.2rem',
            marginTop: '1rem',
          }}
        >
          Construção civil, reformas e serviços de manutenção com excelência e
          qualidade.
        </p>
        <Button
          href="#contact"
          style={{
            backgroundColor: 'var(--primary-orange)',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1rem',
            marginTop: '1.5rem',
          }}
        >
          Solicite um Orçamento
        </Button>
        <p
          style={{
            color: 'var(--text-white)',
            fontSize: '0.9rem',
            marginTop: '2rem',
            maxWidth: '600px',
            margin: '2rem auto 0',
          }}
        >
          Na <strong>ACP Serviços</strong>, oferecemos soluções completas para
          construção, reforma e manutenção. Atendemos desde pequenos reparos até
          grandes projetos residenciais e comerciais.
        </p>
      </Container>
    </section>
  );
}

export default Home;
