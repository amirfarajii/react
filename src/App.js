import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Swap from "./Pages/Swap";
import Asset1 from "./Components/ComponentsMarket/Asset1/Asset1";
import Asset2 from "./Components/ComponentsMarket/Asset2/Asset2";
import Asset3 from "./Components/ComponentsMarket/Asset3/Asset3";
import Asset4 from "./Components/ComponentsMarket/Asset4/Asset4";
import Asset5 from "./Components/ComponentsMarket/Asset5/Asset5";
import Markets from "./Pages/Markets";
import './App.css'
const App = () => {
  return (
    <>
      
        <Router>
          <Routes>
            <Route className path="/" exact element={<Home />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/markets/" element={<Markets />}>
              <Route path="" element={<Asset1 />} />
              <Route path="2" element={<Asset2 />} />
              <Route path="3" element={<Asset3 />} />
              <Route path="4" element={<Asset4 />} />
              <Route path="5" element={<Asset5 />} />
            </Route>
          </Routes>
        </Router>
     
    </>
  );
};

export default App;
