import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about"element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
