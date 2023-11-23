import React from "react";
import {
  ProfileHeader,
  StyledDivProfileContainer,
  StyledProfileDiv,
  StyledProfileAboutDiv,
  StyledThingsILikeDiv,
  StyledButtonThingsILike,
  StyledContactDetails,
  StyledStats,
  StyledStatsDiv,
} from "../../Styles/ProfileStyles.jsx";
import jennierAvatar from "../../Components/MotionBackground/assets/images/jennifer.png";

export default function Profile() {
  return (
    <>
      <ProfileHeader></ProfileHeader>
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
            laudem iracundia et, ad per utamur ceteros apeirian Lorem ipsum
            dolor sit amet, vim ut quas volumus probatus, has tantas laudem
            iracundia et, ad per utamur ceteros apeirian
          </p>
          <StyledContactDetails>
            <p>
              Email <br></br> jennifersmith@gmail.com
            </p>
            <p>
              Phone <br></br> 123-456-7890
            </p>
          </StyledContactDetails>
        </StyledProfileAboutDiv>

        <StyledThingsILikeDiv>
          <h6>Things I like</h6>
          <StyledButtonThingsILike>Cooking</StyledButtonThingsILike>
          <StyledButtonThingsILike>Travel</StyledButtonThingsILike>
          <StyledButtonThingsILike>Reading</StyledButtonThingsILike>
          <StyledButtonThingsILike>Swimming</StyledButtonThingsILike>
          <StyledButtonThingsILike>Running</StyledButtonThingsILike>
        </StyledThingsILikeDiv>
        <StyledStatsDiv>
          <StyledStats>
            <h3>34</h3>
            <p>Posts</p>
          </StyledStats>
          <StyledStats>
            <h3>256</h3>
            <p>Likes</p>
          </StyledStats>
          <StyledStats>
            <h3>98</h3>
            <p>Friends</p>
          </StyledStats>
          <StyledStats>
            <h3>129</h3>
            <p>Followers</p>
          </StyledStats>
          <StyledStats>
            <h3>154</h3>
            <p>Following</p>
          </StyledStats>
        </StyledStatsDiv>
      </StyledDivProfileContainer>
    </>
  );
}
