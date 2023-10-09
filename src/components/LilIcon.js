import React from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from '../styles/experiences.module.css'
const LilIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    initial: [0, 0], // Set initial scroll values
    offset: [0, 0],  // Set offset values
  });

  return (
    <figure>
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="20" className={styles.icones} />
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: scrollYProgress }}
          className={styles.icones}
        />
      </svg>
    </figure>
  );
};

export default LilIcon;
