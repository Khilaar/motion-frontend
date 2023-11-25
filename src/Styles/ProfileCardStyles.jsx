import styled from "styled-components";

export const StyledProfileLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60%;
  max-height: 100%;
  min-width: 30%;
  max-width: 30%;
  background-color: white;
  align-items: center;
  position: relative:
  border-left: solid 1px rgba(0, 0, 0, 1);


`;

export const StyledAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const StyledSaveButton = styled.button`
  display: block;
  text-align: center;
  line-height: 14.06px;
  margin: 0 auto;
  margin-top: 10px;
  width: 150px;
  height: 30px;
  font-family: roboto;
  font-weight: 400;
  text-transform: 100%;
  font-size: 10px;
  text-align: center;
  background: linear-gradient(rgba(196, 104, 255, 1), rgba(110, 145, 246, 1));
  opacity: 80%;
  border-radius: 24px;
  border-style: none;
`;

export const StyledForm = styled.form`
  background-color: white;
  padding: 20px;
  min-height: 60%;
  max-height: 100%;
  min-width: 60%;
  max-width: 60%;
  border-left: solid 1 px rgba(0, 0, 0, 1);
  overflow-y: auto;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-family: roboto;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  line-height: 14.06px;
  color: ${(props) => (props.invalid ? "red" : "black")};
`;

export const StyledInput = styled.input`
  width: 40%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border-top: none;
  border-left: none;
  border-right: none;
`;

export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`;

export const StyledTextArea = styled.textarea`
  width: 40%;
  height: 10%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledFormParentDiv = styled.div`
  display: inline-flex;
  flex: 1;
  flex-direction: row;
  min-height: 100%;
  height: 50vh;
  min-width: 100%;
  width: 60vw;
  justify-content: center;
  padding: 10px;
`;

export const StyledListItem = styled.li`
  list-style-type: none;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  margin-bottom: 5px;
`;
