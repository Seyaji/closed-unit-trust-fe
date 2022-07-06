import { ethers } from 'ethers'
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";


export const connectedAccount = async () => {
  if (window.ethereum) {
    try {
      const accounts: string[] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0]
    } catch (err) {
      console.error(err);
    }
  }
}