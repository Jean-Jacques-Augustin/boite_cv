import React from "react";
import "./styles/App.css";
import "./styles/global.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Experience from "./pages/experience";
import Formation from "./pages/formation";
import Contact from "./pages/contact";

function App() {
     return (
          <div className="App">
               <Navbar />
               <Routes>
                    <Route index element={<Home />} />
                    <Route path="/formation" element={<Formation />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/contact" element={<Contact />} />
               </Routes>
          </div>
     );
}

export default App;
