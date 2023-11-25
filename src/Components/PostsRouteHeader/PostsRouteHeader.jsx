import {
  StyledHeaderPostsRoute,
  StyledAPostsRoute,
  StyledSpanPostsRoute,
  StyledSearchField,
} from "../../Styles/PostsRouteStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  selectSearchTerm,
} from "../../Store/Slices/searchSlice";
import SearchIcon from "../SVGComponents/SearchIcon";

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
        <StyledSearchField>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search posts"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            onKeyDown={handleKeyDown}
          />
        </StyledSearchField>
        <StyledSpanPostsRoute>
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
