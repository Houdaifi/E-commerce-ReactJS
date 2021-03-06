import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Category = () => {
    
    const items = [
        <div data-value="1" className="rounded-full flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 w-48 h-48 lg:w-52 lg:h-52 mx-6 space-y-6">
            <img className="w-1/2"  />
            <h1 className="text-base dark:text-gray-300">Women</h1>
        </div>,
        <div data-value="2" className="rounded-full flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 w-48 h-48 lg:w-52 lg:h-52 mx-6 space-y-6">
            <img className="w-1/2"  />
            <h1 className="text-base dark:text-gray-300">Divided</h1>
        </div>,
        <div data-value="3" 
            style={{  
                backgroundImage: "url()",
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
            <img className="w-1/2"  />
            <h1 className="text-base dark:text-gray-300">Women</h1>
        </div>,
        <div data-value="2" className="rounded-full flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 w-48 h-48 lg:w-52 lg:h-52 mx-6 space-y-6">
            <img className="w-1/2"  />
            <h1 className="text-base dark:text-gray-300">Divided</h1>
        </div>,
        <div data-value="3" className="rounded-full flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 w-48 h-48 lg:w-52 lg:h-52 mx-6 space-y-6">
            <img className="w-1/2"  />
            <h1 className="text-base dark:text-gray-300">Men</h1>
        </div>,
    ];

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 5 },
    };

    const [categories, setCategories] = useState([]);

    return (
        <div className='bg-yellow-200 w-full py-4 h-full'>
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