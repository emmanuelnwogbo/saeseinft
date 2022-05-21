import { utils, BigNumber } from 'ethers';
import React from 'react';

import Header from './Header';

interface Props {
  maxSupply: number,
  totalSupply: number,
  tokenPrice: BigNumber,
  maxMintAmountPerTx: number,
  isPaused: boolean,
  isWhitelistMintEnabled: boolean,
  isUserInWhitelist: boolean,
  mintTokens(mintAmount: number): Promise<void>,
  whitelistMintTokens(mintAmount: number): Promise<void>
}

interface State {
  mintAmount: number;
  currentSlide: number
}

const defaultState: State = {
  mintAmount: 1,
  currentSlide: 1
};

export default class MintWidget extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private canMint(): boolean {
    return !this.props.isPaused || true;
  }

  private canWhitelistMint(): boolean {
    return this.props.isWhitelistMintEnabled && this.props.isUserInWhitelist;
  }

  private incrementMintAmount(): void {
    this.setState({
      mintAmount: Math.min(this.props.maxMintAmountPerTx, this.state.mintAmount + 1),
    });
  }

  private decrementMintAmount(): void {
    this.setState({
      mintAmount: Math.max(1, this.state.mintAmount - 1),
    });
  }

  private async mint(): Promise<void> {
    if (!this.props.isPaused) {
      await this.props.mintTokens(this.state.mintAmount);

      return;
    }

      
    await this.props.whitelistMintTokens(this.state.mintAmount);
  }

  private toggleslide(): void {
    let currentSlide = this.state.currentSlide;
    currentSlide === 1 ? currentSlide = 2 : currentSlide = 1;
    this.setState({
      currentSlide
    })
  }

  render() {
    return (
      <>
        <Header />
        <div className="main__top">
          <figure>
            <img src="/build/images/leftmint.svg"/>
          </figure>
          <figure>
            <img src="/build/images/rightmint.svg"/>
          </figure>
        </div>
        {this.canMint() ?
          <div className="main">
            <div className="main__price">
              <strong></strong> {utils.formatEther(this.props.tokenPrice.mul(this.state.mintAmount))} ETH
            </div>

            <div className="main__controls">
              <div className="main__controls--toggle">
                <button className="main__controls--decrease" onClick={() => this.decrementMintAmount()}>-</button>
                <span className="main__controls--amount">{this.state.mintAmount}</span>
                <button className="main__controls--increase" onClick={() => this.incrementMintAmount()}>+</button>
              </div>
              <button className="main__controls--primary" onClick={() => this.mint()}>Mint</button>
            </div>
          </div>
          :
          <div className="cannot-mint">
            <span className="emoji">⏳</span>
            
            {this.props.isWhitelistMintEnabled ? <>You are not included in the <strong>whitelist</strong>.</> : <>The contract is <strong>paused</strong>.</>}<br />
            Please come back during the next sale!
          </div>
        }
        <div className="main__bottom--padding">
        <div className="main__bottom">
          <figure className="main__bottom--control" onClick={() => this.toggleslide()}>
            <img src="/build/images/rightarrow.svg"/>
          </figure>
          <div className="main__bottomcard main__bottomcard1" style={
            {
              transform: this.state.currentSlide === 1 ? 'translateX(0)' : 'translateX(100%)',
              opacity: this.state.currentSlide === 1 ? '1' : '0',
            }
          }>
            <div className="main__bottomcard--left">
              <figure>
                <img src="/build/images/slide1.svg"/>
              </figure>
            </div>
            <div className="main__bottomcard--right">
              <div className="main__bottomcard--pill">
                <span>Body</span>
                <span>body Type1</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>Face</span>
                <span>empty face</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>eye</span>
                <span>focused red eyes</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>clothing</span>
                <span>cyan leather jacket</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>mouth</span>
                <span>smirk</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>hair</span>
                <span>gold bob cut</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>eye wear</span>
                <span>no eyewear</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>ear</span>
                <span>gold ring2</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>hand</span>
                <span>wine</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>environ</span>
                <span>rain</span>
              </div>
            </div>
          </div>

          <div className="main__bottomcard main__bottomcard2" style={
            {
              transform: this.state.currentSlide === 2 ? 'translateX(0)' : 'translateX(100%)',
              opacity: this.state.currentSlide === 2 ? '1' : '0',
            }
          }>
            <div className="main__bottomcard--left">
              <figure>
                <img src="/build/images/slide2.svg"/>
              </figure>
            </div>
            <div className="main__bottomcard--right">
              <div className="main__bottomcard--pill">
                <span>Body</span>
                <span>body Type4</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>Face</span>
                <span>empty face</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>eye</span>
                <span>focused blue eyes</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>clothing</span>
                <span>blue kimono</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>mouth</span>
                <span>slightly opened</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>hair</span>
                <span>black bob cut</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>eye wear</span>
                <span>VR</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>ear</span>
                <span>gold hook</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>hand</span>
                <span>no hand</span>
              </div>
              <div className="main__bottomcard--pill">
                <span>environ</span>
                <span>rain</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}