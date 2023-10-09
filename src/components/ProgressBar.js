import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../styles/ProgressBar.module.css';

const ProgressBar = ({ scrollProgress }) => {
  const [progressHeight, setProgressHeight] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const progressBarHeight = (windowHeight / pageHeight) * 50;
    const newProgressHeight = Math.min(progressBarHeight, scrollProgress);

    setProgressHeight(newProgressHeight);

    // Lorsque la progression atteint son maximum, déclenchez l'animation du contour du rond
    if (newProgressHeight >= progressBarHeight) {
      controls.start({ rotate: 360 }); // Faites tourner le contour du rond de 360 degrés
    } else {
      controls.start({ rotate: 0 }); // Réinitialisez la rotation du contour du rond
    }
  }, [scrollProgress, controls]);

  return (
 <>
      <motion.div
        className={styles.progressBar}
        style={{
          scaleY: progressHeight / 50,
        }}
      ></motion.div>
      {progressHeight >= 50 && (
        <motion.div
          className={styles.progressBarCircle}
          animate={controls} // Utilisez les animations de Framer Motion
        >
          {/* Le contenu du rond */}
        </motion.div>
      )}
</>
  );
};

export default ProgressBar;
