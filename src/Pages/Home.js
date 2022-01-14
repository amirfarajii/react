import React from "react";
import Navbar from "../Components/ComponentsHome/Navbar";
import "../App.css";
import Homemain from "../Components/ComponentsHome/Homemain";
import Time from "../Components/ComponentsHome/Timer";
import Homemain2 from "../Components/ComponentsHome/Homemain2";
function Home() {
  return (
    <>
      <Navbar />
      <Homemain />
      <Homemain2 />
      
    </>
  );
}

export default Home;
