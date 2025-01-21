import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About.js";
import GetInTouch from "./pages/getInTouch/GetInTouch.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about"element={<About/>}/>
          <Route path="/get-in-touch" element={<GetInTouch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
