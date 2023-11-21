import styled from "styled-components";

export const StyledHeaderPostsRoute = styled.header`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const StyledSpanPostsRoute = styled.header`
  display: flex;
  width: 70%;
  justify-content: flex-end;
`;

export const StyledAPostsRoute = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  height: 100%;
  padding-left: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  &:focus {
    border-bottom: solid 1px;
  }
`;

export const StyledBodyPostsRoute = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPPostsRoute = styled.p`
  display: flex;
  justify-content: flex-start;
  padding-left: 3.5rem;
`;

export const StyledDivContainerPostsRoute = styled.div`
  margin-top: 300px;
  height: 100vh;
  overflow-x: hidden;
  position: fixed;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 90%;
  justify-self: center;
  margin-top: 30rem;
`;

export const StyledDivPostsRoute = styled.div`
  width: 50%;
  margin-bottom: 20px;
  color: white;
`;

export const StyledDivColumns = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
`;

export const StyleduserPostDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 55px;
`;

export const StyledlikeSharePostsRoute = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 7rem;
  div {
    display: flex;
    gap: 2rem;
  }
`;
