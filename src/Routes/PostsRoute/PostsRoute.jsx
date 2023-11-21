import { api } from "../../API/api";
import PostsRouteHeader from "../../Components/PostsRouteHeader/PostsRouteHeader";

const Posts = () => {
  const getPosts = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await api.get("/social/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <PostsRouteHeader />
      <button onClick={() => getPosts()}>Click me</button>
    </>
  );
};

export default Posts;
