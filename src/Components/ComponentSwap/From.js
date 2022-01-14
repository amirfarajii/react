import React, { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import "./Form.css";


const From = (props) => {
  const [amount, setAmount] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div className="form-box">
  
      <h3 className="form-header">KVL ICO:</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label className="label">
            <div className="logo-bnb"> </div>
            &nbsp;&nbsp;BNB:
            <div className="balance-bnb">balance: {props.balance}</div>
          </label>
          <input
            className="form-input"
            value={amount}
            type="number"
            placeholder="0.0"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <div className="icon-change">
            <i className="icon-bar" class="fas fa-chevron-circle-down"></i>
          </div>
          <div className="form-result">
            <h1>{amount * 120}</h1>
          </div>
          <div className="price">
            price:&nbsp;&nbsp; 0.00833333333 BNB per KVL{" "}
          </div>
        </div>
      </form>
    </div>
  );
};

export default From;
