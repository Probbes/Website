import { Box, Button} from "@mui/material";
import { styled } from "@mui/material/styles";

import drapeauEN from "/src/assets/drapeauEN.png"
import drapeauFR from "/src/assets/drapeauFR.png"
import { useNavigate } from "react-router-dom";
import { LangContext } from "../LangContext";
import { useContext } from "react";

export function Header() {

  const navigate = useNavigate()

  const CustomButton = styled(Button)(({ theme }) => ({
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
         backgroundColor: "#D7E8BA"
      },
      width:"12rem",
      height:"8vh",
      padding:"1em",
      margin:"0.2em",
      fontSize:"1.4rem",
      fontWeight:"bold"
  }));

  const {isEnglish, setIsEnglish} = useContext(LangContext)

  return(
        <Box sx={{bgcolor:"primary.main", minHeight:"15vh", fontSize:"2.5em", textAlign:"center", display:"flex", alignItems:"center", justifyContent:"space-around", flexWrap:"wrap"}}> 
          <Box sx={{marginRight:"1vw", marginLeft:"1vw", fontSize:"2em", fontFamily:"fontFamily", fontWeight:"regular"}}>
            Antoine Megevand
          </Box>
          <Box>
            <CustomButton variant="contained" onClick={() => navigate('/')}>{isEnglish ? "Home" : "Accueil"}</CustomButton>
            <CustomButton variant="contained" onClick={() => navigate('/Portfolio')}>Portfolio</CustomButton>
            <CustomButton variant="contained" onClick={() => navigate('/Contact')}>Contact</CustomButton>
            <CustomButton variant="contained" onClick={() => setIsEnglish(!isEnglish)} sx={{width:"5em"}}>{
              isEnglish ? <img src={drapeauEN} style={{height:"33px"}}/> : <img src={drapeauFR} style={{height:"33px"}}/>
            }</CustomButton>
          </Box>
        </Box>
  );
}