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
} from "../../Styles/PostsRouteStyles";
import { StyledDivContainerPostsRoute } from "../../Styles/PostsRouteStyles";
import AddPost from "./AddPost";

const placeholderAvatar = "../src/Assets/pb_placeholder.jpg";

const Post = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const skip = useSelector((state) => state.posts.skip);

  useEffect(() => {
    getPosts();
  }, [skip]);

  const getPosts = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await api.get("/social/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          skip,
          limit: 20,
        },
      });

      dispatch(setPosts(res.data.results));
      console.log(res)
    } catch (error) {
      console.log("error", error);
    }
  };

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

  const handleLoadMore = () => {
    incrementSkip((prevSkip) => prevSkip + 20);
    getPosts();
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
            {postsList.map((post, index) => (
              <StyledDivPostsRoute key={`${post.id}-${index}`}>
                <StyleduserPostDiv>
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
                    <button onClick={() => handleLike(post.id)}>like</button>
                    <button>share</button>
                  </div>
                  <p>Number of likes: {post.amount_of_likes}</p>
                </StyledlikeSharePostsRoute>
              </StyledDivPostsRoute>
            ))}
            {postsList.length > 0 && (
              <button onClick={handleLoadMore}>Load More</button>
            )}
          </StyledDivContainerPostsRoute>
        )}
      </StyledBodyPostsRoute>
    </>
  );
};

export default Post;
