import React, { useState } from "react";
import { api } from "../../API/api";
import { useSelector } from "react-redux";
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
  StyledListItem,
} from "../../Styles/ProfileCardStyles";
import { StyledClearButton } from "../../Styles/ButtonStyles";
import { useEffect } from "react";
import { TrashIcon } from "../SVGComponents/TrashIcon";
import { UploadIcon } from "../SVGComponents/UploadIcon";
import { createRef } from "react";

export default function ProfileCard(props) {
  const local_user_id = JSON.parse(localStorage.getItem("userDetails")).id;
  const accessToken = useSelector((state) => state.user.accessToken);
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  // stateful variables for tracking and updating form input changes.
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [about_me, setAboutMe] = useState("");
  const [things_user_likes, setThingsUserLikes] = useState([]);
  const [updateImage, showUpdateImage] = useState(false);
  // reference for uploading image input.
  const uploadAvatarRef = createRef();
  const [avatar, setAvatar] = useState("");
  const userAvatar = URL.createObjectURL(avatar);

  // get current user details.
  const getUserDetails = async (user_id, auth) => {
    try {
      const response = await api.get(`users/${user_id}/`, auth);
      const data = response.data;
      setEmail(data.email);
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setLocation(data.location);
      setPhoneNumber(data.phone_number);
      setAboutMe(data.about_me);
      setThingsUserLikes(data.things_user_likes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails(local_user_id, config);
  }, [accessToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.patch(
        "/users/me/",
        {
          email: email,
          first_name: first_name,
          last_name: last_name,
          location: location,
          phone_number: phone_number,
          about_me: about_me,
          things_user_likes: things_user_likes,
        },
        config
      );
      console.log(response.data);
      console.log(first_name);
      props.setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileInputClick = () => {
    uploadAvatarRef.current.click();
  };
  return (
    <>
      <StyledFormParentDiv>
        <StyledProfileLeftSection>
          <StyledAvatar src={userAvatar || jenniferAvatar} alt="user avatar" />
          <StyledClearButton onClick={() => showUpdateImage(!updateImage)}>
            Update Image
          </StyledClearButton>
          {updateImage && (
            <ul>
              <StyledListItem>
                <StyledClearButton onClick={handleFileInputClick}>
                  <UploadIcon />
                  Upload Image
                </StyledClearButton>
                <StyledInput
                  style={{ display: "none" }}
                  ref={uploadAvatarRef}
                  type="file"
                  onChange={(e) => {
                    setAvatar(e.target.files[0]);
                  }}
                />
              </StyledListItem>
              <StyledListItem>
                <StyledClearButton>
                  <TrashIcon />
                  Remove
                </StyledClearButton>
              </StyledListItem>
            </ul>
          )}

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
          <StyledLabel>First name:</StyledLabel>
          <StyledInput
            type="text"
            name={first_name}
            value={first_name}
            placeholder={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <StyledLabel>Last name:</StyledLabel>
          <StyledInput
            type="text"
            name={last_name}
            value={last_name}
            placeholder={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <StyledLabel>Email:</StyledLabel>
          <StyledInput
            type="email"
            name={email}
            value={email}
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* TODO: implement country selector drop down */}
          <StyledLabel>Location:</StyledLabel>
          <StyledInput
            type="text"
            name={location}
            value={location}
            placeholder={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <StyledLabel>Phone:</StyledLabel>
          <StyledInput
            type="phone"
            value={phone_number}
            placeholder={phone_number}
            name={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <StyledLabel>About:</StyledLabel>
          <StyledTextArea
            name={about_me}
            placeholder={about_me}
            value={about_me}
            onChange={(e) => setAboutMe(e.target.value)}
          />
          <StyledLabel>Password:</StyledLabel>
          <StyledInput type="password" />
          <StyledLabel>Things I like:</StyledLabel>
          <StyledTextArea
            value={things_user_likes}
            name={things_user_likes}
            placeholder={things_user_likes}
            onChange={(e) => setThingsUserLikes(e.target.value)}
          />
          <StyledSaveButton type="submit">Save Account</StyledSaveButton>
        </StyledForm>
      </StyledFormParentDiv>
    </>
  );
}
