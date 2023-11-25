import React, { useState } from "react";
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
import { loadUser, updateUser } from "../../Store/Slices/userSlice";

export default function ProfileCard(props) {
  const userAvatar = useSelector((state) => state.user.details?.avatar);
  const [first_name, setFirstName] = useState(
    useSelector((state) => state.user.details?.first_name)
  );
  const [last_name, setLastName] = useState(
    useSelector((state) => state.user.details?.last_name)
  );
  const [email, setEmail] = useState(
    useSelector((state) => state.user.details?.email)
  );
  const [location, setLocation] = useState(
    useSelector((state) => state.user.details?.location)
  );
  const [phone_number, setPhoneNumber] = useState(
    useSelector((state) => state.user.details?.phone_number)
  );
  const [about_me, setAboutMe] = useState(
    useSelector((state) => state.user.details?.about_me)
  );
  const [things_user_likes, setThingsUserLikes] = useState(
    useSelector((state) => state.user.details?.things_user_likes)
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: FIX DISPATCH ACTION OF USER DETAILS UPDATE.
    //dispatch(updateUser([first_name]: first_name, [last_name]: last_name));

    props.setShowForm(false);
  };

  console.log(last_name);
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
          </div>
        </StyledProfileLeftSection>
        <StyledForm onSubmit={handleSubmit}>
          <StyledSaveButton type="submit">Save Account</StyledSaveButton>
          <StyledLabel>First name:</StyledLabel>
          <StyledInput
            type="text"
            value={first_name}
            placeholder={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <StyledLabel>Last name:</StyledLabel>
          <StyledInput
            type="text"
            value={last_name}
            placeholder={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <StyledLabel>Email:</StyledLabel>
          <StyledInput
            type="email"
            value={email}
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* TODO: implement country selector drop down */}
          <StyledLabel>Location:</StyledLabel>
          <StyledInput
            type="text"
            value={location}
            placeholder={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <StyledLabel>Phone:</StyledLabel>
          <StyledInput
            type="phone"
            value={phone_number}
            placeholder={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <StyledLabel>About:</StyledLabel>
          <StyledTextArea
            placeholder={about_me}
            onChange={(e) => setAboutMe(e.target.value)}
          />
          <StyledLabel>Password:</StyledLabel>
          <StyledInput type="password" />
          <StyledLabel>Things I like:</StyledLabel>
          <StyledTextArea
            value={things_user_likes}
            placeholder={things_user_likes}
            onChange={(e) => setThingsUserLikes(e.target.value)}
          />
        </StyledForm>
      </StyledFormParentDiv>
    </>
  );
}
