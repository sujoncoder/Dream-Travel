import React from "react";
import FAQ from "../FAQ/FAQ";
import IntroSection from "../IntroSection/IntroSection";
import Offer from "../Offer/Offer";
import Places from "../Places/Places";

const Home = () => {
  return (
    <div>
      <IntroSection></IntroSection>
      <Places></Places>
      <Offer></Offer>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
