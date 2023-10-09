import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/TransitionEffect.module.css';

const Transitioneffect = ({text, text2, text3}) => {
  return (
    <>

      <motion.div
        className={styles.container}
        initial={{ x: "0%", width: "100%" }} // Démarre à 0% de largeur
        animate={{ x: "100%", width: "0%" }} // Se termine à 100% de largeur
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>

<motion.div
        className={styles.container2}
        initial={{ x: "0%", width: "100%" }} // Démarre à 0% de largeur
        animate={{ x: "100%", width: "0%" }} // Se termine à 100% de largeur
        transition={{ delay:0.1, duration: 0.5, ease: "easeInOut" }}
      ></motion.div>

<motion.div
        className={styles.container3}
        initial={{ x: "0%", width: "100%" }} // Démarre à 0% de largeur
        animate={{ x: "100%", width: "0%" }} // Se termine à 100% de largeur
        transition={{ delay:0.2,duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
}

export default Transitioneffect;
