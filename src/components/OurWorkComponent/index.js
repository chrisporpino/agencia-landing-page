import React from "react";
import styled from "styled-components";
import programmer from "../../assets/images/illustration_programmer.png";

const OurWorkSection = styled.div`
  display: flex;
  width: 100%;
  height: 521px;
  padding: 0 135px;
`;

const OurWorkTitle = styled.h1`
  width: 100%;
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;
  margin-bottom: 32px;
`;

const InformationsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  padding: 72px 0;
`;

const DescriptionOurWork = styled.p`
  width: 100%;
  height: 232px;
  font-size: 18px;
  line-height: 27px;
  color: #61616c;
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
`;

const ImageSection = styled.div`
  width: 50%;
  padding: 108px 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
