import {Element} from "react-scroll"

import Header from "./Header/Header"
import Profil from "./Profil/Profil"
import Portfolio from "./Portfolio/Portfolio"
import CV from "./CV/CV"
import Software from "./Software/Software"
import Footer from "./Footer/Footer"

import styles from "./Home.module.css"
import { useState } from "react"

export function Home() {
    const [isEnglish, setIsEnglish] = useState(false)

    const switchLang = () => {
        setIsEnglish(!isEnglish);
        console.log(isEnglish);
    }

  return(
    <>
    <Header onLangChange={switchLang} isEnglish={isEnglish}/>
    <div className={styles.main}>

      <Element name="profil">
        <Profil isEnglish={isEnglish}/>
      </Element>

      <Element name="portfolio">
        <Portfolio isEnglish={isEnglish}/>
      </Element>

      <Element name="cv">
        <CV isEnglish={isEnglish}/>
      </Element>

      <Software isEnglish={isEnglish}/>

    </div>
    <Footer isEnglish={isEnglish}/>
    </>
  );
}