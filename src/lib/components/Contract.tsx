import React, { useState } from 'react';
import { ethers, providers } from 'ethers';
import UnitTrust from '../abi/UnitTrust.json';


export const contractAddress = '0xfcfEd6F6494db7975Dd7D744f33Dad73175b4BaB'

export const Contract: React.FC = () => {
  const [totalUnits, setTotalUnits] = useState('')
  const getTotalUnits = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum as any);
        const signer = provider.getSigner();
        const connectedContract: ethers.Contract = new ethers.Contract(contractAddress, UnitTrust.abi, signer);

        const getUnits = await connectedContract.getTotalUnits();

        console.log('units: ', BigInt(getUnits))

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
      <p>{totalUnits}</p>
    </div>
  )
}