import React from "react";
import styled from "styled-components";

import carol from "../../assets/images/Profile/Carol.jpeg";
import chris from "../../assets/images/Profile/Chris.jpeg";
import victor from "../../assets/images/Profile/Victor.jpg";

import CardStaff from "../CardStaff";

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 765px;
  width: 100%;
`;

const Title = styled.h1`
  width: 100%;
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;
  text-align: center;
  padding-top: 72px;
`;

const SecondaryButton = styled.button`
  width: 235px;
  height: 51px;
  background: #ffffff;
  border: 1px solid #03045e;
  border-radius: 30px;

  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #03045e;

  transition-duration: 0.3s;
  box-shadow: 0 8px 16px 0 rgba(3, 4, 94, 0.2),
    0 6px 20px 0 rgba(3, 4, 94, 0.19);

  &:hover {
    background: #555687;
    color: #ffffff;
    box-shadow: 0 6px 50px #555687;
  }

  &:active {
    background: #f0f0ff;
  }
`;

const CardsBox = styled.div`
  display: flex;
`;

function AboutUsComponent() {
  return (
    <AboutUs>
      <Title>Quem somos?</Title>

      <CardsBox>
        <CardStaff
          photo={chris}
          name="Christhopher Porpino"
          skills="Desenvolvedor Web Full Stack. Trabalha com as techs: JavaScript,
          TypeScript, SQL, React.js, Node.js e RestAPI."
        />

        <CardStaff
          photo={carol}
          name="Carolina Marçal"
          skills="UI Designer com conhecimento em Grids, Hierarquia Visual, Tipografia
          e Contraste de Cores com planejamento na plataforma Figma."
        />

        <CardStaff
          photo={victor}
          name="Victor Tarroni"
          skills="Front End Developer aplicando seus conhecimentos de CSS, HTML e
          JavaScript com muita técnica e visão comercial. Experiência em SEO e
          negócios."
        />
      </CardsBox>
      <SecondaryButton>QUERO UM SITE</SecondaryButton>
    </AboutUs>
  );
}

export default AboutUsComponent;
