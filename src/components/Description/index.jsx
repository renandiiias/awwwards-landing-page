import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "PARE DE PAGAR POR LEADS QUE NÃO COMPRAM. Marketing Digital Estratégico + Tráfego Qualificado para Negócios que Querem Crescer de Verdade. Atraia clientes que valorizam qualidade e estão prontos para investir.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Seu negócio merece clientes de qualidade. Você precisa de uma estratégia focada em atrair quem valoriza e pode pagar por seus serviços.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>Quero Clientes Qualificados</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
