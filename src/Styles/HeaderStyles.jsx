import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: white;
  color: black;
`;

export const StyledH1Header = styled.header`
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  img {
    width: 50px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  width: 700px;
  height: 100%;
`;
export const StyledAHeader = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  gap: 10px;
  &:focus {
    border-bottom: solid 1px;
  }
  img {
    height: 20px;
  }
`;
export const StyledSectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
  width: auto;
  gap: 10px;
  margin-right: 10px;
  a {
    text-decoration: none;
  }
`;
