import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.user.accessToken);
  console.log(location);
  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  return <Outlet />;
};
export default ProtectedRoutes;
