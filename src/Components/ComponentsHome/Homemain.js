import React from "react";
import { Link } from "react-router-dom";
import Time from "./Timer";
import "./Homemain.css";


const Homemain = () => {
  return (
    <>
      <div className="homemain-container">
        <div className="back-img">
          <h className="header-top">PLAY TO EARN</h>
          <Time />
          
          <div className="gradient">
          </div>   
        </div>
      </div>
    </>
  );
};

export default Homemain;
