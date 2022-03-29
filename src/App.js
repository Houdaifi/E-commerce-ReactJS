import axios from "axios";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Promo from "./components/Promo";

function App() {

  const options = {
    method: 'GET',
    url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list',
    params: {lang: 'en', country: 'asia2'},
    headers: {
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'ddedf1a199msh79f632c48fef84fp184e2djsn71e288627a16'
    }
  };
  
  useEffect(() => {

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  });

  return (
    <div className="bg-gray-50">
      <Navbar/>
      {/* <Promo/> */}
    </div>
  );
}

export default App;
