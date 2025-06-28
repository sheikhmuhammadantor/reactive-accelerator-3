import { Route, Routes } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import About from "../pages/About";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import City from "../pages/concerts/City";
import ConcertsHome from "../pages/concerts/ConcertsHome";
import Trending from "../pages/concerts/Trending";
import Home from "../pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route>
    </Routes>
  );
}
