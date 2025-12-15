import { Box, Container, Grid } from "@mui/material";
import { Canvas, useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { LangContext } from "../../LangContext";

import { WordAnimation } from "./WordAnimation";
import CustomCard from "./CustomCard";
import {Cube} from './Objects'
import videoweb from "/VideoWeb.mp4"
import imgEI from "/src/assets/portfolio/VRBA.png"
import img3D from "/src/assets/gorilla.png"
import imgPG from "/src/assets/photogram.png"
import imgWD from "/src/assets/webdev.png"
import BG from "/src/assets/BG.png"

import {Header} from "/src/Pages/Header.jsx"

export function Accueil() {
  /* Language logic */
  const {isEnglish} = useContext(LangContext)

  /* 3D */
  function RotatingAntoine() {
    const ref = useRef();

    useFrame(() => {
      ref.current.rotation.y += 0.02;
    });

    return (
      <mesh ref={ref} position={[0,-2,0]} rotation={[0, -3.14/2, 0]} scale={[0.8,0.8,0.8]}>
        <Cube/>
      </mesh>
    );
  }

  return(
    <Box sx={{bgcolor:"background.default", color:"text.primary", backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "100vh"}} >

      {/* Header */}
      <Box sx={{minHeight:"100vh", display:"flex", flexDirection:"column"}}>
        <Box sx={{flex:1, position:"relative"}}> 
          <video autoPlay loop muted style={{width:"100%", height:"100%", objectFit:"cover", position:"absolute"}}> <source src={videoweb} type="video/mp4" /></video>
            <Box sx={{position:"absolute", zIndex:"1", inset:"0", display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column", pointerEvents: "none",
              textAlign:"center", fontSize:"1em", textShadow:"1px 1px 4px black", fontFamily:"fontFamily" }}>
              <WordAnimation/> {/* Separate component to not re-render three-js scenes */}
            </Box>
        </Box>
        <Header />
      </Box>

      {/* Body */}
      <Container maxWidth="xl" style={{paddingLeft:"0px", paddingRight:"0px", zIndex:"2"}}>
      <Box sx={{paddingTop:"2vh"}}>
        <Box display="flex" justifyContent="center">
        {/* <Button variant="contained" sx={{backgroundColor:"secondary.main", "&:hover": {backgroundColor: "#D7E8BA"}, width:"10vw", padding:"1em", margin:"2vw", fontSize:"1.2rem", fontWeight:"bold"}}>
            3D
          </Button> */}
        </Box>

        <Grid container rowSpacing={1} columnSpacing={5} sx={{justifyContent: "space-evenly", alignItems: "center"}}>
          <Grid size={{xs: 12, sm: 5}} sx={{margin:"1vw"}}>
            <CustomCard name="3D" img={img3D}/>
          </Grid>
          <Grid size={{xs: 12, sm: 5}} sx={{margin:"1vw"}}>
            <CustomCard name={isEnglish ? "Immersive Environnements" : "Environnements Immersifs"}  img={imgEI}/>
          </Grid>
          <Grid size={{xs: 12, sm: 5}} sx={{margin:"1vw"}}>
            <CustomCard name={isEnglish ? "Photogrammetry" : "Photogrammétrie"} img={imgPG}/>
          </Grid>
          <Grid size={{xs: 12, sm: 5}} sx={{margin:"1vw"}}>
            <CustomCard name="Web" img={imgWD}/>
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{height:'500px', width:'500px'}}>
        <Canvas fallback={<div>Sorry no WebGL supported!</div>} >
          <ambientLight intensity={1} />
          <directionalLight color="white" position={[0,0,5]} intensity={1}/>
          <RotatingAntoine />
        </Canvas>
      </Box> */}
    </Container>
    </Box>
  );
}