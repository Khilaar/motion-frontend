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
  z-index: 1;
`;

export const StyledSpanPostsRoute = styled.header`
  display: flex;
  width: 70%;
  justify-content: flex-end;
  a {
    display: flex;
    justify-content: center;
  }
`;

export const StyledAPostsRoute = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  height: 100%;
  margin-left: 50px;
  padding-bottom: 20px;
  border-top: none;
  border-left: none;
  border-right: none;
  z-index: 1;
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

  button {
    height: 40%;
    align-self: center;
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

  input {
    background: none;
    border: none;
  }

  button {
    padding: 10px 16px; 
    font-size: 16px;
    color: #fff; 
    border: none;
    border-radius: 4px; 
    cursor: pointer;
  }
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure the modal is above other elements */
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Ensure the overlay is below the modal */
`;
