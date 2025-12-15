import {PortfolioGrid} from "./PortfolioGrid"
import {Header} from "/src/Pages/Header.jsx"
import { Box, Container } from "@mui/material"
import { useContext } from "react"

import { LangContext } from "../../LangContext"
import imageProfil from "/src/assets/photo_profil.png"
import BG from "/src/assets/BG.png"
import github from "/src/assets/github.png"

export function Portfolio() {

  const {isEnglish} = useContext(LangContext)

  return(
    <Box sx={{bgcolor:"background.default", color:"text.primary", backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "100vh"}} >  
      <Header />
      <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"2vh"}}>
        <Box sx={{width:{xs:"90%", sm:"60vw"}, bgcolor:"primary.main", padding:"10px", display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", marginBottom:"3vh", border:5, borderColor:"secondary.main", borderRadius:5, }} >
           <img src={imageProfil} alt="cercle" style={{height:"35vh"}}/>
           <Box sx={{width:{xs:"80%", sm:"40%"}, paddingLeft:"6vw", fontFamily:"fontFamily", fontSize:{xs:"1.2em", sm:"1.5em"}}}>
            {isEnglish ? 
            <>
            <p>Development of immersive environnements, web development, creation of 3D images and animations, VFX for live-action, music composition, video editing...</p>
            <p>I work across all these disciplines, my versatility allows me to deliver a wide range of high-quality audiovisual projects</p>
            </>
            :
            <>
            <p>Développement d'environnements immersifs, développement web, création d'images et d'animations 3D, VFX pour live-action, composition musicale, montage vidéo...  </p>
            <p>Je touche à tout, ma polyvalence me permet de réaliser une large gamme de projets audiovisuels de haute qualité.</p>
            </>
          }
           </Box>
        </Box>
        <Box sx={{width:{xs:"90%", sm:"60vw"}, bgcolor:"primary.main", border:5, borderColor:"secondary.main", borderRadius:5}}>
          <Box sx={{display:"flex", justifyContent:"space-evenly", alignItems:"center", marginBottom:"8vw", marginTop:"4vw", flexDirection:{xs:"column", sm:"row"}, gap:{xs:"10vw", sm:"2vw"}}}>
              <iframe style={{width:"70%", height:"auto", aspectRatio:"16/9", border:0}} allowFullScreen src="https://www.youtube.com/embed/Mvz_RclYmYw"></iframe>
              <a style={{width:"20%"}} href="https://github.com/Probbes"><img style={{width:"100%"}} src={github} /></a>
          </Box>

          <PortfolioGrid isEnglish={isEnglish}/>
        </Box>
      </Box>
    </Box>
  );
}