
function Pricing() {
    return(
        <div className="bg-gray-200 max-w-3xl my-10 mx-auto border-1 border-gray-300 my-4">

            <h1 className="text-center font-bolder text-3xl my-2 p-2 text-green-900">DUO PRICNG TABLE</h1>
            <div className="grid grid-cols-3 gap-6 justify-center items-center my-10 mx-5 p-2">
                <div className="flex flex-col justify-evenly bg-gray-100 shadow-xl w-50 h-70 p-5 rounded-lg">
                    <p className="font-bold text-2xl">Basic</p>
                    <p className="font-large font-serif">₦5,000/month</p>
                    <ul className="p-2">
                        <li> ✅ Free Support 24/7</li>
                        <li> ✅ 10 Databases</li>
                        <li>❌ Ads free</li>
                        <li> ❌ Email</li>
                    </ul>
                    <button className="bg-green-700 px-4 text-white font-medium  rounded-lg hover:bg-green-500 cursor-pointer">Request a Demo</button>
                </div>

                <div className="flex flex-col justify-evenly bg-gray-100 shadow-2xl w-50 h-90 p-5 rounded-lg scale-110">
                    <p className="font-bold text-2xl">Pro</p>
                    <p className="font-large font-serif">₦15,000/month</p>
                    <ul className="p-2">
                        <li> ✅ Free Support 24/7</li>
                        <li> ✅10 Databases</li>
                        <li> ✅Ads free</li>
                        <li> ❌Email</li>
                    </ul>
                    <button className=" bg-green-700 px-4 text-white font-medium  rounded-lg hover:bg-green-500 cursor-pointer">Request a Demo</button>

                </div>

                <div className="flex flex-col justify-evenly bg-gray-100 shadow-xl w-50 h-70 p-5 rounded-lg">
                    <p className="font-bold text-2xl">Enterprise</p>
                    <p className="font-large font-serif">₦50,000/month</p>
                    <ul className="p-2">
                        <li>✅Free Support 24/7</li>
                        <li>✅10 Databases</li>
                        <li>✅Ads free</li>
                        <li>✅Email</li>
                    </ul>
                    <button className="bg-green-700 px-4 text-white font-medium  rounded-lg hover:bg-green-500 cursor-pointer">Request a Demo</button>
                </div>




            </div>


        </div>
    )
}
export default Pricing