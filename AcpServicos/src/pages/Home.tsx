import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <section
      id="home"
      className="home-section text-center d-flex align-items-center justify-content-center"
    >
      <Container fluid>
        <h1>Transformamos sonhos em realidade</h1>
        <p>Sua casa, do jeito que você sempre imaginou!</p>
        <Button href="#services" variant="primary">
          Conheça nossos serviços
        </Button>
      </Container>
    </section>
  );
}

export default Home;
