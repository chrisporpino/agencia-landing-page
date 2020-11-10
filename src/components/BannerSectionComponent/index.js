import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/audax-logo-white.png";

const BannerSection = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #020412 0%, #030619 100%), #020412;
  color: #fcfcff;
  display: grid;
  place-items: center;
  padding-bottom: 60px;

  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 72px 30px;
  }
`;

const Logo = styled.img`
  width: 250px;
  padding: 30px 0;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Headline = styled.h1`
  width: 960px;
  text-align: center;
  font-weight: 500;
  font-size: 51px;
  line-height: 56px;
  color: #fcfcff;
  margin-bottom: 40px;

  @media (max-width: 700px) {
    font-weight: 500;
    font-size: 35px;
    line-height: 115%;
    margin-bottom: 32px;
  }
`;

const Subtitle = styled.h3`
  width: 550px;
  text-align: center;
  font-weight: 400;
  font-size: 21px;
  line-height: 31px;
  color: #989da0;
  margin-bottom: 40px;

  @media (max-width: 700px) {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;

    margin-bottom: 32px;
  }
`;

const PrimaryButton = styled.button`
  width: 366px;
  height: 51px;
  border-radius: 30px;
  background: #01b3d7;
  border: none;
  color: white;

  transition-duration: 0.3s;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  &:hover {
    background: #0078b7;
    border: 2px solid #01b3d7;
    box-shadow: 0 6px 70px #01b3d7;
    color: #ffffff;
  }

  &:active {
    background: #92dfef;
  }

  @media (max-width: 700px) {
    width: 218px;
    height: 39px;

    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
  }
`;

function BannerSectionComponent() {
  return (
    <BannerSection>
      <Logo src={logo} alt="logo" />
      <Headline>Criação de sites profissionais para alavancar seus resultados.</Headline>
      <Subtitle>
        Você vai se surpreender com o que podemos fazer pelo seu negócio.
      </Subtitle>
      <PrimaryButton>QUERO UM SITE</PrimaryButton>
    </BannerSection>
  );
}

export default BannerSectionComponent;
