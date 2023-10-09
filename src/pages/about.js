import React, { useEffect } from 'react'
import styles from '../styles/about.module.css'

import Head from 'next/head';




import profilPic from '../../public/images/profile/developer-pic-2.jpg';
import profilPic2 from '../../public/images/ville.png';


import Realite from '../components/Realite';
import Afficherskills from '../components/AfficherSkills';
import { useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Transitioneffect from '../components/Transitioneffect';


export const AnimatedNumbers = ({ value , value2 }) => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const motionValue = useMotionValue(0);
    const motionValue2 = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 7000 });
    const isInview = useInView(ref);
  
    useEffect(() => {
      if (isInview) {
        motionValue.set(value);
        motionValue2.set(value2);
      }
    }, [isInview, value, value2, motionValue,motionValue2]);
  
    useEffect(() => {
      springValue.on('change', (lastet) => {
     if(ref.current && lastet.toFixed(0) <= value){
ref.current.textContent = lastet.toFixed(0);


     }

     
      });

      springValue.on('change', (lastet) => {
        if(ref2.current && lastet.toFixed(0) <= value2){
   ref2.current.textContent = lastet.toFixed(0);
   
   
        }
   
        
         });
    }, [springValue, value]);
  
    return (
     
      <div> <Transitioneffect text="Loyal" text2="A l'écoute" text3="disponible"/>
        <div className={styles.increm}>
        <div>       <span className={styles.plus}>+</span> <span ref={ref} className={styles.increm1}> </span></div> 
  <span>clients</span>  

        </div>
        
        <div className={styles.increm}>
        <div>        <span className={styles.plus}>+</span> <span ref={ref2} className={styles.increm1}> </span></div> 
  <span>contrats signés</span>  

        </div>
      </div>
    );
  };
  
  export const about = () => {
    //test
    return (
      <>
        <Head>
          <title>A Propos</title>
  
          <meta name="descritpion" />
  
  
  
        </Head>
  
      
  
      
          
  
  
          <Realite
           titre="Le métier de courtier en assurance"
            photo={profilPic}  
            text=" On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. avantage du Lorem Ipsum sur un texte générique comme Du texte. Du texte. Du texte est il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut."
            text2="um. Il provient en fait des sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de éthique. Les premières lignes du Lorem Ipsum,Lorem ipsum dolor sit amet..., proviennent de la section 1.10.32, souvent intentionnellement histoire y rajouter de petits clins doeil, voire des phrases embarassantes, Plusieurs versions sont apparues avec le temps, parfois par accident,et une recherche pour Lorem Ipsuvous à leur phase de construction."
            textanimation="REALITE"
            chiffre1="500"
            chiffre2="400"
            className={styles.text}
            />
      <Afficherskills />
     
         <div className={styles.espace}></div>
  
         <Realite
           titre="Le métier de courtier en assurance"
            photo={profilPic2}  
            text=" On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. avantage du Lorem Ipsum sur un texte générique comme Du texte. Du texte. Du texte est il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour Lorem Ipsuvous conduira vers de nombreux sites qui nen sont encore à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement histoire y rajouter de petits clins doeil, voire des phrases embarassantes."
            text2="um. Il provient en fait des sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de éthique. Les premières lignes du Lorem Ipsum,Lorem ipsum dolor sit amet..., proviennent de la section 1.10.32."
            textanimation="PROFIT"
            chiffre1="1500"
            chiffre2="4000"
            className={styles.textplein}
            />
         
         <div className={styles.espace}></div>
  
  <Realite
    titre="Le métier de courtier en assurance"
     photo={profilPic2}  
     text=" On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. avantage du Lorem Ipsum sur un texte générique comme Du texte. Du texte. Du texte est il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour Lorem Ipsuvous conduira vers de nombreux sites qui nen sont encore à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement histoire y rajouter de petits clins doeil, voire des phrases embarassantes."
     text2="um. Il provient en fait des sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de éthique. Les premières lignes du Lorem Ipsum,Lorem ipsum dolor sit amet..., proviennent de la section 1.10.32."
     textanimation="PROJET"
     chiffre1="1500"
     chiffre2="4000"
     className={styles.textplein}
     />
      
  
          
            <div className={styles.background}>
  
  
  
            </div>
  
  
  
        
  
   
  
     
  
      </>
    );
  };




export default about