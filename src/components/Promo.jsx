const Promo = () => {
    return (
        <div className="bg-hero-pattern p-16">
            <div className="flex flex-col space-y-10 justify-center items-center text-xl">
                <h1 className="text-4xl font font-extrabold tracking-tight text-gray-800 sm:text-6xl">Spring Layers to wear now</h1>
                <h2 className="mt-4 text-4xl text-white font font-bold tracking-tight">Find Clearance Up to 80% Off</h2>
                <div className="flex items-center space-x-4">
                    <button className="text-sm uppercase text-center bg-gray-100 border border-transparent rounded-md py-4 px-10 font-semibold font hover:bg-blue-600 hover:text-white">
                        Shop Women
                    </button>
                    <button className="text-sm uppercase text-center bg-gray-100 border border-transparent rounded-md py-4 px-10 font-semibold  hover:bg-blue-600 hover:text-white">
                        Shop Men
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Promo;