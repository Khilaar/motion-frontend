import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: pink;
`;

export const StyledBtn = styled.button`
  border-radius: 15px;
  width: 50%;
  padding: 10px;
  text-align: center;
  background: ${(props) =>
    props.$gradient
      ? "linear-gradient(to right, #9e58a3 0%, #5c5695 51%, #cb6cd4 100%)"
      : "#fff"};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledClearButton = styled.button`
  width: 150px;
  height: 30px;
  font-family: roboto;
  font-weight: 400;
  font-size: 10px;
  text-align: center;
  background-color: white;
  border-radius: 24px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  opacity: 80%;
`;
