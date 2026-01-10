import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<div>About Page</div>} />

      <Route path="/login" element={<div>Login Page</div>} />
      <Route path="/signup" element={<div>Signup Page</div>} />
    </Routes>
  );
}