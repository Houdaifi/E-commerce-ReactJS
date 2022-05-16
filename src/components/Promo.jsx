const Promo = () => {
    return (
        <div className="p-40">
            {/* Google Font */}
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
            </style>
            <div className="flex flex-col space-y-10 justify-center items-center text-xl text-center">
                <h2 className="text-4xl text-white font font-bold tracking-tight">Find Clearance Up to 80% Off</h2>
                <span className="text-4xl font font-extrabold tracking-tight text-amber-500 sm:text-8xl p-5   
                    before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-100 relative inline-block"
                style={{  
                    fontFamily: "'Bangers', cursive"
                }} >
                    <span className="relative">Spring Layers to wear now</span>
                </span>
                <div className="flex items-center space-x-4 text-white">
                <button className="text-sm uppercase text-center bg-blue-700 border border-transparent rounded-md py-4 px-10 font-semibold 
                    hover:bg-blue-600 hover:text-white">
                        Shop Men
                    </button>
                    <button className="text-sm uppercase text-center bg-red-700 border border-transparent rounded-md py-4 px-10 font-semibold
                     hover:bg-red-600 hover:text-white">
                        Shop Women
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Promo;