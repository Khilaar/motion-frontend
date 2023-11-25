import styled from "styled-components";

export const FriendCard = styled.div`
  border: 1px solid #fff;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  margin: 1rem;
  padding: 1rem;
  img {
    width: 50px;
    border-radius: 50px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    span {
      border: 1px solid #fff;
      padding: 10px;
      border-radius: 20px;
      display: flex;
      margin: 0.5rem;
    }
  }
`;

export const FriendContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 5rem 1rem 1rem;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 6px;
  }
`;
