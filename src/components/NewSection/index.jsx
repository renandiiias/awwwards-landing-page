import styles from './style.module.scss';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Rounded from '../../common/RoundedButton';

const problems = [
  {
    title: "Tráfego sem qualificação",
    description: "gera contatos que nunca se tornarão seus clientes pagantes."
  },
  {
    title: "Você está atraindo um perfil de cliente",
    description: "que não valoriza serviços premium."
  },
  {
    title: "Estratégias genéricas",
    description: "que não consideram o perfil do seu cliente ideal."
  },
  {
    title: "Investimento em campanhas sem foco",
    description: "em quem realmente pode pagar pelos seus serviços."
  }
];

const solutions = [
  {
    title: "Análise do Cliente Ideal",
    description: "Definimos o perfil exato do cliente que valoriza e pode pagar pelos seus serviços"
  },
  {
    title: "Campanhas Segmentadas Específicas",
    description: "Anúncios que falam diretamente com quem busca soluções como as suas"
  },
  {
    title: "Otimização da Jornada do Cliente",
    description: "Desde o primeiro contato até o fechamento do contrato ou venda"
  },
  {
    title: "Crescimento Sustentável",
    description: "Expansão contínua com foco em clientes de alto valor e recorrentes"
  }
];

const testimonials = [
  {
    name: "Carlos Mendes",
    company: "Escritório de Contabilidade",
    quote: "Em apenas 3 meses, aumentamos nosso ticket médio em 45% e reduzimos o CAC em 38%. A diferença está na qualidade dos clientes, que já chegam entendendo o valor dos nossos serviços.",
    metrics: [
      { label: "Qualidade dos Clientes", value: "+73%" },
      { label: "Taxa de Conversão", value: "+45%" }
    ]
  },
  {
    name: "Amanda Silva",
    company: "Consultoria em Marketing",
    quote: "Antes gastávamos muito em leads que nunca convertiam. Agora, nossa taxa de conversão triplicou e conseguimos focar em projetos mais complexos e rentáveis.",
    metrics: [
      { label: "Qualidade dos Clientes", value: "+156%" },
      { label: "Taxa de Conversão", value: "+92%" }
    ]
  },
  {
    name: "Roberto Costa",
    company: "Academia & Fitness",
    quote: "A integração entre tráfego qualificado e atendimento transformou nosso negócio. Agora atendemos clientes que realmente valorizam nossos serviços premium.",
    metrics: [
      { label: "Qualidade dos Clientes", value: "+98%" },
      { label: "Taxa de Conversão", value: "+67%" }
    ]
  }
];

export default function NewSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={container} className={styles.newSection}>
      {/* Problems Section */}
      <div className={styles.problemsSection}>
        <div className={styles.sectionHeader}>
          <h2>POR QUE SEU NEGÓCIO NÃO ATRAI OS CLIENTES CERTOS?</h2>
          <p>Seu negócio merece clientes de qualidade.</p>
        </div>
        <div className={styles.problemsGrid}>
          {problems.map((problem, index) => (
            <motion.div 
              key={index} 
              className={styles.problemCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solutions Section */}
      <div className={styles.solutionsSection}>
        <div className={styles.sectionHeader}>
          <h2>MARKETING + RESULTADOS.</h2>
          <h3>A ESTRATÉGIA QUE TRANSFORMA.</h3>
        </div>
        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              className={styles.solutionCard}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coverage Section */}
      <div className={styles.coverageSection}>
        <motion.div style={{ y }} className={styles.coverageContent}>
          <h2>ATENDEMOS NEGÓCIOS EM TODO O BRASIL</h2>
          <p>Centenas de empresários de diversos segmentos já transformaram seus resultados com nossa metodologia</p>
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapIcon}>🇧🇷</div>
            <p>Mapa do Brasil</p>
          </div>
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className={styles.testimonialsSection}>
        <div className={styles.sectionHeader}>
          <h2>NEGÓCIOS QUE TRANSFORMARAM</h2>
          <h3>SEU FLUXO DE CLIENTES</h3>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className={styles.testimonialCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.quote}>
                <p>"{testimonial.quote}"</p>
              </div>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.company}</p>
                </div>
              </div>
              <div className={styles.metrics}>
                {testimonial.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className={styles.metric}>
                    <span className={styles.metricLabel}>{metric.label}</span>
                    <span className={styles.metricValue}>{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className={styles.finalCTA}>
        <div className={styles.ctaContent}>
          <h2>SEU NEGÓCIO MERECE</h2>
          <h3>CLIENTES DE QUALIDADE</h3>
          <p>Agende agora uma análise gratuita e descubra como transformar seu fluxo de clientes.</p>
          <div className={styles.ctaButtons}>
            <Rounded backgroundColor="#FF6B6B">
              <p>Quero Clientes Premium</p>
            </Rounded>
            <Rounded backgroundColor="transparent">
              <p>Agendar Consulta</p>
            </Rounded>
          </div>
        </div>
      </div>
    </div>
  );
}