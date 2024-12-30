import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <section
      id="home"
      className="home-section text-center d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: 'var(--background-black)',
        color: 'var(--text-white)',
        height: '100vh',
      }}
    >
      <Container>
        <h1 style={{ color: 'var(--primary-orange)' }}>
          Transformamos sonhos em realidade
        </h1>
        <p style={{ color: 'var(--primary-blue)' }}>
          Sua casa, do jeito que você sempre imaginou!
        </p>
        <Button
          href="#services"
          style={{ backgroundColor: 'var(--primary-orange)', border: 'none' }}
        >
          Conheça nossos serviços
        </Button>
      </Container>
    </section>
  );
}

export default Home;
