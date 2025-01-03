import { Container, Button, Form } from 'react-bootstrap';

function DicasReforma() {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: 'var(--background-black)',
        color: 'var(--text-white)',
        marginTop: '120px', // Para evitar sobreposição do Navbar
      }}
    >
      <Container
        style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}
      >
        {/* Botão para voltar à listagem no topo */}
        <Button
          href="/blog"
          className="mb-4"
          style={{
            backgroundColor: 'var(--primary-blue)',
            border: 'none',
            width: '100%',
          }}
        >
          &larr; Voltar para todos os posts
        </Button>

        {/* Título do post */}
        <h1
          style={{
            color: 'var(--primary-orange)',
            textAlign: 'center',
            fontSize: '2rem',
          }}
        >
          5 Dicas Essenciais para Reformas de Sucesso
        </h1>

        {/* Breve descrição e data */}
        <p
          style={{
            fontSize: '1.2rem',
            marginTop: '10px',
            textAlign: 'center',
          }}
        >
          Planejar e executar uma reforma pode ser desafiador. Confira nossas
          dicas para garantir o sucesso do seu projeto.
        </p>
        <p
          style={{
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'var(--text-gray)',
            textAlign: 'center',
          }}
        >
          Escrito em: 2 de Janeiro de 2025
        </p>

        {/* Imagem principal */}
        <div
          style={{
            textAlign: 'center',
            margin: '20px 0',
          }}
        >
          <img
            src="/images/dicas-reforma.jpg"
            alt="Dicas para reformas"
            style={{
              width: '100%',
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          />
        </div>

        {/* Conteúdo principal */}
        <article>
          <h2
            style={{
              color: 'var(--primary-orange)',
              marginTop: '30px',
              fontSize: '1.5rem',
            }}
          >
            1. Planejamento Detalhado
          </h2>
          <p>
            O planejamento é a base de qualquer reforma. Antes de iniciar, faça
            uma análise detalhada das necessidades e objetivos da obra.
            Pergunte-se:
          </p>
          <ul>
            <li>Quais áreas da casa precisam de reforma?</li>
            <li>
              Qual é o objetivo principal (renovação estética, aumento de
              espaço, manutenção estrutural)?
            </li>
            <li>Quais serão os prazos para cada etapa da obra?</li>
          </ul>
          <p>
            Uma boa ideia é criar um cronograma com prazos para cada etapa, como
            demolição, instalação elétrica, pintura e acabamento. O uso de
            ferramentas digitais, como aplicativos de gerenciamento, pode ajudar
            bastante nesse processo.
          </p>

          <h2
            style={{
              color: 'var(--primary-orange)',
              marginTop: '30px',
              fontSize: '1.5rem',
            }}
          >
            2. Estabeleça um Orçamento Realista
          </h2>
          <p>
            Um dos maiores desafios em reformas é o controle financeiro. Antes
            de iniciar a obra, defina um orçamento que inclua todos os custos:
            materiais, mão de obra, taxas e possíveis despesas extras. Sempre
            reserve uma margem de segurança de 10% a 20% para imprevistos.
          </p>
          <ul>
            <li>
              **Dica:** Compare preços em diferentes fornecedores antes de
              fechar qualquer compra.
            </li>
            <li>
              Invista em materiais de qualidade para evitar gastos com
              manutenção ou substituição no futuro.
            </li>
          </ul>

          <h2
            style={{
              color: 'var(--primary-orange)',
              marginTop: '30px',
              fontSize: '1.5rem',
            }}
          >
            3. Escolha Profissionais Qualificados
          </h2>
          <p>
            Contratar profissionais qualificados faz toda a diferença no
            resultado final da obra. Pesquise referências, veja portfólios e
            leia avaliações antes de contratar. Um bom profissional não só
            executa o trabalho com qualidade, como também pode sugerir soluções
            inovadoras para o seu projeto.
          </p>
          <ul>
            <li>Contrate arquitetos para projetos complexos.</li>
            <li>
              Garanta que eletricistas e encanadores sejam certificados para
              evitar problemas futuros.
            </li>
          </ul>

          <h2
            style={{
              color: 'var(--primary-orange)',
              marginTop: '30px',
              fontSize: '1.5rem',
            }}
          >
            4. Priorize Materiais de Qualidade
          </h2>
          <p>
            Optar por materiais de qualidade pode parecer mais caro
            inicialmente, mas é um investimento que compensa. Materiais de
            qualidade oferecem maior durabilidade, melhor acabamento e menos
            manutenção no longo prazo.
          </p>
          <ul>
            <li>Pesquise marcas renomadas e com boas avaliações.</li>
            <li>
              Certifique-se de que os materiais são adequados ao clima e
              condições do local.
            </li>
          </ul>

          <h2
            style={{
              color: 'var(--primary-orange)',
              marginTop: '30px',
              fontSize: '1.5rem',
            }}
          >
            5. Acompanhe o Progresso da Obra
          </h2>
          <p>
            Acompanhar o andamento da obra é essencial para garantir que tudo
            esteja saindo conforme o planejado. Realize visitas regulares ao
            local, mantenha comunicação constante com a equipe e esteja atento a
            possíveis ajustes necessários.
          </p>
          <p>
            Use um checklist para verificar se cada etapa foi concluída
            corretamente antes de passar para a próxima. Esse acompanhamento
            reduz a chance de erros e evita retrabalhos caros.
          </p>
        </article>

        {/* Área de comentários */}
        <div
          style={{
            marginTop: '50px',
            padding: '20px',
            borderTop: '1px solid var(--primary-blue)',
          }}
        >
          <h3 style={{ color: 'var(--primary-orange)' }}>
            Deixe um comentário
          </h3>
          <Form>
            <Form.Group controlId="formComment" className="mb-3">
              <Form.Label>Seu Comentário</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escreva aqui seu comentário..."
                style={{
                  backgroundColor: 'var(--background-gray)',
                  color: 'var(--text-white)',
                }}
              />
            </Form.Group>
            <Button
              type="submit"
              style={{
                backgroundColor: 'var(--primary-orange)',
                border: 'none',
                width: '100%',
              }}
            >
              Enviar
            </Button>
          </Form>
        </div>

        {/* Seção de compartilhamento */}
        <div
          style={{
            marginTop: '50px',
            padding: '20px',
            textAlign: 'center',
            borderTop: '1px solid var(--primary-blue)',
          }}
        >
          <p style={{ fontSize: '1.2rem', color: 'var(--text-white)' }}>
            Gostou? Compartilhe com quem ache que irá gostar do assunto também!
          </p>
          <Button
            style={{
              backgroundColor: 'var(--primary-blue)',
              border: 'none',
              margin: '10px',
            }}
            href="https://www.facebook.com/sharer/sharer.php?u=seulink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compartilhar no Facebook
          </Button>
          <Button
            style={{
              backgroundColor: 'var(--primary-orange)',
              border: 'none',
              margin: '10px',
            }}
            href="https://www.linkedin.com/shareArticle?mini=true&url=seulink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compartilhar no LinkedIn
          </Button>
        </div>

        {/* Botão para voltar à listagem no final */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Button
            href="/blog"
            style={{
              backgroundColor: 'var(--primary-blue)',
              border: 'none',
              width: '100%',
            }}
          >
            &larr; Voltar para todos os posts
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default DicasReforma;
