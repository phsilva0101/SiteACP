import { Container } from 'react-bootstrap';

function DicasReforma() {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: 'var(--background-black)',
        color: 'var(--text-white)',
      }}
    >
      <Container>
        <h1 style={{ color: 'var(--primary-orange)' }}>
          5 Dicas Essenciais para Reformas de Sucesso
        </h1>
        <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
          Planejar e executar uma reforma pode ser desafiador. Para ajudá-lo
          nesse processo, reunimos cinco dicas fundamentais que garantirão o
          sucesso da sua obra.
        </p>

        <h2 style={{ color: 'var(--primary-blue)', marginTop: '30px' }}>
          1. Planejamento Detalhado
        </h2>
        <p style={{ marginTop: '10px' }}>
          Antes de iniciar qualquer reforma, é crucial elaborar um planejamento
          detalhado. Defina claramente os objetivos, o escopo da obra e os
          prazos. Um bom planejamento ajuda a evitar imprevistos e mantém o
          projeto dentro do orçamento.
        </p>

        <h2 style={{ color: 'var(--primary-blue)', marginTop: '30px' }}>
          2. Estabeleça um Orçamento Realista
        </h2>
        <p style={{ marginTop: '10px' }}>
          Defina um orçamento que contemple todas as etapas da reforma,
          incluindo materiais, mão de obra e possíveis imprevistos. Reserve uma
          margem adicional de 10% a 20% para despesas inesperadas.
        </p>

        <h2 style={{ color: 'var(--primary-blue)', marginTop: '30px' }}>
          3. Contrate Profissionais Qualificados
        </h2>
        <p style={{ marginTop: '10px' }}>
          Contar com profissionais experientes é fundamental para a qualidade e
          segurança da sua reforma. Pesquise referências, verifique portfólios e
          busque indicações para selecionar a equipe ideal.
        </p>

        <h2 style={{ color: 'var(--primary-blue)', marginTop: '30px' }}>
          4. Escolha Materiais de Qualidade
        </h2>
        <p style={{ marginTop: '10px' }}>
          Optar por materiais de qualidade garante durabilidade e um melhor
          acabamento para sua obra. Embora possam ter um custo inicial mais
          elevado, a longo prazo, evitam manutenções frequentes e retrabalhos.
        </p>

        <h2 style={{ color: 'var(--primary-blue)', marginTop: '30px' }}>
          5. Acompanhe o Cronograma
        </h2>
        <p style={{ marginTop: '10px' }}>
          Monitorar o andamento da reforma é essencial para assegurar que tudo
          ocorra conforme o planejado. Realize visitas periódicas ao local,
          mantenha comunicação constante com a equipe e esteja atento a
          possíveis ajustes necessários.
        </p>

        <p style={{ marginTop: '30px', fontSize: '1.2rem' }}>
          Seguindo essas dicas, você estará mais preparado para enfrentar os
          desafios de uma reforma e alcançar resultados satisfatórios.
        </p>

        <p style={{ marginTop: '30px', fontSize: '1.2rem' }}>
          Para mais orientações e serviços especializados, visite nosso site e
          descubra como podemos ajudá-lo a transformar seu projeto em realidade.
        </p>
      </Container>
    </section>
  );
}

export default DicasReforma;
