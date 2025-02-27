import { useEffect, useRef } from "react";
import { Link, scroller } from "react-scroll";
import styles from "./Header.module.css";
import drapeauEN from "/src/assets/Home/logo/drapeauEN.png";
import drapeauFR from "/src/assets/Home/logo/drapeauFR.png";

function Header({onLangChange, isEnglish}) {
    const headerRef = useRef(null);

    useEffect(() => {
        const tellY = () => {
            if (!headerRef.current) return;

            if (window.pageYOffset > 150) {
                headerRef.current.classList.add(styles.shrink);
                headerRef.current.classList.remove(styles.expand);
            } else {
                headerRef.current.classList.add(styles.expand);
                headerRef.current.classList.remove(styles.shrink);
            }
        };

        window.addEventListener("scroll", tellY);
        return () => window.removeEventListener("scroll", tellY);
    }, []);

    const scrollToSection = (section) => {
        if (section == "cv") {scroller.scrollTo(section, {smooth: true, duration: 500, offset: -50,});}
        else {scroller.scrollTo(section, {smooth: true, duration: 500, offset: -200,});}
      };

    return (
        <div className={`${styles.header} ${styles.expand}`} ref={headerRef}>
            <div className={styles.headerName}>Antoine Megevand</div>
            <button onClick={() => scrollToSection("profil")} className={styles.buttonHome}>{isEnglish ? "Home" : "Accueil"}</button>
            <button onClick={() => scrollToSection("portfolio")} className={styles.buttonPort}>Portfolio</button>
            <button onClick={() => scrollToSection("cv")} className={styles.buttonCV}>CV</button>
            <button onClick={onLangChange} className={styles.buttonLang}>
                <img src={isEnglish ? drapeauFR : drapeauEN} alt="cercle" />
            </button>
        </div>
    );
}

export default Header;