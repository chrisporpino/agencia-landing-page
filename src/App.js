import React from "react";
import styled from "styled-components";
import "./assets/styles/global.css";

import BannerSectionComponent from "./components/BannerSectionComponent";
import OurWorkComponent from "./components/OurWorkComponent";
import WhyUsComponent from "./components/WhyUsComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import FooterComponent from "./components/FooterComponent";


const Root = styled.div`
  width: 100%;
  height: 100vh;
  font-family: "Poppins", sans-serif;
`;

function App() {
  return (
    <Root>
      <BannerSectionComponent />
      <OurWorkComponent />
      <WhyUsComponent />
      <AboutUsComponent />
      <FooterComponent />
    </Root>
  );
}

export default App;
