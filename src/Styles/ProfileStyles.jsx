import styled from "styled-components";
import banner from "../Components/MotionBackground/assets/images/my_profile_banner.png";

export const ProfileHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -2;
  width: 100%;
  height: 450px;
  background-image: url(${banner});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const StyledDivProfileContainer = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  top: 25%;
  width: 80%;
  min-height: fit-content;
  max-height: 500px;
  background-color: white;
  border-radius: 6px;
  display: grid;
`;

export const StyledProfileDiv = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
  width: 30%;
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-right: solid 0.5px #a0a3a0;
  overflow: auto;

  img {
    padding-top: 10%;
    width: 60px;
    height: 50px;
  }

  h1 {
    font-family: Roboto;
    font-weight: 400;
    font-size: 24px;
    line-height: 28.13px;
    text-align: center;
    color: black;
  }

  h3 {
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.41px;
    text-align: center;
    color: black;
    width: 118px;
    height: 16px;
    text-transform: capitalize;
  }

  button {
    width: 158px;
    height: 40px;
    opacity: 80%;
    border: 1px rgba(0, 0, 0, 1);
    text-transform: uppercase;
    border-radius: 16px;
    font-weight: 400;
    font-family: Robot;
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const StyledProfileAboutDiv = styled.div`
  position: fixed;
  top: 0;
  left: 30%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  background-color: white;
  width: 30%;
  height: 70%;
  box-sizing: content;

  h6 {
    display: block;
    width: 100%;
    font-family: roboto;
    font-weight: 400;
    font-size: 20px;
    text-align: left;
    color: black;
    margin-bottom: 0;
  }

  p {
    width: 100%;
    text-align: left;
    color: black;
    font-size: 1em;
  }
`;

export const StyledThingsILikeDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 35%;
  background-color: white;

  h6 {
    display: block;
    width: 100%;
    font-family: roboto;
    font-weight: 400;
    font-size: 20px;
    text-align: left;
    color: black;
  }
`;

export const StyledButtonThingsILike = styled.button`
  display: block;
  width: 83px;
  height: 32px;
  font-family: roboto;
  font-weight: 400;
  font-size: 14px;
  background-color: light-grey;
  border-radius: 12px;
  border: 1px rgba(0, 0, 0, 1);
  margin: 5px;
`;

export const StyledContactDetails = styled.p`
  display: flex;
  flex-direction: row;
  color: black;
  line-height: 2em;
`;

export const StyledStats = styled.p`
  display: flex;
  flex-direction: column;
  color: black;
  min-width: 80px;
  text-transform: Capitalize;
  font-family: roboto;
  weight: 400;
  font-size: 16px;
  gap: 0;
  margin-top: 0;
  padding-top: 0;

  h3 {
    font-family: roboto;
    weight: 400;
    font-size: 20px;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const StyledStatsDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-around;
  justify-self: end;
  max-width: 70%;
  min-width: 70%;
  height: 100px;
  border-left: solid 1px #a0a3a0;
  border-top: solid 0.5px #a0a3a0;
  border-bottom-left-radius: 6px;
`;

export const StyledProfileParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
