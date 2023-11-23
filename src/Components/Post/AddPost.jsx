import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../Store/Slices/postsSLice";
import { api } from "../../API/api";
import { StyledDivAddPost } from "../../Styles/PostsRouteStyles";

function AddPost() {
  const dispatch = useDispatch();
  const [postContent, setPostContent] = useState("");

  const handlePost = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await api.post(
        "/social/posts/",
        { content: postContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(addPost(response.data));
      setPostContent("");
    } catch (error) {
      console.log("Error creating post:", error);
    }
  };

  return (
    <StyledDivAddPost>
      <div>
        <img src="../src/Assets/pb_placeholder.jpg" alt="" />
        <input
          type="text"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>
      <button onClick={handlePost}>Post</button>
    </StyledDivAddPost>
  );
}

export default AddPost;
