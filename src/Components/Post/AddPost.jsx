import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../Store/Slices/postsSLice";
import { api } from "../../API/api";
import {
  StyledDivAddPost,
  StyledModal,
  StyledOverlay,
  StyledSendIcon,
} from "../../Styles/PostsRouteStyles";

function AddPost() {
  const dispatch = useDispatch();
  const [postContent, setPostContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePost = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      const formData = new FormData();
      formData.append("content", postContent);

      if (imageFile) {
        formData.append("images", imageFile);
      }

      const response = await api.post("/social/posts/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(addPost(response.data));
      setPostContent("");
      setImageFile(null);
      setImagePreview(null);
      setIsModalOpen(false);
    } catch (error) {
      console.log("Error creating post:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
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
        <StyledSendIcon src="..\src\Assets\send_icon.png" alt="" />
      </div>
      {isModalOpen && (
        <>
          <StyledOverlay onClick={() => setIsModalOpen(false)} />
          <StyledModal>
            {imagePreview && (
              <>
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
                <button onClick={handleRemoveImage}>Remove Image</button>
              </>
            )}
            <textarea
              rows="10"
              placeholder="What's on your mind?..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handlePost}>Post</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </StyledModal>
        </>
      )}
    </StyledDivAddPost>
  );
}

export default AddPost;
