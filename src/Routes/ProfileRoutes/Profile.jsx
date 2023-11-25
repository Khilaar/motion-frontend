import React, { useEffect, useState } from "react";
import {
  ProfileHeader,
  StyledDivProfileContainer,
  StyledProfileDiv,
  StyledProfileAboutDiv,
  StyledThingsILikeDiv,
  StyledButtonThingsILike,
  StyledContactDetails,
  StyledStats,
  StyledStatsDiv,
  StyledProfileParent,
} from "../../Styles/ProfileStyles.jsx";
import jennierAvatar from "../../Components/MotionBackground/assets/images/jennifer.png";
import ProfileCard from "../../Components/Profile/ProfileCard.jsx";
import { useSelector } from "react-redux";
import { api } from "../../API/api.js";

export default function Profile() {
  const [showForm, setShowForm] = useState(false);
  const local_user_id = JSON.parse(localStorage.getItem("userDetails")).id;
  const accessToken = useSelector((state) => state.user.accessToken);
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  // stateful variables for tracking and updating form input changes.
  const userAvatar = useSelector((state) => state.user.details?.avatar);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [about_me, setAboutMe] = useState("");
  const [things_user_likes, setThingsUserLikes] = useState("");
  const [amount_following, setAmountFollowing] = useState(0);
  const [amount_of_followers, setFollowers] = useState(0);
  const [amount_of_friends, setAmountOfFriends] = useState(0);
  const [amount_of_likes, setAmountOfLikes] = useState(0);
  const [amount_of_posts, setAmountOfPosts] = useState(0);

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
      setAmountFollowing(data.amount_following);
      setFollowers(data.amount_of_followers);
      setAmountOfFriends(data.amount_of_friends);
      setAmountOfLikes(data.amount_of_likes);
      setAmountOfPosts(data.amount_of_posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails(local_user_id, config);
  }, [accessToken]);

  return (
    <>
      <StyledProfileParent>
        <ProfileHeader />
        {showForm ? (
          <ProfileCard setShowForm={setShowForm} />
        ) : (
          <StyledDivProfileContainer>
            <StyledProfileDiv>
              <img src={jennierAvatar} />
              <h1>
                {first_name} {last_name}
              </h1>
              <h3>{location}</h3>
              <button onClick={() => setShowForm(!showForm)}>
                Edit Profile
              </button>
            </StyledProfileDiv>
            <StyledProfileAboutDiv>
              <h6>About</h6>
              <p>{about_me}</p>
              <StyledContactDetails>
                <p>
                  Email <br></br> {email}
                </p>
                <p>
                  Phone <br></br> {phone_number}
                </p>
              </StyledContactDetails>
            </StyledProfileAboutDiv>

            <StyledThingsILikeDiv>
              <h6>Things I like</h6>

              <StyledButtonThingsILike>
                {things_user_likes}
              </StyledButtonThingsILike>
            </StyledThingsILikeDiv>
            <StyledStatsDiv>
              <StyledStats>
                <h3>{amount_of_posts}</h3>
                <p>Posts</p>
              </StyledStats>
              <StyledStats>
                <h3>{amount_of_likes}</h3>
                <p>Likes</p>
              </StyledStats>
              <StyledStats>
                <h3>{amount_of_friends}</h3>
                <p>Friends</p>
              </StyledStats>
              <StyledStats>
                <h3>{amount_of_followers}</h3>
                <p>Followers</p>
              </StyledStats>
              <StyledStats>
                <h3>{amount_following}</h3>
                <p>Following</p>
              </StyledStats>
            </StyledStatsDiv>
          </StyledDivProfileContainer>
        )}
      </StyledProfileParent>
    </>
  );
}
