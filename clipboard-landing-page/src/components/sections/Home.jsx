// import React from "react";
// import Hero from "../sections/Hero";
// import Features from "./Features";
// import AccessFeature from "./AccessFeature";
// import Intergration from "./Intergration";
// import CustomerBrands from "./CustomerBrands";
// import Footer from "./Footer";

// const Home = () => {
//   return (
//     <main
//       className="bg-[url('/src/assets/images/bg-header-mobile.png')] lg:bg-[url('/src/assets/images/bg-header-desktop.png')]
//     h-screen bg-no-repeat bg-center bg-cover"
//     >
//       <Hero />
//       <Features />
//       <AccessFeature />
//       <Intergration />
//       <CustomerBrands />
//       <Footer />
//     </main>
//   );
// };

// export default Home;

import React from "react";
import Hero from "../sections/Hero";
import Features from "./Features";
import AccessFeature from "./AccessFeature";
import Intergration from "./Intergration";
import CustomerBrands from "./CustomerBrands";
import Footer from "./Footer";

import mobileBg from "../../assets/images/bg-header-mobile.png";
import desktopBg from "../../assets/images/bg-header-desktop.png";

const Home = () => {
  return (
    <main
      className="h-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${mobileBg})`,
      }}
    >
      <div
        className="hidden lg:block absolute inset-0 h-full w-full bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${desktopBg})`,
        }}
      ></div>

      <div className="relative">
        <Hero />
        <Features />
        <AccessFeature />
        <Intergration />
        <CustomerBrands />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
