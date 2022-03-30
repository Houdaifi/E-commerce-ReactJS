import { useState } from 'react';
import axios from "axios";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Category = () => {
    const options = {
        method: 'GET',
        url: process.env.REACT_APP_API_URL + '/categories/list',
        params: {lang: 'en', country: 'asia2'},
        headers: {
          'X-RapidAPI-Host': process.env.REACT_APP_Category_X_RapidAPI_Host,
          'X-RapidAPI-Key': process.env.REACT_APP_Category_X_RapidAPI_Key
        }
    };
    
    const items = [
        <div className="flex justify-center items-center" data-value="1">
            <img className='' src="https://images.unsplash.com/photo-1525792795331-c395a556a622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80" alt="" />
        </div>,
        // <div className="item" data-value="2">
        //     <img src="https://images.unsplash.com/photo-1525792795331-c395a556a622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80" alt="" />
        // </div>,
        // <div className="item" data-value="3">
        //     <img src="https://images.unsplash.com/photo-1525792795331-c395a556a622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80" alt="" />
        // </div>,
        // <div className="item" data-value="4">
        //     <img src="https://images.unsplash.com/photo-1525792795331-c395a556a622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80" alt="" />
        // </div>,
        // <div className="item" data-value="5">
        //     <img src="https://images.unsplash.com/photo-1525792795331-c395a556a622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80" alt="" />
        // </div>,
    ];

    const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     axios.request(options).then(function (response) {
    //         setCategories(response)
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // });

    return (
        <div className=''>
            <AliceCarousel
                autoPlay
                animationDuration={1000}
                disableDotsControls
                disableButtonsControls
                infinite
                items={items}
                mouseTracking
            />
        </div>
    );
}

export default Category;