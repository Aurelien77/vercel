import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'
const Footer = ({Modedark}) => {
  return (<>
    <footer className={Modedark === "dark" ? styles.footerdark  : styles.footer }>



  

  <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
 <span> Build with  Next JS</span>
  <Link href="" className={styles.adress} >43 rue des Rossignols <br></br> 77130 champigny-sur-marne</Link>

  </footer>
  </>
  )
}

export default Footer