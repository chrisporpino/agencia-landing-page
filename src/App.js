import React from "react";
import styled from "styled-components";
import "./assets/styles/global.css";
import programmer from "./assets/images/illustration_programmer.png";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

const BannerSection = styled.div`
  width: 100%;
  height: 608px;
  background:linear-gradient(180deg, #020412 0%, #030619 100%), #020412;
  color: #FCFCFF;

  /* 
  text-align:center;
  display:flex;
  flex-direction:column; 
  */
display:grid;
place-items: center;


`;

const Logo = styled.img``;

const Headline = styled.h1``;

const Subtitle = styled.h3`
color: #989DA0;
`;


const PrimaryButton = styled.button`
border-radius: 30px;
background:#01B3D7;
padding: 17px 97px;
width:370px;
height:53px;
border: none;
color:white;
font-weight:bold;

`;

// Seção Nosso Trabalho ------------
const OurWorkSection = styled.div`
display: flex;
flex-direction: row;
flex-basis: 100%;
flex: 1;

`;

const Title = styled.title``;

const InformationsBox = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: center;
 padding:30px;


`;

const Paragraph = styled.p`


`;

const SecondaryButton = styled.button`
display:flex;
flex-direction: column;

`;

const Image = styled.img`
  /* width: 200px; */
  width:70%;
  height: 70%;
  object-fit: cover;
  
`;

// Seção Por que nós? -----------
const WhyUsSection = styled.div``;

// Tittle já foi estilizado acima
const DifferentialsBox = styled.div``;

const Differential = styled.div``;

const Text = styled.h3`
text-align: center;
top: 60px;


`;

// Seção Quem somos -----------

const AboutUs = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`;


const CardsBox = styled.div`
display: flex;


`;

const Card = styled.div`

padding-top:235px;
width:270px;
height:426px;
background:#E3E4EA;
border-radius: 4px;
margin:165px 80px;


`;

const ProfilePicture = styled.img``;

const DescriptionText = styled.p`
padding-top: 20px;
text-align: center;
`;

// Footer -----------
const Footer = styled.footer``;

const Icon = styled.img``;

function App() {
  return (
    <Root>
      <BannerSection>
        <Logo />
        <Headline>Alavanque seus resultados com um site surpreendente</Headline>
        <Subtitle>
          Você vai se surpreender com o que podemos fazer pelo seu negócio
        </Subtitle>
        <PrimaryButton>QUERO SABER MAIS</PrimaryButton>
      </BannerSection>

      {/* --v---- Nova Seção ----v-- */}
      <OurWorkSection>
        <InformationsBox>
          <Title>Nosso Trabalho</Title>
          <Paragraph>
            Desenvolvemos a sua Landing page com um perfil totalmente descritivo
            de sua marca, com serviços e áreas de atuação, com a agilidade e
            atenção que o seu negócio precisa para ter toda a visibilidade na
            rede.
          </Paragraph>
          <Paragraph>
            Desenvolvemos também um logotipo para representação da sua marca,
            cuidamos da criação dos textos que melhor descrevam seu perfil,
            imagens e todo o layout do site.
          </Paragraph>
          <SecondaryButton>SOLICITAR ORÇAMENTO</SecondaryButton>
        </InformationsBox>

        <Image src={programmer} alt="Imagem de um programador" />
      </OurWorkSection>

      {/* --v---- Nova Seção ----v-- */}
      <WhyUsSection>
        <Title>Por que nós?</Title>

        <DifferentialsBox>
          <Differential>
            <img />
            <Text>Primeiro Diferencial</Text>
            <Paragraph>
              Equipe integrada e atualizada; preços realmente competitivos;
              entrega rápida e sempre com total respeito ao prazo combinado.
            </Paragraph>
          </Differential>
          <Differential>
            <img />
            <Text>Segundo Diferencial</Text>
            <Paragraph>
              Equipe integrada e atualizada; preços realmente competitivos;
              entrega rápida e sempre com total respeito ao prazo combinado.
            </Paragraph>
          </Differential>
          <Differential>
            <img />
            <Text>Terceiro Diferencial</Text>
            <Paragraph>
              Equipe integrada e atualizada; preços realmente competitivos;
              entrega rápida e sempre com total respeito ao prazo combinado.
            </Paragraph>
          </Differential>
          <Differential>
            <img />
            <Text>Quarto Diferencial</Text>
            <Paragraph>
              Equipe integrada e atualizada; preços realmente competitivos;
              entrega rápida e sempre com total respeito ao prazo combinado.
            </Paragraph>
          </Differential>
        </DifferentialsBox>
      </WhyUsSection>

      {/* --v---- Nova Seção ----v-- */}
      <AboutUs>
        <Title>Quem somos?</Title>

        <CardsBox>
          <Card>
            <ProfilePicture />
            <Text>Fulano da Silva</Text>
            <DescriptionText>Competências, Experiências Competências, Experiências</DescriptionText>
          </Card>

          <Card>
            <ProfilePicture />
            <Text>Ciclano da Silva</Text>
            <DescriptionText>Competências, Experiências Competências, Experiências</DescriptionText>
          </Card>

          <Card>
            <ProfilePicture />
            <Text>Beltrano da Silva</Text>
            <DescriptionText>
              Competências, Experiências Competências, Experiências
            </DescriptionText>
          </Card>
          <SecondaryButton>Quero um site</SecondaryButton>
        </CardsBox>
        
              </AboutUs>

      {/* --v---- Nova Seção ----v-- */}
      <Footer>
        <div>
          <Icon />
          <p>Instagram</p>
        </div>
        <div>
          <Icon />
          <p>Facebook</p>
        </div>
        <div>
          <Icon />
          <p>Twitter</p>
        </div>
        <div>
          <Icon />
          <p>Figma</p>
        </div>
      </Footer>
    </Root>
  );
}

export default App;
