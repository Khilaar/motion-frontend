import { BrowserRouter, Routes, Route } from "react-router-dom";

/*Routes import*/
import Login from "./LoginRoute/LoginRoute";
import NotFound from "./NotFoundRoute/NotFound";
import Layout from "./LayoutRoute/LayoutRoute";
import Posts from "./PostsRoute/PostsRoute";
import FindFriends from "./FriendsRoute/FriendsRoute";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="*" element={<NotFound />} />
            <Route path="" element={<ProtectedRoutes />}>
              <Route path="/posts" element={<Posts />}></Route>
              <Route path="/friends" element={<FindFriends />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
