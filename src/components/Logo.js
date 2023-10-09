import React from 'react'
import styles from '../styles/Home.module.css'

import logo from '../styles/logo.module.css'

import Link from 'next/link';
import {motion} from "framer-motion";

const MotionLink = motion(Link);


const Logo = ({text, className, lien}) => {
  return (
    <div className={className}>

<MotionLink href={lien}className={`${logo.logo}`}
whileHover={{scale:1.1,
backgroundColor:["#c0c0c0","rgba(176,196,222,0)","rgba(176,196,222,0)"],
transition:{duration:1, /* repeat:Infinity */},
color:["white"]

}}

whileTap={{
  scale: 1.1,
  backgroundColor: ["#c0c0c0", "rgba(176,196,222,0)", "rgba(176,196,222,0)"],
  transition: { duration: 1 /* repeat: Infinity */ },
  color: ["white"],
}}


>

{text}
</MotionLink>


    </div>
  )
}

export default Logo;