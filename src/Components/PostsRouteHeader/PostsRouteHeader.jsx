import {
  StyledHeaderPostsRoute,
  StyledAPostsRoute,
  StyledSpanPostsRoute,
} from "../../Styles/PostsRouteStyles";

const PostsRouteHeader = () => {
  return (
    <>
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
    </>
  );
};

export default PostsRouteHeader;
