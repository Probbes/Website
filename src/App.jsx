import { HashRouter, Routes, Route } from "react-router-dom"

import { Home } from "./Pages/Home/Home"
import { Project1 } from "./Pages/ProjectThreeJs/Project1"

function App() {

  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Project1" element={<Project1/>} />
      </Routes>
    </HashRouter>
  )  
}

export default App
