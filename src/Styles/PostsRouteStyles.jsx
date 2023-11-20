import styled from "styled-components";

export const StyledHeaderPostsRoute = styled.header`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  gap: 30rem;
`;

export const StyledSpanPostsRoute = styled.header`
  display: flex;
`;

export const StyledAPostsRoute = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  &:focus {
    border-bottom: solid 1px;
  }
`;
