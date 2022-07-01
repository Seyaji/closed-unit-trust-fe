import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { contractAddress } from "../contract"

const Metamask: React.FC = () => {

  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState<string | SignerWithAddress>("");
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
    }
  }, []);

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res: SignerWithAddress[] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountsChanged(res[0]);
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
      }
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountsChanged = async (newAccount: SignerWithAddress) => {
    setAccount(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
      console.log(balance);
      // @ts-ignore
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
  };

  const Connect = () => {
    return (
      <button onClick={() => connectHandler()}>Connect Metamask</button>
    )
  }

  return (
    <div>
      {account !== "" ? <p>Balance: {balance} ETH</p> : <Connect />}
      
    </div>
  );
}
export default Metamask