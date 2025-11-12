
function Product() {
    return(
        <div className="p-4 space-y-8">
            <h1 className="text-center text-4xl text-yellow-900 font-large">LEISURE MARKET</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
                <div className="bg-gray-200 rounded-lg flex flex-col items-center p-4 shadow-md text-yellow-700">
                    <img className="w-50 h-50 object-contain" src="https://i.ytimg.com/vi/p7cfkmZX4UM/maxresdefault.jpg" alt="jollof-rice" />
                    <p className="text-xl font-medium mb-2">Jollof rice</p>
                    <p className="font-mono" > ₦1,500</p>
                    <button className="mt-4 bg-yellow-800 py-2 px-6 rounded-md text-lg text-white cursor-pointer hover:bg-yellow-700">Order</button>
                </div>

                 <div className="bg-gray-200 rounded-lg flex flex-col items-center p-2 shadow-md text-yellow-700">
                    <img className="w-50 h-50 object-contain" src="https://tse4.mm.bing.net/th/id/OIP.sFPKseJlPSGSdQxKG36U3QHaE7?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="jollof-rice" />
                    <p className="text-xl font-medium mb-2">Suya</p>
                    <p className="font-mono"> ₦1,000</p>
                    <button className="mt-4 bg-yellow-800 py-2 px-6 rounded-md text-lg text-white cursor-pointer hover:bg-yellow-700">Order</button>
                </div>

                <div className="bg-gray-200 rounded-lg flex flex-col items-center p-2 shadow-md text-yellow-700">
                    <img className="w-50 h-50 object-contain" src="https://www.tastingtable.com/img/gallery/what-is-palm-wine-and-why-is-it-so-popular-in-india/l-intro-1720556028.jpg" />
                    <p className="text-xl font-medium mb-2">Palm Wine</p>
                    <p className="font-mono"> ₦1,200</p>
                    <button className="mt-4 bg-yellow-800 py-2 px-6 rounded-md text-lg text-white cursor-pointer hover:bg-yellow-700">Order</button>
                </div>

                <div className="bg-gray-200 rounded-lg flex flex-col items-center p-2 shadow-md text-yellow-700">
                    <img className="w-40 h-50 object-contain" src="https://i.etsystatic.com/10672003/r/il/ea3d76/3668159551/il_600x600.3668159551_qhke.jpg" />
                    <p className="text-xl font-medium mb-2">Ankara Fabric</p>
                    <p className="font-mono"> ₦5,000</p>
                    <button className="mt-4 bg-yellow-800 py-2 px-6 rounded-md text-lg text-white cursor-pointer hover:bg-yellow-700">Order</button>
                </div>

                <div className="bg-gray-200 rounded-lg flex flex-col items-center p-2 shadow-md text-yellow-700">
                    <img className="w-50 h-50 object-contain" src="https://i.etsystatic.com/18437102/r/il/575b25/4796622567/il_1080xN.4796622567_nbk5.jpg" />
                    <p className="text-xl font-medium mb-2">Aso-Ebi lace</p>
                    <p className="font-mono"> ₦15,000</p>
                    <button className="mt-4 bg-yellow-800 py-2 px-6 rounded-md text-lg text-white cursor-pointer hover:bg-yellow-700">Order</button>
                </div>

                <div className="bg-gray-200 rounded-lg flex flex-col items-center p-2 shadow-md text-yellow-700">
                    <img className="w-50 h-50 object-contain" src="https://tse4.mm.bing.net/th/id/OIP.-TeCPsuq3R6sohJMttt1QwHaNK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3g" />
                    <p className="text-xl font-medium mb-2">Agbada</p>
                    <p className="font-mono"> ₦25,000</p>
                    <button className="mt-4 bg-yellow-800 py-2 px-6 rounded-md text-lg text-white cursor-pointer hover:bg-yellow-700">Order</button>
                </div>

                <div className="bg-gray-200 rounded-lg flex flex-col items-center p-2 shadow-md text-yellow-700">
                    <img className="w-50 h-50 object-contain" src="https://www.seriouseats.com/thmb/djGjGVNbXyMb6r_Rm8qfj4yctMM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220822-ChinChinMaureen-Celestine-20_1-00ad72b42c61430cb47dc958671a395f.JPG" />
                    <p className="text-xl font-medium mb-2">Chin-Chin</p>
                    <p className="font-mono"> ₦500</p>
                    <button className="mt-4 bg-yellow-800 py-2 px-6 rounded-md text-lg text-white cursor-pointer hover:bg-yellow-700">Order</button>
                </div>

                <div className="bg-gray-200 rounded-lg flex flex-col items-center p-2 shadow-md text-yellow-700">
                    <img className="w-50 h-50 object-contain" src="https://simshomekitchen.com/wp-content/uploads/2023/01/puffpuff-nigerian.png" />
                    <p className="text-xl font-medium mb-2">Puff-Puff</p>
                    <p className="font-mono"> ₦300</p>
                    <button className="mt-4 bg-yellow-800 py-2 px-6 rounded-md text-lg text-white cursor-pointer hover:bg-yellow-700">Order</button>
                </div>
            </div>
        </div>
    )
}
export default Product