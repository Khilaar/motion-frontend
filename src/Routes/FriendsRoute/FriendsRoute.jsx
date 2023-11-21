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
    api.get("users", config).then((data) => {
      console.log(data.data);
      setFriends(data.data.results);
    });
  }, [token]);

  return (
    <>
      <FriendContainer>
        {friends.map((obj) => (
          <FriendCard key={obj.id}>
            <img src={obj.avatar} alt="avatar img" />
            <h3>{`${obj.first_name} ${
              obj.last_name || "Placeholder Name"
            }`}</h3>

            <p>{obj.location || "Placholder Location"}</p>
            <div className="btn-container">
              <StyledBtn>FOLLOW</StyledBtn>
              <StyledBtn>ADD FRIEND</StyledBtn>
            </div>
            <p className="desc-text">
              {obj.about_me ||
                `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              quam tempore tempora dolor quas doloribus expedita culpa
              provident. Perferendis iusto dolores illum excepturi a magnam
              laudantium aperiam perspiciatis eum facere!`}
            </p>

            {(obj.things_user_likes.length > 0 && (
              <div className="hobby-cotainer">
                {obj.things_user_likes.length > 0 &&
                  obj.things_user_likes.map((hobby) => (
                    <span key={hobby} className="hobby">
                      {hobby}
                    </span>
                  ))}
              </div>
            )) || (
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
