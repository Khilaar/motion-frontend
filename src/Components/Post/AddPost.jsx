import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../Store/Slices/postsSLice";
import { api } from "../../API/api";
import {
  StyledDivAddPost,
  StyledModal,
  StyledOverlay,
} from "../../Styles/PostsRouteStyles";

function AddPost() {
  const dispatch = useDispatch();
  const [postContent, setPostContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      setIsModalOpen(false);
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
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      {isModalOpen && (
        <>
          <StyledOverlay onClick={() => setIsModalOpen(false)} />
          <StyledModal>
            <textarea
              rows="10"
              placeholder="Whats on your mind?..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <button onClick={handlePost}>Post</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </StyledModal>
        </>
      )}
    </StyledDivAddPost>
  );
}

export default AddPost;
