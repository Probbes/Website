import { Box, Container, Grid } from "@mui/material";
// import { Canvas, useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";

import { LangContext } from "../../LangContext";

import { WordAnimation } from "./WordAnimation";
// import {Cube} from './Objects'
import videoweb from "/VideoWeb.mp4"

import {Header} from "/src/Pages/Header.jsx"

export function Accueil() {
  /* Language logic */
  const {isEnglish} = useContext(LangContext)

  /* 3D */
  // function RotatingAntoine() {
  //   const ref = useRef();

  //   useFrame(() => {
  //     ref.current.rotation.y += 0.02;
  //   });

  //   return (
  //     <mesh ref={ref} position={[0,-2,0]} rotation={[0, -3.14/2, 0]} scale={[0.8,0.8,0.8]}>
  //       <Cube/>
  //     </mesh>
  //   );
  // }

  return(
    <Box sx={{bgcolor:"background.default", color:"text.primary", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "100vh"}} >

      {/* Header */}
      <Box sx={{minHeight:"100vh", display:"flex", flexDirection:"column"}}>
        <Box sx={{flex:1, position:"relative"}}> 
          <video autoPlay loop muted style={{width:"100%", height:"100%", objectFit:"cover", position:"absolute"}}> <source src={videoweb} type="video/mp4" /></video>
            <Box sx={{position:"absolute", zIndex:"1", inset:"0", display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column", pointerEvents: "none",
              textAlign:"center", fontSize:{xs:"0.6em", sm:"1.5em"}, textShadow:"1px 1px 4px black", fontFamily:"fontFamily" }}>
              <WordAnimation/> {/* Separate component to not re-render three-js scenes */}
            </Box>
        </Box>
        <Header />
      </Box>
    </Box>
  );
}