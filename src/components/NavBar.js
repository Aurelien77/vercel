import React from 'react'
import styles from '../styles/Home.module.css'

import stylesNav from '../styles/navbarre.module.css'

import stylesicones from '../styles/icone.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Icon, MoonIcon, SunIcon } from '../components/Icon';
import { Icon2 } from '../components/Icon';
import { Icon3 } from '../components/Icon';
import UseThemeSwitcher from './hooks/useThemeSwitcher'

/* {styles.link} */

const CustomLink = ({href, title, className=""}) => {

  const router= useRouter();
    return(
<Link href={href} className={styles.decorationnone} > 
{title}
<span  className={`${styles.link} ${router.asPath === href ? styles.link : styles.link2}`}>

 {/*  &nbsp; */}<div className={styles.espace}></div>
</span>

</Link>


    )
}


const NavBar = ({Modedark}) => {




  return (
    <header>
   
    <nav>
    
<div  className={Modedark === "dark" ? stylesNav.navbarre : stylesNav.modedark }>
  
<CustomLink href="/"title="Accueil" />
<CustomLink href="/about" title="Présentation"/>
<CustomLink href="/projects" title="Etapes"/>


</div>


<div className={stylesicones.iconescontainer}>

{/* <button onClick={() => setMode(Mode === "light" ? "dark": "light")}>
{
Mode === "dark" ? 

<SunIcon className={stylesicones.dark} />
:
<MoonIcon className={stylesicones.dark} />

}


    </button>  */}
    <Icon/>
 
  <Icon2/>
   
<Icon3/>
   
    </div>








    </nav>
  
   
    <nav>
   


    </nav>
   
    </header>
  )
}

export default NavBar