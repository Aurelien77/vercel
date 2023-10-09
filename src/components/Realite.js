import React from 'react'



import styles from '../styles/about.module.css';
import AnimatedText from '../components/AnimatedText';
import Image from 'next/image';
import { AnimatedNumbers } from '../pages/about';
const Realite = ({titre,photo, text, text2, textanimation,chiffre1,chiffre2, className }) => {
  return (
   
<> <div className={styles.container}>
    <div className={styles.AnimatedText}>
    <AnimatedText

      text={textanimation}
      text2={textanimation}
      text3={textanimation}
      text4={textanimation} />
  </div>

  <div className={className}>

<div className={styles.realite}>
    <Image src={photo} alt="photo" className={styles.image} />
    <h2>{titre}</h2>
    </div>

    
    <p className={styles.text}>
     {text}
    </p><p className={styles.text2}>{text2}</p>
    <div><AnimatedNumbers value={chiffre1} value2={chiffre2} /></div>
  </div>





  </div>
</>
  )
}

export default Realite