import "./App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// layouts
import MainLayout from "./layouts/mainLayout";
import HomePage from "./containers/homepage/Home";
import Search from "./containers/search";
import Profile from "./containers/profile";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/profile/:userId" element={<Profile />}></Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
