import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useRef } from "react";
import {routes} from "./routes";
import Navbar from "./components/Navbar";

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
            {routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} exact={route.exact} element={route.component}/>
              )
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
