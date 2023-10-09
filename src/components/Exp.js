import style from "../styles/experiences.module.css"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Item({text, chiffre, text2, image}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "start center"]
  });

  return (
    <section className={style.section}>
      <div ref={ref} >
      <div className={style.conteurtext}>
      <div className={style.text}>{text}</div>
      <div className={style.text2}>{text2}</div>

      </div>
    <figure className={style.progress}>
  <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="30" pathLength="1" className={style.bg} />
    <motion.circle
      cx="50"
      cy="50"
      r="30"
      pathLength="1"
      className={style.indicator}
      style={{ pathLength: scrollYProgress }}
       
    />
 
    <text x="42" y="-38"  font-size="30"   style={{ transform: 'rotate(89deg)' }}>
      {chiffre}
    </text>
  </svg>
</figure>


      </div>
   
    </section>
  );
}

export default function App() {

  
  return (
    <>
    <div       className={style.sectiontotal}>
    <Item text2="Lors de notre entretien nous verrons ensemble votre projet" text="Joindre votre courtier pour un premier contact" chiffre="1" image="../../public/images/articles/create loading screen in react js.jpg"/>
      <Item text="Rendez-Vous par téléphone ou en ligne" chiffre="2" image="../../public/images/articles/create loading screen in react js.jpg" />
      <Item text="Etude du dossier lors du rendez-vous" chiffre="3" image="../../public/images/articles/create loading screen in react js.jpg"/>
      <Item  text="Propositions" chiffre="4" image="../../public/images/articles/create loading screen in react js.jpg"/>
      <Item text=" Signature" chiffre="5" image="../../public/images/articles/create loading screen in react js.jpg"/>
      </div>
    </>
  );
}
