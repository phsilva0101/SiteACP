import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Para navegação

const blogPosts = [
  {
    id: 1,
    title: '5 Dicas Essenciais para Reformas de Sucesso',
    excerpt:
      'Reformar sua casa pode ser desafiador. Confira essas 5 dicas para garantir que tudo saia conforme o planejado.',
    link: '/blog/dicas-reformas',
  },
  {
    id: 2,
    title: 'Como Economizar na Construção da Sua Casa',
    excerpt:
      'A construção de uma casa é um grande investimento. Veja como economizar sem abrir mão da qualidade.',
    link: '/blog/economizar-construcao',
  },
  {
    id: 3,
    title: 'Manutenção Residencial: Quando Chamar um Marido de Aluguel',
    excerpt:
      'Saiba quando é a hora certa de chamar um profissional para resolver pequenos problemas em casa.',
    link: '/blog/manutencao-marido-aluguel',
  },
];

function Blog() {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <section
      id="blog"
      className="py-5"
      style={{
        backgroundColor: 'var(--background-black)',
        color: 'var(--text-white)',
        position: 'relative',
      }}
    >
      <Container>
        <h1
          className="text-center mb-5"
          style={{ color: 'var(--primary-orange)' }}
        >
          Blog da ACP Serviços
        </h1>
        <Row>
          {blogPosts.map((post) => (
            <Col key={post.id} md={4} className="mb-4">
              <div
                style={{
                  border: '2px solid var(--accent-yellow)',
                  borderRadius: '10px',
                  padding: '15px',
                  backgroundColor: 'var(--background-black)',
                }}
              >
                <h3 style={{ color: 'var(--primary-orange)' }}>{post.title}</h3>
                <p style={{ color: 'var(--text-white)' }}>{post.excerpt}</p>
                <a
                  href={post.link}
                  style={{
                    color: 'var(--primary-blue)',
                    textDecoration: 'none',
                  }}
                >
                  Leia mais
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Botão fixo para voltar à Home */}
      <Button
        onClick={() => navigate('/')} // Navega para a Home
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '210px',
          backgroundColor: 'var(--primary-orange)',
          color: 'var(--text-white)',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          fontSize: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Voltar
      </Button>
    </section>
  );
}

export default Blog;
