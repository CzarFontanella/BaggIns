import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Dashboard from "./pages/Home/Sections/Dashboard";

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />

      <Route path="/home" element={<Home />}>
        <Route index element={<Dashboard />} />
        <Route path="expenses" element={<div>Expenses Content</div>} />
        <Route path="cards" element={<div>Cards Content</div>} />
        <Route path="settings" element={<div>Settings Content</div>} />
      </Route>
      
      <Route path="/about" element={<About />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Navigate to="/" />} />
    </Routes>
  );
}