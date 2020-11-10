import React from "react";
import styled from "styled-components";

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


  @media (max-width: 700px)
  {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 249px;
  height: 392px;
  margin:40px 0px 0px 0px;
}

`;

const ProfilePicture = styled.div`
  height: 131px;
  width: 131px;
  margin: 12px 0 24px 0;
  
  @media (max-width: 700px)
  {
  width: 121px;
  height: 120px;
  border-radius: 50%;
  margin: 32px 64px 16px 64px;

}
`;

const ImageProfile = styled.img`
  width: 100%;
  border-radius: 50%;


`;

const DescriptionSkills = styled.p`
  text-align: center;
  flex-wrap: wrap;

  @media (max-width: 700px)
  {
text-align: center;
width: 100%;
height: 175px;
margin: 10px 12px 10px 12px ;
}
`;

const NameStaff = styled.h3`
  text-align: center;
  font-weight: 600px;
  font-size: 21px;
  line-height: 31.5px;
  margin-bottom: 24px;
  flex-wrap: wrap;

  @media (max-width: 700px)
  {

margin: 0px ;
}
`;

function CardStaff(props) {
  return (
    <div>
      <Card>
        <ProfilePicture>
          <ImageProfile src={props.photo} alt="Chris" />
        </ProfilePicture>
        <NameStaff>{props.name}</NameStaff>
        <DescriptionSkills>{props.skills}</DescriptionSkills>
      </Card>
    </div>
  );
}

export default CardStaff;
