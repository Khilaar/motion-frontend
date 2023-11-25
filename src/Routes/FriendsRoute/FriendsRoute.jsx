import { FriendCard, FriendContainer } from "../../Styles/FriendRouteStyles";
import { api } from "../../API/api";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { StyledBtn } from "../../Styles/ButtonStyles";

const FindFriends = () => {
  const [friends, setFriends] = useState([]);
  const token = useSelector((state) => state.user.accessToken);
  const config = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    api.get("users/?limit=10000&offset=500", config).then((data) => {
      setFriends(data.data.results);
      console.log(data);
    });
  }, [token]);

  const handleFollow = async (e) => {
    try {
      const userid = e.target.parentElement.getAttribute("data-key");
      const resp = await api.post(
        `social/followers/toggle-follow/${userid}/`,
        null,
        config
      );
      setFriends([
        ...friends.map((obj) => (obj.id === resp.data.id ? resp.data : obj)),
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFriendRequest = async (e) => {
    const userid = e.target.parentElement.getAttribute("data-key");
    const isfriend = e.target.getAttribute("data-isfriend");
    try {
      if (isfriend === "true") {
        const requests = await api.get("social/friends/requests", config);
        const requestid = requests.data.results.filter(
          (obj) => obj.receiver.id.toString() === userid
        )[0].id;

        // eslint-disable-next-line no-unused-vars
        const resp = await api.delete(
          `social/friends/requests/${requestid}/`,
          config
        );

        const updateobj = friends.filter(
          (obj) => obj.id.toString() === userid
        )[0];

        updateobj.logged_in_user_is_friends = false;
        setFriends([
          ...friends.filter((obj) => obj.id.toString() !== userid),
          updateobj,
        ]);
      } else {
        // eslint-disable-next-line no-unused-vars
        const resp = await api.post(
          `social/friends/request/${userid}/`,
          null,
          config
        );
        alert("Friend Request Sent");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const placeholderAvatar = "../src/Assets/pb_placeholder.jpg";
  return (
    <>
      <FriendContainer>
        {friends
          .filter((obj) => obj.first_name)
          .map((obj) => (
            <FriendCard key={obj.id}>
              <img src={obj.avatar || placeholderAvatar} alt="avatar img" />
              <h3>{`${obj.first_name} ${
                obj.last_name || "Placeholder Name"
              }`}</h3>
              <p>{obj.location || "Placholder Location"}</p>
              <div className="btn-container" key={obj.id} data-key={obj.id}>
                <StyledBtn
                  onClick={(e) => handleFollow(e)}
                  $gradient={obj.logged_in_user_is_following}
                >
                  {obj.logged_in_user_is_following ? "FOLLOWING" : "FOLLOW"}
                </StyledBtn>
                <StyledBtn
                  data-isfriend={obj.logged_in_user_is_friends}
                  onClick={(e) => handleFriendRequest(e)}
                >
                  {obj.logged_in_user_is_friends ? "✔️ FRIEND" : "ADD FRIEND"}
                </StyledBtn>
              </div>
              <p className="desc-text">
                {obj.about_me ||
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                quam tempore tempora dolor quas doloribus expedita culpa
                provident. Perferendis iusto dolores illum excepturi a magnam
                laudantium aperiam perspiciatis eum facere!`}
              </p>

              {obj.things_user_likes.length > 0 && (
                <div className="hobby-cotainer">
                  {obj.things_user_likes.length > 0 &&
                    obj.things_user_likes.map((hobby) => (
                      <span key={hobby} className="hobby">
                        {hobby}
                      </span>
                    ))}
                </div>
              )}

              {!obj.things_user_likes.length && (
                <div className="hobby-cotainer">
                  <span className="hobby">Placeholder</span>
                  <span className="hobby">Placeholder</span>
                  <span className="hobby">Placeholder</span>
                  <span className="hobby">Placeholder</span>
                </div>
              )}
            </FriendCard>
          ))}
      </FriendContainer>
    </>
  );
};

export default FindFriends;
