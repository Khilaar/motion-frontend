import { StyledDivAddPost } from "../../Styles/PostsRouteStyles";

function AddPost() {
  return (
    <StyledDivAddPost>
      <div>
        <img src="../src/Assets/pb_placeholder.jpg" alt="" />
        <input type="text" placeholder="Whats on your mind?" />
      </div>
      <button></button>
    </StyledDivAddPost>
  );
}

export default AddPost;
