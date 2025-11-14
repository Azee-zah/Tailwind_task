import { useState } from "react";

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <nav className="bg-white shadow-lg">
            <div className="">
                <div className="flex justify-between items-center mx-4 h-16">
                    {/* for logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold ">LM</div>
                        <span className="text-xl font-bold text-gray-800">leisureMarket</span>
                    </div>
                    {/* desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-gray-700 font-medium hover:text-green-800 hover:scale-105">Home</a>
                        <a href="#" className="text-gray-700 font-medium hover:text-green-800 hover:scale-105">Products</a>
                        <a href="#" className="text-gray-700 font-medium hover:text-green-800 hover:scale-105">Prices</a>
                        <a href="#" className="text-gray-700 font-medium hover:text-green-800 hover:scale-105">Contact</a>
                    </div>
                    {/* destop button  */}
                    <div className="hidden md:flex items-center gap-4">
                        <p className="text-2xl">
                            🛒
                        </p>

                        <button className="bg-green-700 text-white px-6 py-2 rounded-lg text-lg font-bold hover:bg-green-500">Login</button>
                    </div>

                    {/* mobile menu button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 text-2xl font-bold">
                        {isOpen ? 'X' : '☰'}
                    </button>
                </div>

                {/* the menu for mobile view */}
                {isOpen && (
                    <div className="md:hidden py-4 mx-4 border-t">
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-gray-700 font-medium hover:text-green-700">Home</a>
                            <a href="#" className="text-gray-700 font-medium hover:text-green-700">Products</a>
                            <a href="#" className="text-gray-700 font-medium hover:text-green-700">Price</a>
                            <a href="#" className="text-gray-700 font-medium hover:text-green-700">Contact</a>
                            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 ">Login</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
        
    )
}
export default MobileMenu

