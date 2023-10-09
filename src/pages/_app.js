import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import UseThemeSwitcher from '../components/hooks/useThemeSwitcher';
import NavBar from '../components/NavBar';

import "../styles/global.css";
import styles from '../styles/Home.module.css'
import { MoonIcon, SunIcon } from '../components/Icon';
import stylesicones from '../styles/icone.module.css'





export default function App({ Component, pageProps }) {
  useEffect(() => {
    setMode("light"); 
  }, []);
  const [Mode , setMode] = UseThemeSwitcher();
  

  
  return (
  <main className={Mode === "dark" ? styles.containerdark :  styles.container  }>
<button    className= {styles.button} onClick={() => setMode(Mode === "light" ? "dark": "light")}>
{
Mode === "dark" ? 
<MoonIcon className={stylesicones.dark} />

:
<SunIcon className={stylesicones.dark} />

}


    </button>
    <NavBar Modedark={Mode}/>
  <Component {...pageProps} Modedark={Mode} />
  <Footer Modedark={Mode}/> 
 
  </main>
  )
}
