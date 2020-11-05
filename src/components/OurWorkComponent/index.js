import React from "react";
import styled from "styled-components";
import programmer from "../../assets/images/illustration_programmer.png";

const OurWorkSection = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10vw;

  @media (max-width: 700px) {
  }
`;

const OurWorkTitle = styled.h1`
  width: 100%;
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;
  margin-bottom: 32px;

  @media (max-width: 700px) {
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 0;
  }
`;

const InformationsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  padding: 60px 0;

  @media (max-width: 700px) {
    width: 100%;
    padding: 56px 0;
  }
`;

const DescriptionOurWork = styled.p`
  width: 100%;
  font-size: 18px;
  line-height: 27px;
  color: #61616c;
  margin-bottom: 24px;

  @media (max-width: 700px) {
    font-size: 15px;
    line-height: 180.5%;
    margin-top: 32px;
    margin-bottom: 0;
  }
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

  @media (max-width: 700px) {
    width: 160px;
    height: 39px;
    margin-top: 32px;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
  }
`;

const ImageSection = styled.div`
  width: 50%;
  padding: 108px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 90%;
  object-fit: cover;
`;

function OurWorkComponent() {
  return (
    <OurWorkSection>
      <InformationsBox>
        <OurWorkTitle>Nosso Trabalho</OurWorkTitle>
        <DescriptionOurWork>
          Desenvolvemos a sua Landing page com um perfil totalmente descritivo
          de sua marca, com serviços e áreas de atuação, com a agilidade e
          atenção que o seu negócio precisa para ter toda a visibilidade na
          rede.
        </DescriptionOurWork>
        <DescriptionOurWork>
          Desenvolvemos também um logotipo para representação da sua marca,
          cuidamos da criação dos textos que melhor descrevam seu perfil,
          imagens e todo o layout do site.
        </DescriptionOurWork>
        <SecondaryButton>SAIBA MAIS</SecondaryButton>
      </InformationsBox>

      <ImageSection>
        <Image src={programmer} alt="Imagem de um programador" />
      </ImageSection>
    </OurWorkSection>
  );
}

export default OurWorkComponent;
