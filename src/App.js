import React from "react";
import styled from "styled-components";
import "./assets/styles/global.css";
import programmer from "./assets/images/illustration_programmer.png";
import facebook from "./assets/images/icons/facebook.png";
import instagram from "./assets/images/icons/instagram.png";
import twitter from "./assets/images/icons/twitter.png";
import figma from "./assets/images/icons/figma.png";
import chris from "./assets/images/Profile/Chris.jpeg";
import carol from "./assets/images/Profile/Carol.jpeg";
import victor from "./assets/images/Profile/Victor.jpg";
import chart from "./assets/images/tokiens/chart.png";
import bulb from "./assets/images/tokiens/bulb.png";
import pencil from "./assets/images/tokiens/pencil.png";
import users from "./assets/images/tokiens/users.png";
import "./assets/styles/mobile.css";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Poppins", sans-serif;
`;

const BannerSection = styled.div`
  width: 100%;
  height: 608px;
  background: linear-gradient(180deg, #020412 0%, #030619 100%), #020412;
  color: #fcfcff;

  /* 
  text-align:center;
  display:flex;
  flex-direction:column; 
  */
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

// Seção Nosso Trabalho ------------
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

const Title = styled.h1`
  width: 100%;
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;
  margin-bottom: 32px;
  text-align: center;
  padding-top: 72px;
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
  width: 535px;
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
`;

const Image = styled.img`
  /* width: 200px; */
  width: 70%;
  object-fit: cover;
`;

// Seção Por que nós? -----------
const WhyUsSection = styled.div`
  width: 100%;
  height: 650px;
  background: linear-gradient(180deg, #020412 0%, #030619 100%), #020412;
  color: white;
`;

// Tittle já foi estilizado acima
const DifferentialsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: auto;
`;

const Differential = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  padding-bottom: 30px;
`;

const DescriptionDifferential = styled.p`
   width: 440px;
  height: 66px;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 51px;
`;

const Text = styled.h3`
  
  font-weight: 600px;
  font-size: 30px;
  width: 198px;
  height: 26px;
  line-height: 45px;
  margin-bottom: 24px;
`;

const DifferentialLogo = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
   border-radius: 50%;
  background: rgba(242, 243, 244, 0.05);
  margin-right: 30px;
  
`;

const ImageDifferential = styled.img`
  width: 40px;
  `;


const DivSuporte = styled.div`
display: flex;
flex-direction: column;

`;

// Seção Quem somos -----------

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 765px;
  width: 100%;
`;

const CardsBox = styled.div`
  display: flex;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 426px;
  background: #e3e4ea;
  border-radius: 4px;
  align-items: center;
  margin: 56px 40px 40px 40px;
  padding: 12px;
`;

const ProfilePicture = styled.div`
  height: 131px;
  width: 131px;
  margin: 12px 0 24px 0;
`;

const ImageProfile = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const DescriptionSkills = styled.p`
   text-align: center;
  flex-wrap: wrap;
`;

const Text1 = styled.h3`
  text-align: center;
  font-weight: 600px;
  font-size: 21px;
  line-height: 31.5px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

// Footer -----------

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 30%;
`;

const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  width: 99px;
  height: 24px;
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 199px;
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

      {/* --v---- Nova Seção ----v-- */}
      <WhyUsSection className="WhyUsSection">
        <Title>Por que nós?</Title>

        <DifferentialsBox className="DifferentialBox">
          <Differential className="Differential">
            <DifferentialLogo className="DifferentialLogo">
              <ImageDifferential src={pencil} alt="criatividade" />
            </DifferentialLogo>
            <DivSuporte>
              <Text className="Text">Criatividade</Text>

              <DescriptionDifferential className="DescriptionDifferential">
                É o que envolve nossa paixão por ideias. Criar, imaginar e
                inventar novas formas de apresentar o seu serviço/produto faz
                parte do jeito da nossa agência de comunicação ser.
              </DescriptionDifferential>
            </DivSuporte>
          </Differential>

          <Differential className="Differential">
            <DifferentialLogo className="DifferentialLogo">
              <ImageDifferential src={chart} alt="chart" />
            </DifferentialLogo>
            <DivSuporte className="DivSuporte">
              <Text className="Text">Resultados</Text>
              <DescriptionDifferential className="DescriptionDifferential">
                A gente trabalha para ver acontecer. E dá retorno, viu? Nosso
                maior orgulho é acompanhar as conquistas de cada cliente.
              </DescriptionDifferential>
            </DivSuporte>
          </Differential>

          <Differential className="Differential">
            <DifferentialLogo className="DifferentialLogo">
              <ImageDifferential src={bulb} alt="bulb" />
            </DifferentialLogo>
            <DivSuporte className="DivSuporte">
              <Text className="Text">Estratégia</Text>
              <DescriptionDifferential className="DescriptionDifferential">
                Somos estudiosos, sabia?E adoramos planejar. É assim que
                descobrimos quais os melhores caminhos para alcançar o seu
                objetivo.
              </DescriptionDifferential>
            </DivSuporte>
          </Differential>

          <Differential className="Differential">
            <DifferentialLogo className="DifferentialLogo">
              <ImageDifferential src={users} alt="users" />
            </DifferentialLogo>
            <DivSuporte className="DivSuporte">
              <Text className="Text">Integração</Text>
              <DescriptionDifferential className="DescriptionDifferential">
                Juntos conseguimos soluções melhores. Entre uma área e outra, a
                gente se ajuda e é dessa cooperação que surgem as boas ideias.
              </DescriptionDifferential>
            </DivSuporte>
          </Differential>
        </DifferentialsBox>
      </WhyUsSection>


      

      {/* --v---- Nova Seção ----v-- */}
      <AboutUs className="AboutUs">
        <Title className="Title">Quem somos?</Title>

        <CardsBox className="CardsBox">
          <Card className="Card">
            <ProfilePicture className="ProfilePicture">
              <ImageProfile src={chris} alt="Chris" />
            </ProfilePicture>
            <Text1 className="Text1">Christhopher Porpino</Text1>
            <DescriptionSkills className="DescriptionSkills">
              Desenvolvedor Web Full Stack. Trabalha com as techs: JavaScript,
              TypeScript, SQL, React.js, Node.js e RestAPI.
            </DescriptionSkills>
          </Card>

          <Card className="Card">
            <ProfilePicture className="ProfilePicture">
              <ImageProfile src={carol} alt="Carol" />
            </ProfilePicture>
            <Text1 className="Text1">Carolina Marçal </Text1>
            <DescriptionSkills className="DescriptionSkills">
              UI Designer com conhecimento em Grids, Hierarquia Visual,
              Tipografia e Contraste de Cores com planejamento na plataforma
              Figma.
            </DescriptionSkills>
          </Card>

          <Card className="Card">
            <ProfilePicture className="ProfilePicture">
              <ImageProfile src={victor} alt="Victor" />
            </ProfilePicture>
            <Text1 className="Text1">Victor Tarroni</Text1>
            <DescriptionSkills className="DescriptionSkills">
              Front End Developer aplicando seus conhecimentos de CSS, HTML e
              JavaScript com muita técnica e visão comercial. Tem pratica em SEO
              e conhecimento comercial.
            </DescriptionSkills>
          </Card>
        </CardsBox>
        <SecondaryButton className="SecondaryButton">QUERO UM SITE</SecondaryButton>
      </AboutUs>

      {/* --v---- Nova Seção ----v-- */}

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
    </Root>
  );
}

export default App;
