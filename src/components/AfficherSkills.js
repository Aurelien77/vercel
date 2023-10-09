import React from 'react'
import Skills from './Skills';
import stylesskills from '../styles/skills.module.css';
const AfficherSkills = ({className}) => {
  return (
   
    <div className={stylesskills.skills}>



    <Skills name="Bank 1" x="-5vw" y="2vw" />

    <Skills name="Bank 2" x="-2vw" y="9vw" />
    <div className={stylesskills.vous}>Vous</div>
    <Skills name="Bank 3" x="-10vw" y="-4vw" />

    <Skills name="Bank 4" x="-8vw" y="-3vw" />

    <Skills name="Bank 6" x="-7vw" y="-4vw" />

    <Skills name="Bank 7" x="-1vw" y="-10vw" />
    <Skills name="Bank 8" x="-14vw" y="10vw" />
    <Skills name="Bank 9" x="-15vw" y="1vw" />

  </div>
  )
}

export default AfficherSkills;