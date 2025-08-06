'use client';
import styles from './style.module.scss';

const problems = [
  {
    icon: "💸",
    title: "Clientes que desistem quando descobrem o preço",
    description: "Tráfego sem qualificação gera contatos que nunca se tornarão seus clientes pagantes."
  },
  {
    icon: "📋",
    title: "Agenda cheia de orçamentos de baixo valor",
    description: "Você está atraindo um perfil de cliente que não valoriza serviços premium."
  },
  {
    icon: "🎯",
    title: "Marketing desconectado do seu negócio",
    description: "Estratégias genéricas que não consideram o perfil do seu cliente ideal."
  },
  {
    icon: "📢",
    title: "Anúncios que atraem o público errado",
    description: "Investimento em campanhas sem foco em quem realmente pode pagar pelos seus serviços."
  }
];

export default function Problems() {
  return (
    <section className={`${styles.problems} section`} id="problemas">
      <div className="container">
        <div className="text-center">
          <h2>POR QUE SEU NEGÓCIO NÃO ATRAI OS <span className={styles.highlight}>CLIENTES CERTOS?</span></h2>
          <p className={styles.subtitle}>
            Seu negócio merece clientes de qualidade. Você precisa de uma estratégia focada em atrair quem valoriza e pode pagar por seus serviços.
          </p>
        </div>
        
        <div className={`grid grid-2 ${styles.problemsGrid}`}>
          {problems.map((problem, index) => (
            <div key={index} className={`card ${styles.problemCard}`}>
              <div className={styles.icon}>{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}