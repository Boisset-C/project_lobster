import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./component/nav/Nav";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import ShelterReviewPage from "./pages/ShelterReviewPage";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="review" element={<ShelterReviewPage />} />
        <Route path="profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
