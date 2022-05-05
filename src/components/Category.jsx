import { useState } from 'react';
import axios from "axios";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Category = () => {
    // const options = {
    //     method: 'GET',
    //     url: process.env.REACT_APP_API_URL + '/categories/list',
    //     params: {lang: 'en', country: 'asia2'},
    //     headers: {
    //       'X-RapidAPI-Host': process.env.REACT_APP_Category_X_RapidAPI_Host,
    //       'X-RapidAPI-Key': process.env.REACT_APP_Category_X_RapidAPI_Key
    //     }
    // };
    
    const items = [
        <div data-value="1" className="rounded-full flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 w-48 h-48 lg:w-52 lg:h-52 mx-6 space-y-6">
            <img className="w-1/2" src="https://images.unsplash.com/photo-1525792795331-c395a556a622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80" />
            <h1 className="text-base dark:text-gray-300">Women</h1>
        </div>,
        <div data-value="2" className="rounded-full flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 w-48 h-48 lg:w-52 lg:h-52 mx-6 space-y-6">
            <img className="w-1/2" src="https://images.unsplash.com/photo-1525792795331-c395a556a622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80" />
            <h1 className="text-base dark:text-gray-300">Divided</h1>
        </div>,
        <div data-value="3" 
            style={{  
                backgroundImage: "url('https://images.unsplash.com/photo-1525792795331-c395a556a622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} 
            className="rounded-full flex flex-col items-center justify-center w-48 h-48 lg:w-52 lg:h-52 mx-6 space-y-6">
                <div className='mt-36 bg-red-500 w-40 text-center rounded-br-full rounded-bl-full'>
                    <h1 className="">Men</h1>
                </div>
        </div>,
        <div data-value="1" className="rounded-full flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 w-48 h-48 lg:w-52 lg:h-52 mx-6 space-y-6">
            <img className="w-1/2" src="https://images.unsplash.com/photo-1525792795331-c395a556a622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80" />
            <h1 className="text-base dark:text-gray-300">Women</h1>
        </div>,
        <div data-value="2" className="rounded-full flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 w-48 h-48 lg:w-52 lg:h-52 mx-6 space-y-6">
            <img className="w-1/2" src="https://images.unsplash.com/photo-1525792795331-c395a556a622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80" />
            <h1 className="text-base dark:text-gray-300">Divided</h1>
        </div>,
        <div data-value="3" className="rounded-full flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 w-48 h-48 lg:w-52 lg:h-52 mx-6 space-y-6">
            <img className="w-1/2" src="https://images.unsplash.com/photo-1525792795331-c395a556a622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80" />
            <h1 className="text-base dark:text-gray-300">Men</h1>
        </div>,
    ];

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 5 },
    };

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
                animationDuration={5000}
                disableDotsControls
                disableButtonsControls
                infinite
                items={items}
                responsive={responsive}
                mouseTracking
            />
        </div>
    );
}

export default Category;