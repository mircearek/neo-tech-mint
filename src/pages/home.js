import React from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import HowToMint from "../components/how-to-mint";
import HowToMint from "../components/rubic";
import Mint from "../components/mint";

export default function Home() {
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
