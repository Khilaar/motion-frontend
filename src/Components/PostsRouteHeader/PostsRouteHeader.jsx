import {
  StyledHeaderPostsRoute,
  StyledAPostsRoute,
  StyledSpanPostsRoute,
} from "../../Styles/PostsRouteStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  selectSearchTerm,
} from "../../Store/Slices/searchSlice";

const PostsRouteHeader = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const handleSearch = () => {
    dispatch(setSearchTerm(searchTerm));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <StyledHeaderPostsRoute>
        <input
          type="text"
          placeholder="Search posts"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          onKeyDown={handleKeyDown}
        />
        <StyledSpanPostsRoute>
          <StyledAPostsRoute href="#" onClick={handleSearch}>
            Search
          </StyledAPostsRoute>
          <StyledAPostsRoute href="#">All</StyledAPostsRoute>
          <StyledAPostsRoute href="#">Liked</StyledAPostsRoute>
          <StyledAPostsRoute href="#">Friends</StyledAPostsRoute>
          <StyledAPostsRoute href="#">Follow</StyledAPostsRoute>
        </StyledSpanPostsRoute>
      </StyledHeaderPostsRoute>
    </>
  );
};

export default PostsRouteHeader;
