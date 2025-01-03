import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Para navegação

const blogPosts = [
  {
    id: 1,
    title: '5 Dicas Essenciais para Reformas de Sucesso',
    excerpt:
      'Reformar sua casa pode ser desafiador. Confira essas 5 dicas para garantir que tudo saia conforme o planejado.',
    link: '/blog/dicas-reformas',
    image: '/images/dicas-reforma.jpg',
  },
  {
    id: 2,
    title: 'Como Economizar na Construção da Sua Casa',
    excerpt:
      'A construção de uma casa é um grande investimento. Veja como economizar sem abrir mão da qualidade.',
    link: '/blog/economizar-construcao',
    image: '/images/economizar-construcao.jpg',
  },
  {
    id: 3,
    title: 'Manutenção Residencial: Quando Chamar um Marido de Aluguel',
    excerpt:
      'Saiba quando é a hora certa de chamar um profissional para resolver pequenos problemas em casa.',
    link: '/blog/manutencao-marido-aluguel',
    image: '/images/manutencao-marido-aluguel.jpg',
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
                {/* Imagem do post */}
                <div
                  style={{
                    width: '100%',
                    height: '200px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '15px',
                    backgroundColor: 'var(--background-gray)', 
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <p style={{ color: 'var(--text-white)' }}>{post.excerpt}</p>
                <Button
                  onClick={() => navigate(post.link)} // Navega para o link do post
                  style={{
                    backgroundColor: 'var(--primary-blue)',
                    border: 'none',
                    color: 'var(--text-white)',
                    marginTop: '10px',
                  }}
                >
                  Leia mais
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
