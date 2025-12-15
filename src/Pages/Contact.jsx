import { Box, Container } from "@mui/material";

import {Header} from "/src/Pages/Header.jsx"
import BG from "/src/assets/BG.png"

export function Contact() {
    

  return(
    <Box sx={{bgcolor:"background.default", color:"text.primary", fontFamily:"fontFamily", backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "100vh"}} >  
        <Header />
        <Box sx={{height:"100vh", display:"flex", justifyContent:"center", fontSize:{xs:"1em", sm:"2em"}}}>
            <Box sx={{height:"60vh", width:"60vw", bgcolor:"primary.main", margin:"10vh", padding:"1vh", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", justifyContent:"center", gap:10,
              border:5, borderColor:"secondary.main", borderRadius:10
            }}>
                <div>E-mail : 
                  {/* <a href="megevand.antoine@gmail.com" style={{color:"#4DA1A9"}}> */}
                     <> megevand.antoine@gmail.com</>
                    {/* </a> */}
                </div>
                <div>Linkedin : <a href="https://www.linkedin.com/in/antoine-megevand-204261244" style={{color:"#4DA1A9"}}>www.linkedin.com/in/antoine-megevand-204261244</a></div>
                {/* <div>Malt : <a style={{color:"#4DA1A9"}}>link.com</a></div> */}
            </Box>
        </Box>
    </Box>
  );
}