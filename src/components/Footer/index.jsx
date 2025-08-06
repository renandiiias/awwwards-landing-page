'use client';
import styles from './style.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>Marketing <span className={styles.highlight}>Estratégico</span></h3>
            <p>Transformando negócios através de marketing digital estratégico e tráfego qualificado.</p>
          </div>
          
          <div className={styles.certifications}>
            <h4>Certificações</h4>
            <div className={styles.certs}>
              <span>Google Ads</span>
              <span>Facebook Blueprint</span>
              <span>Google Analytics</span>
              <span>HubSpot</span>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2024 Marketing Estratégico. Todos os direitos reservados.</p>
          <p>Desenvolvido com foco em resultados reais.</p>
        </div>
      </div>
    </footer>
  );
}