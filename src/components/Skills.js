import React from 'react';
import styles from '../styles/skills.module.css';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
     
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
    
      transition={{ duration: 2.5 }}
      whileInView={{x: x, y: y }}
  /*     viewport={{once:true}} */
    >
      {name}
    </motion.div>
  );
};

const Skills = ({ name, x, y }) => {
    return (
      <div>
        <Skill name={name} x={x} y={y}
        
        />
      </div>
    );
  }
export default Skills;
