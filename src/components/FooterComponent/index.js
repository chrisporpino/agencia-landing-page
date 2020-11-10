import React from "react";
import styled from "styled-components";

import facebook from "../../assets/images/icons/facebook.png";
import instagram from "../../assets/images/icons/instagram.png";
import twitter from "../../assets/images/icons/twitter.png";
import figma from "../../assets/images/icons/figma.png";

const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 92px;
  background: linear-gradient(180deg, #020412 0%, #030619 100%), #020412;
  color: #e3e4ea;

  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  justify-content: center;

  @media (max-width: 700px) {
    padding: 0 30px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;

  @media (max-width: 700px) {
    width: 160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99px;
  height: 24px;
  margin-right: 32px;

  @media (max-width: 700px) {
    margin-right: 0;
  }
`;


const Icon = styled.img`
  margin-right: 10px;

  @media (max-width: 700px) {
    margin-right: 0;
  }
`;

const Name = styled.p`
  @media (max-width: 700px) {
    display: none;
  }
`;

function FooterComponent() {
  return (
    <Footer>
        <IconContainer>
          <BoxIcon>
            <Icon src={instagram} alt="instagram" />
            <Name>Instagram</Name>
          </BoxIcon>
          <BoxIcon>
            <Icon src={facebook} alt="facebook" />
            <Name>Facebook</Name>
          </BoxIcon>
          <BoxIcon>
            <Icon src={twitter} alt="twitter" />
            <Name>Twitter</Name>
          </BoxIcon>
          {/* <BoxIcon>
            <Icon src={figma} alt="figma" />
            <Name>Figma</Name>
          </BoxIcon> */}
        </IconContainer>
      </Footer>
  );
}

export default FooterComponent;
