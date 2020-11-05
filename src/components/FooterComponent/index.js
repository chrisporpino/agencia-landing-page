import React from "react";
import styled from "styled-components";

import facebook from "../../assets/images/icons/facebook.png";
import instagram from "../../assets/images/icons/instagram.png";
import twitter from "../../assets/images/icons/twitter.png";
import figma from "../../assets/images/icons/figma.png";

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
`;

const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  width: 99px;
  height: 24px;
  margin-right: 32px;
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 92px;
  width: 100%;
  background: linear-gradient(180deg, #020412 0%, #030619 100%), #020412;
  color: #e3e4ea;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  justify-content: center;
`;

const Icon = styled.img`
  margin-right: 10px;
`;

function FooterComponent() {
  return (
    <Footer>
        <IconContainer>
          <BoxIcon>
            <Icon src={instagram} alt="instagram" />
            <p>Instagram</p>
          </BoxIcon>
          <BoxIcon>
            <Icon src={facebook} alt="facebook" />
            <p>Facebook</p>
          </BoxIcon>
          <BoxIcon>
            <Icon src={twitter} alt="twitter" />
            <p>Twitter</p>
          </BoxIcon>
          <BoxIcon>
            <Icon src={figma} alt="figma" />
            <p>Figma</p>
          </BoxIcon>
        </IconContainer>
      </Footer>
  );
}

export default FooterComponent;
