import { useEffect } from "react";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Promo from "./components/Promo";

function App() {

  // const options = {
  //   method: 'GET',
  //   url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
  //   headers: {
  //     'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
  //     'X-RapidAPI-Key': 'ddedf1a199msh79f632c48fef84fp184e2djsn71e288627a16'
  //   }
  // };
  
  

  

  return (
    <div className="bg-gray-50">
      <Navbar/>
      {/* <Category/> */}
      {/* <Promo/> */}
    </div>
  );
}

export default App;
