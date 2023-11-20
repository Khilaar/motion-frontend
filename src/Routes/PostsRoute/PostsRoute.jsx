import {
  StyledAPostsRoute,
  StyledHeaderPostsRoute,
  StyledSpanPostsRoute,
} from "../../Styles/PostsRouteStyles";

const Posts = () => {
  return (
    <div>
      <StyledHeaderPostsRoute>
        <input type="text" placeholder="Search posts" />
        <StyledSpanPostsRoute>
          <StyledAPostsRoute href="#">All</StyledAPostsRoute>
          <StyledAPostsRoute href="#">Liked</StyledAPostsRoute>
          <StyledAPostsRoute href="#">Friends</StyledAPostsRoute>
          <StyledAPostsRoute href="#">Follow</StyledAPostsRoute>
        </StyledSpanPostsRoute>
      </StyledHeaderPostsRoute>
      <h2>Posts</h2>
    </div>
  );
};

export default Posts;
