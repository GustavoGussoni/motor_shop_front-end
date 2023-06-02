import { Navigate, Routes, Route } from "react-router-dom";
import { Register } from "../Pages/Register";
import { AdminProfile } from "../Pages/AdminProfile";
import { UserProfile } from "../Pages/UserProfile";
import { Home } from "../Pages/Home";

export const RouteMain = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="profile">
        <Route path="user" element={<UserProfile />} />
        <Route path="admin" element={<AdminProfile />} />
      </Route>
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};
