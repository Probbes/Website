import imageProfil from "/src/assets/Home/photo_profil.png"

import styles from "./Profil.module.css"

function Profil({isEnglish}){

    const french = 
        <>
        <div className={styles.profil}>
            <img src={imageProfil} alt="cercle" />
            <div className={styles.paragraphe}>
            <p>Je suis passionné d'informatique, de musique et de l'art vidéoludique. Modélisation comme animation 3D, montage vidéo,
            composition musicale, programmation... Je touche à tout.</p>

            <p>J'ai obtenu un master en audiovisuel, médias interactifs numériques et jeux, parcours post-production.</p>

            <p>Actuellement en recherche d'emploi : Développement C++ / Python, Développement d'environnement sur Unreal Engine, VFX, 3D.</p>
            </div>
        </div>
        </>

    const english = 
        <>
        <div className={styles.profil}>
            <img src={imageProfil} alt="cercle" />
            <div className={styles.paragraphe}>
		    <p>Passionate about computer science, music and video games, 3D modeling and animation, editing, programming, piano... I am a jack of all trades</p>

		    <p>I got my Master's Degree in post-production, VFX and interactive media.</p>

			<p>Currently looking for a job : C++ / Python Programmer, Software dev, VFX, 3D.</p>
            </div>
        </div>
        </>

    if (isEnglish) {
        return english;
    }
    else {
        return french;
    }
}

export default Profil