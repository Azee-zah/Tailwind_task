
function Button() {
    return(
        <div className="max-w-md bg-blue-300 p-20 mx-auto my-10 rounded-sm">
            <div className="flex flex-wrap p-5 gap-5">
                <button className="bg-green-800 hover:bg-green-500 rounded-lg px-4 text-white font-medium text-lg">
                    Primary
                </button>

                <button className="bg-white hover:bg-green-200 p-2  rounded-lg   font-medium border-2 border-green-500 text-lg">Secondary</button> 

                <button className="bg-red-800 hover:bg-red-500 p-2 px-4 rounded-lg font-medium text-lg text-red-400 ">Danger</button>

                <button className=" bg-green-800 hover:bg-green-600 p-2 px-4 rounded-lg font-medium text-lg text-green-400 ">Success</button>

                <button className=" bg-blue-800 hover:bg-blue-600 p-2 px-8 rounded-xl font-medium text-xl text-white ">Large</button>

                <button className=" bg-blue-800 hover:bg-green-600 p-2 px-2 rounded-lg font-medium text-lg text-white">Small</button>

            </div>

        </div>
    )
}
export default Button