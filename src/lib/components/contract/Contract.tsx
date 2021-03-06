import React, { useState, useEffect } from 'react';
import { ethers, providers } from 'ethers';
import { MetaMaskInpageProvider } from "@metamask/providers";
import UnitTrust from '../../abi/UnitTrust.json';
import { Button } from '../../styles/components/ui'


export const contractAddress = '0x2582B38c522D776b4a68726e941617eCc3259241'

export const getContract = (ethereum: MetaMaskInpageProvider) => {
  const provider = new ethers.providers.Web3Provider(ethereum as any);
  const signer = provider.getSigner();
  const connectedContract: ethers.Contract = new ethers.Contract(contractAddress, UnitTrust.abi, signer);
  return connectedContract;
}

export const getUnitPrice = async () => {
  try {
    const { ethereum } = window;
    const connectedContract = getContract(ethereum)
    const price = await connectedContract.getUnitPrice();
    console.log(price);
    return price;
  }
  catch (error) {
    console.log(error);
  }
}

export const getTotalUnits = async () => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const connectedContract = getContract(ethereum)
      const getUnits = await connectedContract.getTotalUnits();
      console.log('units: ', BigInt(getUnits))
      return BigInt(getUnits)
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
}

export const getRemainingUnits = async () => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const connectedContract = getContract(ethereum)
      const getUnits = await connectedContract.getRemainingUnits();
      console.log('units: ', BigInt(getUnits))
      return getUnits
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
}

export const getAccount = async () => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const connectedContract = getContract(ethereum)
      const account: Investor = await connectedContract.getInvestor('0x4A079D4417b522762C72dB9643234FCC4683a40E');
      console.log('account: ', account)
      return account
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
}

export const getInvestor = async (address: string) => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const connectedContract = getContract(ethereum)
      const getInvestor: Investor = await connectedContract.getInvestor(address);
      console.log('investor: ', getInvestor)
      return getInvestor
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
}

export const purchaseUnits = async (amount: number) => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const purchaseAmount = amount + 0.01
      const connectedContract = getContract(ethereum)
      const options = { value: ethers.utils.parseEther(`${purchaseAmount}`) }
      console.log('options: ', options)
      await connectedContract.purchaseUnit(amount, options);
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
}

export const postUnits = async (amount: number, salePrice: string) => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const connectedContract = getContract(ethereum)
      await connectedContract.postUnit(amount, ethers.utils.parseEther(salePrice));
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
}

export const transferUnits = async (address: string, amount: string, value: number) => {
  try {
    const { ethereum } = window;
    const cost = `${value + 0.01}`
    if (ethereum) {
      const connectedContract = getContract(ethereum)
      await connectedContract.transferUnit(address, amount, { value: ethers.utils.parseEther(cost)});
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
}

export const investorWithdraw = async (amount: string) => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const connectedContract = getContract(ethereum)
      await connectedContract.investorWithdraw(ethers.utils.parseEther(amount));
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
}

export const closeUnitTrust = async () => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const connectedContract = getContract(ethereum)
      await connectedContract.closeUnitTrust(ethers.utils.parseEther("1.01"));
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
}

export default function Contract() {
  const [totalUnits, setTotalUnits] = useState<bigint | string>('')
  const [remainingUnits, setRemainingUnits] = useState<bigint | string>('')

  useEffect(() => {
    (async () => {
      const total = await getTotalUnits()
      const remaining = await getRemainingUnits()
      setTotalUnits(total)
      setRemainingUnits(remaining)
    })()
  }, [])

  return (
    <div>
      <p>{`Total Units: ${totalUnits}`}</p>
      <p>{`Remaining Units: ${remainingUnits}`}</p>
      <Button onClick={() => getTotalUnits()}>Get Total Units</Button>
      <Button onClick={() => getAccount()}>Get Investor</Button>
      <Button onClick={() => getUnitPrice()}>Get Unit Price</Button>
      <Button onClick={() => getRemainingUnits()}>Get Remaining Units</Button>
      <Button onClick={() => purchaseUnits(1)}>Purchase Units</Button>
      <Button onClick={() => postUnits(1, '1.10')}>Post Units</Button>
      <Button onClick={() => closeUnitTrust()}>Close Unit Trust</Button>
    </div>
  )
}