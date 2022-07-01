import React, { useState } from 'react';
import { ethers, providers } from 'ethers';
import UnitTrust from '../abi/UnitTrust.json';
import { MetaMaskInpageProvider } from "@metamask/providers";


export const contractAddress = '0xfcfEd6F6494db7975Dd7D744f33Dad73175b4BaB'

export const Contract: React.FC = () => {
  const [totalUnits, setTotalUnits] = useState('')

  const getContract = ( ethereum: MetaMaskInpageProvider ) => {
    const provider = new ethers.providers.Web3Provider(ethereum as any);
    const signer = provider.getSigner();
    const connectedContract: ethers.Contract = new ethers.Contract(contractAddress, UnitTrust.abi, signer);
    return connectedContract;
  }

  const getTotalUnits = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const connectedContract = getContract(ethereum)
        const getUnits = await connectedContract.getTotalUnits();
        console.log('units: ', BigInt(getUnits))
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getRemainingUnits = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const connectedContract = getContract(ethereum)
        const getUnits = await connectedContract.getRemainingUnits();
        console.log('units: ', BigInt(getUnits))
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getInvestor = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const connectedContract = getContract(ethereum)
        const getInvestor = await connectedContract.getInvestor('0x4A079D4417b522762C72dB9643234FCC4683a40E');
        console.log('investor: ', getInvestor)
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const purchaseUnits = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const connectedContract = getContract(ethereum)
        const options = {value: ethers.utils.parseEther("1.01")}
        await connectedContract.purchaseUnit(1, options);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const postUnits = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const connectedContract = getContract(ethereum)
        await connectedContract.postUnit(1, ethers.utils.parseEther("2.01"));
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={() => getTotalUnits()}>Get Total Units</button>
      <button onClick={() => getInvestor()}>Get Investor</button>
      <button onClick={() => getRemainingUnits()}>Get Remining Units</button>
      <button onClick={() => purchaseUnits()}>Purchase Units</button>
      <button onClick={() => postUnits()}>Post Units</button>
      <p>{totalUnits}</p>
    </div>
  )
}