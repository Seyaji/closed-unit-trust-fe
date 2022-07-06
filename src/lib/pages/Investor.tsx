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
import { Button, Action } from '../styles/components/ui';
import Page from '../styles/Page';

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
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
      <div>
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
        <Action>
          <div className="heading">
            <span id="actionHeading">Buy Units</span>
            {fundUnitPrice}
            <p>Available units: {remainingUnits}</p>
          </div>
          <div className="inputs">
            <input className="actionInputs" name='buyUnits' onChange={handleChange} type="number" placeholder="Units to buy" />
          </div>
          <div className="controls">
            <Button onClick={() => purchaseUnits(+state?.buyUnits)}>Buy</Button>
          </div>
          <p>Total cost: <span className='highlight'> {+state?.buyUnits * +unitPrice || 0} Ether </span></p>
        </Action>
        <Action>
          <div className="heading">
            <span id="actionHeading">Post Units For Sale</span>
            <p>Fund Unit price: {unitPrice} Ether</p>
            <p>Available Units: {account && account?.saleUnits} </p>
          </div>
          <div className="inputs">
            <input className="actionInputs" name='postUnits' onChange={handleChange} type="number" placeholder="Number of units" />
            <input className="actionInputs" name='salePrice' onChange={handleChange} type="number" placeholder="Sale price" />
          </div>
          <div className="controls">
            <Button onClick={() => postUnits(+state?.postUnits, state?.salePrice)}>Post to Market</Button>
          </div>
          <p>Total value: <span className='highlight'> {+state?.postUnits * +state.salePrice || 0} Ether </span> </p>
        </Action>
        <Action>
          <div className="heading">
            <span id="actionHeading">Buy Units From Market</span>
            <p>Unit price: {investor ? ethers.utils.formatEther(investor?.salePrice._hex) + ' Ether' : 'Enter Address'}</p>
            <p>Available Units: {investor ? investor?.saleUnits : 0}</p>
          </div>
          <div className="inputs">
            <input className="actionInputs" name='marketAddress' onChange={handleChange} type="string" placeholder="Address" />
            <input className="actionInputs" name='marketUnits' onChange={handleChange} type="number" placeholder="Number of units" />
          </div>
          <div className="controls">
            <Button onClick={async () => setInvestor(await getInvestor(state.marketAddress))}>Get Price</Button>
            <Button onClick={() => transferUnits(state.marketAddress, state.marketUnits, transferValue)}>Transfer</Button>
          </div>
          <p>Total value: <span className='highlight'>{transferValue || 0} Ether</span></p>
        </Action>
        <Action>
          <div className="heading">
            <span id="actionHeading">Withdraw Balance</span>
            <p>Cleared Balance: {account && ethers.utils.formatEther(account?.balance._hex)}</p>
            <p>Withdraw cleared balance</p>
          </div>
          <div className="inputs">
            <input className="actionInputs" name='withdrawAmount' onChange={handleChange} type="number" placeholder="Amount to withdraw" />
          </div>
          <div className="controls">
            <Button onClick={() => investorWithdraw(state.withdrawAmount)}>Withdraw</Button>
          </div>
          <p>Withdrawing: <span className='highlight'> {state.withdrawAmount || 0} Ether </span></p>
        </Action>
      </Actions>
    </Page>
  )
}