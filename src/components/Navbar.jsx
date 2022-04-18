import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import axios from "axios";

const Navbar = forwardRef((props, ref) => {

    const [Sub_Categories, setSubCategories] = useState([]);

    const clothes = ["Tops", "Dresses", "Pants", "Denim", "Sweaters", "T-Shirts", "Jackets", "Activewear", "Browse All"];
    const Accessories = ["Watches", "Wallets", "Bags", "Sunglasses", "Hats", "Belts"];

    const [sidebar, set_show_side_bar] = useState(false);
    const [slide_bar, set_show_slide_bar] = useState(false);
    const [show_search_input, setSearch] = useState(false);
    const [catName, setCatName] = useState('');

    const category_api_request = {
      method: 'GET',
      url: process.env.REACT_APP_API_URL + '/categories/list',
      params: {lang: 'en', country: 'asia2'},
      headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_Category_X_RapidAPI_Host,
        'X-RapidAPI-Key': process.env.REACT_APP_Category_X_RapidAPI_Key
      }
    };

    useEffect(() => {
        // axios.request(category_api_request).then(function (response) {
        //   let categories = [];
        //   response.data.forEach(res => {
        //     categories.push(res);
        //   });
        //   setCategories([...categories]);
        // }).catch(function (error) {
        //   console.error(error);
        // }).finally(() => {
        //   console.log(Categories);
        // });
    }, []);

    const show_slide_bar = (cat_name) => {
      if(catName === cat_name && slide_bar === true){
        set_show_slide_bar(false);
      }else{
        setCatName(cat_name);
        const new_categories = Categories.filter(name => name.CatName === cat_name);
        setSubCategories([...new_categories]);
        set_show_slide_bar(true);
      }
    }

    useImperativeHandle(ref, () => ({

      closeSlideBar() {
        set_show_slide_bar(false);
      }
  
    }));

    return (
      <div className="bg-red-500" id="nav-bar">
        {/* Begin of the sm side Navbar */} 
        <div className={`fixed inset-0 flex z-40 lg:hidden ease-in-out duration-500 ${ sidebar ? "-translate-x-0" : "-translate-x-full"}`}>
            
          <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
              <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                  <button onClick={() => set_show_side_bar(!sidebar)} type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400">
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
              </div>

              <div className="mt-2">
                  <div className="border-b border-gray-200">
                    <div className="-mb-px flex px-4 space-x-8" aria-orientation="horizontal">
                        <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Women</button>
                        <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Men</button>
                    </div>
                  </div>

                  <div className="pt-10 pb-8 px-4 space-y-10">
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="group relative text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                            <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." className="object-center object-cover"/>
                        </div>
                        <a href="#" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute z-10 inset-0" aria-hidden="true"></span>
                            New Arrivals
                        </a>
                        <p aria-hidden="true" className="mt-1">Shop now</p>
                        </div>

                        <div className="group relative text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                            <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." className="object-center object-cover"/>
                        </div>
                        <a href="#" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute z-10 inset-0" aria-hidden="true"></span>
                            Basic Tees
                        </a>
                        <p aria-hidden="true" className="mt-1">Shop now</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900">Clothing</p>
                        <ul className="mt-6 flex flex-col space-y-6">
                            {clothes && clothes.map( (name, key) => { 
                                return (
                                  <li className="flow-root" key={key}>
                                      <a href="#" className="-m-2 p-2 block text-gray-500">{name}</a>
                                  </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900">Accessories</p>
                        <ul role="list" className="mt-6 flex flex-col space-y-6">
                            {Accessories && Accessories.map((name, key) => { 
                                return (
                                  <li className="flow-root" key={key}>
                                      <a href="#" className="-m-2 p-2 block text-gray-500">{name}</a>
                                  </li>
                                )
                            })}
                        </ul>
                    </div>

                  </div>

                  <div className="pt-10 pb-8 px-4 space-y-10">
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="group relative text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." className="object-center object-cover"/>
                        </div>
                        <a href="#" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute z-10 inset-0" aria-hidden="true"></span>
                            New Arrivals
                        </a>
                        <p aria-hidden="true" className="mt-1">Shop now</p>
                        </div>

                        <div className="group relative text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                            <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." className="object-center object-cover"/>
                        </div>
                        <a href="#" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute z-10 inset-0" aria-hidden="true"></span>
                            Artwork Tees
                        </a>
                        <p aria-hidden="true" className="mt-1">Shop now</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900">Clothing</p>
                        <ul className="mt-6 flex flex-col space-y-6">
                            {clothes && clothes.map( (name, key) => { 
                                return (
                                  <li className="flow-root" key={key}>
                                      <a href="#" className="-m-2 p-2 block text-gray-500">{name}</a>
                                  </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900">Accessories</p>
                        <ul role="list" className="mt-6 flex flex-col space-y-6">
                            {Accessories && Accessories.map((name, key) => { 
                                return (
                                  <li className="flow-root" key={key}>
                                      <a href="#" className="-m-2 p-2 block text-gray-500">{name}</a>
                                  </li>
                                )
                            })}
                        </ul>
                    </div>

                  </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Company</a>
                  </div>

                  <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Stores</a>
                  </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Sign in</a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Create account</a>
                  </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 p-2 flex items-center">
                    <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="w-5 h-auto block flex-shrink-0"/>
                    <span className="ml-3 block text-base font-medium text-gray-900"> CAD </span>
                    <span className="sr-only">, change currency</span>
                  </a>
              </div>
              </div>  
          </div>
        {/* End of sm side Navbar */}

        {/* > sm Navbar */}
        <header className="relative bg-white">
          <p  onClick={() => set_show_slide_bar(false)} className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">Get free delivery on orders over $100</p>

          <nav className="px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                <button onClick={() => set_show_side_bar(!sidebar)} type="button" className="bg-white p-2 rounded-md text-gray-400 lg:hidden">
                  <span className="sr-only">Open menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                <div className="ml-4 flex lg:ml-0">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt=""/>
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">

                    <div className="flex">
                      <div className="relative flex space-x-8 bg-red-600">
                        {Categories.length > 0 && Categories.map((category, key) => {
                          return (
                            <button key={key} onClick={() => show_slide_bar(category.CatName)} type="button"
                              className="border-transparent text-gray-700 hover:text-gray-800 relative
                                        z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px">
                              {category.CatName}
                            </button>
                          )
                        })}
                      </div>

                      <div className={`absolute top-full inset-x-0 text-sm text-gray-500 ${slide_bar ? "block" : "hidden"}`}>

                        <div className={`relative z-20 bg-gray-50 ease-in-out duration-500 shadow ${ slide_bar ? "translate-y-0" : "-translate-x-full"}`}>
                          <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-16">
                              
                              <div className="grid grid-cols-6 gap-y-10 gap-x-8 text-sm">
                                {Sub_Categories[0] && Sub_Categories[0].CategoriesArray && Sub_Categories[0].CategoriesArray.map((category, key) => {
                                    return (
                                      <div key={key}>
                                        <p className="font-medium text-gray-900">{category.CatName}</p>
                                        <ul className="mt-6 flex flex-col space-y-6">
                                          {category.CategoriesArray && category.CategoriesArray.map( (name, key) => { 
                                              if(key > 5){
                                                return 
                                              }else {
                                                return (
                                                  <li className="flow-root" key={key}>
                                                    <a href="#" className="-m-2 p-2 block text-gray-500 hover:text-gray-800">{name.CatName}</a>
                                                  </li>
                                                )
                                              }
                                            })
                                          }
                                        </ul>
                                      </div>
                                    )
                                })}
                              </div>

                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>

                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
                  </div>

                  <div className="hidden lg:ml-8 lg:flex">
                    <a href="#" className="text-gray-700 hover:text-gray-800 flex items-center">
                      <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="w-5 h-auto block flex-shrink-0"/>
                      <span className="ml-3 block text-sm font-medium"> CAD </span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div>

                  <div className="flex justify-center items-center lg:ml-6">
                  {show_search_input && <input type="text" className="focus:ring-indigo-600 block w-44 h-8 px-2 border shadow text-sm border-gray-300 rounded-md"/>}
                    <button className="p-2 text-gray-400 hover:text-gray-500" onClick={() => setSearch(!show_search_input)}>
                      <span className="sr-only">Search</span>
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>

                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="#" className="group -m-2 p-2 flex items-center">
                      <svg className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
});

export default Navbar;