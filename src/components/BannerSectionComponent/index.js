import React from 'react';
import styled from 'styled-components';

const BannerSection = styled.div`
  width: 100%;
  height: 504px;
  background: linear-gradient(180deg, #020412 0%, #030619 100%), #020412;
  color: #fcfcff;
  display: grid;
  place-items: center;
`;

const Logo = styled.img``;

const Headline = styled.h1`
  width: 963px;
  height: 91px;
  text-align: center;
  font-weight: 500;
  font-size: 51px;
  line-height: 110%;
  color: #fcfcff;
`;

const Subtitle = styled.h3`
  width: 550px;
  height: 47px;
  text-align: center;
  font-weight: normal;
  font-size: 21px;
  line-height: 31px;
  color: #989da0;
`;

const PrimaryButton = styled.button`
  border-radius: 30px;
  background: #01b3d7;
  padding: 17px 0;
  width: 366px;
  height: 51px;
  border: none;
  color: white;
  font-weight: bold;
`;

function BannerSectionComponent() {
  return(
    <BannerSection>
        <Logo />
        <Headline>Alavanque seus resultados com um site surpreendente</Headline>
        <Subtitle>
          Você vai se surpreender com o que podemos fazer pelo seu negócio
        </Subtitle>
        <PrimaryButton>QUERO SABER MAIS</PrimaryButton>
      </BannerSection>
  )
}

export default BannerSectionComponent;