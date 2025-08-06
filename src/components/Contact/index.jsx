'use client';
import styles from './style.module.scss';

export default function Contact() {
  return (
    <section className={`${styles.contact} section`} id="contato">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <h2>SEU NEGÓCIO MERECE</h2>
            <h3 className={styles.highlight}>CLIENTES DE QUALIDADE</h3>
            <p>
              Agende agora uma análise gratuita e descubra como transformar seu fluxo de clientes.
            </p>
            
            <div className={styles.cta}>
              <a href="https://wa.me/5511999999999?text=Olá! Quero clientes premium para meu negócio" 
                 className="btn btn-primary btn-large" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Quero Clientes Premium
              </a>
              <a href="https://calendly.com/seucalendario" 
                 className="btn btn-secondary" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </div>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📧</span>
                <span>contato@marketingestrategico.com.br</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📱</span>
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📍</span>
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>
          
          <div className={styles.coverage}>
            <h4>ATENDEMOS NEGÓCIOS EM TODO O BRASIL</h4>
            <p>Centenas de empresários de diversos segmentos já transformaram seus resultados com nossa metodologia</p>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapIcon}>🇧🇷</div>
              <p>Cobertura Nacional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}