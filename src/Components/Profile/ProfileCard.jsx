import React from "react";
import { api } from "../../API/api";
import { useDispatch, useSelector } from "react-redux";
import jenniferAvatar from "../../Components/MotionBackground/assets/images/jennifer.png";
import {
  StyledAvatar,
  StyledProfileLeftSection,
  StyledSaveButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTextArea,
  StyledFormParentDiv,
} from "../../Styles/ProfileCardStyles";
import { StyledClearButton } from "../../Styles/ButtonStyles";

export default function ProfileCard(props) {
  const userAvatar = useSelector((state) => state.posts.posts.user?.avatar);
  const first_name = useSelector((state) => state.posts.posts.user?.first_name);
  const last_name = useSelector((state) => state.posts.posts.user?.last_name);
  const email = useSelector((state) => state.posts.posts.user?.email);
  const location = useSelector((state) => state.posts.posts.user?.location);
  const phone_number = useSelector(
    (state) => state.posts.posts.user?.phone_number
  );
  // TODO: Implement handler for changing user details and dispatching.

  return (
    <>
      <StyledFormParentDiv>
        <StyledProfileLeftSection>
          <StyledAvatar src={userAvatar || jenniferAvatar} alt="user avatar" />
          <StyledClearButton>Update Image</StyledClearButton>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              bottom: "30%",
              justifyContent: "space-between",
            }}
          >
            <StyledClearButton>Delete Account</StyledClearButton>
            <StyledSaveButton onClick={() => props.setShowForm(false)}>
              Save Account
            </StyledSaveButton>
          </div>
        </StyledProfileLeftSection>
        <StyledForm>
          <StyledLabel>First name:</StyledLabel>
          <StyledInput type="text" value={first_name} />
          <StyledLabel>Last name:</StyledLabel>
          <StyledInput type="text" value={last_name} />
          <StyledLabel>Email:</StyledLabel>
          <StyledInput type="email" value={email} />
          {/* TODO: implement country selector drop down */}
          <StyledLabel>Location:</StyledLabel>
          <StyledInput type="text" value={location} />
          <StyledLabel>Phone:</StyledLabel>
          <StyledInput type="phone" value={phone_number} />
          <StyledLabel>About:</StyledLabel>
          <StyledTextArea />
          <StyledLabel>Password:</StyledLabel>
          <StyledInput type="password" />
          <StyledLabel>Things I like:</StyledLabel>
          <StyledTextArea />
        </StyledForm>
      </StyledFormParentDiv>
    </>
  );
}
