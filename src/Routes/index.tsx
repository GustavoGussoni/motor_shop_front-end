import { Navigate, Routes, Route } from "react-router-dom";
import { Register } from "../Pages/Register";
import { AdminProfile } from "../Pages/AdminProfile";
import { UserProfile } from "../Pages/UserProfile";
import { Home } from "../Pages/Home";
import { Product } from "../Pages/Product";
import { Login } from "../Pages/Login";

export const RouteMain = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="profile">
        <Route path="user" element={<UserProfile />} />
        <Route path="admin" element={<AdminProfile />} />
      </Route>
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};
