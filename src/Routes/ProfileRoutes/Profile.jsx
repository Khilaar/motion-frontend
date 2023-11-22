import React from "react";
import {
  ProfileHeader,
  StyledDivProfileContainer,
  StyledProfileDiv,
  StyledProfileAboutDiv,
  StyledThingsILikeDiv,
  StyledButtonThingsILike,
} from "../../Styles/ProfileStyles.jsx";
import jennierAvatar from "../../Components/MotionBackground/assets/images/jennifer.png";

export default function Profile() {
  return (
    <>
      <ProfileHeader />
      <StyledDivProfileContainer>
        <StyledProfileDiv>
          <img src={jennierAvatar} />
          <h1>Jennifer Smith</h1>
          <h3>Zürich, Switzerland</h3>
          <button>Edit Profile</button>
        </StyledProfileDiv>

        <StyledProfileAboutDiv>
          <h6>About</h6>
          <p>
            Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas
            laudem iracundia et, ad per utamur ceteros apeirian
          </p>
        </StyledProfileAboutDiv>
        <StyledThingsILikeDiv>
          <h6>Things I like</h6>
          <StyledButtonThingsILike>Cooking</StyledButtonThingsILike>
          <StyledButtonThingsILike>Travel</StyledButtonThingsILike>
          <StyledButtonThingsILike>Reading</StyledButtonThingsILike>
          <StyledButtonThingsILike>Swimming</StyledButtonThingsILike>
          <StyledButtonThingsILike>Running</StyledButtonThingsILike>
        </StyledThingsILikeDiv>
      </StyledDivProfileContainer>
    </>
  );
}
