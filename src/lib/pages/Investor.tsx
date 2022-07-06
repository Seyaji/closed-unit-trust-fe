import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import { ethers } from 'ethers'
import {
  getUnitPrice,
  getAccount,
  getInvestor,
  purchaseUnits,
  getRemainingUnits,
  transferUnits,
  postUnits,
  investorWithdraw
} from '../components/contract/Contract';
import { connectedAccount } from '../components/metamask/utils';
import { Button } from '../styles/components/ui';
import Page from '../styles/Page';

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
const Func = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  justify-content: start;
  border-radius: 5px;
  margin: 1rem;
  width: 300px;
  height: 360px;

  #funcHeading {
    font-family: 'Roboto';
    font-size: 1.5rem;
  }

  .accountDetails {
    width: 70%;
  }

  #heading {
    align-self: flex-start;
  }

  .inputs {
    align-self: center;
    width: 100%;
  }

  .controls {
    display: flex;
    flex-direction: row;
    margin-top: auto;
    justify-content: space-between;
  }

  #buttonDiv {
  }

  .funcInputs {
    margin-bottom: 1rem;
    font-size: 1rem;
    padding: .5rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.text};
    width: 100%;

    ::placeholder {
    opacity: .5;
    color: ${({ theme }) => theme.colors.text};
    }
  }

  .funcButton {
    justify-self: flex-end;
  }
`
type State = {
  [key: string]: string
}

export default function InvestorPage() {
  const [investor, setInvestor] = useState<void | Investor>(null)
  const [account, setAccount] = useState<void | Investor>(null)
  const [signer, setSigner] = useState<string>(null)
  const [unitPrice, setUnitPrice] = useState<string>(null)
  const [remainingUnits, setRemainingUnits] = useState<string>(null)
  const [balance, setBalance] = useState<string>(null);
  const [state, setState] = useState<State>({})

  const fundUnitPrice = <p>Fund Unit price: {unitPrice} Ether</p>
  const transferValue = +state?.marketUnits * (investor && +ethers.utils.formatEther(investor.salePrice._hex))

  useEffect(() => {
    (async () => {
      const inv = await getAccount().catch(console.error)
      const price = await getUnitPrice().catch(console.error)
      const fundUnits = await getRemainingUnits()
      const acc = await connectedAccount()
      setSigner(acc)
      setRemainingUnits(BigInt(fundUnits).toString())
      setAccount(inv)
      setUnitPrice(price ? ethers.utils.formatEther(price._hex) : 'error retrieving price')
    })()
  }, [])

  useEffect(() => {
    console.log(state?.unitsToBuy)
  }, [state])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  console.log(state)

  return (
    <Page>
      <div className="accountDetails">
        {account ? (
          <>
            <h2>Account Details</h2>
            <p>Connected Account: {signer}</p>
            <p>Cleared Balance: {ethers.utils.formatEther(account?.balance._hex)}</p>
            <p>Owned Units: {account?.ownedUnits + account?.saleUnits}</p>
            <p>Units for sale: {account?.saleUnits}</p>
          </>) : (<h2>Account Not Connected</h2>)}
      </div>
      <br />
      <h2>Contract Actions</h2>
      <Actions>
        <Func>
          <div className="heading">
            <span id="funcHeading">Buy Units</span>
            {fundUnitPrice}
            <p>Available units: {remainingUnits}</p>
          </div>
          <div className="inputs">
            <input className="funcInputs" name='buyUnits' onChange={handleChange} type="number" placeholder="Units to buy" />
          </div>
          <div className="controls">
            <Button className="funcButton" onClick={() => purchaseUnits(+state?.buyUnits)}>Buy</Button>
          </div>
          <p>Total cost: {+state?.buyUnits * +unitPrice || 0} Ether</p>
        </Func>
        <Func>
          <div className="heading">
            <span id="funcHeading">Post Units For Sale</span>
            <p>Fund Unit price: {unitPrice} Ether</p>
            <p>Available Units: {account && account?.saleUnits} </p>
          </div>
          <div className="inputs">
            <input className="funcInputs" name='postUnits' onChange={handleChange} type="number" placeholder="Number of units" />
            <input className="funcInputs" name='salePrice' onChange={handleChange} type="number" placeholder="Sale price" />
          </div>
          <div className="controls">
            <Button className="funcButton" onClick={() => postUnits(+state?.postUnits, state?.salePrice)}>Post to Market</Button>
          </div>
          <p>Total value: {+state?.postUnits * +state.salePrice || 0} Ether</p>
        </Func>
        <Func>
          <div className="heading">
            <span id="funcHeading">Buy Units From Market</span>
            <p>Unit price: {investor ? ethers.utils.formatEther(investor?.salePrice._hex) + ' Ether' : 'Enter Address'}</p>
            <p>Available Units: {investor ? investor?.saleUnits : 'Enter Address'}</p>
          </div>
          <div className="inputs">
            <input className="funcInputs" name='marketAddress' onChange={handleChange} type="string" placeholder="Address" />
            <input className="funcInputs" name='marketUnits' onChange={handleChange} type="number" placeholder="Number of units" />
          </div>
          <div className="controls">
            <Button className="funcButton" onClick={async () => setInvestor(await getInvestor(state.marketAddress))}>Get Price</Button>
            <Button className="funcButton" onClick={() => transferUnits(state.marketAddress, state.marketUnits, transferValue)}>Transfer</Button>
          </div>
          <p>Total value: { transferValue || 0} Ether</p>
        </Func>
        <Func>
          <div className="heading">
            <span id="funcHeading">Withdraw Balance</span>
            <p>Cleared Balance: {account && ethers.utils.formatEther(account?.balance._hex)}</p>
            <p>Withdraw cleared balance</p>
          </div>
          <div className="inputs">
            <input className="funcInputs" name='withdrawAmount' onChange={handleChange} type="number" placeholder="Amount to withdraw" />
          </div>
          <div className="controls">
            <Button className="funcButton" onClick={() => investorWithdraw(state.withdrawAmount)}>Withdraw</Button>
          </div>
          <p>Withdrawing: {state.withdrawAmount || 0} Ether</p>
        </Func>
      </Actions>
    </Page>
  )
}