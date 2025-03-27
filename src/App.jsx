import { HashRouter, Routes, Route } from "react-router-dom"

import { Home } from "./Pages/Home/Home"
import { Project1 } from "./Pages/ProjectThreeJs/Project1"
import Lang from "./Pages/WorldLang/Lang"

function App() {

  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Project1" element={<Project1/>} />
        <Route path="/Lang" element={<Lang/>} />
      </Routes>
    </HashRouter>
  )  
}

export default App
