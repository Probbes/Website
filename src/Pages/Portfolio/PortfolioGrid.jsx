import { Box, Card, CardActionArea, CardMedia, Grid } from "@mui/material";

import {useState, createContext, useContext} from "react";

import { LangContext } from "../../LangContext"

export const typeContext = createContext();

export function PortfolioGrid({}){

  const {isEnglish} = useContext(LangContext)

    const images = Object.fromEntries(
        Object.entries(import.meta.glob('/src/assets/portfolio/*.png', { eager: true, import: 'default' }))
          .map(([path, img]) => {
            const name = path.match(/\/([^/]+)\.png$/)[1]; // Extract filename without extension
            return [name, img];
          })
    );

    const portfolioData=(images,isEnglish)=>[
    {img:images["VRBA"],VFX:true,CS:true,isVideo:true,link:"https://youtube.com/embed/X4OcAk0U_eI",name:isEnglish?"XR Environment":"Environnement XR",tools:"Unreal Engine - C++"},
    {img:images["babiroussa"],VFX:true,CS:false,isVideo:true,link:"https://www.youtube.com/embed/i1fgaX7QyP0",name:isEnglish?"Photogrammetry":"Photogrammétrie",tools:"Reality Capture - Blender"},
    {img:images["peluche"],VFX:true,CS:false,isVideo:true,link:"https://www.youtube.com/embed/1od5GxeVlq8",name:isEnglish?"Live Action - Photogrammetry":"Live Action - Photogrammétrie",tools:"Nuke - Maya"},
    {img:images["stendhal"],VFX:true,CS:false,isVideo:true,link:"https://www.youtube.com/embed/gd77xjkBje8",name:isEnglish?"Game demo":"Démo Jeu",tools:"Unreal Engine - Blender"},
    {img:images["faussepub"],VFX:true,CS:false,isVideo:true,link:"https://www.youtube.com/embed/msE6TfVoAB4",name:isEnglish?"Advert INSA":"Pub INSA",tools:"Maya"},
    {img:images["gamejam"],VFX:true,CS:true,isVideo:true,link:"https://www.youtube.com/embed/uZVWiw6LW-M",name:"GameJam",tools:"Unreal Engine - Blender"},
    {img:images["masterVR"],VFX:true,CS:false,isVideo:true,link:"https://www.youtube.com/embed/mvxP22vQO3Q",name:isEnglish?"VR Environment":"Environnement VR",tools:"Unreal Engine"},
    {img:images["opengl"],VFX:false,CS:true,isVideo:true,link:"https://www.youtube.com/embed/BH0Y4TR3i1E",name:isEnglish?"Render/Game Engine":"Moteur de jeu/rendu",tools:"C++"},
    {img:images["echoweb"],VFX:false,CS:true,isVideo:false,link:images["echoweb"],name:isEnglish?"Website":"Site Internet",tools:"Javascript - Firebase"},
    {img:images["generique"],VFX:true,CS:false,isVideo:true,link:"https://www.youtube.com/embed/us3TAqTIHTQ",name:isEnglish?"3D Opening":"Générique 3D",tools:"Blender - After Effects"},
    {img:images["T2"],VFX:false,CS:true,isVideo:true,link:"https://www.youtube.com/embed/ZXlseIvIKRw",name:isEnglish?"AR App":"Application AR",tools:"Java"},
    {img:images["hyper"],VFX:true,CS:false,isVideo:false,link:images["hyper"],name:isEnglish?"3D Render":"Rendu 3D",tools:"Maya"},
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    return (
      <Box sx={{paddingBottom:"4vh", marginTop:"2vh", fontFamily:"fontFamily"}}>
        <Grid spacing={4} container direction="row" sx={{justifyContent:"center", alignItems:"center"}}>
          {portfolioData(images, isEnglish).map((item, index) => (

              <Grid key={index} >
              <Card sx={{width: "20em", position:"relative", overflow:"visible", "&:hover .overlay":{opacity:1}}} >
                <CardActionArea onClick={() => setActiveIndex(index)}>
                  <CardMedia component="img" image={item.img} key={item.name} sx={{ aspectRatio:"16/9"}}/>
                </CardActionArea>

                {/* Hover */}
                <Box className="overlay" 
                      sx={{position:"absolute", zIndex:"1", inset:"0", display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column", pointerEvents: "none", opacity:0, transition:"opacity 0.3s ease",
                        textAlign:"center", fontSize:"1em", textShadow:"2px 2px 3px black" }}>
                  <h1 style={{margin:"2px"}}>{item.name}</h1><h3 style={{margin:"1px"}}>{item.tools}</h3>
                </Box>
              </Card>
              </Grid>
          ))}
        </Grid>
                {/* Fullscreen overlay */}
        {activeIndex !== null && (
          <Box sx={{bgcolor: "rgba(0,0,0,0.7)", position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, backdropFilter: "blur(4px)"}}
            onClick={() => setActiveIndex(null)}>
            <Box sx={{width: "75vw", height: "auto", bgcolor: "#111", borderRadius: 2, overflow: "hidden", position: "relative", aspectRatio:"16/9"}}
              onClick={(e) => e.stopPropagation()}>
              {portfolioData(images, isEnglish)[activeIndex].isVideo ? (
                <iframe width="100%" height="100%" src={portfolioData(images, isEnglish)[activeIndex].link} allowFullScreen />) 
                : 
                (<img src={portfolioData(images, isEnglish)[activeIndex].link} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>)
              }
            </Box>
          </Box>
        )}
      </Box>
    );
}