import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ className, text, text2, text3, text4}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [text, text2, text3, text4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? prevIndex : prevIndex + 1
      );
    }, 2000); // Change text every 2 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const currentText = texts[currentTextIndex];

  return (
    <div className={className}>
      <motion.div
        key={currentText} // Ensure animation on text change
        initial={{ opacity: 0, scale: 0.5 }} // Animation initial
        animate={{ opacity: 1, scale: 1 }} // Animation pendant
        exit={{ opacity: 0, scale: 0.5 }} // Animation de sortie
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 100,
          duration: 0.5,
        }}
      >
        {currentText}
      </motion.div>
    </div>
  );
};

export default AnimatedText;
