import styled from "styled-components";

export const ProfileHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100vw;
  height 300px;
`;

export const StyledDivProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1152px;
  height: 400px;
  background-color: white;
`;

export const StyledProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 400px;
  justify-content: center;
  align-items: center;
  background-color: white;

  img {
    width: 50px;
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
  }

  button {
    width: 158px;
    height: 40px;
    opacity: 80%;
    border: 1px rgba(0, 0, 0, 1);
    shadow: rgba(0, 0, 0, 0.07);
    text-transform: uppercase;
    border-radius: 16px;
    font-weight: 400;
    font-family: Robot;
    align: center;
    font-size: 14px;
  }
`;

export const StyledProfileAboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;

  h6 {
    font-family: roboto;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 0;
    color: black;
  }

  p {
    width: 320px;
    height: 78px;
    text-align: left;
    color: black;
  }
`;

export const StyledThingsILikeDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
  width: 320px;
  height: 118px;

  h6 {
    display: block;
    width: 100%;
    font-family: roboto;
    font-weight: 400;
    font-size: 14px;
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
