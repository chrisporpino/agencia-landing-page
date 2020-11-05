import React from "react";
import styled from "styled-components";

import chart from "../../assets/images/tokiens/chart.png";
import bulb from "../../assets/images/tokiens/bulb.png";
import pencil from "../../assets/images/tokiens/pencil.png";
import users from "../../assets/images/tokiens/users.png";

const WhyUsSection = styled.div`
  width: 100%;
  height: 650px;
  background: linear-gradient(180deg, #020412 0%, #030619 100%), #020412;
  color: white;
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
  display: flex;
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


function WhyUsComponent() {
  return (
    <WhyUsSection>
        <Title>Por que nós?</Title>

        <DifferentialsBox>
          <Differential>
            <DifferentialLogo>
              <ImageDifferential src={pencil} alt="criatividade" />
            </DifferentialLogo>
            <DivSuporte>
              <Text>Criatividade</Text>

              <DescriptionDifferential>
                É o que envolve nossa paixão por ideias. Criar, imaginar e
                inventar novas formas de apresentar o seu serviço/produto faz
                parte do jeito da nossa agência de comunicação ser.
              </DescriptionDifferential>
            </DivSuporte>
          </Differential>

          <Differential>
            <DifferentialLogo>
              <ImageDifferential src={chart} alt="chart" />
            </DifferentialLogo>
            <DivSuporte>
              <Text>Resultados</Text>
              <DescriptionDifferential>
                A gente trabalha para ver acontecer. E dá retorno, viu? Nosso
                maior orgulho é acompanhar as conquistas de cada cliente.
              </DescriptionDifferential>
            </DivSuporte>
          </Differential>

          <Differential>
            <DifferentialLogo>
              <ImageDifferential src={bulb} alt="bulb" />
            </DifferentialLogo>
            <DivSuporte>
              <Text>Estratégia</Text>
              <DescriptionDifferential>
                Somos estudiosos, sabia?E adoramos planejar. É assim que
                descobrimos quais os melhores caminhos para alcançar o seu
                objetivo.
              </DescriptionDifferential>
            </DivSuporte>
          </Differential>

          <Differential>
            <DifferentialLogo>
              <ImageDifferential src={users} alt="users" />
            </DifferentialLogo>
            <DivSuporte>
              <Text>Integração</Text>
              <DescriptionDifferential>
                Juntos conseguimos soluções melhores. Entre uma área e outra, a
                gente se ajuda e é dessa cooperação que surgem as boas ideias.
              </DescriptionDifferential>
            </DivSuporte>
          </Differential>
        </DifferentialsBox>
      </WhyUsSection>
  );
}

export default WhyUsComponent;
