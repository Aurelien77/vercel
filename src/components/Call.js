import React from 'react'
import { CirculareText } from './Icon'
import styles from '../styles/layout.module.css'
import Link from 'next/link'




const Call = ({ className }) => {
  return (
    <>
      <div className={className}> 
  
      
       <CirculareText/> 

     
        <Link href="/contact"  />
      </div>
    </>
  )
}

export default Call;