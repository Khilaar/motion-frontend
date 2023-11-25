import { BrowserRouter, Routes, Route } from "react-router-dom";

/*Routes import*/
import Login from "./LoginRoute/LoginRoute";
import NotFound from "./NotFoundRoute/NotFound";
import Layout from "./LayoutRoute/LayoutRoute";
import Posts from "./PostsRoute/PostsRoute";
import FindFriends from "./FriendsRoute/FriendsRoute";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import Profile from "./ProfileRoutes/Profile";
import Notification from "./NotificationRoute/NotificationRoute";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="*" element={<NotFound />} />
            <Route path="/profile" element={<Profile />} />
            {/* move profile to protected after completing testing */}

            <Route path="" element={<ProtectedRoutes />}>
              <Route path="/posts" element={<Posts />}></Route>
              <Route path="/friends" element={<FindFriends />}></Route>/{" "}
              <Route path="/notifications" element={<Notification />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
