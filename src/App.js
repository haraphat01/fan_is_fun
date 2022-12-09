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

function App() {
  return (
    <div className="App">
     <Home/>
     HOME
    </div>
  );
}

export default App;
