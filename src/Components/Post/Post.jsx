import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPosts,
  likePost,
  incrementSkip,
} from "../../Store/Slices/postsSLice";
import { api } from "../../API/api";
import {
  StyledBodyPostsRoute,
  StyledDivPostsRoute,
  StyleduserPostDiv,
  StyledlikeSharePostsRoute,
  StyledPPostsRoute,
  StyledProfileAndUserPostDiv,
} from "../../Styles/PostsRouteStyles";
import { StyledDivContainerPostsRoute } from "../../Styles/PostsRouteStyles";
import AddPost from "./AddPost";
import LikeIcon from "../SVGComponents/LikeIcon";
import ShareIcon from "../SVGComponents/ShareIcon";
import MenuIcon from "../SVGComponents/MenuIcon";

const placeholderAvatar = "../src/Assets/pb_placeholder.jpg";

const Post = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const skip = useSelector((state) => state.posts.skip);
  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    getPosts();
  }, [skip, searchTerm]);

  const getPosts = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await api.get("/social/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          skip,
          limit: 50,
        },
      });

      dispatch(setPosts(res.data.results));
      console.log(res)
    } catch (error) {
      console.log("error", error);
    }
  };

  const filteredPosts = postsList.filter(
    (post) =>
      post.user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLike = async (postId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await api.post(`/social/posts/toggle-like/${postId}/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedPost = await api.get(`/social/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(likePost(updatedPost.data));
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleShare = async (postId) => {
    try {
      const token = localStorage.getItem("accessToken");

      const originalPost = await api.get(`/social/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const formData = new FormData();
      formData.append(
        "content",
        `${originalPost.data.content} shared from: ${originalPost.data.user.first_name} ${originalPost.data.user.last_name}`
      );

      const response = await api.post("/social/posts/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error sharing post:", error);
    }
  };

  const handleLoadMore = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await api.get("/social/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          skip: skip,
          limit: 50,
        },
      });

      dispatch(setPosts([...postsList, ...res.data.results]));
      incrementSkip((prevSkip) => prevSkip + 50);
    } catch (error) {
      console.log("Error loading more posts:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  return (
    <>
      <StyledBodyPostsRoute>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <StyledDivContainerPostsRoute>
            <AddPost />
            {filteredPosts.map((post, index) => (
              <StyledDivPostsRoute key={`${post.id}-${index}`}>
                <StyleduserPostDiv>
                  <StyledProfileAndUserPostDiv>
                    <img
                      src={post.user.avatar || placeholderAvatar}
                      alt="User Avatar"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    <span>
                      <div>
                        {post.user.first_name} {post.user.last_name}
                      </div>
                      <div>{formatDate(post.created)}</div>
                    </span>
                  </StyledProfileAndUserPostDiv>
                  <MenuIcon></MenuIcon>
                </StyleduserPostDiv>

                <StyledPPostsRoute>{post.content}</StyledPPostsRoute>
                {post.images.length > 0 && (
                  <img
                    src={post.images[0].image}
                    alt={`Post Image`}
                    style={{ width: "80%", height: "auto" }}
                  />
                )}
                <StyledlikeSharePostsRoute>
                  <div>
                    <button onClick={() => handleLike(post.id)}>
                      {" "}
                      <LikeIcon />
                      like
                    </button>
                    <button onClick={() => handleShare(post.id)}>
                      {" "}
                      <ShareIcon />
                      share
                    </button>
                  </div>
                  <p>{post.amount_of_likes} likes</p>
                </StyledlikeSharePostsRoute>
              </StyledDivPostsRoute>
            ))}
            {filteredPosts.length > 0 && (
              <button onClick={handleLoadMore}>Load More</button>
            )}
          </StyledDivContainerPostsRoute>
        )}
      </StyledBodyPostsRoute>
    </>
  );
};

export default Post;
