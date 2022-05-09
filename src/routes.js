import Home from "./pages/Home";
import Product from "./pages/Product";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home/>
  },
  {
    path: "/products",
    component:  <Product/>
  }
];