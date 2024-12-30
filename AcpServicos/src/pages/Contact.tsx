import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: 'var(--background-black)' }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{ color: 'var(--primary-orange)' }}
        >
          Entre em Contato para fazer seu orçamento sem compromisso
        </h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label style={{ color: 'var(--text-white)' }}>
                  Nome
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome"
                  style={{
                    backgroundColor: 'var(--background-black)',
                    color: 'var(--text-white)',
                    border: '1px solid var(--accent-yellow)',
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label style={{ color: 'var(--text-white)' }}>
                  E-mail
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu e-mail"
                  style={{
                    backgroundColor: 'var(--background-black)',
                    color: 'var(--text-white)',
                    border: '1px solid var(--accent-yellow)',
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label style={{ color: 'var(--text-white)' }}>
                  Mensagem
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Digite sua mensagem"
                  style={{
                    backgroundColor: 'var(--background-black)',
                    color: 'var(--text-white)',
                    border: '1px solid var(--accent-yellow)',
                  }}
                />
              </Form.Group>
              <div className="text-center">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: 'var(--primary-orange)',
                    border: 'none',
                  }}
                >
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
