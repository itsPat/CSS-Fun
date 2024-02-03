import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SliderPage from "./pages/Slider/page";
import ButtonsPage from "./pages/Buttons/page";
import LiveTypePage from "./pages/LiveType/page";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/buttons" element={ <ButtonsPage/> }/>
        <Route path="/live-type" element={ <LiveTypePage/> }/>
        <Route path="/slider" element={ <SliderPage/> }/>
        <Route path="*" element={ <NotFoundPage/> }/>
      </Routes>
    </Router>
  );
}

export default App
