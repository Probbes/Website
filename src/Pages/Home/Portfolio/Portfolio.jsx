import styles from "./Portfolio.module.css"

import Card from "./PortfolioCard"

import React, {useState, createContext} from "react";

export const typeContext = createContext();

function Portfolio({isEnglish}){

    const images = Object.fromEntries(
        Object.entries(import.meta.glob('/src/assets/Home/*.png', { eager: true, import: 'default' }))
          .map(([path, img]) => {
            const name = path.match(/\/([^/]+)\.png$/)[1]; // Extract filename without extension
            return [name, img];
          })
      );

      const [activeButton, setActiveButton] = useState(0);

      const [type, setType] = useState(0);

    return (
        <>
        <h1>Portfolio</h1>

        <div className={styles.demo}>
          <div className={styles.demoVideo}><iframe allowFullScreen src="https://www.youtube.com/embed/Mvz_RclYmYw"></iframe> </div>
					<div className={styles.demoGithub}><a href="https://github.com/Probbes"><img src={images["github"]} /></a> </div>
        </div>

        <div className={styles.buttonChoice}>
          <button key={0} onClick={() => {setActiveButton(0); setType(0);}} className={activeButton === 0 ? styles.activeButton : styles.inactiveButton}>{isEnglish ? "All" : "Tout"}</button>
          <button key={1} onClick={() => {setActiveButton(1); setType(1);}} className={activeButton === 1 ? styles.activeButton : styles.inactiveButton}>3D</button>
          <button key={2} onClick={() => {setActiveButton(2); setType(2);}} className={activeButton === 2 ? styles.activeButton : styles.inactiveButton}>{isEnglish ? "Programming" : "Programmation"}</button>
        </div>

        <div className={styles.PortfolioContainer}>

            <typeContext.Provider value={type}>
              
            <Card img={images["VRBA"]} VFX={true} CS={true} isVideo={true} link="https://youtube.com/embed/X4OcAk0U_eI" name={isEnglish ? "XR Environment":"Environnement XR"} tools="Unreal Engine - C++"/>
            <Card img={images["babiroussa"]} VFX={true} isVideo={true} link="https://www.youtube.com/embed/i1fgaX7QyP0" name={isEnglish ? "Photogrammetry" : "Photogrammétrie"} tools="Reality Capture - Blender"/>
            <Card img={images["peluche"]} VFX={true} isVideo={true} link="https://www.youtube.com/embed/1od5GxeVlq8" name={isEnglish ? "Live Action - Photogrammetry" : "Live Action - Photogrammétrie"} tools="Nuke - Maya"/>
            <Card img={images["stendhal"]} VFX={true} isVideo={true} link="https://www.youtube.com/embed/gd77xjkBje8" name={isEnglish ? "Game demo" : "Démo Jeu"} tools="Unreal Engine - Blender"/>
            <Card img={images["faussepub"]} VFX={true} isVideo={true} link="https://www.youtube.com/embed/msE6TfVoAB4" name={isEnglish ? "Advert INSA" : "Pub INSA"} tools="Maya"/>
            <Card img={images["gamejam"]} VFX={true} CS={true} isVideo={true} link="https://www.youtube.com/embed/uZVWiw6LW-M" name="GameJam" tools="Unreal Engine - Blender"/>
            <Card img={images["masterVR"]} VFX={true} isVideo={true} link="https://www.youtube.com/embed/mvxP22vQO3Q" name={isEnglish ? "VR Environment" : "Environnement VR"} tools="Unreal Engine"/>
            <Card img={images["opengl"]} CS={true} isVideo={true} link="https://www.youtube.com/embed/BH0Y4TR3i1E" name={isEnglish ? "Render/Game Engine" : "Moteur de jeu/rendu"} tools="C++"/>
            <Card img={images["echoweb"]} CS={true} link={images["echoweb"]} name={isEnglish ? "Website" : "Site Internet"} tools="Javascript - Firebase"/>
            <Card img={images["generique"]} VFX={true} isVideo={true} link="https://www.youtube.com/embed/us3TAqTIHTQ" name={isEnglish ? "3D Opening" : "Générique 3D"} tools="Blender - After Effects"/>
            <Card img={images["T2"]} CS={true} isVideo={true} link="https://www.youtube.com/embed/ZXlseIvIKRw" name={isEnglish ? "AR App" : "Application AR"} tools="Java"/>
            <Card img={images["houdini"]} VFX={true} isVideo={true} link="https://www.youtube.com/embed/xvSWXIi5dlk" name={isEnglish ? "Water Simulation" : "Simulation d'eau"} tools="Houdini"/>
            <Card img={images["hyper"]} VFX={true} link={images["hyper"]} name={isEnglish ? "3D Render" : "Rendu 3D"} tools="Maya"/>
            <Card img={images["voeu"]} VFX={true} isVideo={true} link="https://www.youtube.com/embed/t-hHf6Wsw4Q" name={isEnglish ? "3D Animation" : "Animation 3D"} tools="Maya"/>
            <Card img={images["mocap"]} VFX={true} isVideo={true} link="https://www.youtube.com/embed/PpDBDq4i-7I" name="Motion Capture" tools="Blender"/>
            <Card img={images["morrowind"]} VFX={true} isVideo={true} link="https://www.youtube.com/embed/2JLRMKNixOQ" name={isEnglish ? "3D Animation" : "Animation 3D"} tools="Blender"/>

            </typeContext.Provider>
        </div>
        </>
    );
}

export default Portfolio