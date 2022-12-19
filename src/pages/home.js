import React from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import HowToMint from "../components/how-to-mint";
import Rubic from "../components/rubic";
import Mint from "../components/mint";

export default function Home() {
  const configuration = {
    from : 'USDT',
    to : 'TRX',
    fromChain : 'ETH',
    toChain: 'TRON',
    amount: 1,
    iframe: 'vertical',
    hideSelectionFrom: false,
    hideSelectionTo: true,
    tokenSearch: true,
    rubicLink: true,
    theme: 'dark',
    background: '#660f53',
    injectTokens: {
        'eth': [
            '0x3330BFb7332cA23cd071631837dC289B09C33333'
        ]
    },
    slippagePercent: {
        instantTrades: 2,
        crossChain: 5
    }
    }
    
    Object.freeze(configuration);
    
    rubicWidget.init(configuration);
  return (
    <div>
      <Banner />
      <HowToMint />
      <Mint />
      <Rubic />
      <Footer />
    </div>
  );
}
