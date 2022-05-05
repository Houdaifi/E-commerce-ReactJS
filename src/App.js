import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  const navBarRef = useRef();

  return (
    <Router>
      <div className="bg-gray-50">
        <Navbar ref={navBarRef} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Product />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
