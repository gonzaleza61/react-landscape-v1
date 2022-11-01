import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import InfoSection from "../components/InfoSection";
import Services from '../components/Services';
import { InfoData, InfoData2 } from "../data/InfoData";
import { SliderData } from "../data/SliderData";


const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Services/>
      <Features />
      <InfoSection {...InfoData2} />
    </>
  );
};

export default Home;
