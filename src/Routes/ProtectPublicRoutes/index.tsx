import { parseCookies } from "nookies";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectPublicRoutes = () => {
  const cookies = parseCookies();
  const { user_token } = cookies;

  return user_token ? <Navigate to="/" /> : <Outlet />;
};
