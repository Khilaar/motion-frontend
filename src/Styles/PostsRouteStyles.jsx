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
`;

export const StyledDivContainerPostsRoute = styled.div`
  margin-top: 400px;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 6px;
  }

  position: fixed;
  width: 80%;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0px;
  justify-content: space-between;
  padding: 0 2%;
`;

export const StyledDivPostsRoute = styled.div`
  width: 45%;
  color: white;
  align-items: flex-start;
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
  margin-top: 100px;
`;

export const StyledlikeSharePostsRoute = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  div {
    display: flex;
    gap: 2rem;
  }
`;

export const StyledDivAddPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 45%; 

  img {
    width: 50px;
    height: 50px; 
    border-radius: 50%; 
  }

  div {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  button {
    padding: 10px 16px; 
    font-size: 16px;
    background-color:
    color: #fff; 
    border: none;
    border-radius: 4px; 
    cursor: pointer;
  }
`;
