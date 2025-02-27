import styles from "./Footer.module.css"

function Footer({isEnglish}){
    
    const french = 
        <div className={styles.footer}> 
            Vous souhaitez me contacter ?<br />
            e-mail: Megevand.Antoine@gmail.com <br />
            Téléphone: +33 7 81 29 54 45
        </div>

    const english = 
        <div className={styles.footer}> 
            You want to contact me?<br />
            mail: Megevand.Antoine@gmail.com <br />
            Phone number: +33 7 81 29 54 45
        </div>

    if (isEnglish) {
        return english;
    }
    else {
        return french;
    }
}

export default Footer