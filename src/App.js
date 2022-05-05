import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  const navBarRef = useRef();

  const closeSlideBar = () => {
    navBarRef.current.closeSlideBar();
  };

  return (
    <Router>
      <div className="bg-gray-50 bg-hero-pattern">
        <Navbar ref={navBarRef} />
        <div onClick={() => {closeSlideBar()}} className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Product />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
