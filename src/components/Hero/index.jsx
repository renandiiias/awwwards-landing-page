'use client';
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.badge}>
            ✨ Marketing Digital Estratégico
          </div>
          
          <h1 className={styles.title}>
            PARE DE PAGAR POR
            <span className={styles.highlight}> LEADS QUE NÃO COMPRAM</span>
          </h1>
          
          <p className={styles.subtitle}>
            Marketing Digital Estratégico + Tráfego Qualificado para Negócios que Querem Crescer de Verdade.
            <strong> Atraia clientes que valorizam qualidade e estão prontos para investir.</strong>
          </p>
          
          <div className={styles.cta}>
            <a href="#contato" className="btn btn-primary btn-large">
              Quero Clientes Qualificados
            </a>
            <a href="#como-funciona" className="btn btn-secondary">
              Como Funciona
            </a>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>+300</span>
              <span className={styles.label}>Empresas Atendidas</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>+85%</span>
              <span className={styles.label}>Taxa de Sucesso</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>+150%</span>
              <span className={styles.label}>ROI Médio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}