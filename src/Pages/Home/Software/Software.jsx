import Card from "./SoftwareCard"

import styles from "./Software.module.css"

function Software({isEnglish}){
    const images = Object.fromEntries(
        Object.entries(import.meta.glob('/src/assets/Home/logo/*.png', { eager: true, import: 'default' }))
          .map(([path, img]) => {
            const name = path.match(/\/([^/]+)\.png$/)[1]; // Extract filename without extension
            return [name, img];
          })
      );

    return (
        <>
        <h1>{isEnglish ? "Tools used" : "Outils informatiques"}:</h1>
        <div className={styles.SoftwareContainer}>
        <Card   title={isEnglish ? "Editing" : "Montage"} 
                names={["Premier Pro", "Davinci Resolve", "Media Composer", "Final Cut"]} 
                images={[images["premierpro"], images["davinci"], images["mediacomposer"], images["finalcut"]]}
        />
        <Card   title="3D" 
                names={["Blender", "Unreal Engine", "Maya", "Houdini", "3DS max", "Substance Painter", "Substance Designer", "Reality Capture"]} 
                images={[images["blender"], images["unreal"], images["maya"], images["houdini"], images["3dsmax"], images["painter"], images["designer"], images["realitycapture"]]}
        />
        <Card   title="Compositing" 
                names={["Nuke", "After Effects", "Photoshop"]} 
                images={[images["nuke"], images["aftereffects"], images["photoshop"],]}
        />
        <Card   title="Audio" 
                names={["ProTools", "FL Studio"]} 
                images={[images["protools"], images["flstudio"]]}
        />
        <Card   title={isEnglish ? "Programming language" : "Programmation" }
                names={["Python", "C++", "C","React", "HTML/CSS","Javascript", "LUA", "Java"]} 
                images={[images["python"], images["c++"], images["c"], images["react"], images["css"], images["javascript"], images["lua"],images["java"]]}
        />
        <Card   title={isEnglish ? "Office software" : "Bureautique"} 
                names={["Libre Office", "Open Office", "Microsoft Office"]} 
                images={[images["libreoffice"], images["openoffice"], images["office"]]}
        />
        </div>
        </>
    );
}

export default Software