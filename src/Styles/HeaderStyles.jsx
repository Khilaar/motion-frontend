import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  height: 80px;
  background-color: white;
  color: black;
  box-sizing: border-box;
`;

export const StyledH1Header = styled.header`
  margin-left: 10px;
  margin-right: 15%;
`;

export const StyledNav = styled.nav`
  display: flex;
  width: 700px;
  height: 100%;
`;
export const StyledAHeader = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 50px;
  margin-right: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  text-decoration: none;
  color: inherit;
  ${props => props.noPadding && css`
    margin-left: 20px;
    margin-right: 2px;
  `}

  &:focus {
    border-bottom: solid 1px;
    padding-bottom: 5px
  }
`;
export const StyledSectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
  width: auto;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`;

export const StyledleftContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`

export const StyledRighContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`

export const StyledImg = styled.img `
  
`

export const StyledP = styled.p`
  margin-left: 10px;
`