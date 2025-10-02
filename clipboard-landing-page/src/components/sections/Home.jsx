import React from "react";
import Hero from "../sections/Hero";
import Features from "./Features";
import AccessFeature from "./AccessFeature";
import Intergration from "./Intergration";
import CustomerBrands from "./CustomerBrands";
import Footer from "./Footer";

const Home = () => {
  return (
    <main
      className="bg-[url('/bg-header-mobile.png')] lg:bg-[url('/bg-header-desktop.png')]
    h-screen bg-no-repeat bg-center bg-cover"
    >
      <Hero />
      <Features />
      <AccessFeature />
      <Intergration />
      <CustomerBrands />
      <Footer />
    </main>
  );
};

export default Home;
