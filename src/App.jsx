import {Routes, Route, HashRouter } from "react-router-dom";

import { Accueil } from "./Pages/Accueil/Accueil";
import { createTheme, ThemeProvider } from "@mui/material";
import { StrictMode, useState } from "react";
import {Portfolio} from "./Pages/Portfolio/Portfolio";
import { Contact } from "./Pages/Contact";
import { Particles } from "./Pages/Particles";

import {LangContext} from "./LangContext"

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0B3954',
    },
    secondary: {
      main: '#4DA1A9',
    },
    background: {
      default: '#000000',
    },
    text: {
      primary: '#ffffff'
    },
  },
  typography: {
    fontFamily: 'Bahnschrift',
  },
});

function App() {

  const [isEnglish, setIsEnglish] = useState(false)

  return (
    <LangContext.Provider value={{isEnglish, setIsEnglish}}>
      <ThemeProvider theme={theme}>
        <HashRouter >
          <Routes primary={false}>
            <Route path="/" element={<Accueil />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Particles" element={<Particles />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </LangContext.Provider>
  );
}

export default App;
