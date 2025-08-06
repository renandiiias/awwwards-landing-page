'use client';
import { useState, useEffect } from 'react';
import styles from './style.module.scss';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.nav}>
          <div className={styles.logo}>
            <span>Marketing</span>
            <span className={styles.highlight}>Estratégico</span>
          </div>
          
          <nav className={styles.menu}>
            <a href="#servicos">Serviços</a>
            <a href="#resultados">Resultados</a>
            <a href="#contato">Contato</a>
            <a href="#contato" className="btn btn-primary">
              Quero Clientes Qualificados
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}