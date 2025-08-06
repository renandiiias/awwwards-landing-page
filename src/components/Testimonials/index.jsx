'use client';
import styles from './style.module.scss';

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

export default function Testimonials() {
  return (
    <section className={`${styles.testimonials} section`} id="resultados">
      <div className="container">
        <div className="text-center">
          <h2>NEGÓCIOS QUE <span className={styles.highlight}>TRANSFORMARAM</span></h2>
          <h3 className={styles.subtitle}>SEU FLUXO DE CLIENTES</h3>
        </div>
        
        <div className={`grid grid-3 ${styles.testimonialsGrid}`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`card ${styles.testimonialCard}`}>
              <div className={styles.quote}>
                <p>"{testimonial.quote}"</p>
              </div>
              
              <div className={styles.author}>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.company}</p>
              </div>
              
              <div className={styles.metrics}>
                {testimonial.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className={styles.metric}>
                    <span className={styles.value}>{metric.value}</span>
                    <span className={styles.label}>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}