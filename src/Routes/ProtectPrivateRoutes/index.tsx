import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

export const ProtectPrivateRoutes = () => {
  const cookies = parseCookies();
  const { user_token } = cookies;
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user_token) {
      setUser(null);
      return navigate("");
    }
  }, []);

  return user ? <Outlet /> : <Navigate to="/" />;
};
