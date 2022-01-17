import { ethers } from "ethers";
import { useState } from "react";
import Web3Modal from "web3modal";
import Form from "./From";
import "./Connect.css";
const providerOptions = {
  // default connect to Metamask
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: false, // optional
  providerOptions, // required
});
const ConnectTo = () => {
  //set connection handler
  const [account, setAccount] = useState({ connected: false });
  const [chainId, setChainId] = useState(null);
  const [provider, setProvider] = useState(null);
  const ConnectWallet = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      const Web3Modal = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(Web3Modal);
      const chainIdHandler = async () => {
        const provider = new ethers.providers.Web3Provider(Web3Modal);
        const { chainId } = await provider.getNetwork();
        return setChainId(chainId);
      };
      //setAccountHandler
      const setAccountFromProvider = async () => {
        const signer = provider.getSigner(0);
        const address = await signer.getAddress();
        const balance = await signer.getBalance();

        setAccount({
          connected: true,
          provider,
          address,
          signer,
          balance: ethers.utils.formatEther(balance).slice(0, 7),
        });
      };
      chainIdHandler();
      setAccountFromProvider();
      setProvider(provider);

      Web3Modal.on("accountsChanged", () => {
        setAccountFromProvider();
        window.location.reload();
      });
      Web3Modal.on("chainChanged", () => {
        chainIdHandler();
      });
    } else {
      alert("Please install MetaMask!");
      return(
        <h1>Please Install MetaMask!</h1>
      )
    }
  };
  if (!account.connected) {
    return (
      <div>
        <button onClick={ConnectWallet} className="btn-wallet">
          Connect Wallet
        </button>
        <Form />
      </div>
    );
  } else if (chainId == 56) {
    return (
      <div className="contain-connect">
        <div className="address">
          <i class="fas fa-wallet"></i>
          <p1 className="address-account">
            {account.address.slice(0, 4) + "..." + account.address.slice(-4)}
          </p1>
        </div>
        <div className="chain">
          <i class="fas fa-check-square"></i>
          <p1 className="chain">BSC Mainnet</p1>
        </div>

        <Form balance={account.balance} />
  
      </div>
    );
  } else {
    return (
      <div className="wrong-chain">
        <i class="fas fa-exclamation-triangle">
          <h1>Worng Network</h1>
        </i>
        <p1>Please change your Network to Binance Smart Chain</p1>
      </div>
    );
  }
};

function Connect() {
  return (
    <div className="contain">
      <ConnectTo />
    </div>
  );
}
export default Connect;
