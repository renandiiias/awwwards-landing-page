'use client';
import styles from './style.module.scss';

const solutions = [
  {
    icon: "🎯",
    title: "Análise do Cliente Ideal",
    description: "Definimos o perfil exato do cliente que valoriza e pode pagar pelos seus serviços"
  },
  {
    icon: "📊",
    title: "Campanhas Segmentadas Específicas",
    description: "Anúncios que falam diretamente com quem busca soluções como as suas"
  },
  {
    icon: "🚀",
    title: "Otimização da Jornada do Cliente",
    description: "Desde o primeiro contato até o fechamento do contrato ou venda"
  },
  {
    icon: "📈",
    title: "Crescimento Sustentável",
    description: "Expansão contínua com foco em clientes de alto valor e recorrentes"
  }
];

export default function Solutions() {
  return (
    <section className={`${styles.solutions} section`} id="servicos">
      <div className="container">
        <div className="text-center">
          <h2>MARKETING + <span className={styles.highlight}>RESULTADOS</span></h2>
          <h3 className={styles.subtitle}>A ESTRATÉGIA QUE TRANSFORMA</h3>
        </div>
        
        <div className={`grid grid-2 ${styles.solutionsGrid}`}>
          {solutions.map((solution, index) => (
            <div key={index} className={`${styles.solutionCard}`}>
              <div className={styles.icon}>{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}