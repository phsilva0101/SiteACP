import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container fluid>
        <h2 className="text-center mb-4">Entre em Contato</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="tel" placeholder="Digite seu telefone" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Digite sua mensagem"
                />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" variant="primary">
                  Enviar
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
