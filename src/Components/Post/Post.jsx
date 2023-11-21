import { useState, useEffect } from "react";
import { api } from "../../API/api";
import {
  StyledBodyPostsRoute,
  StyledDivPostsRoute,
  StyleduserPostDiv,
  StyledlikeSharePostsRoute,
  StyledPPostsRoute,
} from "../../Styles/PostsRouteStyles";

import { StyledDivContainerPostsRoute } from "../../Styles/PostsRouteStyles";

const Post = () => {
  const [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getPosts = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await api.get("/social/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPostsList(res.data.results);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const postsToDisplay = postsList.slice(5);
  console.log(postsToDisplay);

  return (
    <>
      <StyledBodyPostsRoute>
        {loading ? ( // Check if loading is true
          <p>Loading...</p>
        ) : (
          <StyledDivContainerPostsRoute>
            {postsToDisplay.map((post) => (
              <StyledDivPostsRoute key={post.id}>
                <StyleduserPostDiv>
                  <img
                    src={post.user.avatar}
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
                    <p>like</p>
                    <p>share</p>
                  </div>
                  <p>number of likes</p>
                </StyledlikeSharePostsRoute>
              </StyledDivPostsRoute>
            ))}
          </StyledDivContainerPostsRoute>
        )}
      </StyledBodyPostsRoute>
    </>
  );
};

export default Post;
